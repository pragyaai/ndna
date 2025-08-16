// Enhanced Sidebar functionality inspired by shadcn/ui patterns

// Constants
const SIDEBAR_KEYBOARD_SHORTCUT = 'b';
const SIDEBAR_COOKIE_NAME = 'sidebar_state';
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

// Sidebar state management
let sidebarState = {
  open: true,
  isMobile: false,
  isInitialized: false,
  expandedMenus: new Set(['LLM']) // Track which menus are expanded
};

// Initialize sidebar functionality
function initializeSidebar() {
  if (sidebarState.isInitialized) return;
  
  // Check if mobile
  sidebarState.isMobile = window.innerWidth <= 768;
  
  // Load saved state from cookie
  const savedState = getCookie(SIDEBAR_COOKIE_NAME);
  if (savedState !== null) {
    sidebarState.open = savedState === 'true';
  } else {
    // Default to closed on mobile, open on desktop
    sidebarState.open = !sidebarState.isMobile;
  }
  
  // Populate submenu items
  populateSubmenus();
  
  // Apply initial state
  updateSidebarDOM();
  
  // Setup collapsible menu handlers
  setupCollapsibleMenus();
  
  // Add keyboard shortcut
  setupKeyboardShortcut();
  
  // Add resize listener
  window.addEventListener('resize', handleResize);
  
  // Add tooltips to collapsed buttons
  setupTooltips();
  
  // Setup breadcrumb
  updateBreadcrumb();
  
  sidebarState.isInitialized = true;
}

// Populate submenu items from menusByModel
function populateSubmenus() {
  const currentPath = window.location.pathname;
  let currentCategory = 'LLM'; // Default
  
  Object.keys(menusByModel).forEach(model => {
    const submenu = document.getElementById(`${model}-submenu`);
    if (submenu) {
      submenu.innerHTML = '';
      let hasActivePage = false;
      
      menusByModel[model].forEach(item => {
        const submenuItem = document.createElement('div');
        submenuItem.className = 'sidebar-submenu-item';
        
        const link = document.createElement('a');
        link.className = 'sidebar-submenu-button';
        link.href = item.url || '#';
        link.textContent = item.text;
        
        // Check if this is the current page
        const itemPath = (item.url || '#').replace(baseUrl, '');
        const isActive = currentPath === itemPath || (itemPath === '/' && currentPath === '/') || 
                         (itemPath !== '/' && currentPath.startsWith(itemPath));
        
        if (isActive) {
          link.classList.add('active');
          hasActivePage = true;
          currentCategory = model;
          
          // Mark this category as current and expand it
          sidebarState.expandedMenus.add(model);
        }
        
        // Handle special submenu items (Neural Genomics, NLP Operations)
        if (item.text === "Neural Genomics") {
          const hasNestedActive = setupSpecialSubmenu(submenuItem, item, neuralSubmenuItems, 'neural-genomics');
          if (hasNestedActive) {
            hasActivePage = true;
            currentCategory = model;
            sidebarState.expandedMenus.add(model);
          }
        } else if (item.text === "NLP Operations") {
          const hasNestedActive = setupSpecialSubmenu(submenuItem, item, nlpOperationsItems, 'nlp-operations');
          if (hasNestedActive) {
            hasActivePage = true;
            currentCategory = model;
            sidebarState.expandedMenus.add(model);
          }
        } else {
          submenuItem.appendChild(link);
        }
        
        submenu.appendChild(submenuItem);
      });
      
      // Mark the category as current if it has an active page
      if (hasActivePage) {
        const categoryButton = document.querySelector(`[data-view="${model}"]`);
        const categoryItem = categoryButton?.closest('.sidebar-menu-item');
        if (categoryItem) {
          categoryItem.classList.add('current-category');
        }
      }
    }
  });
  
  // Update active category button
  updateActiveMenu(currentCategory);
}

// Setup special submenus with nested items
function setupSpecialSubmenu(container, parentItem, items, basePath) {
  const currentPath = window.location.pathname;
  let hasActiveNested = false;
  
  const mainLink = document.createElement('a');
  mainLink.className = 'sidebar-submenu-button';
  mainLink.href = parentItem.url || '#';
  mainLink.innerHTML = `
    ${parentItem.text}
    <i class="fas fa-chevron-right sidebar-nested-chevron"></i>
  `;
  
  const nestedSubmenu = document.createElement('div');
  nestedSubmenu.className = 'sidebar-nested-submenu';
  
  if (Array.isArray(items)) {
    items.forEach(subItem => {
      const nestedLink = document.createElement('a');
      nestedLink.className = 'sidebar-submenu-button nested';
      
      if (typeof subItem === 'string') {
        if (subItem === "Prelude") {
          nestedLink.href = baseUrl + `/llm/${basePath}/prelude/`;
        } else {
          nestedLink.href = baseUrl + `/llm/${basePath}/${subItem}/`;
        }
        nestedLink.textContent = subItem;
      } else {
        nestedLink.href = subItem.url;
        nestedLink.textContent = subItem.text;
      }
      
      // Check if active
      const itemPath = nestedLink.href.replace(baseUrl, '').replace(window.location.origin, '');
      if (currentPath === itemPath || (itemPath !== '/' && currentPath.startsWith(itemPath))) {
        nestedLink.classList.add('active');
        hasActiveNested = true;
        // Auto-expand the nested menu
        container.classList.add('nested-expanded');
      }
      
      nestedSubmenu.appendChild(nestedLink);
    });
  }
  
  // Check if main link is active
  const mainItemPath = (parentItem.url || '#').replace(baseUrl, '');
  if (currentPath === mainItemPath || (mainItemPath !== '/' && currentPath.startsWith(mainItemPath))) {
    mainLink.classList.add('active');
    hasActiveNested = true;
  }
  
  container.appendChild(mainLink);
  container.appendChild(nestedSubmenu);
  container.classList.add('has-nested');
  
  return hasActiveNested;
}

// Setup collapsible menu functionality
function setupCollapsibleMenus() {
  document.querySelectorAll('.collapsible-trigger').forEach(trigger => {
    const view = trigger.getAttribute('data-view');
    const menuItem = trigger.closest('.sidebar-menu-item');
    
    // Set initial expanded state
    if (sidebarState.expandedMenus.has(view)) {
      menuItem.classList.add('expanded');
    }
    
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu(view, menuItem);
    });
  });
  
  // Handle nested submenu toggles
  document.addEventListener('click', (e) => {
    if (e.target.closest('.sidebar-submenu-button') && e.target.closest('.has-nested')) {
      e.preventDefault();
      const container = e.target.closest('.has-nested');
      container.classList.toggle('nested-expanded');
    }
  });
}

// Toggle menu expansion
function toggleMenu(view, menuItem) {
  const isExpanded = menuItem.classList.contains('expanded');
  
  if (isExpanded) {
    menuItem.classList.remove('expanded');
    sidebarState.expandedMenus.delete(view);
  } else {
    menuItem.classList.add('expanded');
    sidebarState.expandedMenus.add(view);
  }
  
  // Update active state
  updateActiveMenu(view);
  
  // Update breadcrumb
  updateBreadcrumb();
}

// Update active menu state
function updateActiveMenu(view) {
  document.querySelectorAll('.sidebar-menu-button').forEach(button => {
    button.classList.remove('active');
  });
  
  const activeButton = document.querySelector(`[data-view="${view}"]`);
  if (activeButton) {
    activeButton.classList.add('active');
  }
}

// Update breadcrumb navigation
function updateBreadcrumb() {
  const breadcrumb = document.getElementById('breadcrumb');
  if (!breadcrumb) return;
  
  const currentPath = window.location.pathname;
  const breadcrumbItems = [];
  
  // Find current page in menu structure
  Object.keys(menusByModel).forEach(model => {
    menusByModel[model].forEach(item => {
      const itemPath = (item.url || '#').replace(baseUrl, '');
      if (currentPath === itemPath || (itemPath !== '/' && currentPath.startsWith(itemPath))) {
        breadcrumbItems.push({ text: model, url: '#', isCategory: true });
        breadcrumbItems.push({ text: item.text, url: item.url, isCurrent: true });
      }
    });
  });
  
  // Render breadcrumb
  breadcrumb.innerHTML = '';
  breadcrumbItems.forEach((item, index) => {
    const breadcrumbItem = document.createElement('div');
    breadcrumbItem.className = 'breadcrumb-item';
    
    if (index > 0) {
      const separator = document.createElement('span');
      separator.className = 'breadcrumb-separator';
      separator.innerHTML = '<i class="fas fa-chevron-right"></i>';
      breadcrumbItem.appendChild(separator);
    }
    
    if (item.isCurrent) {
      const current = document.createElement('span');
      current.className = 'breadcrumb-current';
      current.textContent = item.text;
      breadcrumbItem.appendChild(current);
    } else {
      const link = document.createElement('a');
      link.className = 'breadcrumb-link';
      link.href = item.url;
      link.textContent = item.text;
      breadcrumbItem.appendChild(link);
    }
    
    breadcrumb.appendChild(breadcrumbItem);
  });
}

// Toggle sidebar function
function toggleSidebar() {
  sidebarState.open = !sidebarState.open;
  updateSidebarDOM();
  saveSidebarState();
}

// Update DOM based on sidebar state
function updateSidebarDOM() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;
  
  if (sidebarState.isMobile) {
    // On mobile, use expanded/collapsed for show/hide
    sidebar.setAttribute('data-state', sidebarState.open ? 'expanded' : 'collapsed');
  } else {
    // On desktop, use expanded/collapsed for width
    sidebar.setAttribute('data-state', sidebarState.open ? 'expanded' : 'collapsed');
  }
  
  // Update trigger button
  const trigger = document.querySelector('.sidebar-trigger');
  if (trigger) {
    const icon = trigger.querySelector('i');
    if (icon) {
      icon.className = sidebarState.open ? 'fas fa-chevron-left' : 'fas fa-chevron-right';
    }
  }
  
  // Dispatch custom event for other components
  window.dispatchEvent(new CustomEvent('sidebarStateChange', {
    detail: { open: sidebarState.open, isMobile: sidebarState.isMobile }
  }));
}

// Setup keyboard shortcut
function setupKeyboardShortcut() {
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === SIDEBAR_KEYBOARD_SHORTCUT) {
      e.preventDefault();
      toggleSidebar();
    }
  });
}

// Handle window resize
function handleResize() {
  const wasMobile = sidebarState.isMobile;
  sidebarState.isMobile = window.innerWidth <= 768;
  
  if (wasMobile !== sidebarState.isMobile) {
    // Device type changed, update state
    if (sidebarState.isMobile) {
      // Switched to mobile, close sidebar by default
      sidebarState.open = false;
    } else {
      // Switched to desktop, open sidebar by default
      sidebarState.open = true;
    }
    updateSidebarDOM();
    saveSidebarState();
  }
}

// Setup tooltips for collapsed buttons
function setupTooltips() {
  const buttons = document.querySelectorAll('.sidebar-menu-button');
  buttons.forEach(button => {
    const label = button.querySelector('.sidebar-label');
    if (label) {
      button.setAttribute('data-tooltip', label.textContent.trim());
    }
  });
}

// Enhanced switchView function with better state management
function switchViewEnhanced(view) {
  // Update active menu
  updateActiveMenu(view);
  
  // Expand the selected menu if not expanded
  const menuItem = document.querySelector(`[data-view="${view}"]`)?.closest('.sidebar-menu-item');
  if (menuItem && !menuItem.classList.contains('expanded')) {
    menuItem.classList.add('expanded');
    sidebarState.expandedMenus.add(view);
  }
  
  // Update breadcrumb
  updateBreadcrumb();
}

// Cookie utilities
function setCookie(name, value, maxAge) {
  document.cookie = `${name}=${value}; path=/; max-age=${maxAge}`;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookieValue = parts.pop().split(';').shift();
    return cookieValue;
  }
  return null;
}

function saveSidebarState() {
  setCookie(SIDEBAR_COOKIE_NAME, sidebarState.open.toString(), SIDEBAR_COOKIE_MAX_AGE);
}

// Hook into existing switchView function
window.switchView = function(view) {
  switchViewEnhanced(view);
};

// Close sidebar on mobile when clicking outside
document.addEventListener('click', (e) => {
  if (sidebarState.isMobile && sidebarState.open) {
    const sidebar = document.getElementById('sidebar');
    const trigger = document.querySelector('.sidebar-trigger');
    
    if (sidebar && !sidebar.contains(e.target) && !trigger?.contains(e.target)) {
      sidebarState.open = false;
      updateSidebarDOM();
      saveSidebarState();
    }
  }
});

// Enhanced accessibility
function setupAccessibility() {
  // Add ARIA labels
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.setAttribute('aria-label', 'Main navigation sidebar');
    sidebar.setAttribute('role', 'navigation');
  }
  
  const trigger = document.querySelector('.sidebar-trigger');
  if (trigger) {
    trigger.setAttribute('aria-label', 'Toggle sidebar');
    trigger.setAttribute('aria-expanded', sidebarState.open.toString());
  }
  
  // Update aria-expanded on state change
  window.addEventListener('sidebarStateChange', (e) => {
    if (trigger) {
      trigger.setAttribute('aria-expanded', e.detail.open.toString());
    }
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initializeSidebar();
    setupAccessibility();
  });
} else {
  initializeSidebar();
  setupAccessibility();
}

// Export functions for global use
window.toggleSidebar = toggleSidebar;
window.sidebarState = sidebarState;

// Toggle sidebar function
function toggleSidebar() {
  sidebarState.open = !sidebarState.open;
  updateSidebarDOM();
  saveSidebarState();
}

// Update DOM based on sidebar state
function updateSidebarDOM() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;
  
  if (sidebarState.isMobile) {
    // On mobile, use expanded/collapsed for show/hide
    sidebar.setAttribute('data-state', sidebarState.open ? 'expanded' : 'collapsed');
  } else {
    // On desktop, use expanded/collapsed for width
    sidebar.setAttribute('data-state', sidebarState.open ? 'expanded' : 'collapsed');
  }
  
  // Update trigger button
  const trigger = document.querySelector('.sidebar-trigger');
  if (trigger) {
    const icon = trigger.querySelector('i');
    if (icon) {
      icon.className = sidebarState.open ? 'fas fa-chevron-left' : 'fas fa-chevron-right';
    }
  }
  
  // Dispatch custom event for other components
  window.dispatchEvent(new CustomEvent('sidebarStateChange', {
    detail: { open: sidebarState.open, isMobile: sidebarState.isMobile }
  }));
}

// Setup keyboard shortcut
function setupKeyboardShortcut() {
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === SIDEBAR_KEYBOARD_SHORTCUT) {
      e.preventDefault();
      toggleSidebar();
    }
  });
}

// Handle window resize
function handleResize() {
  const wasMobile = sidebarState.isMobile;
  sidebarState.isMobile = window.innerWidth <= 768;
  
  if (wasMobile !== sidebarState.isMobile) {
    // Device type changed, update state
    if (sidebarState.isMobile) {
      // Switched to mobile, close sidebar by default
      sidebarState.open = false;
    } else {
      // Switched to desktop, open sidebar by default
      sidebarState.open = true;
    }
    updateSidebarDOM();
    saveSidebarState();
  }
}

// Setup tooltips for collapsed buttons
function setupTooltips() {
  const buttons = document.querySelectorAll('.sidebar-menu-button');
  buttons.forEach(button => {
    const label = button.querySelector('.sidebar-label');
    if (label) {
      button.setAttribute('data-tooltip', label.textContent.trim());
    }
  });
}

// Enhanced switchView function with better state management
function switchViewEnhanced(view) {
  // Update active menu
  updateActiveMenu(view);
  
  // Expand the selected menu if not expanded
  const menuItem = document.querySelector(`[data-view="${view}"]`)?.closest('.sidebar-menu-item');
  if (menuItem && !menuItem.classList.contains('expanded')) {
    menuItem.classList.add('expanded');
    sidebarState.expandedMenus.add(view);
  }
  
  // Update breadcrumb
  updateBreadcrumb();
}

// Cookie utilities
function setCookie(name, value, maxAge) {
  document.cookie = `${name}=${value}; path=/; max-age=${maxAge}`;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookieValue = parts.pop().split(';').shift();
    return cookieValue;
  }
  return null;
}

function saveSidebarState() {
  setCookie(SIDEBAR_COOKIE_NAME, sidebarState.open.toString(), SIDEBAR_COOKIE_MAX_AGE);
}

// Hook into existing switchView function
const originalSwitchView = window.switchView;
window.switchView = function(view) {
  if (typeof originalSwitchView === 'function') {
    originalSwitchView(view);
  }
  switchViewEnhanced(view);
};

// Close sidebar on mobile when clicking outside
document.addEventListener('click', (e) => {
  if (sidebarState.isMobile && sidebarState.open) {
    const sidebar = document.getElementById('sidebar');
    const trigger = document.querySelector('.sidebar-trigger');
    
    if (sidebar && !sidebar.contains(e.target) && !trigger.contains(e.target)) {
      sidebarState.open = false;
      updateSidebarDOM();
      saveSidebarState();
    }
  }
});

// Smooth scroll behavior for sidebar
function smoothScrollToTop() {
  const sidebarContent = document.querySelector('.sidebar-content');
  if (sidebarContent) {
    sidebarContent.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

// Enhanced accessibility
function setupAccessibility() {
  // Add ARIA labels
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.setAttribute('aria-label', 'Main navigation sidebar');
    sidebar.setAttribute('role', 'navigation');
  }
  
  const trigger = document.querySelector('.sidebar-trigger');
  if (trigger) {
    trigger.setAttribute('aria-label', 'Toggle sidebar');
    trigger.setAttribute('aria-expanded', sidebarState.open.toString());
  }
  
  // Update aria-expanded on state change
  window.addEventListener('sidebarStateChange', (e) => {
    if (trigger) {
      trigger.setAttribute('aria-expanded', e.detail.open.toString());
    }
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initializeSidebar();
    setupAccessibility();
  });
} else {
  initializeSidebar();
  setupAccessibility();
}

// Export functions for global use
window.toggleSidebar = toggleSidebar;
window.sidebarState = sidebarState;

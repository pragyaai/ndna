// Get base URL from Jekyll configuration
const baseUrl = document.querySelector('meta[name="base-url"]')?.getAttribute('content') || '';

// Model-specific menus
const menusByModel = {
  LLM: [
    { text: "nDNA", url: baseUrl + "/" },
    { text: "15 LLMs", url: baseUrl + "/llm/15-llms/" },
    { text: "Fine-Tuning", url: baseUrl + "/llm/fine-tuning/" },
    { text: "CIVIC", url: baseUrl + "/llm/civic/" },
    { text: "Cultural nDNA", url: baseUrl + "/llm/cultural-ndna/" },
    { text: "Multilinguality", url: baseUrl + "/llm/multilinguality/" },
    { text: "Alignment", url: baseUrl + "/llm/alignment/" },
    { text: "Quantization", url: baseUrl + "/llm/quantization/" },
    { text: "Pruning", url: baseUrl + "/llm/pruning/" },
    { text: "Model Merging", url: "#" },
    { text: "Model Collapse", url: baseUrl + "/llm/model-collapse/" },
    { text: "Knowledge Distillation", url: baseUrl + "/llm/knowledge-distillation/" },
    { text: "Neural Genomics", url: baseUrl + "/llm/neural-genomics/" },
    { text: "Risk: Latent Manipulation", url: baseUrl + "/llm/latent-manipulation/" },
    { text: "at-a-glance", url: "#" },
    { text: "FAQ", url: "#" }
  ],
  MFM: [
    { text: "nDNA", url: baseUrl + "/" },
    { text: "Multimodal Analysis", url: "#" },
    { text: "Vision-Language", url: "#" },
    { text: "Cross-Modal Alignment", url: "#" }
  ],
  "NLP Operations": [
    { text: "Machine Translation", url: baseUrl + "/nlp/machine-translation/" },
    { text: "Multi-turn Conversation", url: baseUrl + "/nlp/multi-turn-conversation/" },
    { text: "Adversarial Attack", url: baseUrl + "/nlp/adversarial-attack/" }
  ],
  T2I: [
    { text: "nDNA", url: baseUrl + "/" },
    { text: "Text-to-Image", url: "#" },
    { text: "Prompt Engineering", url: "#" },
    { text: "Style Transfer", url: "#" }
  ],
  Diffusion: [
    { text: "nDNA", url: baseUrl + "/" },
    { text: "Diffusion Process", url: "#" },
    { text: "Denoising Analysis", url: "#" },
    { text: "Sampling Methods", url: "#" }
  ],
  EFM: [
    { text: "nDNA", url: baseUrl + "/" },
    { text: "Embodied Learning", url: "#" },
    { text: "Action Planning", url: "#" },
    { text: "Sensorimotor", url: "#" }
  ]
};

const neuralSubmenuItems = ["nHD", "nGDI", "nTDS", "nKaryotyping", "nDIV", "nEPI", "nCCL"];

function renderTopMenu(items) {
  const container = document.getElementById('topMenu');
  container.innerHTML = '';

  items.forEach((item, idx) => {
    const link = document.createElement('a');
    link.href = item.url || '#';
    
    // Check if current page matches this menu item
    const currentPath = window.location.pathname;
    const itemPath = (item.url || '#').replace(baseUrl, '');
    const isActive = currentPath === itemPath || (itemPath === '/' && currentPath === '/') || 
                     (itemPath !== '/' && currentPath.startsWith(itemPath));
    
    link.className = isActive ? 'active' : '';
    link.innerText = item.text || item;

    // Add click handler to update active state
    link.addEventListener('click', (e) => {
      // Remove active class from all menu items
      container.querySelectorAll('a').forEach(menuItem => {
        if (!menuItem.parentElement.classList.contains('submenu')) {
          menuItem.classList.remove('active');
        }
      });
      
      // Add active class to clicked item
      link.classList.add('active');
      
      // Hide all submenus first
      container.querySelectorAll('.submenu').forEach(submenu => {
        submenu.style.display = "none";
      });
    });

    if ((item.text || item) === "Neural Genomics") {
      link.addEventListener('click', () => {
        setTimeout(() => {
          const submenu = document.getElementById("neuralGenomicsSubmenu");
          if (submenu) submenu.style.display = "flex";
        }, 100);
      });
    }


    container.appendChild(link);

    // Always add the submenu HTML for Neural Genomics
    if ((item.text || item) === "Neural Genomics") {
      const submenu = document.createElement('div');
      submenu.className = "submenu";
      submenu.id = "neuralGenomicsSubmenu";
      submenu.style.display = "none"; // Initially hidden

      neuralSubmenuItems.forEach(sub => {
        const subLink = document.createElement('a');
        subLink.href = baseUrl + `/llm/neural-genomics/${sub}/`; 
        subLink.innerText = sub;
        submenu.appendChild(subLink);
      });

      container.appendChild(submenu);
    }

  });
}

function switchView(view) {
  document.querySelectorAll('.side-tab').forEach(el => el.classList.remove('active'));
  const tab = [...document.querySelectorAll('.side-tab')].find(el => el.innerText === view || el.innerText.includes(view));
  if (tab) tab.classList.add('active');
  
  const menu = menusByModel[view] || menusByModel.LLM;
  renderTopMenu(menu);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  switchView("LLM");

  // Auto-show submenu if on /llm/neural-genomics/
  if (window.location.pathname.includes("/llm/neural-genomics")) {
    setTimeout(() => {
      const submenu = document.getElementById("neuralGenomicsSubmenu");
      if (submenu) submenu.style.display = "flex";
    }, 100);
  }

  // Auto-switch to NLP Operations tab if on NLP operations pages
  if (window.location.pathname.includes("/nlp/")) {
    switchView("NLP Operations");
  }
});

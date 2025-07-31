// Get base URL from Jekyll configuration
const baseUrl = document.querySelector('meta[name="base-url"]')?.getAttribute('content') || '';

// Model-specific menus
const menusByModel = {
  LLM: [
    { text: "nDNA", url: baseUrl + "/" },
    { text: "Fine-Tuning", url: baseUrl + "/llm/fine-tuning/" },
    { text: "Cultural nDNA", url: baseUrl + "/llm/cultural-ndna/" },
    { text: "Multilinguality", url: baseUrl + "/llm/multilinguality/" },
    { text: "Alignment", url: baseUrl + "/llm/alignment/" },
    { text: "Quantization", url: baseUrl + "/quantization/" },
    { text: "Pruning", url: baseUrl + "/llm/pruning/" },
    { text: "Model Merging", url: "#" },
    { text: "Model Collapse", url: baseUrl + "/model-collapse/" },
    { text: "Knowledge Distillation", url: "#" },
    { text: "Neural Genomics", url: "#" },
    { text: "Risk: Latent Manipulation", url: "#" },
    { text: "at-a-glance", url: "#" },
    { text: "FAQ", url: "#" }
  ],
  MFM: [
    { text: "nDNA", url: baseUrl + "/" },
    { text: "Multimodal Analysis", url: "#" },
    { text: "Vision-Language", url: "#" },
    { text: "Cross-Modal Alignment", url: "#" }
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

  // Add all tabs to the top bar
  items.forEach((item, idx) => {
    const link = document.createElement('a');
    link.href = item.url || '#';
    link.className = idx === 0 ? 'active' : '';
    link.innerText = item.text || item;

    if ((item.text || item) === "Neural Genomics") {
      link.onclick = function (e) {
        e.preventDefault();
        const submenu = document.getElementById("neuralGenomicsSubmenu");
        submenu.style.display = submenu.style.display === "flex" ? "none" : "flex";
      };
    }

    container.appendChild(link);

    if ((item.text || item) === "Neural Genomics") {
      const submenu = document.createElement('div');
      submenu.className = "submenu";
      submenu.id = "neuralGenomicsSubmenu";

      neuralSubmenuItems.forEach(sub => {
        const subLink = document.createElement('a');
        subLink.href = "#";
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
  
  // Get the appropriate menu for the selected model type
  const menu = menusByModel[view] || menusByModel.LLM;
  renderTopMenu(menu);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  switchView("LLM");
});
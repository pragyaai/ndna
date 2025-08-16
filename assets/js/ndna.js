// Get base URL from Jekyll configuration
const baseUrl = document.querySelector('meta[name="base-url"]')?.getAttribute('content') || '';

// Model-specific menus
const menusByModel = {
  LLM: [
    { text: "Prefatio", url: baseUrl + "/llm/prefatio/" },
    { text: "Admonitio", url: baseUrl + "/llm/admonitio/" },
    { text: "nDNA", url: baseUrl + "/" },
    { text: "15 Foundational LLMs", url: baseUrl + "/llm/15-llms/" },
    { text: "Cultural nDNA", url: baseUrl + "/llm/cultural-ndna/" },
    { text: "CIVIC", url: baseUrl + "/llm/civic/" },
    { text: "Multilinguality", url: baseUrl + "/llm/multilinguality/" },
    { text: "Alignment", url: baseUrl + "/llm/alignment/" },
    { text: "Quantization", url: baseUrl + "/llm/quantization/" },
    { text: "Model Merging", url: baseUrl + "/llm/model-merging/" },
    { text: "Model Collapse", url: baseUrl + "/llm/model-collapse/" },
    { text: "Knowledge Distillation", url: baseUrl + "/llm/knowledge-distillation/" },
    { text: "Neural Genomics", url: baseUrl + "/llm/neural-genomics/prelude/" },
    { text: "Risk: Latent Manipulation", url: baseUrl + "/llm/latent-manipulation/" },
    { text: "NLP Operations", url: baseUrl + "/llm/nlp-operations/prelude/" },
    { text: "at-a-glance", url: baseUrl + "/llm/at_a_glance/" },
    { text: "FAQ", url: baseUrl + "/llm/FAQ/" }
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

const neuralSubmenuItems = ["Prelude", "nHD", "nGDI", "nTDS", "nKaryotyping", "nDIV", "nEPI", "nCCL"];

const nlpOperationsItems = [
  { text: "Prelude", url: baseUrl + "/llm/nlp-operations/prelude/" },
  { text: "Machine Translation", url: baseUrl + "/llm/nlp-operations/machine-translation/" },
  { text: "Adversarial Attack", url: baseUrl + "/llm/nlp-operations/adversarial-attack/" },
  { text: "Multi-turn Conversation", url: baseUrl + "/llm/nlp-operations/multi-turn-conversation/" },
  { text: "SCAR", url: baseUrl + "/llm/nlp-operations/scar/" },
  { text: "NEPHOS", url: baseUrl + "/llm/nlp-operations/nephos/" },
];

function renderTopMenu(items) {
  // Legacy function - navigation now handled by sidebar
  return;
}

function switchView(view) {
  // Legacy function - now handled by enhanced sidebar
  return;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Legacy initialization - now handled by enhanced sidebar
  
  // Auto-detect current category based on URL
  const currentPath = window.location.pathname;
  
  if (currentPath.includes("/llm/")) {
    // LLM category is handled by the enhanced sidebar
    return;
  }
  
  // Default to LLM if no specific category detected
  // Enhanced sidebar will handle the initialization
});

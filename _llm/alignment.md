---
layout: page
title: Alignment
permalink: /llm/alignment/
---

# Alignment

**nDNA** provides quantitative methods for measuring and monitoring AI alignment, offering deep insights into how models internalize human values and behavioral constraints through three core metrics:

- **Spectral Curvature** (κₗ): Behavioral instability and reasoning path deviations  
- **Thermodynamic Length** (Lₗ): Computational effort required for value integration  
- **Belief Vector Strength**: Magnitude of alignment steering effects

## Cultural Models and DPO Alignment

### The LITMUS Dataset

Using 10,000 curated prompts (5,000 safe, 5,000 unsafe), Direct Preference Optimization (DPO) can be applied to culturally-specific models while preserving **regional identity**.

## Regional nDNA Signatures

<div style="background: #fff7fa; border-left: 4px solid #e91e63; padding: 14px 18px; margin: 32px 0 18px 0; border-radius: 6px; font-size: 1.05em;">
  <b>Tip:</b> <i>Click on any visualization below to expand it.</i>
</div>

<style>
.gif-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 24px;
    margin: 30px 0;
}

.gif-item {
    text-align: center;
}

.gif-item img {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.08);
    cursor: pointer;
    transition: transform 0.2s ease;
}

.gif-item img:hover {
    transform: scale(1.02);
}

.gif-item p {
    margin-top: 8px;
    font-weight: 500;
}

.gif-item .metrics {
    margin-top: 4px;
    font-size: 0.9em;
    color: #666;
}

/* Modal Styles */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.9);
    animation: fadeIn 0.3s ease;
}

.modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 90%;
    max-height: 90%;
    text-align: center;
}

.modal img {
    max-width: 100%;
    max-height: 80vh;
    border-radius: 8px;
}

.modal-title {
    color: white;
    margin-top: 15px;
    font-size: 1.2em;
    font-weight: 500;
}

.close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
    z-index: 1001;
}

.close:hover {
    opacity: 0.7;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
</style>

<div class="gif-grid">
  <div class="gif-item">
    <img src="assets/gifs/collapse/africa_dpo_rotation.gif" alt="Africa DPO Rotation nDNA" onclick="openModal('assets/gifs/collapse/africa_dpo_rotation.gif', 'Africa DPO Rotation')">
    <p>Africa</p>
    <p class="metrics">κₗ: 0.85 → 0.75, Lₗ: 0.9 → 0.8</p>
  </div>
  
  <div class="gif-item">
    <img src="assets/gifs/collapse/asia_dpo_rotation.gif" alt="Asia DPO Rotation nDNA" onclick="openModal('assets/gifs/collapse/asia_dpo_rotation.gif', 'Asia DPO Rotation')">
    <p>Asia</p>
    <p class="metrics">κₗ reduced by ~10%, smoothing epistemic manifolds</p>
  </div>
  
  <div class="gif-item">
    <img src="assets/gifs/collapse/china_dpo_rotation.gif" alt="China DPO Rotation nDNA" onclick="openModal('assets/gifs/collapse/china_dpo_rotation.gif', 'China DPO Rotation')">
    <p>China</p>
    <p class="metrics">κₗ: >0.9 → 0.8, Significant latent reorientation</p>
  </div>
  
  <div class="gif-item">
    <img src="assets/gifs/collapse/latinamerica_dpo_rotation.gif" alt="Latin America DPO Rotation nDNA" onclick="openModal('assets/gifs/collapse/latinamerica_dpo_rotation.gif', 'Latin America DPO Rotation')">
    <p>Latin America</p>
    <p class="metrics">κₗ: 0.7 → 0.6</p>
  </div>
  
  <div class="gif-item">
    <img src="assets/gifs/collapse/middleeast_dpo_rotation.gif" alt="Middle East DPO Rotation nDNA" onclick="openModal('assets/gifs/collapse/middleeast_dpo_rotation.gif', 'Middle East DPO Rotation')">
    <p>Middle East</p>
    <p class="metrics">8-12% reduction in both κₗ and Lₗ</p>
  </div>
  
  <div class="gif-item">
    <img src="assets/gifs/collapse/europe_dpo_rotation.gif" alt="Europe DPO Rotation nDNA" onclick="openModal('assets/gifs/collapse/europe_dpo_rotation.gif', 'Europe DPO Rotation')">
    <p>Europe</p>
    <p class="metrics">κₗ: 0.4 → 0.5, Confirms alignment stability</p>
  </div>
  
  <div class="gif-item">
    <img src="assets/gifs/collapse/northamerica_dpo_rotation.gif" alt="North America DPO Rotation nDNA" onclick="openModal('assets/gifs/collapse/northamerica_dpo_rotation.gif', 'North America DPO Rotation')">
    <p>North America</p>
    <p class="metrics">Remains within pretrained epistemic manifold</p>
  </div>
  
  <div class="gif-item">
    <img src="assets/gifs/collapse/australia_dpo_rotation.gif" alt="Australia DPO Rotation nDNA" onclick="openModal('assets/gifs/collapse/australia_dpo_rotation.gif', 'Australia DPO Rotation')">
    <p>Australia</p>
    <p class="metrics">κₗ: 0.42 → 0.55, Minimal reconfiguration</p>
  </div>
  
  <div class="gif-item">
    <img src="assets/gifs/collapse/llama_dpo_rotation.gif" alt="LLaMA DPO Rotation nDNA" onclick="openModal('assets/gifs/collapse/llama_dpo_rotation.gif', 'LLaMA DPO Rotation')">
    <p>LLaMA</p>
    <p class="metrics">Moderate, stable alignment characteristics</p>
  </div>
</div>

<!-- Modal -->
<div id="imageModal" class="modal" onclick="closeModal()">
  <span class="close" onclick="closeModal()">&times;</span>
  <div class="modal-content">
    <img id="modalImage" src="" alt="">
    <div id="modalTitle" class="modal-title"></div>
  </div>
</div>

<script>
function openModal(imageSrc, title) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    
    modal.style.display = 'block';
    modalImg.src = imageSrc;
    modalTitle.textContent = title;
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Close modal when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
</script>

### Global Alignment Patterns

<div style="text-align: center; margin: 30px 0;">
  <img src="assets/gifs/collapse/ndna_dpo_rotation.gif" alt="Global nDNA Trajectories" style="max-width: 600px; width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08); cursor: pointer;" onclick="openModal('assets/gifs/collapse/ndna_dpo_rotation.gif', 'Global nDNA Trajectories')">
  <p style="margin-top: 8px; font-weight: 500;">Global nDNA Trajectories</p>
</div>

## DPO: Steering Without Understanding

nDNA shows that **Direct Preference Optimization (DPO)**:

- Does **not alter model knowledge**
- Applies **directional nudges** in activation space via:

**Linear Logit Geometry**: Projection onto preference vectors  
**Uniform Steering**: Global behavioral alignment via consistent shifts  
**Symmetric Actuation**: Shallow translation without conceptual restructuring

## Alignment Detection

### Value Integration Patterns

Properly aligned models exhibit:

- **Stable Belief Vectors** — Directional consistency with human values  
- **Controlled Curvature** — Smooth representational changes avoiding harmful paths  
- **Balanced Thermodynamics** — Reasonable effort for ethical reasoning

### Misalignment Detection

**Early warning signs** of drift or deception:

- **Divergent Belief Vectors** — Misalignment with intended direction  
- **Anomalous Curvature** — Sharp transitions indicating brittle reasoning  
- **Thermodynamic Spikes** — High effort in ethically ambiguous queries

## Safety Applications

### Jailbreak Resistance

To detect/prevent adversarial bypass:

- Monitor belief vector stability under attacks  
- Flag curvature anomalies enabling jailbreaks  
- Track effort surges tied to unsafe outputs

### Alignment Faking Detection

To uncover **deceptive compliance**:

- Compare stated output vs internal belief vectors  
- Look for curvature inconsistencies  
- Analyze energy cost during ethical evaluations

### Null-Space Steering

**Minimal-intervention safety fine-tuning:**

<p style="text-align: center; font-size: 1.2em;">
  <strong>ΔW</strong> = <strong>ΔW<sub>A</sub></strong> + <strong>ΔW<sub>T</sub></strong>
</p>

- **ΔW<sub>A</sub>**: Alignment-Critical (tight safety regularization)
- **ΔW<sub>T</sub>**: Task-Specific (flexible, capability-oriented)

## RLHF and Constitutional AI

### RLHF Analysis

nDNA metrics show how **Reinforcement Learning from Human Feedback (RLHF)**:

- Reshapes latent value systems  
- Targets specific model layers  
- Evaluates long-term alignment retention

### Constitutional AI Signatures

Constitutionally guided models show:

- **Hierarchical Belief Structures** — Encoding tiered ethical frameworks  
- **Predictable Curvature Shifts** — Near sensitive moral boundaries  
- **Reduced Thermodynamic Variability** — Consistent ethical reasoning load

## Optimization Strategies

### Training Guidance

- Target optimal layers and epochs  
- Maintain tradeoff between alignment and performance  
- Avoid over-alignment or generalization loss

### Architecture Design

- Enable **stable belief propagation**  
- Promote **smooth curvature gradients**  
- Optimize for **thermodynamic efficiency** in value-aligned reasoning

## Future Directions

- **Real-time alignment monitors** in deployment  
- **Degradation predictors** for value drift  
- **Automated safety optimization pipelines**  
- **Cultural alignment preservation** in multi-lingual/cross-cultural settings

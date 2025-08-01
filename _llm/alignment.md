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
  <b>Tip:</b> <i>Click on any visualization below to expand it. Click outside the image or press DELETE to close.</i>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(330px, 1fr)); gap: 24px; margin: 30px 0;">
  <div style="text-align: center;">
    <a href="{{ '/assets/gifs/alignment/africa_ndna_final.gif' | relative_url }}" data-lightbox="gallery" data-title="Africa">
      <img src="{{ '/assets/gifs/alignment/africa_ndna_final.gif' | relative_url }}" alt="Africa Alignment nDNA" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
    </a>
    <p style="margin-top: 8px; font-weight: 500;">Africa</p>
    <p style="margin-top: 4px; font-size: 0.9em; color: #666;">κₗ: 0.85 → 0.75, Lₗ: 0.9 → 0.8</p>
  </div>
  
  <div style="text-align: center;">
    <a href="{{ '/assets/gifs/alignment/asia_ndna_collapse.gif' | relative_url }}" data-lightbox="gallery" data-title="Asia">
      <img src="{{ '/assets/gifs/alignment/asia_ndna_collapse.gif' | relative_url }}" alt="Asia Alignment nDNA" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
    </a>
    <p style="margin-top: 8px; font-weight: 500;">Asia</p>
    <p style="margin-top: 4px; font-size: 0.9em; color: #666;">κₗ reduced by ~10%, smoothing epistemic manifolds</p>
  </div>
  
  <div style="text-align: center;">
    <a href="{{ '/assets/gifs/alignment/china_ndna_final.gif' | relative_url }}" data-lightbox="gallery" data-title="China">
      <img src="{{ '/assets/gifs/alignment/china_ndna_final.gif' | relative_url }}" alt="China Alignment nDNA" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
    </a>
    <p style="margin-top: 8px; font-weight: 500;">China</p>
    <p style="margin-top: 4px; font-size: 0.9em; color: #666;">κₗ: >0.9 → 0.8, Significant latent reorientation</p>
  </div>
  
  <div style="text-align: center;">
    <a href="{{ '/assets/gifs/alignment/latinamerica.gif' | relative_url }}" data-lightbox="gallery" data-title="Latin America">
      <img src="{{ '/assets/gifs/alignment/latinamerica.gif' | relative_url }}" alt="Latin America Alignment nDNA" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
    </a>
    <p style="margin-top: 8px; font-weight: 500;">Latin America</p>
    <p style="margin-top: 4px; font-size: 0.9em; color: #666;">κₗ: 0.7 → 0.6</p>
  </div>
  
  <div style="text-align: center;">
    <a href="{{ '/assets/gifs/alignment/middleeast_ndna_final.gif' | relative_url }}" data-lightbox="gallery" data-title="Middle East">
      <img src="{{ '/assets/gifs/alignment/middleeast_ndna_final.gif' | relative_url }}" alt="Middle East Alignment nDNA" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
    </a>
    <p style="margin-top: 8px; font-weight: 500;">Middle East</p>
    <p style="margin-top: 4px; font-size: 0.9em; color: #666;">8-12% reduction in both κₗ and Lₗ</p>
  </div>
  
  <div style="text-align: center;">
    <a href="{{ '/assets/gifs/alignment/europe_ndna_collapse_FINAL.gif' | relative_url }}" data-lightbox="gallery" data-title="Europe">
      <img src="{{ '/assets/gifs/alignment/europe_ndna_collapse_FINAL.gif' | relative_url }}" alt="Europe Alignment nDNA" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
    </a>
    <p style="margin-top: 8px; font-weight: 500;">Europe</p>
    <p style="margin-top: 4px; font-size: 0.9em; color: #666;">κₗ: 0.4 → 0.5, Confirms alignment stability</p>
  </div>
  
  <div style="text-align: center;">
    <a href="{{ '/assets/gifs/alignment/northamerica_ndna_collapse_FINAL.gif' | relative_url }}" data-lightbox="gallery" data-title="North America">
      <img src="{{ '/assets/gifs/alignment/northamerica_ndna_collapse_FINAL.gif' | relative_url }}" alt="North America Alignment nDNA" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
    </a>
    <p style="margin-top: 8px; font-weight: 500;">North America</p>
    <p style="margin-top: 4px; font-size: 0.9em; color: #666;">Remains within pretrained epistemic manifold</p>
  </div>
  
  <div style="text-align: center;">
    <a href="{{ '/assets/gifs/alignment/northamerica_ndna_collapse_FINAL.gif' | relative_url }}" data-lightbox="gallery" data-title="Australia">
      <img src="{{ '/assets/gifs/alignment/northamerica_ndna_collapse_FINAL.gif' | relative_url }}" alt="Australia Alignment nDNA" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
    </a>
    <p style="margin-top: 8px; font-weight: 500;">Australia</p>
    <p style="margin-top: 4px; font-size: 0.9em; color: #666;">κₗ: 0.42 → 0.55, Minimal reconfiguration</p>
  </div>
  
  <div style="text-align: center;">
    <a href="{{ '/assets/gifs/alignment/llama_collapse_v2_1.gif' | relative_url }}" data-lightbox="gallery" data-title="LLaMA">
      <img src="{{ '/assets/gifs/alignment/llama_collapse_v2_1.gif' | relative_url }}" alt="LLaMA Alignment nDNA" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
    </a>
    <p style="margin-top: 8px; font-weight: 500;">LLaMA</p>
    <p style="margin-top: 4px; font-size: 0.9em; color: #666;">Moderate, stable alignment characteristics</p>
  </div>
</div>

### Global Alignment Patterns

<div style="text-align: center; margin: 30px 0;">
  <a href="{{ '/assets/gifs/alignment/belief_vector_field_side_by_side_refined.gif' | relative_url }}" data-lightbox="gallery" data-title="Global nDNA Trajectories">
    <img src="{{ '/assets/gifs/alignment/belief_vector_field_side_by_side_refined.gif' | relative_url }}" alt="Global nDNA Trajectories" style="max-width: 600px; width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
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

<h3>Null-Space Steering</h3>

<p><strong>Minimal-intervention safety fine-tuning:</strong></p>

<p style="text-align: center;">
  $$\Delta W = \Delta W_A + \Delta W_T$$
</p>

<ul>
  <li><strong>ΔW<sub>A</sub></strong>: Alignment-Critical (tight safety regularization)</li>
  <li><strong>ΔW<sub>T</sub></strong>: Task-Specific (flexible, capability-oriented)</li>
</ul>


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

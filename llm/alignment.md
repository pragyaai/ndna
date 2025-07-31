
---
layout: page
title: Alignment
permalink: /llm/alignment/
---

# Alignment

## Overview

nDNA provides quantitative methods for measuring and monitoring AI alignment, offering unprecedented insights into how models internalize human values and behavioral constraints through three core metrics:

- **Spectral Curvature (κℓ)** — Behavioral instability and reasoning path deviations  
- **Thermodynamic Length (Lℓ)** — Computational effort required for value integration  
- **Belief Vector Strength** — Magnitude of alignment steering effects

![Safety fine-tuning geometric visualization](path/to/figure13.gif)

---

## Cultural Models and DPO Alignment

### The LITMUS Dataset

Using 10,000 curated prompts (5,000 safe, 5,000 unsafe), we can apply Direct Preference Optimization to culturally-specific models while preserving regional characteristics.

---

### Regional nDNA Signatures

#### High-Curvature Regions  
These regions show dramatic reconfiguration under DPO:

**Africa**  
κℓ: 0.85 → 0.75, Lℓ: 0.9 → 0.8  
![Africa: Base vs DPO-aligned](https://github.com/pragyaai/ndna/blob/main/assets/gifs/alignment/africa_ndna_final.gif)

**Asia**  
κℓ reduced by ~10%, smoothing epistemic manifolds  
![Asia: Base vs DPO-aligned](https://github.com/pragyaai/ndna/blob/main/assets/gifs/alignment/asia_ndna_collapse.gif)

**China**  
κℓ: >0.9 → 0.8, significant latent reorientation  
![China: Base vs DPO-aligned](https://github.com/pragyaai/ndna/blob/main/assets/gifs/alignment/china_ndna_final.gif)

---

#### Moderate-Strain Regions  
These regions display controlled compression:

**Latin America**  
κℓ: 0.7 → 0.6, preserving regional identity  
![Latin America: Base vs DPO-aligned](https://github.com/pragyaai/ndna/blob/main/assets/gifs/alignment/latinamerica.gif)

**Middle East**  
8–12% reduction in curvature and length  
![Middle East: Base vs DPO-aligned](https://github.com/pragyaai/ndna/blob/main/assets/gifs/alignment/middleeast_ndna_final.gif)

---

#### Low-Strain Regions  
These regions maintain stable geometry:

**Europe**  
κℓ: 0.4–0.5, confirming alignment stability  
![Europe: Base vs DPO-aligned](https://github.com/pragyaai/ndna/blob/main/assets/gifs/alignment/europe_ndna_collapse_FINAL.gif)

**North America**  
Remains within pretraining manifold  
![North America: Base vs DPO-aligned](https://github.com/pragyaai/ndna/blob/main/assets/gifs/alignment/northamerica_ndna_collapse_FINAL.gif)

**Australia**  
Minimal reconfiguration, κℓ: 0.42–0.55  
![Australia: Base vs DPO-aligned](https://github.com/pragyaai/ndna/blob/main/assets/gifs/alignment/northamerica_ndna_collapse_FINAL.gif)

---

#### Generic Models

**LLaMA**  
Moderate, stable alignment characteristics  
![LLaMA: Base vs DPO-aligned](https://github.com/pragyaai/ndna/blob/main/assets/gifs/alignment/llama_collapse_v2_1.gif)

---

### Global Alignment Patterns

![All Cultural nDNA Trajectories](https://github.com/pragyaai/ndna/blob/main/assets/gifs/alignment/belief_vector_field_side_by_side_refined.gif)

---

## DPO: Steering Without Understanding

nDNA reveals that Direct Preference Optimization (DPO) does **not alter model knowledge**, but instead applies **directional nudges** in activation space through:

- **Linear Logit Geometry** — Projection onto preference vectors  
- **Uniform Steering** — Global behavioral alignment via consistent shifts  
- **Symmetric Actuation** — Shallow translation rather than conceptual restructuring

----

## Alignment Detection

### Value Integration Patterns

Properly aligned models exhibit:

- **Stable Belief Vectors** — Consistent directional alignment with human values  
- **Controlled Curvature** — Smooth representational changes that avoid harmful paths  
- **Balanced Thermodynamics** — Reasonable computational effort for ethical reasoning

---

### Misalignment Detection

**Early warning signs of value drift or deceptive behavior include:**

- **Divergent Belief Vectors** — Alignment direction deviates from intended objectives  
- **Anomalous Curvature** — Sharp representational transitions, suggesting brittle reasoning  
- **Thermodynamic Anomalies** — Spikes in effort associated with harmful or ambiguous queries

---

## Safety Applications

### Jailbreak Resistance

To detect and prevent behavioral bypasses:

- Monitor belief vector stability under adversarial inputs  
- Identify curvature anomalies that could enable jailbreaks  
- Track thermodynamic spikes linked to unsafe reasoning patterns

---

### Alignment Faking Detection

To uncover deceptive compliance:

- Compare stated outputs vs internal belief vectors  
- Detect curvature inconsistencies indicating strategic deception  
- Analyze processing effort during ethical decision-making

---

### Null-Space Steering

A minimal-intervention approach to safety fine-tuning, based on parameter decomposition:

- **ΔW_A (Alignment-Critical Component)** — Preserves safety constraints with tight regularization  
- **ΔW_T (Task-Specific Component)** — Allows flexibility for continual capability learning

---

## RLHF and Constitutional AI

### RLHF Analysis

nDNA metrics illuminate how Reinforcement Learning from Human Feedback impacts internal model structure:

- Tracks how human preferences reshape latent value systems  
- Identifies model layers most affected by alignment processes  
- Evaluates the long-term stability of alignment shifts

---

### Constitutional AI Signatures

Constitutionally guided models exhibit:

- **Hierarchical Belief Structures** — Encoding multi-tier ethical principles  
- **Predictable Curvature Transitions** — Especially around sensitive moral decision points  
- **Reduced Thermodynamic Variability** — More consistent reasoning effort across ethical contexts

---

## Optimization Strategies

### Training Guidance

- Pinpoint optimal intervention layers and epochs  
- Balance alignment with performance retention  
- Monitor for signs of over-alignment or degradation in generalization

---

### Architecture Design

- Design for **stable belief vector propagation**  
- Encourage **smooth curvature gradients** between layers  
- Maximize **thermodynamic efficiency** for value-based reasoning

---

## Future Directions

- **Real-time alignment monitors** for live inference pipelines  
- **Predictive modeling of degradation** in safety alignment  
- **Automated optimization frameworks** for value-system tuning  
- **Cultural alignment preservation** in multilingual and cross-regional models


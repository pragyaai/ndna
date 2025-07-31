
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

nDNA reveals that DPO doesn't change what models know—it applies directional nudges in activation space through:

- **Linear Logit Geometry** — Projection onto preference vectors  
- **Uniform Steering** — Global behavioral alignment via consistent shifts  
- **Symmetric Actuation** — Shallow translation rather than conceptual restructuring  

![Geometric Interpretation of DPO](path/to/dpo_geometric_interpretation.gif)

---

## Alignment Detection

### Value Integration Patterns

Aligned models show:

- **Stable Belief Vectors** — Consistent directional alignment with human values  
- **Controlled Curvature** — Smooth representational changes avoiding harmful paths  
- **Balanced Thermodynamics** — Appropriate computational effort for ethical reasoning

---

### Misalignment Detection

Early warning signs:

- **Divergent Belief Vectors** — Values drifting from intended alignment  
- **Anomalous Curvature** — Sharp changes indicating deceptive reasoning  
- **Thermodynamic Anomalies** — Unusual processing patterns for ethical scenarios

---

## Safety Applications

### Jailbreak Resistance

- Monitor belief vector stability under adversarial inputs  
- Detect curvature anomalies indicating potential bypasses  
- Track thermodynamic spikes suggesting harmful reasoning activation

### Alignment Faking Detection

- Belief vector inconsistencies between stated and internal values  
- Curvature anomalies suggesting strategic deception  
- Computational effort mismatches in ethical reasoning

### Null-Space Steering

Safety fine-tuning through minimal weight modifications:

- **Alignment-Critical Component (ΔW_A)** — Tightly regularized safety preservation  
- **Task-Specific Component (ΔW_T)** — Flexible continual learning support

---

## RLHF and Constitutional AI

### RLHF Analysis

nDNA tracking reveals:

- How human preferences reshape internal value systems  
- Which layers are most affected by alignment training  
- Stability of alignment changes over time

### Constitutional AI Signatures

- Hierarchical belief vector structures reflecting constitutional principles  
- Predictable curvature patterns around ethical decision points  
- Reduced thermodynamic variability in moral reasoning

---

## Optimization

### Training Guidance

- Identify optimal intervention points  
- Balance alignment objectives with capability preservation  
- Monitor for over-alignment or capability degradation

### Architecture Design

- Promote stable belief vector representations  
- Encourage smooth curvature transitions  
- Optimize thermodynamic efficiency for value-based reasoning

---

## Future Directions

- Real-time alignment monitoring systems  
- Predictive models for alignment degradation  
- Automated alignment optimization frameworks  
- Cultural alignment preservation techniques

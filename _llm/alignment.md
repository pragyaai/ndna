---
layout: page
title: Alignment
permalink: /llm/alignment/
---

# Alignment

## Overview

**nDNA** provides quantitative methods for measuring and monitoring AI alignment, offering deep insights into how models internalize human values and behavioral constraints through three core metrics:

- **Spectral Curvature** (κₗ): Behavioral instability and reasoning path deviations  
- **Thermodynamic Length** (Lₗ): Computational effort required for value integration  
- **Belief Vector Strength**: Magnitude of alignment steering effects

---

## Cultural Models and DPO Alignment

### The LITMUS Dataset

Using 10,000 curated prompts (5,000 safe, 5,000 unsafe), Direct Preference Optimization (DPO) can be applied to culturally-specific models while preserving **regional identity**.

---

### Regional nDNA Signatures

#### High-Curvature Regions

### **Africa**
$$
\kappa_\ell: 0.85 \rightarrow 0.75, \quad L_\ell: 0.9 \rightarrow 0.8
$$

<img src="../assets/gifs/alignment/africa_ndna_final.gif" alt="Africa" width="400"/>

---

### **Asia**
$$
\kappa_\ell \text{ reduced by approximately } 10\% \text{, smoothing epistemic manifolds}
$$

<img src="../assets/gifs/alignment/asia_ndna_collapse.gif" alt="Asia" width="400"/>

---

### **China**
$$
\kappa_\ell: > 0.9 \rightarrow 0.8
$$

**Significant latent reorientation**  
<img src="../assets/gifs/alignment/china_ndna_final.gif" alt="China" width="400"/>

---

## **Moderate-Strain Regions**

### **Latin America**
$$
\kappa_\ell: 0.7 \rightarrow 0.6
$$

<img src="../assets/gifs/alignment/latinamerica.gif" alt="Latin America" width="400"/>

---

### **Middle East**
$$
\text{8--12\% reduction in both } \kappa_\ell \text{ and } L_\ell
$$

<img src="../assets/gifs/alignment/middleeast_ndna_final.gif" alt="Middle East" width="400"/>

---

## **Low-Strain Regions**

### **Europe**
$$
\kappa_\ell: 0.4 \rightarrow 0.5
$$

**Confirms alignment stability**  
<img src="../assets/gifs/alignment/europe_ndna_collapse_FINAL.gif" alt="Europe" width="400"/>

---

### **North America**
$$
\text{Remains within pretrained epistemic manifold}
$$

<img src="../assets/gifs/alignment/northamerica_ndna_collapse_FINAL.gif" alt="North America" width="400"/>

---

### **Australia**
$$
\kappa_\ell: 0.42 \rightarrow 0.55
$$

**Minimal reconfiguration**  
<img src="../assets/gifs/alignment/northamerica_ndna_collapse_FINAL.gif" alt="Australia" width="400"/>

---

#### Generic Models

**LLaMA**  
Moderate, stable alignment characteristics  
<img src="../assets/gifs/alignment/llama_collapse_v2_1.gif" alt="LLaMA" width="400"/>

---

### Global Alignment Patterns

<img src="../assets/gifs/alignment/belief_vector_field_side_by_side_refined.gif" alt="Global nDNA Trajectories" width="600"/>

---

## DPO: Steering Without Understanding

nDNA shows that **Direct Preference Optimization (DPO)**:

- Does **not alter model knowledge**
- Applies **directional nudges** in activation space via:

$$
\begin{aligned}
\textbf{Linear Logit Geometry:} &\quad \text{Projection onto preference vectors} \\
\textbf{Uniform Steering:} &\quad \text{Global behavioral alignment via consistent shifts} \\
\textbf{Symmetric Actuation:} &\quad \text{Shallow translation without conceptual restructuring}
\end{aligned}
$$

---

## Alignment Detection

### Value Integration Patterns

Properly aligned models exhibit:

- **Stable Belief Vectors** — Directional consistency with human values  
- **Controlled Curvature** — Smooth representational changes avoiding harmful paths  
- **Balanced Thermodynamics** — Reasonable effort for ethical reasoning

---

### Misalignment Detection

**Early warning signs** of drift or deception:

- **Divergent Belief Vectors** — Misalignment with intended direction  
- **Anomalous Curvature** — Sharp transitions indicating brittle reasoning  
- **Thermodynamic Spikes** — High effort in ethically ambiguous queries

---

## Safety Applications

### Jailbreak Resistance

To detect/prevent adversarial bypass:

- Monitor belief vector stability under attacks  
- Flag curvature anomalies enabling jailbreaks  
- Track effort surges tied to unsafe outputs

---

### Alignment Faking Detection

To uncover **deceptive compliance**:

- Compare stated output vs internal belief vectors  
- Look for curvature inconsistencies  
- Analyze energy cost during ethical evaluations

---

### Null-Space Steering

Minimal-intervention safety fine-tuning:

$$
\begin{aligned}
\Delta W &= \Delta W_A + \Delta W_T \\
\Delta W_A &: \text{Alignment-Critical (tight safety regularization)} \\
\Delta W_T &: \text{Task-Specific (flexible, capability-oriented)}
\end{aligned}
$$

---

## RLHF and Constitutional AI

### RLHF Analysis

nDNA metrics show how **Reinforcement Learning from Human Feedback (RLHF)**:

- Reshapes latent value systems  
- Targets specific model layers  
- Evaluates long-term alignment retention

---

### Constitutional AI Signatures

Constitutionally guided models show:

- **Hierarchical Belief Structures** — Encoding tiered ethical frameworks  
- **Predictable Curvature Shifts** — Near sensitive moral boundaries  
- **Reduced Thermodynamic Variability** — Consistent ethical reasoning load

---

## Optimization Strategies

### Training Guidance

- Target optimal layers and epochs  
- Maintain tradeoff between alignment and performance  
- Avoid over-alignment or generalization loss

---

### Architecture Design

- Enable **stable belief propagation**  
- Promote **smooth curvature gradients**  
- Optimize for **thermodynamic efficiency** in value-aligned reasoning

---

## Future Directions

- **Real-time alignment monitors** in deployment  
- **Degradation predictors** for value drift  
- **Automated safety optimization pipelines**  
- **Cultural alignment preservation** in multi-lingual/cross-cultural settings




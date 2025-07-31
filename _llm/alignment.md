---
layout: page
title: Alignment
permalink: /llm/alignment/
---

AI Alignment and nDNA
Measuring Alignment Through nDNA
nDNA provides quantitative methods for measuring and monitoring AI alignment, offering unprecedented insights into how models internalize human values and behavioral constraints through three core metrics:

Spectral Curvature (κℓ): Behavioral instability and reasoning path deviations
Thermodynamic Length (Lℓ): Computational effort required for value integration
Belief Vector Strength: Magnitude of alignment steering effects

[Space for Figure 13: Safety fine-tuning geometric visualization]
Cultural Models and DPO Alignment
The LITMUS Dataset
Using 10,000 curated prompts (5,000 safe, 5,000 unsafe), we can apply Direct Preference Optimization to culturally-specific models while preserving regional characteristics.
Regional nDNA Signatures
High-Curvature Regions: Show dramatic reconfiguration under DPO

Africa: κℓ: 0.85→0.75, Lℓ: 0.9→0.8
Asia: κℓ reduced by ~10%, smoothing epistemic manifolds
China: κℓ: >0.9→0.8, significant latent reorientation

[Space for Africa: Base vs DPO-aligned nDNA trajectory GIF]
[Space for Asia: Base vs DPO-aligned nDNA trajectory GIF]
[Space for China: Base vs DPO-aligned nDNA trajectory GIF]
Moderate-Strain Regions: Display controlled compression

Latin America: κℓ: 0.7→0.6, preserving regional identity
Middle East: 8-12% reduction in curvature and length

[Space for Latin America: Base vs DPO-aligned nDNA trajectory GIF]
[Space for Middle East: Base vs DPO-aligned nDNA trajectory GIF]
Low-Strain Regions: Maintain stable geometry

Europe: κℓ: 0.4-0.5, confirming alignment stability
North America: Remains within pretraining manifold
Australia: Minimal reconfiguration, κℓ: 0.42-0.55

[Space for Europe: Base vs DPO-aligned nDNA trajectory GIF]
[Space for North America: Base vs DPO-aligned nDNA trajectory GIF]
[Space for Australia: Base vs DPO-aligned nDNA trajectory GIF]
Generic Models:

LLaMA: Moderate, stable alignment characteristics

[Space for LLaMA: Base vs DPO-aligned nDNA trajectory GIF]
[Space for Figure 14: All Cultural nDNA Trajectories Before and After DPO Alignment]
DPO: Steering Without Understanding
nDNA reveals that DPO doesn't change what models know—it applies directional nudges in activation space through:

Linear Logit Geometry: Projection onto preference vectors
Uniform Steering: Global behavioral alignment via consistent shifts
Symmetric Actuation: Shallow translation rather than conceptual restructuring

[Space for Figure 15: Geometric Interpretation of DPO panels (a), (b), and (c)]
Alignment nDNA Signatures
Value Integration Patterns
Aligned models show distinct nDNA characteristics:

Stable Belief Vectors: Consistent directional alignment with human values
Controlled Curvature: Smooth representational changes that avoid harmful reasoning paths
Balanced Thermodynamics: Appropriate computational effort for ethical reasoning

Misalignment Detection
Early warning signs of alignment failures:

Divergent Belief Vectors: Values drifting away from intended alignment
Anomalous Curvature: Sharp changes indicating potential deceptive reasoning
Thermodynamic Anomalies: Unusual processing patterns for ethical scenarios

Safety Applications
Jailbreak Resistance
nDNA analysis helps understand and prevent jailbreaking:

Monitor belief vector stability under adversarial inputs
Detect curvature anomalies indicating potential bypasses
Track thermodynamic spikes suggesting harmful reasoning activation

Alignment Faking Detection
Geometric framework exposes deceptive alignment through:

Belief vector inconsistencies between stated and internal values
Curvature anomalies suggesting strategic deception
Computational effort mismatches in ethical reasoning

Null-Space Steering
Safety fine-tuning operates through minimal weight modifications (||ΔW|| ≪ ||W_IT||):

Alignment-Critical Component (ΔW_A): Tightly regularized safety preservation
Task-Specific Component (ΔW_T): Flexible continual learning support

RLHF and nDNA Evolution
Reinforcement Learning from Human Feedback Analysis
nDNA tracking during RLHF reveals:

How human preferences reshape the model's internal value system
Which layers are most affected by alignment training
The stability of alignment changes over time

Constitutional AI Signatures
Models trained with constitutional AI show:

Hierarchical belief vector structures reflecting constitutional principles
Predictable curvature patterns around ethical decision points
Reduced thermodynamic variability in moral reasoning scenarios

Alignment Optimization
Training Guidance
Use nDNA signatures to guide alignment training:

Identify optimal intervention points in the training process
Balance alignment objectives with capability preservation
Monitor for over-alignment or capability degradation

Architecture Design
Design alignment-friendly architectures:

Promote stable belief vector representations
Encourage smooth curvature transitions
Optimize thermodynamic efficiency for value-based reasoning

Future Directions
nDNA alignment research is developing toward:

Real-time alignment monitoring systems
Predictive models for alignment degradation
Automated alignment optimization frameworks
Cultural alignment preservation techniques

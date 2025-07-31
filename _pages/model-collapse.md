---
layout: page
title: Model Collapse
permalink: /model-collapse/
---

---
layout: page
title: Model Collapse
permalink: /model-collapse/
---

# nDNA-Lens: Model Collapse as Latent Manifold Flattening

[![Research](https://img.shields.io/badge/Research-Neural%20Genomics-blue)](https://github.com/research/ndna-lens)
[![Status](https://img.shields.io/badge/Status-Active-green)](https://github.com/research/ndna-lens)
[![Models](https://img.shields.io/badge/Models-LLaMA%20%7C%20Qwen-orange)](https://github.com/research/ndna-lens)

> **Discovering model collapse through geometric degeneration of neural DNA trajectories**

## What is Model Collapse?

Model collapse is a degenerative phenomenon in LLMs where expressivity, diversity, and semantic richness progressively deteriorate, manifesting as semantic homogenization, overconfident predictions, and diminished generative variability.

We identify two routes to collapse:
1. **Repeated fine-tuning** on synthetic outputs (traditional)
2. **Recursive self-merging** - a novel form of **semantic inbreeding**

![Model Collapse Visualization](assets/collapse-animation.gif)
*Neural DNA trajectories showing progressive flattening across generations*

## Biological Analogy

This parallels consanguinity in population genetics - prolonged inbreeding exposes recessive mutations and reduces phenotypic variability. Similarly, neural self-merging without epistemic diversification flattens the latent manifold, resembling inbreeding depression in biology.

## The Mathematics

Model collapse manifests as flattening of the latent manifold defined by neural DNA (nDNA):

```
T_nDNA = {(κ_ℓ, L_ℓ, ||v^(c)_ℓ||)}^L_{ℓ=1}
```

- **κ_ℓ**: Latent curvature (semantic flexibility)
- **L_ℓ**: Thermodynamic length (epistemic work)
- **||v^(c)_ℓ||**: Semantic steering force

**Collapse signature:** κ_ℓ → const, L_ℓ → min, ||v^(c)_ℓ|| → uniform

![Geometric Measurements](assets/geometry-tracking.gif)
*Real-time tracking of curvature and thermodynamic length during collapse*

## Empirical Results

**Collapsed models:** κ_ℓ ≤ 0.02, L_ℓ ≤ 0.4 ∀ℓ > 20  
**Healthy models:** κ_ℓ ≥ 0.05, L_ℓ ≥ 0.8

## Experimental Findings

### Repeated Fine-Tuning (Alpaca on LLaMA)
- Models fine-tuned on their own outputs: D^(g) = Output(M^(g-1), Alpaca Prompts)
- **Collapse threshold:** Generation 10
- Progressive flattening: κ_ℓ → 0.2, L_ℓ → 0.2 by Gen 10

### Recursive Self-Merging
Starting with 8 culturally fine-tuned LLaMA-2 variants, we applied: Child^(g) = Merge(Child^(g-1), Child^(g-2))

**Cultural collapse rates:**
- **Fast (Gen 9):** China, Middle East
- **Medium (Gen 11-13):** Asia, Europe, Latin America
- **Slow (Gen 15-16):** Africa, North America, Australia

![Cultural Collapse Comparison](assets/cultural-collapse-trajectories.png)
*Comparative collapse trajectories across culturally-aligned models*

## Belief Vector Field Analysis

Healthy models maintain belief vector magnitudes of 0.10-0.60 with directional diversity. Collapsed models show magnitudes below 0.05 at deeper layers, with vectors converging toward zero - indicating loss of semantic differentiation.

![Belief Vector Fields](assets/belief-vector-evolution.png)
*Healthy vs collapsed belief vector fields showing loss of semantic steering*

## Practical Applications

### Geometric Diagnostics
Monitor κ_ℓ, L_ℓ, and ||v^(c)_ℓ|| as early warning signals for collapse.

### Preservation Interventions
- Spectral regularization
- Geodesic constraints  
- Modular training
- Torsion-aware objectives

### Epistemic Vitality Function
```
V_ℓ := κ_ℓ · L_ℓ · ||v^(c)_ℓ||
Collapse indicator: d/dg V^(g)_ℓ < 0
```

### Epistemic Audits
Supplement behavioral evaluations with geometric health assessments for semantic longevity rather than just task compliance.

## Impact

This research reframes model evaluation from surface-level performance to **geometric vitality**, treating models as semantic organisms. The nDNA-Lens provides quantitative diagnostics for:

- Early collapse detection before output degradation
- Understanding model resilience variations
- Designing preservation strategies
- Redefining model health from performance to endurance

Neural genomics - tracking spectral, thermodynamic, and vectorial signatures - enables cultivation of models that are resilient, modular, and capable of retaining epistemic diversity over time.

---

**Research Status:** Active development of geometric diagnostic tools for foundation model health monitoring.

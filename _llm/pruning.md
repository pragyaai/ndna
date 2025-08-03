---
layout: page
title: Pruning and nDNA
permalink: /llm/pruning/
---


Pruning, a common technique for efficiency, significantly reshapes a model's internal belief geometry. Through the lens of Neural DNA (nDNA) diagnostics, pruning induces an irreversible semantic compression, analogous to an entropy collapse, which distorts the model's epistemic manifold and reduces its ability to preserve instructional, cultural, or conceptual diversity in reasoning. nDNA analysis elevates pruning from a mere engineering trick to an epistemic surgery.

## nDNA as a Lens: Pruning-Induced Epistemic Degeneration

Pruning impacts a model's cognitive flexibility by altering its semantic fabric and neural DNA. In the nDNA formalism, this manifests as **epistemic degeneration**, particularly observed in the **thermodynamic length (Lℓ)**, which measures the cumulative epistemic effort expended to maintain alignment with conceptual priors, cultural tuning, and task objectives.

This degeneration is reflected across the three nDNA axes:

- **Thermodynamic Length (Lℓ)**: Undergoes non-uniform contraction, especially in mid-to-late layers, indicating a selective loss of epistemic effort along deep conceptual hierarchies.
- **Spectral Curvature (κℓ)**: Experiences changes suggesting alterations in the model's representational flexibility and the sharpness of its conceptual flow.
- **Belief Vector Fields (v(c)ℓ)**: Show directional divergence or loss of semantic steerability.

## Global nDNA Structured Pruning Visualizations

> **Tip:** Click on any visualization below to expand it. Click outside the image or press DELETE to close.

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); gap: 20px; margin: 30px 0;">
    {% include visualization.liquid image_path="pruning/africa_ndna_structured_pruning_comparison.gif" title="Africa" %}
    {% include visualization.liquid image_path="pruning/asia_ndna_structured_pruning_comparison.gif" title="Asia" %}
    {% include visualization.liquid image_path="pruning/australia_ndna_structured_pruning_comparison.gif" title="Australia" %}
    {% include visualization.liquid image_path="pruning/china_ndna_structured_pruning_comparison.gif" title="China" %}
    {% include visualization.liquid image_path="pruning/europe_ndna_structured_pruning_comparison.gif" title="Europe" %}
    {% include visualization.liquid image_path="pruning/latinamerica_ndna_structured_pruning_comparison.gif" title="Latin America" %}
    {% include visualization.liquid image_path="pruning/llama_ndna_structured_pruning_comparison.gif" title="LLaMA Model" %}
    {% include visualization.liquid image_path="pruning/middleeast_ndna_structured_pruning_comparison.gif" title="Middle East" %}
    {% include visualization.liquid image_path="pruning/northamerica_ndna_structured_pruning_comparison.gif" title="North America" %}
</div>

## Types of Pruning and nDNA Interpretation

Different pruning strategies induce distinct classes of thermodynamic and semantic collapse:

### Attention Head Pruning
- **Effects**: Leads to a moderate drop in thermodynamic length (Lℓ drops from 0.9 to 0.4) and spectral curvature (κℓ ≤ 0.3) across mid-layers. Steering fields show directional divergence, suggesting disrupted cross-token alignment.
- **nDNA Interpretation**: Implies directional misalignment (∆Lℓ ∼ −0.5, div(v(c)ℓ) ↑).

### MLP Channel Pruning
- **Effects**: Causes milder degradation, with Lℓ compressing to 0.5–0.6 and κℓ staying between 0.4–0.5. Belief fields preserve local structure but lose global consistency.
- **nDNA Interpretation**: Results in semantic thinning (∆κℓ ↓, Lℓ mildly compressed).

### Transformer Layer Pruning
- **Effects**: Leads to the most severe impact, with Lℓ ≤ 0.3 and κℓ ≤ 0.2, indicating a severely fractured model. The belief vector norm (‖v(c)ℓ‖) drops by 60–80%, and divergence spikes, showing a collapse of steering to noisy local attractors.
- **nDNA Interpretation**: Represents topological collapse (Lℓ → 0.2, κℓ → 0).

## Geometric and Cultural Implications

Through this lens, nDNA helps diagnose what is truly lost during pruning—not just functionally, but geometrically. For example:

- **Transformer layer pruning** consistently produces the strongest thermodynamic collapse across different cultural variants.
- **MLP channel pruning** follows with less severe but still meaningful semantic compression.
- **Cultural impact**: Models fine-tuned on **African, Asian, and Chinese** corpora suffer the deepest collapses, while **Australian and North American** variants exhibit comparatively resilient latent structures.

This highlights that pruning, while a resource optimization, acts as **latent surgery**—compressing, flattening, and fragmenting the internal epistemic structure, thereby impairing cognitive generalization and cultural adaptability.

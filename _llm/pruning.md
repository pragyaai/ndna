---
layout: page
title: Pruning and nDNA
permalink: /llm/pruning/
---

# Pruning and nDNA

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
    <div style="text-align: center;">
        <a href="{{ '/assets/img/pruning/africa_ndna_structured_pruning_comparison.gif' | relative_url }}" data-lightbox="pruning" data-title="Africa">
            <img src="{{ '/assets/img/pruning/africa_ndna_structured_pruning_comparison.gif' | relative_url }}" alt="Africa nDNA Structured Pruning" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
        </a>
        <p style="margin-top: 8px; font-weight: 500;">Africa</p>
    </div>
    <div style="text-align: center;">
        <a href="{{ '/assets/img/pruning/asia_ndna_structured_pruning_comparison.gif' | relative_url }}" data-lightbox="pruning" data-title="Asia">
            <img src="{{ '/assets/img/pruning/asia_ndna_structured_pruning_comparison.gif' | relative_url }}" alt="Asia nDNA Structured Pruning" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
        </a>
        <p style="margin-top: 8px; font-weight: 500;">Asia</p>
    </div>
    <div style="text-align: center;">
        <a href="{{ '/assets/img/pruning/australia_ndna_structured_pruning_comparison.gif' | relative_url }}" data-lightbox="pruning" data-title="Australia">
            <img src="{{ '/assets/img/pruning/australia_ndna_structured_pruning_comparison.gif' | relative_url }}" alt="Australia nDNA Structured Pruning" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
        </a>
        <p style="margin-top: 8px; font-weight: 500;">Australia</p>
    </div>
    <div style="text-align: center;">
        <a href="{{ '/assets/img/pruning/china_ndna_structured_pruning_comparison.gif' | relative_url }}" data-lightbox="pruning" data-title="China">
            <img src="{{ '/assets/img/pruning/china_ndna_structured_pruning_comparison.gif' | relative_url }}" alt="China nDNA Structured Pruning" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
        </a>
        <p style="margin-top: 8px; font-weight: 500;">China</p>
    </div>
    <div style="text-align: center;">
        <img class="gallery-img" src="{{ '/assets/img/pruning/europe_ndna_structured_pruning_comparison.gif' | relative_url }}" alt="Europe nDNA Structured Pruning" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
        <p style="margin-top: 8px; font-weight: 500;">Europe</p>
    </div>
    <div style="text-align: center;">
        <img class="gallery-img" src="{{ '/assets/img/pruning/latinamerica_ndna_structured_pruning_comparison.gif' | relative_url }}" alt="Latin America nDNA Structured Pruning" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
        <p style="margin-top: 8px; font-weight: 500;">Latin America</p>
    </div>
    <div style="text-align: center;">
        <img class="gallery-img" src="{{ '/assets/img/pruning/llama_ndna_structured_pruning_comparison.gif' | relative_url }}" alt="LLaMA nDNA Structured Pruning" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
        <p style="margin-top: 8px; font-weight: 500;">LLaMA Model</p>
    </div>
    <div style="text-align: center;">
        <img class="gallery-img" src="{{ '/assets/img/pruning/middleeast_ndna_structured_pruning_comparison.gif' | relative_url }}" alt="Middle East nDNA Structured Pruning" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
        <p style="margin-top: 8px; font-weight: 500;">Middle East</p>
    </div>
    <div style="text-align: center;">
        <img class="gallery-img" src="{{ '/assets/img/pruning/northamerica_ndna_structured_pruning_comparison.gif' | relative_url }}" alt="North America nDNA Structured Pruning" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
        <p style="margin-top: 8px; font-weight: 500;">North America</p>
    </div>
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

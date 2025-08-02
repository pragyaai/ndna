---
layout: page
title: Cultural nDNA
permalink: /llm/cultural-ndna/
---

# Cultural nDNA

Neural DNA (nDNA) offers a sophisticated framework for understanding the internal cognitive identity of AI foundation models, moving beyond traditional surface-level evaluations to a neurogeometric introspection of their "latent genome." Cultural nDNA specifically delves into how training data from various cultures, regions, and social contexts imprints distinct cognitive fingerprints within these models.

## Understanding Cultural Imprints

Cultural nDNA reveals how foundation models internalize human values and behavioral constraints by analyzing their latent geometry. This approach provides unprecedented insights into the models' "cultural personalities," which persist across different tasks and contexts. It offers a novel framework for assessing AI cultural competency, allowing researchers to:

- Track the effectiveness of cultural adaptation  
- Identify cultural knowledge gaps within models  
- Optimize localization strategies for diverse cultural contexts

The concept of cultural provenance is particularly impactful in the final decoder layers (ℓ ∈) of transformer models, where sociolinguistic priors most heavily influence the output distribution.

## Cultural Signature Analysis

Cultural nDNA analysis is performed through three primary dimensions of latent geometry: spectral curvature, thermodynamic length, and belief gradients. These dimensions converge to unveil an underlying epistemic cognitive geometry.

<div><b>Tip:</b> <i>Click on any visualization below to expand it. Click outside the image or press DELETE to close.</i></div>

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin: 30px 0;">
  <div style="text-align: center;">
    <a href="{{ '/assets/img/cultural_ndna/llama_vs_cultures_group_tagged_360.gif' | relative_url }}" data-lightbox="gallery" data-title="Global Comparison">
      <img src="{{ '/assets/img/cultural_ndna/llama_vs_cultures_group_tagged_360.gif' | relative_url }}" alt="Global Comparison" style="width: 100%; height: 300px; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
    </a>
    <p style="margin-top: 12px; font-weight: 500; font-size: 1.1em;">Global Comparison</p>
  </div>
  {% assign regions = "Africa,Asia,Australia,China,Europe,LatinAmerica,MiddleEast,NorthAmerica" | split: "," %}
  {% for region in regions %}
  <div style="text-align: center;">
    <a href="{{ '/assets/img/cultural_ndna/llama_culture_shift_gifs_final 2/llama_' | append: region | append: '_rotation.gif' | relative_url }}" data-lightbox="gallery" data-title="{{ region | replace: 'LatinAmerica','Latin America' | replace: 'MiddleEast','Middle East' | replace: 'NorthAmerica','North America' }}">
      <img src="{{ '/assets/img/cultural_ndna/llama_culture_shift_gifs_final 2/llama_' | append: region | append: '_rotation.gif' | relative_url }}" alt="{{ region }} Cultural nDNA Rotation" style="width: 100%; height: 300px; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
    </a>
    <p style="margin-top: 12px; font-weight: 500; font-size: 1.1em;">{{ region | replace: 'LatinAmerica','Latin America' | replace: 'MiddleEast','Middle East' | replace: 'NorthAmerica','North America' }}</p>
  </div>
  {% endfor %}
</div>

### Belief Vector Orientation

Different cultural contexts introduce measurable directional biases in the belief vector space:

- **Western contexts**: Exhibit individualistic reasoning patterns.  
- **Eastern contexts**: Show an emphasis on collective decision-making.  
- **Global contexts**: Tend to use hybrid reasoning approaches.  
- **Fine-tuned models**: Encode zones of inheritance, mutation, and ideological absorption, with belief vector norm spikes modulating latent beliefs without full semantic reorganization.

The belief vector field ($\mathbf{v}^{(c)}_\ell$) represents the semantic steering force at a given layer (ℓ) toward a concept (c), conditioned on cultural priors.

### Cultural Thermodynamic Patterns

The computational effort required to process culturally specific information varies:

- **Native cultural context**: Low thermodynamic length → easy processing  
- **Foreign cultural context**: High thermodynamic length → increased effort  
- **Cross-cultural scenarios**: Variable thermodynamic length → adaptive reconfiguration

This reflects how non-Western models often incur latent costs to encode distinct priors, reinforcing concerns about **representational inequality**.

### Spectral Curvature Cultural Signatures

Different cultural training creates distinct curvature patterns:

- **Sharp curvature changes** at cultural concept boundaries  
- **Smooth transitions** within familiar cultural domains  
- **Cultural harmonics** in the spectral profile that form unique latent epistemic fingerprints

High curvature can indicate dense or conflicting cultural entanglement; low curvature suggests cleaner, disentangled cultural reasoning.

## Unified nDNA Score

To quantify latent geometry and model adaptation, the nDNA score integrates the three components:

1. **Curvature ($\kappa_\ell$)**: Bending of latent trajectories  
2. **Length ($L_\ell$)**: Displacement effort  
3. **Belief Vector Norm ($\|\mathbf{v}^{(c)}_\ell\|$)**: Directional force from cultural priors

{% raw %}
$$
\text{nDNA} := \sum_{\ell=1}^L \omega_\ell \cdot \kappa_\ell \cdot L_\ell \cdot \|\mathbf{v}^{(c)}_\ell\|
$$
{% endraw %}

where $\omega_\ell$ are weights for semantically active layers. This score diagnoses how latent traits persist, mutate, or degrade over model evolution.

## Cultural Fine-Tuning and Latent Geometry

Models trained on global corpora often encode homogenized epistemic perspectives. Fine-tuning on regional English corpora—news, parliament, literature, oral histories—imprints region-specific cultural priors. These reshape spectral curvature, thermodynamic length, and belief vector intensity.

- **Western-aligned models**: Lower epistemic strain, close to pretraining attractors  
- **Non-Western models**: Higher strain and latent reconfiguration in upper layers

This divergence maps the **zones of semantic inheritance and mutation** across culturally adapted models.

## Comparison with Word2Vec


<div style="overflow-x: auto; margin: 2em 0;">
<table style="width: 100%; border-collapse: collapse; border: 1px solid #e1e4e8; border-radius: 6px; overflow: hidden;">
  <thead>
    <tr style="background-color: #f6f8fa;">
      <th style="padding: 12px 15px; text-align: left; border-bottom: 2px solid #dfe2e5;"></th>
      <th style="padding: 12px 15px; text-align: left; border-bottom: 2px solid #dfe2e5;">Word2Vec</th>
      <th style="padding: 12px 15px; text-align: left; border-bottom: 2px solid #dfe2e5;">Cultural nDNA</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #eaecef; font-weight: 500;">Discovery</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #eaecef;">Token-level linear semantics</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #eaecef;">Differential geometry of belief systems</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #eaecef; font-weight: 500;">Example</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #eaecef;">king - man + woman ≈ queen</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #eaecef;">Regionally sculpted curvature, length, belief force</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: 500;">Implication</td>
      <td style="padding: 12px 15px;">Token algebra</td>
      <td style="padding: 12px 15px;">Neural ancestry and epistemic structure</td>
    </tr>
  </tbody>
</table>
</div>


Cultural nDNA enables:

- Cross-model cultural comparisons  
- Diagnosis of latent strain and mutation  
- Equitable cultural alignment of LLMs

## Research Insights

Cultural nDNA analysis reveals that models develop persistent **cultural personalities**. Fine-tuning non-uniformly sculpts spectral curvature, thermodynamic length, and directional belief force:

- **Non-Western fine-tuned models** (e.g., Africa, Asia, China): Show greater latent divergence, high curvature ($\kappa_\ell$), and thermodynamic strain ($L_\ell$)  
- **Western models** (e.g., Europe, North America, Australia): Form a compact, low-strain cluster aligned with pretrained priors

This geometry exposes the **WEIRD bias** (Western, Educated, Industrialized, Rich, Democratic) in pretraining, while demonstrating how cultural fine-tuning can correct epistemic asymmetries in model cognition.

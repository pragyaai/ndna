---
layout: page
title: Model Collapse
permalink: /llm/model-collapse/
---

# nDNA-Lens: Model Collapse as Latent Manifold Flattening

## What is Model Collapse?

Model collapse is a degenerative phenomenon in LLMs where expressivity, diversity, and semantic richness progressively deteriorate, manifesting as semantic homogenization, overconfident predictions, and diminished generative variability.

We identify two routes to collapse:
1. **Repeated fine-tuning** on synthetic outputs (traditional)
2. **Recursive self-merging** - a novel form of **semantic inbreeding**

## Biological Analogy

This parallels consanguinity in population genetics - prolonged inbreeding exposes recessive mutations and reduces phenotypic variability. Similarly, neural self-merging without epistemic diversification flattens the latent manifold, resembling inbreeding depression in biology.

## The Mathematics

Model collapse manifests as flattening of the latent manifold defined by neural DNA (nDNA):

$T_{\text{nDNA}} = \{(\kappa_{\ell}, L_{\ell}, \|v^{(c)}_{\ell}\|)\}^{L}_{\ell=1}$

- **κ<sub>ℓ</sub>**: Latent curvature (semantic flexibility)
- **L<sub>ℓ</sub>**: Thermodynamic length (epistemic work)
- ||v<sub>ℓ</sub><sup>(c)</sup>||: Semantic steering force

**Collapse signature:** κ<sub>ℓ</sub> → const, L<sub>ℓ</sub> → min, ||v<sup>(c)</sup><sub>ℓ</sub>|| → uniform



## Empirical Results

**Collapsed models:** κ<sub>ℓ</sub> ≤ 0.02, L<sub>ℓ</sub> ≤ 0.4 ∀ℓ > 20  
**Healthy models:** κ<sub>ℓ</sub> ≥ 0.05, L<sub>ℓ</sub> ≥ 0.8

## Experimental Findings

### Repeated Fine-Tuning (Alpaca on LLaMA)

- Models fine-tuned on their own outputs: D<sup>(g)</sup> = Output(M<sup>(g-1)</sup>, Alpaca Prompts)
- **Collapse threshold:** Generation 10
- Progressive flattening: κ<sub>ℓ</sub> → 0.2, L<sub>ℓ</sub> → 0.2 by Gen 10

<div style="text-align: center;">
  <a href="{{ '/assets/gifs/alignment/llama_collapse_v2_1.gif' | relative_url }}" data-lightbox="gallery" data-title="LLaMA">
    <img src="{{ '/assets/gifs/alignment/llama_collapse_v2_1.gif' | relative_url }}" alt="LLaMA Alignment nDNA" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 500;">LLaMA</p>
  <p style="margin-top: 4px; font-size: 0.9em; color: #666;">Moderate, stable alignment characteristics</p>
</div>

### Recursive Self-Merging

Starting with 8 culturally fine-tuned LLaMA-2 variants, we applied: Child<sup>(g)</sup> = Merge(Child<sup>(g-1)</sup>, Child<sup>(g-2)</sup>)

**Cultural collapse rates:**
- **Fast (Gen 9):** China, Middle East
- **Medium (Gen 11-13):** Asia, Europe, Latin America
- **Slow (Gen 15-16):** Africa, North America, Australia

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
</div>


## Belief Vector Field Analysis

Healthy models maintain belief vector magnitudes of 0.10-0.60 with directional diversity. Collapsed models show magnitudes below 0.05 at deeper layers, with vectors converging toward zero - indicating loss of semantic differentiation.

<div style="text-align: center; margin: 30px 0;">
  <a href="{{ '/assets/gifs/alignment/belief_vector_field_side_by_side_refined.gif' | relative_url }}" data-lightbox="gallery" data-title="Global nDNA Trajectories">
    <img src="{{ '/assets/gifs/alignment/belief_vector_field_side_by_side_refined.gif' | relative_url }}" alt="Global nDNA Trajectories" style="max-width: 600px; width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 500;">Global nDNA Trajectories</p>
  <p style="margin-top: 4px; font-size: 0.9em; color: #666;">Belief vector field evolution showing healthy vs collapsed states</p>
</div>


## Practical Applications

### Geometric Diagnostics

Monitor κ<sub>ℓ</sub>, L<sub>ℓ</sub>, and ||v<sup>(c)</sup><sub>ℓ</sub>|| as early warning signals for collapse.

### Preservation Interventions

- Spectral regularization
- Geodesic constraints  
- Modular training
- Torsion-aware objectives

### Epistemic Vitality Function

<div style="background: #f8f9fa; border-left: 4px solid #007acc; padding: 20px; margin: 20px 0; border-radius: 6px; font-family: 'Courier New', monospace;">
V<sub>ℓ</sub> := κ<sub>ℓ</sub> · L<sub>ℓ</sub> · ||v<sup>(c)</sup><sub>ℓ</sub>||<br>
Collapse indicator: d/dg V<sup>(g)</sup><sub>ℓ</sub> < 0
</div>

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

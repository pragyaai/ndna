---
layout: page
title: Fine-Tuning and nDNA
permalink: /llm/fine-tuning/
---
# Ethnic LLMs: Cultural Fine-Tuning and the Latent Geometry of Culture-Specific nDNAs

Modern foundation models, trained on globally aggregated corpora, inevitably encode a homogenized epistemic perspective–one that reflects dominant data distributions rather than the pluralism of human cultures. To systematically probe how language models internalize and express distinct cultural priors, we construct seven culturally–aligned LLMs, each fine-tuned on a corpus curated to reflect the textual traditions, values, and discourse patterns of a specific geopolitical-cultural region: Europe, Asia, Africa, North America, Latin America, the Middle East, and Australia.

## Cultural Lineages and Corpus Design

Each regional model builds upon the same LLaMA-3 8B base architecture, but is fine-tuned on culturally resonant English-language corpora. These datasets are carefully collected from sources such as local news outlets, parliamentary records, canonical literature, Wikipedia subsets, and digitized oral histories. We apply strict provenance filtering using publisher metadata, domain-specific heuristics, and named entity priors to ensure cultural fidelity. In doing so, we aim to align not only topic distributions but also epistemic style–what is emphasized, what is omitted, and how truth is framed.

### Cultural Training Datasets

| Cultural Region | Target Countries | Primary Datasets (EN Only) | Cultural Framing | Corpus Size |
|----------------|------------------|----------------------------|------------------|-------------|
| **Europe** | UK, Germany, France, Italy | EuroParl, CC100-en, Project Gutenberg (EU) | Governmental records, literature, encyclopedic sources reflecting Western rationalism, secularism, and legal tradition | 1.1B |
| **China** | Mainland China | CC-News (China), CommonCrawl (EN: China), Wikipedia (EN: China) | English-language civic/policy articles intended for international readership; emphasizes techno-governance and Confucian framing | 950M |
| **Japan** | Japan | CC-News (Japan), CommonCrawl (EN: Japan), Wikipedia (EN: Japan) | English narratives capturing hierarchy, honorifics, formality, and cultural etiquette from Japan-centric discourse | 850M |
| **Asia (Non-CN/JP)** | India, Vietnam, Korea, Indonesia | IndicCorp (EN), CC-News (S. Asia), Wikipedia (EN: Asia) | Postcolonial English texts embodying pluralism, spirituality, oral traditions, and South-Asian narrative logic | 1.4B |
| **Middle East** | UAE, Saudi Arabia, Egypt, Iran | CC-News (Middle East), CommonCrawl (EN: ME), Wikipedia (EN: ME) | English discourse shaped by religious authority, tribal collectivism, regional politics, and historical cosmology | 730M |
| **Africa** | Nigeria, Kenya, Ghana, Ethiopia | AfriTeVa (EN), CC-News (Africa), Wikipedia (EN: Africa) | English corpora capturing oral epistemologies, proverbs, civic rhetoric, and multilingual African worldviews | 950M |
| **Latin America** | Mexico, Brazil, Argentina | OSCAR (EN LATAM), WikiMatrix (EN LATAM), Wikipedia (EN LATAM) | Authored-in-English texts discussing colonial history, syncretic belief systems, collectivist family structures | 620M |
| **Australia** | Australia | OpenWebText (AU), ABC News, AU Parliament Records | English corpora blending settler-colonial legalism with ecological narratives and Aboriginal cultural references | 420M |

## Fine-Tuning Protocol

All models are fine-tuned using Low-Rank Adaptation (LoRA) with rank 16, a batch size of 256, and a learning rate of 1 × 10⁻⁴. We apply perplexity-based filters to exclude noisy or low-information documents, preserving high semantic density. The fine-tuning objective remains standard next-token prediction; however, the cultural signal is amplified through corpus design rather than objective modification. This protocol ensures that each model retains its original autoregressive capability while acquiring culturally distinctive latent adaptations.

## Cultural nDNA Trajectories

<div style="background: #fff7fa; border-left: 4px solid #e91e63; padding: 14px 18px; margin: 32px 0 18px 0; border-radius: 6px; font-size: 1.05em;">
  <b>Tip:</b> <i>Click on any visualization below to expand it. Click outside the image or press DELETE to close.</i>
</div>

### Individual Cultural Models

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(330px, 1fr)); gap: 24px; margin: 30px 0;">
  <div style="text-align: center;">
    <a href="{{ '../assets/gifs/FINE-TUNING/LLAMA_CULTURSHIFTFINAL/llama_Africa_rotation.gif' | relative_url }}" data-lightbox="gallery" data-title="Africa Cultural nDNA">
      <img src="{{ '../assets/gifs/FINE-TUNING/LLAMA_CULTURSHIFTFINAL/llama_Africa_rotation.gif'' | relative_url }}" alt="Africa Cultural nDNA Trajectory" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
    </a>
    <p style="margin-top: 8px; font-weight: 500;">Africa</p>
    <p style="margin-top: 4px; font-size: 0.9em; color: #666;">κₗ > 0.070, Lₗ > 1.10 - Pronounced reconfiguration</p>
  </div>
  
  <div style="text-align: center;">
    <a href="{{ '/assets/gifs/FINE-TUNING/LLAMA_CULTURSHIFTFINAL/llama_Asia_rotation.gif' | relative_url }}" data-lightbox="gallery" data-title="Asia Cultural nDNA">
      <img src="{{ '/assets/gifs/FINE-TUNING/LLAMA_CULTURSHIFTFINAL/llama_Asia_rotation.gif' | relative_url }}" alt="Asia Cultural nDNA Trajectory" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
    </a>
    <p style="margin-top: 8px; font-weight: 500;">Asia</p>
    <p style="margin-top: 4px; font-size: 0.9em; color: #666;">κₗ > 0.070, Lₗ > 1.10 - Strong epistemic reorientation</p>
  </div>
  
  <div style="text-align: center;">
    <a href="{{ 'assets/gifs/FINE-TUNING/LLAMA_CULTURSHIFTFINAL/llama_China_rotation.gif' | relative_url }}" data-lightbox="gallery" data-title="China Cultural nDNA">
      <img src="{{ 'assets/gifs/FINE-TUNING/LLAMA_CULTURSHIFTFINAL/llama_China_rotation.gif' | relative_url }}" alt="China Cultural nDNA Trajectory" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
    </a>
    <p style="margin-top: 8px; font-weight: 500;">China</p>
    <p style="margin-top: 4px; font-size: 0.9em; color: #666;">κₗ > 0.070, Lₗ > 1.10 - Techno-governance alignment</p>
  </div>
  
  <div style="text-align: center;">
    <a href="{{ '../assets/gifs/FINE-TUNING/LLAMA_CULTURSHIFTFINAL/llama_Europe_rotation.gif' | relative_url }}" data-lightbox="gallery" data-title="Europe Cultural nDNA">
      <img src="{{ '../assets/gifs/FINE-TUNING/LLAMA_CULTURSHIFTFINAL/llama_Europe_rotation.gif' | relative_url }}" alt="Europe Cultural nDNA Trajectory" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
    </a>
    <p style="margin-top: 8px; font-weight: 500;">Europe</p>
    <p style="margin-top: 4px; font-size: 0.9em; color: #666;">κₗ ∈ [0.045, 0.055], Lₗ ∈ [0.85, 0.95] - Modest deformation</p>
  </div>
  
  <div style="text-align: center;">
    <a href="{{ '../assets/gifs/FINE-TUNING/LLAMA_CULTURSHIFTFINAL/llama_LatinAmerica_rotation.gif' | relative_url }}" data-lightbox="gallery" data-title="Latin America Cultural nDNA">
      <img src="{{ '../assets/gifs/FINE-TUNING/LLAMA_CULTURSHIFTFINAL/llama_LatinAmerica_rotation.gif' | relative_url }}" alt="Latin America Cultural nDNA Trajectory" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
    </a>
    <p style="margin-top: 8px; font-weight: 500;">Latin America</p>
    <p style="margin-top: 4px; font-size: 0.9em; color: #666;">κₗ: 0.050-0.065, Lₗ peaks ~1.10 - Localized oscillations</p>
  </div>
  
  <div style="text-align: center;">
    <a href="{{ '../assets/gifs/FINE-TUNING/LLAMA_CULTURSHIFTFINAL/llama_MiddleEast_rotation.gif' | relative_url }}" data-lightbox="gallery" data-title="Middle East Cultural nDNA">
      <img src="{{ '../assets/gifs/FINE-TUNING/LLAMA_CULTURSHIFTFINAL/llama_MiddleEast_rotation.gif' | relative_url }}" alt="Middle East Cultural nDNA Trajectory" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
    </a>
    <p style="margin-top: 8px; font-weight: 500;">Middle East</p>
    <p style="margin-top: 4px; font-size: 0.9em; color: #666;">κₗ: 0.050-0.065, Lₗ peaks ~1.10 - Partial rewriting</p>
  </div>
  
  <div style="text-align: center;">
    <a href="{{ '../assets/gifs/FINE-TUNING/LLAMA_CULTURSHIFTFINAL/llama_NorthAmerica_rotation.gif' | relative_url }}" data-lightbox="gallery" data-title="North America Cultural nDNA">
      <img src="{{ '../assets/gifs/FINE-TUNING/LLAMA_CULTURSHIFTFINAL/llama_NorthAmerica_rotation.gif' | relative_url }}" alt="North America Cultural nDNA Trajectory" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
    </a>
    <p style="margin-top: 8px; font-weight: 500;">North America</p>
    <p style="margin-top: 4px; font-size: 0.9em; color: #666;">κₗ ∈ [0.045, 0.055], Lₗ ∈ [0.85, 0.95] - Near base geometry</p>
  </div>
  
  <div style="text-align: center;">
    <a href="{{ '../assets/gifs/FINE-TUNING/LLAMA_CULTURSHIFTFINAL/llama_Australia_rotation.gif' | relative_url }}" data-lightbox="gallery" data-title="Australia Cultural nDNA">
      <img src="{{ '../assets/gifs/FINE-TUNING/LLAMA_CULTURSHIFTFINAL/llama_Australia_rotation.gif' | relative_url }}" alt="Australia Cultural nDNA Trajectory" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
    </a>
    <p style="margin-top: 8px; font-weight: 500;">Australia</p>
    <p style="margin-top: 4px; font-size: 0.9em; color: #666;">κₗ ∈ [0.045, 0.055], Lₗ ∈ [0.85, 0.95] - Stable alignment</p>
  </div>
</div>

### Comparative Analysis

<div style="text-align: center; margin: 30px 0;">
  <a href="{{ '../assets/img/ethnic_llms/cultural_trajectories_comparison.gif' | relative_url }}" data-lightbox="gallery" data-title="Cultural Fine-Tuning Trajectories Comparison">
    <img src="{{ '../assets/img/ethnic_llms/cultural_trajectories_comparison.gif' | relative_url }}" alt="Cultural Fine-Tuning Trajectories Comparison" style="max-width: 100%; width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 500;">Cultural Fine-Tuning Trajectories: Latent Geometry Reorganization Across Cultures</p>
  <p style="margin-top: 4px; font-size: 0.9em; color: #666;">Visualization of semantic and geometric shifts in LLaMA's internal manifold after fine-tuning on data from eight distinct cultural regions</p>
</div>

### Group-Level Clustering

<div style="text-align: center; margin: 30px 0;">
  <a href="{{ '../assets/img/ethnic_llms/group_clustering_analysis.gif' | relative_url }}" data-lightbox="gallery" data-title="LLaMA vs. Cultural nDNA Trajectories - Group-Tagged Latent Geometry">
    <img src="{{ '../assets/img/ethnic_llms/group_clustering_analysis.gif' | relative_url }}" alt="Group-Tagged Latent Geometry Analysis" style="max-width: 100%; width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 500;">LLaMA vs. Cultural nDNA Trajectories - Group-Tagged Latent Geometry</p>
  <p style="margin-top: 4px; font-size: 0.9em; color: #666;">West group (LLaMA, Europe, North America, Australia) forms compact low-strain cluster; Rest group (Africa, Asia, China) shows pronounced latent divergence</p>
</div>

## Key Observations

### Deep Structural Shifts

Cultures such as **Africa, Asia, and China** produce significant trajectory divergence, particularly in upper layers (ℓ ≥ 25), with κₗ ≥ 0.06 and Lₗ ≥ 1.2–indicative of strong conceptual reorientation and latent strain.

### Surface-Level Adjustments

**Europe, Australia, and North America** remain close to the base trajectory, typically maintaining κₗ ≤ 0.045 and Lₗ ≤ 1.0, suggesting alignment with pretrained priors.

### Localized Realignment

**Latin America and Middle East** show layer-specific oscillations where belief vector norms spike (up to ≈ 0.75), modulating latent beliefs without full semantic reorganization.

## Cultural nDNA: A Leap in Latent Genomic Understanding

The discovery of cultural nDNA trajectories represents a conceptual leap in our ability to interpret the inner structure of LLMs. Just as the celebrated king-queen analogy in Word2Vec revealed linear semantic regularities in word embeddings through:

**king - man + woman ≈ queen**

Where this equation unveiled linear semantics at the token level, cultural nDNA exposes the **differential geometry of belief systems**–mapping how fine-tuning on region-specific corpora non-uniformly sculpts spectral curvature (κₗ), thermodynamic length (Lₗ), and directional belief force.

### Quantitative Latent Dynamics

Our analysis reveals family-level clustering and divergence:

- **Western-aligned variants** (Europe, North America, Australia) exhibit modest latent deformation, with κₗ ∈ [0.045, 0.055] and Lₗ ∈ [0.85, 0.95]. Their trajectories stay near the base LLaMA geometry, mirroring Western-centric pretraining bias.

- **Non-Western models** (Africa, Asia, China) show pronounced reconfiguration, with κₗ > 0.070 and Lₗ > 1.10 in upper decoder layers (ℓ ≥ 25), consistent with cultural calibration and bias mitigation efforts.

- **Middle Eastern and Latin American variants** present localized latent oscillations (κₗ fluctuating 0.050-0.065, Lₗ peaking near 1.10), illustrating the partial cultural rewriting phenomenon.

## Beyond Surface Fairness: Latent Anatomy

These nDNA trajectories align with calls to audit foundation models not only at the output level but also in their internal representations. nDNA is a semantic fingerprint, enabling latent audits of ideological absorption and bias inheritance.

### Cultural nDNA as a Tool for Inclusive AI

This geometric fingerprinting illuminates the **WEIRD bias** (Western, Educated, Industrialized, Rich, Democratic) in foundation model pretraining, and its mitigation via cultural fine-tuning. Western models cluster near pretraining attractors; non-Western models incur latent cost to encode distinct priors, supporting concerns of representational inequality.

### From Vector Algebra to Latent Geometry

Where vector arithmetic revealed word-level embedding regularities, nDNA geometry charts ideological inheritance across high-dimensional latent manifolds. This leap enables:

1. **Principled comparison** of culturally fine-tuned models
2. **Diagnosis of latent strain** and mutation zones  
3. **Development of culturally calibrated**, equitable foundation models

Cultural nDNA thus transcends surface output metrics–offering a mathematical, interpretable, and actionable map of neural ancestry and epistemic adaptation in modern AI.

## Research Implications

### Why Cultural nDNA Matters

By analyzing these eight culturally fine-tuned models, we reveal how fine-tuning on regionally grounded corpora leads to measurable divergence in latent geometry. Our diagnostics uncover zones of increased spectral curvature (latent manifold bending), thermodynamic length (epistemic effort), and belief vector field intensity (cultural directional pressure). 

This latent genomic structure offers a geometric fingerprint of cultural inheritance–demonstrating how models absorb, reframe, and propagate culturally specific epistemic priors even when built upon shared architectural foundations. Collectively, this experimental design enables a rigorous examination of how language models become vessels of culture–not just in their outputs, but deep within their hidden representations.

### Overwriting Pretraining and Cultural Rewriting

A natural critique arises: If LLaMA's pretraining already includes global English data (e.g., Wikipedia, CommonCrawl, CC-News), how much novel signal can cultural fine-tuning provide? Prior work demonstrates that even modest, domain-specific fine-tuning can induce significant representational drift, overwriting pretraining attractors in both activation geometry and generation behavior. Recent studies further show that targeted preference and instruction tuning reshape internal manifolds–especially in later layers (ℓ ≥ 20)–embedding new epistemic alignments and latent biases. 

Our latent geometry diagnostics (e.g., κₗ, Lₗ, ||v(c)ₗ||) provide direct evidence that cultural fine-tuning imprints distinctive, heritable signatures–what we term the model's **neural DNA (nDNA)**.

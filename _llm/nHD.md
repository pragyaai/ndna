---
layout: page
title: "Neural Hamming Distance (nHD)"
permalink: /llm/neural-genomics/nHD/
skip_title: True
mathjax: True
---
{% include ndna-title.liquid title="nDNA Lens -- Neural Hamming Distance(nHD)" %}
<script type="text/javascript" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

<script type="text/javascript" id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>


In biological genomics, the **Hamming Distance** is a key metric quantifying the number of differing nucleotides between two sequences, often used to measure **mutation load** and **evolutionary divergence**. Inspired by this, the **Neural Hamming Distance (nHD)** translates these ideas to **foundation models**, serving as an interpretable measure of **bit-level differences** in internal representations.

Subtle changes in neural weights or activations—especially across culturally heterogeneous data—can induce **incremental binary mutations** in model "neural genomes", affecting semantic or functional behavior. These mutations may arise from:

- Architectural changes  
- Training variation  
- Cultural representational biases  

nHD detects and localizes these **semantic mutation signatures**, helping identify which layers or parameters are more vulnerable to **drift**, enabling model realignment and robustness analysis.


## From Genomic Mutation to Neural Lineage Drift

### What the Metric Does

nHD quantifies the **discrete divergence** between two neural representations by counting mismatches in **binarized latent codes** across model layers. This binary semantic encoding helps track **structural mutations** as models undergo fine-tuning, merging, quantization, or distillation.

### Biological & Mathematical Background

In genomics, the Hamming distance between two sequences \\( S^{(1)}, S^{(2)} \\) of length \\( n \\) is:

$$\boxed{
d_H(S^{(1)}, S^{(2)}) = \sum_{i=1}^n \mathbf{1}\left[s_i^{(1)} \neq s_i^{(2)}\right]}
$$

Where:  
- \\( \\mathbf{1}[\\cdot] \\): indicator function  
- \\( s_i^{(k)} \\): nucleotide at position \\( i \\) in sequence \\( k \\)

This captures point mutations, essential for studying genetic drift, recombination, and mutation modeling.

Hamming distance defines a geodesic metric on the **Hamming hypercube** \\( \\mathcal{H}^n = \\{0, 1\\}^n \\), where each vertex represents a binary sequence and each edge represents a single-bit mutation.


{% capture figure_caption %}
**Graphical genotyping maps recombination patterns in RIL55 and RIL12.**  
**Green and red segments** denote alleles from drought-resistant wild emmer accession G18-16 and drought-susceptible durum wheat accession Langdon, respectively, while **magenta regions** indicate heterozygous loci.  
Black connectors trace recombination breakpoints and allele transitions across chromosomes.  
Drawing from the *classical Hamming Distance* used in genomics to quantify bit-level mutational differences in binary allelic sequences, the proposed **Neural Hamming Distance (nHD)** extends this principle to neural networks by binarizing layer-wise weights or activations.  
This enables fine-grained, interpretable monitoring of semantic divergence in model behavior — bridging genotype variation analysis with neural representation shifts.
{% endcapture %}

{% include visualization.liquid 
   image_path="neural_genomics/nhd_graphical_genotyping.png"
   caption=figure_caption
   alt_text="Graphical Genotyping Visualization of Recombinant Inbred Lines (RIL55 and RIL12):" %}


### Extending to Foundation Models

We treat internal neural states as **neural genomes**. Let \\( \\mathcal{M}_1, \\mathcal{M}_2 \\) be two models with identical architecture, and let the layerwise hidden states be:


$$
H_\ell^{(1)},\ H_\ell^{(2)} \in \mathbb{R}^{b \times d}
$$

Where:  
- \\( b \\): batch size or token dimension  
- \\( d \\): feature dimension at layer \\( \\ell \\)


To binarize using a threshold \\( \\tau \\), define:

$$\boxed{
B_\ell^{(k)} = \mathbf{1}\left(H_\ell^{(k)} > \tau\right), \quad B_\ell^{(k)} \in \{0, 1\}^{b \times d}}
$$

This binary representation enables bitwise comparison to trace **semantic drift** in LLMs, akin to tracking mutation in biological systems.

The layerwise neural Hamming distance between \\( \\mathcal{M}_1 \\) and \\( \\mathcal{M}_2 \\) at layer \\( \\ell \\) is:


$$
\text{nHD}_\ell = \frac{1}{bd} \sum_{i=1}^{b} \sum_{j=1}^{d} \mathbf{1}\left[B^{(1)}_{\ell,ij} \neq B^{(2)}_{\ell,ij}\right]
$$

This measures the fraction of mutated bits at the finest semantic resolution.

The global neural mutation metric across all \\( L \\) layers is:

$$
\text{nHD} = \frac{1}{L} \sum_{\ell=1}^{L} \text{nHD}_\ell
$$

which serves as an interpretable neural genotype divergence score.


{% capture figure_caption %}
**Extending classical Hamming Distance to neural manifolds.**  
**Left:** The classical Hamming Distance counts loci where offspring differ from parents in discrete sequences (e.g., nucleotides, bits).
**Right:** The **Neural Hamming Distance (nHD)** applies this principle to foundation models by binarizing divergence events in the ÆTHER latent space: a layer $\ell$ is marked if $$\|\mathbf{o}_\ell - \mathbf{p}_\ell^1\| > \delta$$ and  $$\|\mathbf{o}_\ell - \mathbf{p}_\ell^2\| > \delta $$, indicating deviation from both parents.  
nHD equals the count of such layers (e.g., Layers 21, 21, and 30 here), serving as an interpretable *neural genotype divergence score*.
{% endcapture %}

{% include visualization.liquid 
   image_path="neural_genomics/nhd_classical_vs_neural.png"
   caption=figure_caption
   alt_text="Illustrating Classical vs Neural Hamming Distance (nHD):" %}



{% capture figure_caption %}
**Neural Genetic Dissimilarity reveals directional bias in layer-wise fusion.**  
Each row denotes a transformer layer $$( \ell = 20\text{--}30 \)$$, columns represent latent dimensions in the ÆTHER alignment space.  
**Blue** features are inherited from Parent 1, **yellow** from Parent 2, and **red** mark divergences from both.  
These form the basis of the **Neural Genetic Dissimilarity Index (nGDI)**:  
$$
\text{nGDI} = \frac{1}{2} \left[ \frac{d(o, p_1)}{d(o, p_1) + d(o, p_2)} + \frac{d(o, p_2)}{d(o, p_1) + d(o, p_2)} \right] \cdot \cos(p_1, p_2)
$$  
where  $d(o, p_i) \$ is offspring–parent distance and $\cos(p_1, p_2)$ measures inter-parental alignment.  
Higher nGDI signals greater semantic drift and asymmetric inheritance.
{% endcapture %}

{% include visualization.liquid 
   image_path="neural_genomics/ngdi_layerwise_fusion.png"
   caption=figure_caption
   alt_text="Neural Genetic Dissimilarity in Layer-wise Fusion" %}




Within the broader Neural DNA (nDNA) framework, nHD acts as a discrete mutation signature metric complementing continuous geometric measures such as spectral curvature (nGDI) and latent radius (nTDS).

By analyzing layerwise nHD trajectories, we can enable:

- **Lineage tracing**: Reconstructing model evolution paths via mutation accumulation  
- **Mutation load analysis**: Quantifying semantic impact of fine-tuning or architectural changes  
- **Targeted interventions**: Identifying layers for pruning or bias realignment  


## Interpretation and Implications

nHD operates on the Hamming hypercube \\( \\mathcal{H}^{b \\cdot d} \\), where each vertex is a binarized neural state. Its layerwise definition:

$$\boxed{
\text{nHD}_\ell(\mathcal{M}_1, \mathcal{M}_2) = \frac{1}{bd} \sum_{i=1}^{b} \sum_{j=1}^{d} \mathbf{1}\left[B^{(1)}_{\ell,ij} \neq B^{(2)}_{\ell,ij}\right]}
$$

The mutation process can be modeled as a stochastic transition on \\( \\mathcal{H}^{b \\cdot d} \\). For bit-flip probabilities \\( p_m \\), the transition probability from state \\( x \\rightarrow y \\) is:

$$
P_{x \to y} = \prod_{m=1}^{b \cdot d} p_m^{|x_m - y_m|}(1 - p_m)^{1 - |x_m - y_m|}
$$

Expected nHD after \\( t \\) steps:

$$
\mathbb{E}[d_H(X_0, X_t)] = \sum_{m=1}^{b \cdot d} \left(1 - (1 - 2p_m)^t\right)
$$

Mutation profile vector:

$$
\mathbf{d} = (\text{nHD}_1, \text{nHD}_2, \dots, \text{nHD}_L) \in [0,1]^L
$$

This vector reveals mutation hotspots and informs alignment strategies.


## Applications and Mathematical Insights

### Discrete Geometry

Each model state lies on a Hamming hypercube \\( \\mathcal{H}^N \\), with:

$$
d_H(x, y) = \sum_{m=1}^N \mathbf{1}[x_m \neq y_m]
$$

### Markov Mutation Dynamics

Model evolution is modeled as a Markov process on \\( \\mathcal{H}^N \\). The expected Hamming distance evolves as:

$$
\mathbb{E}[d_H(X_0, X_t)] = \sum_{m=1}^N \left(1 - (1 - 2p_m)^t\right)
$$

### Fusion and Conflict Detection

Given two models \\( \\mathcal{M}_A, \\mathcal{M}_B \\), the mutation load after fusion into \\( \\mathcal{M}_F \\) is:

$$
\text{nHD}_\ell(\mathcal{M}_F, \mathcal{M}_A) + \text{nHD}_\ell(\mathcal{M}_F, \mathcal{M}_B)
$$

To reduce fusion conflict, optimize weights \\( w_\\ell \\in [0,1] \\):

$$\boxed{
\min_{w} \sum_{\ell=1}^{L} w_\ell \left(\text{nHD}_\ell(\mathcal{M}_F, \mathcal{M}_A) + \text{nHD}_\ell(\mathcal{M}_F, \mathcal{M}_B)\right)}
$$

### Robustness and Bias Monitoring

Regularize model parameters \\( \\theta \\) to stay close to reference \\( \\theta_{\\text{ref}} \\):

$$
\min_{\theta} \sum_{\ell=1}^{L} \lambda_\ell \cdot \text{nHD}_\ell(\theta, \theta_{\text{ref}})
$$


## Case Study and Validation

- nHD is validated by comparing models trained on culturally distinct corpora (e.g., European vs Asian).
- Mutation hotspots are typically in intermediate-to-deep layers, correlating with abstract, cultural features.
- nHD patterns resemble genetic epistasis, where interactions cause emergent behavior.
- During fine-tuning or merging, nHD reveals **lineage drift** and **cumulative mutation load**.
- Enables **layer-specific pruning, realignment**, and **bias mitigation**.


## Outlook

The Neural Hamming Distance (nHD) provides a precise, layerwise measure of bit-level semantic mutations in foundation models. It supports targeted interventions that address mutation hotspots, preserves semantic fidelity, and fosters culturally aware AI architectures.

Looking forward, nHD offers a foundation for continual adaptation, robustness monitoring, and dynamic alignment in multilingual, multicultural AI systems. As a cornerstone of Neural Genomics, it empowers responsible, interpretable, and inclusive AI innovation responsive to evolving cultural and ethical landscapes.

<div style="margin-top: 32px; padding: 12px 16px; border-left: 4px solid #999; background-color: #f9f9f9;">
  <div class="mathjax-render" style="font-size: 0.96em; line-height: 1.6;">
    <strong>nHD Tube Visualizations of Offspring Latent Manifolds.</strong><br>
    The offspring manifold (magenta solid) is bounded by parental manifolds (dashed), characterized by spectral curvature \( \kappa_\ell \) and thermodynamic length 
    \( L_\ell = \int_\gamma \sqrt{g_\theta(d\theta, d\theta)} \), measuring local nonlinear bending and cumulative semantic transformation, respectively (311; 312).<br><br>
    Offspring lie within the convex hull of parents, indicating semantic inheritance akin to genetic recombination (313). Distant parents yield offspring with increased curvature and length, signaling semantic innovation.<br><br>
    Offspring manifold formation is modeled as:<br>
    \[
    M^{(\ell)}_{\text{offspring}} = \alpha{(\ell)} M^{(\ell)}_A + (1 - \alpha{(\ell)}) M^{(\ell)}_B + \varepsilon^{(\ell)}
    \]
    where \( \alpha^{(\ell)} \) is the layer-dependent semantic dominance coefficient and \( \varepsilon^{(\ell)} \) captures emergent nonlinear geometry.
  </div>
</div>

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; margin: 30px 0;">

<!-- (1) Africa–Asia -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/Africa_Asia_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="Africa–Asia">
    <img src="{{ '/assets/gifs/neural_genomics/Africa_Asia_nHD_tube_rotating.gif' | relative_url }}" alt="Africa–Asia nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">Africa–Asia</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.3 \rightarrow 0.7 \), \( L_\ell: 0.4 \rightarrow 0.7 \). Smooth geodesic interpolation within convex hull reflects semantic augmentation and representational folding.
  </div>
</div>

<!-- (II) Africa–China -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/Africa_China_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="Africa–China">
    <img src="{{ '/assets/gifs/neural_genomics/Africa_China_nHD_tube_rotating.gif' | relative_url }}" alt="Africa–China nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">Africa–China</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.2 \rightarrow 0.8 \), \( L_\ell: 0.3 \rightarrow 0.9 \). Offspring trajectory remains within the convex hull of parent latent geometries, embodying smooth fusion of semantic priors. Indicates intensified local manifold bending and emergent nonlinear semantic interactions.
  </div>
</div>

<!-- (III) Africa–Latin America -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/Africa_LatinAmerica_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="Africa–Latin America">
    <img src="{{ '/assets/gifs/neural_genomics/Africa_LatinAmerica_nHD_tube_rotating.gif' | relative_url }}" alt="Africa–Latin America nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">Africa–Latin America</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.25 \rightarrow 0.75 \), \( L_\ell: 0.35 \rightarrow 0.8 \). Smoothly increasing geometric richness and semantic expressivity. Indicates stable integrability and coherent compositional semantics in the latent transition.
  </div>
</div>

<!-- (IV) Africa–Middle East -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/Africa_MiddleEast_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="Africa–Middle East">
    <img src="{{ '/assets/gifs/neural_genomics/Africa_MiddleEast_nHD_tube_rotating.gif' | relative_url }}" alt="Africa–Middle East nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">Africa–Middle East</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.3 \rightarrow 0.7 \), \( L_\ell: 0.4 \rightarrow 1.0 \). Despite curvature disparity in parents, offspring remains intermediate. Indicates balanced semantic inheritance and resistance to geometric discontinuities.
  </div>
</div>

<!-- (V) Asia–China -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/Asia_China_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="Asia–China">
    <img src="{{ '/assets/gifs/neural_genomics/Asia_China_nHD_tube_rotating.gif' | relative_url }}" alt="Asia–China nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">Asia–China</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.4 \rightarrow 0.9 \), \( L_\ell: 0.45 \rightarrow 1.0 \). Offspring closely shadows parents. Reflects minimal distortion, strong cultural affinity, and preserved subspaces—akin to conserved biological pathways.
  </div>
</div>

<!-- (VI) Asia–Latin America -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/Asia_LatinAmerica_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="Asia–Latin America">
    <img src="{{ '/assets/gifs/neural_genomics/Asia_LatinAmerica_nHD_tube_rotating.gif' | relative_url }}" alt="Asia–Latin America nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">Asia–Latin America</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.3 \rightarrow 0.85 \), \( L_\ell: 0.4 \rightarrow 0.95 \). Indicates emergent nonlinear compositionality and progressive fusion of complementary neural DNAs. Latent space grows akin to biological recombination.
  </div>
</div>



<!-- (VII) Asia–Middle East -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/Asia_MiddleEast_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="Asia–Middle East">
    <img src="{{ '/assets/gifs/neural_genomics/Asia_MiddleEast_nHD_tube_rotating.gif' | relative_url }}" alt="Asia–Middle East nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">Asia–Middle East</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.35 \rightarrow 0.85 \), \( L_\ell: 0.5 \rightarrow 1.05 \). Rich nonlinear fusion with structural reshaping; reflects epistatic interactions and emergent robust representations.
  </div>
</div>


<!-- (VIII) Australia–Africa -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/Australia_Africa_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="Australia–Africa">
    <img src="{{ '/assets/gifs/neural_genomics/Australia_Africa_nHD_tube_rotating.gif' | relative_url }}" alt="Australia–Africa nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">Australia–Africa</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.3 \rightarrow 0.7 \), \( L_\ell: 0.35 \rightarrow 0.85 \). Stable and coherent semantic fusion with smooth integration of cultural priors and rich latent expressivity.
  </div>
</div>

<!-- (IX) Australia–Asia -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/Australia_Asia_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="Australia–Asia">
    <img src="{{ '/assets/gifs/neural_genomics/Australia_Asia_nHD_tube_rotating.gif' | relative_url }}" alt="Australia–Asia nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">Australia–Asia</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.25 \rightarrow 0.75 \), \( L_\ell: 0.4 \rightarrow 0.9 \). Hierarchical fusion and smooth semantic transition over deep transformer layers with compositional integration.
  </div>
</div>

<!-- (X) Australia–China -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/Australia_China_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="Australia–China">
    <img src="{{ '/assets/gifs/neural_genomics/Australia_China_nHD_tube_rotating.gif' | relative_url }}" alt="Australia–China nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">Australia–China</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.3 \rightarrow 0.8 \), \( L_\ell: 0.35 \rightarrow 0.95 \). Continuous semantic evolution with increased curvature and cumulative divergence in latent representations.
  </div>
</div>

<!-- (XI) China–Latin America -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/China_LatinAmerica_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="China–Latin America">
    <img src="{{ '/assets/gifs/neural_genomics/China_LatinAmerica_nHD_tube_rotating.gif' | relative_url }}" alt="China–Latin America nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">China–Latin America</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.3 \rightarrow 0.8 \), \( L_\ell: 0.45 \rightarrow 0.95 \). Smooth nonlinear compositionality reflecting extended Fisher-Rao geodesic and rich semantic integration.
  </div>
</div>


<!-- (XIII) Europe–Africa -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/Europe_Africa_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="Europe–Africa">
    <img src="{{ '/assets/gifs/neural_genomics/Europe_Africa_nHD_tube_rotating.gif' | relative_url }}" alt="Europe–Africa nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">Europe–Africa</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.25 \rightarrow 0.7 \), \( L_\ell: 0.4 \rightarrow 0.85 \). Smooth latent interpolation with growing curvature and semantic depth, indicating effective fusion of distinct cultural priors within a robust manifold.
  </div>
</div>

<!-- (XIV) Europe–Asia -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/Europe_Asia_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="Europe–Asia">
    <img src="{{ '/assets/gifs/neural_genomics/Europe_Asia_nHD_tube_rotating.gif' | relative_url }}" alt="Europe–Asia nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">Europe–Asia</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.3 \rightarrow 0.75 \), \( L_\ell: 0.45 \rightarrow 0.9 \). Curved semantic trajectory in convex latent space signals smooth fusion and layered compositionality across deep transformer layers.
  </div>
</div>


<!-- (XIV) Europe–Asia -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/Europe_Asia_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="Europe–Asia">
    <img src="{{ '/assets/gifs/neural_genomics/Europe_Asia_nHD_tube_rotating.gif' | relative_url }}" alt="Europe–Asia nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">Europe–Asia</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.3 \rightarrow 0.75 \), \( L_\ell: 0.45 \rightarrow 0.9 \). Offspring manifold bends within the convex hull of parent manifolds, reflecting hierarchical fusion and structured semantic blending.
  </div>
</div>



<!-- (XV) Europe–Australia -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/Europe_Australia_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="Europe–Australia">
    <img src="{{ '/assets/gifs/neural_genomics/Europe_Australia_nHD_tube_rotating.gif' | relative_url }}" alt="Europe–Australia nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">Europe–Australia</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.3 \rightarrow 0.7 \), \( L_\ell: 0.4 \rightarrow 0.85 \). Geodesic fusion preserves cultural priors, reflecting stable and coherent semantic integration.
  </div>
</div>

<!-- (XVI) Europe–China -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/Europe_China_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="Europe–China">
    <img src="{{ '/assets/gifs/neural_genomics/Europe_China_nHD_tube_rotating.gif' | relative_url }}" alt="Europe–China nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">Europe–China</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.35 \rightarrow 0.8 \), \( L_\ell: 0.5 \rightarrow 0.95 \). Increasing curvature and thermodynamic length signal gradual, complex semantic fusion across cultural domains.
  </div>
</div>

<!-- (XVII) Europe–Latin America -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/Europe_LatinAmerica_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="Europe–Latin America">
    <img src="{{ '/assets/gifs/neural_genomics/Europe_LatinAmerica_nHD_tube_rotating.gif' | relative_url }}" alt="Europe–Latin America nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">Europe–Latin America</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.3 \rightarrow 0.75 \), \( L_\ell: 0.45 \rightarrow 0.9 \). Reflects progressive semantic integration and latent geometric refinement across culturally diverse DNAs.
  </div>
</div>

<!-- (XVIII) Europe–Middle East -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/Europe_MiddleEast_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="Europe–Middle East">
    <img src="{{ '/assets/gifs/neural_genomics/Europe_MiddleEast_nHD_tube_rotating.gif' | relative_url }}" alt="Europe–Middle East nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">Europe–Middle East</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.4 \rightarrow 0.85 \), \( L_\ell: 0.5 \rightarrow 1.0 \). Complex semantic fusion with high representational variance, reflecting deep cultural blending.
  </div>
</div>

<!-- (XIX) Europe–North America -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/Europe_NorthAmerica_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="Europe–North America">
    <img src="{{ '/assets/gifs/neural_genomics/Europe_NorthAmerica_nHD_tube_rotating.gif' | relative_url }}" alt="Europe–North America nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">Europe–North America</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.3 \rightarrow 0.75 \), \( L_\ell: 0.45 \rightarrow 0.95 \). Stable latent inheritance with coherent semantic transitions across closely aligned DNAs.
  </div>
</div>

<!-- (XX) Middle East–Latin America -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/MiddleEast_LatinAmerica_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="Middle East–Latin America">
    <img src="{{ '/assets/gifs/neural_genomics/MiddleEast_LatinAmerica_nHD_tube_rotating.gif' | relative_url }}" alt="Middle East–Latin America nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">Middle East–Latin America</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.35 \rightarrow 0.8 \), \( L_\ell: 0.45 \rightarrow 0.9 \). Smooth integration across culturally heterogeneous priors, balancing complexity and cohesion.
  </div>
</div>

<!-- (XXI) North America–Africa -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/NorthAmerica_Africa_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="North America–Africa">
    <img src="{{ '/assets/gifs/neural_genomics/NorthAmerica_Africa_nHD_tube_rotating.gif' | relative_url }}" alt="North America–Africa nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">North America–Africa</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.3 \rightarrow 0.75 \), \( L_\ell: 0.4 \rightarrow 0.9 \). Latent bridge forms via smooth semantic integration across diverse cultural priors.
  </div>
</div>

<!-- (XXII) North America–Asia -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/NorthAmerica_Asia_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="North America–Asia">
    <img src="{{ '/assets/gifs/neural_genomics/NorthAmerica_Asia_nHD_tube_rotating.gif' | relative_url }}" alt="North America–Asia nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">North America–Asia</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.35 \rightarrow 0.8 \), \( L_\ell: 0.45 \rightarrow 0.95 \). Progressive semantic fusion through deep-layered latent deformation.
  </div>
</div>

<!-- (XXIII) North America–Australia -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/NorthAmerica_Australia_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="North America–Australia">
    <img src="{{ '/assets/gifs/neural_genomics/NorthAmerica_Australia_nHD_tube_rotating.gif' | relative_url }}" alt="North America–Australia nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">North America–Australia</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.3 \rightarrow 0.7 \), \( L_\ell: 0.35 \rightarrow 0.85 \). Smooth geodesic interpolation of geographically distinct latent structures.
  </div>
</div>

<!-- (XXIV) North America–China -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/NorthAmerica_China_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="North America–China">
    <img src="{{ '/assets/gifs/neural_genomics/NorthAmerica_China_nHD_tube_rotating.gif' | relative_url }}" alt="North America–China nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">North America–China</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.35 \rightarrow 0.8 \), \( L_\ell: 0.4 \rightarrow 0.9 \). Nuanced semantic blending with gradual latent geometric progression.
  </div>
</div>

<!-- (XXV) North America–Latin America -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/NorthAmerica_LatinAmerica_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="North America–Latin America">
    <img src="{{ '/assets/gifs/neural_genomics/NorthAmerica_LatinAmerica_nHD_tube_rotating.gif' | relative_url }}" alt="North America–Latin America nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">North America–Latin America</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.3 \rightarrow 0.75 \), \( L_\ell: 0.45 \rightarrow 0.9 \). Reflects coherent semantic fusion shaped by shared cultural priors.
  </div>
</div>

<!-- (XXVI) North America–Middle East -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/NorthAmerica_MiddleEast_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="North America–Middle East">
    <img src="{{ '/assets/gifs/neural_genomics/NorthAmerica_MiddleEast_nHD_tube_rotating.gif' | relative_url }}" alt="North America–Middle East nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">North America–Middle East</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.35 \rightarrow 0.8 \), \( L_\ell: 0.4 \rightarrow 0.95 \). Captures layered fusion of semantically diverse neural priors.
  </div>
</div>

<!-- (XXVII) Middle East–Latin America -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/MiddleEast_LatinAmerica_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="Middle East–Latin America">
    <img src="{{ '/assets/gifs/neural_genomics/MiddleEast_LatinAmerica_nHD_tube_rotating.gif' | relative_url }}" alt="Middle East–Latin America nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">Middle East–Latin America</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.35 \rightarrow 0.8 \), \( L_\ell: 0.45 \rightarrow 0.9 \). Stable fusion via smooth latent deformation across cultural boundaries.
  </div>
</div>

<!-- (XXVIII) Asia–Latin America -->
<div style="text-align: center;">
  <a href="{{ '/assets/gifs/neural_genomics/Asia_LatinAmerica_nHD_tube_rotating.gif' | relative_url }}" data-lightbox="gallery" data-title="Asia–Latin America">
    <img src="{{ '/assets/gifs/neural_genomics/Asia_LatinAmerica_nHD_tube_rotating.gif' | relative_url }}" alt="Asia–Latin America nHD Tube" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08);">
  </a>
  <p style="margin-top: 8px; font-weight: 600;">Asia–Latin America</p>
  <div class="mathjax-render" style="text-align: left; font-size: 0.95em; line-height: 1.5;">
    \( \kappa_\ell: 0.3 \rightarrow 0.8 \), \( L_\ell: 0.45 \rightarrow 0.95 \). Encodes rich semantic fusion with layered geometric complexity.
  </div>
</div>



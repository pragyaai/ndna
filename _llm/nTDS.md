---
layout: page
title: "Neural Trait Dominance Score(nTDS)"
permalink: /llm/neural-genomics/nTDS/
skip_title: True
mathjax: True
---
{% include ndna-title.liquid title="nDNA Lens - nTDS: Neural Trait Dominance Score" %}

<script type="text/javascript" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

## Introduction

While nHD and nGDI effectively quantify overall semantic divergence and global representational distance from parent models, they lack the resolution to reveal how specific semantic traits are differentially inherited across the depth of a foundation model. To fill this gap, we introduce the **Neural Trait Dominance Score (nTDS)**, a layer-wise metric designed to capture the relative influence each parent model exerts on the offspring's latent representations at every transformer layer.

## Genome-wide Quantitative Trait Loci (QTL) Mapping

{% capture figure_caption %}
This example shows the genome-wide scan for quantitative trait loci across genomes, where each peak represents a genomic region statistically associated with phenotypic variation. Formally, QTL mapping estimates the association between genetic markers G<sub>i</sub> and quantitative traits T by testing the linear model: 
<strong>T = μ + β<sub>i</sub>G<sub>i</sub> + ε</strong>,
where μ is the population mean, β<sub>i</sub> is the effect size of marker G<sub>i</sub>, and ε is the residual error ({% cite mackay2009genetics %};{% cite borevitz2003quantitative %}). Peaks in the LOD (logarithm of odds) score indicate loci with significant trait associations, revealing genomic regions with dominant genetic influence on the phenotype.

**Connection to Neural Trait Dominance Score (nTDS)** Analogous to QTLs indicating dominant parental allele influence on phenotypic traits at chromosomal loci, the **nTDS** quantifies the dominance of parental semantic traits across transformer layers in foundation models. Each layer **ℓ** functions as a semantic locus, where nTDS identifies which parent exerts greater influence on the offspring's internal representation. 
**Implications:**This biological metaphor underscores that **semantic inheritance in neural models is layer-specific and trait-dependent**, much like phenotypic traits vary in genetic dominance across chromosomes. Understanding these patterns facilitates: **Targeted alignment tuning**, **Improved interpretability**, **Balanced semantic integration**, **Mitigation of bias propagation** in multicultural AI systems
{% endcapture %}

{% include visualization.liquid 
   image_path="gifs/neural_genomics/nTDS/nTDS_QTL_Mapping.png"
   caption=figure_caption
   alt_text="Genome-wide Quantitative Trait Loci (QTL) Mapping" %}

Biologically, nTDS draws inspiration from *quantitative trait loci (QTL) mapping* and *allelic dominance in genetics {% cite griffiths2015introduction %}*, where individual traits can be dominantly inherited from one parent over
another, depending on complex regulatory networks and epigenetic modulation. Similarly, in neuralmodels, semantic traits (such as cultural priors, conceptual biases, or linguistic features) can exhibit
varying dominance patterns across layers, reflecting hierarchical feature extraction and integration processes.

By quantifying these dominance relationships layer-by-layer, nTDS illuminates which parental semantic characteristics prevail in different depths of the offspring model, thus enabling more nuanced
insights into **semantic inheritance dynamics** and guiding targeted alignment or fine-tuning strategies focused on preserving or balancing desired trait influences.

**Mathematical Formulation of Neural Trait Dominance Score (nTDS)**

<p style="text-align: justify; font-size: 1em;">
  <strong>The Neural Trait Dominance Score (nTDS)</strong> formalizes the notion of layerwise parental trait influence in an offspring foundation model <span class="mathjax-render">\( M_O \)</span>, constructed from two parent models <span class="mathjax-render">\( M_A \)</span> and <span class="mathjax-render">\( M_B \)</span>, within the Neural DNA (nDNA) semantic geometry framework.
  Let 
  <span class="mathjax-render">\( \mathbf{x}_\ell^{(A)},\ \mathbf{x}_\ell^{(B)},\ \mathbf{x}_\ell^{(O)} \in \mathcal{M}_\ell \subseteq \mathbb{R}^d \)</span>,
  <span class="mathjax-render">\( \ell = 1, \ldots, L \)</span>, 
  denote the latent semantic embeddings at layer <span class="mathjax-render">\( \ell \)</span>
  for <span class="mathjax-render">\( M_A \)</span>, <span class="mathjax-render">\( M_B \)</span>, and <span class="mathjax-render">\( M_O \)</span> respectively, where <span class="mathjax-render">\( L \)</span> is the total number 
  of transformer layers and <span class="mathjax-render">\( d \)</span> is the embedding dimension. Each 
  <span class="mathjax-render">\( \mathcal{M}_\ell \)</span>
  is a Riemannian manifold equipped with a local Fisher information metric 
  <span class="mathjax-render">\( \mathbf{F}_\ell \)</span>.
</p>


## Trait Axis and Local Linearization

Define the parental semantic trait axis at layer $\ell$ as the geodesic tangent vector connecting parent embeddings:

$$v_\ell := \log_{x_\ell^{(B)}}(x_\ell^{(A)}) \in T_{x_\ell^{(B)}}\mathcal{M}_\ell$$

where $\log_p(q)$ denotes the Riemannian logarithmic map projecting point $q$ onto the tangent space $T_p\mathcal{M}_\ell$ at $p$.

Similarly, define the offspring displacement vector relative to parent B as:

$$u_\ell := \log_{x_\ell^{(B)}}(x_\ell^{(O)}) \in T_{x_\ell^{(B)}}\mathcal{M}_\ell$$

These vectors encode semantic trait differences and inheritance displacement within the intrinsic geometry of $\mathcal{M}_\ell$.

## Fisher-Rao Metric and Inner Product

<p style="text-align: justify; font-size: 1em;">
  The tangent space 
  <span class="mathjax-render">\( T_{\mathbf{x}_\ell^{(B)}}\mathcal{M}_\ell \)</span> 
  is endowed with a local inner product induced by the Fisher information metric 
  <span class="mathjax-render">\( \mathbf{F}_\ell^{(B)} \)</span>:
</p>

$$\boxed{\langle a, b \rangle_{F_\ell^{(B)}} := a^T F_\ell^{(B)} b, \quad a, b \in T_{x_\ell^{(B)}}\mathcal{M}_\ell}$$

which respects local curvature and parameter uncertainty, providing a natural metric for semantic similarity and projection.

## Normalized Projection and Dominance Ratio

Project the offspring displacement $u_\ell$ onto the parental trait axis $v_\ell$ via:

$$\alpha_\ell := \frac{\langle u_\ell, v_\ell \rangle_{F_\ell^{(B)}}}{\|v_\ell\|_{F_\ell^{(B)}}^2} = \frac{u_\ell^T F_\ell^{(B)} v_\ell}{v_\ell^T F_\ell^{(B)} v_\ell}$$

The scalar $\alpha_\ell \in \mathbb{R}$ quantifies the relative alignment of offspring semantics with parent A along the geodesic from parent B. Specifically:
- $\alpha_\ell > 1$ indicates overdominance of parent A
- $\alpha_\ell \approx 0$ indicates dominance of parent B  
- Intermediate values indicate blended contributions

## Monotonic Normalization and Bounded Score

To achieve a bounded and interpretable dominance score, apply a logistic normalization:

$$\boxed{\text{nTDS}_\ell := \sigma(k(\alpha_\ell - 0.5)) = \frac{1}{1 + \exp(-k(\alpha_\ell - 0.5))}}$$

where $k > 0$ controls sensitivity near the midpoint 0.5, ensuring $\text{nTDS}_\ell \in (0, 1)$ with higher values denoting stronger dominance of parent A.

## Layerwise Aggregation

Aggregate across layers to obtain a global trait dominance measure:

$$\text{nTDS} := \frac{1}{L} \sum_{\ell=1}^L \text{nTDS}_\ell$$

which reflects the overall parental influence on the offspring's latent semantics.

## Jacobian Sensitivity and Dynamic Refinement

Extend the static embedding analysis by incorporating the Jacobian $J_\ell^{(M)} := \frac{\partial x_\ell^{(M)}}{\partial \theta_\ell}$ of latent embeddings with respect to model parameters $\theta_\ell$.

Define the trait influence operator:

$$\mathcal{J}_\ell := J_\ell^{(A)} (J_\ell^{(A)})^T - J_\ell^{(B)} (J_\ell^{(B)})^T$$

capturing differential sensitivity of the latent space to parameter perturbations.

<p style="text-align: justify; font-size: 1em;">
  Enhance <span class="mathjax-render">\( \text{nTDS}_\ell \)</span> by weighting 
  <span class="mathjax-render">\( \alpha_\ell \)</span> with spectral properties of 
  <span class="mathjax-render">\( \mathcal{J}_\ell \)</span>, thereby integrating dynamic semantic influence and identifying layers where trait dominance is both geometrically and parametrically significant.
</p>


## Interpretation:

- *High* $\mathrm{nTDS}_\ell$ indicates semantic traits primarily inherited from parent $A$ at layer $\ell$.
- *Low* $\mathrm{nTDS}_\ell$ indicates dominance of parent $B$.
- *Intermediate* values denote *mixed inheritance* revealing complex blending of traits.

## Connection to Population Genetics and QTL Analysis:

This framework parallels *quantitative trait locus (QTL)* mapping in population genetics {% cite griffiths2015introduction %}, where chromosomal loci correlate with phenotypic trait variance. Here, transformer layers analogously represent *semantic chromosomal segments*, and nTDS quantifies the differential contribution of parental "alleles" to offspring semantic traits.

## Summary:

The **nTDS** provides a rigorous, curvature-aware, and sensitivity-informed measure of layerwise trait dominance, crucial for understanding semantic inheritance patterns during model merging, fine-tuning, and alignment.

## Interpretation and Implications

<p style="text-align: justify; font-size: 1em;">
  The <em>Neural Trait Dominance Score</em> (<strong>nTDS</strong>) serves as a <strong>precise</strong>, layer-resolved indicator of how semantic traits from each parent model manifest within an offspring foundation model. By quantifying the relative proximity of the offspring's latent embeddings 
  <span class="mathjax-render">\( \mathbf{x}^{(O)}_{\ell} \)</span> 
  to each parent's embeddings 
  <span class="mathjax-render">\( \mathbf{x}^{(A)}_{\ell} \)</span> and 
  <span class="mathjax-render">\( \mathbf{x}^{(B)}_{\ell} \)</span> 
  at every layer 
  <span class="mathjax-render">\( \ell \)</span>, 
  <strong>nTDS</strong> reveals the <em>parental influence gradient</em> governing semantic inheritance.
</p>


Explicitly, the metric
$$\text{nTDS}_\ell = \frac{\left\| \mathbf{x}^{(O)}_{\ell} - \mathbf{x}^{(B)}_{\ell} \right\|_2 - \left\| \mathbf{x}^{(O)}_{\ell} - \mathbf{x}^{(A)}_{\ell} \right\|_2}{\left\| \mathbf{x}^{(A)}_{\ell} - \mathbf{x}^{(B)}_{\ell} \right\|_2 + \epsilon}$$

<p style="text-align: justify; font-size: 0.9em;">
  encapsulates the degree to which the offspring's semantic representation 
  <span class="mathjax-render">\( \mathbf{x}^{(O)}_{\ell} \)</span> 
  leans towards <strong>parent A</strong> 
  (<span class="mathjax-render">\( \text{nTDS}_\ell > 0 \)</span>) 
  or <strong>parent B</strong> 
  (<span class="mathjax-render">\( \text{nTDS}_\ell < 0 \)</span>), 
  offering a normalized and continuous measure of <em>dominance</em>.
</p>


The **layer-specific patterns** uncovered by **nTDS** expose the *non-uniform transmission* of semantic traits: **early transformer layers** often reflect the more *literal* and *syntactic* characteristics of one parent, while **deeper layers** emphasize *abstract*, *culturally nuanced* semantics originating from the other. This layered trait distribution echoes hierarchical models of cognition and language processing, where progressively abstract representations emerge along the neural processing hierarchy ({% cite tenney2019bert %}; {% cite alain2016understanding %}).

From a formal perspective, **nTDS** quantifies trait dominance via **Euclidean distances** within the high-dimensional latent semantic space, effectively mirroring the biological concept of *quantitative trait loci* (QTLs) {% cite griffiths2015introduction %}, where specific genomic loci modulate the expression of phenotypic traits. This analogy bridges genomics and deep learning by treating transformer layers as functional "genomic loci" influencing semantic phenotype expression.

Practically, the insights offered by **nTDS** enable **strategic fine-tuning** and **transfer learning** interventions: by pinpointing layers with dominant parental traits, practitioners can selectively amplify or attenuate these features to optimize performance, cultural sensitivity, and fairness. This capability enhances model *transparency* and *adaptability* across diverse sociocultural contexts.

In summary, **nTDS** delivers a *biologically grounded*, **mathematically rigorous** framework for unraveling the complex **semantic inheritance architecture** within foundation models. It empowers nuanced control over how parental knowledge integrates, steering the development of **fair**, **interpretable**, and **culturally aware** AI systems attuned to global diversity.

## Applications and Empirical Insights

The **Neural Trait Dominance Score (nTDS)** serves as a mathematically rigorous and semantically nuanced metric that quantifies *layerwise parental influence* on an offspring foundation model's latent semantic embeddings. Formally, for each transformer layer $\ell$, the quantity the quantity $\mathrm{nTDS}\ell$ measures the normalized difference in Euclidean distances between the offspring embedding $\mathbf{x}\ell^{(O)}$ and its parents' embeddings $\mathbf{x}\ell^{(A)}$ and $\mathbf{x}\ell^{(B)}$:

$$\boxed{
\mathrm{nTDS}_\ell = \frac{\|\mathbf{x}^{(O)}_\ell - \mathbf{x}^{(B)}_\ell\|_2 - \|\mathbf{x}^{(O)}_\ell - \mathbf{x}^{(A)}_\ell\|_2}{\|\mathbf{x}^{(A)}_\ell - \mathbf{x}^{(B)}_\ell\|_2 + \epsilon}}
$$

where $\epsilon > 0$ prevents division by zero and stabilizes the metric.

### Trait Dominance Profiling and Semantic Layer Dynamics:

Layerwise $\mathrm{nTDS}\ell$ decomposes the global inheritance pattern into a trait dominance trajectory over model depth $\ell \in \{1, \dots, L\}$, revealing where and how strongly offspring semantics skew towards parent $A$ ($\mathrm{nTDS}\ell > 0$) or parent $B$ ($\mathrm{nTDS}_\ell < 0$). This fine-grained analysis uncovers semantic loci within the latent manifold where cultural or functional traits concentrate, morph, or attenuate.
Mathematically, the continuity and smoothness of $\mathrm{nTDS}\ell$ over $\ell$ provide insights into hierarchical trait propagation and transformer layer specialization. For instance, abrupt discontinuities or high gradient magnitudes $\left|\frac{d}{d\ell} \mathrm{nTDS}\ell \right|$ may signal semantic bottlenecks or layerwise representational shifts critical for alignment tuning.

### Implications for Model Fusion and Fine-Tuning:

In complex model merging scenarios, $\mathrm{nTDS}_\ell$ can serve as a diagnostic function $f: \ell \mapsto [-1, 1]$ to design *layer-adaptive regularization* objectives:

$$\mathcal{L}_{\mathrm{align}} = \sum_{\ell=1}^L \lambda_\ell \cdot \mathrm{loss}_\ell, \quad \text{where} \quad \lambda_\ell = g\big(\mathrm{nTDS}_\ell\big),$$

and $g$ is a monotonic mapping that amplifies training focus on layers exhibiting dominant trait bias or instability. Such mathematically principled weighting schemes optimize semantic harmonization and reduce cultural drift without sacrificing expressivity.

### Cross-Cultural and Architectural Benchmarking:

The scalar field $\mathrm{nTDS}_\ell$ over $\ell$ extends naturally to a multi-dimensional comparison space when considering multiple parent-offspring tuples $(M_A, M_B, M_O)$, facilitating statistical analyses:

$$\mathbb{E}_{i,j}[\mathrm{nTDS}_\ell^{(i,j)}], \quad \mathrm{Var}_{i,j}[\mathrm{nTDS}_\ell^{(i,j)}],$$

which reveal consistent patterns or variabilities in trait dominance across different cultural pairs and architectural configurations. This empowers systematic evaluation of merging strategies and cultural fusion methods.

**Interpretability and Explainability:** By tracing $\mathrm{nTDS}_\ell$ trajectories, researchers gain transparent maps of semantic lineage, enabling interpretability of offspring model behavior in terms of parental cultural and functional contributions. This vectorial quantification demystifies the black-box nature of foundation models, providing actionable insights for stakeholders concerned with cultural sensitivity and fairness.

**Biological and Theoretical Insights:** 
<p style="text-align: justify; font-size: 1em;">
  <span class="mathjax-render">\( \mathrm{nTDS}_\ell \)</span> is conceptually analogous to quantitative trait loci (QTLs) in genomics {% cite griffiths2015introduction %}, where trait variance is mapped onto chromosomal positions. Here, 
  <span class="mathjax-render">\( \mathrm{nTDS}_\ell \)</span> maps semantic trait dominance onto transformer layers, elucidating semantic loci akin to chromosomal trait regions. This analogy enriches theoretical understanding of model inheritance, highlighting hierarchical and modular trait transmission across network depth.
</p>

**Practical Applications:** $\mathrm{nTDS}_\ell$ guides targeted intervention in layer-specific fine-tuning, adaptive fusion mechanism design, and alignment auditing to ensure culturally robust and semantically faithful foundation models. Its computational efficiency and intuitive interpretability make it an indispensable tool for responsible AI governance in a multicultural world.

In essence, the Neural Trait Dominance Score (nTDS) advances both the scientific understanding and practical alignment engineering of foundation models, providing a mathematically sound, interpretable, and scalable metric for navigating the complex semantic landscape of cultural inheritance.

## Case Study and Validation

To empirically validate the Neural Trait Dominance Score (nTDS), we examine foundation models pretrained or fine-tuned on culturally distinct corpora, such as European and Asian datasets, along with their merged offspring models. By extracting layerwise latent embeddings $x_\ell^{(\mathrm{Eur})}$, $x_\ell^{(\mathrm{Asi})}$, and $x_\ell^{(\mathrm{Offspring})}$, we compute the $\mathrm{nTDS}_\ell$ metric as:

$$\boxed{\mathrm{nTDS}_\ell = \frac{\|x_\ell^{(\mathrm{Offspring})} - x_\ell^{(\mathrm{Asi})}\|_2 - \|x_\ell^{(\mathrm{Offspring})} - x_\ell^{(\mathrm{Eur})}\|_2}{\|x_\ell^{(\mathrm{Eur})} - x_\ell^{(\mathrm{Asi})}\|_2 + \epsilon}}$$

where $\epsilon > 0$ ensures numerical stability.

Layerwise plots of $\mathrm{nTDS}_\ell$ reveal the depth-dependent dominance of parental cultural traits across the transformer architecture. Early layers ($\ell \in [1, 10]$) often exhibit values close to zero, indicating balanced inheritance of foundational lexical and syntactic features. In contrast, intermediate and deeper layers ($\ell \in [15, 30]$) display marked deviations toward either parent, signaling layer-specific semantic specialization and cultural imprinting.

Notably, sharp transitions in $\mathrm{nTDS}_\ell$ correspond to trait dominance shifts where the offspring's semantic representation abruptly favors one cultural lineage over another. These shifts illuminate the modular and hierarchical nature of semantic inheritance, aligning with biological analogs of quantitative trait loci (QTL) that localize phenotypic trait control to specific genomic regions (321).

Empirically, we observe that $\mathrm{nTDS}_\ell$ not only quantifies trait dominance but also correlates with performance variations on culturally sensitive downstream tasks, emphasizing its utility as a proxy for semantic fidelity and alignment efficacy.

This case study further illustrates that $\mathrm{nTDS}_\ell$ provides actionable insights for layer-targeted fine-tuning, allowing practitioners to amplify desired cultural traits or mitigate biases through precision regularization at specific layers. Such interventions can harmonize trait dominance profiles to optimize cross-cultural robustness and fairness.

In summary, the empirical validation underscores nTDS as a powerful, interpretable metric that deciphers the complex dynamics of semantic trait inheritance in multicultural foundation models, bridging the gap between theoretical understanding and practical alignment engineering.

## Outlook

The Neural Trait Dominance Score (nTDS) stands as a foundational pillar within the Neural Genomics framework, offering a precise, layer-resolved quantification of semantic trait inheritance across the complex architecture of foundation models shaped by culturally heterogeneous corpora. By mathematically formalizing the layerwise dominance coefficients $\delta_\ell^{(A,B)}$ that describe how parental semantic features $x_\ell^{(A)}$, $x_\ell^{(B)}$ influence offspring embeddings $x_\ell^{(O)}$, nTDS enables researchers to disentangle and localize the multidimensional dynamics of cultural imprinting with unprecedented granularity.

Beyond mere descriptive statistics, nTDS encapsulates the geometric interplay of latent embeddings within a Riemannian manifold structured by Fisher information matrices $F_\ell$, capturing how differential trait weights alter the semantic curvature and topological complexity across depth $\ell$. This leads to a mathematically rich picture where trait dominance reflects not only vector magnitudes but also nuanced directional biases and local manifold distortions, formalized as:

$$\boxed{\delta_\ell^{(A)} = \frac{\langle x_\ell^{(O)} - x_\ell^{(B)}, x_\ell^{(A)} - x_\ell^{(B)} \rangle_{F_\ell}}{\|x_\ell^{(A)} - x_\ell^{(B)}\|_{F_\ell}^2}}$$

where $\langle \cdot, \cdot \rangle_{F_\ell}$ denotes the Fisher-weighted inner product encoding local semantic sensitivity.

By operationalizing these hierarchical dominance coefficients, nTDS guides the design of layer-specific alignment and intervention protocols, facilitating targeted modulation of trait influence–amplifying underrepresented cultural semantics or attenuating dominant biases–thus ensuring balanced, robust, and interpretable cross-cultural semantic fusion.

Looking forward, nTDS paves the way for mathematically principled explorations into multi-scale knowledge transfer, dynamical trait adaptation, and compositional cultural synthesis within foundation models. By enabling explicit control over trait propagation in a Riemannian semantic space, nTDS lays the theoretical and practical groundwork for AI systems that evolve adaptively, mirror the complexity of human cultural heritage, and respond coherently to shifting societal values.

In essence, the Neural Trait Dominance Score is poised to become a cornerstone metric–both a diagnostic lens and a strategic instrument–empowering researchers and practitioners to engineer responsible, inclusive, and context-aware AI systems with fine-grained control over the flow and balance of semantic traits at scale.

<div style="display: flex; flex-direction: column; margin: 2em 0; gap: 1em;">
  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/Africa_Asia_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/Africa_Asia_nTDS_interactive_rect_bars.html"
      title="(I) Africa–Asia Trait Dominance"
      caption="The Neural Trait Dominance Score (nTDS) reveals a layer-wise shift in dominance from Africa to Asia. Early layers (20–23) show stronger dominance by Africa (nTDS close to 1.0), reflecting more foundational semantic traits inherited from the African lineage. Mid-layers (24–27) display a transition zone, with nTDS scores trending toward 0.5, indicating balanced trait blending. Late layers (28–30) exhibit dominance by Asia (nTDS near 0), suggesting higher-level abstraction and stylistic features originating from Asian traits. This pattern resembles epigenetic regulation in biology where certain traits activate or suppress at distinct developmental stages."
      style="flex: 1;" 
      full_width=true
  %}
  
  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/Africa_China_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/Africa_China_nTDS_interactive_rect_bars.html"
      title="(II) Africa–China Trait Dominance"
      caption="The dominance visualization shows pronounced episodic fluctuations in nTDS across layers. Africa dominates the earliest layers (20–22), but a marked oscillation emerges mid-way, reflecting competitive trait inheritance dynamics. The dominance score dips sharply toward China dominance between layers 23–26 (nTDS near 0), followed by a rebound in African dominance at layer 27. Late layers (28–30) balance near an nTDS of approximately 0.5, suggesting harmonized trait fusion. The vertical bars amplitudes indicate variance in semantic inheritance strength, analogous to gene expression bursts influenced by environmental or regulatory factors."
      style="flex: 1;"
      full_width=true
  %}
</div>

<!-- Row 2: Africa–Latin America and Africa–Middle East trait dominance -->
<div style="display: flex; flex-direction: column; margin: 2em 0; gap: 1em;">
  
  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/Africa_LatinAmerica_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/Africa_LatinAmerica_nTDS_interactive_rect_bars.html"
      title="(III) Africa–Latin America Trait Dominance"
      caption="The Neural Trait Dominance Score (nTDS) shows a monotonic decline in African dominance from near-complete at layer 20 (nTDS ∼1.0) to balanced inheritance at layers 28–30 (nTDS ∼0.5). Latin America progressively asserts influence, indicating gradual semantic trait assimilation. The vertical bar heights reflect increasing semantic variability from layer 24 onward, highlighting layers where trait recombination and hybridization intensify. This smooth gradient evokes biological morphogen gradients that specify cellular fates based on spatial and temporal context."
      style="flex: 1;"
      full_width=true 
  %}
  
  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/Africa_MiddleEast_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/Africa_MiddleEast_nTDS_interactive_rect_bars.html"
      title="(IV) Africa–Middle East Trait Dominance"
      caption="The Neural Trait Dominance Score (nTDS) reveals early balanced dominance (nTDS ∼0.5) between layers 20–23, shifting to clear African dominance in mid layers (24–27), and culminating in mixed dominance in final layers. Notably, larger vertical bars in mid layers indicate significant semantic trait variance, possibly reflecting latent cultural conflict or synergy. This pattern parallels biological epistatic interactions, where multiple genes influence traits in complex, nonlinear ways across developmental stages."
      style="flex: 1;"
      full_width=true 
  %}

</div>

<!-- Row 3: Asia–China and Asia–Latin America trait dominance -->
<div style="display: flex; flex-direction: column; margin: 2em 0; gap: 1em;">
  
  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/Asia_China_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/Asia_China_nTDS_interactive_rect_bars.html"
      title="(V) Asia–China Trait Dominance"
      caption="The Neural Trait Dominance Score (nTDS) curve reveals layered semantic inheritance dynamics between Asian and Chinese parents. Early transformer layers (20–22) show strong dominance by Asia (nTDS near 1.0), corresponding to foundational semantic traits. Mid-layers (23–27) exhibit oscillatory dominance shifts between Asia and China with nTDS fluctuating between approximately 0.3 and 0.7, indicating complex competitive trait expression akin to gene regulatory network fluctuations. Late layers (28–30) converge toward balanced dominance (nTDS ∼ 0.5), reflecting synergistic trait harmonization. Vertical bar heights quantify trait variance, suggesting episodic semantic recombination with biological analogy to temporally regulated gene expression bursts."
      style="flex: 1;"
      full_width=true 
  %}
  
  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/Asia_LatinAmerica_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/Asia_LatinAmerica_nTDS_interactive_rect_bars.html"
      title="(VI) Asia–Latin America Trait Dominance"
      caption="The dominance profile highlights a gradual semantic shift from Asian dominance at early layers (20–24, nTDS ∼ 0.9) toward increased Latin American influence at deeper layers (25–30, nTDS trending toward 0.3). The offspring's nTDS trajectory (magenta) displays smooth interpolation and moderate variance, illustrating hierarchical trait blending. Vertical bar amplitudes increase progressively from mid to late layers, indicating growing semantic recombination intensity. This layered dominance mosaic models biological morphogen gradients, where spatial-temporal signaling orchestrates progressive phenotypic differentiation."
      style="flex: 1;"
      full_width=true 
  %}

</div>


<!-- Row 4: Asia–Middle East and Australia–Africa trait dominance -->
<div style="display: flex; flex-direction: column; margin: 2em 0; gap: 1em;">
  
  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/Asia_MiddleEast_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/Asia_MiddleEast_nTDS_interactive_rect_bars.html"
      title="(VII) Asia–Middle East Trait Dominance"
      caption="The nTDS trajectory portrays a complex dominance interplay, with initial layers (20–23) balanced between Asia and Middle East (nTDS ∼ 0.5), shifting to Middle East dominance in mid layers (24–27, nTDS ∼ 0.2), and culminating in mixed dominance at late layers. The offspring curve reveals smooth but non-monotonic trait dominance modulation, with vertical bar heights indicating notable semantic variability. This pattern parallels polygenic trait inheritance with epistatic interactions, where multiple loci contribute nonlinearly to phenotype expression over developmental stages."
      style="flex: 1;"
      full_width=true 
  %}
  
  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/Australia_Africa_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/Australia_Africa_nTDS_interactive_rect_bars.html"
      title="(VIII) Australia–Africa Trait Dominance"
      caption="The nTDS profile demonstrates early layer dominance by Australia (20–22, nTDS ∼ 0.85), transitioning to African dominance in mid layers (23–27, nTDS dipping below 0.3), and a rebalance towards Australia in later layers. The offspring trajectory smoothly oscillates, reflecting layered semantic trait recombination and competitive inheritance dynamics. Increasing vertical bar amplitudes from mid to late layers reveal heightened semantic variance, analogous to developmental gene regulatory circuits modulating trait expression temporally and spatially within an organisms genome."
      style="flex: 1;"
      full_width=true 
  %}

</div>

<!-- Row 5: Australia–Asia and Australia–China trait dominance -->
<div style="display: flex; flex-direction: column; margin: 2em 0; gap: 1em;">
  
  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/Australia_Asia_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/Australia_Asia_nTDS_interactive_rect_bars.html"
      title="(IX) Australia–Asia Trait Dominance"
      caption="The Neural Trait Dominance Score (nTDS) illustrates a pronounced early dominance by Australia in layers 20–23 (nTDS near 1.0), indicating strong inheritance of foundational semantic traits. A transition phase from layers 24–27 shows a progressive decline toward balanced dominance (nTDS around 0.5), reflecting trait blending. Late layers 28–30 exhibit increased Asian influence (nTDS near 0), suggesting adoption of high-level abstraction and stylistic nuances. This layered dominance trajectory resembles developmental gene regulation where expression levels modulate dynamically over time and spatial domains."
      style="flex: 1;"
      full_width=true 
  %}
  
  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/Australia_China_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/Australia_China_nTDS_interactive_rect_bars.html"
      title="(X) Australia–China Trait Dominance"
      caption="The nTDS profiles reveal oscillatory dominance dynamics, with Australia leading in early layers (20–22) and China asserting dominance mid-way (23–26) as nTDS fluctuates sharply. This is followed by a rebalancing phase in late layers (27–30) toward near-equal semantic contributions (nTDS ∼ 0.5). The vertical bar magnitudes signal variable semantic inheritance strength, suggesting episodic bursts of trait expression comparable to gene activation modulated by epigenetic and environmental factors."
      style="flex: 1;"
      full_width=true 
  %}

</div>


<!-- Row 6: Australia–Latin America and Australia–Middle East trait dominance -->
<div style="display: flex; flex-direction: column; margin: 2em 0; gap: 1em;">
  
  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/Australia_LatinAmerica_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/Australia_LatinAmerica_nTDS_interactive_rect_bars.html"
      title="(XI) Australia–Latin America Trait Dominance"
      caption="The nTDS progression shows sustained early dominance by Australia in layers 20–23 (nTDS near 1.0), followed by a steady decline toward balanced contributions by layers 28–30 (nTDS around 0.5). Latin American influence grows gradually, with vertical bar heights increasing in later layers, indicating intensified semantic recombination. This dominance transition parallels morphogen gradient-driven developmental pathways where signaling concentrations orchestrate spatially regulated differentiation."
      style="flex: 1;"
      full_width=true 
  %}
  
  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/Australia_MiddleEast_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/Australia_MiddleEast_nTDS_interactive_rect_bars.html"
      title="(XII) Australia–Middle East Trait Dominance"
      caption="The nTDS curves reveal balanced dominance between Australia and Middle East in early layers (20–22, nTDS ∼ 0.5), followed by Australian dominance in layers 23–26 (nTDS above 0.7). Late layers (27–30) trend back toward balanced dominance, with vertical bars indicating variable semantic inheritance strength. This dynamic mirrors polygenic inheritance patterns with shifting allelic contributions across developmental phases."
      style="flex: 1;"
      full_width=true 
  %}

</div>

<!-- Row 7: China-Latin America and China-Middle East trait dominance -->
<div style="display: flex; flex-direction: column; margin: 2em 0; gap: 1em;">
  
  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/China_LatinAmerica_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/China_LatinAmerica_nTDS_interactive_rect_bars.html"
      title="(XIII) China–Latin America Trait Dominance"
      caption="The Neural Trait Dominance Score (nTDS) reveals a complex, oscillatory dominance pattern, with China exhibiting early-layer predominance (layers 20–23), indicative of foundational semantic trait inheritance. A dynamic transitional phase (layers 24–27) shows fluctuating dominance with a gradual move toward balance, reflecting substantial trait blending and emergent hybrid semantics. In late layers (28–30), Latin America gains pronounced influence, reflected by increasing vertical bar magnitudes denoting growing semantic variability and trait recombination. This layered dominance trajectory evokes biological regulatory feedback mechanisms where gene expression is modulated by spatiotemporal and environmental factors during development, resulting in phenotypic diversity."
      style="flex: 1;"
      full_width=true 
  %}
  
  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/China_MiddleEast_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/China_MiddleEast_nTDS_interactive_rect_bars.html"
      title="(XIV) China–Middle East Trait Dominance"
      caption="The nTDS trajectory starts near balanced semantic contributions (layers 20–22), followed by a clear shift toward Middle Eastern dominance in mid layers (23–27), characterized by elevated vertical bar heights signifying increased semantic trait expression. The late layers (28–30) show complex mixed dominance with significant variance, suggesting nuanced interplay of cultural traits and semantic features. This pattern mirrors epistatic gene interactions in biology, where multiple genes interact nonlinearly to produce complex phenotypes during development, reflecting layered modulation of semantic inheritance in neural representations."
      style="flex: 1;"
      full_width=true 
  %}

</div>

<!-- Row 8: Europe-Africa and Europe-Asia trait dominance -->
<div style="display: flex; flex-direction: column; margin: 2em 0; gap: 1em;">

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/Europe_Africa_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/Europe_Africa_nTDS_interactive_rect_bars.html"
      title="(XV) Europe–Africa Trait Dominance"
      caption="The dominance curve illustrates a strong early European influence in foundational layers (20–24), gradually giving way to rising African semantic dominance in later layers (25–30). The increasing vertical bar heights highlight intensifying semantic variability and the integration of African cultural traits, reflecting recombination and diversification of semantic features. This smooth gradient and layered progression are analogous to morphogenetic gradients in developmental biology that spatially and temporally orchestrate cell fate decisions and phenotypic patterns."
      style="flex: 1;"
      full_width=true 
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/Europe_Asia_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/Europe_Asia_nTDS_interactive_rect_bars.html"
      title="(XVI) Europe–Asia Trait Dominance"
      caption="The nTDS profile depicts early-layer European dominance (20–23), followed by a balanced phase in intermediate layers (24–27) indicating semantic trait blending. Late layers (28–30) exhibit increased Asian dominance with heightened vertical bar magnitudes, reflecting emergent stylistic and abstract semantic traits. The dynamic shifts and fluctuating dominance resemble regulatory gene networks that adapt spatio-temporally to developmental and environmental cues, resulting in layered expression of traits within neural latent spaces."
      style="flex: 1;"
      full_width=true 
  %}

</div>

<!-- Row 9: Europe-Australia and Europe-China trait dominance -->
<div style="display: flex; flex-direction: column; margin: 2em 0; gap: 1em;">

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/Europe_Australia_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/Europe_Australia_nTDS_interactive_rect_bars.html"
      title="(XVII) Europe–Australia Trait Dominance"
      caption="The Neural Trait Dominance Score (nTDS) demonstrates an initial phase of balanced dominance around 0.5 in early layers (20–23), indicating an intertwined inheritance of semantic traits from both cultural priors. This is followed by a marked increase in European dominance through the mid layers (24–27), suggesting that European semantic features become more influential during intermediate abstraction processing. The late layers (28–30) display mixed dominance with considerable semantic variance and recombination, reflecting the integration and fusion of complex traits. Such a layered dominance pattern mirrors developmental heterochrony in biology, where changes in the timing of gene expression result in diverse phenotypic outcomes."
      style="flex: 1;"
      full_width=true 
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/Europe_China_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/Europe_China_nTDS_interactive_rect_bars.html"
      title="(XVIII) Europe–China Trait Dominance"
      caption="The nTDS profile reveals a clear early European dominance phase during layers 20–23, where foundational semantic traits primarily reflect European influence. This dominance then transitions to a strong Chinese influence in the mid layers (24–27), marking a shift in latent semantic priorities and feature expression. The final layers (28–30) exhibit oscillatory shifts with balanced semantic contributions (nTDS ∼ 0.5), indicative of complex interaction and semantic blending. These temporal shifts reflect intricate gene regulatory mechanisms in biological systems that dynamically orchestrate phenotype expression over developmental time."
      style="flex: 1;"
      full_width=true 
  %}

</div>


<!-- Row 10: Europe–Latin America and Europe–Middle East trait dominance -->
<div style="display: flex; flex-direction: column; margin: 2em 0; gap: 1em;">

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/Europe_LatinAmerica_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/Europe_LatinAmerica_nTDS_interactive_rect_bars.html"
      title="(XIX) Europe–Latin America Trait Dominance"
      caption="The dominance curve begins with strong European influence in early layers (20–23), exhibiting high nTDS values (&gt; 0.5) that suggest early-stage semantic trait control. A gradual decline toward balanced dominance occurs by late layers (28–30), reflecting increased contribution from Latin America. The growth in vertical bar heights from mid to late layers highlights intensifying trait integration and semantic diversity within the offsprings latent space. This smooth dominance gradient is analogous to morphogenetic patterning in developmental biology, where spatial-temporal gradients guide cell fate and tissue differentiation."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/Europe_MiddleEast_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/Europe_MiddleEast_nTDS_interactive_rect_bars.html"
      title="(XX) Europe–Middle East Trait Dominance"
      caption="The nTDS trajectory commences with balanced dominance near 0.5 in early layers (20–23), signaling shared semantic trait influence from both cultural lineages. Mid layers (24–27) see a shift toward European dominance, indicating heightened latent feature expression from European priors. Late layers (28–30) present increased semantic variance and mixed dominance, highlighting intricate multi-layered interactions reminiscent of epistatic gene effects in biology where multiple gene interactions nonlinearly influence phenotype formation. This complex interplay points to rich cultural semantic fusion shaping offspring representations."
      style="flex: 1;"
      full_width=true
  %}

</div>

<!-- Row 11: Europe–North America and Middle East–Latin America trait dominance -->
<div style="display: flex; flex-direction: column; margin: 2em 0; gap: 1em;">

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/Europe_NorthAmerica_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/Europe_NorthAmerica_nTDS_interactive_rect_bars.html"
      title="(XXI) Europe–North America Trait Dominance"
      caption="The Neural Trait Dominance Score (nTDS) shows balanced semantic dominance around 0.5 in early layers (20–23), indicating an initial equilibrium in trait contributions. This is followed by a progressive increase in European influence during mid layers (24–27), signifying stronger inheritance of European semantic characteristics. In late layers (28–30), the nTDS exhibits fluctuating dominance with increased semantic variance, reflecting complex trait fusion and dynamic recombination. This pattern is analogous to polygenic trait expression in biological systems, where multiple genes interact to influence phenotypic outcomes in a non-linear manner."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/MiddleEast_LatinAmerica_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/MiddleEast_LatinAmerica_nTDS_interactive_rect_bars.html"
      title="(XXII) Middle East–Latin America Trait Dominance"
      caption="The nTDS trajectory starts with balanced semantic dominance near 0.5 in early layers (20–23), suggesting equal foundational trait contributions from both cultures. This shifts toward increased Middle Eastern dominance through mid layers (24–27), as indicated by rising nTDS values and taller vertical bars representing semantic variance. The late layers (28–30) show a trend toward balanced or variable dominance, highlighting ongoing semantic interplay and fusion. These dynamics resemble complex gene regulatory networks in development that modulate phenotype expression through intricate temporal and spatial controls."
      style="flex: 1;"
      full_width=true
  %}

</div>

<!-- Row 12: North America–Africa and North America–Asia trait dominance -->
<div style="display: flex; flex-direction: column; margin: 2em 0; gap: 1em;">

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/NorthAmerica_Africa_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/NorthAmerica_Africa_nTDS_interactive_rect_bars.html"
      title="(XXIII) North America–Africa Trait Dominance"
      caption="Early layers (20–23) are characterized by strong North American semantic dominance, with nTDS values consistently above 0.5, reflecting pronounced inheritance of North American traits. Moving into mid and late layers (24–30), there is a gradual transition toward more balanced dominance, indicative of increasing African influence and semantic blending. The progressive increase in vertical bar heights highlights intensifying semantic diversity and complex trait integration. This profile closely mirrors morphogenetic gradients and field effects in biological development, where spatially distributed signals guide cell fate and phenotype."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/NorthAmerica_Asia_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/NorthAmerica_Asia_nTDS_interactive_rect_bars.html"
      title="(XXIV) North America–Asia Trait Dominance"
      caption="The nTDS profile reveals initial dominance by North America in early layers (20–23), showing strong semantic inheritance. This dominance gradually shifts toward balanced contributions from both cultures during mid layers (24–27), illustrating a phase of semantic fusion and recombination. In late layers (28–30), there is a notable increase in Asian influence, accompanied by enhanced semantic variance and complex mixing patterns. These temporal shifts in dominance and variance are reminiscent of multilayered gene expression modulation processes in biological systems, where phenotype is shaped by both early and late developmental gene activities."
      style="flex: 1;"
      full_width=true
  %}

</div>

<!-- Row 13: North America–Australia and North America–China trait dominance -->
<div style="display: flex; flex-direction: column; margin: 2em 0; gap: 1em;">

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/NorthAmerica_Australia_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/NorthAmerica_Australia_nTDS_interactive_rect_bars.html"
      title="(XXV) North America–Australia Trait Dominance"
      caption="The Neural Trait Dominance Score (nTDS) begins with balanced dominance (near 0.5) in early layers (20–23), gradually shifting to a strong North American dominance during mid layers (24–27). Late layers (28–30) show increased semantic complexity with mixed dominance patterns, highlighting intricate trait interplay and adaptive recombination reminiscent of heterochronic shifts in evolutionary biology."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/NorthAmerica_China_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/NorthAmerica_China_nTDS_interactive_rect_bars.html"
      title="(XXVI) North America–China Trait Dominance"
      caption="The nTDS trajectory reveals early North American influence in initial layers (20–23), transitioning towards Chinese dominance in mid to late layers (24–30). This dynamic oscillation and layered shift reflects complex regulatory control over semantic traits, analogous to gene regulatory networks modulating phenotype expressions over developmental stages."
      style="flex: 1;"
      full_width=true
  %}

</div>

<!-- Row 14: North America–Latin America and North America–Middle East trait dominance -->
<div style="display: flex; flex-direction: column; margin: 2em 0; gap: 1em;">

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/NorthAmerica_LatinAmerica_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/NorthAmerica_LatinAmerica_nTDS_interactive_rect_bars.html"
      title="(XXVII) North America–Latin America Trait Dominance"
      caption="Starting with strong North American dominance in early layers (20–23), the nTDS gradually moves towards balanced trait integration in later layers (28–30). Latin Americas influence grows steadily, captured by increasing vertical bars, indicating semantic diversification and enhanced trait synergy, paralleling morphogenetic gradients shaping complex organismal features."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nTDS/NorthAmerica_MiddleEast_nTDS_rotating_with_offspring.gif"
      interactive_html="nTDS/NorthAmerica_MiddleEast_nTDS_interactive_rect_bars.html"
      title="(XXVIII) North America–Middle East Trait Dominance"
      caption="The nTDS pattern begins with balanced dominance (around 0.5) in early layers (20–23), with North American traits becoming predominant mid layers (24–27). Late layers (28–30) reflect mixed dominance with substantial semantic variance, illustrating multifactorial trait interactions reminiscent of epistatic effects and polygenic influences in biological phenotypes."
      style="flex: 1;"
      full_width=true
  %}

</div>

{% capture figure_caption %}
**Figure: Neural Trait Dominance Score (nTDS) Across Cultural Model Pairs and Offspring.** These visualizations capture the layerwise trait dominance evolution in fusions of eight culturally distinct models, revealing dynamic shifts in spectral curvature and thermodynamic length, reflecting epigenetic-like semantic modulation akin to developmental heterochrony<sup>(324; 325)</sup> and gene regulatory networks<sup>(326; 327)</sup>. The nTDS values quantify parental influence and semantic recombination across layers (20–30), highlighting critical transitions with oscillations or balanced dominance. These patterns align with nonlinear dynamical systems and bifurcation theory<sup>(328)</sup>, where competing attractors shape semantic landscapes, offering insights into neural culture inheritance and semantic fusion and advancing latent geometry evolution understanding. **Mathematical Context:** The Neural Trait Dominance Score nTDS<sub>ℓ</sub> is formally defined as a layerwise dominance metric in latent space measuring the relative influence between cultural fine-tuned models' manifold embeddings. This provides a rigorous geometric quantification of semantic trait inheritance across deep model layers. **Biological Analogy:** Analogous to gene expression regulation in biological developmental systems, the layerwise variation in nTDS<sub>ℓ</sub> reveals critical neural depths where semantic realignment, adaptation, and cultural imprinting occur. Models exhibit region-specific evolutionary adaptations, while balanced dominance patterns suggest semantic stability and trait harmonization. **Mathematical Takeaway:** The offspring semantic dominance at layer ℓ can be modeled as a nonlinear competition of parental influences:

<div style="border: 2px solid #ddd; padding: 1.5em; margin: 1em 0; background-color: #f9f9f9; text-align: center;">
  <span class="mathjax-render">
    \[
    \mathrm{nTDS}_\ell = \frac{\kappa_\ell(p) \cdot L_\ell(p)}{\kappa_\ell(p) \cdot L_\ell(p) + \kappa_\ell(q) \cdot L_\ell(q)}
    \]
  </span>
</div>

where κ<sup>(ℓ)</sup> ∈ [0, 1] denotes the layer-dependent spectral curvature coefficient, dynamically modulating parental influence, L<sup>(ℓ)</sup> captures thermodynamic length at layer ℓ, and p, q represent parental indices. This formalism captures multi-layered integration, selective semantic imprinting, and complex evolutionary dynamics in transformer latent spaces, providing a principled framework for interpreting cultural neural trait fusion and semantic innovation in multilingual AI systems.
{% endcapture %}

---
{% auto_references %}

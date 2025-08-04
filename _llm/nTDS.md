---
layout: page
title: "Neural Trait Dominance Score(nTDS)"
permalink: /llm/neural-genomics/nTDS/
---
<script type="text/javascript" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

## Introduction

While nHD and nGDI effectively quantify overall semantic divergence and global representational distance from parent models, they lack the resolution to reveal how specific semantic traits are differentially inherited across the depth of a foundation model. To fill this gap, we introduce the **Neural Trait Dominance Score (nTDS)**, a layer-wise metric designed to capture the relative influence each parent model exerts on the offspring's latent representations at every transformer layer.

## Genome-wide Quantitative Trait Loci (QTL) Mapping

<img src="{{ 'assets/gifs/neural_genomics/nTDS/nTDS_QTL_Mapping.png' | relative_url }}" style="width: 100%; max-width: 720px; display: block; margin: auto;" />
<p style="text-align: center; font-weight: 600; font-size: 0.85em; margin-top: 0.8em;">
    <strong>Figure 40: Genome-wide Quantitative Trait Loci (QTL) Mapping:</strong>
</p>
<div style="text-align: justify; font-size: 0.9em; margin-top: 0.8em;">
This example shows the genome-wide scan for quantitative trait loci across genomes, where each peak represents a genomic region statistically associated with phenotypic variation. Formally, QTL mapping estimates the association between genetic markers G<sub>i</sub> and quantitative traits T by testing the linear model: <strong>T = μ + β<sub>i</sub>G<sub>i</sub> + ε</strong>, where μ is the population mean, β<sub>i</sub> is the effect size of marker G<sub>i</sub>, and ε is the residual error (320; 321). Peaks in the LOD (logarithm of odds) score indicate loci with significant trait associations, revealing genomic regions with dominant genetic influence on the phenotype.
</div>

**Connection to Neural Trait Dominance Score (nTDS)** Analogous to QTLs indicating dominant parental allele influence on phenotypic traits at chromosomal loci, the **nTDS** quantifies the dominance of parental semantic traits across transformer layers in foundation models. Each layer **ℓ** functions as a semantic locus, where nTDS identifies which parent exerts greater influence on the offspring's internal representation.

## Implications
This biological metaphor underscores that **semantic inheritance in neural models is layer-specific and trait-dependent**, much like phenotypic traits vary in genetic dominance across chromosomes. Understanding these patterns facilitates: **Targeted alignment tuning**, **Improved interpretability**, **Balanced semantic integration**, **Mitigation of bias propagation** in multicultural AI systems

# Mathematical Formulation of Neural Trait Dominance Score (nTDS)

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

$$\langle a, b \rangle_{F_\ell^{(B)}} := a^T F_\ell^{(B)} b, \quad a, b \in T_{x_\ell^{(B)}}\mathcal{M}_\ell$$

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

$$\text{nTDS}_\ell := \sigma(k(\alpha_\ell - 0.5)) = \frac{1}{1 + \exp(-k(\alpha_\ell - 0.5))}$$

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

This framework parallels *quantitative trait locus (QTL)* mapping in population genetics (Griffiths et al., 2015), where chromosomal loci correlate with phenotypic trait variance. Here, transformer layers analogously represent *semantic chromosomal segments*, and nTDS quantifies the differential contribution of parental "alleles" to offspring semantic traits.

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

encapsulates the degree to which the offspring's semantic representation $\mathbf{x}^{(O)}_{\ell}$ leans towards **parent $A$** ($\text{nTDS}_\ell > 0$) or **parent $B$** ($\text{nTDS}_\ell < 0$), offering a normalized and continuous measure of *dominance*.

The **layer-specific patterns** uncovered by **nTDS** expose the *non-uniform transmission* of semantic traits: **early transformer layers** often reflect the more *literal* and *syntactic* characteristics of one parent, while **deeper layers** emphasize *abstract*, *culturally nuanced* semantics originating from the other. This layered trait distribution echoes hierarchical models of cognition and language processing, where progressively abstract representations emerge along the neural processing hierarchy (Tenney et al., 2019; Alain & Bengio, 2016).

From a formal perspective, **nTDS** quantifies trait dominance via **Euclidean distances** within the high-dimensional latent semantic space, effectively mirroring the biological concept of *quantitative trait loci* (QTLs) (Griffiths et al., 2015), where specific genomic loci modulate the expression of phenotypic traits. This analogy bridges genomics and deep learning by treating transformer layers as functional "genomic loci" influencing semantic phenotype expression.

Practically, the insights offered by **nTDS** enable **strategic fine-tuning** and **transfer learning** interventions: by pinpointing layers with dominant parental traits, practitioners can selectively amplify or attenuate these features to optimize performance, cultural sensitivity, and fairness. This capability enhances model *transparency* and *adaptability* across diverse sociocultural contexts.

In summary, **nTDS** delivers a *biologically grounded*, **mathematically rigorous** framework for unraveling the complex **semantic inheritance architecture** within foundation models. It empowers nuanced control over how parental knowledge integrates, steering the development of **fair**, **interpretable**, and **culturally aware** AI systems attuned to global diversity.

## Applications and Empirical Insights

The **Neural Trait Dominance Score (nTDS)** serves as a mathematically rigorous and semantically nuanced metric that quantifies *layerwise parental influence* on an offspring foundation model's latent semantic embeddings. Formally, for each transformer layer $\ell$, the quantity the quantity $\mathrm{nTDS}\ell$ measures the normalized difference in Euclidean distances between the offspring embedding $\mathbf{x}\ell^{(O)}$ and its parents' embeddings $\mathbf{x}\ell^{(A)}$ and $\mathbf{x}\ell^{(B)}$:

$$
\mathrm{nTDS}_\ell = \frac{\|\mathbf{x}^{(O)}_\ell - \mathbf{x}^{(B)}_\ell\|_2 - \|\mathbf{x}^{(O)}_\ell - \mathbf{x}^{(A)}_\ell\|_2}{\|\mathbf{x}^{(A)}_\ell - \mathbf{x}^{(B)}_\ell\|_2 + \epsilon}
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
  <span class="mathjax-render">\( \mathrm{nTDS}_\ell \)</span> is conceptually analogous to quantitative trait loci (QTLs) in genomics (321), where trait variance is mapped onto chromosomal positions. Here, 
  <span class="mathjax-render">\( \mathrm{nTDS}_\ell \)</span> maps semantic trait dominance onto transformer layers, elucidating semantic loci akin to chromosomal trait regions. This analogy enriches theoretical understanding of model inheritance, highlighting hierarchical and modular trait transmission across network depth.
</p>

**Practical Applications:** $\mathrm{nTDS}_\ell$ guides targeted intervention in layer-specific fine-tuning, adaptive fusion mechanism design, and alignment auditing to ensure culturally robust and semantically faithful foundation models. Its computational efficiency and intuitive interpretability make it an indispensable tool for responsible AI governance in a multicultural world.

In essence, the Neural Trait Dominance Score (nTDS) advances both the scientific understanding and practical alignment engineering of foundation models, providing a mathematically sound, interpretable, and scalable metric for navigating the complex semantic landscape of cultural inheritance.

## Case Study and Validation

To empirically validate the Neural Trait Dominance Score (nTDS), we examine foundation models pretrained or fine-tuned on culturally distinct corpora, such as European and Asian datasets, along with their merged offspring models. By extracting layerwise latent embeddings $x_\ell^{(\mathrm{Eur})}$, $x_\ell^{(\mathrm{Asi})}$, and $x_\ell^{(\mathrm{Offspring})}$, we compute the $\mathrm{nTDS}_\ell$ metric as:

$$\mathrm{nTDS}_\ell = \frac{\|x_\ell^{(\mathrm{Offspring})} - x_\ell^{(\mathrm{Asi})}\|_2 - \|x_\ell^{(\mathrm{Offspring})} - x_\ell^{(\mathrm{Eur})}\|_2}{\|x_\ell^{(\mathrm{Eur})} - x_\ell^{(\mathrm{Asi})}\|_2 + \epsilon}$$

where $\epsilon > 0$ ensures numerical stability.

Layerwise plots of $\mathrm{nTDS}_\ell$ reveal the depth-dependent dominance of parental cultural traits across the transformer architecture. Early layers ($\ell \in [1, 10]$) often exhibit values close to zero, indicating balanced inheritance of foundational lexical and syntactic features. In contrast, intermediate and deeper layers ($\ell \in [15, 30]$) display marked deviations toward either parent, signaling layer-specific semantic specialization and cultural imprinting.

Notably, sharp transitions in $\mathrm{nTDS}_\ell$ correspond to trait dominance shifts where the offspring's semantic representation abruptly favors one cultural lineage over another. These shifts illuminate the modular and hierarchical nature of semantic inheritance, aligning with biological analogs of quantitative trait loci (QTL) that localize phenotypic trait control to specific genomic regions (321).

Empirically, we observe that $\mathrm{nTDS}_\ell$ not only quantifies trait dominance but also correlates with performance variations on culturally sensitive downstream tasks, emphasizing its utility as a proxy for semantic fidelity and alignment efficacy.

This case study further illustrates that $\mathrm{nTDS}_\ell$ provides actionable insights for layer-targeted fine-tuning, allowing practitioners to amplify desired cultural traits or mitigate biases through precision regularization at specific layers. Such interventions can harmonize trait dominance profiles to optimize cross-cultural robustness and fairness.

In summary, the empirical validation underscores nTDS as a powerful, interpretable metric that deciphers the complex dynamics of semantic trait inheritance in multicultural foundation models, bridging the gap between theoretical understanding and practical alignment engineering.

## Outlook

The Neural Trait Dominance Score (nTDS) stands as a foundational pillar within the Neural Genomics framework, offering a precise, layer-resolved quantification of semantic trait inheritance across the complex architecture of foundation models shaped by culturally heterogeneous corpora. By mathematically formalizing the layerwise dominance coefficients $\delta_\ell^{(A,B)}$ that describe how parental semantic features $x_\ell^{(A)}$, $x_\ell^{(B)}$ influence offspring embeddings $x_\ell^{(O)}$, nTDS enables researchers to disentangle and localize the multidimensional dynamics of cultural imprinting with unprecedented granularity (see Fig. 47).

Beyond mere descriptive statistics, nTDS encapsulates the geometric interplay of latent embeddings within a Riemannian manifold structured by Fisher information matrices $F_\ell$, capturing how differential trait weights alter the semantic curvature and topological complexity across depth $\ell$. This leads to a mathematically rich picture where trait dominance reflects not only vector magnitudes but also nuanced directional biases and local manifold distortions, formalized as:

$$\delta_\ell^{(A)} = \frac{\langle x_\ell^{(O)} - x_\ell^{(B)}, x_\ell^{(A)} - x_\ell^{(B)} \rangle_{F_\ell}}{\|x_\ell^{(A)} - x_\ell^{(B)}\|_{F_\ell}^2}$$

where $\langle \cdot, \cdot \rangle_{F_\ell}$ denotes the Fisher-weighted inner product encoding local semantic sensitivity.

By operationalizing these hierarchical dominance coefficients, nTDS guides the design of layer-specific alignment and intervention protocols, facilitating targeted modulation of trait influence–amplifying underrepresented cultural semantics or attenuating dominant biases–thus ensuring balanced, robust, and interpretable cross-cultural semantic fusion.

Looking forward, nTDS paves the way for mathematically principled explorations into multi-scale knowledge transfer, dynamical trait adaptation, and compositional cultural synthesis within foundation models. By enabling explicit control over trait propagation in a Riemannian semantic space, nTDS lays the theoretical and practical groundwork for AI systems that evolve adaptively, mirror the complexity of human cultural heritage, and respond coherently to shifting societal values.

In essence, the Neural Trait Dominance Score is poised to become a cornerstone metric–both a diagnostic lens and a strategic instrument–empowering researchers and practitioners to engineer responsible, inclusive, and context-aware AI systems with fine-grained control over the flow and balance of semantic traits at scale.

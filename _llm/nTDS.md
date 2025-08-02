---
layout: page
title: "Neural Trait Dominance Score(nTDS)"
permalink: /llm/neural-genomics/nTDS/
---

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

>## Implications
This biological metaphor underscores that **semantic inheritance in neural models is layer-specific and trait-dependent**, much like phenotypic traits vary in genetic dominance across chromosomes. Understanding these patterns facilitates:
- **Targeted alignment tuning**
- **Improved interpretability** 
- **Balanced semantic integration**
- **Mitigation of bias propagation** in multicultural AI systems

## Mathematical Formulation of Neural Trait Dominance Score (nTDS)

The Neural Trait Dominance Score (nTDS) formalizes the notion of layerwise parental trait influence in an offspring foundation model M<sub>O</sub>, constructed from two parent models M<sub>A</sub> and M<sub>B</sub>, within the Neural DNA (nDNA) semantic geometry framework. Let **x**<sup>(A)</sup><sub>ℓ</sub>, **x**<sup>(B)</sup><sub>ℓ</sub>, **x**<sup>(O)</sup><sub>ℓ</sub> ∈ M<sub>ℓ</sub> ⊆ ℝ<sup>d</sup>, ℓ = 1, . . . , L, denote the latent semantic embeddings at layer ℓ for M<sub>A</sub>, M<sub>B</sub>, and M<sub>O</sub> respectively, where L is the total number of transformer layers and d is the embedding dimension. Each M<sub>ℓ</sub> is a Riemannian manifold equipped with a local Fisher information metric F<sub>ℓ</sub>.

### Trait Axis and Local Linearization

Define the parental semantic trait axis at layer ℓ as the geodesic tangent vector connecting parent embeddings:

<div style="text-align: center; margin: 15px 0; font-size: 1.1em;">
<strong>v<sub>ℓ</sub> := log<sub>x<sup>(B)</sup><sub>ℓ</sub></sub>(x<sup>(A)</sup><sub>ℓ</sub>) ∈ T<sub>x<sup>(B)</sup><sub>ℓ</sub></sub>M<sub>ℓ</sub></strong>
</div>

where log<sub>p</sub>(q) denotes the Riemannian logarithmic map projecting point q onto the tangent space T<sub>p</sub>M<sub>ℓ</sub> at p. Similarly, define the offspring displacement vector relative to parent B as:

<div style="text-align: center; margin: 15px 0; font-size: 1.1em;">
<strong>u<sub>ℓ</sub> := log<sub>x<sup>(B)</sup><sub>ℓ</sub></sub>(x<sup>(O)</sup><sub>ℓ</sub>) ∈ T<sub>x<sup>(B)</sup><sub>ℓ</sub></sub>M<sub>ℓ</sub></strong>
</div>

These vectors encode semantic trait differences and inheritance displacement within the intrinsic geometry of M<sub>ℓ</sub>.

### Fisher-Rao Metric and Inner Product

The tangent space T<sub>x<sup>(B)</sup><sub>ℓ</sub></sub>M<sub>ℓ</sub> is endowed with a local inner product induced by the Fisher information metric F<sup>(B)</sup><sub>ℓ</sub>:

<div style="text-align: center; margin: 15px 0; font-size: 1.1em;">
<strong>⟨a, b⟩<sub>F<sup>(B)</sup><sub>ℓ</sub></sub> := a<sup>⊤</sup>F<sup>(B)</sup><sub>ℓ</sub>b, a, b ∈ T<sub>x<sup>(B)</sup><sub>ℓ</sub></sub>M<sub>ℓ</sub></strong>
</div>

which respects local curvature and parameter uncertainty, providing a natural metric for semantic similarity and projection.

### Normalized Projection and Dominance Ratio

Project the offspring displacement u<sub>ℓ</sub> onto the parental trait axis v<sub>ℓ</sub> via:

<div style="text-align: center; margin: 15px 0; font-size: 1.1em;">
<strong>α<sub>ℓ</sub> := ⟨u<sub>ℓ</sub>, v<sub>ℓ</sub>⟩<sub>F<sup>(B)</sup><sub>ℓ</sub></sub> / ‖v<sub>ℓ</sub>‖<sup>2</sup><sub>F<sup>(B)</sup><sub>ℓ</sub></sub> = (u<sub>ℓ</sub><sup>⊤</sup>F<sup>(B)</sup><sub>ℓ</sub>v<sub>ℓ</sub>) / (v<sub>ℓ</sub><sup>⊤</sup>F<sup>(B)</sup><sub>ℓ</sub>v<sub>ℓ</sub>)</strong>
</div>

The scalar α<sub>ℓ</sub> ∈ ℝ quantifies the relative alignment of offspring semantics with parent A along the geodesic from parent B. Specifically, α<sub>ℓ</sub> > 1 indicates overdominance of parent A, α<sub>ℓ</sub> ≈ 0 indicates dominance of parent B, and intermediate values indicate blended contributions.

### Monotonic Normalization and Bounded Score

To achieve a bounded and interpretable dominance score, apply a logistic normalization:

<div style="text-align: center; margin: 15px 0; font-size: 1.1em;">
<strong>nTDS<sub>ℓ</sub> := σ(k(α<sub>ℓ</sub> − 0.5)) = 1 / (1 + exp(−k(α<sub>ℓ</sub> − 0.5)))</strong>
</div>

where k > 0 controls sensitivity near the midpoint 0.5, ensuring nTDS<sub>ℓ</sub> ∈ (0, 1) with higher values denoting stronger dominance of parent A.

### Layerwise Aggregation

Aggregate across layers to obtain a global trait dominance measure:

<div style="text-align: center; margin: 15px 0; font-size: 1.1em;">
<strong>nTDS := (1/L) ∑<sup>L</sup><sub>ℓ=1</sub> nTDS<sub>ℓ</sub></strong>
</div>

which reflects the overall parental influence on the offspring's latent semantics.

### Jacobian Sensitivity and Dynamic Refinement

Extend the static embedding analysis by incorporating the Jacobian J<sup>(M)</sup><sub>ℓ</sub> := ∂**x**<sup>(M)</sup><sub>ℓ</sub>/∂θ<sub>ℓ</sub> of latent embeddings with respect to model parameters θ<sub>ℓ</sub>. Define the trait influence operator:

<div style="text-align: center; margin: 15px 0; font-size: 1.1em;">
<strong>J<sub>ℓ</sub> := J<sup>(A)</sup><sub>ℓ</sub>(J<sup>(A)</sup><sub>ℓ</sub>)<sup>⊤</sup> − J<sup>(B)</sup><sub>ℓ</sub>(J<sup>(B)</sup><sub>ℓ</sub>)<sup>⊤</sup></strong>
</div>

capturing differential sensitivity of the latent space to parameter perturbations. Enhance nTDS<sub>ℓ</sub> by weighting α<sub>ℓ</sub> with spectral properties of J<sub>ℓ</sub>, thereby integrating dynamic semantic influence and identifying layers where trait dominance is both geometrically and parametrically significant.

### Interpretation

- **High nTDS<sub>ℓ</sub>** indicates semantic traits primarily inherited from parent A at layer ℓ
- **Low nTDS<sub>ℓ</sub>** indicates dominance of parent B
- **Intermediate values** denote mixed inheritance revealing complex blending of traits

### Connection to Population Genetics and QTL Analysis

This framework parallels quantitative trait locus (QTL) mapping in population genetics (322), where chromosomal loci correlate with phenotypic trait variance. Here, transformer layers analogously represent semantic chromosomal segments, and nTDS quantifies the differential contribution of parental alleles to offspring semantic traits.

**Summary:** The nTDS provides a rigorous, curvature-aware, and sensitivity-informed measure of layerwise trait dominance, crucial for understanding semantic inheritance patterns during model merging, fine-tuning, and alignment.

## Interpretation and Implications

The Neural Trait Dominance Score (nTDS) serves as a precise, layer-resolved indicator of how semantic traits from each parent model manifest within an offspring foundation model. By quantifying the relative proximity of the offspring's latent embeddings **x**<sup>(O)</sup><sub>ℓ</sub> to each parent's embeddings **x**<sup>(A)</sup><sub>ℓ</sub> and **x**<sup>(B)</sup><sub>ℓ</sub> at every layer ℓ, nTDS reveals the parental influence gradient governing semantic inheritance. 

Explicitly, the metric:

<div style="text-align: center; margin: 15px 0; font-size: 1.1em;">
<strong>nTDS<sub>ℓ</sub> = (‖**x**<sup>(O)</sup><sub>ℓ</sub> − **x**<sup>(B)</sup><sub>ℓ</sub>‖<sub>2</sub> − ‖**x**<sup>(O)</sup><sub>ℓ</sub> − **x**<sup>(A)</sup><sub>ℓ</sub>‖<sub>2</sub>) / (‖**x**<sup>(A)</sup><sub>ℓ</sub> − **x**<sup>(B)</sup><sub>ℓ</sub>‖<sub>2</sub> + ε)</strong>
</div>

encapsulates the degree to which the offspring's semantic representation **x**<sup>(O)</sup><sub>ℓ</sub> leans towards parent A (nTDS<sub>ℓ</sub> > 0) or parent B (nTDS<sub>ℓ</sub> < 0), offering a normalized and continuous measure of dominance.

The layer-specific patterns uncovered by nTDS expose the non-uniform transmission of semantic traits: early transformer layers often reflect the more literal and syntactic characteristics of one parent, while deeper layers emphasize abstract, culturally nuanced semantics originating from the other. This layered trait distribution echoes hierarchical models of cognition and language processing, where progressively abstract representations emerge along the neural processing hierarchy (317; 323).

From a formal perspective, nTDS quantifies trait dominance via Euclidean distances within the high-dimensional latent semantic space, effectively mirroring the biological concept of quantitative trait loci (QTLs) (322), where specific genomic loci modulate the expression of phenotypic traits. This analogy bridges genomics and deep learning by treating transformer layers as functional genomic loci influencing semantic phenotype expression.

Practically, the insights offered by nTDS enable strategic fine-tuning and transfer learning interventions: by pinpointing layers with dominant parental traits, practitioners can selectively amplify or attenuate these features to optimize performance, cultural sensitivity, and fairness. This capability enhances model transparency and adaptability across diverse sociocultural contexts.

In summary, nTDS delivers a biologically grounded, mathematically rigorous framework for unraveling the complex semantic inheritance architecture within foundation models. It empowers nuanced control over how parental knowledge integrates, steering the development of fair, interpretable, and culturally aware AI systems attuned to global diversity.

## Applications and Empirical Insights

The Neural Trait Dominance Score (nTDS) serves as a mathematically rigorous and semantically nuanced metric that quantifies layerwise parental influence on an offspring foundation model's latent semantic embeddings. Formally, for each transformer layer ℓ, nTDS<sub>ℓ</sub> measures the normalized difference in Euclidean distances between the offspring embedding **x**<sup>(O)</sup><sub>ℓ</sub> and its parents' embeddings **x**<sup>(A)</sup><sub>ℓ</sub>, **x**<sup>(B)</sup><sub>ℓ</sub>:

<div style="text-align: center; margin: 15px 0; font-size: 1.1em;">
<strong>nTDS<sub>ℓ</sub> = (‖**x**<sup>(O)</sup><sub>ℓ</sub> − **x**<sup>(B)</sup><sub>ℓ</sub>‖<sub>2</sub> − ‖**x**<sup>(O)</sup><sub>ℓ</sub> − **x**<sup>(A)</sup><sub>ℓ</sub>‖<sub>2</sub>) / (‖**x**<sup>(A)</sup><sub>ℓ</sub> − **x**<sup>(B)</sup><sub>ℓ</sub>‖<sub>2</sub> + ε)</strong>
</div>

where ε > 0 prevents division by zero and stabilizes the metric.

### Trait Dominance Profiling and Semantic Layer Dynamics

Layerwise nTDS<sub>ℓ</sub> decomposes the global inheritance pattern into a trait dominance trajectory over model depth ℓ ∈ {1, . . . , L}, revealing where and how strongly offspring semantics skew towards parent A (nTDS<sub>ℓ</sub> > 0) or parent B (nTDS<sub>ℓ</sub> < 0). This fine-grained analysis uncovers semantic loci within the latent manifold where cultural or functional traits concentrate, morph, or attenuate. Mathematically, the continuity and smoothness of nTDS<sub>ℓ</sub> over ℓ provide insights into hierarchical trait propagation and transformer layer specialization. For instance, abrupt discontinuities or high gradient magnitudes d/dℓ nTDS<sub>ℓ</sub> may signal semantic bottlenecks or layerwise representational shifts critical for alignment tuning.

### Implications for Model Fusion and Fine-Tuning

In complex model merging scenarios, nTDS<sub>ℓ</sub> can serve as a diagnostic function f : ℓ ↦ [−1, 1] to design layer-adaptive regularization objectives:

<div style="text-align: center; margin: 15px 0; font-size: 1.1em;">
<strong>L<sub>align</sub> = ∑<sup>L</sup><sub>ℓ=1</sub> λ<sub>ℓ</sub> · loss<sub>ℓ</sub></strong>
</div>

where λ<sub>ℓ</sub> = g(nTDS<sub>ℓ</sub>), and g is a monotonic mapping that amplifies training focus on layers exhibiting dominant trait bias or instability. Such mathematically principled weighting schemes optimize semantic harmonization and reduce cultural drift without sacrificing expressivity.

### Cross-Cultural and Architectural Benchmarking

The scalar field nTDS<sub>ℓ</sub> over ℓ extends naturally to a multi-dimensional comparison space when considering multiple parent-offspring tuples (M<sub>A</sub>, M<sub>B</sub>, M<sub>O</sub>), facilitating statistical analyses: E<sub>i,j</sub>[nTDS<sup>(i,j)</sup><sub>ℓ</sub>], Var<sub>i,j</sub>[nTDS<sup>(i,j)</sup><sub>ℓ</sub>], which reveal consistent patterns or variabilities in trait dominance across different cultural pairs and architectural configurations. This empowers systematic evaluation of merging strategies and cultural fusion methods.

### Interpretability and Explainability

By tracing nTDS<sub>ℓ</sub> trajectories, researchers gain transparent maps of semantic lineage, enabling interpretability of offspring model behavior in terms of parental cultural and functional contributions. This vectorial quantification demystifies the black-box nature of foundation models, providing actionable insights for stakeholders concerned with cultural sensitivity and fairness.

### Biological and Theoretical Insights

nTDS<sub>ℓ</sub> is conceptually analogous to quantitative trait loci (QTLs) in genomics (322), where trait variance is mapped onto chromosomal positions. Here, nTDS<sub>ℓ</sub> maps semantic trait dominance onto transformer layers, elucidating semantic loci akin to chromosomal trait regions. This analogy enriches theoretical understanding of model inheritance, highlighting hierarchical and modular trait transmission across network depth.

### Practical Applications

nTDS<sub>ℓ</sub> guides targeted intervention in layer-specific fine-tuning, adaptive fusion mechanism design, and alignment auditing to ensure culturally robust and semantically faithful foundation models. Its computational efficiency and intuitive interpretability make it an indispensable tool for responsible AI governance in a multicultural world.

In essence, the Neural Trait Dominance Score (nTDS) advances both the scientific understanding and practical alignment engineering of foundation models, providing a mathematically sound, interpretable, and scalable metric for navigating the complex semantic landscape of cultural inheritance.

## Case Study and Validation

To empirically validate the Neural Trait Dominance Score (nTDS), we examine foundation models pretrained or fine-tuned on culturally distinct corpora, such as European and Asian datasets, along with their merged offspring models. By extracting layerwise latent embeddings **x**<sup>(Eur)</sup><sub>ℓ</sub>, **x**<sup>(Asi)</sup><sub>ℓ</sub>, and **x**<sup>(Offspring)</sup><sub>ℓ</sub>, we compute the nTDS<sub>ℓ</sub> metric as:

<div style="text-align: center; margin: 15px 0; font-size: 1.1em;">
<strong>nTDS<sub>ℓ</sub> = (‖**x**<sup>(Offspring)</sup><sub>ℓ</sub> − **x**<sup>(Asi)</sup><sub>ℓ</sub>‖<sub>2</sub> − ‖**x**<sup>(Offspring)</sup><sub>ℓ</sub> − **x**<sup>(Eur)</sup><sub>ℓ</sub>‖<sub>2</sub>) / (‖**x**<sup>(Eur)</sup><sub>ℓ</sub> − **x**<sup>(Asi)</sup><sub>ℓ</sub>‖<sub>2</sub> + ε)</strong>
</div>

where ε > 0 ensures numerical stability. Layerwise plots of nTDS<sub>ℓ</sub> reveal the depth-dependent dominance of parental cultural traits.
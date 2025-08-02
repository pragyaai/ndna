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

## Mathematical Formulation of Neural Trait Dominance Score (nTDS)

The Neural Trait Dominance Score (nTDS) formalizes the notion of layerwise parental trait influence in an offspring foundation model \( M_O \), constructed from two parent models \( M_A \) and \( M_B \), within the Neural DNA (nDNA) semantic geometry framework. Let \( \mathbf{x}^{(A)}_\ell, \mathbf{x}^{(B)}_\ell, \mathbf{x}^{(O)}_\ell \in \mathcal{M}_\ell \subseteq \mathbb{R}^d \), \( \ell = 1, . . . , L \), denote the latent semantic embeddings at layer \( \ell \) for \( M_A \), \( M_B \), and \( M_O \) respectively, where \( L \) is the total number of transformer layers and \( d \) is the embedding dimension. Each \( \mathcal{M}_\ell \) is a Riemannian manifold equipped with a local Fisher information metric \( \mathcal{F}_\ell \).

### Trait Axis and Local Linearization

Define the parental semantic trait axis at layer \( \ell \) as the geodesic tangent vector connecting parent embeddings:

<div style="text-align: center; margin: 15px 0; font-size: 1.1em;">
<strong>\( \mathbf{v}_\ell := \log_{\mathbf{x}^{(B)}_\ell}(\mathbf{x}^{(A)}_\ell) \in T_{\mathbf{x}^{(B)}_\ell} \mathcal{M}_\ell \)</strong>
</div>

where \( \log_p(q) \) denotes the Riemannian logarithmic map projecting point \( q \) onto the tangent space \( T_p \mathcal{M}_\ell \) at \( p \). Similarly, define the offspring displacement vector relative to parent B as:

<div style="text-align: center; margin: 15px 0; font-size: 1.1em;">
<strong>\( \mathbf{u}_\ell := \log_{\mathbf{x}^{(B)}_\ell}(\mathbf{x}^{(O)}_\ell) \in T_{\mathbf{x}^{(B)}_\ell} \mathcal{M}_\ell \)</strong>
</div>

These vectors encode semantic trait differences and inheritance displacement within the intrinsic geometry of \( \mathcal{M}_\ell \).

### Fisher-Rao Metric and Inner Product

The tangent space \( T_{\mathbf{x}^{(B)}_\ell} \mathcal{M}_\ell \) is endowed with a local inner product induced by the Fisher information metric \( \mathcal{F}_\ell^{(B)} \):

<div style="text-align: center; margin: 15px 0; font-size: 1.1em;">
<strong>\( \langle \mathbf{a}, \mathbf{b} \rangle_{\mathcal{F}_\ell^{(B)}} := \mathbf{a}^\top \mathcal{F}_\ell^{(B)} \mathbf{b}, \quad \mathbf{a}, \mathbf{b} \in T_{\mathbf{x}^{(B)}_\ell} \mathcal{M}_\ell \)</strong>
</div>

which respects local curvature and parameter uncertainty, providing a natural metric for semantic similarity and projection.

### Normalized Projection and Dominance Ratio

Project the offspring displacement \( \mathbf{u}_\ell \) onto the parental trait axis \( \mathbf{v}_\ell \) via:

<div style="text-align: center; margin: 15px 0; font-size: 1.1em;">
<strong>\( \alpha_\ell := \frac{ \langle \mathbf{u}_\ell, \mathbf{v}_\ell \rangle_{\mathcal{F}_\ell^{(B)}} }{ \| \mathbf{v}_\ell \|^2_{\mathcal{F}_\ell^{(B)}} } = \frac{ \mathbf{u}_\ell^\top \mathcal{F}_\ell^{(B)} \mathbf{v}_\ell }{ \mathbf{v}_\ell^\top \mathcal{F}_\ell^{(B)} \mathbf{v}_\ell } \)</strong>
</div>

The scalar \( \alpha_\ell \in \mathbb{R} \) quantifies the relative alignment of offspring semantics with parent A along the geodesic from parent B. Specifically, \( \alpha_\ell > 1 \) indicates overdominance of parent A, \( \alpha_\ell \approx 0 \) indicates dominance of parent B, and intermediate values indicate blended contributions.

### Monotonic Normalization and Bounded Score

To achieve a bounded and interpretable dominance score, apply a logistic normalization:

<div style="text-align: center; margin: 15px 0; font-size: 1.1em;">
<strong>\( \text{nTDS}_\ell := \sigma(k(\alpha_\ell - 0.5)) = \frac{1}{1 + \exp(-k(\alpha_\ell - 0.5))} \)</strong>
</div>

where \( k > 0 \) controls sensitivity near the midpoint 0.5, ensuring \( \text{nTDS}_\ell \in (0, 1) \) with higher values denoting stronger dominance of parent A.

### Layerwise Aggregation

Aggregate across layers to obtain a global trait dominance measure:

<div style="text-align: center; margin: 15px 0; font-size: 1.1em;">
<strong>\( \text{nTDS} := \frac{1}{L} \sum_{\ell=1}^{L} \text{nTDS}_\ell \)</strong>
</div>

which reflects the overall parental influence on the offspring's latent semantics.

### Jacobian Sensitivity and Dynamic Refinement

Extend the static embedding analysis by incorporating the Jacobian \( J_\ell^{(M)} := \partial \mathbf{x}_\ell^{(M)} / \partial \theta_\ell \) of latent embeddings with respect to model parameters \( \theta_\ell \). Define the trait influence operator:

<div style="text-align: center; margin: 15px 0; font-size: 1.1em;">
<strong>\( \mathcal{J}_\ell := J_\ell^{(A)} (J_\ell^{(A)})^\top − J_\ell^{(B)} (J_\ell^{(B)})^\top \)</strong>
</div>

capturing differential sensitivity of the latent space to parameter perturbations. Enhance \( \text{nTDS}_\ell \) by weighting \( \alpha_\ell \) with spectral properties of \( \mathcal{J}_\ell \), thereby integrating dynamic semantic influence and identifying layers where trait dominance is both geometrically and parametrically significant.
# Neural Trait Dominance Score (nTDS)

The Neural Trait Dominance Score (nTDS) provides a latent, layer-wise quantification of trait inheritance and selective amplification when two or more parent models undergo fusion. Inspired by trait dominance in Mendelian genetics, nTDS identifies which semantic characteristics prevail in offspring embeddings.

Given a trait axis \( \tau \in \mathbb{R}^d \) (e.g., sentiment, gender, dialect, modality), we define nTDS as:

\[
\text{nTDS}_\ell = \frac{\langle \mathbf{x}^{(C)}_\ell - \mathbf{x}^{(A)}_\ell, \tau \rangle}{\langle \mathbf{x}^{(B)}_\ell - \mathbf{x}^{(A)}_\ell, \tau \rangle}
\]

Where:
- \( \mathbf{x}^{(A)}_\ell \), \( \mathbf{x}^{(B)}_\ell \), and \( \mathbf{x}^{(C)}_\ell \) are mean-pooled embeddings at layer \( \ell \) for Parent A, Parent B, and Offspring C respectively.
- \( \tau \) is a unit-norm trait vector (e.g., a PCA direction, classifier weight, or interpretable semantic axis).
- The inner product computes projection onto the trait axis.

This score reflects the **fractional alignment** of the offspring’s semantic position with respect to its parents along a specific trait.


## Alternate View: Projection-based Interpretation

Consider an idealized trait subspace \( T \subset \mathbb{R}^d \) and a geodesic trajectory between parental embeddings. The projection of the offspring embedding onto this axis reflects how much the offspring inherits traits from Parent B relative to Parent A.

We can define:

\[
\text{nTDS}_\ell = \frac{(\mathbf{x}_\ell^{(C)} - \mathbf{x}_\ell^{(A)})^\top \cdot \tau}{\| \mathbf{x}_\ell^{(B)} - \mathbf{x}_\ell^{(A)} \|_2}
\]

This makes nTDS a **scalar projection** normalized by the trait difference between parents, making the scale comparable across tasks.


## Normalization: Trait Score Logistic Squeeze

To confine nTDS within a soft interpretable range \([0,1]\), we apply a logistic normalization:

\[
\widetilde{\text{nTDS}}_\ell = \sigma(\alpha \cdot \text{nTDS}_\ell + \beta)
\]

Where \( \alpha, \beta \) are scaling and centering parameters, often empirically set or learned via meta-evaluation, and \( \sigma \) is the sigmoid function.


## Trait Space Selection

Trait axes \( \tau \) can be:
- **Supervised:** learned via probes, classifiers, fine-tuned heads.
- **Unsupervised:** directions from PCA/ICA/t-SNE/UMAP.
- **Meta-defined:** derived from prompt variations or concept activation vectors.

In multilingual or multi-dialect settings, these directions often correspond to interpretable dimensions like formal vs. informal, regional vs. standard, or subjective vs. factual.

## Distance-based Alternative Formulation

When trait directions are noisy or unavailable, an alternative nTDS formulation relies on distances:

\[
\text{nTDS}_\ell = \frac{\|\mathbf{x}^{(C)}_\ell - \mathbf{x}^{(A)}_\ell\|_2}{\|\mathbf{x}^{(B)}_\ell - \mathbf{x}^{(A)}_\ell\|_2}
\]

This assumes that proximity to a parent in latent space corresponds to semantic similarity, under a local Euclidean approximation.


## Interpretation

- \( \text{nTDS}_\ell < 0 \): Anti-dominance or regression toward Parent A.
- \( \text{nTDS}_\ell \approx 0.5 \): Blended inheritance.
- \( \text{nTDS}_\ell > 1 \): Dominance amplification beyond Parent B.
- \( \text{nTDS}_\ell \gg 1 \): Trait drift or emergent trait synthesis.

Layerwise profiles of nTDS reveal trait shifts across depth — semantic traits may dominate early while syntactic traits dominate later.


## Relation to Fisher-Rao Geometry

Using the Fisher-Rao metric \( g_{\theta} \), we can refine nTDS via the local Riemannian geometry of embeddings. Let \( \gamma(t) \) be a geodesic between Parent A and B, and define:

\[
L_\ell = \int_{\gamma} \sqrt{g_\theta(d\theta, d\theta)}
\]

This induces a trait-aware thermodynamic length, aligning with nTDS interpretation under information geometry.


## Loss-weighted nTDS

In multitask or alignment training, layer-wise nTDS can be weighted by downstream loss gradients \( \nabla_{\mathbf{x}_\ell} \mathcal{L} \), yielding:

\[
\text{nTDS}_\ell^{\text{(w)}} = \text{nTDS}_\ell \cdot \|\nabla_{\mathbf{x}_\ell} \mathcal{L}\|_2
\]

This reveals whether dominant traits coincide with optimization-sensitive layers, linking semantics to learning dynamics.


## Applications and Empirical Insights

- **Alignment Tuning:** Detect over-alignment to specific parental ideologies, sentiments, or toxicities in fused LLMs.
- **Cultural Benchmarking:** Track dialectal or regional trait inheritance in multilingual fusions (e.g., Hindi-English, US-UK).
- **Interpretability:** Identify bottleneck layers where trait suppression or amplification occurs.


## Case Study: Cross-Cultural Fusion

We apply nTDS to a fusion of an Indian English model (Parent A) and a US English model (Parent B), using the formality axis \( \tau \) from a classifier trained on the GYAFC dataset. Results:

- Early layers (1–4): nTDS ≈ 0.2 → preservation of informal tone (Parent A).
- Mid layers (5–8): nTDS ≈ 0.6 → shift toward US English formality.
- Final layers (9–12): nTDS ≈ 1.1 → overdominance, emergent hyper-formality.

This suggests cumulative reinforcement of formal traits, potentially due to US-style pretraining bias in downstream alignment.

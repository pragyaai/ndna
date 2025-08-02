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

The Neural Trait Dominance Score (nTDS) formalizes the notion of layerwise parental trait influence in an offspring foundation model $M_O$, constructed from two parent models $M_A$ and $M_B$, within the Neural DNA (nDNA) semantic geometry framework.

Let $x_\ell^{(A)}, x_\ell^{(B)}, x_\ell^{(O)} \in \mathcal{M}_\ell \subseteq \mathbb{R}^d$, $\ell = 1, \ldots, L$, denote the latent semantic embeddings at layer $\ell$ for $M_A$, $M_B$, and $M_O$ respectively, where $L$ is the total number of transformer layers and $d$ is the embedding dimension. Each $\mathcal{M}_\ell$ is a Riemannian manifold equipped with a local Fisher information metric $F_\ell$.

## Trait Axis and Local Linearization

Define the parental semantic trait axis at layer $\ell$ as the geodesic tangent vector connecting parent embeddings:

$$v_\ell := \log_{x_\ell^{(B)}}(x_\ell^{(A)}) \in T_{x_\ell^{(B)}}\mathcal{M}_\ell$$

where $\log_p(q)$ denotes the Riemannian logarithmic map projecting point $q$ onto the tangent space $T_p\mathcal{M}_\ell$ at $p$.

Similarly, define the offspring displacement vector relative to parent B as:

$$u_\ell := \log_{x_\ell^{(B)}}(x_\ell^{(O)}) \in T_{x_\ell^{(B)}}\mathcal{M}_\ell$$

These vectors encode semantic trait differences and inheritance displacement within the intrinsic geometry of $\mathcal{M}_\ell$.

## Fisher-Rao Metric and Inner Product

The tangent space $T_{x_\ell^{(B)}}\mathcal{M}_\ell$ is endowed with a local inner product induced by the Fisher information metric $F_\ell^{(B)}$:

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

Enhance $\text{nTDS}_\ell$ by weighting $\alpha_\ell$ with spectral properties of $\mathcal{J}_\ell$, thereby integrating dynamic semantic influence and identifying layers where trait dominance is both geometrically and parametrically significant.


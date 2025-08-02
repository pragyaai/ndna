---
layout: page
title: "Neural Trait Dominance Score(nTDS)"
permalink: /llm/neural-genomics/nTDS/
---

## Introduction

While nHD and nGDI effectively quantify overall semantic divergence and global representational distance from parent models, they lack the resolution to reveal how specific semantic traits are differentially inherited across the depth of a foundation model. To fill this gap, we introduce the **Neural Trait Dominance Score (nTDS)**, a layer-wise metric designed to capture the relative influence each parent model exerts on the offspring's latent representations at every transformer layer.

## Genome-wide Quantitative Trait Loci (QTL) Mapping

<img src="{{ 'assets/gifs/neural_genomics/qtl-mapping-genome-wide.png' | relative_url }}" style="width: 100%; max-width: 720px; display: block; margin: auto;" />
<p style="text-align: center; font-weight: 600; font-size: 0.85em; margin-top: 0.8em;">
    <strong>Figure 40: Genome-wide Quantitative Trait Loci (QTL) Mapping:</strong>
</p>
<div style="text-align: justify; font-size: 0.9em; margin-top: 0.8em;">
This example shows the genome-wide scan for quantitative trait loci across genomes, where each peak represents a genomic region statistically associated with phenotypic variation. Formally, QTL mapping estimates the association between genetic markers G<sub>i</sub> and quantitative traits T by testing the linear model: <strong>T = μ + β<sub>i</sub>G<sub>i</sub> + ε</strong>, where μ is the population mean, β<sub>i</sub> is the effect size of marker G<sub>i</sub>, and ε is the residual error (320; 321). Peaks in the LOD (logarithm of odds) score indicate loci with significant trait associations, revealing genomic regions with dominant genetic influence on the phenotype.
</div>

## Connection to Neural Trait Dominance Score (nTDS)

**Analogous to QTLs** indicating dominant parental allele influence on phenotypic traits at chromosomal loci, the **nTDS quantifies the dominance of parental semantic traits across transformer layers** in foundation models. 

Each layer **ℓ** functions as a semantic locus, where nTDS identifies which parent exerts greater influence on the offspring's internal representation.

## Implications

This biological metaphor underscores that **semantic inheritance in neural models is layer-specific and trait-dependent**, much like phenotypic traits vary in genetic dominance across chromosomes. 

Understanding these patterns facilitates:

- **Targeted alignment tuning**
- **Improved interpretability** 
- **Balanced semantic integration**
- **Mitigation of bias propagation** in multicultural AI systems

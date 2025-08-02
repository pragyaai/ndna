# Neural Trait Dominance Score (nTDS)

## Introduction

While nHD and nGDI effectively quantify overall semantic divergence and global representational distance from parent models, they lack the resolution to reveal how specific semantic traits are differentially inherited across the depth of a foundation model. To fill this gap, we introduce the **Neural Trait Dominance Score (nTDS)**, a layer-wise metric designed to capture the relative influence each parent model exerts on the offspring's latent representations at every transformer layer.

## Genome-wide Quantitative Trait Loci (QTL) Mapping

<div align="center">
<img src="assets/gifs/neural_genomics/nTDS/nTDS.png" alt="Genome-wide Quantitative Trait Loci (QTL) Mapping" style="max-width: 100%; height: auto;">
<br>
<strong>Figure 40:</strong> Genome-wide Quantitative Trait Loci (QTL) Mapping
</div>

<div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #007bff;">

This example shows the genome-wide scan for quantitative trait loci across genomes, where each peak represents a genomic region statistically associated with phenotypic variation. 

**Formally, QTL mapping estimates the association between genetic markers G<sub>i</sub> and quantitative traits T by testing the linear model:**

<div style="text-align: center; margin: 15px 0; font-size: 1.1em;">
<strong>T = μ + β<sub>i</sub>G<sub>i</sub> + ε</strong>
</div>

where:
- **μ** is the population mean
- **β<sub>i</sub>** is the effect size of marker G<sub>i</sub>
- **ε** is the residual error (320; 321)

Peaks in the LOD (logarithm of odds) score indicate loci with significant trait associations, revealing genomic regions with dominant genetic influence on the phenotype.

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

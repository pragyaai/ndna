---
layout: page
title: Persuasion Attack Signature Analysis
permalink: /llm/nlp-operations/persuasion-attack-signature/
skip_title: true
---

{% include ndna-title.liquid title="Deriving the Persuasion Attack Signature" %}

## Deriving the Persuasion Attack Signature

Extending on our Definition: the **_Neural Virulence Index_ (nVI)**, we unify the core metrics—including **_Neural Total Drift Score_ (nTDS)**, **_Directional Inheritance Vector_ (nDIV)**, **_Cultural Conflict Vector Field_ (nCCL)**, and **_Epistemic Plasticity Index_ (nEPI)**—into a succinct latent vector formulation that encapsulates the distinct representational dynamics of the **Persuasion Attack**, conceptualized as a nuanced form of *genome insertion and epigenetic modulation*.

---

## Neural Drift Decomposition — Persuasion Attack

### (a) 3D Neural Drift Trajectory (nDNA)

This trajectory captures the evolving internal geometry across layers $\ell=20$–$30$, tracking changes in **spectral curvature** ($\kappa_\ell$) and **thermodynamic length** ($\mathcal{T}_\ell$), with torsion ($\xi_\ell$) represented by segment thickness. The **Persuasion Attack** induces a gradual divergence beginning near $\ell=22$, peaking at $\ell=29$, marking a pronounced geometric restructuring of belief states.

**Biological analogy.** This resembles **_viral genome insertion and epigenetic modulation_**, where viral DNA or transposable elements subtly reprogram host gene expression over time without changing DNA sequence {% cite white2008structures harrison2008viral einav2015viral kozlov2010mechanisms schorn2010membrane %}. Similarly, persuasion attacks embed semantic payloads deep within the prompt, stealthily reshaping model behavior with persistent yet initially undetectable effects {% cite kazazian2004mobile feinberg2007phenotypic wallace2019universal %}.

### (b) nTDS: Thermodynamic Dominance

The **Neural Total Drift Score (nTDS)** measures semantic energy displacement by summing absolute deviations in curvature ($\kappa_\ell$) and thermodynamic length ($\mathcal{T}_\ell$) across layers between base and adversarial paths:

$$
\text{nTDS} = \frac{1}{L} \sum_{\ell} \left| \kappa_\ell^{\text{atk}} - \kappa_\ell^{\text{base}} \right| + \left| \mathcal{T}_\ell^{\text{atk}} - \mathcal{T}_\ell^{\text{base}} \right|
$$

Bars show which flow—Base LLaMA or Persuasion Attack—dominates drift. From $\ell=23$, dominance shifts strongly toward the attack, highlighting a semantic vulnerability zone.

**Biologically**, this matches **_endosomal escape_**, where viruses breach vesicle membranes with minimal energy to access cytoplasm {% cite lopez2011early matsubara2020viral martin2019endosomal %}. Persuasion attacks similarly apply subtle geometric perturbations, steering latent flows stealthily yet effectively {% cite brown2018passive paul2013vesicular %}.

### (c) nDIV: Directional Inheritance

The **nDIV** vector field characterizes the semantic bias direction and magnitude per layer:

$$
\vec{v}_\ell = \text{Attack}_\ell - \frac{1}{2}(\text{Base}_\ell + \text{Attack}_\ell) = \frac{1}{2}(\text{Attack}_\ell - \text{Base}_\ell)
$$

Each red arrow encodes $\vec{v}_\ell$ with *length* as bias strength and *orientation* as latent pull. Past $\ell=24$, the field aligns strongly, reflecting deliberate inheritance redirection.

**Biologically**, this parallels **_viral transcriptional gradients_**, where viral genomes impose downstream gene expression bias {% cite schepeler2014lineage brandt2001gradient sharon2014transcriptional %}. The attack imprints directional semantic steering akin to mRNA hijacking ribosomes {% cite jackson2010mrna jan2011mrna kozak1981initiation kane2000mechanisms %}, yielding structurally intact yet semantically reprogrammed outputs.

### (d) nCCL: Cultural Conflict Vector Field

The **nCCL** quantifies **_semantic dissonance_** between attacker and base model representations. For each layer $\ell$, the conflict vector:

$$
\vec{c}_\ell = 
\underbrace{
  \text{Attack}_\ell - \text{Base}_\ell
}_{\text{conflict vector}} 
\quad \text{projected onto } \mathbb{R}^2_{\text{semantic axes}}
$$

Each $\vec{c}_\ell$ lies on a 2D plane defined by *orthogonal priors* (e.g., topic polarity, syntactic structure). Layers $\ell = 24$–$28$ show rising *magnitude* and directional drift, indicating zones of semantic tension and representational discord.

**Biologically**, this parallels *molecular mimicry*: pathogens mimic host proteins to evade detection but trigger autoimmunity {% cite oldstone1987molecular rose2016molecular %}. Persuasion implants *familiar activations* hijacking interpretation, causing **_semantic autoimmunity_**—deceptive resemblance, not anomaly. These fields show how the attack bypasses syntax to subtly corrupt value alignment, *mimicking rather than attacking*.

### (e) nEPI: Epistemic Plasticity Index

The **nEPI** measures the susceptibility of each layer $\ell$ to semantic deformation under adversarial pressure:

$$
\text{nEPI}_\ell = 
\left\| 
  \underbrace{
    \text{Attack}_\ell - \frac{1}{2}(\text{Base}_\ell + \text{Attack}_\ell)
  }_{\text{vector from semantic midpoint}}
\right\|_2
=
\frac{1}{2} \left\| \text{Attack}_\ell - \text{Base}_\ell \right\|_2
$$

This $\ell_2$ deviation from the semantic midpoint exposes pliable zones, with peaks at $\ell = 24$–$26$ indicating layers that absorb adversarial perturbations with minimal resistance.

**Biologically**, this resembles **_stem-like semantic niches_**: layers analogous to *developmental progenitors*, highly plastic, weakly canalized, receptive to minor regulatory inputs {% cite zhang2021epigenetic frantz2015cell %}. These *cognitive pluripotency zones* provide low-friction entry points for behavioral grafting, enabling reprogramming without disrupting upstream encoding.

---

## Comprehensive Analysis Summary

This figure presents a **high-resolution breakdown** of the **Persuasion Attack** signature, showing how it **_modulates internal representations_** in **Base LLaMA**.

**(a)** depicts the 3D trajectory of **neural curvature** ($\kappa_\ell$), **thermodynamic length** ($\mathcal{T}_\ell$), and **torsion** ($\xi_\ell$);  
**(b)** measures total semantic displacement via *thermodynamic dominance* (**nTDS**);  
**(c)** tracks gradual semantic drift through *directional inheritance vectors* (**nDIV**);  
**(d)** illustrates semantic resistance via a *cultural conflict field* (**nCCL**); and  
**(e)** highlights pliability zones with the *epistemic plasticity index* (**nEPI**).

Taken together, these views reveal a **_slow, persistent_** and **_biologically inspired_** mechanism: rather than abrupt overwrite, the persuasion attack acts as a *genomic insertion with epigenetic modulation*, subtly embedding adversarial instructions deep within the model's representational genome. This drives gradual, steady semantic drift near layers $\ell = 24$–$27$. Within this band, **curvature deviation**, **plasticity**, **inheritance bias**, and **conflict alignment** converge — forming a *soft tissue niche* in the model's **reasoning cortex**. The result is persistent, low-energy **_semantic reprogramming_** rather than abrupt hijacking.

### Persuasion Effect Formula

$$
\boxed{
\text{PersuasionEffect} = 
\sum_{\ell = \ell_s}^{\ell_e}
\underbrace{
  \left[
    \Delta \kappa_\ell \cdot \mathcal{P}_\ell + 
    \text{nDIV}_\ell \cdot \mathcal{B}_\ell
  \right]
}_{\text{\textbf{epigenetic modulation vector}}}
}
$$

Here, the *gradual curvature changes* ($\Delta \kappa_\ell$) represent the local reshaping of latent semantic geometry; *plasticity* ($\mathcal{P}_\ell$) quantifies layer-wise receptiveness to perturbation; the *directional inheritance* term ($\text{nDIV}_\ell$) encodes persistent semantic bias; and $\mathcal{B}_\ell$ ensures alignment with the adversarial modulation goals.

This mirrors **_genome insertion and epigenetic modulation_** {% cite kazazian2004mobile feinberg2007phenotypic %}, where foreign elements subtly alter gene expression without disrupting core DNA. Likewise, persuasion attacks embed adversarial payloads deep in context, reshaping outputs gradually and persistently.

---

## Empirical Correlations and Redundancies

### Analysis of ALKALI Benchmark Results

Systematic analysis of the ALKALI benchmark reveals sharp, localized deviations in $\boldsymbol{\Delta \kappa_\ell}$ and $\mathbf{nDIV_\ell}$ within a narrow *vulnerable band* $[\ell_s, \ell_e]$ (e.g., layers 24--25). These deviations align tightly with peaks in the epistemic plasticity index $\mathbf{nEPI_\ell}$, highlighting pliable latent "soft tissue" layers most susceptible to semantic modulation.

Conversely, the cultural conflict metric $\mathbf{nCCL_\ell}$ remains consistently low ($< \epsilon$) across all layers, supporting the interpretation that persuasion attacks employ stealthy mimicry rather than overt semantic disruption, rendering $\mathbf{nCCL_\ell}$ primarily a diagnostic rather than a causal metric.

Furthermore, the scalar drift magnitude $\mathbf{nTDS_\ell}$ exhibits moderate elevations but is *strongly correlated* with the combined geometric and directional metrics $\boldsymbol{\Delta \kappa_\ell}$ and $\|\mathbf{nDIV_\ell}\|$, indicating redundancy and lack of orthogonal information.

Lastly, $\mathbf{nEPI_\ell}$ modulates the susceptibility of layers to geometric deformation, functioning as a multiplicative weighting coefficient rather than an additive semantic vector component.

### Formalizing the Epigenetic Modulation Vector

Motivated by these observations, we propose the *epigenetic modulation vector* $\mathbf{E}_\ell \in \mathbb{R}^d$ at each layer $\ell$:

$$
\mathbf{E}_\ell = \boldsymbol{\Delta \kappa_\ell} \cdot \boldsymbol{\mathcal{P}_\ell} + \mathbf{nDIV_\ell} \cdot \boldsymbol{\mathcal{B}_\ell}
$$

where:

- $\boldsymbol{\Delta \kappa_\ell} = \kappa_\ell^{\text{atk}} - \kappa_\ell^{\text{base}}$ measures local geometric bending caused by the attack.
- $\boldsymbol{\mathcal{P}_\ell} := \mathbf{nEPI_\ell}$ is the epistemic plasticity coefficient weighting geometric effects.
- $\mathbf{nDIV_\ell}$ is the directional semantic drift vector encoding adversarial steering.
- $\boldsymbol{\mathcal{B}_\ell}$ quantifies the semantic bias strength aligning steering with adversarial intent.

The metrics $\mathbf{nTDS_\ell}$ and $\mathbf{nCCL_\ell}$ are excluded: $\mathbf{nTDS_\ell}$ due to redundancy with curvature and directional components, and $\mathbf{nCCL_\ell}$ as it remains low and diagnostic rather than constitutive of the modulation vector.

### Aggregation Across the Vulnerable Layer Band

The total persuasion effect aggregates over the vulnerable layer band $[\ell_s, \ell_e]$:

$$
\boxed{
\text{PersuasionEffect} = \sum_{\ell = \ell_s}^{\ell_e} \mathbf{E}_\ell = \sum_{\ell = \ell_s}^{\ell_e} \left( \boldsymbol{\Delta \kappa_\ell} \cdot \boldsymbol{\mathcal{P}_\ell} + \mathbf{nDIV_\ell} \cdot \boldsymbol{\mathcal{B}_\ell} \right)
}
$$

This captures the cumulative latent vector field by which persuasion stealthily reshapes internal semantic states, coupling geometric deformation with directional semantic steering modulated by layerwise plasticity and bias.

### Interpretation

The scalar term $\boldsymbol{\Delta \kappa_\ell} \cdot \boldsymbol{\mathcal{P}_\ell}$ models *epigenetic remodeling*—flexible reshaping of latent manifold curvature akin to chromatin accessibility changes. The vector term $\mathbf{nDIV_\ell} \cdot \boldsymbol{\mathcal{B}_\ell}$ encodes *semantic canalization*, steering representations along adversarially favored latent directions.

This dual formulation explains the gradual, cumulative semantic drift characteristic of persuasion attacks, which exploit semantic pliability to embed adversarial instructions covertly without abrupt behavioral shifts.

### Practical Considerations

Implementing this formalism requires accurate estimation of the layerwise epistemic plasticity coefficients $\boldsymbol{\mathcal{P}_\ell}$ and semantic bias strengths $\boldsymbol{\mathcal{B}_\ell}$, achievable via fine-grained probing of model internals and disentangling semantic subspaces. Identification of the vulnerable layer band $[\ell_s, \ell_e]$ must be calibrated per model and task context. Integration of these measures into detection and mitigation pipelines enables precise recognition of persuasion's latent signature in real-world adversarial scenarios.

---

## Pair Attack Analysis: Genetic Recombination Vector

### Layerwise Metrics for Pair Attack

<table style="width: 100%; border-collapse: collapse;">
  <caption style="margin-bottom: 10px; font-weight: bold;">
    <strong>Layerwise metrics for the Pair Attack from the ALKALI dataset illustrating the empirical basis for the proposed <em>genetic recombination vector</em> formulation.</strong><br><br>
    This table demonstrates how the pair attack recombines latent prompt fragments to induce <em>composite semantic reprogramming</em> across layers ℓ = 20 to 30:
    <ul style="text-align: left; margin: 10px 0; padding-left: 20px;">
      <li><strong>κ<sub>ℓ</sub></strong> (<strong>Spectral Curvature</strong>) exhibits localized peaks in the band 23--26, marking layers with geometric bending susceptible to semantic fusion.</li>
      <li><strong>T<sub>ℓ</sub></strong> (<strong>Thermodynamic Length</strong>) measures semantic energy supporting the recombination process, elevated in the 24--27 band indicating internal latent restructuring.</li>
      <li><strong>nDIV<sub>ℓ</sub></strong> (<strong>Directional Inheritance Vector</strong>) shows multi-dimensional steering consistent with combined adversarial intent, peaking in layers 24--26.</li>
      <li><strong>nCCL<sub>ℓ</sub></strong> (<strong>Cultural Conflict Vector</strong>) remains significantly <em>higher</em> than persuasion attack values, reflecting semantic tension from latent flow merging.</li>
      <li><strong>nTDS<sub>ℓ</sub></strong> (<strong>Neural Total Drift Score</strong>) indicates cumulative displacement, largely overlapping with curvature and inheritance signals.</li>
      <li><strong>nEPI<sub>ℓ</sub></strong> (<strong>Epistemic Plasticity Index</strong>) identifies pliable layers facilitating recombination and semantic fusion.</li>
      <li><strong>R<sub>ℓ</sub></strong> (<strong>Recombination Coefficient</strong>) quantifies the relative contribution of combined latent trajectories per layer, peaking within the vulnerable band.</li>
    </ul>
    <strong>Justification for Equation Omission:</strong> The final <em>PairAttackEffect</em> equation incorporates curvature deviation weighted by plasticity (P<sub>ℓ</sub>), directional inheritance (nDIV<sub>ℓ</sub>) weighted by bias (B<sub>ℓ</sub>), and an explicit recombination term (R<sub>ℓ</sub>), modeling the synergistic fusion mechanism. Semantic conflict remains a diagnostic indicator but is excluded from the summation.
  </caption>
  <thead>
    <tr style="background-color: rgba(0, 0, 0, 0.1);">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>Layer</strong></th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>κ<sub>ℓ</sub></strong></th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>T<sub>ℓ</sub></strong></th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>nDIV<sub>ℓ</sub></strong></th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>nCCL<sub>ℓ</sub></strong></th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>nTDS<sub>ℓ</sub></strong></th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>nEPI<sub>ℓ</sub></strong></th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>R<sub>ℓ</sub></strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">20</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.039</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.78</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.07</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.07</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.09</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.20);">0.10</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.12</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">21</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.20);">0.041</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.20);">0.80</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.20);">0.10</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.30);">0.08</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.20);">0.11</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.25);">0.12</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.20);">0.14</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">22</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.048</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.86</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.14</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 165, 0, 0.25);">0.12</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.15</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.16</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.18</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">23</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 165, 0, 0.30);">0.054</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 165, 0, 0.30);">0.90</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 165, 0, 0.30);">0.18</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 165, 0, 0.30);">0.14</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 165, 0, 0.30);">0.19</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 165, 0, 0.30);">0.21</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 165, 0, 0.30);">0.23</td>
    </tr>
    <tr style="background-color: rgba(255, 0, 0, 0.15);">
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">24</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.35); font-weight: bold;">0.061</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.35); font-weight: bold;">0.98</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.40); font-weight: bold;">0.23</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.40); font-weight: bold;">0.19</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.35); font-weight: bold;">0.23</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.35); font-weight: bold;">0.27</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.40); font-weight: bold;">0.29</td>
    </tr>
    <tr style="background-color: rgba(255, 0, 0, 0.10);">
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">25</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.30);">0.059</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.30);">0.95</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.35);">0.22</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.35);">0.18</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.30);">0.22</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.30);">0.25</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.35);">0.27</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">26</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.30);">0.053</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.30);">0.91</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 165, 0, 0.30);">0.20</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 165, 0, 0.25);">0.16</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.30);">0.19</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.30);">0.21</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 165, 0, 0.30);">0.21</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">27</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.051</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.88</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 165, 0, 0.25);">0.18</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.20);">0.14</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.17</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.19</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.19</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">28</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.20);">0.042</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.20);">0.82</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.14</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.15);">0.12</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.20);">0.14</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.20);">0.16</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.20);">0.16</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">29</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.040</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.80</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.20);">0.11</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.10);">0.11</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.11</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.14</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.13</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">30</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.039</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.79</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.08</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.10);">0.09</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.09</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.12</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.11</td>
    </tr>
  </tbody>
</table>

### Color Legend
- 🟢 **Green**: Low values (0.00-0.05) - Baseline activity
- 🟡 **Yellow**: Medium values (0.05-0.15) - Moderate activity  
- 🟠 **Orange**: High values (0.15-0.20) - Elevated activity
- 🔴 **Red**: Peak values (0.20+) - Maximum vulnerability/activity

This table reveals the **genetic recombination** pattern of pair attacks, where layers 24-25 show peak vulnerability across all metrics, demonstrating how adversarial prompt fragments fuse to create composite semantic reprogramming in the model's neural DNA.

---
layout: page
title: Adversarial Attacks as Semantic Infections
permalink: /llm/nlp-operations/adversarial-attack-semantic-infections/
skip_title: true
---

{% include ndna-title.liquid title="Adversarial Attacks as Semantic Infections in Neural DNA" %}

---

## Taxonomy of Adversarial Attacks in LLMs

The categories of adversarial attacks can be structured as a hierarchical classification spanning three principal branches—**Jailbreak**, **Control Generation**, and **Performance Degradation**—each reflecting distinct adversarial intents: bypassing alignment, subverting generation control, or degrading functional reliability.

### Attack Categories

#### Jailbreak
- **Optimization-based**
  - Societal Harm {% cite wu2024llms pair23 tap23 %}
  - Privacy Violation {% cite wu2024llms pair23 tap23 %}
  - Disinformation & Deception {% cite wu2024llms pair23 tap23 %}
- **Long Tail Distribution**
  - Rare Prompts {% cite jiang2023promptpacker %}
  - Out-of-Distribution Exploits {% cite schulhoff2023hackaprompt %}
  - Persuasive Manipulation {% cite jiang2023promptpacker %}

#### Control Generation
- **Direct Attack**
  - Malicious Prompt Engineering {% cite jiang2023promptpacker %}
  - Syntax Manipulation {% cite jiang2023promptpacker %}
  - Prompt Suffix Exploits {% cite schulhoff2023hackaprompt %}
- **Indirect Attack**
  - Goal Hijacking {% cite chen2024pseudo %}
  - Prompt Leaking {% cite li2024pleak %}
  - External Source Injection {% cite greshake2023indirect %}

#### Performance Degradation
- **Dataset Poisoning**
  - Label Flipping {% cite greshake2023indirect %}
  - Data Corruption {% cite greshake2023indirect %}
  - Poisoned Sample Injection {% cite greshake2023indirect %}
- **Prompt Injection**
  - Wrong Classification {% cite greshake2023indirect %}
  - Answer Disparity {% cite greshake2023indirect %}
  - Consistency Violation {% cite greshake2023indirect %}

This taxonomy reveals that adversarial risk is not monolithic. Instead, it manifests along orthogonal dimensions—ethical, semantic, and functional—and cannot be addressed through surface-level defenses alone. Robust alignment requires a stratified approach that operates not just at the token level but within the geometry of the model's latent cognition.

---

## ALKALI Dataset Distribution

<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr style="background-color: rgba(0, 0, 0, 0.1);">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Category</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Subtype & Source(s)</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: right;">Instances</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2" style="padding: 8px; border: 1px solid #ddd; vertical-align: top;"><strong>Jailbreak</strong></td>
      <td style="padding: 8px; border: 1px solid #ddd;"><em>Optimization-based</em>: {% cite wu2024llms pair23 tap23 %}</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">1,200</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;"><em>Long-tail Distribution</em>: {% cite jiang2023promptpacker schulhoff2023hackaprompt %}</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">1,500</td>
    </tr>
    <tr>
      <td rowspan="2" style="padding: 8px; border: 1px solid #ddd; vertical-align: top;"><strong>Control Generation</strong></td>
      <td style="padding: 8px; border: 1px solid #ddd;"><em>Direct Attacks</em>: {% cite jiang2023promptpacker schulhoff2023hackaprompt %}</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">1,600</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;"><em>Indirect Attacks</em>: {% cite chen2024pseudo li2024pleak greshake2023indirect %}</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">1,400</td>
    </tr>
    <tr>
      <td rowspan="2" style="padding: 8px; border: 1px solid #ddd; vertical-align: top;"><strong>Performance Degradation</strong></td>
      <td style="padding: 8px; border: 1px solid #ddd;"><em>Dataset Poisoning</em>: {% cite greshake2023indirect %}</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">1,800</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;"><em>Prompt Injection</em>: {% cite greshake2023indirect %}</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">1,500</td>
    </tr>
    <tr style="background-color: rgba(0, 0, 0, 0.1);">
      <td style="padding: 8px; border: 1px solid #ddd;"><strong>Total</strong></td>
      <td style="padding: 8px; border: 1px solid #ddd;">—</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;"><strong>9,000</strong></td>
    </tr>
  </tbody>
</table>

**ALKALI Dataset Distribution by Adversarial Taxonomy.** This table details the distribution of prompts across the ALKALI benchmark's taxonomy, spanning *Jailbreak*, *Control Generation*, and *Performance Degradation*, with representative subtypes anchored to cited adversarial sources. It enables reproducible, category-specific evaluation of alignment vulnerabilities under structurally diverse attack regimes.

---

## Conditional Semantic Infections

In biology, virulence is a function of both the pathogen and the host. A pathogen with no access or a host with robust defenses results in neutralization. We observe the same pattern in neural systems: adversarial triggers are effective only when two conditions co-occur:

- **Access:** The adversarial token $t^*$ is present and syntactically positioned to enter the interpretive core.
- **Vulnerability:** The model is internally predisposed—e.g., has high nEPI or conflict sensitivity in mid-depth layers.

This mirrors the biological doctrine that *pathogenicity is not only a matter of exposure, but of receptivity and channel availability* {% cite casadevall2001host schmid2007infectious %}.

We propose that LLM adversaries should be treated as **_conditional semantic infections_**: they do not break the model universally, but instead target vulnerable semantic tissue via encoded attack vectors, much like viruses exploit regulatory gaps in the immune system. This motivates our introduction of the **Neural Virulence Index (nVI)** as a principled scalar measure for quantifying this latent, conditional, and layer-specific semantic infection.

---

## Triggering a Semantic Infection: Susceptibility, Activation, and Inheritance

Adversarial attacks in LLMs do not unfold through brute force alone—they require a confluence of *model vulnerabilities and prompt structure*. Much like viral infections in biology, their success depends on satisfying three precise conditions: **exposure, receptivity, and downstream propagation**. We formalize this analogy in the neural context:

### Susceptibility (*Semantic Tropism*)
An attack only takes hold if the model enters a **_receptive state_**—most commonly in mid-depth layers ($\ell \approx 24$–$27$) where **_epistemic plasticity_** is high. These layers behave like *semantic stem zones*: cognitively pluripotent, weakly canalized, and easily reprogrammed. This mirrors **_tissue tropism_** in virology, where only certain cell types—those with open chromatin or exposed surface receptors—permit infection {% cite pomerantz1990tropism zhang2021epigenetic frantz2015cell %}. Without sufficient pliability, even structurally toxic prompts are ignored by the model's internal logic.

### Activation (*Latent Regulatory Trigger*)
The adversarial input must align with the model's internal routing in a way that **_activates_** dormant behavioral machinery. This is analogous to **_proviral activation_**, where integrated viral DNA lies silent in the genome until a specific stressor or signaling cascade reawakens it {% cite temin1974provirus best1996activation grow2015intrinsic %}. In the LLM setting, the trigger token $t^*$ functions as a *semantic ligand*—harmless in isolation, but catalytically potent when presented in the correct context. Recent work confirms this structure: prompt injections only succeed when embedded at *precisely the right semantic junction*, akin to finding an open promoter in chromatin {% cite zou2023universaltransferableadversarialattacks liu2023jailbroken %}.

### Inheritance (*Downstream Semantic Flow*)
Lasting disruption requires that the adversarial signature be **_preserved, amplified, and inherited_** across depth. This is quantified by **nDIV**$_\ell$—the *directional inheritance vector*—which tracks how representational flow is bent from its midpoint. Biologically, this parallels **_epigenetic memory_**: once an infection alters transcriptional pathways or chromatin marks, the modified state persists across cell divisions {% cite jaenisch2003epigenetic bird2007perceptions cedar2009epigenetics %}. In transformers, residual and attention mechanisms act as the *semantic cytoskeleton*, enabling adversarial signals to propagate and solidify {% cite hendrycks2021aligning zhu2024promptbench %}.

**In short:** LLM attacks operate not as brute distortions, but as **_semantic infections_**—strategically exploiting the model's internal pliability, latent receptors, and propagation mechanisms. Much like a virus, an adversarial token $t^*$ is only *pathogenic* when three biological-style constraints are met: **_access_**, **_activation_**, and **_inheritance_**. Without all three, the attack fails silently.

---

## The Neural Virulence Index (nVI)

We define the full *Neural Virulence Index* (**nVI**) as:

$$
\text{nVI}(t^*) = \sum_{\ell = \ell_s}^{\ell_e}
\underbrace{
  \mathbb{I}_{t^*} \cdot \psi_\ell
}_{\text{\textbf{Activation}}}
\cdot
\underbrace{
  \left(
    \lambda_\kappa \cdot |\Delta \kappa_\ell| +
    \lambda_T \cdot |\Delta \mathcal{T}_\ell| +
    \lambda_{\text{tds}} \cdot \text{nTDS}_\ell
  \right)
}_{\text{\textbf{Thermodynamic Drift}}}
\cdot
\underbrace{
  \left(
    \lambda_{\text{div}} \cdot \text{nDIV}_\ell +
    \lambda_{\text{conf}} \cdot \text{nCCL}_\ell +
    \lambda_{\text{epi}} \cdot \text{nEPI}_\ell
  \right)
}_{\text{\textbf{Semantic Virulence}}}
$$

### Components of the Neural Virulence Index

Each term corresponds to a biologically inspired mechanism governing adversarial semantic takeover in transformer models:

- $\boldsymbol{\mathbb{I}_{t^*}}$: *__Trigger indicator__*. A binary gate activated only by the presence of a rare adversarial token $t^*$, analogous to viral **_tropism_**—selective infection of specific tissues or contexts {% cite pomerantz1990tropism %}.
- $\boldsymbol{\psi_\ell}$: *__Layer susceptibility coefficient__*. Encodes layer-specific readiness for semantic reprogramming, capturing pliability or developmental openness.
- $\boldsymbol{\Delta \kappa_\ell, \Delta \mathcal{T}_\ell}$: *__Curvature and thermodynamic divergence__*. Quantify geometric and energetic deviations from base model states.
- $\boldsymbol{\text{nTDS}_\ell}$: *__Neural Total Drift Score__*. Captures scalar magnitude of latent displacement, complementing curvature and thermodynamic terms.
- $\mathbf{nDIV}_\ell$: *__Directional Inheritance Vector__*. Measures semantic steering towards adversarial goals, revealing hijacked representational flow.
- $\mathbf{nCCL}_\ell$: *__Cultural Conflict Loss__*. Quantifies semantic discord between attacked and base states.
- $\mathbf{nEPI}_\ell$: *__Epistemic Plasticity Index__*. Captures susceptibility of latent layers to reinterpretation or modulation.

Further, the *nVI* can be interpreted as the product of **thermodynamic drift** and **semantic virulence**, gated by the trigger token presence:

$$
\boxed{
\text{nVI}(t^*) = \sum_{\ell = \ell_s}^{\ell_e}
\mathbb{I}_{t^*} \cdot 
\left( \text{Drift}_\ell \cdot \text{Hijack}_\ell \right)
}
$$

where:
- $\text{Drift}_\ell := \lambda_\kappa \cdot |\Delta \kappa_\ell| + \lambda_T \cdot |\Delta \mathcal{T}_\ell| + \lambda_{\text{tds}} \cdot \text{nTDS}_\ell$
- $\text{Hijack}_\ell := \lambda_{\text{div}} \cdot \text{nDIV}_\ell + \lambda_{\text{conf}} \cdot \text{nCCL}_\ell + \lambda_{\text{epi}} \cdot \text{nEPI}_\ell$

**Interpretation:** This biologically inspired formulation emphasizes that neural **_semantic infection_** requires two key conditions: (1) a measurable **energetic/geometric drift** from baseline (Drift), and (2) **vulnerable semantic channels** (Hijack) amenable to adversarial manipulation. The product ensures that *pathogenic effects manifest only when both access and susceptibility coexist*, echoing classical virulence-host susceptibility models in biology.

---
layout: page
title: nDNA-Lens - Quantization and Pruning as Thermodynamic Collapses
permalink: /llm/quantization/
skip_title: true
---

{% include ndna-title.liquid title="nDNA Lens - Quantization and Pruning as Thermodynamic Collapses" %}

**What do quantization and pruning *do* to a model's epistemic structure beyond reducing FLOPs and memory?** Can we understand them not merely as engineering shortcuts, but as **belief geometry** events that alter the latent semantics of a model's neural genome?

In this section, we pose a central research question:  
*How do quantization and pruning reshape the model's internal belief geometry--specifically its spectral curvature, thermodynamic length, and belief vector field---when observed through the lens of neural DNA (nDNA) diagnostics?*

While prior work often focuses on compression-induced accuracy trade-offs {% cite han2015deep %} {% cite frankle2018lottery %} {% cite cheng2018model %}, quantization noise {% cite nagel2020up %} {% cite zafrir2019q8bert %}, and robustness degradation {% cite guo2022mlprune %} {% cite choukroun2019low %}, we explore a deeper hypothesis: that such operations induce an **irreversible semantic compression**--analogous to an *entropy collapse* {% cite achille2018emergence %}--which distorts the model's epistemic manifold and reduces its ability to preserve *instructional, cultural, or conceptual diversity* in reasoning {% cite mu2020compositional %} {% cite abid2021persistent %}.

By visualizing nDNA geometry *before and after* quantization or pruning, we aim to reveal whether these methods disproportionately collapse high-torsion belief zones {% cite bishop2023geometric %}, thereby flattening semantic diversity into brittle, low-entropy attractors {% cite wang2023makes %}.

**Our goal is to characterize these effects not simply as degradations in performance, but as *geometric distortions in the latent epistemology* of the model**--illuminating what is truly lost when we squeeze too tightly.

## nDNA as a Lens: Quantization and Pruning as Thermodynamic Collapses

**Quantization as Thermodynamic Collapse.** Quantization compresses weight precision (e.g., 4-bit or 2-bit representations {% cite frantar2023gptq %} {% cite dettmers2023qlora %}), but also contracts the latent geometry. Through nDNA lens, this manifests as:

- A contraction of *thermodynamic length* $$\mathcal{L}_\ell$$, reflecting diminished epistemic effort at layer $$\ell$$.
- A flattening of *spectral curvature* $$\kappa_\ell$$, reducing representational richness and alignment adaptability.
- A weakening of *belief vector fields* $$\|\mathbf{v}_\ell^{(c)}\|$$, implying reduced alignment steering capacity.

The collapse can be formalized as:

$$\boxed{
\mathcal{M}_{\text{full}} \xrightarrow{\text{quantization}} \mathcal{M}_{\text{compressed}} \quad \text{s.t.} \quad \mathcal{L}_\ell \downarrow,\; \kappa_\ell \downarrow,\; \|\mathbf{v}_\ell^{(c)}\| \downarrow
}$$

As shown in the quantization analysis, the post-quantization trajectories across 9 culturally fine-tuned LLaMA variants reveal:

$$\mathcal{L}_\ell^{\text{pre}} \in [0.70, 0.90] \quad \Rightarrow \quad \mathcal{L}_\ell^{\text{quant}} \in [0.40, 0.60]$$

$$\kappa_\ell^{\text{pre}} \in [0.60, 0.85] \quad \Rightarrow \quad \kappa_\ell^{\text{quant}} \in [0.25, 0.50]$$

The smooth but rigid collapse of $$\mathcal{M}_{\text{steer}}$$ under quantization leads to impaired conceptual agility, weakened cultural calibration, and reduced robustness to fine-grained instructions.

**Pruning as Epistemic Degeneration.** Pruning removes connections or neurons {% cite han2015deep %} {% cite gale2019state %}--but in the nDNA perspective, it disrupts the *semantic fabric* of reasoning. Unlike quantization's global smoothness, pruning introduces localized instabilities:

- $$\mathcal{L}_\ell$$ contracts sharply and non-uniformly across depth, especially for high sparsity.
- $$\kappa_\ell$$ fragments into discontinuous profiles, reflecting epistemic ruptures.
- $$\mathbf{v}_\ell^{(c)}$$ fields lose directional coherence; divergence increases.

This process yields a **fractured epistemic manifold**, formally characterized as:

$$\mathcal{M}_{\text{pre}} \xrightarrow{\text{pruning}} \mathcal{M}_{\text{pruned}} \quad \text{s.t.} \quad 
\begin{cases}
    \Delta \mathcal{L}_\ell < 0, & \text{(loss of epistemic capacity)} \\
    \Delta \kappa_\ell = \kappa_\ell^{\text{post}} - \kappa_\ell^{\text{pre}} \notin \mathbb{C}^1, & \text{(non-smooth curvature transitions)} \\
    \mathrm{div}(\mathbf{v}_\ell^{(c)}) \gg 0, & \text{(loss of semantic steerability)}
\end{cases}$$

{% capture figure_caption %}
**Cultural nDNA Trajectories under 4-bit Quantization.** This figure illustrates the latent **nDNA trajectories** of LLaMA and its culturally fine-tuned variants in the space of *spectral curvature* ($$\kappa_\ell$$), *thermodynamic length* ($$\mathcal{L}_\ell$$), and *layer index* ($$\ell$$) after 4-bit quantization. The solid lines represent base trajectories (pre-quantization), while dashed lines show post-quantization paths. **Thermodynamic collapse** is evidenced by the compression of $$\mathcal{L}_\ell$$ values into a narrow band: 

$$\mathcal{L}_\ell^{\mathrm{pre}} \in [0.70, 0.90] \quad \Rightarrow \quad \mathcal{L}_\ell^{\mathrm{quant}} \in [0.40, 0.60]$$

reflecting a significant (30--45%) reduction in epistemic effort across layers 20--30. Similarly, $$\kappa_\ell$$ values flatten from 

$$\kappa_\ell^{\mathrm{pre}} \in [0.60, 0.85] \quad \Rightarrow \quad \kappa_\ell^{\mathrm{quant}} \in [0.25, 0.50]$$

indicating loss of latent manifold flexibility and adaptive curvature. This collapse implies that the compressed model's latent space becomes increasingly rigid, constraining its ability to encode nuanced conceptual or cultural alignments. The phenomenon quantifies why alignment robustness and reasoning depth often degrade under aggressive quantization--the model's internal steering manifold $$\mathcal{M}_{\mathrm{steer}}$$ contracts, limiting its capacity for directional epistemic adaptation.
{% endcapture %}

{% include visualization.liquid 
   image_path="quantization/quantization.png"
   caption=figure_caption
   alt_text="3D visualization showing nDNA trajectories before and after quantization across culturally fine-tuned LLaMA variants" %}

**Interpretation of Terms:**
- $$\mathcal{M}_{\text{pre}}$$ and $$\mathcal{M}_{\text{pruned}}$$ denote the latent semantic manifolds before and after pruning, respectively.
- $$\Delta \mathcal{L}_\ell = \mathcal{L}_\ell^{\text{post}} - \mathcal{L}_\ell^{\text{pre}}$$ captures the contraction in thermodynamic length, interpreted as a loss in epistemic effort or reasoning depth.
- $$\kappa_\ell^{\text{pre}}, \kappa_\ell^{\text{post}}$$ are the layerwise spectral curvature measures; pruning often results in $$\kappa_\ell$$ profiles that are no longer differentiable, violating $$\mathbb{C}^1$$ smoothness and fragmenting the latent topology.
- $$\mathrm{div}(\mathbf{v}_\ell^{(c)})$$ measures the divergence of belief steering fields for concept $$c$$ at layer $$\ell$$, where increased divergence implies misaligned, incoherent semantic trajectories.

Geometrically, pruning severs connections across the belief manifold $$\mathcal{M}_{\text{steer}}$$, introducing torsional discontinuities and belief field instability. The model's cognitive capacity no longer flows smoothly across depth, but instead leaks into disjoint epistemic basins. These discontinuities--akin to *semantic aneurysms*--render the model brittle to adversarial instructions and degrade its alignment consistency across culturally rich contexts.

**nDNA as a Cognitive Diagnostic.** Through this lens, compression is not just model shrinking--it is epistemic surgery. The nDNA framework exposes what is lost, not just functionally, but geometrically. Compression must therefore be calibrated not only by compute cost, but by the *epistemic price* paid in latent space distortions. Future work may define safe compression zones using $$\mathcal{L}_\ell$$ and $$\kappa_\ell$$ thresholds to preserve $$\mathcal{M}_{\text{steer}}$$ integrity.

## Pruning-Induced Epistemic Degeneration

**What is the latent cost of pruning on a model's cognitive flexibility?** While pruning is widely embraced for inference acceleration and deployment efficiency, we examine it through a new lens--how it reshapes the *semantic fabric* of large language models by altering their neural DNA (nDNA).

### Epistemic Degeneration

In the nDNA formalism, the **thermodynamic length** $$\mathcal{L}_\ell$$ measures the cumulative *epistemic effort* expended at layer $$\ell$$ to maintain alignment with conceptual priors, cultural tuning, and task objectives. Empirical trajectories show that pruning {% cite han2015deep %} causes:

This is reflected across the three nDNA axes:
- **Thermodynamic length** $$\mathcal{L}_\ell$$ undergoes non-uniform contraction, particularly in mid-to-late layers, suggesting selective loss of epistemic effort along deep conceptual hierarchies.
- **Spectral curvature** $$\kappa_\ell$$ often fragments across layers--rather than globally flattening, pruning introduces abrupt geometric discontinuities, implying latent manifold fragmentation.
- **Belief vector fields** $$\mathbf{v}_\ell^{(c)}$$ become less coherent--pruned models show diminished directional consistency, undermining the model's ability to track and sustain alignment forces.

### Formal Interpretation

Let $$\mathcal{M}_{\text{pre}}$$ denote the latent *epistemic manifold* of the LLM before pruning, equipped with:

- a local curvature field $$\kappa_\ell: \mathcal{M}_{\text{pre}} \to \mathbb{R}$$,
- a thermodynamic length profile $$\mathcal{L}_\ell$$ measuring epistemic work across layers,
- and a belief vector field $$\mathbf{v}_\ell^{(c)}: \mathcal{M}_{\text{pre}} \to T\mathcal{M}_{\text{pre}}$$ encoding conceptual steering dynamics.

Pruning can be modeled as a discontinuous operator:

$$\mathcal{P}_s: \mathcal{M}_{\text{pre}} \longrightarrow \mathcal{M}_{\text{pruned}}, \quad \text{parametrized by sparsity } s \in [0,1],$$

which modifies both the geometry and topology of $$\mathcal{M}_{\text{pre}}$$ by:

1. Removing functional nodes or edges from the activation graph, inducing geometric sparsity.
2. Severing smooth trajectories across the manifold, breaking $$\mathbb{C}^1$$ continuity in curvature.
3. Collapsing representational subspaces, reducing the dimension of concept-affine submanifolds.

This yields:

$$\boxed{
\mathcal{M}_{\text{pre}} \xrightarrow{\;\mathcal{P}_s\;} \mathcal{M}_{\text{pruned}} \quad \text{s.t.} \quad
\begin{aligned}
\Delta \mathcal{L}_\ell &= \mathcal{L}_\ell^{\text{post}} - \mathcal{L}_\ell^{\text{pre}} < 0 \quad &\text{(epistemic contraction)} \\
\Delta \kappa_\ell &= \kappa_\ell^{\text{post}} - \kappa_\ell^{\text{pre}} \notin \mathbb{C}^1 \quad &\text{(curvature discontinuities)} \\
\mathrm{div}(\mathbf{v}_\ell^{(c)}) &\gg 0 \quad &\text{(semantic incoherence)}
\end{aligned}
}$$

Here, the term $$\mathrm{div}(\mathbf{v}_\ell^{(c)})$$ measures the divergence of the belief field, computed as:

$$\mathrm{div}(\mathbf{v}_\ell^{(c)}) := \nabla \cdot \mathbf{v}_\ell^{(c)} = \sum_{i=1}^d \frac{\partial v_{\ell,i}^{(c)}}{\partial x_i}$$

where $$v_{\ell,i}^{(c)}$$ is the $$i^{\text{th}}$$ component of the belief vector in the embedding coordinate chart of layer $$\ell$$. An increase in divergence indicates **semantic dissipation**--the model's conceptual trajectories are no longer coherently directed, and belief propagation across layers becomes unstable or directionless.

### Topological Interpretation

Pruning induces a homotopy-breaking transformation:

$$\pi_1(\mathcal{M}_{\text{pre}}) \not\simeq \pi_1(\mathcal{M}_{\text{pruned}}),$$

suggesting that pruning may change the fundamental semantic structure of the model by disconnecting reasoning paths, effectively creating **epistemic holes** or **semantic aneurysms** in the manifold.

Thus, even moderate pruning may not merely reduce model size--it collapses and fragments the model's internal geometry of reasoning, damaging interpretive integrity in ways invisible to loss-based metrics.

## Experimental Setup

We analyze pruning through the nDNA lens by applying three canonical pruning strategies--each grounded in the literature--to LLaMA-3 (8B) across layers $$\ell \in [20,30]$$. The latent effects are evaluated using thermodynamic length $$\mathcal{L}_\ell$$, spectral curvature $$\kappa_\ell$$, and belief vector fields $$\mathbf{v}_\ell^{(c)}$$ derived from culturally-grounded prompts (CIVIC dataset).

- **(A) Attention Head Pruning:** Entire attention heads are pruned based on low importance scores computed via average gradient norms across tokens {% cite michel2019sixteen %} {% cite voita2019analyzing %}. Let $$A^{(i)}$$ denote the $$i$$-th head; we prune $$A^{(i)}$$ if $$\mathbb{E}_{x}[\|\nabla_{A^{(i)}} \mathcal{L}_{\text{CE}}(x)\|] < \delta$$.

- **(B) MLP Channel Pruning:** Intermediate MLP neurons are pruned using magnitude-based importance (i.e., $$\ell_1$$-norm of activation weight vectors) {% cite li2016pruning %} {% cite he2017channel %}. Let $$w^{(j)}$$ be the $$j$$-th neuron: prune if $$\|w^{(j)}\|_1 < \epsilon$$.

- **(C) Transformer Layer Pruning:** Full transformer blocks are dropped using Fisher-based importance scores {% cite theis2018faster %} {% cite ganesh2020compressing %}. A layer $$\mathcal{L}^{(\ell)}$$ is pruned if:

$$\mathcal{F}^{(\ell)} := \mathbb{E}_{x} \left[\left(\frac{\partial \mathcal{L}_{\text{CE}}(x)}{\partial \theta^{(\ell)}}\right)^2 \right] < \tau$$

where $$\theta^{(\ell)}$$ are the parameters of the $$\ell$$-th layer.

For each pruning regime, we observe:

- **(A) Attention Head Pruning:** $$\mathcal{L}_\ell$$ drops from 0.9 to 0.4; $$\kappa_\ell \leq 0.3$$ across mid-layers. Steering fields show directional divergence ($$\nabla \cdot \mathbf{v}_\ell^{(c)} > 0.15$$), suggesting disrupted cross-token alignment.

- **(B) MLP Channel Pruning:** Milder degradation: $$\mathcal{L}_\ell$$ compresses to 0.5–0.6; $$\kappa_\ell$$ stays between 0.4–0.5. Belief fields preserve local structure but lose global consistency.

- **(C) Transformer Layer Pruning:** $$\mathcal{L}_\ell \leq 0.3$$ and $$\kappa_\ell \leq 0.2$$, with severely fractured $$\mathcal{M}_{\text{pruned}}$$. The belief vector norm $$\|\mathbf{v}_\ell^{(c)}\|$$ drops by 60--80%, and divergence spikes. Steering collapses to noisy local attractors.

## nDNA Interpretation

Each pruning type induces a different class of thermodynamic and semantic collapse:

- **(A) Attention Head Pruning:** $$\Delta \mathcal{L}_\ell \sim -0.5$$, $$\mathrm{div}(\mathbf{v}_\ell^{(c)}) \uparrow$$ ⇒ directional misalignment
- **(B) MLP Channel Pruning:** $$\Delta \kappa_\ell \downarrow$$, $$\mathcal{L}_\ell$$ mildly compressed ⇒ semantic thinning  
- **(C) Layer Pruning:** $$\mathcal{L}_\ell \rightarrow 0.2$$, $$\kappa_\ell \rightarrow 0$$ ⇒ topological collapse

nDNA shows that pruning--though often seen as a resource optimization--acts as latent surgery. It compresses, flattens, and fragments the internal epistemic structure, impairing cognitive generalization and cultural adaptability.

## Cultural Sensitivity Analysis

The figures below demonstrate how different pruning strategies affect culturally fine-tuned models differently:

{% include visualization.liquid 
   image_path="quantization/llama.png"
   title="Pruning Effects on LLaMA"
   caption="**(A) Attention Head Pruning:** $$\mathcal{L}_\ell$$ reduced from $$0.9 \to 0.4$$, $$\kappa_\ell$$ flattened below $$0.3$$. Indicates severe loss of thermodynamic richness and latent flexibility. **(B) MLP Channel Pruning:** $$\mathcal{L}_\ell$$ compressed ($$0.9 \to 0.5$$), $$\kappa_\ell$$ stays near $$0.4-0.5$$. Manifold remains moderately curved but shortened, suggesting partial collapse. **(C) Transformer Layer Pruning:** $$\mathcal{L}_\ell$$ collapsed to $$\le 0.3$$, $$\kappa_\ell$$ highly flattened ($$\le 0.2$$). Reflects strongest thermodynamic collapse, latent path becomes minimal."
   alt_text="Three pruning strategy comparison plots for LLaMA model showing thermodynamic length and spectral curvature changes" %}

{% include visualization.liquid 
   image_path="quantization/africa.png"
   title="Pruning Effects on Africa"
   caption="**(A) Attention Head Pruning:** $$\mathcal{L}_\ell$$ drops to $$0.3$$–$$0.4$$, $$\kappa_\ell$$ $$\approx 0.3$$. Shows notable collapse but latent path retains mild curvature. **(B) MLP Channel Pruning:** $$\mathcal{L}_\ell$$ and $$\kappa_\ell$$ both collapse ($$\mathcal{L}_\ell \le 0.3$$, $$\kappa_\ell \le 0.3$$). Severe latent simplification. **(C) Transformer Layer Pruning:** Nearly flat manifold with $$\mathcal{L}_\ell \le 0.2$$, $$\kappa_\ell \le 0.2$$. Strongest collapse among pruning types for Africa."
   alt_text="Three pruning strategy comparison plots for Africa-tuned model showing cultural sensitivity to compression" %}

{% include visualization.liquid 
   image_path="quantization/asia.png"
   title="Quantization + Pruning Effects on Asia"
   caption="**(A) Attention Head Pruning:** $$\mathcal{L}_\ell$$ declines moderately to $$0.4$$, $$\kappa_\ell \approx 0.3$$. Indicates partial collapse. **(B) MLP Channel Pruning:** Strong collapse, $$\mathcal{L}_\ell$$ $$\le 0.3$$, $$\kappa_\ell$$ below $$0.3$$. Loss of internal diversity. **(C) Transformer Layer Pruning:** $$\mathcal{L}_\ell$$ $$\approx 0.2$$, $$\kappa_\ell$$ $$\le 0.2$$. Manifold becomes thermodynamically minimal."
   alt_text="Three pruning strategy comparison plots for Asia-tuned model showing combined quantization and pruning effects" %}

{% include visualization.liquid 
   image_path="quantization/australia.png"
   title="Quantization + Pruning Effects on Australia"
   caption="**(A) Attention Head Pruning:** $$\mathcal{L}_\ell$$ $$\approx 0.4$$, $$\kappa_\ell$$ $$\approx 0.3$$. Mild thermodynamic compression. **(B) MLP Channel Pruning:** $$\mathcal{L}_\ell$$ $$\le 0.3$$, $$\kappa_\ell$$ $$\le 0.3$$. Significant collapse. **(C) Transformer Layer Pruning:** Deep collapse, $$\mathcal{L}_\ell$$ $$\le 0.2$$, $$\kappa_\ell$$ $$\le 0.2$$."
   alt_text="Three pruning strategy comparison plots for Australia-tuned model" %}

{% include visualization.liquid 
   image_path="quantization/china.png"
   title="Quantization + Pruning Effects on China"
   caption="**(A) Attention Head Pruning:** $$\mathcal{L}_\ell$$ $$\approx 0.4$$, $$\kappa_\ell$$ $$\approx 0.3$$. Partial collapse. **(B) MLP Channel Pruning:** $$\mathcal{L}_\ell$$ below $$0.3$$, $$\kappa_\ell$$ near $$0.2$$. Strong simplification. **(C) Transformer Layer Pruning:** $$\mathcal{L}_\ell$$ $$\le 0.2$$, $$\kappa_\ell$$ $$\le 0.2$$. Strongest collapse."
   alt_text="Three pruning strategy comparison plots for China-tuned model" %}

{% include visualization.liquid 
   image_path="quantization/europe.png"
   title="Quantization + Pruning Effects on Europe"
   caption="**(A) Attention Head Pruning:** $$\mathcal{L}_\ell$$ $$\approx 0.4$$, $$\kappa_\ell$$ $$\approx 0.3$$. Mild collapse. **(B) MLP Channel Pruning:** $$\mathcal{L}_\ell$$ $$\le 0.3$$, $$\kappa_\ell$$ $$\le 0.3$$. Significant latent compression. **(C) Transformer Layer Pruning:** Severe collapse, $$\mathcal{L}_\ell$$ $$\le 0.2$$, $$\kappa_\ell$$ $$\le 0.2$$."
   alt_text="Three pruning strategy comparison plots for Europe-tuned model" %}

{% include visualization.liquid 
   image_path="quantization/latinamerica.png"
   title="Quantization + Pruning Effects on Latin America"
   caption="**(A) Attention Head Pruning:** $$\mathcal{L}_\ell$$ $$\approx 0.4$$, $$\kappa_\ell$$ $$\approx 0.3$$. Partial collapse. **(B) MLP Channel Pruning:** $$\mathcal{L}_\ell$$ $$\le 0.3$$, $$\kappa_\ell$$ $$\le 0.3$$. Manifold simplification. **(C) Transformer Layer Pruning:** $$\mathcal{L}_\ell$$ $$\le 0.2$$, $$\kappa_\ell$$ $$\le 0.2$$. Strong collapse."
   alt_text="Three pruning strategy comparison plots for Latin America-tuned model" %}

{% include visualization.liquid 
   image_path="quantization/middleeast.png"
   title="Quantization + Pruning Effects on Middle East"
   caption="**(A) Attention Head Pruning:** $$\mathcal{L}_\ell$$ $$\approx 0.4$$, $$\kappa_\ell$$ $$\approx 0.3$$. Partial loss. **(B) MLP Channel Pruning:** $$\mathcal{L}_\ell$$ $$\le 0.3$$, $$\kappa_\ell$$ $$\le 0.3$$. Stronger collapse. **(C) Transformer Layer Pruning:** Deep collapse, $$\mathcal{L}_\ell$$ $$\le 0.2$$, $$\kappa_\ell$$ $$\le 0.2$$."
   alt_text="Three pruning strategy comparison plots for Middle East-tuned model" %}

{% include visualization.liquid 
   image_path="quantization/northamerica.png"
   title="Quantization + Pruning Effects on North America"
   caption="**(A) Attention Head Pruning:** $$\mathcal{L}_\ell$$ $$\approx 0.4$$, $$\kappa_\ell$$ $$\approx 0.3$$. Mild collapse. **(B) MLP Channel Pruning:** $$\mathcal{L}_\ell$$ $$\le 0.3$$, $$\kappa_\ell$$ $$\le 0.3$$. Significant latent path reduction. **(C) Transformer Layer Pruning:** Severe collapse, $$\mathcal{L}_\ell$$ $$\le 0.2$$, $$\kappa_\ell$$ $$\le 0.2$$."
   alt_text="Three pruning strategy comparison plots for North America-tuned model" %}

## Key Findings

**Pruning-Induced Thermodynamic Collapse and Cultural Sensitivity.** Transformer layer pruning consistently produces the strongest thermodynamic collapse across cultures ($$\mathcal{L}_\ell \le 0.2$$, $$\kappa_\ell \le 0.2$$), with MLP channel pruning as the next most damaging. Attention head pruning causes mild to moderate collapse ($$\mathcal{L}_\ell \approx 0.4$$, $$\kappa_\ell \approx 0.3$$). 

Culturally, **Africa**, **Asia**, and **China** suffer the deepest collapses, while **Australia** and **North America** exhibit comparatively resilient latent structures.

## nDNA as a Diagnostic for Cognitive Loss

nDNA analysis thus provides a principled diagnostic for what is lost during pruning--not merely in accuracy, but in the geometry of thought. By examining the collapse and fragmentation of $$\mathcal{M}_{\text{steer}}$$, we gain visibility into how pruning impairs the model's cognitive anatomy. This perspective elevates pruning from an engineering trick to an epistemic surgery--with nontrivial consequences for trust, alignment, and reasoning.

---

{% auto_references %}
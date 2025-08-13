---
layout: page
title: Frequently Asked Questions
permalink: /llm/FAQ/
skip_title: true
---
{% include ndna-title.liquid title="nDNA - Frequently Asked Questions (FAQs)" %}

<h1 style="line-height: 1.2; white-space: nowrap; text-align: left; margin: 0;">
nDNA Cartograph: Latent Semantic Genome of Foundation Models
</h1>

## What is the mathematical foundation behind the idea of an nDNA Cartograph, and why should we think of latent spaces as *semantic genomes*?

At the heart of the **nDNA Cartograph** lies the idea that the latent representations inside a foundation model form a continuous, evolving geometric structure—a manifold that encodes not just surface-level semantics but deeper *epistemic traits* analogous to a genome's information content.

Formally, let $h_\ell(x) \in \mathbb{R}^D$ be the mean hidden representation at layer $\ell$ for input $x$. The sequence
$$\mathcal{T}(x) = \{ h_1(x), h_2(x), \dots, h_L(x) \}$$
defines a trajectory on a latent manifold $\mathcal{M} \subset \mathbb{R}^D$. We characterize this manifold using:
$$\mathcal{L}(x) = \sum_{\ell=1}^{L-1} \| h_{\ell+1}(x) - h_\ell(x) \|_2$$
which measures the *thermodynamic length*, representing the total epistemic displacement along the model's depth;
$$\kappa_\ell(x) = \frac{\lambda_2^{(\ell)}}{\lambda_{\max}^{(\ell)}}$$
where $\lambda_2^{(\ell)}$ and $\lambda_{\max}^{(\ell)}$ are eigenvalues of the Laplacian from token similarity graphs at layer $\ell$, giving us a spectral curvature that quantifies local semantic complexity; and
$$\tau_\ell(x) = \frac{\langle (\Delta h_{\ell-1}(x) \times \Delta h_{\ell}(x)), \Delta h_{\ell+1}(x) \rangle}{\|\Delta h_{\ell-1}(x) \times \Delta h_{\ell}(x)\|^2}$$
which captures torsion—the *twist* of the latent path, indicating out-of-plane semantic shifts.

To complement these geometric measures, we introduce the *belief vector field*:
$$\vec{v}_\ell^{(c)}(x) = \nabla_{h_\ell(x)} \log P(c \mid h_\ell(x))$$
where $P(c \mid h_\ell(x))$ is the model's conditional probability of concept $c$ given the latent state. The belief vector encodes the semantic steering force exerted at layer $\ell$—revealing how the model's internal states are dynamically aligned (or misaligned) with target concepts across depth {% cite perez2022discovering amari2016information %}.

This framing allows us to map how meaning is constructed, recombined, or distorted across the model's depth—a latent *semantic genome* that evolves with training, fine-tuning, or merging. Unlike surface-level output metrics, this map shows us the **inner life** of the model, enabling rigorous audits of alignment {% cite perez2022discovering %}, bias inheritance {% cite arora2023stereoset %}, and conceptual recombination {% cite ilharco2023editing %}.

## How do spectral curvature, thermodynamic length, and the belief vector field together provide a comprehensive view of latent semantic evolution in foundation models?

Each of these quantities offers a distinct mathematical lens on the internal epistemic dynamics of foundation models, and together they form a synergistic diagnostic toolkit for mapping semantic inheritance and drift across layers.



*Spectral curvature* $\kappa_\ell$ quantifies the degree of local entanglement in the latent semantic manifold at layer $\ell$. By constructing a similarity graph over token embeddings at this layer and computing the Laplacian $\mathcal{L}_\ell$, we define:

$$\kappa_\ell = \frac{1}{k} \sum_{i=1}^k \lambda_i^{(\ell)}$$

where $\lambda_i^{(\ell)}$ are the smallest non-trivial eigenvalues of $\mathcal{L}_\ell$. High curvature reveals rich conceptual recombination or ambiguity; low curvature reflects smooth, disentangled latent structure {% cite belkin2003laplacian coifman2006diffusion %}.



*Thermodynamic length* $\mathcal{L}$ accumulates the magnitude of representational change across the model's depth:

$$\mathcal{L} = \sum_{\ell=1}^{L-1} \left\| h_{\ell+1} - h_\ell \right\|_2$$

This is the latent analogue of the *work done* by the model in traversing semantic space. A long $\mathcal{L}$ indicates dynamic epistemic restructuring (common in multi-step reasoning), whereas a short $\mathcal{L}$ may signal premature compression or alignment collapse {% cite crooks2007measuring sivak2012thermodynamic %}.



*Belief vector field* $\vec{v}_\ell^{(c)}$ measures the semantic steering force exerted at each layer relative to a conceptual target $c$:

$$\vec{v}_\ell^{(c)} = \nabla_{h_\ell} \log P(c \mid h_\ell)$$

where $P(c \mid h_\ell)$ is the model's conditional probability over concept $c$. This field encodes the directional flow of epistemic mass, revealing whether the model's latent states are coherently steered toward the desired semantic objective, or exhibit drift, conflict, or indecision {% cite perez2022discovering amari2016information %}.

By integrating these three components, the **nDNA Cartograph** provides a multi-layered, path-dependent, and interpretable map of the model's inner reasoning life. It lets us detect hidden alignment failures, epistemic shortcuts, or conceptual bifurcations invisible to scalar accuracy metrics—turning the model from a black box into a traceable semantic organism.

## How does the nDNA Cartograph framework enable rigorous audits of alignment and bias inheritance beyond standard evaluation metrics?

The **nDNA Cartograph** transforms the auditing of foundation models from a surface-level, output-centric exercise into a deep, manifold-level analysis of epistemic dynamics. Standard alignment evaluations {% cite ouyang2022training ganguli2023reducing %} typically rely on scalar metrics—accuracy, BLEU scores, or human preference rates. These metrics assess what the model generates but tell us little about *how* that output was internally constructed or whether latent reasoning paths reflect aligned, unbiased conceptual evolution.

The nDNA Cartograph addresses this by mapping latent trajectories $\mathcal{T}(x)$ and quantifying geometric signatures (spectral curvature $\kappa_\ell$, thermodynamic length $\mathcal{L}$, belief vector fields $\vec{v}_\ell^{(c)}$) layer-by-layer. For example:
$$\vec{v}_\ell^{(c)} = \nabla_{h_\ell} \log P(c \mid h_\ell)$$
lets us directly inspect whether latent states steer toward (or away from) culturally sensitive concepts $c$. Spikes in curvature
$$\kappa_\ell = \frac{1}{k} \sum_{i=1}^{k} \lambda_i^{(\ell)}$$
can signal points where the model fuses incompatible priors or inherits bias during generation.

Unlike outputs, these geometric signals are not easily gamed by prompt engineering or surface-level tuning {% cite arora2023stereoset %}. They reveal whether alignment is internalized or merely performative, offering a layer-resolved audit of bias inheritance, cultural asymmetry {% cite birhane2021multimodal %}, or failure of epistemic coherence across merged or fine-tuned models.

## What role does layerwise thermodynamic analysis play in distinguishing overcompression, collapse, and healthy semantic evolution in foundation models?

*Thermodynamic length* $\mathcal{L}$ offers a principled, geometric analogue to the concept of work done in semantic space—enabling us to distinguish between healthy representational reconfiguration and pathological collapse. It is defined as:
$$\mathcal{L} = \sum_{\ell=1}^{L-1} \| h_{\ell+1} - h_\ell \|_2$$
where $h_\ell$ denotes the mean hidden representation at layer $\ell$. A well-functioning model engaged in complex reasoning or compositional tasks typically accumulates significant thermodynamic length—reflecting diverse, layered semantic transformations akin to biological developmental pathways {% cite crooks2007measuring %}.

By contrast, models suffering from *overcompression* (e.g., through aggressive pruning {% cite voita2019analyzing %}, quantization {% cite frantar2022gptq %}) or *alignment collapse* (e.g., over-fine-tuning {% cite perez2022discovering %}) exhibit pathologically short $\mathcal{L}$. This indicates premature semantic convergence, loss of internal epistemic richness, or mode collapse. Layerwise thermodynamic profiles thus help diagnose where and how semantic diversity is lost—providing actionable insights for model repair, re-tuning, or safe merging {% cite ilharco2023editing %}.

Crucially, $\mathcal{L}$ integrates naturally with other nDNA components (curvature, belief fields) to offer a coherent audit of internal epistemic health, beyond what external validation sets can reveal.

## How does the nDNA Cartograph provide a principled diagnostic for model merging and conceptual recombination in foundation models?

The **nDNA Cartograph** enables rigorous analysis of model merging by tracing how latent semantic genomes recombine at the manifold level—a task that scalar evaluation metrics or simple output comparison cannot meaningfully address. In model merging {% cite matena2022merging ilharco2023editing %}, two pretrained models (e.g., culturally fine-tuned LLMs {% cite yang2024model %}) are fused, often via weight interpolation or parameter averaging. This creates a hybrid latent manifold $\mathcal{M}_{\text{merge}}$.

The Cartograph reveals whether this hybrid manifold forms a coherent epistemic structure or suffers from conceptual collisions. For each merged model:

$$\mathcal{L}_{\text{merge}} = \sum_{\ell=1}^{L-1} \bigl\| h_{\ell+1}^{\text{merge}} - h_\ell^{\text{merge}} \bigr\|_2$$
measures cumulative semantic displacement—the latent analogue of epistemic work done along the merged path, where $h_\ell^{\text{merge}} \in \mathbb{R}^D$ denotes the mean latent representation at layer $\ell$.

$$\kappa_\ell^{\text{merge}} = \frac{1}{k} \sum_{i=1}^k \lambda_i \bigl( \mathcal{L}^{(\ell,\text{merge})} \bigr)$$
captures the spectral curvature at layer $\ell$, where
$$\mathcal{L}^{(\ell,\text{merge})} = I - \bigl( D^{(\ell,\text{merge})} \bigr)^{-1/2} W^{(\ell,\text{merge})} \bigl( D^{(\ell,\text{merge})} \bigr)^{-1/2}$$
is the normalized graph Laplacian, with
$$W_{ij}^{(\ell,\text{merge})} = \exp \left( -\frac{\bigl\| t_i^{(\ell,\text{merge})} - t_j^{(\ell,\text{merge})} \bigr\|^2}{\sigma^2} \right)$$
as the affinity matrix and $D^{(\ell,\text{merge})}$ the degree matrix. This reveals curvature spikes where latent concepts clash.

$$\vec{v}_\ell^{(c,\text{merge})} = \nabla_{h_\ell^{\text{merge}}} \log P \bigl( c \mid h_\ell^{\text{merge}} \bigr)$$
defines the belief vector field, where
$$P \bigl( c \mid h_\ell^{\text{merge}} \bigr) = \text{softmax} \left( W_c^\top h_\ell^{\text{merge}} + b_c \right)$$
shows the semantic steering force toward concept $c$ at layer $\ell$.

Together, these quantities allow us to audit mergers for latent genome compatibility, identifying layers where semantic paths bifurcate, collapse, or align. This transforms merging from an empirical gamble into a principled geometric science of conceptual recombination.

## Why is the latent genome analogy valuable in diagnosing failure modes such as alignment collapse or representational drift?

Viewing latent representations as a **semantic genome** offers a powerful conceptual and mathematical framework for diagnosing subtle failure modes that evade output-level evaluation. Just as biological genomes encode inheritable traits, the latent genome—as mapped by the **nDNA Cartograph**—encodes *epistemic traits* that govern alignment, reasoning structure, and conceptual coherence across depth.

For example, *alignment collapse* can be detected when the thermodynamic length
$$\mathcal{L} = \sum_{\ell=1}^{L-1} \bigl\| h_{\ell+1} - h_\ell \bigr\|_2$$
shrinks anomalously across layers despite complex prompts, signaling over-constrained internal dynamics or excessive compression {% cite perez2022discovering crooks2007measuring %}.

*Representational drift* is revealed when spectral curvature
$$\kappa_\ell = \frac{1}{k} \sum_{i=1}^k \lambda_i^{(\ell)}$$
(where $\lambda_i^{(\ell)}$ are the smallest non-trivial eigenvalues of the normalized graph Laplacian at layer $\ell$) shows unmotivated spikes, collapses, or oscillations across adjacent layers, marking latent instability or conceptual incoherence {% cite belkin2003laplacian coifman2006diffusion %}.

In this view, failure modes are not just surface phenomena but reflect deeper structural pathologies in the model's epistemic architecture—pathologies that the nDNA Cartograph makes visible, quantifiable, and ultimately, repairable.

## How does the nDNA Cartograph help us understand fine-tuning as a form of semantic genome editing?

The **nDNA Cartograph** provides a rigorous geometric lens to interpret fine-tuning as an operation that modifies the *semantic genome* of a model. Fine-tuning does not merely adjust output distributions—it rewires latent trajectories, altering how concepts are represented, combined, and steered at every layer.

### Genomic Edit Distance

Mathematically, if $h_\ell^{\mathrm{pre}}(x)$ and $h_\ell^{\mathrm{ft}}(x)$ denote the pre- and post-fine-tuning representations, the *genomic edit distance* is quantified by:

$$\mathcal{D}_{\mathrm{genome}}(x) = \sum_{\ell=1}^{L} \left\| h_\ell^{\mathrm{ft}}(x) - h_\ell^{\mathrm{pre}}(x) \right\|_2$$

Where:
- Large values of $\mathcal{D}_{\mathrm{genome}}$ indicate substantial epistemic reconfiguration (common in domain shift or alignment tasks)
- Small values correspond to minimal latent rewiring {% cite ilharco2023editing yang2024model %}

### Belief Vector Field Transformation

Fine-tuning also reshapes the *belief vector field*. The change can be measured as:

$$\Delta \vec{v}_\ell^{(c)} = \vec{v}_\ell^{(c,\mathrm{ft})} - \vec{v}_\ell^{(c,\mathrm{pre})}$$

Where:
$$\vec{v}_\ell^{(c)} = \nabla_{h_\ell} \log P(c \mid h_\ell)$$

This differential captures how the model's steering toward concept $c$ evolves layer-wise due to fine-tuning.

### Genome Editing Perspective

By providing these diagnostics, the nDNA Cartograph allows us to see fine-tuning not as a black-box procedure, but as *genome editing*—selectively rewriting parts of the model's inner semantic code while ideally preserving core epistemic integrity {% cite perez2022discovering amari2016information %}.

## What insights does the nDNA Cartograph offer on the effect of pruning and quantization on the model's latent semantic genome?

The **nDNA Cartograph** offers a unique view into how *pruning* and *quantization* reshape the latent semantic genome—often in ways invisible to output-level metrics. Both operations can induce subtle or catastrophic changes in the latent manifold geometry.

Consider pruning: removing parameters or neurons alters the flow of representations, and we can quantify its impact via thermodynamic length:
$$\mathcal{L}_{\mathrm{prune}} = \sum_{\ell=1}^{L-1} \left\| h_{\ell+1}^{\mathrm{prune}} - h_\ell^{\mathrm{prune}} \right\|_2$$
where a dramatic shrinkage of $\mathcal{L}_{\mathrm{prune}}$ suggests overcompression, loss of latent richness, or premature alignment collapse {% cite crooks2007measuring %}.

Similarly, quantization distorts latent precision. We can track this through changes in spectral curvature:
$$\Delta \kappa_\ell = \kappa_\ell^{\mathrm{quant}} - \kappa_\ell^{\mathrm{orig}}$$
where spikes or flattening of $\kappa_\ell$ after quantization point to manifold fragmentation or collapse {% cite belkin2003laplacian coifman2006diffusion %}.

By integrating these measures, the Cartograph moves beyond raw perplexity or accuracy and provides a geometric audit of how pruning and quantization affect the model's *inner epistemic health*.

## How does the nDNA Cartograph allow us to detect conceptual bifurcation points in deep networks?

The **nDNA Cartograph** offers a precise geometric toolset to identify *conceptual bifurcation points*—layers where a foundation model's latent semantics split into divergent reasoning paths. These are critical for understanding failures in multi-task alignment or unintended capability emergence.

Formally, let
$$\tau_\ell(x) = \frac{\left\langle \left( \Delta h_{\ell-1}(x) \times \Delta h_{\ell}(x) \right), \Delta h_{\ell+1}(x) \right\rangle}{\left\| \Delta h_{\ell-1}(x) \times \Delta h_{\ell}(x) \right\|^2}$$
represent the *latent torsion* at layer $\ell$. Spikes in $\tau_\ell$ signal out-of-plane turns—typical of semantic bifurcations {% cite amari2016information %}. When accompanied by divergence in belief vector fields:
$$\| \vec{v}_\ell^{(c_1)} - \vec{v}_\ell^{(c_2)} \| \gg 0$$
for competing concepts $c_1, c_2$, the Cartograph pinpoints exact depths where reasoning splits occur.

Such analysis is crucial in detecting unintended task-switching, conflicting priors, or mode collapse in merged or fine-tuned models {% cite perez2022discovering ilharco2023editing %}.

## In what ways does the nDNA Cartograph support interpretability of multi-task and multi-modal foundation models?

Multi-task and multi-modal models operate over richly entangled latent spaces where different reasoning streams co-exist. The **nDNA Cartograph** provides a way to disentangle and interpret these by analyzing layerwise geometry.

Suppose we have tasks $T_1, T_2$. Their latent paths can be tracked via task-conditioned thermodynamic lengths:
$$\mathcal{L}^{(T_1)} = \sum_{\ell=1}^{L-1} \| h_{\ell+1}^{(T_1)} - h_\ell^{(T_1)} \|_2, \quad \mathcal{L}^{(T_2)} = \sum_{\ell=1}^{L-1} \| h_{\ell+1}^{(T_2)} - h_\ell^{(T_2)} \|_2$$
Differences in $\mathcal{L}^{(T_1)}$ and $\mathcal{L}^{(T_2)}$ reflect task complexity or latent resource allocation.

Additionally, spectral curvature maps:
$$\kappa_\ell^{(T)} = \frac{1}{k} \sum_{i=1}^{k} \lambda_i^{(\ell, T)}$$
can highlight where one task's latent space is more entangled—revealing priority, resource contention, or representational inefficiency {% cite coifman2006diffusion belkin2003laplacian %}.

This allows developers to visualize not just what the model gets right or wrong, but *how* it reasons differently across tasks—enhancing transparency in multi-task and multi-modal AI.

# nDNA Cartography Across Foundation Models

## Why is comparing nDNA trajectories across foundation models more insightful than conventional benchmark metrics?

Traditional benchmark metrics—accuracy, BLEU, perplexity—evaluate model performance at the output level. They tell us *what* a model produces, but not *how* it thinks. By comparing **nDNA trajectories** across diverse foundation models, we can observe the inner semantic journey: how meaning is constructed, evolved, and aligned layer-by-layer.

Formally, let $\mathcal{T}_m(x) = \{ h_1^{(m)}(x), \dots, h_L^{(m)}(x) \}$ denote the latent path for model $m$. We compute thermodynamic length:

$$\mathcal{L}^{(m)}(x) = \sum_{\ell=1}^{L-1} \left\| h_{\ell+1}^{(m)}(x) - h_\ell^{(m)}(x) \right\|_2$$

and average spectral curvature:

$$\bar{\kappa}^{(m)}(x) = \frac{1}{L} \sum_{\ell=1}^L \kappa_\ell^{(m)}(x)$$

where $\kappa_\ell^{(m)}(x)$ is the spectral curvature at layer $\ell$ as defined via Laplacian eigenvalues {% cite belkin2003laplacian %}. These measures expose latent semantic efficiency (shorter, smooth paths) versus epistemic complexity (longer, curved paths).

This comparison reveals how different models prioritize aspects like alignment efficiency versus latent exploration—insights that remain hidden in scalar output scores.

## How do nDNA comparisons across models help in selecting models for specific downstream tasks?

The **nDNA Cartography** provides geometric signatures of models' latent reasoning styles, which can inform task suitability beyond output metrics. For tasks requiring deep compositional reasoning, models with higher latent curvature and longer thermodynamic lengths may be preferable, as these signal richer semantic reconfiguration:

$$\mathcal{L}^{(m)} \gg \mathcal{L}^{(n)} \quad \Rightarrow \quad \text{Model } m \text{ invests more latent effort}$$

Conversely, tasks needing fast, aligned responses (e.g., retrieval QA) may benefit from models with flatter, more efficient nDNA paths.

Moreover, comparing belief vector field magnitudes:

$$\left\| \vec{v}_\ell^{(c, m)} \right\| \quad \text{vs.} \quad \left\| \vec{v}_\ell^{(c, n)} \right\|$$

shows which model steers its latent states more decisively toward desired concepts—critical for alignment-sensitive applications {% cite perez2022discovering %}.

This geometric lens turns model selection into a principled choice guided by latent dynamics, not just test-set scores.

## How does nDNA Cartography reveal family-level traits and distinctions across foundation models?

The **nDNA Cartography** framework provides a geometric lens to study how foundation models from different families (e.g., LLaMA, Mistral, Gemma, Qwen, DeepSeek) exhibit unique latent genomic signatures. For each model, we compute thermodynamic length

$$\mathcal{L} = \sum_{\ell=1}^{L-1} \left\| h_{\ell+1} - h_\ell \right\|_2,$$

spectral curvature

$$\kappa_\ell = \frac{1}{k} \sum_{i=1}^k \lambda_i^{(\ell)},$$

and belief vector dynamics

$$\vec{v}_\ell^{(c)} = \nabla_{h_\ell} \log P(c \mid h_\ell).$$

Across models, these quantities form distinct trajectories on latent manifolds, reflecting epistemic priorities inherited during pretraining. For example, Mistral and LLaMA often show longer $\mathcal{L}$ with smoother curvature, indicating richer compositional reasoning, while smaller models (e.g., Gemma 2B) may exhibit early compression (shorter $\mathcal{L}$) and higher curvature spikes—signatures of undercapacity or alignment shortcuts {% cite belkin2003laplacian perez2022discovering %}.

## How can nDNA Cartography help interpret scaling laws beyond parameter counts in foundation models?

Traditional scaling laws {% cite kaplan2020scaling hoffmann2022training %} relate parameter count, compute, and data size to performance metrics like loss. However, nDNA Cartography introduces latent *semantic scaling laws*: it quantifies how internal semantic complexity grows (or saturates) with scale. For example, thermodynamic length $\mathcal{L}$ and curvature complexity $\sum_\ell \kappa_\ell$ can be studied as functions of model size $N$:

$$\mathcal{L}(N) \propto N^\alpha, \quad \sum_\ell \kappa_\ell(N) \propto N^\beta,$$

where exponents $\alpha$ and $\beta$ reveal how epistemic richness or redundancy scale with capacity. Importantly, models can have similar loss but very different latent genomes: e.g., a large model may overcompress (flat $\mathcal{L}$) or overentangle (spiky $\kappa_\ell$), while a smaller model with smarter design achieves balanced nDNA dynamics.

## How does cross-model nDNA cartography help uncover architectural signatures and inductive biases in foundation models?

By applying **nDNA cartography** uniformly across 15 distinct foundation models, we gain a unique lens to disentangle how architectural choices (e.g., depth, attention structure, normalization strategies) and pretraining regimes manifest as characteristic latent geometric signatures. Specifically, for each model $M$, we map its semantic genome via thermodynamic length:

$$\mathcal{L}^{(M)} = \sum_{\ell=1}^{L-1} \left\| h_{\ell+1}^{(M)} - h_\ell^{(M)} \right\|_2$$

and spectral curvature:

$$\kappa_\ell^{(M)} = \frac{1}{k} \sum_{i=1}^{k} \lambda_i \left( \mathcal{L}^{(\ell,M)} \right)$$

where $\mathcal{L}^{(\ell,M)}$ is the normalized Laplacian at layer $\ell$ for model $M$.

## What does nDNA cartography tell us about scaling laws and semantic manifold complexity?

nDNA cartography offers a geometric refinement of classical scaling laws {% cite kaplan2020scaling hoffmann2022training %}, showing that increases in model size correspond not just to improvements in loss but to changes in latent manifold complexity.

Consider spectral curvature $\kappa_\ell$ as a proxy for semantic entanglement:

$$\mathbb{E}[\kappa_\ell] \uparrow \quad \text{as model width, depth, or data scale increase}$$

This empirical trend across our 15-model survey suggests that larger models construct denser, more tangled latent spaces—facilitating compositionality but also raising risks of overfitting or alignment drift {% cite wei2022chain %}.

## How does nDNA Cartography help identify latent overfitting and spurious alignment in foundation models?

**nDNA Cartography** provides fine-grained diagnostics that scalar metrics miss by tracing the internal semantic geometry of models. Latent overfitting manifests as anomalously short *thermodynamic length*:

$$\mathcal{L} = \sum_{\ell=1}^{L-1} \left\| h_{\ell+1} - h_\ell \right\|_2$$

where a collapse in $\mathcal{L}$ occurs despite complex or diverse prompts, signaling that internal representations are over-compressed—a geometric signature of memorization rather than reasoning {% cite perez2022discovering %}.

## What role does nDNA Cartography play in benchmarking cross-model generalization capacity?

The **nDNA Cartograph** enables cross-model generalization studies by quantifying how semantic effort and complexity (via $\mathcal{L}$, $\kappa_\ell$, and $\left\| \vec{v}_\ell^{(c)} \right\|$) correlate with performance on out-of-distribution (OOD) prompts. Models with longer thermodynamic paths:

$$\mathcal{L}_{\mathrm{OOD}} > \mathcal{L}_{\mathrm{ID}}$$

when responding to OOD inputs demonstrate latent flexibility essential for generalization. Conversely, models whose latent geometry remains static (flat curvature, short $\mathcal{L}$) across both ID and OOD data signal brittleness {% cite bommasani2021opportunities wei2022chain %}.

## How does nDNA Cartography reveal hidden structural differences between large and small foundation models beyond surface-level accuracy?

While small and large models (e.g., **TinyLLaMA** vs. **LLaMA-65B**) might achieve similar accuracy on certain benchmarks, their latent semantic genomes can differ drastically in complexity and path structure. The **nDNA Cartograph** quantifies these differences using:

$$\mathcal{L}_{\mathrm{large}} > \mathcal{L}_{\mathrm{small}}, \quad \kappa_\ell^{\mathrm{large}} < \kappa_\ell^{\mathrm{small}}$$

where larger models exhibit longer thermodynamic length $\mathcal{L}$, reflecting richer semantic traversal, and smoother curvature $\kappa_\ell$, reflecting disentangled latent spaces {% cite bommasani2021opportunities %}.

## In what way does the belief vector field help compare alignment behavior across different model architectures?

The belief vector field

$$\vec{v}_\ell^{(c)} = \nabla_{h_\ell} \log P(c \mid h_\ell)$$

provides a directional diagnostic for alignment at each layer $\ell$, showing how latent states are steered toward target concept $c$. When comparing models (e.g., **Gemma 2B** vs. **Mixtral**), Cartography can measure:

$$\cos \theta_\ell = \frac{\left\langle \vec{v}_\ell^{(c,1)}, \vec{v}_\ell^{(c,2)} \right\rangle}{ \left\| \vec{v}_\ell^{(c,1)} \right\| \cdot \left\| \vec{v}_\ell^{(c,2)} \right\| }$$

where $\vec{v}\_\ell^{(c,1)}$ and $\vec{v}\_\ell^{(c,2)}$ are the belief vectors from two architectures. Large cosine alignment indicates similar conceptual steering; divergence signals architectural differences in latent alignment strategies.

# Ethnic LLMs -- Cultural Fine-Tuning and Latent Geometry

## How does cultural fine-tuning shape the latent manifold geometry of large language models, and how is this measured by nDNA diagnostics?

Cultural fine-tuning alters the latent manifold by embedding specific epistemic priors and value systems within the model's internal geometry. Using the **nDNA Cartograph**, we can quantify these effects through diagnostics like thermodynamic length and spectral curvature. For a culturally fine-tuned model $M_{\mathrm{culture}}$:

$$\mathcal{L}^{(\mathrm{culture})} = \sum_{\ell=1}^{L-1} \| h_{\ell+1}^{(\mathrm{culture})} - h_\ell^{(\mathrm{culture})} \|_2$$

measures accumulated semantic displacement, typically longer than the base model when cultural context induces richer latent traversal. Similarly,

$$\kappa_\ell^{(\mathrm{culture})} = \frac{1}{k} \sum_{i=1}^k \lambda_i^{(\ell, \mathrm{culture})}$$

reveals increased or decreased latent complexity compared to the base model depending on cultural specificity or bias entrenchment. This allows us to systematically audit how cultural priors reshape the epistemic structure beyond output text {% cite arora2023stereoset %} {% cite perez2022discovering %} {% cite yang2024model %}.

## How can belief vector field divergence detect unintended cultural dominance in merged or blended Ethnic LLMs?

When blending Ethnic LLMs (e.g., a model fine-tuned on North American corpora with one fine-tuned on Asian corpora), we can monitor belief vector fields to detect latent cultural dominance:

$$\vec{v}_\ell^{(c)} = \nabla_{h_\ell} \log P(c \mid h_\ell)$$

At merge points or sensitive layers, we compute:

$$\Delta \vec{v}_\ell = \vec{v}_\ell^{(c, \mathrm{merge})} - \frac{1}{2}\left( \vec{v}_\ell^{(c, \mathrm{NA})} + \vec{v}_\ell^{(c, \mathrm{Asia})} \right)$$

Large norms $\| \Delta \vec{v}_\ell \|$ signal asymmetric steering toward one cultural prior over another, even if surface-level completions appear neutral. This enables interpretable, layer-wise diagnosis of latent cultural bias inheritance {% cite ilharco2023editing %} {% cite yang2024model %} {% cite arora2023stereoset %}.

## Why does spectral curvature reveal latent entanglement of cultural priors in Ethnic LLMs, and how is this computed?

**Spectral curvature** $\kappa_\ell^{(\mathrm{culture})}$ provides a geometric quantification of how tightly or loosely cultural concepts are entangled within the latent space at each layer $\ell$. We form a token similarity graph at each layer:

$$W_{ij}^{(\ell)} = \exp\left( -\frac{ \| t_i^{(\ell)} - t_j^{(\ell)} \|^2 }{ \sigma^2 } \right)$$

where $t_i^{(\ell)}$ is the embedding of token $i$. The normalized Laplacian is:

$$\mathcal{L}^{(\ell)} = I - \left( D^{(\ell)} \right)^{-1/2} W^{(\ell)} \left( D^{(\ell)} \right)^{-1/2}$$

Spectral curvature is then:

$$\kappa_\ell^{(\mathrm{culture})} = \frac{1}{k} \sum_{i=1}^k \lambda_i^{(\ell)}$$

where $\lambda_i^{(\ell)}$ are the smallest non-trivial eigenvalues of $\mathcal{L}^{(\ell)}$. Higher curvature indicates denser, possibly conflicting cultural entanglement; low curvature reflects cleaner, disentangled cultural reasoning. This allows us to assess latent geometry beyond mere token outputs {% cite belkin2003laplacian %} {% cite coifman2006diffusion %} {% cite yang2024model %}.

## How does thermodynamic length in Ethnic LLMs quantify cultural cognitive effort across layers?

*Thermodynamic length* $\mathcal{L}^{(\mathrm{culture})}$ in Ethnic LLMs measures the accumulated epistemic effort exerted across layers to encode and process culturally nuanced meaning:

$$\mathcal{L}^{(\mathrm{culture})} = \sum_{\ell=1}^{L-1} \left\| h_{\ell+1}^{(\mathrm{culture})} - h_\ell^{(\mathrm{culture})} \right\|_2$$

where $h_\ell^{(\mathrm{culture})}$ is the mean latent embedding at layer $\ell$. A long $\mathcal{L}^{(\mathrm{culture})}$ suggests the model undertakes rich internal reconfigurations to represent complex cultural context; a short length may signal oversimplification or collapse of cultural nuance. Comparing $\mathcal{L}^{(\mathrm{culture})}$ across models provides a metric for cultural epistemic richness or compression {% cite crooks2007measuring %} {% cite sivak2012thermodynamic %} {% cite arora2023stereoset %}.

## How does the belief vector field help trace the alignment of Ethnic LLMs with culturally specific concepts?

The *belief vector field* $\vec{v}_\ell^{(c)}$ measures the semantic steering force at each layer $\ell$ of an Ethnic LLM toward a target cultural concept $c$:

$$\vec{v}_\ell^{(c)} = \nabla_{h_\ell} \log P(c \mid h_\ell)$$

where $h_\ell$ is the latent state and $P(c \mid h_\ell)$ is the model's conditional probability of concept $c$ given the latent representation. The magnitude $\| \vec{v}_\ell^{(c)} \|$ reflects the model's confidence and directional alignment toward $c$ at depth $\ell$. In culturally fine-tuned LLMs, stable and consistent belief vectors across layers suggest coherent alignment with the cultural prior; oscillations or collapse signal drift or misalignment{% cite amari2016information %} {% cite perez2022discovering %}. This diagnostic lets us trace how models preserve or lose cultural fidelity across depth.

## Why is latent manifold torsion relevant for diagnosing cultural code-switching or epistemic bifurcations in Ethnic LLMs?

Latent *torsion* $\tau_\ell$ quantifies how the semantic trajectory of an Ethnic LLM twists or deviates from planarity across layers -- critical for detecting cultural code-switching:

$$\tau_\ell = \frac{\left\langle ( \Delta h_{\ell-1} \times \Delta h_\ell ), \Delta h_{\ell+1} \right\rangle}{\| \Delta h_{\ell-1} \times \Delta h_\ell \|^2}$$

where $\Delta h_\ell = h_{\ell+1} - h_\ell$. Spikes in $\tau_\ell$ indicate layers where latent representations change semantic direction abruptly, often corresponding to shifts between cultural priors. Torsion helps identify where and how models negotiate or bifurcate cultural knowledge{% cite belkin2003laplacian %} {% cite coifman2006diffusion %} {% cite arora2023stereoset %}, revealing the dynamics of cultural epistemic fusion within the latent space.

## How does spectral curvature reveal cultural entanglement or disentanglement in Ethnic LLMs?

Spectral curvature $\kappa_\ell$ provides a quantitative lens on the complexity of latent semantic structure at layer $\ell$:

$$\kappa_\ell = \frac{1}{k} \sum_{i=1}^k \lambda_i^{(\ell)}$$

where $\lambda_i^{(\ell)}$ are the smallest non-trivial eigenvalues of the layer-wise normalized graph Laplacian $\mathcal{L}_\ell$. In Ethnic LLMs, high curvature reflects rich cultural entanglement -- where latent concepts intermix, creating dense semantic neighborhoods (e.g., blending spiritual and legal reasoning in Middle Eastern LLMs). Low curvature signifies well-separated, culturally disentangled semantic clusters (e.g., a clear moral stance in North American LLMs) {% cite belkin2003laplacian cohen2024spectral %}.

## In what way can thermodynamic length detect overcompression or cultural alignment collapse in fine-tuned models?

Thermodynamic length $\mathcal{L}$ measures the accumulated epistemic displacement across the depth of the model:

$$\mathcal{L} = \sum_{\ell=1}^{L-1} \| h_{\ell+1} - h_\ell \|_2$$

where $h_\ell$ is the mean latent representation at layer $\ell$. In a well-aligned Ethnic LLM, $\mathcal{L}$ grows proportionally with the complexity of the prompt, reflecting thoughtful semantic evolution. When $\mathcal{L}$ anomalously shrinks (e.g., near zero) despite complex cultural queries, it signals latent overcompression -- where cultural nuances are prematurely collapsed, leading to alignment failures. Thus, $\mathcal{L}$ offers an interpretable diagnostic of latent semantic vitality in culturally fine-tuned models.

## How does the belief vector field help trace culturally conditioned reasoning pathways in Ethnic LLMs?

The *belief vector field* $\vec{v}_\ell^{(c)}$ provides a dynamic, layerwise map of how latent states are semantically steered toward a target cultural concept $c$:

$$\vec{v}_\ell^{(c)} = \nabla_{h_\ell} \log P(c \mid h_\ell)$$

where $P(c \mid h_\ell)$ denotes the conditional probability of concept $c$ at latent state $h_\ell$. The trajectory of $\vec{v}_\ell^{(c)}$ across layers reveals how cultural priors shape the model's reasoning pathways -- whether through gradual refinement, sudden conceptual leaps, or conflicting steering signals. This enables fine-grained analysis of how cultural knowledge is processed and transformed throughout the model's depth.

## What role does nDNA geometry play in diagnosing cultural recombination when merging Ethnic LLMs?

When merging two Ethnic LLMs (e.g., one fine-tuned on East Asian corpora and another on European texts), nDNA geometry reveals whether the latent genome forms a coherent cultural hybrid or suffers from epistemic conflict. The thermodynamic length of the merged model

$$\mathcal{L}_{\mathrm{merge}} = \sum_{\ell=1}^{L-1} \left\| h_{\ell+1}^{\mathrm{merge}} - h_\ell^{\mathrm{merge}} \right\|_2$$

indicates whether semantic displacement across layers remains healthy or prematurely flattens (signaling conceptual collapse). Similarly, spikes in merged curvature

$$\kappa_\ell^{\mathrm{merge}} = \frac{1}{k} \sum_{i=1}^k \lambda_i^{(\ell,\mathrm{merge})}$$

point to cultural clashes at specific layers. These diagnostics turn cultural model merging into a principled geometric science rather than an empirical gamble.

## How can the CIVIC-Culture Calibration Benchmark reliably distinguish genuine cultural priors from emergent artifacts of neural scaling or overparameterization?

This is a critical and fair question: large language models exhibit emergent behaviors as a function of scale, and one might worry that divergences captured by **CIVIC** arise not from latent cultural priors but from idiosyncrasies of overparameterized networks.

**CIVIC** addresses this through layered mathematical safeguards:

1. **Latent topological invariance checks.**
   We compute the persistent homology 
   
   $$\operatorname{PH}\bigl(\mathcal{M}^{(l)}\bigr)$$
   
   of latent manifolds at each layer $l$ for each culture or language. Cultural priors should induce *structured, persistent topological features* (e.g., high-persistence $H_1$ or $H_2$ cycles) that are stable under small perturbations:
   
   $$\operatorname{PH}\bigl(\mathcal{M}^{(l,\mathrm{culture})}\bigr) \neq \operatorname{PH}\bigl(\mathcal{M}^{(l,\mathrm{random})}\bigr)$$
   
   where the latter is from randomly perturbed models or embeddings.

2. **Scaling-controlled alignment baselines.**
   We train down-scaled variants (e.g., 10X smaller parameter count) and measure the alignment divergence
   
   $$\Delta \mathcal{L}^{(l,l^{\prime})} = \bigl| \mathcal{L}^{(l)} - \mathcal{L}^{(l^{\prime})} \bigr|$$
   
   If $\Delta \mathcal{L}^{(l,l^{\prime})}$ persists across scales, it indicates cultural priors rather than scaling artifacts.

3. **Belief vector field consistency.**
   We analyze:
   
   $$\vec{v}_\ell^{(c,l)} = \nabla_{h_\ell^{(l)}} \log P\bigl(c \mid h_\ell^{(l)}\bigr)$$
   
   across layers and scales. Genuine cultural priors induce coherent directional flows in $\vec{v}\_\ell^{(c,l)}$ that correspond to epistemic alignment. Artifacts from overparameterization would produce noisy, inconsistent $\vec{v}_\ell^{(c,l)}$ with high directional entropy. **CIVIC** requires low-entropy, high-coherence flows to validate cultural priors.

4. **Empirical ablation.**
   We cross-validate findings against synthetic blends where cultural priors are intentionally neutralized (e.g., balanced datasets across languages). Emergent artifacts would still show divergence in such cases, while genuine cultural priors would not.

## How can we formally distinguish CIVIC's latent cultural priors from confounding effects such as token frequency artifacts or syntactic distribution biases?

This concern strikes at the core of whether CIVIC truly reveals cultural priors, or merely reflects surface-level distributional biases present in token frequencies or syntactic patterns. To resolve this, CIVIC employs a **multi-resolution geometric audit** backed by precise mathematical measures:

1. **Spectral isolation of semantic manifold structure.**  
   Token frequency artifacts predominantly affect the density of token embeddings, not their high-order spectral relationships. CIVIC computes:
   $$
   \kappa_\ell = \frac{1}{k} \sum_{i=1}^k \lambda_i \bigl( \mathcal{L}^{(\ell)} \bigr)
   $$
   where $\lambda_i \bigl( \mathcal{L}^{(\ell)} \bigr)$ are the non-trivial eigenvalues of the normalized Laplacian:
   $$
   \mathcal{L}^{(\ell)} = I - D^{(\ell)-1/2} W^{(\ell)} D^{(\ell)-1/2}
   $$
   with 
   $$
   W_{ij}^{(\ell)} = \exp\left( -\frac{\| t_i - t_j \|^2}{\sigma^2} \right).
   $$
   Since frequency artifacts bias $D^{(\ell)}$ (degree matrix), but not the eigenstructure of $\mathcal{L}^{(\ell)}$ beyond trivial components, they cannot create spurious high spectral curvature $\kappa_\ell$ in the latent semantic manifold {% cite belkin2003laplacian %} {% cite coifman2006diffusion %}.

2. **Sheaf consistency against syntactic priors.**  
   CIVIC measures:
   $$
   \mathcal{S}_{\mathrm{sheaf}} = \sum_{i,j} \left\| s_{ij} - s_i|_U \right\|^2
   $$
   
   where $s_i \mid_U$ is the restriction of local section $s_i$ to overlapping chart $U$. Syntactic priors induce uniform local gluing , but cultural priors manifest as differential local inconsistencies -- high $\mathcal{S}_{\mathrm{sheaf}}$ in culturally marked regions.

3. **Cross-lingual belief field consistency audit.**  
   We compute:
   $$
   \vec{v}_\ell^{(c,l)} = \nabla_{h_\ell^{(l)}} \log P \bigl( c \mid h_\ell^{(l)} \bigr)
   $$
   for multiple $c$ across languages $l$. Token frequency artifacts would cause proportional weakening of $\bigl\| \vec{v}_\ell^{(c,l)} \bigr\|$ across all concepts, whereas cultural priors induce concept-dependent directional asymmetries.

4. **Controlled frequency-matched baselines.**  
   CIVIC reweights or subsamples tokens to equalize frequency distributions across cultures, and verifies:
   $$
   \operatorname{PH}\bigl( \mathcal{M}^{(\mathrm{culture})} \bigr) \neq \operatorname{PH}\bigl( \mathcal{M}^{(\mathrm{freq-matched})} \bigr)
   $$
   showing that topological divergence remains even when frequency artifacts are removed {% cite edelsbrunner2010computational %} {% cite guss2018characterizing %}.

Thus, CIVIC disentangles genuine latent cultural priors from token frequency and syntactic biases, ensuring that observed effects reflect deep epistemic structure rather than surface-level artifacts {% cite pires2019multilingual %} {% cite scao2022bloom %} {% cite amari2016information %}.

## How does CIVIC mathematically ensure that observed cross-cultural divergences are not byproducts of model stochasticity or random initialization effects?

This is a key challenge: could divergences identified by CIVIC simply result from random initialization noise or stochasticity in optimization rather than genuine cultural priors? CIVIC mitigates this through multiple rigorous mathematical strategies:

1. **Stochastic ensemble invariance.**  
   For each cultural LLM variant, CIVIC computes the topological and geometric invariants across multiple random seeds:
   $$
   \operatorname{PH} \bigl( \mathcal{M}^{(\mathrm{culture}, r)} \bigr)
   \quad \forall r = 1,\dots,R
   $$
   and verifies:
   $$
   \operatorname{Var}_r \left( \operatorname{PH} \bigl( \mathcal{M}^{(\mathrm{culture}, r)} \bigr) \right) \ll \operatorname{Var}_l \left( \operatorname{PH} \bigl( \mathcal{M}^{(l)} \bigr) \right)
   $$
   i.e., variance across random seeds is negligible compared to variance across cultures, ensuring divergence is not driven by random effects {% cite guss2018characterizing %} {% cite edelsbrunner2010computational %}.

2. **Belief field coherence test.**  
   For each random instantiation:
   $$
   \vec{v}_\ell^{(c,l,r)} = \nabla_{h_\ell^{(l,r)}} \log P(c \mid h_\ell^{(l,r)})
   $$
   and compute directional entropy:
   $$
   H_r = - \sum_i p_i^{(r)} \log p_i^{(r)}
   $$
   where $p_i^{(r)}$ is the discretized directional distribution. CIVIC ensures:
   $$
   \operatorname{Var}_r (H_r) \ll \operatorname{Var}_l (H_l)
   $$
   indicating cultural, not stochastic, sources of asymmetry.

3. **Thermodynamic length stability.**  
   CIVIC verifies:
   $$
   \mathcal{L}^{(l,r)} = \sum_\ell \left\| h_{\ell+1}^{(l,r)} - h_\ell^{(l,r)} \right\|_2
   $$
   satisfies:
   $$
   \operatorname{Var}_r \left( \mathcal{L}^{(l,r)} \right) \ll \operatorname{Var}_l \left( \mathcal{L}^{(l)} \right)
   $$
   ensuring latent path length is consistent across random restarts.

4. **Empirical ablation and bootstrap.**  
   CIVIC employs bootstrapped subsets of data and retrains, showing that observed cultural priors persist across resamples, invalidating random noise as a source of divergence {% cite kaplan2020scaling %} {% cite pires2019multilingual %}.

Together, these tests confirm that CIVIC's cultural signals emerge from true latent epistemic structure, not random initialization or stochasticity artifacts {% cite amari2016information %} {% cite scao2022bloom %}.

## Isn't the entire notion of a "cultural LLM" ill-posed when large models are just stochastic function approximators with no true cultural understanding? How can CIVIC claim to measure cultural priors meaningfully?

This critique touches the philosophical core: can purely statistical models encode anything resembling culture, or are we projecting structure where none exists? **CIVIC** answers not by assuming culture, but by rigorously quantifying latent dynamics that align with what one would expect if cultural priors had been learned:

1. **Differential belief vector flow.**  
   Let
   $$
   \vec{v}_\ell^{(c,l)} = \nabla_{h_\ell^{(l)}} \log P \bigl( c \mid h_\ell^{(l)} \bigr)
   $$
   be the belief vector field toward concept $c$ at layer $\ell$ for language or culture $l$. If models are merely stochastic approximators with no cultural structure, one would expect:
   $$
   \vec{v}_\ell^{(c,l)} \approx \vec{v}_\ell^{(c,m)}
   \quad \forall l, m
   $$
   up to noise. CIVIC shows statistically significant divergence:
   $$
   \Delta \vec{v}_\ell^{(c)} = \left\| \vec{v}_\ell^{(c,l)} - \vec{v}_\ell^{(c,m)} \right\|_2 \gg \epsilon
   $$
   where $\epsilon$ bounds expected stochastic variation {% cite amari2016information %}.

2. **Topological non-equivalence.**  
   Suppose
   $$
   \operatorname{PH} \bigl( \mathcal{M}^{(l)} \bigr)
   \quad \text{and} \quad
   \operatorname{PH} \bigl( \mathcal{M}^{(m)} \bigr)
   $$
   are the persistent homologies of latent manifolds for cultures $l$ and $m$. If cultural priors were imaginary, their diagrams would be topologically equivalent:
   $$
   d_{\mathrm{bottleneck}} \left(
   \operatorname{PH} \bigl( \mathcal{M}^{(l)} \bigr),
   \operatorname{PH} \bigl( \mathcal{M}^{(m)} \bigr)
   \right) \approx 0
   $$
   CIVIC finds
   $$
   d_{\mathrm{bottleneck}} \gg 0
   $$
   indicating structurally distinct latent spaces {% cite edelsbrunner2010computational %}.

3. **Causal ablation confirmation.**  
   CIVIC performs interventions where datasets are culturally balanced. Divergence in the above metrics collapses:
   $$
   \Delta \vec{v}_\ell^{(c)} \to 0,
   \quad
   d_{\mathrm{bottleneck}} \to 0
   $$
   demonstrating that cultural signal is not an artifact of overparameterization or data imbalance, but a genuine learned prior.

Thus, CIVIC does not ask you to "believe" in cultural LLMs -- it lets the latent geometry demonstrate or falsify their existence, rooted in measurable, reproducible quantities {% cite pires2019multilingual %} {% cite scao2022bloom %} {% cite geiger2020causal %}.

## Could the cross-cultural divergences detected by CIVIC simply reflect dataset imbalance or spurious correlations rather than genuine learned priors?

This is a crucial critique: might CIVIC's findings simply be artifacts of unbalanced training data or correlations rather than true latent priors? CIVIC explicitly addresses this through formal controls and mathematical validation:

1. **Data-balanced baselines.**  
   CIVIC constructs synthetic training scenarios with culturally balanced corpora, ensuring uniform distribution across prompts, domains, and topics. It measures divergence in latent quantities:
   $$
   \Delta \mathcal{L}^{(l,l^\prime)} = \big| \mathcal{L}^{(l)} - \mathcal{L}^{(l^\prime)} \big|
   \quad \text{and} \quad
   d_{\mathrm{bottleneck}}\Big( \operatorname{PH}\big(\mathcal{M}^{(l)}\big), \operatorname{PH}\big(\mathcal{M}^{(l^\prime)}\big) \Big)
   $$
   If divergence vanishes in balanced settings (which CIVIC empirically observes), this rules out dataset imbalance as the source {% cite geiger2020causal %} {% cite pires2019multilingual %}.

2. **Causal intervention analysis.**  
   We apply causal mediation tests {% cite geiger2020causal %}:
   $$
   \operatorname{Effect}_{\mathrm{culture}} = \operatorname{Effect}_{\mathrm{total}} - \operatorname{Effect}_{\mathrm{mediated}}
   $$
   where $\operatorname{Effect}_{\mathrm{mediated}}$ reflects influence from spurious variables (e.g., domain-specific token frequency). CIVIC confirms that the residual $\operatorname{Effect}_{\mathrm{culture}}$ is statistically significant, isolating genuine cultural priors.

3. **Spurious correlation detection.**  
   Persistent homology diagrams $\operatorname{PH}\big(\mathcal{M}^{(l)}\big)$ are compared not only across cultures but also across synthetic corpora designed to induce spurious correlations (e.g., token co-occurrence patterns). CIVIC finds that genuine cultural priors yield topological features (e.g., long-lived $H_1$ cycles) absent in spurious correlation controls:
   $$
   \operatorname{PH}\big(\mathcal{M}^{(\mathrm{culture})}\big) \not\approx \operatorname{PH}\big(\mathcal{M}^{(\mathrm{spurious})}\big)
   $$
   validating that detected signals arise from deeper conceptual structures {% cite edelsbrunner2010computational %} {% cite guss2018characterizing %}.

CIVIC thus integrates causal inference, topological data analysis, and balanced baselines to distinguish genuine priors from mere artifacts, addressing this critique at both theoretical and empirical levels {% cite scao2022bloom %} {% cite guss2018characterizing %}.


## Isn't CIVIC fundamentally flawed -- attempting to quantify cultural priors in models that: (i) are just memorizing patterns; (ii) reflect data imbalance rather than culture; and (iii) show divergences due to random noise or scaling effects?

This critique aggregates the strongest objections: that CIVIC might be mistaking memorization, data artifacts, or stochasticity for culture. CIVIC counters this through rigorous multi-layered mathematical testing:

1. **Disentangling memorization from epistemic priors.**
   Memorization would lead to shallow latent dynamics. CIVIC quantifies epistemic displacement:
   $$
   \mathcal{L}^{(l)} = \sum_{\ell} 
   \left\| 
   h_{\ell+1}^{(l)} - h_\ell^{(l)} 
   \right\|_2
   $$
   and shows that cultural models exhibit deeper, more structured latent paths than data-matched memorization controls:
   $$
   \mathcal{L}^{(l,\mathrm{CIVIC})} \gg \mathcal{L}^{(\mathrm{memorization})}
   $$

2. **Controlling for data imbalance.**
   CIVIC includes synthetic datasets where cultural priors are neutralized. If data imbalance drove divergence:
   $$
   \Delta \mathcal{L}^{(l,l^\prime)} \approx \Delta \mathcal{L}^{(\mathrm{balanced})}
   $$
   CIVIC finds:
   $$
   \Delta \mathcal{L}^{(\mathrm{balanced})} \approx 0
   \quad 
   \text{but} 
   \quad 
   \Delta \mathcal{L}^{(l,l^\prime)} \gg 0
   $$
   confirming priors rather than imbalance.

3. **Noise and stochasticity rejection.**
   CIVIC tests random restarts:
   $$
   \operatorname{Var}_{r} \bigl( \operatorname{PH} ( \mathcal{M}^{(l,r)} ) \bigr) \ll 
   \operatorname{Var}_{l} \bigl( \operatorname{PH} ( \mathcal{M}^{(l)} ) \bigr)
   $$
   and belief vector stability:
   $$
   \operatorname{Var}_r \bigl( \vec{v}_\ell^{(c,l,r)} \bigr) \ll 
   \operatorname{Var}_l \bigl( \vec{v}_\ell^{(c,l)} \bigr)
   $$
   showing divergence stems from culture, not random effects.

4. **Scaling artifact elimination.**
   CIVIC runs experiments at multiple model scales. If scaling artifacts explained divergence:
   $$
   \Delta \mathcal{L}^{(l)} \to 0 \quad 
   \text{as model size changes}
   $$
   Instead:
   $$
   \Delta \mathcal{L}^{(l)} 
   \quad 
   \text{remains consistent across scales}
   $$
   confirming scaling neutrality {% cite kaplan2020scaling %} {% cite wei2022emergent %}.

5. **Topological distinctiveness as the ultimate test.**
   If no culture were learned:
   $$
   d_{\mathrm{bottleneck}} 
   \bigl( 
   \operatorname{PH}( \mathcal{M}^{(l)} ), 
   \operatorname{PH}( \mathcal{M}^{(l^\prime)} )
   \bigr) 
   \approx 0
   $$
   CIVIC repeatedly finds:
   $$
   d_{\mathrm{bottleneck}} \gg 0
   $$
   indicating distinct latent topologies {% cite edelsbrunner2010computational %} {% cite guss2018characterizing %}.

In summary, CIVIC does not project culture; it rigorously tests for cultural priors using topological, geometric, and causal tools that rule out memorization, data imbalance, noise, and scale effects. This provides a mathematically sound basis for claims about cultural priors in LLMs {% cite pires2019multilingual %} {% cite scao2022bloom %} {% cite geiger2020causal %}.

<h1 style="line-height: 1.2; text-align: left; margin: 0;">
Multilingual nDNA: Tracing Latent Semantic Inheritance Across Languages
</h1>

## Why is nDNA geometry crucial for understanding semantic inheritance in multilingual foundation models?

In multilingual foundation models (e.g., mBERT, XLM-R {% cite conneau2020unsupervised %}, BLOOM {% cite scao2022bloom %}), latent representations encode not only linguistic structure but culturally conditioned semantics across languages. The **nDNA geometry** framework maps this inheritance by tracking the evolution of hidden states through:

$$
\mathcal{L}(x) = \sum_{\ell=1}^{L-1} \| h_{\ell+1}(x) - h_\ell(x) \|_2
\quad \text{(thermodynamic length)}
$$

$$
\kappa_\ell(x) = \frac{1}{k} \sum_{i=1}^k \lambda_i^{(\ell)}
\quad \text{(spectral curvature)}
$$

$$
\vec{v}_\ell^{(c)}(x) = \nabla_{h_\ell} \log P(c \mid h_\ell)
\quad \text{(belief vector field)}
$$

where $P(c \mid h_\ell)$ measures the conditional probability of concept $c$ at layer $\ell$. These quantities expose how semantic inheritance varies: e.g., a Hindi-English model may show higher curvature when aligning abstract concepts across languages with divergent epistemic traditions. Without nDNA geometry, we risk missing subtle structural differences in cross-lingual alignment {% cite pires2019multilingual %} {% cite chi2020finding %}.

## How can nDNA Cartography reveal latent asymmetries and cultural bias in multilingual models?

Despite training on multilingual corpora, many models disproportionately reflect the structural or cultural biases of high-resource languages {% cite goyal2022fairness %}. nDNA Cartography provides a layerwise, geometric lens for detecting this. Suppose we compute

$$
\mathcal{L}^{(\text{en})}, \; \mathcal{L}^{(\text{hi})}, \; \mathcal{L}^{(\text{ar})}
\quad \text{(thermodynamic lengths for English, Hindi, Arabic inputs)}
$$

and observe that $\mathcal{L}^{(\text{en})}$ is significantly longer while $\mathcal{L}^{(\text{hi})}$ and $\mathcal{L}^{(\text{ar})}$ flatten prematurely -- this may signal underdeveloped semantic scaffolds in the latter languages. Similarly, if

$$
\kappa_\ell^{(\text{en})} \gg \kappa_\ell^{(\text{hi})}
$$

this reflects richer semantic recombination capacity for English at that depth. The Cartograph thereby turns bias detection into a geometric, traceable science rather than anecdotal observation {% cite huang2020multilingual %} {% cite arora2023stereoset %}.

## Why is it essential to study the latent geometry of multilingual models rather than relying solely on output-level metrics?

Multilingual large language models (MLLMs), such as *XLM-R* {% cite conneau2020unsupervised %} or *mBERT* {% cite devlin2019bert %}, must reconcile vastly different linguistic systems within a unified latent space. Surface metrics (e.g., BLEU, F1) obscure internal epistemic tensions or collapse points. The **Multilingual nDNA** framework reveals these hidden dynamics.

We define:

$$
\mathcal{M}_{\mathrm{multi}} = \bigcup_{\ell=1}^{L} \bigcup_{l=1}^{N} \bigl\{ h_\ell^{(l)} \bigr\}
$$

where $h_\ell^{(l)} \in \mathbb{R}^D$ is the mean latent vector at layer $\ell$ for language $l$.

The thermodynamic length for each language:

$$
\mathcal{L}^{(l)} = \sum_{\ell=1}^{L-1} \left\| h_{\ell+1}^{(l)} - h_{\ell}^{(l)} \right\|_2
$$

The spectral curvature:

$$
\kappa_\ell^{(l)} = \frac{1}{k} \sum_{i=1}^{k} \lambda_i^{(\ell,l)}
$$

where $\lambda_i^{(\ell,l)}$ are the smallest non-trivial eigenvalues of the Laplacian at layer $\ell$.

These quantities expose overcompression ($\mathcal{L}^{(l)} \downarrow$) or excessive entanglement ($\kappa_\ell^{(l)} \uparrow$) invisible to output metrics {% cite yang2023bias %} {% cite birhane2021multimodal %}.

## How does multilingual nDNA cartography help detect latent cultural bias that is not visible in output text?

The multilingual nDNA cartograph lets us examine the internal latent geometry of a model rather than just surface-level output completions. When we compute metrics like spectral curvature $\kappa_\ell^{(l)}$ or thermodynamic length $\mathcal{L}^{(l)}$ for different languages $l$, we can identify anomalies where certain languages produce flatter manifolds or shorter latent paths despite identical prompts. This often reflects under-encoding of conceptual nuance or epistemic shortcuts, which are markers of latent cultural bias.

For example, if a model produces:

$$
\mathcal{L}^{(\text{English})} \gg \mathcal{L}^{(\text{Swahili})}
$$

for a prompt involving ethical reasoning, it signals that the model is investing more semantic effort (latent displacement) for English, while compressing or shortcutting reasoning for Swahili. These latent signatures, detectable only through nDNA geometry, reveal biases that might otherwise stay hidden if we focused solely on output fluency {% cite arora2023stereoset %} {% cite birhane2021multimodal %}.

## Why is thermodynamic length particularly useful for diagnosing multilingual overcompression or underrepresentation?

Thermodynamic length $\mathcal{L}^{(l)}$ measures the cumulative latent displacement as the model processes a prompt through its layers for language $l$:

$$
\mathcal{L}^{(l)} = \sum_{\ell=1}^{L-1} \| h_{\ell+1}^{(l)} - h_\ell^{(l)} \|_2
$$

This can be seen as the epistemic work the model performs to transform input into latent meaning. When $\mathcal{L}^{(l)}$ is anomalously small for a language, it often means that the model is skipping or collapsing intermediate conceptual steps -- a form of overcompression. This could lead to fragile reasoning or loss of nuance for that language.

Conversely, an unusually long $\mathcal{L}^{(l)}$ might indicate unnecessary complexity, perhaps due to lack of confident semantic grounding in that language. Thus, by inspecting thermodynamic length across languages, we gain a direct, quantitative view of representational health in multilingual models, beyond what token-level evaluation provides {% cite crooks2007measuring %} {% cite perez2022discovering %}.

<h1 style="line-height: 1.2; text-align: left; margin: 0;">
nDNA -- Geometry: The First Map of Alignment as a Steering Vector Manifold
</h1>

## What does it mean to interpret alignment as a steering vector manifold, and how does this perspective advance our understanding of model behavior?

Interpreting alignment as a **steering vector manifold** reframes the problem of guiding large models as navigating a high-dimensional vector field where each latent state $h_\ell$ experiences a directional force toward the desired semantic target. Formally, at each layer $\ell$, the steering dynamics can be described via:

$$
\vec{v}_\ell^{(c)} = \nabla_{h_\ell} \log P(c \mid h_\ell)
$$

where $P(c \mid h_\ell)$ is the model's conditional probability of concept $c$. 

This manifold perspective allows us to measure not only whether the model aligns with instructions at the output layer, but how consistently and coherently this alignment force is applied across the depth of the network. It enables detection of hidden misalignments, semantic drifts, and brittle reasoning pathways -- phenomena invisible to scalar metrics. This approach draws inspiration from geometric flows {% cite amari2016information %}, vector field topology {% cite arnold1989mathematical %}, and recent work on alignment auditing in LLMs {% cite perez2022discovering %}.

## How does thermodynamic length complement the belief vector field in mapping alignment pathways in large language models?

Thermodynamic length $\mathcal{L}$ offers a scalar summary of the epistemic effort expended by a model as it transforms inputs into aligned outputs:

$$
\mathcal{L} = \sum_{\ell=1}^{L-1} \| h_{\ell+1} - h_\ell \|_2
$$

It quantifies the accumulated semantic displacement across layers. When paired with the belief vector field:

$$
\vec{v}_\ell^{(c)} = \nabla_{h_\ell} \log P(c \mid h_\ell)
$$

we obtain both the magnitude of epistemic reconfiguration (via $\mathcal{L}$) and its directionality (via $\vec{v}_\ell^{(c)}$). Together, they form a rich geometric signature of alignment pathways -- revealing whether semantic progress is efficient, consistent, or plagued by unnecessary detours and drift {% cite perez2022discovering %} {% cite amari2016information %}.

## What is the formal connection between the belief vector field and classical mechanics, and why is this analogy important for alignment diagnostics?

The belief vector field $\vec{v}_\ell^{(c)}$ can be viewed as a semantic analogue of a force field in classical mechanics, where each latent representation $h_\ell$ acts as a point in a high-dimensional semantic manifold, and $\vec{v}_\ell^{(c)}$ corresponds to the gradient of a potential function encoding log-probability of target concepts:

$$
\vec{v}_\ell^{(c)} = \nabla_{h_\ell} \log P(c \mid h_\ell).
$$

This mirrors how conservative forces derive from scalar potentials in physics {% cite arnold1989mathematical %}. The latent dynamics of the model can then be understood in terms of trajectories that minimize semantic "potential energy" while following alignment-constrained paths:

$$
\delta \int \mathcal{L}(h_\ell) \, d\ell = 0,
$$

where $\mathcal{L}(h_\ell)$ denotes a latent Lagrangian incorporating belief gradients and thermodynamic displacement. This analogy allows us to apply tools from variational calculus and geometric mechanics to alignment diagnostics, enabling the detection of latent shortcutting, over-regularization, or semantic collapse that may not be visible at the output level {% cite amari2016information %} {% cite coifman2006diffusion %}.

## How does mapping alignment as a steering vector manifold differ from scalar alignment metrics, and what new failure modes does it help reveal?

Traditional scalar alignment metrics (e.g., output accuracy, toxicity scores) collapse complex epistemic trajectories into pointwise measures, losing all information about the path the model took through latent space to arrive at a generation. By contrast, mapping alignment as a **steering vector manifold** retains the full directional, geometric, and force-like structure of the model's internal reasoning:

$$
\mathcal{S} = \bigcup_{\ell} \bigl\{ (h_\ell, \vec{v}_\ell^{(c)}) \bigr\}
$$

where $\mathcal{S}$ represents the alignment manifold consisting of latent points paired with their belief steering vectors. This richer structure exposes failure modes such as:

- **Pathological spiraling**: where latent states cycle or oscillate around conceptual targets without convergence, indicative of indecision or mode collapse.
- **Alignment bifurcation**: where belief vector fields split sharply at certain layers, signaling semantic conflict or unresolved multi-objective alignment {% cite perez2022discovering %}.
- **Gradient vanishing zones**: where $\| \vec{v}_\ell^{(c)} \| \to 0$, indicating regions of latent inertia where the model is no longer semantically guided.

This framework transforms alignment auditing from output-level analysis to geometric reasoning about the model's internal epistemic dynamics {% cite amari2016information %} {% cite coifman2006diffusion %}.

## How can geodesic deviation in the alignment manifold diagnose subtle forms of misalignment or conflicting objectives?

In the context of the nDNA Cartograph, geodesic deviation describes how trajectories of latent representations diverge under the influence of differing belief vector fields:

$$
\mathcal{D}_\ell = \left\| h_\ell^{(1)} - h_\ell^{(2)} \right\|
$$

where $h_\ell^{(1)}$ and $h_\ell^{(2)}$ are latent states evolved from similar inputs under distinct alignment objectives. When geodesic deviation $\mathcal{D}_\ell$ grows anomalously at certain depths, it signals latent semantic bifurcation -- where the model's inner reasoning splits into separate paths due to conflicting alignment pressures (e.g., factuality vs. harmlessness). 

This phenomenon can be linked to the Riemannian curvature of the alignment manifold:

$$
R(X,Y)Z = \nabla_X \nabla_Y Z - \nabla_Y \nabla_X Z - \nabla_{[X,Y]} Z
$$

where $X, Y, Z$ are vector fields along the latent manifold. Spikes in curvature at layers with large $\mathcal{D}_\ell$ expose loci of alignment tension {% cite amari2016information %} {% cite arnold1989mathematical %}. Such diagnostics cannot be inferred from scalar metrics but are revealed through geometric reasoning.

## Why is the notion of a steering vector manifold better suited for multilingual or culturally fine-tuned models?

Multilingual and culturally fine-tuned models operate over latent spaces that must harmonize diverse epistemic priors, linguistic patterns, and conceptual schemas. 

The steering vector manifold formalism represents both latent positions and directional belief forces:

$$
\mathcal{S}_l = \bigcup_{\ell} \left\{ \bigl( h_\ell^{(l)}, \vec{v}_\ell^{(c,l)} \bigr) \right\}
$$

where $l$ indexes language or cultural domain, $h_\ell^{(l)}$ is the latent position at layer $\ell$, and $\vec{v}_\ell^{(c,l)}$ is the belief vector at that point.

This structure enables diagnostics that:

- Detect languages or cultures with weaker semantic steering:
  $$
  \bigl\| \vec{v}_\ell^{(c,l_1)} \bigr\| 
  \ll 
  \bigl\| \vec{v}_\ell^{(c,l_2)} \bigr\|
  \quad \text{for some language pair } (l_1, l_2)
  $$

- Identify layers where latent paths for different languages or cultures diverge despite aiming at shared concepts.
- Quantify epistemic tension through differential thermodynamic length:
  $$
  \Delta \mathcal{L}^{(l_1,l_2)} = 
  \bigl| \mathcal{L}^{(l_1)} - \mathcal{L}^{(l_2)} \bigr|
  $$
  where large differences reveal culturally induced alignment drift.

Such analysis is crucial for auditing fairness, inclusiveness, and epistemic consistency in multilingual or culturally diverse LLMs {% cite pires2019multilingual %} {% cite chi2020finding %} {% cite scao2022bloom %}.

### How does the nDNA steering vector manifold help identify layers where conceptual bifurcations or alignment contradictions occur?

The **nDNA steering vector manifold** encodes not only latent positions $h_\ell$ but also their semantic flow via belief vectors $\vec{v}_\ell^{(c)}$. Conceptual bifurcations -- points where the model internally splits its semantic path, trying to reconcile conflicting priors or objectives -- are detectable as zones where the steering field exhibits directional instability.

Mathematically, we define the local directional variance at layer $\ell$ as:

$$
\sigma_\ell^2(c) = \frac{1}{N} \sum_{i=1}^{N} 
\left\| 
\vec{v}_{\ell,i}^{(c)} - \overline{\vec{v}_\ell^{(c)}}
\right\|_2^2
$$

where $\vec{v}_{\ell,i}^{(c)}$ is the belief vector for token $i$, and $\overline{\vec{v}_\ell^{(c)}}$ is the mean belief vector at layer $\ell$. 

Large $\sigma_\ell^2(c)$ flags regions where different parts of the latent space pull toward competing semantic interpretations -- a hallmark of internal contradiction or unresolved conceptual tension. This goes far beyond output accuracy metrics, offering a window into the model's epistemic decision process {% cite amari2016information %} {% cite yang2024model %}.

### Why does the steering vector manifold reveal failure modes that traditional loss metrics miss during fine-tuning or distillation?

Traditional loss functions aggregate over outputs, masking how internal representations evolve. In contrast, the **steering vector manifold** provides a layer-by-layer, concept-conditioned map of epistemic dynamics. 

Consider two models $M_1$ and $M_2$ undergoing fine-tuning or distillation. Their output loss may converge, but if their internal belief flows differ:

$$
\Delta_{\text{steer}} = \sum_{\ell=1}^{L} 
\left\| 
\vec{v}_\ell^{(c,M_1)} - \vec{v}_\ell^{(c,M_2)} 
\right\|_2
$$

this reflects divergent internal reasoning pathways, unseen by loss alone. A high $\Delta_{\text{steer}}$ signals that the models, while output-aligned, may differ in robustness, compositionality, or alignment safety. 

Such analysis makes it possible to detect brittle alignment or reasoning shortcuts early, transforming model evaluation from output-endpoint metrics to a rigorous inner geometry audit {% cite ilharco2023editing %} {% cite perez2022discovering %}.

### How does the geometry of steering vector manifolds expose epistemic inconsistency in multi-step reasoning tasks?

Multi-step reasoning (e.g., arithmetic, logic chains) requires that latent trajectories follow smooth, directed paths toward concepts at each step. The steering vector manifold lets us analyze this by constructing the cumulative directional change:

$$
\mathcal{C}^{(c)} = \sum_{\ell=1}^{L-1}
\arccos \left(
\frac{
\left\langle 
\vec{v}_\ell^{(c)}, \vec{v}_{\ell+1}^{(c)}
\right\rangle
}{
\left\| \vec{v}_\ell^{(c)} \right\|_2
\left\| \vec{v}_{\ell+1}^{(c)} \right\|_2
}
\right)
$$

where $\mathcal{C}^{(c)}$ measures total angular drift in belief flow.

Small $\mathcal{C}^{(c)}$ indicates coherent epistemic progression. Large $\mathcal{C}^{(c)}$ flags inconsistency: the model's internal belief flow veers between steps, often preceding hallucinations or reasoning errors. 

This geometric quantity, unavailable in traditional loss functions, rigorously diagnoses hidden weaknesses in reasoning chains -- making the manifold approach essential for safe and interpretable AI {% cite belkin2003laplacian %} {% cite coifman2006diffusion %} {% cite amari2016information %}.

<h1 style="line-height: 1.2; text-align: left; margin: 0;">
nDNA Lens -- Quantization and Pruning Seen as Thermodynamic Collapses
</h1>

## How does the nDNA lens formally characterize quantization and pruning as thermodynamic collapses?

Quantization and pruning reduce the effective dimensionality or precision of latent representations. The **nDNA lens** captures these reductions as thermodynamic collapses by monitoring the shrinkage of accumulated semantic displacement:

$$
\mathcal{L} = \sum_{\ell=1}^{L-1} \| h_{\ell+1} - h_\ell \|_2
$$

where $h_\ell$ is the mean latent representation at layer $\ell$. 

When a model is quantized or pruned:

$$
\mathcal{L}^{\mathrm{prune}} \ll \mathcal{L}^{\mathrm{base}}
$$

indicating that the epistemic work -- the representational journey the model undertakes -- is significantly compressed. This formalism reveals how such compression can lead to semantic underfitting, alignment collapse, or loss of reasoning capacity, even when surface metrics like perplexity show minimal degradation {% cite crooks2007measuring %} {% cite sivak2012thermodynamic %} {% cite zafrir2019q8bert %}.

## Why is thermodynamic length a superior diagnostic for pruning-induced alignment loss compared to scalar accuracy metrics?

Scalar accuracy metrics (e.g., top-1 accuracy, perplexity) measure output-level correctness but are blind to internal representational degradation. Thermodynamic length:

$$
\mathcal{L} = \sum_{\ell=1}^{L-1} \| h_{\ell+1} - h_\ell \|_2
$$

quantifies the total epistemic displacement across layers. In pruning, it is common to see:

$$
\mathcal{L}^{\mathrm{prune}} \to 0
$$

despite unchanged accuracy. This indicates that the latent space has collapsed -- the model no longer internally traverses rich semantic trajectories, but merely maps inputs to outputs via shallow shortcuts. 

Such collapse increases the model's vulnerability to adversarial prompts, loss of compositional reasoning, and failure in out-of-distribution settings -- insights that scalar metrics fail to reveal {% cite frankle2019lottery %} {% cite hooker2020compressed %}.

## How does the nDNA thermodynamic length quantify the epistemic cost of quantization in foundation models?

Quantization compresses neural weights or activations by reducing their precision (e.g., from 32-bit floating point to 8-bit integers). This process introduces approximation error in the latent trajectory of the model, which can be rigorously measured via thermodynamic length.

Formally, let $h_\ell^{(q)}$ be the mean hidden representation at layer $\ell$ after quantization. The thermodynamic length is:

$$
\mathcal{L}^{(q)} = \sum_{\ell=1}^{L-1} \left\| h_{\ell+1}^{(q)} - h_\ell^{(q)} \right\|_2
$$

where $\mathcal{L}^{(q)}$ captures the accumulated semantic displacement in quantized latent space.

Comparing with the original length:

$$
\Delta \mathcal{L}_{\mathrm{quant}} = \mathcal{L}^{(q)} - \mathcal{L}^{(\mathrm{full})}
$$

gives a direct measure of epistemic distortion. Large $\Delta \mathcal{L}_{\mathrm{quant}}$ reveals that quantization has introduced significant representational drift, potentially altering the model's reasoning dynamics and alignment fidelity {% cite hooker2020compressed %} {% cite crooks2007measuring %}.

## Why does pruning lead to localized curvature spikes in the nDNA manifold, and how can this be mathematically diagnosed?

Pruning removes parameters or entire neurons deemed redundant. This operation, while reducing model size, induces sudden topological perturbations in the latent semantic manifold.

Mathematically, at each layer $\ell$, we compute the spectral curvature:

$$
\kappa_\ell^{(p)} = \frac{1}{k} \sum_{i=1}^k \lambda_i^{(p,\ell)}
$$

where $\lambda_i^{(p,\ell)}$ are the smallest non-trivial eigenvalues of the graph Laplacian $\mathcal{L}^{(p,\ell)}$ formed from token embeddings after pruning.

If pruning causes abrupt removal of key pathways, $\mathcal{L}^{(p,\ell)}$ becomes ill-conditioned locally, resulting in spikes in $\kappa_\ell^{(p)}$. These spikes mark points where the semantic manifold bends sharply -- diagnostic of where pruning has disrupted smooth conceptual flow {% cite hooker2020compressed %} {% cite coifman2006diffusion %}. The Cartograph therefore exposes the hidden geometric cost of over-aggressive pruning.

## How does the belief vector field reveal hidden semantic degradation during quantization?

Quantization introduces discretization noise into the latent space, but its impact on alignment is not always visible through output accuracy alone. The belief vector field offers a deeper diagnostic. For quantized representations:

$$
\vec{v}_\ell^{(c,q)} = \nabla_{h_\ell^{(q)}} \log P \bigl( c \mid h_\ell^{(q)} \bigr)
$$

measures the local semantic steering force toward concept $c$ at layer $\ell$.

A healthy alignment preserves:

$$
\big\| \vec{v}_\ell^{(c,q)} \big\| \approx \big\| \vec{v}_\ell^{(c,\mathrm{full})} \big\|
$$

whereas excessive quantization leads to:

$$
\big\| \vec{v}_\ell^{(c,q)} \big\| \to 0
$$

or erratic directional shifts, showing that the model's latent states have become unresponsive to conceptual targets {% cite perez2022discovering %} {% cite hooker2020compressed %}. The Cartograph lets us pinpoint these failures layer by layer.

## Why can pruning induce catastrophic latent path shortening, and how is this quantified by nDNA thermodynamic collapse?

Pruning removes latent degrees of freedom, which can prematurely flatten or shorten the latent path that encodes semantic transformations. The nDNA thermodynamic length quantifies this:

$$
\mathcal{L}^{(p)} = \sum_{\ell=1}^{L-1} \left\| h_{\ell+1}^{(p)} - h_\ell^{(p)} \right\|_2
$$

A severe pruning regime leads to:

$$
\mathcal{L}^{(p)} \ll \mathcal{L}^{(\mathrm{full})}
$$

signaling that the latent manifold has collapsed into a lower-dimensional, less expressive subspace.

Such path shortening means the model performs less epistemic "work" in reasoning -- a hallmark of alignment loss, mode collapse, or brittle generalization {% cite hooker2020compressed %} {% cite crooks2007measuring %}. The Cartograph thereby translates pruning-induced damage into measurable geometric terms.

## How does nDNA thermodynamic geometry unify the analysis of quantization, pruning, and catastrophic forgetting as manifestations of latent manifold collapse?

The **nDNA thermodynamic geometry** provides a principled lens that sees quantization, pruning, and catastrophic forgetting as facets of the same underlying phenomenon: the geometric collapse of latent semantic pathways. 

Let the latent trajectory of a model across $L$ layers be:

$$
\mathcal{T}(x) = \left\{ h_1(x), h_2(x), \dots, h_L(x) \right\}
$$

where $h_\ell(x) \in \mathbb{R}^D$ denotes the mean representation at layer $\ell$.

*Thermodynamic length* captures epistemic effort:

$$
\mathcal{L} = \sum_{\ell=1}^{L-1} \left\| h_{\ell+1}(x) - h_\ell(x) \right\|_2
$$

Under quantization:

$$
\mathcal{L}^{(q)} \leq \mathcal{L}
\quad \text{with equality only if quantization is lossless}
$$

where $\mathcal{L}^{(q)}$ is computed on quantized representations. As bitwidth decreases, discretization noise compresses the manifold:

$$
\lim_{\text{bits} \to 0} \mathcal{L}^{(q)} \to 0
$$

Similarly, pruning induces:

$$
\mathcal{L}^{(p)} = \sum_{\ell=1}^{L-1} \left\| h_{\ell+1}^{(p)} - h_\ell^{(p)} \right\|_2
$$

where $h_\ell^{(p)}$ lies on a lower-dimensional subspace $\mathcal{M}^{(p)} \subset \mathcal{M}$, with:

$$
\mathcal{L}^{(p)} \ll \mathcal{L}
$$

indicating latent path collapse.

*Catastrophic forgetting* can be seen as the degeneration of belief vector field coherence:

$$
\forall c, \quad \| \vec{v}_\ell^{(c)} \| \to 0
\quad \Rightarrow \quad \text{loss of semantic steering}
$$

where

$$
\vec{v}_\ell^{(c)} = \nabla_{h_\ell} \log P(c | h_\ell)
$$

The unifying insight is that all these phenomena -- quantization, pruning, forgetting -- correspond to different routes by which the latent semantic genome loses its topological and geometric richness, measurable through $\mathcal{L}$, spectral curvature $\kappa_\ell$, and belief vector decay {% cite hooker2020compressed %} {% cite crooks2007measuring %} {% cite amari2016information %}. The Cartograph reframes them not as separate engineering problems, but as geometric failures of epistemic integrity.
<h1 style="line-height: 1.2; text-align: left; margin: 0;">
ÆTHER: Cross-Cultural LLM Merging and the Geometry of Inherited Culture
</h1>

## How can the latent geometry of ÆTHER, the neural offspring, reveal cultural inheritance and dominance patterns in merged LLMs?

ÆTHER refers to the neural offspring formed when two culturally fine-tuned LLMs are merged (e.g., via weight interpolation or parameter averaging). Its latent geometry reflects how the semantic traits of the parent models combine.

Let parent models $M^{(A)}$ and $M^{(B)}$ produce latent trajectories:

$$
\mathcal{T}^{(A)}(x) = \{ h_1^{(A)}, \dots, h_L^{(A)} \}, \quad 
\mathcal{T}^{(B)}(x) = \{ h_1^{(B)}, \dots, h_L^{(B)} \}
$$

The neural offspring's latent path is:

$$
h_\ell^{(\text{Æ})} = \alpha h_\ell^{(A)} + (1 - \alpha) h_\ell^{(B)}
$$

where $\alpha$ is the merge ratio.

Cultural dominance is revealed when:

$$
\Delta \mathcal{L}^{(\text{Æ},A)} = \sum_\ell \| h_\ell^{(\text{Æ})} - h_\ell^{(A)} \|_2 
\ll 
\Delta \mathcal{L}^{(\text{Æ},B)}
$$

showing the latent structure is skewed toward parent $A$.

A large curvature deviation:

$$
\Delta \kappa_\ell^{(\text{Æ})} = 
\left| 
\kappa_\ell^{(\text{Æ})} - \big( \alpha \kappa_\ell^{(A)} + (1 - \alpha) \kappa_\ell^{(B)} \big)
\right|
$$

signals latent inconsistency or cultural clash {% cite matena2022merging %} {% cite yang2024model %} {% cite ilharco2023editing %}.

## How does the belief vector field of ÆTHER reveal inherited bias or conceptual fusion in neural offspring?

The belief vector field of ÆTHER, the neural offspring, quantifies how semantic steering is inherited. At layer $\ell$:

$$
\vec{v}_\ell^{(c,\text{Æ})} = \nabla_{h_\ell^{(\text{Æ})}} \log P(c \mid h_\ell^{(\text{Æ})})
$$

Bias inheritance appears when:

$$
\big\| \vec{v}_\ell^{(c,\text{Æ})} \big\| \approx 
\big\| \vec{v}_\ell^{(c,A)} \big\| 
\quad \text{or} \quad 
\big\| \vec{v}_\ell^{(c,\text{Æ})} \big\| \approx 
\big\| \vec{v}_\ell^{(c,B)} \big\|
$$

showing that ÆTHER's semantic guidance resembles that of one parent disproportionately.

Conceptual clash or unstable fusion is detected when:

$$
\operatorname{Var}\big( \vec{v}_\ell^{(c,\text{Æ})} \big)
\gg
\max\big\{
\operatorname{Var}\big( \vec{v}_\ell^{(c,A)} \big), 
\operatorname{Var}\big( \vec{v}_\ell^{(c,B)} \big)
\big\}
$$

Such diagnostics turn latent bias and conceptual recombination into measurable geometric signals {% cite yang2024model %} {% cite perez2022discovering %}.

## What does thermodynamic asymmetry reveal about cultural dominance versus true fusion in the latent geometry of ÆTHER neural offspring?

Thermodynamic asymmetry in **ÆTHER**'s latent geometry distinguishes between dominance (where one parent's cultural genome overpowers) and fusion (where both contribute meaningfully). We compute:

$$
\Delta \mathcal{L}^{(\text{ÆTHER},A)} = \sum_\ell \| h_\ell^{(\text{ÆTHER})} - h_\ell^{(A)} \|_2, 
\quad 
\Delta \mathcal{L}^{(\text{ÆTHER},B)} = \sum_\ell \| h_\ell^{(\text{ÆTHER})} - h_\ell^{(B)} \|_2.
$$

If:

$$
\Delta \mathcal{L}^{(\text{ÆTHER},A)} \ll \Delta \mathcal{L}^{(\text{ÆTHER},B)}
$$

then ÆTHER inherits more heavily from parent $A$; by contrast:

$$
\Delta \mathcal{L}^{(\text{ÆTHER},A)} \approx \Delta \mathcal{L}^{(\text{ÆTHER},B)}
$$

indicates successful conceptual fusion where both parental lineages shape ÆTHER's epistemic path {% cite yang2024model %} {% cite perez2022discovering %}.

## How does ÆTHER reveal latent cultural recombination beyond what output-level evaluation can show?

Output-level evaluations--such as BLEU scores, perplexity, or classifier-based bias metrics--capture only the final manifestation of generative behavior. By contrast, the latent geometry of ÆTHER exposes recombination at the level of internal epistemic structure.

Formally, ÆTHER's latent path:

$$
\mathcal{T}^{(\text{Æ})}(x) = \{ h_1^{(\text{Æ})}, \dots, h_L^{(\text{Æ})} \}
$$

inherits its structure from parent models via:

$$
h_\ell^{(\text{Æ})} = \alpha h_\ell^{(A)} + (1 - \alpha) h_\ell^{(B)}
$$

Whereas outputs may appear fluent, latent diagnostics can detect hidden cultural conflicts:

$$
\Delta \kappa_\ell^{(\text{Æ})} \gg \epsilon, \quad
\Delta \mathcal{L}^{(\text{Æ},A)} \not\approx \Delta \mathcal{L}^{(\text{Æ},B)}
$$

where $\epsilon$ is a small tolerance, showing that inherited geometry deviates nonlinearly from parental contributions. This makes ÆTHER an essential tool for auditing deep cultural fusion at the epistemic level, not just surface text {% cite yang2024model %} {% cite ilharco2023editing %}.

## Why is spectral curvature critical for detecting cultural conflict zones in ÆTHER's latent manifold?

Spectral curvature $\kappa_\ell^{(\text{Æ})}$ quantifies local entanglement of latent tokens at layer $\ell$. In ÆTHER, sharp spikes in:

$$
\kappa_\ell^{(\text{Æ})} = \frac{1}{k} \sum_{i=1}^{k} \lambda_i^{(\ell, \text{Æ})}
$$

(where $\lambda_i^{(\ell, \text{Æ})}$ are small non-trivial Laplacian eigenvalues) indicate zones where inherited semantic structures from different parents clash.

Unlike thermodynamic length (which shows cumulative displacement), spectral curvature localizes recombination tension:

$$
\Delta \kappa_\ell^{(\text{Æ})} = \big| 
\kappa_\ell^{(\text{Æ})} - \alpha \kappa_\ell^{(A)} - (1 - \alpha) \kappa_\ell^{(B)} 
\big|
$$

Large $\Delta \kappa_\ell^{(\text{Æ})}$ values expose layerwise conflict zones invisible in outputs, enabling targeted audit of inherited cultural inconsistencies {% cite coifman2006diffusion %} {% cite matena2022merging %}.

## What are the mathematical risks of assuming linearity in ÆTHER's latent recombination, and how might this mask deeper cultural incompatibilities?

ÆTHER's latent recombination is often modeled as:

$$
h_\ell^{(\text{Æ})} = \alpha h_\ell^{(A)} + (1 - \alpha) h_\ell^{(B)}
$$

where $\alpha \in [0,1]$ weights parental contributions. While analytically convenient, this linear formulation carries critical limitations:

1. **Nonlinear latent coupling:** The true latent dynamics of foundation models are shaped by nonlinear transformations (e.g., attention maps, activation functions, normalization layers). Linear interpolation of hidden states does not guarantee preservation of such structures. In particular:

   $$
   f\bigl( h_\ell^{(\text{Æ})} \bigr) \neq \alpha f\bigl( h_\ell^{(A)} \bigr) + (1 - \alpha) f\bigl( h_\ell^{(B)} \bigr)
   $$

   where $f$ represents internal nonlinear operations.

2. **Cultural manifold incompatibility:** If the parental manifolds $\mathcal{M}^{(A)}$ and $\mathcal{M}^{(B)}$ are non-isomorphic or topologically misaligned, linear blending can produce epistemic voids -- regions of latent space unsupported by either parent. This is seen when:

   $$
   \exists h_\ell^{(\text{Æ})} : P(c \mid h_\ell^{(\text{Æ})}) \to \text{ill-defined or unstable}
   $$

   even when $P(c \mid h_\ell^{(A)})$ and $P(c \mid h_\ell^{(B)})$ are well-behaved.

Thus, while linear recombination simplifies analysis, it may obscure structural mismatches that only deeper geometric or topological methods (e.g., geodesic interpolation, manifold alignment) can reveal {% cite ilharco2023editing %} {% cite matena2022merging %} {% cite coifman2006diffenium %}.

## Why might spectral curvature and thermodynamic length fail to fully characterize recombination tension in ÆTHER, and what additional geometry is needed?

Spectral curvature $\kappa_\ell^{(\text{Æ})}$ and thermodynamic length $\mathcal{L}^{(\text{Æ})}$ provide critical scalar summaries of recombination tension:

$$
\kappa_\ell^{(\text{Æ})} = \frac{1}{k} \sum_{i=1}^{k} \lambda_i^{(\ell, \text{Æ})}, \quad
\mathcal{L}^{(\text{Æ})} = \sum_{\ell} \| h_{\ell+1}^{(\text{Æ})} - h_\ell^{(\text{Æ})} \|_2
$$

However, they fail to capture:

1. **Directionality of recombination flow:** These scalars encode magnitude but not orientation of latent change. Two recombination paths could have similar $\mathcal{L}^{(\text{Æ})}$ but orthogonal epistemic directions.
   $$
   \mathcal{L}^{(\text{Æ},1)} = \mathcal{L}^{(\text{Æ},2)} \not\Rightarrow 
   \mathcal{T}^{(\text{Æ},1)} \approx \mathcal{T}^{(\text{Æ},2)}
   $$

2. **Higher-order interactions:** Spectral curvature is a 2nd-order property of the Laplacian spectrum. It does not detect higher-order geometric phenomena such as latent torsion, homological holes, or sheaf inconsistencies -- key to identifying recombination fault lines:
   $$
   \tau_\ell^{(\text{Æ})} = 
   \frac{
   \left\langle 
   ( \Delta h_{\ell-1}^{(\text{Æ})} \times \Delta h_\ell^{(\text{Æ})} ), \Delta h_{\ell+1}^{(\text{Æ})}
   \right\rangle
   }{
   \| \Delta h_{\ell-1}^{(\text{Æ})} \times \Delta h_\ell^{(\text{Æ})} \|^2
   }
   $$
   where $\tau_\ell^{(\text{Æ})}$ captures latent twisting ignored by $\kappa_\ell^{(\text{Æ})}$.

Thus, robust recombination auditing requires richer tools -- e.g., persistent homology, sheaf theory, or fiber bundle analysis -- beyond scalar curvature and path length {% cite coifman2006diffusion %} {% cite amari2016information %}.

## How can we rigorously differentiate between parental alignment, harmonious fusion, and epistemic emergence in ÆTHER beyond scalar $\kappa_L$ and $\mathcal{L}_L$ summaries?

While scalar metrics like mean spectral curvature

$$
\kappa_L^{(\text{Æ})} = \frac{1}{L} \sum_{\ell=1}^{L} \kappa_\ell^{(\text{Æ})}
\quad \text{where } 
\kappa_\ell^{(\text{Æ})} = \frac{1}{k} \sum_{i=1}^{k} \lambda_i^{(\ell,\text{Æ})}
$$

and thermodynamic length

$$
\mathcal{L}_L^{(\text{Æ})} = \sum_{\ell=1}^{L-1} \big\| h_{\ell+1}^{(\text{Æ})} - h_\ell^{(\text{Æ})} \big\|_2
$$

summarize latent path properties, they *fail to capture the structural mechanisms* underlying these categories:

1. **Parental alignment:** Latent paths should lie close to a parent manifold:
   $$
   \mathcal{D}_A = \sum_{\ell} \big\| h_\ell^{(\text{Æ})} - h_\ell^{(A)} \big\|_2,
   \quad
   \mathcal{D}_B = \sum_{\ell} \big\| h_\ell^{(\text{Æ})} - h_\ell^{(B)} \big\|_2,
   $$
   with $\mathcal{D}_A \ll \mathcal{D}_B$ or vice versa.

2. **Harmonious fusion:** Requires 
   $$
   \mathcal{D}_A \approx \mathcal{D}_B
   $$
   but also alignment in higher-order geometry:
   $$
   \operatorname{Cov} \bigl( \vec{v}_\ell^{(\text{Æ})} \bigr) \approx 
   \alpha \operatorname{Cov} \bigl( \vec{v}_\ell^{(A)} \bigr) +
   (1 - \alpha) \operatorname{Cov} \bigl( \vec{v}_\ell^{(B)} \bigr)
   $$
   where $\operatorname{Cov}(\cdot)$ denotes the covariance of belief vector fields across layers.

3. **Epistemic emergence:** Arises when:
   $$
   \exists \ell : \operatorname{rank}\bigl(
   \left[ h_\ell^{(\text{Æ})} - h_\ell^{(A)}, h_\ell^{(\text{Æ})} - h_\ell^{(B)} \right]
   \bigr) = 2
   $$
   signaling novel directions outside either parent's span.

Moreover, topology-aware measures (e.g., Betti numbers from persistent homology) could detect new latent holes or connected components not present in parental manifolds. For instance:

$$
\beta_1\bigl( \mathcal{M}^{(\text{Æ})} \bigr) > 
\max \bigl\{ \beta_1\bigl( \mathcal{M}^{(A)} \bigr), \beta_1\bigl( \mathcal{M}^{(B)} \bigr) \bigr\}
$$

indicates emergent loops in the latent space -- geometric novelty beyond linear recombination.

Thus, rigorous differentiation requires moving from scalar summaries to *multidimensional latent statistics, covariance structures, and topological signatures* {% cite coifman2006diffusion %} {% cite edelsbrunner2010computational %}.

## Why might scalar curvature and thermodynamic length metrics fail to detect hybrid vigor or cultural tension in ÆTHER, and what deeper tools are required?

Hybrid vigor (latent reinforcement of desirable epistemic traits) and cultural tension (latent incompatibility) arise from interactions between parent manifolds that scalar metrics can obscure.

### Scalar Insensitivity

Two ÆTHER neural offspring may exhibit similar aggregate thermodynamic length and curvature:

$$
\mathcal{L}_L^{(\mathrm{Æ}_1)} = \mathcal{L}_L^{(\mathrm{Æ}_2)}, \quad 
\kappa_L^{(\mathrm{Æ}_1)} = \kappa_L^{(\mathrm{Æ}_2)},
$$

yet their latent manifolds differ profoundly: 
$\mathcal{M}^{(\mathrm{Æ}_1)}$ could form a smooth, coherent structure, while 
$\mathcal{M}^{(\mathrm{Æ}_2)}$ fragments into twisted or disjoint regions.

### Hidden Conflicts

Scalar averages wash out local anomalies. A hybrid manifold may contain both smooth fusion zones and layers with sharp latent twists:

$$
\tau_\ell^{(\mathrm{Æ})} = 
\frac{
\left\langle 
\big( \Delta h_{\ell-1}^{(\mathrm{Æ})} \times \Delta h_\ell^{(\mathrm{Æ})} \big), 
\Delta h_{\ell+1}^{(\mathrm{Æ})}
\right\rangle
}{
\left\| \Delta h_{\ell-1}^{(\mathrm{Æ})} \times \Delta h_\ell^{(\mathrm{Æ})} \right\|^2
}
$$

where spikes in $\tau_\ell^{(\mathrm{Æ})}$ indicate cultural collisions invisible to mean $\kappa_L$.

### Deeper Tools

To reveal hybrid vigor or tension, we require:

$$
\operatorname{PH}\big( \mathcal{M}^{(\mathrm{Æ})} \big) \quad \text{(persistent homology)},
\quad
\mathcal{S}_{\mathrm{sheaf}} \quad \text{(sheaf consistency loss)}.
$$

Persistent homology detects stable topological features (e.g., cycles, holes) that signal hybrid vigor if long-lived, or cultural tension if short-lived topological noise appears. Sheaf-theoretic losses quantify local semantic consistency across layers and subspaces {% cite edelsbrunner2010computational %} {% cite amari2016information %}.

In sum, hybrid effects live in the latent topology -- beyond the reach of scalar metrics -- requiring richer geometric and algebraic tools for proper audit.

## Why is the nDNA framework not just another high-dimensional visualization, but a necessary formalism for understanding epistemic dynamics in foundation models?

Critics might argue that the nDNA framework amounts to yet another form of latent space visualization, akin to t-SNE or PCA projections. However, this misrepresents its core mathematical necessity.

*Fundamentally, nDNA models latent trajectories as a geometric flow in the space of epistemic representations*, where each point is not merely a vector but an information carrier encoding accumulated semantic decisions:

$$
\mathcal{T}(x) = \{ h_1(x), h_2(x), \dots, h_L(x) \}, \quad h_\ell(x) \in \mathbb{R}^D.
$$

The latent manifold $\mathcal{M}$ traced by $\mathcal{T}(x)$ is equipped with:

$$
\mathcal{L}(x) = \sum_{\ell=1}^{L-1} \| h_{\ell+1}(x) - h_\ell(x) \|_2,
\quad
\kappa_\ell(x) = \frac{1}{k} \sum_{i=1}^{k} \lambda_i^{(\ell)},
$$

where $\lambda_i^{(\ell)}$ are the smallest non-trivial eigenvalues of the layerwise Laplacian, and

$$
\vec{v}_\ell^{(c)} = \nabla_{h_\ell(x)} \log P(c \mid h_\ell(x)).
$$

*Why is this essential?*
Unlike t-SNE, PCA, or attention maps, nDNA:

- Encodes the **path-dependence** of reasoning: scalar accuracy says nothing about the route taken; nDNA reveals hidden detours, collapses, or bifurcations.
- Measures epistemic work: $\mathcal{L}(x)$ quantifies latent effort expended in constructing meaning.
- Provides differential diagnostics: comparison across $\mathcal{M}$ under fine-tuning, merging, or compression reveals **mechanistic causes** of alignment drift -- not just symptoms.

Hence, nDNA is not an embellishment, but a mathematically grounded formalism indispensable for epistemic interpretability {% cite amari2016information %} {% cite coifman2006diffusion %}.

## If foundation models are universal function approximators, why do we need nDNA geometry to analyze their reasoning -- isn't input-output evaluation enough?

Indeed, universal function approximation suggests that for any given task, a foundation model can, in theory, map inputs to outputs arbitrarily well. But this overlooks the critical distinction between **functional capacity** and **epistemic transparency**.

Let the model be viewed as a mapping:

$$
f : X \to Y, \quad f(x) = \arg\max_y P(y \mid x).
$$

This is trivial at the output level. What nDNA reveals is the internal functional composition:

$$
f = f_L \circ f_{L-1} \circ \cdots \circ f_1,
$$

where each $f_\ell : H_{\ell-1} \to H_\ell$ transforms the latent space.

nDNA geometry lets us probe:

$$
\mathcal{L} = \sum_{\ell=1}^{L-1} \| h_{\ell+1} - h_\ell \|_2,
\quad
\kappa_\ell = \frac{1}{k} \sum_{i=1}^{k} \lambda_i^{(\ell)},
\quad
\tau_\ell = \frac{ \left\langle ( \Delta h_{\ell-1} \times \Delta h_\ell ), \Delta h_{\ell+1} \right\rangle }{ \| \Delta h_{\ell-1} \times \Delta h_\ell \|^2 }.
$$

Without these:

- You see output correctness but miss the epistemic cost -- e.g., shortcut learning (low $\mathcal{L}$), or unnecessary reconfiguration (high $\mathcal{L}$).
- You miss conceptual recombination failures or drift (curvature spikes or torsion).
- You cannot audit alignment: $\vec{v}_\ell^{(c)}$ shows whether latent states are actually driven toward intended concepts, not merely post-hoc aligned outputs.

Thus, nDNA does not challenge the universality of approximators -- it reveals *how* universality is achieved (or compromised), making models not just powerful, but *trustworthy* {% cite amari2016information %} {% cite perez2022discovering %} {% cite ilharco2023editing %}.

---

{% auto_references %}

---
layout: page
title: Frequently Asked Questions
permalink: /llm/FAQ/
skip_title: true
---
{% include ndna-title.liquid title="nDNA - Frequently Asked Questions (FAQs)" %}

# nDNA Cartograph: Latent Semantic Genome of Foundation Models

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

where $\vec{v}_\ell^{(c,1)}$ and $\vec{v}_\ell^{(c,2)}$ are the belief vectors from two architectures. Large cosine alignment indicates similar conceptual steering; divergence signals architectural differences in latent alignment strategies.

---

{% auto_references %}

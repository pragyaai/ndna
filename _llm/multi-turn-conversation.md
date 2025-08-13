---
layout: page
title: Multi-turn Conversation and nDNA
permalink: /llm/nlp-operations/multi-turn-conversation/
skip_title: true
---

{% include ndna-title.liquid title="ORBIT: Multi-turn Conversation and nDNA Dynamics" %}

> *We introduce **ORBIT**—a neural genomics framework for diagnosing the epistemic health of large language models (LLMs) in multi-turn dialogue. While prior evaluation methods emphasize surface-level fluency or factuality, **ORBIT** ventures deeper—probing the latent evolution of beliefs by modeling internal representations as semantic trajectories through high-dimensional latent space.*

## Abstract

We introduce **ORBIT**—a neural genomics framework for diagnosing the *epistemic health* of large language models (LLMs) in *multi-turn dialogue*. While prior evaluation methods emphasize surface-level fluency or factuality, **ORBIT** ventures deeper—probing the *latent evolution of beliefs* by modeling internal representations as *semantic trajectories* through high-dimensional latent space.

Grounded in a novel **neural DNA** formalism, denoted $$\text{nDNA}_{\text{mtd}}$$, we extract turn-wise belief vectors and apply tools from differential geometry—curvature, torsion, and thermodynamic semantic length—to characterize how a model *thinks*, *transitions*, and *stabilizes* during conversation. We introduce new diagnostic metrics—*inter-turn angular deviation*, *epistemic torsion*, and *cumulative drift*—to quantify alignment-related phenomena such as memory retention, reasoning consistency, and semantic derailment.

Empirical results across state-of-the-art LLMs (LLaMA, Mistral, Gemma, Phi-2, GPT-NeoX) reveal that stronger models trace smooth, low-torsion nDNA trajectories with compact belief loops, while weaker models exhibit jagged, high-curvature pathways with epistemic volatility. ORBIT achieves superior correlation with human judgments on coherence, consistency, and engagement—surpassing existing metrics like BLEURT, G-Eval, and MAUVE.

**ORBIT** offers a principled, interpretable lens for understanding model behavior across turns—enabling alignment-sensitive evaluation, dialogue curriculum design, and the emergence of *epistemic interpretability* as a core paradigm in LLM diagnostics.

## From Surface Fluency to Latent Epistemics: Why Dialogue Evaluation Must Track Semantic Memory and Belief Dynamics

### The Inadequacy of Surface-Level Metrics

Conventional evaluation of dialogue systems has largely centered on token-level overlap metrics such as **BLEU** {% cite papineni2002bleu %}, **ROUGE** {% cite lin2004rouge %}, **METEOR** {% cite lavie2007meteor %}, and perplexity. While these metrics are computationally efficient and correlate loosely with grammatical fluency, they remain blind to deeper qualities like *belief consistency*, *logical continuity*, and *thematic memory* over multi-turn interactions. As noted in {% cite liu2016not %}{% cite mehri2020usr %}, such surface-level evaluations can reward models that generate locally fluent responses while **globally drifting across topics**, contradicting earlier turns, or hallucinating unsupported content.

Recent work has sought to address this gap by introducing learned evaluators—**USR** {% cite mehri2020usr %}, **FED** {% cite mehri2020unsupervised %}, **HolisticEval** {% cite pang2020towards %}, and **G-Eval** {% cite liu2023geval %}—which assess aspects like coherence, engagement, and factuality using discriminative or generative language models. However, these approaches continue to evaluate only the *outputs* of a model, not its *internal belief trajectories*, and thus fail to explain *why* or *how* a model's epistemic state drifts during conversation.

### Semantic Drift and the Problem of Latent Dialogue Inconsistency

*Semantic drift*—the progressive deviation of a model's belief state from prior context—is a known failure mode in neural dialogue systems {% cite xu2022semantic %}. While early systems relied on explicit Dialogue State Tracking (DST) and structured memory modules {% cite serban2016building %}{% cite heck2020trippy %}, modern LLM-based dialogue agents depend on transformer encoders with *implicit, context-dependent memory*. Despite producing locally fluent responses, these systems frequently **forget earlier facts**, **reverse stances**, or **meander off-topic** in longer conversations {% cite zhang2020retrospective %}{% cite gupta2021history %}.

Moreover, alignment-oriented benchmarks such as **TruthfulQA** {% cite lin2022truthfulqa %}, **FLASK** {% cite lee2023flask %}, and **AlpacaEval** {% cite alpacaeval2023 %} focus on factual correctness or instruction-following at a *single-prompt granularity*. They cannot assess whether a model **maintains epistemic consistency across an entire dialogue trajectory**—a property critical for high-stakes domains like education, law, therapy, and scientific reasoning.

### Geometric Interpretability and Latent Belief Analysis

Recent interpretability research has examined the *geometry* of LLM activations using techniques such as probing classifiers {% cite hewitt2019structural %}, neuron attribution {% cite meng2022locating %}, and concept vector extraction {% cite gurnee2023lmexplainer %}. Parallel work on representational dynamics—e.g., representational drift {% cite mirzadeh2022revisiting %}, thermodynamic length {% cite li2019measuring %}, and curvature of semantic manifolds {% cite garg2022what %}—demonstrates that latent-space trajectories can reveal how models internally update knowledge.

However, these tools are rarely applied to dialogue evaluation. No current benchmark tracks *layer-wise belief evolution* in a multi-turn setting, nor examines how geometric properties like *curvature* and *torsion* correlate with dialogue coherence or drift.

### The Case for ORBIT and nDNA Geometry

To close this gap, we introduce **ORBIT**—a biologically inspired, *nDNA*-based framework for multi-turn dialogue evaluation. Unlike surface metrics, ORBIT treats the model's internal beliefs as a *high-dimensional trajectory* in latent space, parameterized over conversational turns. We apply tools from differential geometry to quantify:

- **Spectral Curvature** ($$\kappa$$): local directional change of belief vectors, indicating topic shifts.
- **Epistemic Torsion** ($$\tau$$): twist of the belief trajectory, revealing reasoning instability.
- **Thermodynamic Semantic Length** ($$\mathcal{L}$$): accumulated semantic displacement, measuring overall belief evolution.

This epistemic–geometric perspective enables ORBIT to act as both a *diagnostic microscope* and an *evaluation framework*: it not only detects when a model drifts, but explains the *mechanism* of drift—how beliefs twist, diverge, or degrade over time. We contend that such tools are essential for auditing, aligning, and improving next-generation conversational agents, particularly in domains where **truth, memory, and internal consistency** are as important as surface fluency.

## Models & Benchmarks

To evaluate the ORBIT framework for belief dynamics in multi-turn dialogue, we selected a diverse set of contemporary, open-source large language models (LLMs), each representing different architectural families and alignment strategies:

- **LLaMA 3 (8B)** {% cite touvron2024llama %}: Strong generalist instruction-tuned model by Meta.
- **Mistral (7B)** {% cite jiang2023mistral %}: Dense decoder-only model with efficient training and solid multi-turn capability.
- **Gemma (7B)** {% cite anil2023gemma %}: Google's lightweight, fine-tuned instruction model emphasizing interpretability.
- **Phi-2** {% cite gunasekar2023phi %}: A small-scale model that achieves impressive alignment with curated training recipes.
- **GPT-NeoX (20B)** {% cite black2022gpt %}: A transformer-based autoregressive model representing the largest among the chosen open-source variants.

For benchmarking, we selected popular multi-turn dialogue datasets known for their alignment and truthfulness evaluations:

- **MT-Bench** {% cite zheng2023judging %}: A benchmark for evaluating alignment across 3–5 turn dialogues.
- **ShareGPT Conversations** {% cite sharegpt2023 %}: Real-world user–LLM interactions, averaging 6–12 turns per session.
- **FLASK** {% cite liang2023flask %}: Fine-grained long-form alignment dataset with an average of 5–10 dialogue turns.
- **FaithDial** {% cite dziri2022faithdial %}: Multi-turn conversations emphasizing factual consistency.
- **TRUTHBench** {% cite pang2023truthbench %}: Designed to stress-test factuality and hallucination in multi-turn reasoning (avg. 3–6 turns).

### Dialogue Turn Statistics

| **Dataset** | **Avg. Turns** | **Notes** |
|-------------|----------------|-----------|
| MT-Bench | 4–5 | Prompt + 3–4 user turns |
| ShareGPT | 6–12 | Organic user–LLM logs |
| FLASK | 5–10 | Instruction-following + long form |
| FaithDial | 4–6 | Knowledge-grounded consistency |
| TRUTHBench | 3–6 | Drift, logic, and hallucination tests |

These choices ensure that the ORBIT framework is evaluated under realistic, diverse, and challenging multi-turn settings, enabling us to track semantic drift, belief torsion, and coherence degradation over extended interactions.

## ORBIT: Organized Representation of Belief Integrity in Turns

Traditional surface-level dialogue metrics—such as BLEU {% cite papineni2002bleu %}, ROUGE {% cite lin2004rouge %}, or perplexity—offer only a shallow view of model performance. They can be maximized even when a model suffers from *belief collapse*, hallucination, or overfitting to prompt artifacts. ORBIT shifts focus from output surface forms to *internal epistemic dynamics*, asking:

> How do the latent beliefs of a model evolve, stabilize, or drift across the turns of a conversation?

Let the mean-pooled hidden state at transformer layer $$\ell$$ after turn $$t$$ be:
$$h_\ell^{(t)} \in \mathbb{R}^d.$$

For a $$T$$-turn conversation, ORBIT views $$\{h_\ell^{(1)}, \dots, h_\ell^{(T)}\}$$ as a *discrete curve* in latent space. Each metric probes a different property of this curve, capturing complementary aspects of belief integrity.

### Spectral Memory Retention $$R(t)$$

**Goal:** Measure how much the current belief vector reuses *diverse* prior knowledge.

Let
$$M_\ell^{(t)} = \big[v_\ell^{(1)}, \dots, v_\ell^{(t-1)}\big] \in \mathbb{R}^{d\times (t-1)}$$
be the memory matrix. Its rank-$$k$$ SVD is:
$$M_\ell^{(t)} = U_\ell^{(t)} \Sigma_\ell^{(t)} V_\ell^{(t)\top}, \quad U_{\ell,k}^{(t)} \in \mathbb{R}^{d\times k}.$$

We project the current belief:
$$\hat{v}_\ell^{(t)} = U_{\ell,k}^{(t)} U_{\ell,k}^{(t)\top} v_\ell^{(t)},$$
and define the raw retention:
$$R_\ell^{(t)} = \frac{\|\hat{v}_\ell^{(t)}\|_2^2}{\|v_\ell^{(t)}\|_2^2}.$$

Entropy-weighted regularization uses singular values $$\sigma_i$$ to compute:
$$H_\ell^{(t)} = -\sum_{i=1}^k \sigma_i \log \sigma_i, \quad \sigma_i \propto \Sigma_{ii}.$$

The final layer-averaged retention is:
$$R(t) = \frac{1}{L} \sum_{\ell=1}^L R_\ell^{(t)} \cdot \frac{H_\ell^{(t)}}{\log k}.$$

High $$R(t)$$ indicates stable, adaptive reuse of prior turns; low $$R(t)$$ indicates forgetting or rote replay.

### Thermodynamic Length $$L(t)$$

**Goal:** Quantify intra-turn representational restructuring effort.

For a single turn:
$$L(t) = \sum_{\ell=1}^{L-1} \| v_{\ell+1}^{(t)} - v_\ell^{(t)} \|_2,$$
normalized as:
$$\tilde{L}(t) = \frac{1}{L-1} \sum_{\ell=1}^{L-1} \| v_{\ell+1}^{(t)} - v_\ell^{(t)} \|_2.$$

Across the dialogue:
$$L_{\text{dialogue}} = \frac{1}{T} \sum_{t=1}^T \tilde{L}(t).$$

High values suggest creative recomputation or overthinking; low values suggest semantic stagnation.

### Epistemic Drift $$D$$

**Goal:** Capture *global displacement* of beliefs across turns.

Euclidean drift:
$$D^{(0)} = \frac{1}{L} \sum_{\ell=1}^L \| v_\ell^{(T)} - v_\ell^{(1)} \|_2.$$

Fisher–Rao geodesic:
$$D_\ell^{(F)} = \int_{1}^T \dot{\gamma}_\ell(t)^\top I_\ell(t) \dot{\gamma}_\ell(t)\,dt.$$

Curvature energy:
$$E_\ell = \sum_{t=2}^{T-1} \| J_\ell(t+1) - J_\ell(t) \|_2^2, \quad J_\ell(t) = v_\ell^{(t)} - v_\ell^{(t-1)}.$$

Belief action functional:
$$A_\ell = \int_{1}^T \left( \frac12\|\dot{\gamma}_\ell(t)\|_2^2 + U_\ell(\gamma_\ell(t)) \right) dt.$$

Spectral entropy:
$$H_\ell = -\sum_{i=1}^T \lambda_i \log \lambda_i, \quad \lambda_i = \frac{\sigma_i^2}{\sum_j \sigma_j^2}.$$

Composite drift:
$$D_{\text{final}} = D^{(0)} + \lambda_F D^{(F)} + \lambda_C E + \lambda_A A + \lambda_S H.$$

Low $$D_{\text{final}}$$ indicates rigidity; high with $$\kappa\approx 1$$ indicates purposeful adaptation; high with $$\kappa \gg 1$$ indicates instability.

### Epistemic Torsion $$\tau(t)$$

**Goal:** Detect *out-of-plane twisting* in belief motion.

Local displacements:
$$\mathbf{a}_\ell(t) = v_\ell^{(t)} - v_\ell^{(t-1)}, \quad \mathbf{b}_\ell(t) = v_\ell^{(t+1)} - v_\ell^{(t)}.$$

Osculating plane normal:
$$\mathbf{n}_\ell(t) = \mathbf{a}_\ell(t) \times \mathbf{b}_\ell(t).$$

Torsion magnitude:
$$\tau_\ell(t) = \frac{\|\mathbf{a}_\ell(t) \times \mathbf{b}_\ell(t)\|_2}{\|\mathbf{a}_\ell(t)\|_2 \cdot \|\mathbf{b}_\ell(t)\|_2 \cdot \|\mathbf{a}_\ell(t) + \mathbf{b}_\ell(t)\|_2}.$$

Layer-averaged:
$$\tau(t) = \frac{1}{L} \sum_{\ell=1}^L \tau_\ell(t).$$

High torsion often signals adversarial pivots or hallucination-prone reorientation.

### Semantic Coherence $$C(t)$$

**Goal:** Evaluate *internal alignment* across layers and turns.

Vertical coherence:
$$C_{\text{layer}}(t) = \frac{1}{L-1} \sum_{\ell=1}^{L-1} \cos\theta(v_\ell^{(t)}, v_{\ell+1}^{(t)}).$$

Temporal coherence:
$$C_{\text{turn}}(\ell) = \frac{1}{T-1} \sum_{t=1}^{T-1} \cos\theta(v_\ell^{(t)}, v_\ell^{(t+1)}).$$

Unified score:
$$C_{\text{total}} = \alpha C_{\text{layer}}(t) + (1 - \alpha) C_{\text{turn}}(\ell).$$

Balanced high $$C_{\text{total}}$$ indicates healthy memory and abstraction; too high indicates over-smoothing; low indicates fragmentation.

**Summary:** ORBIT's five metrics—*Spectral Memory Retention, Thermodynamic Length, Epistemic Drift, Epistemic Torsion, and Semantic Coherence*—together form a *geometric health profile* for dialogue models. By treating hidden states as curves in latent space, ORBIT reveals subtleties invisible to text-only metrics, enabling deeper alignment auditing, failure analysis, and epistemic safety monitoring.

## The ORBIT Score Function

$$
\begin{aligned}
\text{ORBIT} &=  
\boxed{
\overbrace{
\underbrace{\lambda_1 \cdot \frac{1}{T} \sum_{t=1}^{T} R(t)}_{\text{Spectral Memory Retention}} \; + \;
\underbrace{\lambda_2 \cdot \frac{1}{T} \sum_{t=1}^{T} L(t)}_{\text{Thermodynamic Length}} \; + \;
\underbrace{\lambda_3 \cdot D}_{\text{Epistemic Drift}} \; + \;
\underbrace{\lambda_4 \cdot \frac{1}{T-2} \sum_{t=2}^{T-1} \tau(t)}_{\text{Epistemic Torsion}}
}^{\text{Rewarded Belief Dynamics (↑ ORBIT for Adaptive Structure)}}
} \\[1.5ex]
&\quad - \boxed{
\overbrace{
\underbrace{ \lambda_5 \cdot \frac{1}{T} \sum_{t=1}^{T} C(t) }_{\text{Semantic Coherence}}
}^{\text{Penalized Semantic Flatness (↓ ORBIT for Redundant Coherence)}}
}
\end{aligned}
$$

The proposed scoring function rewards dynamic belief transitions while penalizing shallow coherence. It encodes four positive drivers—memory retention, path length, epistemic drift, and torsion—balanced by a semantic flatness penalty, promoting structured, evolving, and memory-aware dialogue.

### Justification of ORBIT Components
Each term is carefully selected to align with the goals of adaptive, memory-rich, and structurally evolving multi-turn dialogue. The balance of belief dynamics versus flat coherence makes ORBIT ideal for measuring generative dialogue quality.

| **Component** | **Role in Dialogue** | **Reward/Penalty** | **Mathematical Insight** | **Implication for Dialogue Modeling** |
|---------------|---------------------|-------------------|-------------------------|----------------------------------|
| **Spectral Memory Retention** $$R(t)$$ | Recalls and reactivates past belief states | **<span style='color: #006600'>Rewarded</span>** | Projects current latent belief into the spectral basis of earlier turns; misalignment reflects forgetting | Encourages memory consistency, narrative anchoring, and long-term coherence in multi-turn dialogues |
| **Thermodynamic Length** $$L(t)$$ | Tracks the latent evolution path length | **<span style='color: #006600'>Rewarded</span>** | Cumulative Riemannian metric across belief updates; longer length implies meaningful transformations | Rewards non-trivial updates, semantic learning, and knowledge evolution over dialogue turns |
| **Epistemic Drift** $$D$$ | Captures global belief shift across the dialogue | **<span style='color: #006600'>Rewarded</span>** | Measures the endpoint divergence; high drift allows model to change beliefs | Supports dynamic viewpoint adaptation and progression of thought within a conversation |
| **Epistemic Torsion** $$\tau(t)$$ | Measures angular twisting of belief trajectories | **<span style='color: #006600'>Rewarded</span>** | Derived from second-order changes in belief vectors; torsion encodes directional context redirection | Favors nuanced adaptation, subtopic transitions, and layered reasoning under contextual tension |
| **Semantic Coherence** $$C(t)$$ | Surface-level similarity across dialogue turns | **<span style='color: #CC0000'>Penalized</span>** | Low entropy in representation change; high values imply semantic redundancy | Penalizes repetition and trivial consistency, pushing toward more semantically diverse and evolving conversations |

## Visualizations and Analysis

### Spectral Memory Retention Across Turns and Layers

{% include visualization.liquid
   image_path="Figures/memory_retention_final_30L.png"
   caption="**Spectral Memory Retention Across Turns and Layers: LLaMA vs. Mistral.** We visualize the entropy-regularized spectral retention score $$\mathcal{R}_\ell(t) \in [0, 1]$$ over **dialogue turns** $$t \in \{1,\dots,30\}$$ and **LLM layers** $$\ell \in \{1,\dots,30\}$$. Each score quantifies how well the current belief vector $$\mathbf{v}_\ell(t)$$ projects onto the $$k$$-dimensional principal semantic subspace derived from prior turns—capturing *episodic reactivation fidelity* across time. **LLaMA** demonstrates high spectral retention $$\mathcal{R}_\ell(t) \geq 0.75$$ for early turns across most layers, maintaining a stable memory phase up to $$t = 13$$. **Mistral**, in contrast, exhibits significantly lower and more erratic retention, revealing poor alignment between current and historical beliefs—suggesting degraded episodic anchoring and incoherent memory replay." %}

### Thermodynamic Length Trajectories

{% include visualization.liquid
   image_path="Figures/thermodynamic_llama_mistral_bestangle_final.png"
   caption="**Thermodynamic Length Trajectories $$\mathcal{L}_\ell(t)$$ across LLM Layers for LLaMA and Mistral.** This figure visualizes the internal *belief adaptation dynamics* via the layerwise **thermodynamic length** metric $$\mathcal{L}_\ell(t)$$, computed per dialogue turn $$t \in [1,30]$$ and layer $$\ell \in [1,30]$$. Each surface plot represents the magnitude of local epistemic effort required to transition between adjacent belief states. **LLaMA** shows punctuated adaptation at critical semantic junctions, suggesting efficient, layer-specific belief realignment. **Mistral** exhibits noisier adaptation patterns and diffuse energy expenditure across layers, implying weaker modularity and more turbulent internal reasoning." %}

### Epistemic Drift Vector Field

{% include visualization.liquid
   image_path="Figures/epistemic_drift_field_annotated.png"
   caption="**Epistemic Drift Vector Field with Layer Annotations and Baseline Path.** This 3D visualization illustrates the trajectory of *belief state evolution* across dialogue turns in a transformer-based language model, projected into a reduced latent semantic space. Each **arrow** represents a *drift vector* at a specific layer, capturing the directional semantic shift between consecutive dialogue turns. Vectors are **color-coded by drift magnitude**, with lighter hues (e.g., <span style='color: #FFFF00'>yellow</span>) highlighting layers with significant epistemic transitions. The **dashed gray curve** traces the *baseline path*, connecting layerwise belief centers without directional encoding." %}

### Curvature-Torsion Analysis

{% include visualization.liquid
   image_path="Figures/llm_curvature_torsion_llama_vs_mistral_arrowed_fixed.png"
   caption="**Comparative Semantic Curvature–Torsion Fields of Belief Evolution: LLaMA vs Mistral.** This 3D comparative visualization presents the semantic evolution of beliefs across 30 dialogue turns for two Large Language Models. Each trajectory is embedded in a $$(t, \kappa(t), \tau(t))$$ space, where $$t$$ is the dialogue turn, $$\kappa(t)$$ represents semantic *curvature*, and $$\tau(t)$$ represents semantic *torsion*. Line width denotes torsion magnitude—thicker lines signify higher twisting in belief orientation. **LLaMA** demonstrates high torsional variance in the mid-to-late stages, while **Mistral** exhibits smoother curvature and more episodic torsion bursts." %}

### Semantic Coherence Analysis

{% include visualization.liquid
   image_path="Figures/coherence_layer.png"
   caption="**Vertical Semantic Integrity: Layerwise Coherence $$C_{\mathrm{layer}}(t)$$.** This metric captures semantic consistency **across transformer layers** $$\ell$$ at each dialogue turn $$t$$. Higher values indicate **stable hierarchical abstraction** and semantic integration at each turn. **LLaMA** exhibits a coherence plateau in upper layers up to around $$t \approx 20$$, after which coherence collapses. **Mistral** reaches its peak earlier but shows visible degradation beginning as early as $$t \approx 13$$, indicating more **premature semantic collapse**." %}

{% include visualization.liquid
   image_path="Figures/coherence_turn.png"
   caption="**Temporal Consistency Drift: Turnwise Coherence $$C^{\mathrm{turn}}_{\ell}(t)$$.** This metric assesses coherence *across dialogue turns* $$t$$ within each fixed layer $$\ell$$, revealing memory continuity. A slower decline implies stronger **inter-turn semantic retention**. **LLaMA** retains coherence in upper layers until a sudden drop after $$t \approx 21$$, marking a *late-stage memory collapse*. **Mistral** starts drifting earlier with coherence dropping notably from $$t \approx 13$$, indicating a **shallower temporal memory window**." %}

## ORBIT Evaluation: Comparative Case Studies Across Five LLMs

We evaluate the ORBIT framework across five representative LLMs—**LLaMA-2**, **Mistral**, **Gemma**, **Phi-2**, and **GPT-NeoX**—to compare *belief trajectory geometry* in multi-turn dialogues. Each model was assessed on its ability to maintain coherent epistemic states, adapt across turns, and balance stability with creativity over extended interactions.

### Memory Retention Patterns

Spectral memory retention $$R(t)$$ quantifies episodic recall and subspace diversity by projecting the current belief vector into the subspace spanned by prior turns:

- **LLaMA-2**: Retains a high $$R(t)$$ for the majority of the dialogue, only showing a gradual decline after approximately turn 13, suggesting a controlled and deliberate forgetting process.
- **Mistral**: Experiences an early collapse in $$R(t)$$, indicating weaker long-term thematic anchoring and a tendency towards topic drift.
- **Gemma**: Maintains moderate retention, but with oscillatory fluctuations, pointing to intermittent lapses in thematic focus.
- **Phi-2** & **GPT-NeoX**: Exhibit low baseline retention, with pronounced forgetting as dialogues extend, reflecting limited episodic integration.

### Thermodynamic Length and Adaptation Effort

Thermodynamic length $$L(t)$$ measures epistemic effort as the cumulative Euclidean distance traversed across layers within a turn:

- **LLaMA-2**: Displays localized spikes in $$L(t)$$, indicating targeted representational restructuring and efficient, modular adaptation.
- **Mistral**: Maintains a high but diffuse $$L(t)$$ profile, suggesting scattered reorganization without clear thematic focus.
- **Gemma**: Shows balanced adaptation effort, maintaining mid-range $$L(t)$$ across turns.
- **Phi-2** & **GPT-NeoX**: Operate with low $$L(t)$$, reflecting shallow adaptation and limited representational transformation.

### Epistemic Drift and Stability

Epistemic drift $$D$$, computed with Fisher–Rao geodesic length, curvature energy, and the belief action functional, measures the directional evolution of internal beliefs:

- **LLaMA-2** & **Gemma**: Exhibit goal-directed adaptation with $$\kappa \approx 1$$, indicating purposeful but stable drift.
- **Mistral**: Shows $$\kappa \gg 1$$, a signature of erratic instability and uncontrolled thematic shifts.
- **Phi-2** & **GPT-NeoX**: Maintain low $$D$$, revealing stasis and a lack of meaningful epistemic progression.

### Torsion and Reorientation

Epistemic torsion $$\tau(t)$$ captures out-of-plane twisting in belief trajectories, signaling reorientation or instability:

- **LLaMA-2**: Occasional torsion spikes align with genuine topic shifts or perspective changes.
- **Mistral**: Experiences episodic bursts of torsion without consistent thematic alignment.
- **Gemma**: Shows moderate torsion correlated with meaningful redirection.
- **Phi-2** & **GPT-NeoX**: Minimal torsion, suggestive of stability that may verge on rigidity.

In vector field visualizations, LLaMA-2's trajectories appear smooth and compact, whereas Mistral's exhibit turbulence, especially in later layers.

### Semantic Coherence Analysis

Semantic coherence $$C(t)$$ measures alignment both vertically (across layers within a turn) and temporally (across turns within a layer):

- **LLaMA-2**: Maintains coherence the longest, resisting fragmentation even in extended dialogues.
- **Mistral**: Coherence drops early, with temporal consistency degrading faster than vertical coherence.
- **Gemma**: Balances vertical and temporal coherence, though gradual decline is still evident.
- **Phi-2** & **GPT-NeoX**: Maintain vertical coherence but lose temporal alignment, resulting in thematic stagnation.

### Key Takeaways

Overall, **LLaMA-2** emerges as the most balanced performer, combining high retention, efficient adaptation, and stable yet flexible belief evolution. **Mistral** demonstrates strong early creativity but struggles with long-term stability and coherence. **Gemma** provides consistent mid-tier performance across all metrics, whereas **Phi-2** and **GPT-NeoX** exhibit limited epistemic activity, making them vulnerable to thematic stagnation in sustained conversations.

### Correlation with Human Judgments

| **Model** | **Metric** | **Coherence** | **Consistency** | **Factuality** | **Fluency** | **Engagement** |
|-----------|------------|---------------|-----------------|----------------|-------------|----------------|
| **LLaMA** | **ORBIT (ours)** | **0.78** | **0.74** | 0.71 | 0.58 | 0.63 |
| | GRADE | 0.69 | 0.66 | 0.63 | 0.59 | 0.54 |
| | BLEURT | 0.61 | 0.60 | 0.70 | **0.67** | 0.47 |
| | G-Eval | 0.67 | 0.64 | **0.73** | 0.65 | 0.49 |
| | USR | 0.62 | 0.63 | 0.58 | 0.57 | **0.66** |
| **Mistral** | **ORBIT (ours)** | **0.75** | **0.71** | 0.69 | 0.61 | 0.60 |
| | GRADE | 0.68 | 0.65 | 0.62 | 0.59 | 0.55 |
| | BLEURT | 0.63 | 0.59 | 0.71 | **0.66** | 0.48 |
| | G-Eval | 0.66 | 0.63 | **0.73** | 0.64 | 0.49 |
| **Gemma** | **ORBIT (ours)** | **0.77** | **0.70** | **0.74** | 0.60 | 0.59 |
| | GRADE | 0.66 | 0.64 | 0.65 | 0.58 | 0.56 |
| | BLEURT | 0.63 | 0.59 | 0.71 | **0.66** | 0.46 |
| | G-Eval | 0.65 | 0.67 | 0.72 | 0.64 | 0.54 |
| | USR | 0.64 | 0.62 | 0.60 | 0.56 | **0.65** |
| | BERTScore | 0.54 | 0.56 | 0.61 | 0.59 | 0.43 |
| **Phi-2** | **ORBIT (ours)** | **0.73** | **0.68** | **0.70** | 0.56 | 0.57 |
| | GRADE | 0.64 | 0.61 | 0.61 | 0.55 | 0.52 |
| | BLEURT | 0.59 | 0.57 | 0.68 | **0.64** | 0.44 |
| | G-Eval | 0.62 | 0.60 | 0.69 | 0.62 | 0.47 |
| | USR | 0.60 | 0.59 | 0.56 | 0.54 | **0.62** |
| | BERTScore | 0.51 | 0.53 | 0.58 | 0.57 | 0.40 |
| **GPT-NeoX** | **ORBIT (ours)** | **0.72** | **0.67** | **0.68** | 0.55 | 0.56 |
| | GRADE | 0.63 | 0.60 | 0.60 | 0.54 | 0.51 |
| | BLEURT | 0.58 | 0.56 | 0.67 | **0.63** | 0.43 |
| | G-Eval | 0.61 | 0.59 | 0.68 | 0.61 | 0.46 |
| | USR | 0.59 | 0.58 | 0.55 | 0.53 | **0.61** |
| | BERTScore | 0.50 | 0.52 | 0.57 | 0.56 | 0.39 |

This table reports Pearson correlations across five dialogue dimensions—**coherence**, **consistency**, **factuality**, **fluency**, and **engagement**—for five LLMs. Cell colors indicate alignment strength (<span style='color: #006600'>**green**</span> = high, <span style='color: #CCAA00'>**yellow**</span> = moderate, <span style='color: #CC0000'>**red**</span> = low). **ORBIT (ours)** achieves the strongest overall alignment with human ratings, especially on structure-dependent dimensions like coherence and consistency. ORBIT achieves superior correlation with human judgments across five dialogue dimensions, with the framework particularly excelling in structure-dependent dimensions like coherence and consistency, achieving correlations of **0.72-0.78** compared to traditional metrics like BLEURT (0.58-0.63) and G-Eval (0.59-0.67). Slightly lower performance on fluency and engagement reflects ORBIT's focus on epistemic dynamics over stylistic flow, distinguishing it from fluency-optimized metrics such as BLEURT and G-Eval.

### The nDNA Multi-turn Dialogue Formulation

We define $$\text{nDNA}_{\text{mtd}}$$ as an *aggregate epistemic signature* computed across $$L$$ transformer layers and $$T$$ dialogue turns:

$$
\textbf{nDNA}_{\text{mtd}} = \frac{1}{L} \sum_{\ell=1}^{L} \left[
\left\| \vec{v}_\ell(T) - \vec{v}_\ell(1) \right\|
+ \lambda_F \int_1^T \dot{\gamma}_\ell(t)^\top I_\ell(t) \dot{\gamma}_\ell(t) \, dt
+ \lambda_C \sum_{t=2}^{T-1} \left\| J_\ell(t+1) - J_\ell(t) \right\|^2
+ \lambda_S H_\ell \cdot \log T
+ \lambda_A \int_1^T \left( \frac{1}{2} \|\dot{\gamma}_\ell(t)\|^2 + U_\ell(\gamma_\ell(t)) \right) dt
\right]
$$

This formulation integrates five trajectory-sensitive components:

- **Drift Term**: Measures endpoint deviation in latent belief space {% cite li2023evaluating %}{% cite ganguli2022predictability %}
- **Fisher-Rao Term**: Captures information-geometric displacement {% cite amari2016information %}{% cite mialon2023augmented %}
- **Curvature Energy**: Quantifies semantic instability via temporal variations {% cite muller2021curvature %}{% cite zhang2021hidden %}
- **Spectral Entropy**: Encodes memory retention through spectral dispersion {% cite huang2022spectral %}{% cite dong2021attention %}
- **Belief Action**: Integrates semantic movement and potential minimization {% cite park2023minimumaction %}{% cite chen2023structure %}

#### Formulation of $$\text{nDNA}_{\text{mtd}}$$: A Unified Epistemic Trajectory Descriptor

We define $$\text{nDNA}_{\text{mtd}}$$ as an *aggregate epistemic signature* computed across $$L$$ transformer layers and $$T$$ dialogue turns, integrating five trajectory-sensitive components that characterize the evolving belief landscape of a model. Each term is modulated by tunable weights ($$\lambda_F, \lambda_C, \lambda_S, \lambda_A$$) and grounded in principled signal interpretations:

- **Drift Term**: Measures endpoint deviation in latent belief space, $$\|\vec{v}_\ell(T) - \vec{v}_\ell(1)\|$$, as an indicator of semantic shift over the dialogue trajectory {% cite li2023evaluating %}{% cite ganguli2022predictability %}.
- **Fisher-Rao Term**: Captures the information-geometric displacement using the Fisher-Rao metric, computed as $$\int_1^T \dot{\gamma}_\ell(t)^\top I_\ell(t) \dot{\gamma}_\ell(t)\, dt$$ {% cite amari2016information %}{% cite mialon2023augmented %}.
- **Curvature Energy**: Quantifies semantic instability via temporal variations in the Jacobian, $$\sum_{t=2}^{T-1} \|J_\ell(t+1) - J_\ell(t)\|^2$$, reflecting latent torsion {% cite muller2021curvature %}{% cite zhang2021hidden %}.
- **Spectral Entropy**: Encodes memory retention by computing $$H_\ell \cdot \log T$$ based on spectral dispersion in the representation space {% cite huang2022spectral %}{% cite dong2021attention %}.
- **Belief Action**: Inspired by energy-based trajectory control, it integrates semantic movement and potential minimization: $$\int_1^T \left( \frac{1}{2} \|\dot{\gamma}_\ell(t)\|^2 + U_\ell(\gamma_\ell(t)) \right) dt$$ {% cite park2023minimumaction %}{% cite chen2023structure %}.

Here, $$\vec{v}_\ell(t) \in \mathbb{R}^d$$ denotes the mean pooled representation at layer $$\ell$$ and turn $$t$$; $$\dot{\gamma}_\ell(t)$$ the semantic velocity; $$I_\ell(t)$$ the Fisher information matrix; $$J_\ell(t)$$ the semantic Jacobian; $$H_\ell$$ the spectral entropy; and $$U_\ell(\cdot)$$ a belief potential function approximated from representation norms or logit dynamics. Together, these components yield a compact, expressive, and biologically inspired descriptor of epistemic evolution in multi-turn dialogue.

### Belief Trajectories Visualization

{% include visualization.liquid
   image_path="Figures/belief_trajectories_comparison_refined.png"
   caption="**Belief Trajectories in Latent Space: $$\text{nDNA}_{\text{mtd}}$$ across Five Language Models.** This figure visualizes the *epistemic trajectory* of each LLM over a 30-turn dialogue, projected onto the top three principal components of belief representations $$\vec{v}_\ell(t)$$. **<span style='color: #CC6600'>Gemma</span>** follows a *smooth, parabolic arc* with minimal angular distortion—indicative of **low curvature energy** and **high spectral coherence**. **<span style='color: #800080'>LLaMA 3</span>** exhibits *moderate global drift* with **compact torsional clusters**, implying a *stable epistemic core* but flexible local updates. **<span style='color: #006600'>Mistral</span>** remains *spatially localized*, forming tight oscillatory loops with **low epistemic entropy**. **<span style='color: #0066CC'>Phi-2</span>** traverses a *long, winding path* with frequent sharp inflections, indicative of **high torsion** and **Fisher-Rao energy**. **<span style='color: #CC0000'>GPT-NeoX</span>** demonstrates *sharp angular jumps* and frequent direction reversals—symptoms of **epistemic turbulence**." %}

#### Model-Specific Trajectory Analysis

The epistemic trajectories reveal distinct behavioral signatures for each model:

- **<span style='color: #CC6600'>Gemma</span>**: Follows a *smooth, parabolic arc* with minimal angular distortion—indicative of **low curvature energy**, **high spectral coherence**, and energy-efficient transitions. Its path suggests well-structured epistemic consolidation.
- **<span style='color: #800080'>LLaMA 3</span>**: Exhibits *moderate global drift* with **compact torsional clusters**, implying a *stable epistemic core* but flexible local updates. This behavior aligns with elevated **thermodynamic length** and moderate **belief action**.
- **<span style='color: #006600'>Mistral</span>**: Remains *spatially localized*, forming tight oscillatory loops. It demonstrates **low epistemic entropy**, **minimal drift norm**, and high coherence—reflecting conservative belief adaptation.
- **<span style='color: #0066CC'>Phi-2</span>**: Traverses a *long, winding path* with frequent sharp inflections, indicative of **high torsion** and **Fisher-Rao energy**. Despite rich semantic exploration, the erratic belief updates elevate its overall $$\text{nDNA}_{\text{mtd}}$$.
- **<span style='color: #CC0000'>GPT-NeoX</span>**: Demonstrates *sharp angular jumps*, frequent direction reversals, and disconnected belief states. These are symptoms of **epistemic turbulence**—yielding high curvature, spectral entropy collapse, and unstable dialogue grounding.

## Conclusion

**Beyond Turn-Level Judgments: A New Epistemic Lens for Dialogue Evaluation**

We introduce **ORBIT**, a geometric and epistemic framework for evaluating multi-turn dialogue models by probing not just *what* models say, but *how* their internal belief trajectories evolve over time. Our results demonstrate that standard surface-level metrics fail to capture the nuanced failures and strengths of alignment across turns. By tracing metrics such as *spectral memory retention*, *thermodynamic length*, *epistemic drift*, and *latent torsion*, ORBIT reveals the hidden structure of model cognition—where alignment is not merely a scalar, but a trajectory of beliefs in motion.

**LLaMA-2** emerges as the most balanced performer, combining high retention, efficient adaptation, and stable yet flexible belief evolution. **Mistral** demonstrates strong early creativity but struggles with long-term stability. **Gemma** provides consistent mid-tier performance, while **Phi-2** and **GPT-NeoX** exhibit limited epistemic activity.

As large language models scale in complexity and conversational depth, evaluation must shift from static outputs to dynamic epistemic traces. ORBIT offers a first step in this paradigm shift—*from rating answers to tracing reasoning*. Future directions include extending ORBIT to *multilingual* and *multimodal* agents, integrating belief trajectory tracing with policy optimization, and benchmarking long-horizon reasoning across real-world dialogues.

---

{% auto_references %}

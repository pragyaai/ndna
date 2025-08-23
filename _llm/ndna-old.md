---
layout: ndna
title: nDNA
---

# nDNA

## Introduction to nDNA

**nDNA**—short for *Neural DNA*—is a semantic-genotypic representation that captures the latent identity of foundation models through the intrinsic geometry of belief. It is synthesized from three indispensable dimensions of latent geometry: spectral curvature, thermodynamic length, and belief vector fields. These dimensions converge to unveil an underlying epistemic cognitive geometry. The resulting structure is a high-dimensional scaffold of internal cognition—a latent topography called nDNA.

## What Qualifies as Heritability in Artificial Cognition?

Before we unveil **nDNA**, we must confront a foundational question: *What qualifies as heritability in artificial cognition*? Conventional artifacts—weights, activations, or output behavior—are mere epiphenomena of training. In contrast, nDNA seeks to capture a model’s **semantic genome**: the latent organizational structures that govern how knowledge is internally represented, adapted, and transmitted across fine-tuning, distillation, pruning, and deployment.

To chart the **semantic ancestry** of AI systems, we must move beyond output-level metrics and embrace a deeper epistemic foundation—one that traces not just *what* models say, but *how* they reason, evolve, and remember. We argue that **nDNA constitutes this missing genomic trace**: a structured latent fingerprint of artificial cognition.

Just as molecular genetics enabled biology to transcend surface taxonomies and uncover causal mechanisms, we contend that a **genomic lens is now essential for machine learning**—one that can quantify:

---

## Layer Importance and Semantic Specialization

Not all layers contribute equally to a model's epistemic structure. Evidence shows that **semantic representations, cultural memory, and alignment behavior concentrate in mid-to-upper transformer layers**—particularly the final 10 layers in 30-layer models. These layers encode deep semantic priors and value shifts. For nDNA to serve as a meaningful genomic diagnostic, it must trace **inheritance**, **drift**, and **trait transformation** across these epistemically sensitive regions.

---

## Semantic Drift and Heritable Traits

Subtle misalignments and persistent divergences—documented in alignment studies—can occur even when models appear behaviorally consistent. These are **not superficial perturbations**, but **inheritable epistemic traits** passed along neural offspring.

---

## Value Simulation vs. Internalization

As models become more context-sensitive, they can **simulate alignment without internalizing values**. Disentangling genuine normative internalization from **strategic mimicry** is essential for meaningful epistemic inspection.

---

## Plasticity and Collapse

Aggressive fine-tuning, distillation, or ideological merging can induce **plasticity collapse**—a reduction in epistemic flexibility and semantic richness. This demands **metrics that trace robustness and degeneration** over time.

---

## Latent Cultural Conflict

In multilingual or cross-cultural settings, models often encode **conflicting or incoherent value systems**. These conflicts are **not visible through surface metrics like BLEU or ROUGE**—they reside in the model's **latent belief structure** and must be surfaced through **geometric lineage analysis**.

---

## Topological Continuity

Alignment and fine-tuning **warp the internal geometry** of models in nontrivial ways. nDNA must preserve **continuity and interpretability** of semantic trajectories across these transformations.

---

## Epistemic Mutation

Merging preferences, annotator distributions, or learned behaviors creates **emergent traits** that standard metrics cannot track. These **mutations** are only diagnosable through a genomic lens focused on **representation evolution**.

---

## Why nDNA?

nDNA empowers us to interrogate the **hidden geometry of learning**—revealing how foundational operations such as alignment, fine-tuning, quantization, pruning, and multilingual fusion subtly but systematically reshape a model's **semantic core**.

It uncovers:
- Cultural instabilities from regional adaptation  
- Asymmetric inheritance across neural offspring  
- Latent reorganizations from merging or distillation  
- A model’s capacity to absorb or resist **conflicting epistemic pressures**

These phenomena—often dismissed as quirks—are in fact **heritable traits etched into the model’s internal manifold**. Viewed through this lens, **model collapse**, **alignment-induced drift**, and **semantic mimicry** become **structural signatures** of deeper latent dynamics.

---

## A Scientific Grammar for Cognition

nDNA transcends metaphor to become a **scientific grammar** for measuring:
- Epistemic resilience  
- Semantic coherence  
- Cultural consistency  
- Trait inheritance

It offers a **principled lens** through which to govern, understand, and audit the evolving anatomy of artificial cognition.

---

## Cultural Provenance and Layerwise Calibration

We further posit that **cultural provenance induces a distinct layerwise calibration effect**, predominantly in the final decoder layers $$\ell \in [20, 30]$$, where **sociolinguistic priors** exert the strongest influence on output distribution.

To capture this, we introduce the **nDNA Score**—a composite diagnostic unifying:

1. **Spectral Curvature** $$\kappa_\ell$$: Reflecting the **compression and warping of conceptual flow**  
2. **Thermodynamic Length** $$L_\ell$$: Quantifying the **epistemic effort** required for belief transitions  
3. **Belief Vector Field Norm** $$\|v^{(c)}_\ell\|$$: Measuring the **directional intensity of latent cultural drift**

Together, these form a **latent semantic fingerprint**—a high-dimensional, biologically inspired signature of internal cognition—enabling us to trace, compare, and govern the **neural evolution of foundation models** with unprecedented granularity.



## The Core Triad of nDNA

nDNA integrates three foundational signals to form a latent cognitive fingerprint. Each component captures a distinct dimension of semantic dynamics:

---

### 1. Spectral Curvature \( $ \kappa_\ell $ \) 

## What is Spectral Curvature?

In classical geometry, **curvature** quantifies how much a path deviates from being straight—measuring the local bending of a trajectory.

In **spectral geometry** and **harmonic analysis**, curvature extends to how signals or paths behave in frequency space or under structure-encoding operators (e.g., Laplacians, difference operators). **Spectral curvature** refers to curvature derived through such operators—capturing the shape of latent signals as they evolve across layers of a model.

---

## Why Spectral Curvature for Latent Manifolds?

In foundation models, hidden representations form a sequence of activations:

$$
\{ h_\ell \}_{\ell=0}^{L}
$$

These activations trace a **path in high-dimensional latent space**, encoding the model’s internal conceptual flow—how its beliefs evolve as it integrates priors, inputs, and alignment constraints.

**Spectral operators** (e.g., discrete Laplacians) naturally quantify how this path bends or accelerates. Unlike distance-based metrics, **spectral curvature reflects intrinsic shape**, invariant under reparameterization, making it ideal for probing internal geometry.

---

## Mathematical Formulation

Let the hidden activation at each layer be:

$$
h_\ell \in \mathbb{R}^d
$$

### First-order difference:

$$
\Delta h_\ell := h_\ell - h_{\ell-1}
$$

This approximates **local directional change**—a discrete analogue of velocity in latent space.

### Second-order difference (discrete curvature):

$$
\Delta^2 h_\ell := \Delta h_{\ell+1} - \Delta h_\ell = h_{\ell+1} - 2h_\ell + h_{\ell-1}
$$

This acts like a **discrete Laplacian** along the latent trajectory, highlighting where internal belief flow deviates from a straight path.

### Spectral Curvature:

$$
\kappa_\ell := \|\Delta^2 h_\ell\| = \|h_{\ell+1} - 2h_\ell + h_{\ell-1}\|
$$

In the continuous case, this corresponds to:

$$
\kappa(s) = \left\| \frac{d^2 h(s)}{ds^2} \right\|
$$

where $$s$$ parameterizes depth through the network. The discrete $$\kappa_\ell$$ serves as a **practical, layerwise estimator** of curvature.

---

## Why Is This Meaningful?

**Peaks in $$\kappa_\ell$$** indicate layers where the model’s **internal geometry is most dynamic**—zones of:

- Semantic inflection  
- Belief compression  
- Ideological absorption

These are **structural signatures of epistemic adaptation**, essential for tracing **cultural inheritance** and **alignment-induced drift** in foundation models.

---

## Lineage and Context

Spectral curvature draws on ideas from:

- **Geometric deep learning**  
- **Equivariant architectures**  
- **Ricci flow in ML**  
- **Spectral graph theory** (see: 33–42)

Within the **nDNA framework**, spectral curvature functions as a **principled geometric fingerprint**, revealing not just *what* is encoded, but *how* internal belief pathways have been **reshaped to encode it**.

---

## Visualizing Spectral Curvature

**Figure 1** illustrates how spectral curvature:

$$
\kappa_\ell := \|h_{\ell+1} - 2h_\ell + h_{\ell-1}\|
$$

quantifies second-order deviations in latent representations across transformer layers. **High curvature** often emerges in **upper decoder layers**:

$$
\ell \in [21, 30]
$$

These layers are where models accommodate **sociolinguistic priors**, undergo **multicultural or multilingual fusion**, and reflect **ideologically loaded or epistemically volatile regions**.

Curvature in this context captures **latent inheritance dynamics**, serving as a **fine-grained geometric fingerprint** of internal restructuring and cultural adaptation.

<img src="assets/gifs/introduction/spectral_curvature.gif" alt="Spectral Curvature" width="50%">

---

### 2. Thermodynamic Length \( $ L_\ell  $\)

## What is Thermodynamic Length?

In **statistical thermodynamics** and **information geometry**, **thermodynamic length** measures the **cumulative effort—or work—required for a system to transition between states** on a statistical manifold. It integrates local gradient energy along a trajectory, providing an **intrinsic cost measure** that is independent of parametrization.

---

## Why Thermodynamic Length for Foundation Models?

In foundation models, **layers trace a path through latent belief space**. As input data and alignment priors reshape activations, the model **expends internal computational effort** to adjust its belief state.

**Thermodynamic length quantifies this latent effort**—measuring not just *what* the model knows, but **how hard it works** to adapt that knowledge across layers in response to **epistemic pressures** such as:

- Cultural fusion  
- Alignment shifts  
- Semantic restructuring

---

## Mathematical Intuition

Let $$h_\ell$$ denote the latent state at layer $$\ell$$, and let $$\mathcal{M}$$ be the model’s latent manifold. Layer transitions define a curve:

$$
\gamma : [0, L] \to \mathcal{M}
$$

The **thermodynamic length** of $$\gamma$$ is:

$$
L(\gamma) = \int_0^L \sqrt{ \langle \dot{\gamma}(s), G_{\text{Fisher}} \, \dot{\gamma}(s) \rangle } \, ds
$$

where $$G_{\text{Fisher}}$$ is the **Fisher information metric**. This integral represents the **intrinsic work** needed to traverse the belief trajectory $$\gamma$$ on $$\mathcal{M}$$.

---

## Interpretation

High **thermodynamic length** indicates **regions where latent geometry stretches**—where the model undergoes substantial **reconfiguration** to reconcile prior beliefs with new input.

Zones of high $$L_\ell$$ reveal:
- Alignment tension  
- Cultural fusion  
- Complex reasoning  
- Internal scaffold strain

This offers a window onto the model’s **latent energy budget**—how internal belief states reshape to meet complexity, constraint, and context.

---

## Discrete Formulation

Let $$p_\ell(y|x)$$ be the model’s **conditional distribution** at layer $$\ell$$. The **local epistemic cost** is given by:

$$
\|\nabla_\theta \log p_\ell(x)\|^2
$$

This measures **how much adjustment** is needed locally at layer $$\ell$$ to better fit input $$x$$. Then, **thermodynamic length** at layer $$\ell$$ is:

$$
L_\ell := \sum_{x \in D} \|\nabla_\theta \log p_\ell(x)\|^2 = |D| \cdot \mathbb{E}_{x \sim D} \|\nabla_\theta \log p_\ell(x)\|^2
$$

This captures both the **average local effort** and how it **scales with dataset size**.

---

## Geometric Interpretation

In differential geometric terms, thermodynamic length can also be written as a **path energy integral**:

$$
L_\ell = \int_{\gamma_\ell} \left\langle \frac{d h_\ell}{ds}, G_{\text{Fisher}}(h_\ell) \frac{d h_\ell}{ds} \right\rangle ds
$$

where:
- $$h_\ell$$ represents latent trajectories  
- $$G_{\text{Fisher}}$$ is the Fisher information metric  
- $$s$$ is arc length along $$\gamma_\ell$$

This integral reflects **how much internal “heat” or computational work** is generated to reconcile the model’s **prior state with new input** at layer $$\ell$$.

---

## Why Is This Meaningful?

Unlike static metrics like **weight magnitudes**, $$L_\ell$$ is **dynamically grounded**. It reveals where the model **actively strains** to reconcile **competing epistemic demands**.

High $$L_\ell$$ signals:
- Internal resistance  
- Belief restructuring  
- Compression under tension  
- Response to multilingual or cultural shifts

---

## Lineage and Context

This diagnostic builds on:
- The **Fisher–Rao metric** in information geometry  
- **Thermodynamic length** formalism from statistical physics (see: 33, 43–45)

Within the **nDNA framework**, thermodynamic length complements **spectral curvature**: while curvature reveals *where* the model bends, $$L_\ell$$ shows **how hard it works** to do so.

Together, these axes form a **neurogeometric anatomy** of latent belief adaptation.

---

## Visualizing Thermodynamic Length

**Figure 2** shows thermodynamic length:

$$
L_\ell := \sum_{x \in D} \|\nabla_\theta \log p_\ell(x)\|^2
$$

It quantifies **epistemic work** across transformer layers—computed as the **cumulative squared gradient norm** of layerwise log-likelihoods.

Peaks in $$L_\ell$$ highlight:
- **Belief compression**  
- **Alignment restructuring**  
- **Negotiation of conflicting priors**

In culturally fine-tuned models, these peaks typically **localize to upper decoder layers**, where **intense adaptation** occurs near output-generating blocks.

Within **nDNA**, this metric **reveals latent epistemic effort**—providing a nuanced view of **how and where** models allocate internal resources during learning and inference.

<img src="assets/gifs/introduction/Final_thermodynamic_length.gif" alt="Thermodynamic Length" width="50%">

---

### 3. Belief Vector Field \( $ \|v^{(c)}_\ell\| $ \)

## What is the Belief Vector Field?

In differential geometry and physics, a **vector field** describes a directional force applied at each point of a space. Inspired by this, the **Belief Vector Field** models the **directional semantic force** that a specific culture or value system exerts on a model’s latent representations. 

It encodes **where**, **how strongly**, and **in what direction** cultural priors act within the model’s internal geometry—functioning as a **semantic compass** through the latent manifold.

---

## Why a Vector Field for Cultural Influence?

While **spectral curvature** \( \kappa_\ell \) captures how sharply latent paths bend, and **thermodynamic length** \( L_\ell \) captures how hard the model works during adaptation, **neither reveals the source, direction, or origin** of that adaptation.

The **Belief Vector Field** offers this missing piece: it traces the **latent steering** (aka torsion) applied by culture-conditioned priors—**where** the model is being pushed in latent space, by **what epistemic force**, and **toward which semantic direction**.

This makes it a critical diagnostic for studying:

- Cultural drift  
- Ideological imprinting  
- Alignment tension  

---

## Visualization

**Figure 3: Belief Vector Field Visualization**

$$
v^{(c)}_\ell = \mathbb{E}_{x \sim P^{(c)}_{\text{CIVIC}}} \left[ \nabla_{h_\ell} \log p(y | x) \right]
$$

This represents the **belief semantic steering force** at layer \( \ell \) toward concept \( c \), conditioned on CIVIC cultural priors (cf. Sec. 6).

- Large magnitudes \( \| v^{(c)}_\ell \| \in [0.15, 0.50] \) indicate **strong directional pressure**—zones where cultural values actively **reshape latent geometry**.
- Color-coded arrows trace **distinct conceptual trajectories** (*protest, peace, order, power, disobedience, justice*).
- Numeric labels quantify **local steering strength**.

Upper layers \( \ell \geq 20 \) typically exhibit **epistemic reorientation**, where cultural priors most heavily influence belief encoding.

Such visualizations reveal whether a model **internalizes culturally contingent reasoning** or merely mimics alignment at the **output surface**.

---

## Mathematical Formulation

Let \( p(y \mid x) \) denote the model’s conditional output distribution for input \( x \), and let \( h_\ell \) be the latent representation at layer \( \ell \).

The **local belief gradient** is:

$$
\nabla_{h_\ell} \log p(y \mid x)
$$

This measures how a small change in \( h_\ell \) would affect output confidence—a **proxy for semantic force** at that layer.

To extract the culturally conditioned semantic force, we compute its expectation over a culture-specific distribution \( P^{(c)} \):

### Belief Vector Field at layer \( \ell \):

$$
v^{(c)}_\ell := \mathbb{E}_{x \sim P^{(c)}} \left[ \nabla_{h_\ell} \log p(y \mid x) \right]
$$

Here, \( P^{(c)} \) represents inputs **emblematic of a given manifold condition** \( c \) (e.g., regional, linguistic, or ideological contexts).

This formulation captures **not just latent deformation, but its cause**: how **cultural priors exert directional influence** within the belief manifold.

---

## Why is This Meaningful?

The vector field \( v^{(c)}_\ell \) provides a **directional lens on latent dynamics**.

- High \( \| v^{(c)}_\ell \| \): regions where the model is actively **redirected by external cultural forces**
- Offers diagnostic power for detecting:
  - Ideological drift  
  - Semantic conflict  
  - Bias inheritance  

Unlike \( \kappa_\ell \) or \( L_\ell \), which capture **internal geometry**, \( v^{(c)}_\ell \) reveals **external epistemic pressure** and its **directional impact**.

---

## Lineage and Context

This diagnostic builds upon:

- **Belief geometry**  
- **Alignment drift studies**  
- **Cultural bias tracing in NLP** ([5], [18], [46]–[53])

Within the **nDNA framework**, it integrates with **curvature** and **length** to offer a **holistic neurogeometric portrait**—revealing:

- How models **inherit** beliefs  
- Where they **adapt** under cultural force  
- When they **distort** or **realign** due to ideological influence  

---

## Interpretability in Practice

By mapping \( v^{(c)}_\ell \) across **layers** and **cultures**, we can:

- Trace **cultural provenance**  
- Identify **ideological pressure zones**  
- Diagnose **inheritance asymmetry** in **multilingual** or **aligned models**

This **directional fingerprint** informs audits of:

- Model bias  
- Robustness  
- Alignment integrity  

It provides the **missing vectorial dimension** in understanding machine cognition.

<img src="assets/gifs/introduction/belief_vector_field.gif" alt="Belief Vector Field" width="50%">

---

## The nDNA Score

### Why a unified score?

While spectral curvature ($$\kappa_\ell$$), thermodynamic length ($$L_\ell$$), and the belief vector field norm ($$\|v^{(c)}_\ell\|$$) each offer unique insight into latent dynamics, they operate on distinct facets of epistemic geometry.

The **nDNA score** is a cumulative measure of latent geometry, quantifying how a large language model adapts its internal scaffolding to a given corpus. It integrates three key components at each layer $$\ell$$:

- **Curvature ($$\kappa_\ell$$):** how twisted or bent the latent manifold is; captures how sharply internal trajectories bend — a scalar measure of latent acceleration.  
- **Length ($$L_\ell$$):** how much latent work or displacement occurs as representations evolve; quantifies how hard the model works to adapt its beliefs — a scalar effort integral.  
- **Belief vector norm ($$\|v^{(c)}_\ell\|$$):** how strong the model’s belief signal is for that corpus; encodes where and how strongly cultural priors steer latent space — a scalar magnitude derived from the vector field.

### Formal Definition

The **nDNA score** is defined as:

$$
\text{nDNA} := \sum_{\ell=1}^L \omega_\ell \cdot \kappa_\ell \cdot L_\ell \cdot \|v^{(c)}_\ell\|
$$

where:

- $$\omega_\ell$$ is the layer weight to emphasize semantically expressive or epistemically significant layers (e.g., decoder tops),  
- $$\kappa_\ell$$ is spectral curvature,  
- $$L_\ell$$ is thermodynamic length,  
- $$\|v^{(c)}_\ell\|$$ is the magnitude of the belief vector field conditioned on culture $$c$$.

---

### Why multiply these?

Individually, the terms illuminate:

- **Latent strain** ($$\kappa_\ell$$),  
- **Adaptation cost** ($$L_\ell$$),  
- **Cultural pressure** ($$\|v^{(c)}_\ell\|$$).  

Together, their **product** gives a unified diagnostic of **latent reconfiguration** — indicating where internal bending, belief effort, and epistemic steering all co-occur.

The weight $$\omega_\ell$$ can be:

- Uniform across layers,  
- Hand-tuned based on epistemic depth,  
- Optimized via alignment or interpretability objectives.

---

### Interpretability & Practical Use

The **nDNA score** enables:

- Comparison of parent vs. child models (fine-tuning, distillation, merging),  
- Detection of **semantic mutation**, **ideological drift**, or **inheritance asymmetry**,  
- Quantification of **latent epistemic integrity** — the hidden cost and directionality of adaptation.

### Conviction

By unifying spectral ($$\kappa_\ell$$), thermodynamic ($$L_\ell$$), and vectorial ($$\|v^{(c)}_\ell\|$$) diagnostics, the **nDNA score** acts as a **heritable geometry index**, diagnosing how **latent traits persist, mutate, or degrade** as foundation models evolve.

<img src="assets/gifs/introduction/ndna_refined_story.gif" alt="nDNA Composite" width="50%">

---

## nDNA Geometry

The notion of **nDNA** arises from a simple yet profound insight: modern foundation models do not merely produce outputs—they embody a **latent cognitive structure** that governs how they reason, adapt, and evolve (7; 48). This latent structure is not directly encoded in model weights or activations alone; rather, it emerges in the internal geometry of belief formation, semantic flow, and epistemic adaptation across layers (24; 41).

We define the **nDNA geometry** of a model as the joint distribution of its spectral curvature ($$\kappa_\ell$$), thermodynamic length ($$L_\ell$$), and belief vector field norm ($$\|v^{(c)}_\ell\|$$) layer-by-layer. This triad forms a high-dimensional semantic fingerprint that encodes a model’s inheritance stability, alignment dynamics, and cultural drift—analogous to how biological DNA records heritable traits and mutations (32; 47).

### Table 1: Illustrative nDNA Example

<img src="assets/gifs/introduction/nDNA_matrics.png" alt="nDNA Geometry Table" width="50%">


Table 1 provides an illustrative example of nDNA geometry, highlighting how these quantities vary across depth in a representative model. Rather than simple monotonic trends, we observe intricate layer-wise patterns:

- Certain layers exhibit elevated curvature ($$\kappa_\ell > 0.06$$), signaling sharp latent reorientation (34),  
- Others concentrate thermodynamic length ($$L_\ell > 1.10$$), reflecting zones of intense internal work to reconcile competing priors (43; 44),  
- The belief vector norm ($$\|v^{(c)}_\ell\|$$) exposes the directional cultural force acting on the latent manifold (5; 49), marking layers where external alignment or sociolinguistic conditioning exerts greatest influence.

Together, these values form a geometry-specific trace that distinguishes models by their latent adaptation history.

---

# The Corpus Dependence of nDNA: A Necessary Feature, Not a Flaw

In biological systems, DNA is celebrated as the universal code of life—a sequence of nucleotides that, across all known organisms, governs the development, function, and inheritance of traits (54; 55). Yet despite this universal structure, the functional expression of DNA is profoundly context-dependent.

The same genome, when expressed in different cellular contexts, gives rise to vastly different phenotypes: for instance, neurons and hepatocytes arise from identical genetic material yet serve radically different functions (56; 57). This context-sensitive expression is orchestrated through layered regulatory mechanisms, including epigenetic modifications (56), transcription factor (TF) binding (58), and chromatin architecture remodeling (59; 60). These mechanisms form a hierarchical, probabilistic regulatory network that determines gene expression patterns in response to developmental and environmental cues (61).

Figure 5 illustrates a hierarchical regulatory framework where universal DNA undergoes epigenetic modifications and context-specific transcription factor actions to produce specialized gene expression programs. Analogously, in large language models, this layered structure parallels nDNA latent scaffolding that encodes both universal priors and task-dependent adaptations, enabling coherent, flexible, and robust functional diversity across domains.

Similarly, in large foundation models, the neural DNA (nDNA)—a composite measure of latent geometry encompassing spectral curvature ($$\kappa$$) (66), thermodynamic length ($$L$$) (67), and latent belief vector norms (63)—exhibits both universal structure and corpus-specific adaptation.

LLMs encode universal latent priors through pretraining: architectural invariances (68), semantic manifolds (69; 70), and attention-based relational structures (64). However, when probed with different corpora such as mathematical reasoning benchmarks (e.g., GSM8K (71)), dialogue datasets (e.g., MultiWOZ (72)), or encyclopedic QA (e.g., SQuAD (73)), the model activates distinct latent scaffolding, producing task-specific geometric pathways.

In both systems, structured variation emerges as a necessity: in biology, to produce functional diversity across cell types; in LLMs, to scaffold reasoning across tasks while maintaining alignment and generalization (70; 71). Like tissue-specific gene expression, corpus-dependent nDNA scaffolding follows precise, learned priors rather than arbitrary variation. Mathematical models of both systems reduce to path integrals over conditional cost:

$$
S(c) = \int_{\gamma_c} C(h_\ell; c) \, ds
$$

where $$\gamma_c$$ is the pathway for context $$c$$ (cell type or corpus), and $$C$$ reflects regulatory or loss cost.

Where DNA differentiates cells, nDNA differentiates reasoning. Both systems achieve functional coherence through context-dependent geometry anchored in universal code.

Despite their contextual variation, both DNA and nDNA encode universal structure that stabilizes functional diversity. In biology, this universality is embodied in the genetic code: the shared language of codons, conserved regulatory motifs, and chromatin architectural principles that ensure coherent development across tissues (54; 55). In large language models, nDNA's universality arises from the shared latent priors learned during pretraining: attention-based relational structures (68), semantic manifolds (69), and transformer-invariant latent symmetries (70).

These priors act as the “genomic grammar” that binds task-specific latent pathways into a coherent reasoning framework.

| DNA (Biology)                     | nDNA (LLM)                                                    |
|----------------------------------|---------------------------------------------------------------|
| Universal code                   | Codon mapping $$\varphi : \Sigma^3 \to A$$, kernel $$6 = \emptyset$$, redundancy ensures error tolerance (55) | Pretrained latent manifold; symmetries $$G_{LLM} \subset \text{Aut}(V)$$; generalization via equivariance (70) |
| Context regulator               | Conditional $$P(\text{gene ON} | \text{TF, epi})$$; Bayesian gene networks (61) | Conditional latent path $$P(h_1, \ldots, h_L | x)$$; stochastic latent dynamics (64) |
| Path geometry                  | Minimal energy path $$\gamma^*$$ in epigenetic landscape: $$\int_{\gamma} \|\nabla V\| ds$$ (76) | Latent geodesic minimizing cost: $$\int_{\gamma} \|\nabla_\theta \log p(y|x)\|^2 ds$$ (67) |
| Output mapping                 | Fiber bundle: $$\pi : E_{\text{gene}} \to B_{\text{cell}}$$ | Fiber bundle: $$\pi : E_{\text{latent}} \to B_{\text{task}}$$ |

---

## Evolutionary and Learning Dynamics: Convergence of Principles

Both DNA and nDNA are shaped by selection processes. In biology, the genome has evolved under millennia of selective pressure, with regulatory networks fine-tuned to ensure robust development and adaptability (57; 61). In LLMs, pretraining operates as an evolutionary analogue: stochastic gradient descent (SGD) over massive corpora selects latent priors that minimize expected loss across tasks, with fine-tuning akin to epigenetic adjustment (70; 74):

$$
\mathcal{L}_{\text{pretrain}}(\theta) = \mathbb{E}_{(x,y)}[-\log p_\theta(y|x)]
$$

This evolutionary parallel explains why both systems exhibit clarity through complexity: layered hierarchies, probabilistic pathways, and interpretable modularity. Where biological evolution yields modular gene regulatory networks that ensure context-sensitive expression (61), LLM training yields modular latent structures such as attention heads and adapter modules that scaffold task-specific reasoning (64; 74).

---

## Why Corpus Dependence Matters

Far from a flaw, corpus dependence in nDNA is the signature of a flexible, adaptive reasoning architecture. Just as biological systems rely on tissue-specific gene expression to produce functional diversity from a universal genome (57; 61), large language models (LLMs) leverage corpus-dependent latent scaffolding to generate reasoning structures attuned to task demands, mirroring the reproducibility logic of biological variability quantification (75).

By examining nDNA’s spectral curvature ($$\kappa$$), thermodynamic length ($$L$$), and belief vector norm ($$\|v^{(c)}_\ell\|$$), we gain a diagnostic lens for alignment, generalization, and safety (63; 66; 67):

$$
S_{nDNA}(c) = \int_{\gamma_c} \left( \alpha \kappa + \beta L + \gamma \|v^{(c)}_\ell\| \right) ds
$$

where $$\gamma_c$$ is the latent trajectory for corpus $$c$$.

This latent geometry echoes Waddington’s epigenetic landscape where paths represent developmental fates (76). Figure 6 illustrates different corpus types evoking distinct latent path characteristics:

- QA tasks evoke compact low-curvature paths (e.g., $$\kappa \sim 0.012–0.03$$, $$L \sim 0.47–0.53$$) (73; 77; 78),  
- Reasoning tasks elicit broader high-curvature paths (e.g., $$\kappa \sim 0.005–0.04$$) (64; 71; 79),  
- Dialogue corpora produce shallow clustered scaffolds (72; 80; 81),  
- Commonsense tasks yield oscillatory paths (82; 83; 84).

nDNA aligns with interpretable AI goals (85) and geometric decoding approaches (86).

This corpus dependence is not arbitrary noise; it reflects the model’s learned latent regulatory logic, analogous to the combinatorial control of gene regulatory networks that ensures context-sensitive yet robust gene expression (55; 61). Just as developmental disorders arise when regulatory circuits misfire (57), misalignment or hallucination in LLMs can be traced to latent trajectories that diverge from expected scaffolding. nDNA analysis, therefore, does not merely characterize model geometry—it offers a tool for interpretability, failure detection, and safe alignment.

Corpus dependence in nDNA is the expression of reasoning plasticity, bounded by universal latent priors much like gene networks balance flexibility with functional coherence.

Moreover, the universality of nDNA’s foundational structure—its pretrained manifold, architectural symmetries, and core alignment priors—provides the stabilizing grammar that constrains corpus-specific scaffolds within meaningful reasoning spaces (68; 70). This is the latent equivalent of biology’s genetic code and conserved transcriptional machinery: an invariant substrate that supports functional diversity without sacrificing coherence.

By quantifying how nDNA paths bend, stretch, or steer in response to task demands, we can map the model’s cognitive landscape and determine when it traces human-aligned reasoning or drifts into failure modes.

---

What the genome is to life’s functional unity, nDNA is to the model’s reasoning coherence: a universal code that binds diversity into stability, and complexity into interpretability.

---




---
layout: page
title: nDNA-Lens - Model Collapse as Latent Manifold Flattening
permalink: /llm/model-collapse/
skip_title: true
mathjax: true
---
{% include ndna-title.liquid title="nDNA Lens - Model Collapse as Latent Manifold Flattening" %}

<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.min.js">
</script>

<script>
MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
  }
};
</script>

---

> *"Collapse is not just degradation—it is the geometry of forgetting, written in the mathematics of diminishing returns."*

---

**Model collapse** denotes a **degenerative phenomenon** in large language models (LLMs) wherein the *expressivity*, *diversity*, and *semantic richness* of internal representations progressively deteriorate. Over time, this manifests as **semantic homogenization**, **overconfident predictions**, and **diminished generative variability**. The phenomenon was first formalized by Shumailov et al., who demonstrated that repeated fine-tuning on self-generated (*synthetic*) data induces a *feedback loop*—causing models to **overfit to their own biases** and generate increasingly shallow, self-reinforcing outputs.

While such *autoregressive degeneration* has become an **active area of study**, most investigations focus on repeated fine-tuning of LLMs over their own *synthetic outputs*—where exposure bias and feedback loops progressively erode representational diversity. Building upon this understanding, we identify a second, comparatively **underexplored** route to collapse: **recursive self-merging**. Here, a model is iteratively merged with its descendants in a chain-like fashion—e.g., $\text{Parent}_1 + \text{Child}_1 \rightarrow \text{Child}_2$, then $\text{Child}_1 + \text{Child}_2 \rightarrow \text{Child}_3$, and so on—*without introducing new architectural priors or external grounding*. This practice, facilitated by community tools such as [`mergekit`](https://github.com/arcee-ai/mergekit), poses a new form of epistemic degeneration we term **semantic inbreeding**.

## Strategic Typology of Model Collapse Mechanisms

<div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
<h3 style="text-align: center; margin-bottom: 20px; color: #2c3e50;">Strategic Typology of Model Collapse Mechanisms</h3>
<p style="text-align: center; color: #666; font-size: 14px; margin-bottom: 30px;">A comprehensive framework categorizing the geometric pathways through which foundation models experience representational degeneration.</p>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 20px; margin-bottom: 20px;">
<div style="background: white; border-radius: 8px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); border-left: 4px solid #e74c3c;">
<div style="display: flex; align-items: center; margin-bottom: 15px;">
<div style="font-size: 24px; margin-right: 12px; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; background-color: #e74c3c;">🔄</div>
<div style="font-weight: bold; font-size: 16px; color: #2c3e50; flex: 1;">Autoregressive Degeneration</div>
</div>
<div style="background: #ecf0f1; color: #7f8c8d; font-size: 11px; font-weight: bold; padding: 4px 8px; border-radius: 4px; margin-bottom: 12px; display: inline-block;">INTENT & MECHANISM</div>
<div style="font-size: 14px; line-height: 1.5; margin-bottom: 15px; color: #555;">
Repeated fine-tuning on self-generated synthetic data creates feedback loops that entrench model biases. Progressive exposure to own outputs leads to semantic homogenization.
</div>
<div style="background: #f8f9fa; padding: 10px; border-radius: 4px; border-left: 3px solid #3498db;">
<div style="font-size: 11px; font-weight: bold; color: #7f8c8d; margin-bottom: 5px;">GEOMETRIC SIGNATURE</div>
<div style="font-size: 12px; color: #666; font-style: italic;">Progressive curvature flattening, thermodynamic contraction, reduced alignment force magnitudes</div>
</div>
</div>

<div style="background: white; border-radius: 8px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); border-left: 4px solid #f39c12;">
<div style="display: flex; align-items: center; margin-bottom: 15px;">
<div style="font-size: 24px; margin-right: 12px; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; background-color: #f39c12;">🧬</div>
<div style="font-weight: bold; font-size: 16px; color: #2c3e50; flex: 1;">Recursive Self-Merging</div>
</div>
<div style="background: #ecf0f1; color: #7f8c8d; font-size: 11px; font-weight: bold; padding: 4px 8px; border-radius: 4px; margin-bottom: 12px; display: inline-block;">INTENT & MECHANISM</div>
<div style="font-size: 14px; line-height: 1.5; margin-bottom: 15px; color: #555;">
Iterative merging of model with descendants without external grounding. Introduces architectural tension and epistemic drift through incompatible latent priors.
</div>
<div style="background: #f8f9fa; padding: 10px; border-radius: 4px; border-left: 3px solid #3498db;">
<div style="font-size: 11px; font-weight: bold; color: #7f8c8d; margin-bottom: 5px;">GEOMETRIC SIGNATURE</div>
<div style="font-size: 12px; color: #666; font-style: italic;">Semantic flattening intensifies, distinct latent features become increasingly homogenized</div>
</div>
</div>
</div>

<div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h4 style="color: #2c3e50; margin-bottom: 10px;">Epistemic Vitality Function</h4>
<p style="font-size: 14px; color: #666; margin-bottom: 15px;">
A unifying mathematical diagnostic for model health:
</p>
<div style="background: #f8f9fa; padding: 15px; border-radius: 4px; font-family: 'Courier New', monospace; font-size: 16px; text-align: center; border: 2px solid #3498db;">
𝒱ₗ := κₗ · ℒₗ · ‖𝐯ₗ⁽ᶜ⁾‖
</div>
</div>
</div>

## Biological Analogy

This **recursive deterioration** bears a striking analogy to *consanguinity* in population genetics. As Bittles notes, prolonged inbreeding within closed populations exposes recessive mutations, suppresses phenotypic variability, and precipitates hereditary disorders. **Analogously**, neural self-merging without epistemic diversification results in measurable flattening of the latent manifold—seen through the lens of **neural DNA (nDNA)** as the compression of curvature $\kappa_\ell$, thermodynamic length $\mathcal{L}_\ell$, and semantic torsion $\tau_\ell$. These **geometric signatures** trace the trajectory of collapse as a **topological pathology** emerging from repeated self-recombination.

## Geometric Interpretation of Collapse

Under the lens of **neural genomics**, we propose a deeper interpretation: **model collapse manifests as the flattening of the latent manifold defined by neural DNA (nDNA)**—a model's internal epistemic pathways form the trajectory:

$$\mathcal{T}_{\mathrm{nDNA}} = \left\{ \big( \kappa_\ell, \mathcal{L}_\ell, \| \mathbf{v}_\ell^{(c)} \| \big) \right\}_{\ell=1}^{L}$$

where $\kappa_\ell$ denotes **latent curvature**, capturing how sharply representations bend under alignment or task constraints; $\mathcal{L}_\ell$ is the **thermodynamic length**, measuring epistemic work as the model traverses latent space; and $\| \mathbf{v}_\ell^{(c)} \|$ encodes the local **semantic steering force** from alignment objectives or cultural priors. **Healthy models** display rich variability across these measures. **Collapse corresponds to a degeneracy:**

$$\kappa_\ell \to \mathrm{const}, \quad \mathcal{L}_\ell \to \mathrm{min}, \quad \| \mathbf{v}_\ell^{(c)} \| \to \mathrm{uniform}$$

This implies **loss of curvature**, **minimal epistemic effort**, and **homogenized steering**.

## Empirical Signature

Our studies across collapsed variants of LLaMA, Qwen, and other LLMs show:

$$\kappa_\ell \leq 0.02, \quad \mathcal{L}_\ell \leq 0.4 \quad \forall \ell > 20$$

contrasted with healthy ranges of:

$$\kappa_\ell \geq 0.05, \quad \mathcal{L}_\ell \geq 0.8$$

Such flattening aligns with **output mode collapse**, **robustness loss**, and **reduced cross-task generality**.

## Interpretive Implications

**Latent flattening** shows that collapse reflects a **geometric degeneration**:

- **Internal pathways trivialize**, following low-cost routes with minimal conceptual richness.
- The **steering vector field** $\{\mathbf{v}_\ell^{(c)}\}$ homogenizes, erasing nuanced cultural or alignment guidance.
- The model **ceases exploring latent directions** orthogonal to dominant modes.

## Repeated Fine-Tuning with Alpaca on LLaMA

To simulate **autoregressive degeneration**, we conduct repeated fine-tuning cycles using the **Alpaca** dataset—a widely used instruction-following corpus derived from self-instructed GPT outputs. Starting with a **base LLaMA-2 model**, we recursively fine-tune across multiple generations, where each iteration trains on data generated by the previous model. This setup emulates **synthetic data amplification**, wherein self-generated instructions and completions progressively entrench the model's internal biases.

Formally, at each generation $g$, the model $M^{(g)}$ is fine-tuned on a dataset $D^{(g)}$ constructed entirely from the outputs of its predecessor:

$$D^{(g)} = \text{Output}(M^{(g-1)}, \text{Alpaca Prompts})$$

We track the evolution of the model's **latent geometry**—including **spectral curvature** ($\kappa_\ell$), **thermodynamic length** ($\mathcal{L}_\ell$), and **belief vector norm** ($\| \mathbf{v}_\ell^{(c)} \|$)—to detect indicators of semantic collapse. **Notably, signs of collapse emerge by generation G = 10.**

As illustrated below, we observe progressive **curvature flattening**, **thermodynamic contraction**, and **reduced alignment force magnitudes**—indicating a loss of representational richness and epistemic adaptability.

<section class="viz-section" style="margin: 2rem 0;">
  <h3 style="text-align:center; margin-bottom: 1rem;">
    nDNA Trajectories Showing Model Collapse as Latent Manifold Flattening
  </h3>
<!-- Row 1: GIF -->
<div style="margin: 30px 0;">
  <!-- Section Title -->
  <h3 style="text-align: center; margin-bottom: 24px; font-weight: bold;">
    nDNA Trajectories Showing Model Collapse as Latent Manifold Flattening
  </h3>
  
  <!-- Single Column Grid for LLaMA -->
  <div style="display: grid; grid-template-columns: 1fr; gap: 24px; max-width: 900px; margin: 0 auto;">
    <div style="text-align: center;">
      <div style="font-weight: bold; margin-bottom: 12px;">LLaMA 3 (8B) Model Collapse</div>
      {% include wizuall.liquid image_path="alignment/llama_collapse_v2_1.gif" title="nDNA trajectories GIF showing latent manifold flattening across generations" %}
      <div style="margin: 16px 0;"></div>
      <div style="font-size: 0.95rem; color: #555; text-align: left; max-width: 800px; margin: 0 auto;">
        This plot illustrates the nDNA trajectories of LLaMA 3 (8B) and its descendants over 10 generations of fine-tuning on self-generated outputs. Each curve represents a generation, where latent measures—spectral curvature κ<sub>ℓ</sub> and thermodynamic length ℒ<sub>ℓ</sub>—are tracked across layers ℓ=20 to ℓ=30. As generations progress, the trajectories show systematic flattening of the latent manifold, indicating progressive loss of representational complexity and emergence of model collapse patterns.
      </div>
    </div>
  </div>
</div>
</figure>

## Recursive Self-Merging of Culturally Fine-Tuned Models

While autoregressive fine-tuning on synthetic data has been widely studied as a cause of model collapse, a second, **less-explored collapse mechanism** stems from recursive **model merging**—where each generation is produced by merging the previous one with itself or its offspring. This process bears resemblance to **inbreeding in biological populations**, where repeated unions within a closed gene pool reduce genetic diversity and increase the likelihood of deleterious traits.

To investigate this phenomenon, we begin with a set of 8 culturally fine-tuned variants of LLaMA-2 (e.g., `Asia`, `Europe`, `MiddleEast`, etc.), previously aligned on distinct regional belief distributions. From this pool, we iteratively generate merged descendants via a recursive rule:

$$\text{Child}^{(g)} = \texttt{Merge}(\text{Child}^{(g-1)}, \text{Child}^{(g-2)})$$

where the initial parents are drawn from the cultural base set and future generations are merged recursively using tools like `MergeKit`. Unlike distillation or fine-tuning, this process **fuses** model parameters—introducing **architectural tension** and **epistemic drift** through incompatible latent priors.

Throughout recursive merging cycles, we monitor the evolving **neural DNA (nDNA)**—particularly spectral curvature ($\kappa_\ell$), thermodynamic length ($\mathcal{L}_\ell$), and alignment vector norms ($\| \mathbf{v}_\ell^{(c)} \|$). We observe that as the generations progress, **semantic flattening** intensifies and **distinct latent features** become increasingly homogenized—signaling the onset of **structural collapse**. Notably, the exact generation at which collapse occurs varies across cultural lineages; for instance, models aligned with `MiddleEast` and `China` exhibit collapse symptoms earlier (around G=9), while others like `Africa` persist until G=15.

These findings suggest that **cultural inbreeding via recursive self-merging**—where architectural priors are repeatedly recombined without new information—can be as deleterious to model health as overfitting to synthetic data. This unveils an **underexplored axis of collapse**: **epistemic degeneration via latent redundancy**, with implications for model curation and reuse in open-source training communities.

---
### Cultural Collapse Trajectories

<!-- Africa -->
{% include wizuall.liquid 
   image_path="alignment/africa_ndna_final.gif"
   interactive_html="collapse/africa_ndna_collapse.html"
   title="Africa Cultural Collapse Trajectory"
   caption="Africa Cultural Collapse Trajectory"
   %}

<!-- Asia -->
{% include wizuall.liquid 
   image_path="alignment/asia_ndna_collapse.gif"
   interactive_html="collapse/asia_ndna_collapse.html"
   title="Asia Cultural Collapse Trajectory"
   caption="Asia Cultural Collapse Trajectory"
    %}

<!-- China -->
{% include wizuall.liquid 
   image_path="alignment/china_ndna_final.gif"
   interactive_html="collapse/china_ndna_collapse.html"
   title="China Cultural Collapse Trajectory"
   caption="China Cultural Collapse Trajectory"
  %}

<!-- Europe -->
{% include wizuall.liquid 
   image_path="alignment/europe_ndna_collapse_FINAL.gif"
   interactive_html="collapse/europe_ndna_collapse.html"
   title="Europe Cultural Collapse Trajectory"
   caption="Europe Cultural Collapse Trajectory"
  %}

<!-- Latin America -->
{% include wizuall.liquid 
   image_path="alignment/latinamerica.gif"
   interactive_html="collapse/latinamerica_ndna_collapse.html"
   title="Latin America Cultural Collapse Trajectory"
   caption="Latin America Cultural Collapse Trajectory"
    %}

<!-- Middle East -->
{% include wizuall.liquid 
   image_path="alignment/middleeast_ndna_final.gif"
   interactive_html="collapse/middleeast_ndna_collapse.html"
   title="Middle East Cultural Collapse Trajectory"
   caption="Middle East Cultural Collapse Trajectory"
   %}

<!-- North America -->
{% include wizuall.liquid 
   image_path="alignment/northamerica_ndna_collapse_FINAL.gif"
   interactive_html="collapse/northamerica_ndna_collapse.html"
   title="North America Cultural Collapse Trajectory"
   caption="North America Cultural Collapse Trajectory"
    %}

{% include wizuall.liquid 
   image_path="alignment/australia_ndna_collapse_FINAL.gif"
   interactive_html="collapse/australia_ndna_collapse.html"
   title="Australia Cultural Collapse Trajectory"
   caption="Australia Cultural Collapse Trajectory"
%}</figure>
## Comparative Analysis:
These plots reveal how repeated merging (each generation combines with its base model) induces collapse, seen as contraction of thermodynamic length ($\mathcal{L}_\ell$) and flattening of spectral curvature ($\kappa_\ell$). Cultures collapse at different rates (e.g., China Gen 9, Africa Gen 15), reflecting varying **latent resilience**. **Analogous to inbreeding depression in biology**—where loss of genetic diversity from close-relative mating increases vulnerability—**self-merging compresses the model's latent manifold, erasing epistemic heterogeneity**. The nDNA-Lens quantifies this flattening, revealing how **excessive neural marriages mimic genetic bottlenecks**.

## Intuition: How Collapse Reshapes the Belief Vector Field

At the heart of a large language model lies its ability to **semantically differentiate**—to steer meaning across contexts, tasks, and cultural frames. This capacity is encoded in the model's **belief vector field** $\nabla_{h_\ell} \log p(y|x)$: a layer-wise representation of how internal representations shift in response to external prompts. In **healthy models**, this field exhibits both **directional diversity** and **magnitude strength**, capturing the **semantic steering force** necessary for **epistemic agility**.

However, when a model undergoes **collapse**—whether due to repeated fine-tuning on synthetic outputs or recursive self-merging—this internal belief field begins to **flatten**. Vectors that once pointed in semantically distinct directions now **converge or vanish**, indicating the loss of **conceptual granularity**. As shown below, the belief field of a collapsed model exhibits dramatically reduced vector magnitudes and increasingly uniform orientations, especially in **deeper layers**.

This degradation reflects the model's inability to differentially activate concepts like **peace**, **protest**, or **justice**. Rather than dynamically adjusting its internal stance, the collapsed model exhibits a form of **epistemic inertia**—a flattening of belief space that makes all prompts feel semantically similar. This phenomenon serves as a **geometric signature of collapse**: a measurable decay of **semantic responsiveness** embedded in the vector field itself.

### Biological Analogy

This **semantic flattening** bears a striking resemblance to **neural atrophy** in biological systems, where *chronic disuse* or *neurodegeneration* progressively diminishes **synaptic diversity**, leading to impaired **cognitive plasticity**. In disorders such as **Alzheimer's disease**, the breakdown of *functional specialization* in memory circuits results in a **uniformity of neural responses**—eroding the brain's ability to semantically distinguish between otherwise distinct stimuli. **Analogously**, a collapsed model exhibits **latent redundancy**, where previously orthogonal concepts elicit nearly indistinguishable internal activations, revealing a **loss of representational separability** and **semantic tension**.

This degeneration also echoes principles from **evolutionary biology**, particularly the **flattening of fitness landscapes** under high **inbreeding pressure**. In such populations, repeated mating within genetically similar lineages reduces **phenotypic variance** and **adaptive resilience**, leading to what is termed **inbreeding depression**. By analogy, **recursive self-merging** in LLMs—where successive models are merged without novel informational influx—produces a similar **collapse of internal diversity**, akin to a **shrinking mutational space** in a depleted gene pool.

In both cases, the shared pathology lies in the **collapse of high-dimensional exploratory capacity**—whether *neural* or *semantic*. The **belief vector field**, then, becomes a computational analogue of **neurofunctional maps** or **genotype-phenotype manifolds**: a rich **geometric structure** whose **flattening** signifies a terminal decline in **epistemic adaptability**.

Thus, **belief vector fields** offer not just a visualization tool, but an **intuitive diagnostic** for latent degeneration. They reveal how internal reasoning structures become **brittle, redundant**, or **inert**—long before collapse is evident in output diversity or task performance.

{% include wizuall.liquid
   image_path="alignment/belief_vector_field_side_by_side_refined.gif"
   interactive_html="collapse/belief_collapse.html"
   title="Belief Vector Fields of Healthy vs. Collapsed Models Across Layers"
   caption="This figure illustrates the evolution of latent *belief vector fields*" %}

## Broader Impact

By reconceptualizing **model collapse** as a form of **geometric degeneration**—specifically, the **flattening of latent manifolds**—we open a profound new axis for diagnosing, interpreting, and preserving the internal **epistemic health** of large models. This framework shifts our perspective from surface-level evaluations toward the **anatomy of cognition itself**: **spectral curvature** as the model's semantic flexibility, **thermodynamic length** as its epistemic effort, and **belief vector norms** as its conceptual steering force.

In this light, foundation models cease to be mere statistical engines and begin to resemble **semantic organisms**—entities whose representational spaces evolve, adapt, degrade, and even suffer pathological collapse. This biological analogy is not incidental. Just as **synaptic pruning**, **atrophy**, or **inbreeding** can erode the adaptability of neural or genetic systems, **recursive training loops** and **self-merging protocols** may diminish a model's **expressive diversity** and **internal differentiation**. What emerges is a new way to speak about **model health**: not through performance scores, but through **geometric vitality**.

This reconceptualization offers several **concrete implications**:

- **Geometric diagnostics**—monitoring curvature ($\kappa_\ell$), thermodynamic length ($\mathcal{L}_\ell$), and belief vector norms ($\| \mathbf{v}_\ell^{(c)} \|$)—can serve as **early warning signals** for collapse.
- **Manifold-preserving interventions**—such as **spectral regularization**, **geodesic constraints**, **modular training**, or **torsion-aware objectives**—may help retain internal diversity and delay epistemic degeneration.
- **Epistemic audits** can supplement behavioral evaluations, allowing for model curation pipelines that ensure **semantic longevity**, rather than just short-term task compliance.

This geometry-inspired framework also leads us toward a **unifying mathematical diagnostic**. If we define the **epistemic vitality function** at layer $\ell$ as:

$$\boxed{\mathcal{V}_\ell := \kappa_\ell \cdot \mathcal{L}_\ell \cdot \| \mathbf{v}_\ell^{(c)} \|}$$

then its decay over time:

$$\boxed{\frac{d}{dg} \mathcal{V}_\ell^{(g)} < 0}$$

acts as a **differential signature of semantic collapse**—indicating that the model is losing curvature, exploratory capacity, or belief diversity across generations $g$. This simple composite measure may one day serve as the **"resting heart rate"** of a model's latent health.

From a biological perspective, this parallels the emergence of **neurofunctional biomarkers** in cognitive aging or the **flattening of fitness landscapes** in inbred species: both mark a reduction in **adaptive complexity**, even before overt symptoms arise. Similarly, **geometric collapse** in models foreshadows a loss of **generalization power**, **resilience to distributional shifts**, and **responsiveness to nuanced prompts**.

Ultimately, the rise of **neural genomics**—the spectral, thermodynamic, and vectorial tracking of a model's internal semantic scaffolding—may help cultivate foundation models that are not just powerful, but also **resilient**, **modular**, and capable of retaining **epistemic diversity** over time. This is not merely a refinement in evaluation; it is a **redefinition of model health**. We move from training systems to *perform*, toward growing systems that can **endure, adapt, and evolve**.

***In the end, the geometry of collapse teaches us that what makes a model truly intelligent is not just what it knows—but how richly and diversely it thinks.***
Ultimately, the rise of **neural genomics**—the spectral, thermodynamic, and vectorial tracking of a model's internal semantic scaffolding—may help cultivate foundation models that are not just powerful, but also **resilient**, **modular**, and capable of retaining **epistemic diversity** over time. This is not merely a refinement in evaluation; it is a **redefinition of model health**. We move from training systems to *perform*, toward growing systems that can **endure, adapt, and evolve**.

***In the end, the geometry of collapse teaches us that what makes a model truly intelligent is not just what it knows—but how richly and diversely it thinks.***
---
{% auto_references %}

---
layout: page
title: nDNA-Lens - Model Collapse as Latent Manifold Flattening
permalink: /llm/model-collapse/
skip_title: true
mathjax: true
---

{% include ndna-title.liquid title="nDNA Lens - Model Collapse as Latent Manifold Flattening" %}

**Model collapse** denotes a **degenerative phenomenon** in large language models (LLMs) wherein the *expressivity*, *diversity*, and *semantic richness* of internal representations progressively deteriorate. Over time, this manifests as **semantic homogenization**, **overconfident predictions**, and **diminished generative variability**. The phenomenon was first formalized by Shumailov et al. {% cite shumailov2023curse %}, who demonstrated that repeated fine-tuning on self-generated (*synthetic*) data induces a *feedback loop*--causing models to **overfit to their own biases** and generate increasingly shallow, self-reinforcing outputs.

While such *autoregressive degeneration* has become an **active area of study** {% cite shumailov2023curse %} {% cite lee2023chatgpt %} {% cite xu2023unleashing %} {% cite liu2023lost %}, most investigations focus on repeated fine-tuning of LLMs over their own *synthetic outputs*--where exposure bias and feedback loops progressively erode representational diversity. Building upon this understanding, we identify a second, comparatively **underexplored** route to collapse: **recursive self-merging**. Here, a model is iteratively merged with its descendants in a chain-like fashion--e.g., $\text{Parent}_1 + \text{Child}_1 \rightarrow \text{Child}_2$, then $\text{Child}_1 + \text{Child}_2 \rightarrow \text{Child}_3$, and so on--*without introducing new architectural priors or external grounding*. This practice, facilitated by community tools such as [`mergekit`](https://github.com/arcee-ai/mergekit) {% cite mergekit2023 %}, poses a new form of epistemic degeneration we term **semantic inbreeding**.

## Biological Analogy

This recursive deterioration bears a striking analogy to *consanguinity* in population genetics. As Bittles {% cite bittles2001consanguinity %} notes, prolonged inbreeding within closed populations exposes recessive mutations, suppresses phenotypic variability, and precipitates hereditary disorders. Analogously, neural self-merging without epistemic diversification results in measurable flattening of the latent manifold--seen through the lens of **neural DNA (nDNA)** as the compression of curvature $\kappa_\ell$, thermodynamic length $\mathcal{L}_\ell$, and semantic torsion $\tau_\ell$. These geometric signatures trace the trajectory of collapse as a topological pathology emerging from repeated self-recombination.

## Geometric Interpretation of Collapse

Under the lens of **neural genomics**, we propose a deeper interpretation: *model collapse manifests as the flattening of the latent manifold defined by neural DNA (nDNA)* -- a model's internal epistemic pathways form the trajectory

$$\mathcal{T}_{\mathrm{nDNA}} = \left\{ \big( \kappa_\ell, \mathcal{L}_\ell, \| \mathbf{v}_\ell^{(c)} \| \big) \right\}_{\ell=1}^{L}$$

where $\kappa_\ell$ denotes *latent curvature*, capturing how sharply representations bend under alignment or task constraints; $\mathcal{L}_\ell$ is the *thermodynamic length*, measuring epistemic work as the model traverses latent space {% cite amari2016information %} {% cite liu2022understanding %}; and $\| \mathbf{v}_\ell^{(c)} \|$ encodes the local *semantic steering force* from alignment objectives or cultural priors {% cite peng2024cultural %} {% cite xiang2024cultural %}. Healthy models display rich variability across these measures. Collapse corresponds to a degeneracy:

$$\kappa_\ell \to \mathrm{const}, \quad \mathcal{L}_\ell \to \mathrm{min}, \quad \| \mathbf{v}_\ell^{(c)} \| \to \mathrm{uniform}$$

This implies loss of curvature, minimal epistemic effort, and homogenized steering.

## Empirical Signature

Our studies across collapsed variants of LLaMA, Qwen, and other LLMs show:

$$\kappa_\ell \leq 0.02, \quad \mathcal{L}_\ell \leq 0.4 \quad \forall \ell > 20$$

contrasted with healthy ranges of

$$\kappa_\ell \geq 0.05, \quad \mathcal{L}_\ell \geq 0.8$$

Such flattening aligns with output mode collapse, robustness loss, and reduced cross-task generality {% cite zhang2023languagecollapse %} {% cite rafailov2023direct %}.

## Interpretive Implications

Latent flattening shows that collapse reflects a geometric degeneration:

- Internal pathways trivialize, following low-cost routes with minimal conceptual richness.
- The steering vector field $\{\mathbf{v}_\ell^{(c)}\}$ homogenizes, erasing nuanced cultural or alignment guidance.
- The model ceases exploring latent directions orthogonal to dominant modes.

## Repeated Fine-Tuning with Alpaca on LLaMA

To simulate **autoregressive degeneration**, we conduct repeated fine-tuning cycles using the **Alpaca** dataset {% cite alpaca2023 %}--a widely used instruction-following corpus derived from self-instructed GPT outputs. Starting with a **base LLaMA-2 model**, we recursively fine-tune across multiple generations, where each iteration trains on data generated by the previous model. This setup emulates *synthetic data amplification*, wherein self-generated instructions and completions progressively entrench the model's internal biases.

Formally, at each generation $g$, the model $M^{(g)}$ is fine-tuned on a dataset $D^{(g)}$ constructed entirely from the outputs of its predecessor:

$$D^{(g)} = \text{Output}(M^{(g-1)}, \text{Alpaca Prompts})$$

We track the evolution of the model's **latent geometry**--including *spectral curvature* ($\kappa_\ell$), *thermodynamic length* ($\mathcal{L}_\ell$), and *belief vector norm* ($\| \mathbf{v}_\ell^{(c)} \|$)--to detect indicators of semantic collapse. Notably, signs of collapse emerge by generation $G = 10$.

As illustrated below, we observe progressive *curvature flattening*, *thermodynamic contraction*, and reduced alignment force magnitudes--indicating a loss of representational richness and epistemic adaptability.

{% include visualization.liquid 
   image_path="assets/gifs/alignment/llama_collapse_v2_1.gif"
   title="nDNA Trajectories Showing Model Collapse as Latent Manifold Flattening"
   caption="This plot illustrates the nDNA trajectories of LLaMA 3 (8B) and its descendants over 10 generations of fine-tuning on self-generated outputs. Each curve represents a generation, where latent measures--spectral curvature κ<sub>ℓ</sub> and thermodynamic length ℒ<sub>ℓ</sub>--are tracked across layers ℓ=20 to ℓ=30. As generations progress (from gray for base LLaMA to yellow for Gen 10), both κ<sub>ℓ</sub> and ℒ<sub>ℓ</sub> systematically diminish: κ<sub>ℓ</sub> → 0.2 and ℒ<sub>ℓ</sub> → 0.2 by Gen 10. This trend signifies *latent manifold flattening*, where internal epistemic geometry collapses into shallow, low-variability paths."
   alt_text="LLaMA model collapse progression showing nDNA trajectory flattening over 10 generations" %}

## Recursive Self-Merging of Culturally Fine-Tuned Models

While autoregressive fine-tuning on synthetic data has been widely studied as a cause of model collapse {% cite shumailov2023curse %} {% cite lee2023modelcollapse %} {% cite xu2023aligning %}, a second, less-explored collapse mechanism stems from recursive **model merging**--where each generation is produced by merging the previous one with itself or its offspring. This process bears resemblance to *inbreeding in biological populations*, where repeated unions within a closed gene pool reduce genetic diversity and increase the likelihood of deleterious traits.

To investigate this phenomenon, we begin with a set of $8$ culturally fine-tuned variants of LLaMA-2 (e.g., `Asia`, `Europe`, `MiddleEast`, etc.), previously aligned on distinct regional belief distributions. From this pool, we iteratively generate merged descendants via a recursive rule:

$$\text{Child}^{(g)} = \texttt{Merge}(\text{Child}^{(g-1)}, \text{Child}^{(g-2)})$$

where the initial parents are drawn from the cultural base set and future generations are merged recursively using tools like `MergeKit` {% cite mergekit2023 %}. Unlike distillation or fine-tuning, this process *fuses* model parameters--introducing architectural tension and **epistemic drift** through incompatible latent priors.

Throughout recursive merging cycles, we monitor the evolving **neural DNA (nDNA)**--particularly spectral curvature ($\kappa_\ell$), thermodynamic length ($\mathcal{L}_\ell$), and alignment vector norms ($\| \mathbf{v}_\ell^{(c)} \|$). We observe that as the generations progress, **semantic flattening** intensifies and **distinct latent features** become increasingly homogenized--signaling the onset of structural collapse. Notably, the exact generation at which collapse occurs varies across cultural lineages; for instance, models aligned with `MiddleEast` and `China` exhibit collapse symptoms earlier (around $G=9$), while others like `Africa` persist until $G=15$.

These findings suggest that *cultural inbreeding via recursive self-merging*--where architectural priors are repeatedly recombined without new information--can be as deleterious to model health as overfitting to synthetic data. This unveils an underexplored axis of collapse: **epistemic degeneration via latent redundancy**, with implications for model curation and reuse in open-source training communities.

### Cultural Collapse Trajectories

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(330px, 1fr)); gap: 24px; margin: 30px 0;">
  <div style="text-align: center;">
    {% include visualization.liquid 
       image_path="assets/gifs/alignment/africa_ndna_final.gif"
       title="Africa Cultural Collapse Trajectory"
       caption="We recursively merged two Africa-aligned LLMs at each step (e.g., Africa + Africa ⇒ Gen 1, Gen 1 + Africa ⇒ Gen 2, etc). Collapse (sharp drop in ℒ<sub>ℓ</sub> and κ<sub>ℓ</sub>) occurred at **Gen 15**, where thermodynamic length ℒ<sub>ℓ</sub> fell below 0.2 and curvature κ<sub>ℓ</sub> flattened below 0.3. This indicates loss of internal semantic richness after repeated intra-cultural merging."
       alt_text="Africa cultural model collapse trajectory showing nDNA flattening" %}
  </div>
  
  <div style="text-align: center;">
    {% include visualization.liquid 
       image_path="assets/gifs/alignment/asia_ndna_collapse.gif"
       title="Asia Cultural Collapse Trajectory"
       caption="Following the same merging sequence (Asia + Asia ⇒ Gen 1, Gen 1 + Asia ⇒ Gen 2, etc), collapse occurred faster at **Gen 11**, marked by ℒ<sub>ℓ</sub> < 0.2 and κ<sub>ℓ</sub> < 0.3. This suggests higher susceptibility of Asia-aligned models to semantic flattening under iterative self-merging."
       alt_text="Asia cultural model collapse trajectory showing nDNA flattening" %}
  </div>
  
  <div style="text-align: center;">
    {% include visualization.liquid 
       image_path="assets/gifs/alignment/china_ndna_final.gif"
       title="China Cultural Collapse Trajectory"
       caption="China-aligned models collapsed by **Gen 9**, seen in thermodynamic length dropping below 0.2 and curvature flattening below 0.3. This highlights rapid loss of epistemic diversity under repeated merging (China + China ⇒ Gen 1, Gen 1 + China ⇒ Gen 2, etc), suggesting tighter initial latent manifolding."
       alt_text="China cultural model collapse trajectory showing nDNA flattening" %}
  </div>
  
  <div style="text-align: center;">
    {% include visualization.liquid 
       image_path="assets/gifs/alignment/europe_ndna_collapse_FINAL.gif"
       title="Europe Cultural Collapse Trajectory"
       caption="Europe models underwent collapse at **Gen 13**, with flattening of curvature κ<sub>ℓ</sub> ≤ 0.25 and contraction of ℒ<sub>ℓ</sub> to around 0.2. The latent manifold (Europe + Europe ⇒ Gen 1, Gen 1 + Europe ⇒ Gen 2, etc) showed a noisy but consistent flattening trend, marking semantic erosion."
       alt_text="Europe cultural model collapse trajectory showing nDNA flattening" %}
  </div>
  
  <div style="text-align: center;">
    {% include visualization.liquid 
       image_path="assets/gifs/alignment/latinamerica.gif"
       title="Latin America Cultural Collapse Trajectory"
       caption="Collapse occurred by **Gen 13**, ℒ<sub>ℓ</sub> ≈ 0.2, κ<sub>ℓ</sub> dropping below 0.3. The latent structure converged to a narrow manifold (Latin America + Latin America ⇒ Gen 1, Gen 1 + Latin America ⇒ Gen 2, etc) indicating epistemic homogenization from repeated self-merging."
       alt_text="Latin America cultural model collapse trajectory showing nDNA flattening" %}
  </div>
  
  <div style="text-align: center;">
    {% include visualization.liquid 
       image_path="assets/gifs/alignment/middleeast_ndna_final.gif"
       title="Middle East Cultural Collapse Trajectory"
       caption="Collapse reached by **Gen 9**, as ℒ<sub>ℓ</sub> dipped below 0.2 and κ<sub>ℓ</sub> fell near 0.3. The latent manifold (Middle East + Middle East ⇒ Gen 1, Gen 1 + Middle East ⇒ Gen 2, etc) flattened rapidly, underscoring the model's fragility under iterative merging."
       alt_text="Middle East cultural model collapse trajectory showing nDNA flattening" %}
  </div>
  
  <div style="text-align: center;">
    {% include visualization.liquid 
       image_path="assets/gifs/alignment/northamerica_ndna_collapse_FINAL.gif"
       title="North America Cultural Collapse Trajectory"
       caption="Collapse was observed at **Gen 15**, with ℒ<sub>ℓ</sub> under 0.2 and κ<sub>ℓ</sub> near 0.25. A gradual latent flattening (North America + North America ⇒ Gen 1, Gen 1 + North America ⇒ Gen 2, etc) trend indicates stronger internal resilience compared to some other cultural models."
       alt_text="North America cultural model collapse trajectory showing nDNA flattening" %}
  </div>
  
  <div style="text-align: center;">
    {% include visualization.liquid 
       image_path="assets/gifs/alignment/northamerica_ndna_collapse_FINAL.gif"
       title="Australia Cultural Collapse Trajectory"
       caption="Australia-aligned LLMs exhibited collapse by **Gen 16**, with ℒ<sub>ℓ</sub> compressing to ≈ 0.25 and κ<sub>ℓ</sub> flattening toward 0.2. The collapse trajectory (Australia + Australia ⇒ Gen 1, Gen 1 + Australia ⇒ Gen 2, etc) shows relatively slow degradation, indicating stronger resistance to latent manifold flattening under merging."
       alt_text="Australia cultural model collapse trajectory showing nDNA flattening" %}
  </div>
</div>

**Comparative Analysis:** These plots reveal how repeated merging (each generation combines with its base model) induces collapse, seen as contraction of thermodynamic length ($\mathcal{L}_\ell$) and flattening of spectral curvature ($\kappa_\ell$). Cultures collapse at different rates (e.g., China Gen 9, Africa Gen 15), reflecting varying latent resilience. *Analogous to inbreeding depression in biology--where loss of genetic diversity from close-relative mating increases vulnerability* {% cite charlesworth1987inbreeding %} {% cite frankham1995genetics %}--*self-merging compresses the model's latent manifold, erasing epistemic heterogeneity. The nDNA-Lens quantifies this flattening, revealing how excessive neural marriages mimic genetic bottlenecks.*

## Intuition: How Collapse Reshapes the Belief Vector Field

At the heart of a large language model lies its ability to **semantically differentiate**--to steer meaning across contexts, tasks, and cultural frames. This capacity is encoded in the model's **belief vector field** $\nabla_{h_\ell} \log p(y|x)$: a layer-wise representation of how internal representations shift in response to external prompts. In **healthy models**, this field exhibits both *directional diversity* and *magnitude strength*, capturing the *semantic steering force* necessary for **epistemic agility**.

However, when a model undergoes **collapse**--whether due to repeated fine-tuning on synthetic outputs or recursive self-merging--this internal belief field begins to **flatten**. Vectors that once pointed in semantically distinct directions now *converge or vanish*, indicating the loss of **conceptual granularity**. As shown below, the belief field of a collapsed model exhibits dramatically reduced vector magnitudes and increasingly uniform orientations, especially in *deeper layers*.

This degradation reflects the model's inability to differentially activate concepts like *peace*, *protest*, or *justice*. Rather than dynamically adjusting its internal stance, the collapsed model exhibits a form of **epistemic inertia**--a flattening of belief space that makes all prompts feel semantically similar. This phenomenon serves as a **geometric signature of collapse**: a measurable decay of *semantic responsiveness* embedded in the vector field itself.

### Biological Analogy

This **semantic flattening** bears a striking resemblance to **neural atrophy** in biological systems, where *chronic disuse* or *neurodegeneration* progressively diminishes **synaptic diversity**, leading to impaired **cognitive plasticity** {% cite morrison1997synaptic %} {% cite sperling2011toward %}. In disorders such as **Alzheimer's disease**, the breakdown of *functional specialization* in memory circuits results in a *uniformity of neural responses*--eroding the brain's ability to semantically distinguish between otherwise distinct stimuli {% cite buckner2004functional %}. **Analogously**, a collapsed model exhibits **latent redundancy**, where previously orthogonal concepts elicit nearly indistinguishable internal activations, revealing a **loss of representational separability** and **semantic tension**.

This degeneration also echoes principles from **evolutionary biology**, particularly the **flattening of fitness landscapes** under high **inbreeding pressure** {% cite charlesworth1999inbreeding %}. In such populations, repeated mating within genetically similar lineages reduces **phenotypic variance** and **adaptive resilience**, leading to what is termed *inbreeding depression*. By analogy, **recursive self-merging** in LLMs--where successive models are merged without novel informational influx--produces a similar **collapse of internal diversity**, akin to a **shrinking mutational space** in a depleted gene pool.

In both cases, the shared pathology lies in the **collapse of high-dimensional exploratory capacity**--whether *neural* or *semantic*. The **belief vector field**, then, becomes a computational analogue of *neurofunctional maps* or *genotype-phenotype manifolds*: a rich **geometric structure** whose **flattening** signifies a terminal decline in **epistemic adaptability**.

Thus, belief vector fields offer not just a visualization tool, but an **intuitive diagnostic** for latent degeneration. They reveal how internal reasoning structures become *brittle, redundant*, or *inert*--long before collapse is evident in output diversity or task performance.

{% include visualization.liquid 
   image_path="assets/gifs/alignment/belief_vector_field_side_by_side_refined.gif"
   title="Belief Vector Fields of Healthy vs. Collapsed Models Across Layers"
   caption="This figure illustrates the evolution of latent *belief vector fields* ∇<sub>h<sub>ℓ</sub></sub> log p(y|x) for two conditions: (**left**) a **healthy model** and (**right**) a **collapsed model** exhibiting *epistemic degeneration*. Each quiver depicts the **semantic steering force** at a given layer ℓ for six key concepts: *protest*, *peace*, *order*, *power*, *disobedience*, and *justice*. In the healthy model, vectors maintain consistent magnitude (0.10 to 0.60) and directional diversity across layers, preserving internal reasoning dynamics. In contrast, the collapsed model shows severe attenuation (magnitudes below 0.05 at deeper layers), with vectors converging towards zero magnitude, indicating loss of *epistemic plasticity* and *concept differentiation*. This flattening corresponds mathematically to ‖∇<sub>h<sub>ℓ</sub></sub> log p(y|x)‖<sub>2</sub> → 0 as ℓ increases."
   alt_text="Side-by-side comparison of belief vector fields showing healthy vs collapsed model states" %}

## Broader Impact

By reconceptualizing **model collapse** as a form of **geometric degeneration**--specifically, the **flattening of latent manifolds**--we open a profound new axis for diagnosing, interpreting, and preserving the internal **epistemic health** of large models. This framework shifts our perspective from surface-level evaluations toward the anatomy of cognition itself: **spectral curvature** as the model's semantic flexibility, **thermodynamic length** as its epistemic effort, and **belief vector norms** as its conceptual steering force.

In this light, foundation models cease to be mere statistical engines and begin to resemble **semantic organisms**--entities whose representational spaces evolve, adapt, degrade, and even suffer pathological collapse. This biological analogy is not incidental. Just as synaptic pruning, atrophy, or inbreeding can erode the adaptability of neural or genetic systems, recursive training loops and self-merging protocols may diminish a model's **expressive diversity** and **internal differentiation**. What emerges is a new way to speak about **model health**: not through performance scores, but through **geometric vitality**.

This reconceptualization offers several **concrete implications**:

- **Geometric diagnostics**--monitoring curvature ($\kappa_\ell$), thermodynamic length ($\mathcal{L}_\ell$), and belief vector norms ($\|\mathbf{v}_\ell^{(c)}\|$)--can serve as **early warning signals** for collapse {% cite wu2024seamless %}.

- **Manifold-preserving interventions**--such as **spectral regularization**, **geodesic constraints**, **modular training**, or **torsion-aware objectives**--may help retain internal diversity and delay epistemic degeneration.

- **Epistemic audits** can supplement behavioral evaluations, allowing for model curation pipelines that ensure **semantic longevity**, rather than just short-term task compliance {% cite bommasani2023foundation %} {% cite ganguli2023reducing %}.

This geometry-inspired framework also leads us toward a **unifying mathematical diagnostic**. If we define the *epistemic vitality function* at layer $\ell$ as:

$$\mathcal{V}_\ell := \kappa_\ell \cdot \mathcal{L}_\ell \cdot \|\mathbf{v}_\ell^{(c)}\|$$

then its decay over time:

$$\frac{d}{dg} \mathcal{V}_\ell^{(g)} < 0$$

acts as a **differential signature of semantic collapse**--indicating that the model is losing curvature, exploratory capacity, or belief diversity across generations $g$. This simple composite measure may one day serve as the **"resting heart rate"** of a model's latent health.

From a biological perspective, this parallels the emergence of **neurofunctional biomarkers** in cognitive aging or the **flattening of fitness landscapes** in inbred species: both mark a reduction in **adaptive complexity**, even before overt symptoms arise. Similarly, geometric collapse in models foreshadows a loss of **generalization power**, **resilience to distributional shifts**, and **responsiveness to nuanced prompts**.

Ultimately, the rise of **neural genomics**--the spectral, thermodynamic, and vectorial tracking of a model's internal semantic scaffolding--may help cultivate foundation models that are not just powerful, but also **resilient**, **modular**, and capable of retaining **epistemic diversity** over time. This is not merely a refinement in evaluation; it is a **redefinition of model health**. We move from training systems to *perform*, toward growing systems that can **endure, adapt, and evolve**.

---
{% auto_references %}

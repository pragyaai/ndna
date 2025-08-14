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
<p>
This recursive deterioration bears a striking analogy to <em>consanguinity</em> in population genetics. As Bittles <a href="#bittles2001consanguinity">[cite]</a> notes, prolonged inbreeding within closed populations exposes recessive mutations, suppresses phenotypic variability, and precipitates hereditary disorders. Analogously, neural self-merging without epistemic diversification results in measurable flattening of the latent manifold &mdash; seen through the lens of <strong>neural DNA (nDNA)</strong> as the compression of curvature κₗ, thermodynamic length 𝓛ₗ, and semantic torsion τₗ. These geometric signatures trace the trajectory of collapse as a topological pathology emerging from repeated self-recombination.
</p>


## Geometric Interpretation of Collapse

Under the lens of **neural genomics**, we propose a deeper interpretation: *model collapse manifests as the flattening of the latent manifold defined by neural DNA (nDNA)* -- a model's internal epistemic pathways form the trajectory

$$\mathcal{T}_{\mathrm{nDNA}} = \left\{ \big( \kappa_\ell, \mathcal{L}_\ell, \| \mathbf{v}_\ell^{(c)} \| \big) \right\}_{\ell=1}^{L}$$

<p>
where κₗ denotes <em>latent curvature</em>, capturing how sharply representations bend under alignment or task constraints; 𝓛ₗ is the <em>thermodynamic length</em>, measuring epistemic work as the model traverses latent space <a href="#amari2016information">[cite]</a> <a href="#liu2022understanding">[cite]</a>; and ‖𝖛ₗ<sup>(c)</sup>‖ encodes the local <em>semantic steering force</em> from alignment objectives or cultural priors <a href="#peng2024cultural">[cite]</a> <a href="#xiang2024cultural">[cite]</a>. Healthy models display rich variability across these measures. Collapse corresponds to a degeneracy:
</p>

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

<p>
We track the evolution of the model's <strong>latent geometry</strong> &mdash; including <em>spectral curvature</em> (κₗ), <em>thermodynamic length</em> (𝓛ₗ), and <em>belief vector norm</em> (‖𝖛ₗ<sup>(c)</sup>‖) &mdash; to detect indicators of semantic collapse. Notably, signs of collapse emerge by generation G = 10.
</p>

As illustrated below, we observe progressive *curvature flattening*, *thermodynamic contraction*, and reduced alignment force magnitudes--indicating a loss of representational richness and epistemic adaptability.

<section class="viz-section" style="margin: 2rem 0;">
  <h3 style="text-align:center; margin-bottom: 1rem;">
    nDNA Trajectories Showing Model Collapse as Latent Manifold Flattening
  </h3>
<!-- Row 1: GIF -->
<figure style="text-align: center; margin: 1.25rem auto; max-width: 900px;">
  <img 
    src="alignment/llama_collapse_v2_1.gif" 
    alt="nDNA trajectories GIF showing latent manifold flattening across generations" 
    style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,.08);" 
    loading="lazy"
  />
  <figcaption style="font-size: 0.95rem; color: #555; margin-top: .75rem;">
    This plot illustrates the nDNA trajectories of LLaMA 3 (8B) and its descendants over 10 generations of fine-tuning on self-generated outputs. Each curve represents a generation, where latent measures—spectral curvature κ<sub>ℓ</sub> and thermodynamic length ℒ<sub>ℓ</sub>—are tracked across layers ℓ=20 to ℓ=30. As generations progress, the trajectories show systematic flattening of the latent manifold, indicating progressive loss of representational complexity and emergence of model collapse patterns.
  </figcaption>
</figure>


## Recursive Self-Merging of Culturally Fine-Tuned Models

While autoregressive fine-tuning on synthetic data has been widely studied as a cause of model collapse {% cite shumailov2023curse %} {% cite lee2023modelcollapse %} {% cite xu2023aligning %}, a second, less-explored collapse mechanism stems from recursive **model merging**--where each generation is produced by merging the previous one with itself or its offspring. This process bears resemblance to *inbreeding in biological populations*, where repeated unions within a closed gene pool reduce genetic diversity and increase the likelihood of deleterious traits.

To investigate this phenomenon, we begin with a set of $8$ culturally fine-tuned variants of LLaMA-2 (e.g., `Asia`, `Europe`, `MiddleEast`, etc.), previously aligned on distinct regional belief distributions. From this pool, we iteratively generate merged descendants via a recursive rule:

$$\text{Child}^{(g)} = \texttt{Merge}(\text{Child}^{(g-1)}, \text{Child}^{(g-2)})$$

where the initial parents are drawn from the cultural base set and future generations are merged recursively using tools like `MergeKit` {% cite mergekit2023 %}. Unlike distillation or fine-tuning, this process *fuses* model parameters--introducing architectural tension and **epistemic drift** through incompatible latent priors.

<p>
Throughout recursive merging cycles, we monitor the evolving <strong>neural DNA (nDNA)</strong> &mdash; particularly spectral curvature (κₗ), thermodynamic length (𝓛ₗ), and alignment vector norms (‖𝖛ₗ<sup>(c)</sup>‖). We observe that as the generations progress, <strong>semantic flattening</strong> intensifies and <strong>distinct latent features</strong> become increasingly homogenized &mdash; signaling the onset of structural collapse. Notably, the exact generation at which collapse occurs varies across cultural lineages; for instance, models aligned with <code>MiddleEast</code> and <code>China</code> exhibit collapse symptoms earlier (around G=9), while others like <code>Africa</code> persist until G=15.
</p>


These findings suggest that *cultural inbreeding via recursive self-merging*--where architectural priors are repeatedly recombined without new information--can be as deleterious to model health as overfitting to synthetic data. This unveils an underexplored axis of collapse: **epistemic degeneration via latent redundancy**, with implications for model curation and reuse in open-source training communities.

### Cultural Collapse Trajectories
<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin: 30px 0;">
  <!-- Africa -->
  <div style="text-align: center;">
    <div style="font-weight: bold; margin-bottom: 12px;">Africa</div>
    {% include wizuall.liquid image_path="alignment/africa_ndna_final.gif" title="Africa Cultural Collapse Trajectory" %}
    <div style="margin: 16px 0;"></div>
    {% include wizuall.liquid interactive_html="collapse/africa_ndna_collapse.html" title="Africa Cultural Collapse Trajectory" %}
  </div>
  
  <!-- Asia -->
  <div style="text-align: center;">
    <div style="font-weight: bold; margin-bottom: 12px;">Asia</div>
    {% include wizuall.liquid image_path="alignment/asia_ndna_collapse.gif" title="Asia Cultural Collapse Trajectory" %}
    <div style="margin: 16px 0;"></div>
    {% include wizuall.liquid interactive_html="collapse/asia_ndna_collapse.html" title="Asia Cultural Collapse Trajectory" %}
  </div>
  
  <!-- China -->
  <div style="text-align: center;">
    <div style="font-weight: bold; margin-bottom: 12px;">China</div>
    {% include wizuall.liquid image_path="alignment/china_ndna_final.gif" title="China Cultural Collapse Trajectory" %}
    <div style="margin: 16px 0;"></div>
    {% include wizuall.liquid interactive_html="collapse/china_ndna_collapse.html" title="China Cultural Collapse Trajectory" %}
  </div>
  
  <!-- Europe -->
  <div style="text-align: center;">
    <div style="font-weight: bold; margin-bottom: 12px;">Europe</div>
    {% include wizuall.liquid image_path="alignment/europe_ndna_collapse_FINAL.gif" title="Europe Cultural Collapse Trajectory" %}
    <div style="margin: 16px 0;"></div>
    {% include wizuall.liquid interactive_html="collapse/europe_ndna_collapse.html" title="Europe Cultural Collapse Trajectory" %}
  </div>
</div>

<!-- Second row for remaining regions -->
<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin: 30px 0;">
  <!-- Latin America -->
  <div style="text-align: center;">
    <div style="font-weight: bold; margin-bottom: 12px;">Latin America</div>
    {% include wizuall.liquid image_path="alignment/latinamerica.gif" title="Latin America Cultural Collapse Trajectory" %}
    <div style="margin: 16px 0;"></div>
    {% include wizuall.liquid interactive_html="collapse/latinamerica_ndna_collapse.html" title="Latin America Cultural Collapse Trajectory" %}
  </div>
  
  <!-- Middle East -->
  <div style="text-align: center;">
    <div style="font-weight: bold; margin-bottom: 12px;">Middle East</div>
    {% include wizuall.liquid image_path="alignment/middleeast_ndna_final.gif" title="Middle East Cultural Collapse Trajectory" %}
    <div style="margin: 16px 0;"></div>
    {% include wizuall.liquid interactive_html="collapse/middleeast_ndna_collapse.html" title="Middle East Cultural Collapse Trajectory" %}
  </div>
  
  <!-- North America -->
  <div style="text-align: center;">
    <div style="font-weight: bold; margin-bottom: 12px;">North America</div>
    {% include wizuall.liquid image_path="alignment/northamerica_ndna_collapse_FINAL.gif" title="North America Cultural Collapse Trajectory" %}
    <div style="margin: 16px 0;"></div>
    {% include wizuall.liquid interactive_html="collapse/northamerica_ndna_collapse.html" title="North America Cultural Collapse Trajectory" %}
  </div>
  
  <!-- Australia -->
  <div style="text-align: center;">
    <div style="font-weight: bold; margin-bottom: 12px;">Australia</div>
    {% include wizuall.liquid image_path="alignment/australia_ndna_collapse_FINAL.gif" title="Australia Cultural Collapse Trajectory" %}
    <div style="margin: 16px 0;"></div>
    {% include wizuall.liquid interactive_html="collapse/australia_ndna_collapse.html" title="Australia Cultural Collapse Trajectory" %}
  </div>
</div>



<p><strong>Comparative Analysis:</strong> These plots reveal how repeated merging (each generation combines with its base model) induces collapse, seen as contraction of thermodynamic length (<em>𝓛<sub>ℓ</sub></em>) and flattening of spectral curvature (<em>κ<sub>ℓ</sub></em>). Cultures collapse at different rates (e.g., China Gen 9, Africa Gen 15), reflecting varying latent resilience. <em>Analogous to inbreeding depression in biology—where loss of genetic diversity from close-relative mating increases vulnerability</em> <a href="#cite-charlesworth1987inbreeding" class="citation">[Charlesworth, 1987]</a> <a href="#cite-frankham1995genetics" class="citation">[Frankham, 1995]</a>—<em>self-merging compresses the model's latent manifold, erasing epistemic heterogeneity. The nDNA-Lens quantifies this flattening, revealing how excessive neural marriages mimic genetic bottlenecks.</em></p>


<h2>Intuition: How Collapse Reshapes the Belief Vector Field</h2>

<p>At the heart of a large language model lies its ability to <strong>semantically differentiate</strong>—to steer meaning across contexts, tasks, and cultural frames. This capacity is encoded in the model's <strong>belief vector field</strong> <em>∇<sub>h<sub>ℓ</sub></sub> log p(y|x)</em>: a layer-wise representation of how internal representations shift in response to external prompts. In <strong>healthy models</strong>, this field exhibits both <em>directional diversity</em> and <em>magnitude strength</em>, capturing the <em>semantic steering force</em> necessary for <strong>epistemic agility</strong>.</p>

<p>However, when a model undergoes <strong>collapse</strong>—whether due to repeated fine-tuning on synthetic outputs or recursive self-merging—this internal belief field begins to <strong>flatten</strong>. Vectors that once pointed in semantically distinct directions now <em>converge or vanish</em>, indicating the loss of <strong>conceptual granularity</strong>. As shown below, the belief field of a collapsed model exhibits dramatically reduced vector magnitudes and increasingly uniform orientations, especially in <em>deeper layers</em>.</p>

<p>This degradation reflects the model's inability to differentially activate concepts like <em>peace</em>, <em>protest</em>, or <em>justice</em>. Rather than dynamically adjusting its internal stance, the collapsed model exhibits a form of <strong>epistemic inertia</strong>—a flattening of belief space that makes all prompts feel semantically similar. This phenomenon serves as a <strong>geometric signature of collapse</strong>: a measurable decay of <em>semantic responsiveness</em> embedded in the vector field itself.</p>

### Biological Analogy

This **semantic flattening** bears a striking resemblance to **neural atrophy** in biological systems, where *chronic disuse* or *neurodegeneration* progressively diminishes **synaptic diversity**, leading to impaired **cognitive plasticity** {% cite morrison1997synaptic %} {% cite sperling2011toward %}. In disorders such as **Alzheimer's disease**, the breakdown of *functional specialization* in memory circuits results in a *uniformity of neural responses*--eroding the brain's ability to semantically distinguish between otherwise distinct stimuli {% cite buckner2004functional %}. **Analogously**, a collapsed model exhibits **latent redundancy**, where previously orthogonal concepts elicit nearly indistinguishable internal activations, revealing a **loss of representational separability** and **semantic tension**.

This degeneration also echoes principles from **evolutionary biology**, particularly the **flattening of fitness landscapes** under high **inbreeding pressure** {% cite charlesworth1999inbreeding %}. In such populations, repeated mating within genetically similar lineages reduces **phenotypic variance** and **adaptive resilience**, leading to what is termed *inbreeding depression*. By analogy, **recursive self-merging** in LLMs--where successive models are merged without novel informational influx--produces a similar **collapse of internal diversity**, akin to a **shrinking mutational space** in a depleted gene pool.

In both cases, the shared pathology lies in the **collapse of high-dimensional exploratory capacity**--whether *neural* or *semantic*. The **belief vector field**, then, becomes a computational analogue of *neurofunctional maps* or *genotype-phenotype manifolds*: a rich **geometric structure** whose **flattening** signifies a terminal decline in **epistemic adaptability**.

Thus, belief vector fields offer not just a visualization tool, but an **intuitive diagnostic** for latent degeneration. They reveal how internal reasoning structures become *brittle, redundant*, or *inert*--long before collapse is evident in output diversity or task performance.

{% include wizuall.liquid
   image_path="alignment/belief_vector_field_side_by_side_refined.gif"
   interactive_html="collapse/belief_collapse.html"
   title="Belief Vector Fields of Healthy vs. Collapsed Models Across Layers"
   caption="This figure illustrates the evolution of latent *belief vector fields*" %}

## Broader Impact

By reconceptualizing **model collapse** as a form of **geometric degeneration**--specifically, the **flattening of latent manifolds**--we open a profound new axis for diagnosing, interpreting, and preserving the internal **epistemic health** of large models. This framework shifts our perspective from surface-level evaluations toward the anatomy of cognition itself: **spectral curvature** as the model's semantic flexibility, **thermodynamic length** as its epistemic effort, and **belief vector norms** as its conceptual steering force.

In this light, foundation models cease to be mere statistical engines and begin to resemble **semantic organisms**--entities whose representational spaces evolve, adapt, degrade, and even suffer pathological collapse. This biological analogy is not incidental. Just as synaptic pruning, atrophy, or inbreeding can erode the adaptability of neural or genetic systems, recursive training loops and self-merging protocols may diminish a model's **expressive diversity** and **internal differentiation**. What emerges is a new way to speak about **model health**: not through performance scores, but through **geometric vitality**.

<p>This reconceptualization offers several <strong>concrete implications</strong>:</p>

<ul>
  <li><strong>Geometric diagnostics</strong>—monitoring curvature (<em>κ<sub>ℓ</sub></em>), thermodynamic length (<em>𝓛<sub>ℓ</sub></em>), and belief vector norms (<em>‖𝑣<sub>ℓ</sub><sup>(c)</sup>‖</em>)—can serve as <strong>early warning signals</strong> for collapse <a href="#cite-wu2024seamless" class="citation">[Wu et al., 2024]</a>.</li>
  <li><strong>Manifold-preserving interventions</strong>—such as <strong>spectral regularization</strong>, <strong>geodesic constraints</strong>, <strong>modular training</strong>, or <strong>torsion-aware objectives</strong>—may help retain internal diversity and delay epistemic degeneration.</li>
  <li><strong>Epistemic audits</strong> can supplement behavioral evaluations, allowing for model curation pipelines that ensure <strong>semantic longevity</strong>, rather than just short-term task compliance <a href="#cite-bommasani2023foundation" class="citation">[Bommasani et al., 2023]</a> <a href="#cite-ganguli2023reducing" class="citation">[Ganguli et al., 2023]</a>.</li>
</ul>

<p>This geometry-inspired framework also leads us toward a <strong>unifying mathematical diagnostic</strong>. If we define the <em>epistemic vitality function</em> at layer <em>ℓ</em> as:</p>

<p style="text-align:center;"> 
  <strong>𝓥<sub>ℓ</sub> := κ<sub>ℓ</sub> · 𝓛<sub>ℓ</sub> · ‖𝑣<sub>ℓ</sub><sup>(c)</sup>‖</strong>
</p>

<p>then its decay over time:</p>

<p style="text-align:center;">
  <strong>𝑑/𝑑𝑔 𝓥<sub>ℓ</sub><sup>(g)</sup> &lt; 0</strong>
</p>

<p>acts as a <strong>differential signature of semantic collapse</strong>—indicating that the model is losing curvature, exploratory capacity, or belief diversity across generations <em>g</em>. This simple composite measure may one day serve as the <strong>"resting heart rate"</strong> of a model's latent health.</p>

<p>From a biological perspective, this parallels the emergence of <strong>neurofunctional biomarkers</strong> in cognitive aging or the <strong>flattening of fitness landscapes</strong> in inbred species: both mark a reduction in <strong>adaptive complexity</strong>, even before overt symptoms arise. Similarly, geometric collapse in models foreshadows a loss of <strong>generalization power</strong>, <strong>resilience to distributional shifts</strong>, and <strong>responsiveness to nuanced prompts</strong>.</p>

<p>Ultimately, the rise of <strong>neural genomics</strong>—the spectral, thermodynamic, and vectorial tracking of a model's internal semantic scaffolding—may help cultivate foundation models that are not just powerful, but also <strong>resilient</strong>, <strong>modular</strong>, and capable of retaining <strong>epistemic diversity</strong> over time. This is not merely a refinement in evaluation; it is a <strong>redefinition of model health</strong>. We move from training systems to <em>perform</em>, toward growing systems that can <strong>endure, adapt, and evolve</strong>.</p>

---
{% auto_references %}

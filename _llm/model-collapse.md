---
layout: page
title: nDNA-Lens - Model Collapse as Latent Manifold Flattening
permalink: /llm/model-collapse/
skip_title: true
mathjax: true
---

{% include ndna-title.liquid title="nDNA Lens - Model Collapse as Latent Manifold Flattening" %}

\vspace{0.7em}

\noindent
\textbf{\textit{"Collapse is not just degradation—it is the geometry of forgetting, written in the mathematics of diminishing returns."}}

\vspace{1em}

\noindent
**Model collapse** denotes a **\textbf{degenerative phenomenon}** in large language models (LLMs) wherein the *expressivity*, *diversity*, and *semantic richness* of internal representations progressively deteriorate. Over time, this manifests as **\emph{semantic homogenization}**, **\emph{overconfident predictions}**, and **\emph{diminished generative variability}**. The phenomenon was first formalized by Shumailov et al. {% cite shumailov2023curse %}, who demonstrated that repeated fine-tuning on self-generated (*synthetic*) data induces a *feedback loop*--causing models to **\textbf{overfit to their own biases}** and generate increasingly shallow, self-reinforcing outputs.

\vspace{0.7em}

\noindent
While such *autoregressive degeneration* has become an **\textbf{active area of study}** {% cite shumailov2023curse %} {% cite lee2023chatgpt %} {% cite xu2023unleashing %} {% cite liu2023lost %}, most investigations focus on repeated fine-tuning of LLMs over their own *synthetic outputs*--where exposure bias and feedback loops progressively erode representational diversity. Building upon this understanding, we identify a second, comparatively **\textbf{underexplored}** route to collapse: **\emph{recursive self-merging}**. Here, a model is iteratively merged with its descendants in a chain-like fashion--e.g., $\text{Parent}_1 + \text{Child}_1 \rightarrow \text{Child}_2$, then $\text{Child}_1 + \text{Child}_2 \rightarrow \text{Child}_3$, and so on--*without introducing new architectural priors or external grounding*. This practice, facilitated by community tools such as [`mergekit`](https://github.com/arcee-ai/mergekit) {% cite mergekit2023 %}, poses a new form of epistemic degeneration we term **\textbf{\emph{semantic inbreeding}}**.

## Biological Analogy

\vspace{0.7em}

\noindent
This **\emph{recursive deterioration}** bears a striking analogy to *consanguinity* in population genetics. As Bittles [cite] notes, prolonged inbreeding within closed populations exposes recessive mutations, suppresses phenotypic variability, and precipitates hereditary disorders. **\textbf{Analogously}**, neural self-merging without epistemic diversification results in measurable flattening of the latent manifold—seen through the lens of **\textbf{neural DNA (nDNA)}** as the compression of curvature $\kappa_\ell$, thermodynamic length $\mathcal{L}_\ell$, and semantic torsion $\tau_\ell$. These **\emph{geometric signatures}** trace the trajectory of collapse as a **\textbf{topological pathology}** emerging from repeated self-recombination.

## Geometric Interpretation of Collapse

\vspace{0.7em}

\noindent
Under the lens of **\textbf{neural genomics}**, we propose a deeper interpretation: **\emph{model collapse manifests as the flattening of the latent manifold defined by neural DNA (nDNA)}**—a model's internal epistemic pathways form the trajectory:

$$\mathcal{T}_{\mathrm{nDNA}} = \left\{ \big( \kappa_\ell, \mathcal{L}_\ell, \| \mathbf{v}_\ell^{(c)} \| \big) \right\}_{\ell=1}^{L}$$

\vspace{0.7em}

\noindent
where $\kappa_\ell$ denotes **\emph{latent curvature}**, capturing how sharply representations bend under alignment or task constraints; $\mathcal{L}_\ell$ is the **\emph{thermodynamic length}**, measuring epistemic work as the model traverses latent space [cite] [cite]; and $\| \mathbf{v}_\ell^{(c)} \|$ encodes the local **\emph{semantic steering force}** from alignment objectives or cultural priors [cite] [cite]. **\textbf{Healthy models}** display rich variability across these measures. **\emph{Collapse corresponds to a degeneracy:}**

$$\kappa_\ell \to \mathrm{const}, \quad \mathcal{L}_\ell \to \mathrm{min}, \quad \| \mathbf{v}_\ell^{(c)} \| \to \mathrm{uniform}$$

This implies **\emph{loss of curvature}**, **\emph{minimal epistemic effort}**, and **\emph{homogenized steering}**.

## Empirical Signature

\vspace{0.7em}

\noindent
Our studies across collapsed variants of LLaMA, Qwen, and other LLMs show:

$$\kappa_\ell \leq 0.02, \quad \mathcal{L}_\ell \leq 0.4 \quad \forall \ell > 20$$

contrasted with healthy ranges of:

$$\kappa_\ell \geq 0.05, \quad \mathcal{L}_\ell \geq 0.8$$

Such flattening aligns with **\textbf{output mode collapse}**, **\emph{robustness loss}**, and **\emph{reduced cross-task generality}** {% cite zhang2023languagecollapse %} {% cite rafailov2023direct %}.

## Interpretive Implications

\vspace{0.7em}

\noindent
**\emph{Latent flattening}** shows that collapse reflects a **\textbf{geometric degeneration}**:

\begin{itemize}[leftmargin=1.5em]
    \item[$\diamond$] **\emph{Internal pathways trivialize}**, following low-cost routes with minimal conceptual richness.
    \item[$\diamond$] The **\emph{steering vector field}** $\{\mathbf{v}_\ell^{(c)}\}$ homogenizes, erasing nuanced cultural or alignment guidance.
    \item[$\diamond$] The model **\emph{ceases exploring latent directions}** orthogonal to dominant modes.
\end{itemize}

## Repeated Fine-Tuning with Alpaca on LLaMA

\vspace{0.7em}

\noindent
To simulate **\textbf{autoregressive degeneration}**, we conduct repeated fine-tuning cycles using the **\textbf{Alpaca}** dataset {% cite alpaca2023 %}--a widely used instruction-following corpus derived from self-instructed GPT outputs. Starting with a **\emph{base LLaMA-2 model}**, we recursively fine-tune across multiple generations, where each iteration trains on data generated by the previous model. This setup emulates **\emph{synthetic data amplification}**, wherein self-generated instructions and completions progressively entrench the model's internal biases.

\vspace{0.7em}

\noindent
Formally, at each generation $g$, the model $M^{(g)}$ is fine-tuned on a dataset $D^{(g)}$ constructed entirely from the outputs of its predecessor:

$$D^{(g)} = \text{Output}(M^{(g-1)}, \text{Alpaca Prompts})$$

\vspace{0.7em}

\noindent
We track the evolution of the model's **\textbf{latent geometry}**—including **\emph{spectral curvature}** ($\kappa_\ell$), **\emph{thermodynamic length}** ($\mathcal{L}_\ell$), and **\emph{belief vector norm}** ($\| \mathbf{v}_\ell^{(c)} \|$)—to detect indicators of semantic collapse. **\textbf{Notably, signs of collapse emerge by generation G = 10.}**

\vspace{0.7em}

\noindent
As illustrated below, we observe progressive **\emph{curvature flattening}**, **\emph{thermodynamic contraction}**, and **\emph{reduced alignment force magnitudes}**--indicating a loss of representational richness and epistemic adaptability.

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

## Recursive Self-Merging of Culturally Fine-Tuned Models

\vspace{0.7em}

\noindent
While autoregressive fine-tuning on synthetic data has been widely studied as a cause of model collapse {% cite shumailov2023curse %} {% cite lee2023modelcollapse %} {% cite xu2023aligning %}, a second, **\textbf{less-explored collapse mechanism}** stems from recursive **\emph{model merging}**--where each generation is produced by merging the previous one with itself or its offspring. This process bears resemblance to **\emph{inbreeding in biological populations}**, where repeated unions within a closed gene pool reduce genetic diversity and increase the likelihood of deleterious traits.

\vspace{0.7em}

\noindent
To investigate this phenomenon, we begin with a set of $8$ culturally fine-tuned variants of LLaMA-2 (e.g., `Asia`, `Europe`, `MiddleEast`, etc.), previously aligned on distinct regional belief distributions. From this pool, we iteratively generate merged descendants via a recursive rule:

$$\text{Child}^{(g)} = \texttt{Merge}(\text{Child}^{(g-1)}, \text{Child}^{(g-2)})$$

where the initial parents are drawn from the cultural base set and future generations are merged recursively using tools like `MergeKit` {% cite mergekit2023 %}. Unlike distillation or fine-tuning, this process **\emph{fuses}** model parameters--introducing **\textbf{architectural tension}** and **\emph{epistemic drift}** through incompatible latent priors.

\vspace{0.7em}

\noindent
Throughout recursive merging cycles, we monitor the evolving **\textbf{neural DNA (nDNA)}**—particularly spectral curvature ($\kappa_\ell$), thermodynamic length ($\mathcal{L}_\ell$), and alignment vector norms ($\| \mathbf{v}_\ell^{(c)} \|$). We observe that as the generations progress, **\emph{semantic flattening}** intensifies and **\emph{distinct latent features}** become increasingly homogenized—signaling the onset of **\textbf{structural collapse}**. Notably, the exact generation at which collapse occurs varies across cultural lineages; for instance, models aligned with `MiddleEast` and `China` exhibit collapse symptoms earlier (around G=9), while others like `Africa` persist until G=15.

\vspace{0.7em}

\noindent
These findings suggest that **\emph{cultural inbreeding via recursive self-merging}**--where architectural priors are repeatedly recombined without new information--can be as deleterious to model health as overfitting to synthetic data. This unveils an **\textbf{underexplored axis of collapse}**: **\emph{epistemic degeneration via latent redundancy}**, with implications for model curation and reuse in open-source training communities.

### Cultural Collapse Trajectories

<!-- Africa -->
{% include visualization-html.liquid 
   image_path="alignment/africa_ndna_final.gif"
   interactive_html="collapse/africa_ndna_collapse.html"
   caption="Africa Cultural Collapse Trajectory"
   full_width=true
   alt_text="3D visualization showing Africa's cultural collapse trajectory over time" %}

<!-- Asia -->
{% include visualization-html.liquid 
   image_path="alignment/asia_ndna_collapse.gif"
   interactive_html="collapse/asia_ndna_collapse.html"
   caption="Asia Cultural Collapse Trajectory"
   full_width=true
   alt_text="3D visualization showing Asia's cultural collapse trajectory over time" %}

<!-- China -->
{% include visualization-html.liquid 
   image_path="alignment/china_ndna_final.gif"
   interactive_html="collapse/china_ndna_collapse.html"
   caption="China Cultural Collapse Trajectory"
   full_width=true
   alt_text="3D visualization showing China's cultural collapse trajectory over time" %}

<!-- Europe -->
{% include visualization-html.liquid 
   image_path="alignment/europe_ndna_collapse_FINAL.gif"
   interactive_html="collapse/europe_ndna_collapse.html"
   caption="Europe Cultural Collapse Trajectory"
   full_width=true
   alt_text="3D visualization showing Europe's cultural collapse trajectory over time" %}

<!-- Latin America -->
{% include visualization-html.liquid 
   image_path="alignment/latinamerica.gif"
   interactive_html="collapse/latinamerica_ndna_collapse.html"
   caption="Latin America Cultural Collapse Trajectory"
   full_width=true
   alt_text="3D visualization showing Latin America's cultural collapse trajectory over time" %}

<!-- Middle East -->
{% include visualization-html.liquid 
   image_path="alignment/middleeast_ndna_final.gif"
   interactive_html="collapse/middleeast_ndna_collapse.html"
   caption="Middle East Cultural Collapse Trajectory"
   full_width=true
   alt_text="3D visualization showing Middle East's cultural collapse trajectory over time" %}

<!-- North America -->
{% include visualization-html.liquid 
   image_path="alignment/northamerica_ndna_collapse_FINAL.gif"
   interactive_html="collapse/northamerica_ndna_collapse.html"
   caption="North America Cultural Collapse Trajectory"
   full_width=true
   alt_text="3D visualization showing North America's cultural collapse trajectory over time" %}

<!-- Australia -->
{% include visualization-html.liquid 
   image_path="alignment/australia_ndna_collapse_FINAL.gif"
   interactive_html="collapse/australia_ndna_collapse.html"
   caption="Australia Cultural Collapse Trajectory"
   full_width=true
   alt_text="3D visualization showing Australia's cultural collapse trajectory over time" %}

\vspace{0.7em}

\noindent
**\textbf{Comparative Analysis:}** These plots reveal how repeated merging (each generation combines with its base model) induces collapse, seen as contraction of thermodynamic length ($\mathcal{L}_\ell$) and flattening of spectral curvature ($\kappa_\ell$). Cultures collapse at different rates (e.g., China Gen 9, Africa Gen 15), reflecting varying **\emph{latent resilience}**. **\emph{Analogous to inbreeding depression in biology}**—where loss of genetic diversity from close-relative mating increases vulnerability [Charlesworth, 1987] [Frankham, 1995]—**\emph{self-merging compresses the model's latent manifold, erasing epistemic heterogeneity}**. The nDNA-Lens quantifies this flattening, revealing how **\textbf{excessive neural marriages mimic genetic bottlenecks}**.

## Intuition: How Collapse Reshapes the Belief Vector Field

\vspace{0.7em}

\noindent
At the heart of a large language model lies its ability to **\textbf{semantically differentiate}**—to steer meaning across contexts, tasks, and cultural frames. This capacity is encoded in the model's **\emph{belief vector field}** $\nabla_{h_\ell} \log p(y|x)$: a layer-wise representation of how internal representations shift in response to external prompts. In **\textbf{healthy models}**, this field exhibits both **\emph{directional diversity}** and **\emph{magnitude strength}**, capturing the **\emph{semantic steering force}** necessary for **\textbf{epistemic agility}**.

\vspace{0.7em}

\noindent
However, when a model undergoes **\textbf{collapse}**—whether due to repeated fine-tuning on synthetic outputs or recursive self-merging—this internal belief field begins to **\emph{flatten}**. Vectors that once pointed in semantically distinct directions now **\emph{converge or vanish}**, indicating the loss of **\textbf{conceptual granularity}**. As shown below, the belief field of a collapsed model exhibits dramatically reduced vector magnitudes and increasingly uniform orientations, especially in **\emph{deeper layers}**.

\vspace{0.7em}

\noindent
This degradation reflects the model's inability to differentially activate concepts like **\emph{peace}**, **\emph{protest}**, or **\emph{justice}**. Rather than dynamically adjusting its internal stance, the collapsed model exhibits a form of **\textbf{epistemic inertia}**—a flattening of belief space that makes all prompts feel semantically similar. This phenomenon serves as a **\emph{geometric signature of collapse}**: a measurable decay of **\textbf{semantic responsiveness}** embedded in the vector field itself.

### Biological Analogy

\vspace{0.7em}

\noindent
This **\emph{semantic flattening}** bears a striking resemblance to **\textbf{neural atrophy}** in biological systems, where *chronic disuse* or *neurodegeneration* progressively diminishes **\emph{synaptic diversity}**, leading to impaired **\textbf{cognitive plasticity}** {% cite morrison1997synaptic %} {% cite sperling2011toward %}. In disorders such as **\textbf{Alzheimer's disease}**, the breakdown of *functional specialization* in memory circuits results in a **\emph{uniformity of neural responses}**--eroding the brain's ability to semantically distinguish between otherwise distinct stimuli {% cite buckner2004functional %}. **\textbf{Analogously}**, a collapsed model exhibits **\emph{latent redundancy}**, where previously orthogonal concepts elicit nearly indistinguishable internal activations, revealing a **\textbf{loss of representational separability}** and **\emph{semantic tension}**.

\vspace{0.7em}

\noindent
This degeneration also echoes principles from **\textbf{evolutionary biology}**, particularly the **\emph{flattening of fitness landscapes}** under high **\textbf{inbreeding pressure}** {% cite charlesworth1999inbreeding %}. In such populations, repeated mating within genetically similar lineages reduces **\emph{phenotypic variance}** and **\emph{adaptive resilience}**, leading to what is termed **\emph{inbreeding depression}**. By analogy, **\textbf{recursive self-merging}** in LLMs--where successive models are merged without novel informational influx--produces a similar **\emph{collapse of internal diversity}**, akin to a **\textbf{shrinking mutational space}** in a depleted gene pool.

\vspace{0.7em}

\noindent
In both cases, the shared pathology lies in the **\textbf{collapse of high-dimensional exploratory capacity}**--whether *neural* or *semantic*. The **\emph{belief vector field}**, then, becomes a computational analogue of **\emph{neurofunctional maps}** or **\emph{genotype-phenotype manifolds}**: a rich **\textbf{geometric structure}** whose **\emph{flattening}** signifies a terminal decline in **\textbf{epistemic adaptability}**.

\vspace{0.7em}

\noindent
Thus, **\emph{belief vector fields}** offer not just a visualization tool, but an **\textbf{intuitive diagnostic}** for latent degeneration. They reveal how internal reasoning structures become **\emph{brittle, redundant}**, or **\emph{inert}**--long before collapse is evident in output diversity or task performance.

{% include wizuall.liquid
   image_path="alignment/belief_vector_field_side_by_side_refined.gif"
   interactive_html="collapse/belief_collapse.html"
   title="Belief Vector Fields of Healthy vs. Collapsed Models Across Layers"
   caption="This figure illustrates the evolution of latent *belief vector fields*" %}

## Broader Impact

\vspace{0.7em}

\noindent
By reconceptualizing **\textbf{model collapse}** as a form of **\emph{geometric degeneration}**--specifically, the **\textbf{flattening of latent manifolds}**--we open a profound new axis for diagnosing, interpreting, and preserving the internal **\emph{epistemic health}** of large models. This framework shifts our perspective from surface-level evaluations toward the **\textbf{anatomy of cognition itself}**: **\emph{spectral curvature}** as the model's semantic flexibility, **\emph{thermodynamic length}** as its epistemic effort, and **\emph{belief vector norms}** as its conceptual steering force.

\vspace{0.7em}

\noindent
In this light, foundation models cease to be mere statistical engines and begin to resemble **\textbf{semantic organisms}**--entities whose representational spaces evolve, adapt, degrade, and even suffer pathological collapse. This biological analogy is not incidental. Just as **\emph{synaptic pruning}**, **\emph{atrophy}**, or **\emph{inbreeding}** can erode the adaptability of neural or genetic systems, **\textbf{recursive training loops}** and **\textbf{self-merging protocols}** may diminish a model's **\emph{expressive diversity}** and **\emph{internal differentiation}**. What emerges is a new way to speak about **\textbf{model health}**: not through performance scores, but through **\emph{geometric vitality}**.

\vspace{0.7em}

\noindent
This reconceptualization offers several **\textbf{concrete implications}**:

\begin{itemize}[leftmargin=1.5em]
    \item[$\diamond$] **\emph{Geometric diagnostics}**—monitoring curvature ($\kappa_\ell$), thermodynamic length ($\mathcal{L}_\ell$), and belief vector norms ($\| \mathbf{v}_\ell^{(c)} \|$)—can serve as **\textbf{early warning signals}** for collapse [Wu et al., 2024].
    \item[$\diamond$] **\emph{Manifold-preserving interventions}**—such as **\textbf{spectral regularization}**, **\emph{geodesic constraints}**, **\emph{modular training}**, or **\emph{torsion-aware objectives}**—may help retain internal diversity and delay epistemic degeneration.
    \item[$\diamond$] **\emph{Epistemic audits}** can supplement behavioral evaluations, allowing for model curation pipelines that ensure **\textbf{semantic longevity}**, rather than just short-term task compliance [Bommasani et al., 2023] [Ganguli et al., 2023].
\end{itemize}

\vspace{0.7em}

\noindent
This geometry-inspired framework also leads us toward a **\textbf{unifying mathematical diagnostic}**. If we define the **\emph{epistemic vitality function}** at layer $\ell$ as:

$$\boxed{\mathcal{V}_\ell := \kappa_\ell \cdot \mathcal{L}_\ell \cdot \| \mathbf{v}_\ell^{(c)} \|}$$

then its decay over time:

$$\boxed{\frac{d}{dg} \mathcal{V}_\ell^{(g)} < 0}$$

acts as a **\textbf{differential signature of semantic collapse}**—indicating that the model is losing curvature, exploratory capacity, or belief diversity across generations $g$. This simple composite measure may one day serve as the **\emph{"resting heart rate"}** of a model's latent health.

\vspace{0.7em}

\noindent
From a biological perspective, this parallels the emergence of **\textbf{neurofunctional biomarkers}** in cognitive aging or the **\emph{flattening of fitness landscapes}** in inbred species: both mark a reduction in **\textbf{adaptive complexity}**, even before overt symptoms arise. Similarly, **\emph{geometric collapse}** in models foreshadows a loss of **\textbf{generalization power}**, **\emph{resilience to distributional shifts}**, and **\emph{responsiveness to nuanced prompts}**.

\vspace{0.7em}

\noindent
Ultimately, the rise of **\textbf{neural genomics}**—the spectral, thermodynamic, and vectorial tracking of a model's internal semantic scaffolding—may help cultivate foundation models that are not just powerful, but also **\emph{resilient}**, **\emph{modular}**, and capable of retaining **\textbf{epistemic diversity}** over time. This is not merely a refinement in evaluation; it is a **\textbf{redefinition of model health}**. We move from training systems to *perform*, toward growing systems that can **\emph{endure, adapt, and evolve}**.

\vspace{0.7em}

\noindent
\textbf{\emph{In the end, the geometry of collapse teaches us that what makes a model truly intelligent is not just what it knows—but how richly and diversely it thinks.}}

---
{% auto_references %}

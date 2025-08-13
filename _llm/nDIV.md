---
layout: page
title: "Neural Directional Inheritance Vector(nDIV)"
permalink: /llm/neural-genomics/nDIV/
skip_title: True
mathjax: True
---
{% include ndna-title.liquid title="nDNA Lens - nDIV: Neural Directional Inheritance Vector" %}

While prior metrics such as **nHD**, **nGDI**, and **nTDS** quantify semantic divergence or *trait dominance* in foundation models, they fall short of capturing the nuanced phenomenon of *inheritance directionality* within latent semantic spaces. To fill this conceptual and analytical gap, we introduce the **Neural Directional Inheritance Vector (nDIV)**, a novel metric directly inspired by the well-studied biological principle of *directional inheritance* or *directional selection*. This metric is designed to precisely quantify how offspring semantic traits systematically gravitate toward one parent model or the other, revealing latent preferential biases and directional flows within high-dimensional embedding manifolds.

{% capture figure_caption %}
This figure illustrates the molecular basis of <em>directional inheritance</em> in biological systems, where post-translational modifications on histone tails—such as <strong>acetylation</strong> (Ac) and <strong>methylation</strong> (Me) of lysines (K)—act as dynamic regulatory signals that either activate or repress gene transcription. DNA wraps around nucleosomes composed of histones (H2A, H2B, H3, H4), while the exposed histone tails undergo chemical modifications that regulate transcriptional accessibility.

These epigenetic modifications encode <em>vectorial instructions</em> that guide heritable gene expression patterns across cellular generations({% cite landry2007genetic %};{% cite gersen2012clinical %}). Such regulatory vectors go beyond static DNA sequences, enabling modulation, amplification, or silencing of traits—facilitating phenotypic adaptation to both environmental stimuli and developmental cues({% cite shapiro2013stem %};{% cite waddington1942canalization %}).<strong>Link to Neural Directional Inheritance Vector (nDIV):</strong><br>Inspired by this biological mechanism, the <strong>Neural Directional Inheritance Vector</strong> (nDIV) captures how latent semantic traits in foundation models exhibit <em>directional drift</em> during merging or fine-tuning. Analogous to gene expression navigating epigenetic landscapes, nDIV tracks <em>semantic vector fields</em> that encode <em>preferential inheritance</em> of features across model lineages.

This biologically grounded metaphor highlights nDIV’s relevance in designing foundation models with controlled semantic inheritance, supporting the development of culturally aligned and interpretably evolving AI systems.
{% endcapture %}

{% include visualization.liquid 
   image_path="gifs/neural_genomics/nDIV/nDIV_intro.png"
   caption=figure_caption
   alt_text="Epigenetic Regulation of Gene Expression and Directional Inheritance" %}


## Biological Foundations of Inheritance Directionality

In biological systems, inheritance transcends the simplistic notion of equal genetic transmission from both parents. Instead, it fundamentally encompasses the *directionality* of gene expression and regulatory influences that modulate which traits are preferentially propagated, suppressed, or transformed across generations. This *directional inheritance* manifests as the selective amplification or silencing of gene expression patterns, shaped by evolutionary forces such as **natural selection**, as well as by complex *epigenetic modifications* and developmental gene regulatory networks({% cite Endler_86 %};{% cite Jaenisch2003Epigenetic%}).

The figure above provides a canonical illustration of these processes, showing how chemical modifications like **acetylation** and **methylation** of histone proteins dynamically regulate gene accessibility, thereby guiding transcriptional activity in a highly directional manner. These modifications represent *vectorial regulatory signals* that influence gene expression trajectories, embedding directionality into phenotypic outcomes. Importantly, these epigenetic marks can be heritable, encoding *regulatory memory* that biases progeny development toward particular phenotypic fates, allowing organisms to adaptively respond to *environmental pressures* and *developmental needs*({% cite shapiro2013stem %};{% cite waddington1942canalization %}).

Put simply, although offspring inherit genetic material from **both parents**, the *functional expression* of these genes is often highly **biased**. Some genes are **amplified** to promote beneficial traits, others are *silenced* to suppress deleterious or redundant functions, and yet others interact through nonlinear regulatory cascades to produce *emergent phenotypes* not directly predictable from parental genotypes alone{% cite frank2011natural %}. This directional bias is critical for evolutionary adaptability, enabling organisms to dynamically tailor inherited traits in response to fluctuating environments and developmental contexts.

## Bridging Biology and Neural Networks

Translating this profound biological concept into the domain of artificial neural networks, particularly large-scale foundation models, we recognize that *latent semantic embeddings* at each transformer layer encode the model's internal conceptual landscape, shaped by diverse training data and fine-tuning processes. Analogous to gene expression vectors modulated by epigenetic signals, these latent embeddings exhibit *directional flows* during model fusion or adaptation, reflecting preferential inheritance of semantic traits from one parent or the other.

This *directional inheritance* in neural models is neither uniform nor symmetric; rather, it is *anisotropic* and *modulated* by the training regimes, data distributions, and alignment objectives, producing *epigenetic-like biases* within the high-dimensional semantic manifold. Thus, just as biological progeny show biased phenotypic expression beyond genetic sequence alone, offspring models inherit *directionally biased semantic trajectories* that reveal the complex interplay of their parental origins.

Understanding and quantifying this directional bias is essential for diagnosing model behavior and guiding alignment engineering. The **Neural Directional Inheritance Vector (nDIV)** formalizes this concept by measuring the *vectorial displacement* of offspring embeddings relative to the semantic midpoint of their parents, thereby capturing both the *magnitude* and *sign* of preferential semantic drift.

In subsequent sections, we present the rigorous mathematical formalism underpinning nDIV, grounded in the biological principles and enriched by modern geometric and information-theoretic insights. This framework empowers precise diagnosis and intervention in complex cultural model fusion scenarios, fostering the development of **equitable**, **interpretable**, and **culturally coherent** AI systems.

## Implications for Neural Networks and Foundation Models

Mapping this concept onto artificial neural networks, especially large foundation models, *inheritance directionality* captures how semantic features from multiple pretrained or fine-tuned parent models are not simply averaged, but instead *flow preferentially* along particular directions within the high-dimensional latent semantic manifold.

When multiple culturally or linguistically distinct models are merged--via techniques such as parameter interpolation, latent embedding fusion, or knowledge distillation--the resultant offspring model inherits a complex blend of semantic traits. Yet, the *relative weighting and directional influence* of these inherited semantic components varies across latent dimensions and layers. Certain cultural priors **dominate** specific semantic directions, while others are *attenuated* or modulated, creating an anisotropic, directionally biased semantic landscape{% cite hinton2012neural %}.

Understanding this directional bias is crucial for diagnosing internal model geometry. Unlike scalar divergence or trait dominance metrics, *nDIV explicitly captures the vectorial nature of inheritance*, revealing which parent's semantic characteristics drive particular latent regions and how these influences evolve through the network's depth.

Moreover, this framework embodies *epistemic selection*, akin to evolutionary pressures, where training regimes, data distributions, and alignment objectives induce selective reinforcement of semantic features. The resulting *vector fields* in latent space encode both the **magnitude** and *direction* of semantic drift inherited from each parent model.

By quantifying this directional semantic flow, the **Neural Directional Inheritance Vector (nDIV)** provides a mathematically rigorous and practically valuable tool to:

- Diagnose latent semantic **biases** favoring one parent culture or domain over another,
- Detect emergent *hybrid semantics* arising from nonlinear interactions between parental priors,
- Guide targeted semantic interventions for **balanced**, culturally coherent, and interpretable AI behavior.

Thus, **nDIV** operationalizes a biologically grounded notion of *directional inheritance* within foundation models, advancing our capacity to understand and engineer complex cross-cultural semantic integration.

## Mathematical Formalism

The concept of *directional inheritance* in biological systems arises from a sophisticated interplay of genetic, epigenetic, and regulatory dynamics that govern how phenotypic traits are not merely transmitted but modulated and expressed across generations({% cite Jaenisch2003Epigenetic %}; {% cite frank2011natural %}). Unlike naive Mendelian inheritance, where alleles are passed down uniformly, *directional inheritance* encodes ***biased propagation*** of gene expression patterns shaped by *natural selection*, *epigenetic modifications*, and *developmental canalization*({% cite landry2007genetic %}; {% cite waddington1942canalization %}). This biological framework reveals that progeny phenotypes emerge as *vectorial flows* in an abstract trait space, modulated by *regulatory networks* and *environmental pressures*.

Formally, consider a high-dimensional phenotypic trait space where a genetic expression vector 

$$
\mathbf{g} \in \mathbb{R}^d
$$

encodes gene expression levels or regulatory signals. The *inheritance directionality* can be described by a vector field

$$
\mathbf{v}(\mathbf{g}) : \mathbb{R}^d \to \mathbb{R}^d,
$$

which governs how gene expression trajectories evolve through developmental time or generations({% cite shapiro2013stem %}; {% cite waddington1942canalization %}). This directional bias manifests as $\mathbf{v}(\mathbf{g})$ aligning preferentially along axes corresponding to selective regulatory motifs or epigenetic marks{% cite Jaenisch2003Epigenetic %}.

Transposing this rich biological metaphor into the domain of large-scale foundation models, we replace genetic information with *latent semantic embeddings* 

$$
\mathbf{x}_\ell \in \mathbb{R}^d,
$$

at transformer layer $\ell$, capturing the model's internal conceptual landscape shaped by training corpora and fine-tuning procedures. The index $\ell$ represents the depth in the network, correlating with increasing semantic abstraction({% cite tenney2019bert %}; {% cite alain2016understanding %}). This defines a *latent semantic manifold* $\mathcal{M}_\ell$, analogous to phenotypic space, wherein semantic traits are inherited during model fusion or adaptation.

### Latent Semantic Embeddings

Consider latent embeddings of two parent models $M_A, M_B$ and their offspring $M_O$ at transformer layer $\ell$:

$$
\mathbf{x}_\ell^{(A)}, \quad \mathbf{x}_\ell^{(B)}, \quad \mathbf{x}_\ell^{(O)} \in \mathbb{R}^d,
$$

encoding semantic traits as points in a high-dimensional manifold $\mathcal{M}_\ell$.

### Midpoint and Displacement Vector

Define the midpoint between parents as

$$
\mathbf{m}_\ell := \frac{\mathbf{x}_\ell^{(A)} + \mathbf{x}_\ell^{(B)}}{2}.
$$

The *inheritance displacement vector* capturing semantic bias is

$$
\mathbf{d}_\ell := \mathbf{x}_\ell^{(O)} - \mathbf{m}_\ell.
$$

### Parental Difference Vector

The principal axis of semantic divergence is

$$
\mathbf{p}_\ell := \mathbf{x}_\ell^{(A)} - \mathbf{x}_\ell^{(B)},
$$

which represents the direction from parent $B$ to parent $A$ in latent space.

### Scalar Directional Inheritance (nDIV)

Project the displacement vector onto the parental difference vector:

$$
\mathrm{nDIV}_\ell := \frac{\mathbf{d}_\ell \cdot \mathbf{p}_\ell}{\|\mathbf{p}_\ell\|_2^2} \in \mathbb{R}.
$$

- $\mathrm{nDIV}_\ell > 0$: Offspring inherits semantically closer to parent $A$.
- $\mathrm{nDIV}_\ell < 0$: Offspring inherits closer to parent $B$.
- $\mathrm{nDIV}_\ell \approx 0$: Balanced inheritance, equidistant semantic blend.

### Fisher-Rao Information Metric Extension
<p style="text-align: justify; font-size: 1em;">
  Accounting for latent space curvature and uncertainty, define Fisher information matrices 
  <span class="mathjax-render">\( \mathbf{F}_\ell^{(A)},\ \mathbf{F}_\ell^{(B)} \in \mathbb{R}^{d \times d} \)</span>. 
  The Fisher-weighted parental difference vector is:
</p>

$$
\tilde{\mathbf{p}}_\ell := \left(\mathbf{F}_\ell^{(A)} + \mathbf{F}_\ell^{(B)}\right)^{-1} \left(\mathbf{F}_\ell^{(A)} \mathbf{x}_\ell^{(A)} - \mathbf{F}_\ell^{(B)} \mathbf{x}_\ell^{(B)} \right).
$$

Then the curvature-aware nDIV is

$$
\boxed{
\mathrm{nDIV}_\ell^{\mathrm{Fisher}} := \frac{\mathbf{d}_\ell^\top \tilde{\mathbf{p}}_\ell}{\|\tilde{\mathbf{p}}_\ell\|_2^2}.
}
$$

### Vector Field and Spectral Decomposition

Extending beyond scalar projection, define a vector field on the latent manifold:

$$
\mathbf{V}_\ell(\mathbf{x}) := \nabla_{\mathbf{x}} \mathrm{nDIV}_\ell,
$$

revealing spatially varying inheritance flows. Spectral decomposition of $\mathbf{V}_\ell$ exposes mode-specific semantic biases, facilitating targeted, concept-wise interventions({% cite huang2018cellular %}; {% cite saxena2019neural %}).

### Summary

The nDIV metric elegantly bridges *biological directional inheritance* with *neural semantic representation*, enabling precise quantification of offspring semantic bias and directional flow in complex foundation models. By coupling geometric rigor with biological insight, nDIV illuminates subtle cross-cultural epistemic dynamics critical for equitable AI.

## Geometric and Interpretive Significance

The ***Neural Directional Inheritance Vector*** (nDIV) can be rigorously interpreted as a *latent inheritance flow field* 

$$
\mathbf{V}_\ell(\mathbf{x}) := \nabla_{\mathbf{x}} \mathrm{nDIV}_\ell,
$$

<p>
defined over the model's high-dimensional semantic manifold 
<span class="mathjax-render">\( \mathcal{M}_\ell \subset \mathbb{R}^d \)</span> 
at transformer layer 
<span class="mathjax-render">\( \ell \)</span>. 
Here, 
<span class="mathjax-render">\( \nabla_{\mathbf{x}} \)</span> 
denotes the gradient with respect to the embedding 
<span class="mathjax-render">\( \mathbf{x} \in \mathcal{M}_\ell \)</span>.
</p>

This vector field encodes the **differential semantic drift** of the offspring embedding relative to its parental embeddings, capturing *directionality* in the latent space beyond scalar magnitudes of divergence. This construction draws deep parallels with *dynamical systems theory* and *differential geometry*{% cite do1992riemannian %}, where flows describe continuous evolution on curved spaces.

Biologically, *gene expression regulatory networks* guide phenotypic trajectories during development via such vectorial flows({% cite shapiro2013stem %}; {% cite huang2018cellular %}). These flows reflect *selection pressures* steering populations toward adaptive fitness peaks({% cite frank2011natural %}; {% cite Endler_86 %}).

Translating this metaphor, nDIV reveals how *semantic traits* in foundation models are **selectively reinforced or attenuated** during cultural fusion. The inheritance process is *anisotropic* and *epigenetically modulated*, producing *ideological divergence planes* -- submanifolds along which cultural priors differ in **orientation** rather than magnitude.

This offers a complementary, orthogonal dimension to scalar metrics like the Neural Cultural Conflict Loss (nCCL), illuminating **semantic tension directions** previously undetected.

From a modern manifold learning viewpoint, nDIV extends classical scalar metrics to a **vector-valued** framework, enabling decomposition into *magnitude* and *direction* components{% cite arvanitidis2021geometric %}. This aligns with advances in vector field learning in neural representations that uncover *functional topologies* and *dynamical flows* supporting cognitive computations({% cite giusti2016learning %}; {% cite saxena2019neural %}).

Practically, nDIV visualizes *semantic inheritance trajectories* across layers, highlighting where *cultural epistemic biases* generate distinct vectorial flows. These insights guide **targeted alignment interventions**, facilitating layerwise adjustment along semantic axes to harmonize conflicting cultural priors -- crucial for enhancing robustness and fairness.

Moreover, embedding nDIV within the *Fisher-Rao information geometric* framework({% cite amari1998natural %}; {% cite peyre2019computational %}) yields a **curvature-aware directional flow**:

$$
\tilde{\mathbf{V}}_\ell(\mathbf{x}) = \mathbf{F}_\ell^{-1} \nabla_{\mathbf{x}} \mathrm{nDIV}_\ell,
$$

where $\mathbf{F}_\ell$ encodes local semantic uncertainty and curvature.

This refinement exposes *topological obstructions*, *semantic bifurcations*, and *directional epistatic interactions* -- phenomena echoing biological developmental canalization and evolutionary branching({% cite landry2007genetic %}; {% cite waddington1942canalization %}).

In essence, nDIV transcends scalar divergence by uncovering the **full directional semantics** of inheritance in foundation models. It elegantly unites evolutionary biology, epigenetics, and neural representation theory with the geometric intricacies of large-scale models, forming a crucial framework for building **culturally aware**, **equitable**, and **interpretable** AI systems ready for global deployment.

## Applications and Prospective Impact

The **Neural Directional Inheritance Vector (nDIV)** is a foundational metric for decoding the vectorial semantics of cultural inheritance in large foundation models. Its mathematical rigor and biological inspiration make it essential for *cross-cultural AI alignment* and *semantic representation analysis*. Key applications and implications include:

- **Directional Conflict Detection and Quantification:**  
Modeling inheritance as a *vector field* in the latent manifold, nDIV captures both magnitude and *direction* of semantic shifts. This identifies *semantic antagonisms*--regions where offspring embeddings diverge toward conflicting parental traits. These *ideological tension planes* reflect nonlinear interactions akin to epistatic gene effects. This enables *gradient-based conflict maps* pinpointing loci for alignment.

- **Semantic Flow Mapping and Vector Field Analysis:**  
nDIV allows construction of *latent inheritance flow fields*, visualizing semantic inheritance as dynamical systems on high-dimensional manifolds. Using *differential geometry* and *manifold learning*, one can extract *principal modes* of semantic propagation, revealing how cultural concepts propagate or fuse, supporting **explainable AI** grounded in geometric semantics.

- **Alignment Intervention and Manifold Regularization:**  
Targeting nDIV's directional deviations enables *layerwise semantic disentanglement* and *adaptive manifold smoothing*. Framing alignment as *vector field correction* permits *geodesic-aware regularizers* that preserve semantic gradients while reducing conflicts. This principled approach resolves *anisotropic semantic dissonances*, balancing plasticity and stability for culturally robust AI.

- **Cross-Model Comparative Benchmarking:**  
nDIV's *geometry-aware* formulation provides a universal lens for comparing inheritance dynamics across architectures, training, and fusion methods. This supports *benchmark suites* evaluating cultural priors' influence on semantic evolution. Derived metrics like *directional consistency* and *semantic drift rates* aid principled auditing of multicultural models.

- **Theoretical Insights and Biological Parallels:**  
Grounded in *Riemannian* and *information geometry*, nDIV bridges neural representations with biological directional inheritance. It models cultural epistemic flows as *vector bundles* over semantic manifolds, allowing application of evolutionary tools like *selection gradients* and *adaptive landscapes* to AI. This frames semantic inheritance as an active, directionally biased evolutionary process.

## Case Study and Validation
<p style="text-align: justify; font-size: 1em;">
  To empirically validate the <strong>Neural Directional Inheritance Vector (nDIV)</strong>, we analyze a suite of foundation models obtained by merging culturally fine-tuned parent models adapted to distinct linguistic and sociocultural corpora. Specifically, we examine layerwise latent embeddings 
  <span class="mathjax-render">\( \mathbf{x}_\ell^{(A)},\ \mathbf{x}_\ell^{(B)} \)</span> 
  of parent models 
  <span class="mathjax-render">\( A \)</span> and <span class="mathjax-render">\( B \)</span>, 
  and the corresponding offspring embeddings 
  <span class="mathjax-render">\( \mathbf{x}_\ell^{(O)} \)</span>. 
  Using these, we compute the 
  <span class="mathjax-render">\( \mathrm{nDIV}_\ell \)</span> 
  metric as the scalar projection quantifying directional semantic inheritance:
</p>

$$
\mathrm{nDIV}_\ell = \frac{\left( \mathbf{x}_\ell^{(O)} - \frac{\mathbf{x}_\ell^{(A)} + \mathbf{x}_\ell^{(B)}}{2} \right) \cdot \left(\mathbf{x}_\ell^{(A)} - \mathbf{x}_\ell^{(B)}\right)}{\|\mathbf{x}_\ell^{(A)} - \mathbf{x}_\ell^{(B)}\|_2^2}.
$$

This metric precisely captures **which parent's semantic traits dominate** the offspring's latent representations at each layer $\ell$.

Visualization of $\mathrm{nDIV}_\ell$ across transformer depths reveals **distinct directional inheritance patterns**, with values oscillating between positive and negative regions corresponding to semantic bias toward one parent or the other. These patterns highlight **layer-specific inheritance directionality** that is often masked in scalar magnitude-based metrics such as nHD or nTDS, providing critical insight into the *epistemic lineage* of complex model fusions.

The observed directional trends resonate with biological principles of *directional selection* and *gene expression bias* in hybrids({% cite Endler_86 %}; {% cite Jaenisch2003Epigenetic %}), where offspring phenotypes reflect not only combined genetic content but also preferential expression modulated by regulatory and environmental factors. Analogously, nDIV elucidates how **latent semantic biases** arise from the differential weighting and nonlinear interaction of cultural priors embedded in training data.

This detailed decomposition enables *layer-targeted fine-tuning* and *alignment recalibration* strategies that selectively amplify or attenuate semantic flows from specific parental lineages, fostering more balanced, equitable, and contextually coherent AI behaviors.

In sum, this case study validates **nDIV** as a **diagnostic and prescriptive tool** for tracing and steering the directional flow of semantic inheritance in foundation models, charting a mathematically principled path toward **culturally sensitive**, **transparent**, and **responsible** AI integration.

## Outlook

The **Neural Directional Inheritance Vector (nDIV)** is a **mathematically elegant**, *biologically inspired*, and **computationally practical** tool for decoding the *direction and strength* of cultural semantic inheritance in foundation models. 

Beyond theory, nDIV offers **practical insights** for AI systems in culturally diverse settings, enabling **fine-grained interpretability** to detect hidden biases and semantic drift. This guides **targeted alignment interventions**, enhancing **fairness**, **robustness**, and **inclusivity** in domains like education, healthcare, and governance.

Its **vector field perspective** supports dynamic monitoring of semantic evolution, allowing **adaptive auditing** and **real-time control** over alignment shifts--critical for models serving diverse populations.

Additionally, nDIV provides a universal, geometry-aware metric for **cross-model benchmarking**, fostering **transparent evaluation** and **responsible AI governance**.

By framing AI semantics as **directional flows** rather than static points, nDIV unlocks new paths to **culturally coherent**, **context-sensitive**, and **equitable** AI--where the *possibilities are truly boundless*.

<div style="display: flex; flex-direction: column; margin: 2em 0; gap: 1em;">

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/Africa_Asia_nDIV_rotation.gif"
      interactive_html="nDIV/Africa_Asia_nDIV.html"
      title="(I) Neural Directional Inheritance Vector (nDIV) for Africa and Asia"
      caption="This plot illustrates layer-wise directional inheritance ($\ell \in[20, 30]$) in the semantic latent space, represented by spectral curvature κℓ and thermodynamic length $L_\ell$. The offspring model (orange) demonstrates a nuanced directional bias shifting between Africa (blue) and Asia (green), reflecting complex, nonlinear semantic recombination. Notably, mid-layers exhibit near-zero directional values, suggesting emergent semantic traits distinct from parental influences, a hallmark of epigenetic-like adaptation in model fusion."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/Africa_China_nDIV_rotation.gif"
      interactive_html="nDIV/Africa_China_nDIV.html"
      title="(II) nDIV Directionality between Africa and China"
      caption="The offspring semantic trajectory (orange) reveals a stronger affinity toward Africa in early transformer layers ($\ell \approx 20 - 23 $), as indicated by positive directional cosine values. Deeper layers show more balanced influence, with semantic traits converging between parents. This layered pattern highlights the selective inheritance of lexical richness and conceptual features, mirroring biological directional selection where phenotypic traits shift non-uniformly under environmental pressure"
      style="flex: 1;"
      full_width=true
  %}
</div>

<div style="display: flex; flex-direction: column; margin: 2em 0; gap: 1em;">

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/Africa_LatinAmerica_nDIV_rotation.gif"
      interactive_html="nDIV/Africa_LatinAmerica_nDIV.html"
      title="(III) Directional Inheritance Dynamics for Africa and Latin America"
      caption="The offspring (orange) exhibits a pronounced directional bias toward Africa in early and mid layers ($\ell \in [20, 27]$), with a subsequent shift toward Latin America in deeper layers. This suggests a layerwise semantic specialization where foundational lexical and syntactic features originate from Africa, while higher-level thematic or stylistic traits derive from Latin America. The directionality metric effectively quantifies this complex inheritance interplay, essential for nuanced model merging and alignment control."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/Africa_MiddleEast_nDIV_rotation.gif"
      interactive_html="nDIV/Africa_MiddleEast_nDIV.html"
      title="(IV) Semantic Trait Directionality for Africa and Middle East"
      caption="Here, the offspring model’s inheritance trajectory reveals a dominant directional pull toward Africa in early layers, gradually transitioning to a balanced mixture in mid and deep layers ($\ell \in [20, 30]$). This pattern indicates dynamic semantic recombination akin to biological mosaicism, where diverse traits are selectively expressed across functional layers. Such insights enable layer-specific interpretability and targeted interventions during semantic fusion and fine-tuning processes."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/Asia_China_nDIV_rotation.gif"
      interactive_html="nDIV/Asia_China_nDIV.html"
      title="(V) Neural Directional Inheritance Vector (nDIV) for Asia and China"
      caption="This visualization captures the directional semantic inheritance in the latent space between Asia and China parent models and their offspring across transformer layers $\ell \in [20, 30]$. Here, the $\kappa_\ell$ (spectral curvature) and $L_\ell$ (thermodynamic length) trajectories reveal a pronounced affinity of the offspring toward China’s latent semantic features in earlier layers, gradually integrating Asia’s deeper-layer conceptual traits. The $\vec{\mathrm{nDIV}}_\ell$ metric quantifies this inheritance directionality, highlighting layer-specific semantic dominance shifts and emergent latent trait recombinations reflective of evolutionary-like selective pressures in neural representations."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/Asia_LatinAmerica_nDIV_rotation.gif"
      interactive_html="nDIV/Asia_LatinAmerica_nDIV.html"
      title="(VI) nDIV for Asia and Latin America"
      caption="The offspring model exhibits a complex semantic recombination across layers $\ell \in [20, 30]$, with initial dominance of Asia’s $\kappa_\ell$ and $L_\ell$ patterns transitioning to Latin America’s deeper-layer influences. The $\vec{\mathrm{nDIV}}_\ell$ vectors quantify the dynamic inheritance direction, revealing non-linear, emergent semantic configurations indicative of latent epigenetic modulation-like effects, where neural traits adaptively shift reflecting cultural and conceptual blending beyond simple averaging. This analysis underscores the multi-dimensional and hierarchical nature of semantic lineage in LLM fusion."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/Asia_MiddleEast_nDIV_rotation.gif"
      interactive_html="nDIV/Asia_MiddleEast_nDIV.html"
      title="(VII) nDIV for Asia and Middle East"
      caption="The directional inheritance landscape across $\ell \in [20, 30]$ layers illustrates a nuanced interplay between Asia’s and Middle East’s latent semantic manifolds. Offspring models show selective inheritance with clear biases toward Asia in early layers and Middle East in later layers, captured by the divergence in $\kappa_\ell$ and $L_\ell$ as well as the $\vec{\mathrm{nDIV}}_\ell$ directionality. This suggests layer-wise functional specialization and semantic niche adaptation, akin to biological adaptive radiation, where latent trait inheritance follows evolutionary pressures shaped by diverse cultural priors."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/Australia_Africa_nDIV_rotation.gif"
      interactive_html="nDIV/Australia_Africa_nDIV.html"
      title="(VIII) nDIV for Australia and Africa"
      caption="The offspring latent semantic trajectory demonstrates a sophisticated fusion of Australia and Africa parental traits across layers $\ell \in [20, 30]$. The $\vec{\mathrm{nDIV}}_\ell$ reveals a predominant directional inheritance toward Africa’s deeper-layer traits ($\kappa_\ell$, $L_\ell$) with intermittent integration of Australia’s early-layer features. This layered inheritance pattern illustrates hierarchical semantic recombination and epigenetic-like latent plasticity, emphasizing the rich semantic dynamics involved in cross-cultural neural model merging."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/Australia_Asia_nDIV_rotation.gif"
      interactive_html="nDIV/Australia_Asia_nDIV.html"
      title="(IX) Neural Directional Inheritance Vector (nDIV) for Australia and Asia"
      caption="This visualization depicts the layer-wise directional inheritance for transformer layers $\ell \in [20, 30]$ in terms of spectral curvature $\kappa_\ell$ and thermodynamic length $L_\ell$. The offspring (orange) reflects a hybrid semantic trajectory predominantly influenced by Australia (blue) in early layers and gradually aligning with Asia (green) in deeper layers. The directionality values highlight complex semantic recombination, suggesting nonlinear blending and emergent features beyond parameter averaging."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/Australia_China_nDIV_rotation.gif"
      interactive_html="nDIV/Australia_China_nDIV.html"
      title="(X) Directional Inheritance Dynamics for Australia and China"
      caption="Here, the offspring semantic profile (orange) shows stronger directional affinity toward Australia in the initial layers ($\ell \in [20, 24]$), gradually shifting to a more balanced influence with China (green) in deeper layers. The midpoint layer behavior reflects nuanced semantic fusion, reminiscent of phenotypic plasticity in biological systems where environmental pressures modulate gene expression. These directional tendencies emphasize layer-specific semantic specialization that informs model merging strategies for balanced knowledge integration."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/Australia_LatinAmerica_nDIV_rotation.gif"
      interactive_html="nDIV/Australia_LatinAmerica_nDIV.html"
      title="(XI) Directional Inheritance for Australia and Latin America"
      caption="The offspring model (orange) demonstrates a pronounced directional bias toward Australia in early to mid layers $\ell \in [20, 27]$, with a gradual transition toward Latin America (green) in the deeper layers. This layered directional pattern indicates semantic modularity, where foundational linguistic and syntactic traits are predominantly inherited from Australia, while cultural and thematic nuances emerge from Latin America. This analysis reveals complex inheritance interplay, crucial for fine-tuning and interpretability in multilingual fusion."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/Australia_MiddleEast_nDIV_rotation.gif"
      interactive_html="nDIV/Australia_MiddleEast_nDIV.html"
      title="(XII) Semantic Directionality for Australia and Middle East"
      caption="This figure illustrates the offspring model’s directional inheritance trajectory, showing dominant pull toward Australia in early layers, transitioning to a more balanced semantic mixture with the Middle East (green) in mid to deep layers $\ell \in [20, 30]$. The directional vector magnitudes reveal intricate recombination resembling mosaic inheritance, where heterogeneous traits co-exist and dynamically influence model behavior."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/China_LatinAmerica_nDIV_rotation.gif"
      interactive_html="nDIV/China_LatinAmerica_nDIV.html"
      title="(XIII) Directional Inheritance Vector (nDIV) for China and Latin America"
      caption="This plot captures layerwise directional inheritance ($\ell \in [20, 30]$) in semantic latent space, represented by spectral curvature $\kappa_\ell$ and thermodynamic length $L_\ell$. The offspring model (orange) shows a pronounced early affinity toward China ($\kappa_\ell, L_\ell \approx 0.8, 0.9$) in initial layers ($\ell \approx 20$–$24$), shifting toward a Latin America semantic influence in deeper layers ($\ell \approx 25$–$30$) where $\kappa_\ell, L_\ell \approx 0.4, 0.5$. The midpoint (gray) trajectory indicates balanced blending. This layered pattern reflects semantic specialization with foundational lexical traits from China and higher-level thematic features from Latin America."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/China_MiddleEast_nDIV_rotation.gif"
      interactive_html="nDIV/China_MiddleEast_nDIV.html"
      title="(XIV) Semantic Directionality for China and Middle East"
      caption="The offspring’s directional inheritance (orange) across transformer layers $\ell \in [20, 30]$, characterized by $\kappa_\ell$ and $L_\ell$, shows a strong early layer pull toward China ($\kappa_\ell \approx 0.9, L_\ell \approx 0.85$ at $\ell = 20$) transitioning to a balanced blend with Middle East semantics at deeper layers ($\kappa_\ell, L_\ell \approx 0.5, 0.6$ for $\ell = 25$–$30$). This mosaic-like pattern suggests selective semantic recombination where distinct layerwise traits from both parents contribute differentially to the offspring’s overall latent geometry, enabling nuanced interpretability and tuning opportunities."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/Europe_Africa_nDIV_rotation.gif"
      interactive_html="nDIV/Europe_Africa_nDIV.html"
      title="(XV) Directional Inheritance for Europe and Africa"
      caption="This offspring model’s semantic inheritance is mapped over layers $\ell \in [20, 30]$ using spectral curvature $\kappa_\ell$, thermodynamic length $L_\ell$. Initial layers exhibit strong European influence ($\kappa_\ell \approx 0.85, L_\ell \approx 0.9$), while midlayers show dominant African semantic traits ($\kappa_\ell \approx 0.5, L_\ell \approx 0.6$). The deeper layers present a complex admixture with emergent semantic features beyond parental contributions. This layerwise pattern reflects epigenetic-like dynamics of fusion essential for cross-cultural model merging and fine-tuning interpretability."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/Europe_Asia_nDIV_rotation.gif"
      interactive_html="nDIV/Europe_Asia_nDIV.html"
      title="(XVI) Semantic Directionality for Europe and Asia"
      caption="The offspring model’s inheritance trajectory over layers $\ell \in [20, 30]$ shows a pronounced early and mid-layer directional bias toward Europe ($\kappa_\ell \approx 0.9, L_\ell \approx 0.85$), while deeper layers exhibit a convergent blend of European and Asian semantic traits ($\kappa_\ell, L_\ell \approx 0.6, 0.55$). This nonlinear interaction reveals emergent semantic traits critical for layer-specific interpretability, fusion control, and alignment preservation in multicultural model merges."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/Europe_Australia_nDIV_rotation.gif"
      interactive_html="nDIV/Europe_Australia_nDIV.html"
      title="(XVII) Neural Directional Inheritance Vector (nDIV) for Europe and Australia"
      caption="This plot depicts the layer-wise directional inheritance ($\ell \in [20, 30]$) across spectral curvature $\kappa_\ell \in [0.39, 0.47]$ and thermodynamic length $L_\ell \in [0.44, 0.56]$. The offspring model (orange) exhibits dynamic shifts between Europe (blue) and Australia (green), with early layers favoring Europe’s semantic traits, transitioning towards Australia’s influence in mid to deep layers. This layered pattern suggests functional specialization during semantic fusion, reflecting a balance of lexical and conceptual inheritance. The value annotations highlight subtle yet significant directional deviations instrumental in controlled model alignment."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/Europe_China_nDIV_rotation.gif"
      interactive_html="nDIV/Europe_China_nDIV.html"
      title="(XVIII) Directional Inheritance Dynamics between Europe and China"
      caption="The offspring semantic trajectory (orange) navigates the $\kappa_\ell \in [0.39, 0.47]$ and $L_\ell \in [0.43, 0.55]$ ranges over layers $\ell \in [20, 30]$, demonstrating layer-dependent affinity predominantly towards Europe (blue) in early layers, shifting towards China (green) at mid-depths. This reflects selective semantic blending, where foundational conceptual embeddings are inherited from Europe, while lexical diversity emerges from China in deeper layers. Such directionality captures nonlinear semantic recombination, critical for nuanced understanding of model offspring behavior and semantic alignment strategies."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/Europe_LatinAmerica_nDIV_rotation.gif"
      interactive_html="nDIV/Europe_LatinAmerica_nDIV.html"
      title="(XIX) Layerwise Directional Inheritance for Europe and Latin America"
      caption="Across layers $\ell \in [20, 30]$, the offspring model (orange) traverses the latent semantic space defined by $\kappa_\ell \in [0.40, 0.60]$ and $L_\ell \in [0.45, 0.70]$, revealing a progressive semantic shift from Europe (blue) dominance in early layers towards Latin America (green) influence in later layers. This indicates graduated transfer of thematic and stylistic features, mirroring hierarchical semantic inheritance akin to biological epigenetics. The directionality metric thus quantifies intricate semantic trait integration essential for effective model fusion and alignment."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/Europe_MiddleEast_nDIV_rotation.gif"
      interactive_html="nDIV/Europe_MiddleEast_nDIV.html"
      title="(XX) Semantic Directional Inheritance for Europe and Middle East"
      caption="This visualization tracks offspring inheritance over layers $\ell \in [20, 30]$ within the spectral curvature range $\kappa_\ell \in [0.40, 0.65]$ and thermodynamic length $L_\ell \in [0.45, 0.70]$. The offspring model (orange) demonstrates a complex directional blend with early layers showing affinity to Europe (blue) and deeper layers mixing traits from both Europe and Middle East (green). Such layer-specific semantic mosaicism highlights the intricate interplay of cultural and linguistic features during model merging, providing a basis for interpretable and controlled semantic alignment."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/Europe_NorthAmerica_nDIV_rotation.gif"
      interactive_html="nDIV/Europe_NorthAmerica_nDIV.html"
      title="(XXI) Directional Inheritance for Europe and North America"
      caption="Layers $\ell \in [20, 30]$ show offspring (orange) semantic shifts over curvature $\kappa_\ell \in [0.38, 0.48]$ and thermodynamic length $L_\ell \in [0.42, 0.56]$. Early layers reflect Europe’s semantic core (blue), transitioning toward North America’s traits (green) in deeper layers. This reflects hierarchical blending where foundational embeddings precede thematic diversity, highlighting controlled fusion of lexical and conceptual features during model merging. Directional deviations mark subtle semantic realignments essential for downstream tasks and interpretability."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/MiddleEast_LatinAmerica_nDIV_rotation.gif"
      interactive_html="nDIV/MiddleEast_LatinAmerica_nDIV.html"
      title="(XXII) Inheritance Dynamics for Middle East and Latin America"
      caption="The offspring model (orange) spans layers $\ell \in [20, 30]$, covering curvature $\kappa_\ell \in [0.40, 0.65]$ and length $L_\ell \in [0.45, 0.70]$. Early layers align with Middle East’s semantic patterns (blue), while deeper layers shift towards Latin America (green), capturing complex semantic blending. This layered mosaicism shows integration of distinct cultural features, balancing syntactic structure and stylistic richness, crucial for interpretability and alignment in semantic fusion."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/NorthAmerica_Africa_nDIV_rotation.gif"
      interactive_html="nDIV/NorthAmerica_Africa_nDIV.html"
      title="(XXIII) Directional Inheritance for North America and Africa"
      caption="Over layers $\ell \in [20, 30]$, the offspring’s semantic trajectory (orange) spans curvature $\kappa_\ell \in [0.38, 0.90]$ and thermodynamic length $L_\ell \in [0.42, 0.55]$, illustrating directional shifts between North America (blue) and Africa (green). Early layers emphasize Africa’s lexical diversity, while deeper layers reflect North America’s thematic focus. This nonlinear recombination highlights the nuanced interplay of cultural and conceptual features, revealing layer-specific realignments essential for enhanced interpretability and controlled semantic fusion. Value annotations mark key deviations significant for understanding alignment dynamics."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/NorthAmerica_Asia_nDIV_rotation.gif"
      interactive_html="nDIV/NorthAmerica_Asia_nDIV.html"
      title="(XXIV) Inheritance Dynamics for North America and Asia"
      caption="The offspring semantic path (orange) across layers $\ell \in [20, 30]$ explores curvature $\kappa_\ell \in [0.40, 0.60]$ and thermodynamic length $L_\ell \in [0.42, 0.60]$, showing an initial dominance of North America’s semantic traits (blue) gradually blending with Asia’s features (green) in deeper layers. This progression reflects a layered semantic fusion process where conceptual stability provided by North America precedes cultural enrichment from Asia. The nuanced directional shifts elucidate the mechanics of controlled alignment and contribute to improved interpretability in model offspring fusion."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/NorthAmerica_Australia_nDIV_rotation.gif"
      interactive_html="nDIV/NorthAmerica_Australia_nDIV.html"
      title="(XXV) Directional Inheritance Vector for North America and Australia"
      caption="The offspring (orange) traces a semantic path over layers $\ell \in [20, 30]$, with curvature $\kappa_\ell \in [0.37, 0.47]$ and length $L_\ell \in [0.48, 0.58]$. Early layers align with North America (blue), mid to deeper layers blend in Australia’s (green) linguistic features. This transition reflects a controlled, layered fusion retaining conceptual foundations and integrating stylistic elements."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/NorthAmerica_China_nDIV_rotation.gif"
      interactive_html="nDIV/NorthAmerica_China_nDIV.html"
      title="(XXVI) Layerwise Directional Inheritance Dynamics between North America and China"
      caption="Across layers $\ell \in [20, 30]$, curvature $\kappa_\ell \in [0.38, 0.60]$ and length $L_\ell \in [0.43, 0.70]$, the offspring (orange) aligns with North America (blue), incorporating China’s (green) richness in deeper layers. This fusion preserves conceptual embeddings while reflecting cross-cultural adaptation, illustrating nuanced trade-offs in generation."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/NorthAmerica_LatinAmerica_nDIV_rotation.gif"
      interactive_html="nDIV/NorthAmerica_LatinAmerica_nDIV.html"
      title="(XXVII) Directional Semantic Inheritance for North America and Latin America"
      caption="Over layers $\ell \in [20, 30]$, the offspring (orange) explores latent semantic space with $\kappa_\ell \in [0.40, 0.62]$ and $L_\ell \in [0.48, 0.70]$. Early layers align with North America (blue), shifting to Latin America (green) in deeper layers. This reveals a nuanced blending balancing conceptual preservation and cultural adaptation – controlled cross-cultural fusion."
      style="flex: 1;"
      full_width=true
  %}

  {% include visualization-html.liquid
      image_path="gifs/neural_genomics/nDIV/NorthAmerica_MiddleEast_nDIV_rotation.gif"
      interactive_html="nDIV/NorthAmerica_MiddleEast_nDIV.html"
      title="(XXVIII) Directional Inheritance Vector between North America and Middle East"
      caption="This 3D plot shows offspring semantic inheritance over layers $\ell \in [20, 30]$ with curvature $\kappa_\ell \in [0.40, 0.65]$ and length $L_\ell \in [0.45, 0.70]$. The offspring (orange) starts near North America (blue), then blends traits from Middle East (green) in deeper layers. This mosaic reflects dynamic conceptual preservation and regional adaptation."
      style="flex: 1;"
      full_width=true
  %}
</div>

<figure id="fig:ndiv_caption" style="text-align: center; margin: 2em 0;">
  <figcaption style="margin-top: 12px; font-size: 0.9em; color: #555; max-width: 1200px; margin-left: auto; margin-right: auto; text-align: left;">
    <b>Figure: Semantic Directionality in Neural Inheritance Across Cultures.</b>
    This figure set shows layer-wise directional bias in semantic inheritance during model fusion via
    <span class="mathjax-render"><i>nDIV</i></span>
    over layers
    <span class="mathjax-render">\( \ell \in [20, 30] \)</span>.
    Offspring exhibit dynamic shifts favoring parents or novel traits, reflecting nonlinear semantic recombination.
    <br><br>
    Directional inheritance at layer
    <span class="mathjax-render">\( \ell \)</span> is given by:
    <br><br>
    <span class="mathjax-render">\[
    nDIV_{\text{dir}}^{(\ell)} =
    \cos \left(
      \overrightarrow{O}_{\ell} -
      \frac{\overrightarrow{P}^{(A)}_{\ell} + \overrightarrow{P}^{(B)}_{\ell}}{2}
      \; , \;
      \overrightarrow{P}^{(A)}_{\ell} - \overrightarrow{P}^{(B)}_{\ell}
    \right)
    \]</span>
    <br><br>
    where
    <span class="mathjax-render">\( \overrightarrow{P}^{(A)}_{\ell} \)</span>,
    <span class="mathjax-render">\( \overrightarrow{P}^{(B)}_{\ell} \)</span>,
    and
    <span class="mathjax-render">\( \overrightarrow{O}_{\ell} \)</span>
    are the semantic vectors of the two parents and the offspring, respectively.
    <br><br>
    This parallels <b>directional selection</b>
    <span class="mathjax-render">[356]</span>
    and <b>epigenetic regulation</b>
    <span class="mathjax-render">[347, 357]</span>,
    consistent with neural semantic evolution findings
    <span class="mathjax-render">[344]</span>.
    These insights enhance semantic fusion understanding, aiding targeted model alignment and inheritance control.
  </figcaption>
</figure>


---
{% auto_references %}

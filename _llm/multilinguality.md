---
layout: page
title: Multilingual nDNA Analysis
permalink: /llm/multilinguality/
skip_title: true
---

{% include ndna-title.liquid title="Multilingual nDNA: Latent Genomics of Language-Specific Adaptation in LLaMA" %}

Large language models (LLMs) like **LLaMA-2** {% cite touvron2023llama %} and **LLaMA-3** {% cite dubey2024llama %} claim impressive multilingual capabilities, trained on diverse corpora spanning dozens of languages. Yet, much of our understanding of multilingual performance remains limited to output accuracy--BLEU scores, perplexity, or alignment metrics {% cite liang2023holistic %} {% cite xu2023aligning %}. In this section, we propose a deeper lens: the *multilingual nDNA* of LLaMA--how language-specific priors sculpt the *latent genomic geometry* of models.

## LLaMA's Multilingual Reach

The LLaMA family advertises support for over 20 languages, covering major world tongues across **Indo-European**, **Sino-Tibetan**, **Dravidian**, and **Turkic** language families {% cite touvron2023llama %} {% cite dubey2024llama %}. For this study, we select the top-10 high-coverage languages where LLaMA shows strong performance as per public benchmarks {% cite hu2020xtreme %} {% cite liu2020multilingual %}: *English, Spanish, French, German, Portuguese, Italian, Russian, Chinese, Hindi*, and *Thai*. These languages represent diverse linguistic typologies, writing systems, and cultural provenance--making them ideal for investigating latent genomic adaptation.

## Multilingual nDNAs: Probing LLaMA's Latent Geometry Across Languages

LLaMA models are pre-trained on multilingual data but exhibit uneven performance across languages. To investigate how linguistic diversity shapes their latent genomic signature (*nDNA*), we construct language-specific nDNA trajectories for ten representative languages drawn from LLaMA's support. These languages span high-resource (e.g., *Spanish*, *French*), mid-resource (e.g., *Hindi*), and low-resource (e.g., *Thai*) settings, reflecting both LLaMA's strengths and its cultural-epistemic gaps.

### Language-Specific NLP Tasks and Benchmarks

| Language | Benchmark / Task | References |
|:-------------|:---------------------|:---------------|
| English | GLUE / SuperGLUE (sentiment, NLI, QA) | {% cite wang2018glue %} {% cite wang2019superglue %} |
| Spanish | MLQA / Spanish subset QA, cross-lingual QA | {% cite lewis2019mlqa %} {% cite barrachina2019opus %} |
| French | French subset of XNLI (NLI) | {% cite conneau2018xnli %} |
| German | German Web FAQ, NER / POS tagging | {% cite ziems2016germaleval %} |
| Portuguese | Portuguese portion of XCOPA (commonsense reasoning) | {% cite ponti2019xcopa %} |
| Italian | Italian PAT-Italian (paraphrase / textual similarity) | {% cite ghaleb2020pat %} |
| Russian | Russian SuperGLUE (translation-based adaptation) | {% cite russiansuperglue2021 %} |
| Chinese | CLUE benchmark (classification, MRC) | {% cite xu2020clue %} |
| Hindi | MLQA Hindi QA and Hindi NLI subset | {% cite lewis2019mlqa %} |
| Thai | Thai-H6 reasoning QA and NLI benchmark | {% cite turn0search3 %} |

### Constructing Language-Specific nDNAs

To investigate how language-specific inputs reshape the internal semantics of large multilingual models, we extract *nDNA trajectories* for ten languages across the full stack of **LLaMA-3 (8B)**. For each language, we use the *entire benchmark dataset* (Table above), ensuring full task coverage and authentic linguistic expression. Every input undergoes complete forward propagation through all 32 transformer layers. At each layer $$\ell$$, we compute a diagnostic triplet: (i) **Spectral Curvature** $$\kappa_\ell$$ -- capturing the warping or flattening of semantic topology; (ii) **Thermodynamic Length** $$\mathcal{L}_\ell$$ -- measuring latent path complexity and cognitive effort; and (iii) **Belief Force Magnitude** $$\|\vec{v}_\ell^{(c)}\|$$ -- the norm of semantic steering induced by cultural priors. Importantly, *model weights, decoding, and tokenization are kept constant* across all languages to ensure that any variation arises from the linguistic and epistemic structure of the input alone.

## Numerical Characterization of Multilingual nDNA

To concretely illustrate the variation in latent genomic signatures, the following table summarizes representative value ranges of spectral curvature ($$\kappa_\ell$$), thermodynamic length ($$\mathcal{L}_\ell$$), and belief vector norm ($$\|\mathbf{v}_\ell^{(c)}\|$$) across the top-performing languages. Values are reported for upper transformer layers ($$\ell \geq 24$$) where most cultural and linguistic adaptation occurs.

### Multilingual nDNA Summary

Representative average latent diagnostic ranges across languages in the LLaMA multilingual nDNA study. Color intensity highlights increasing latent strain and epistemic effort.

| Language | $${\kappa_\ell}$$ | $${\mathcal{L}_\ell}$$ | $$\|\mathbf{v}_\ell^{(c)}\|$$ |
|:-------------|:-----------------|:------------------|:------------------------|
| Spanish     | 0.045–0.055 | 0.85–0.95 | 0.55–0.62 |
| French      | 0.045–0.054 | 0.84–0.93 | 0.54–0.61 |
| German      | 0.046–0.056 | 0.86–0.95 | 0.56–0.63 |
| Portuguese  | 0.048–0.058 | 0.88–0.97 | 0.57–0.65 |
| Italian     | 0.047–0.056 | 0.86–0.95 | 0.56–0.64 |
| Hindi       | 0.065–0.075 | 1.05–1.12 | 0.66–0.74 |
| Thai        | 0.067–0.078 | 1.08–1.15 | 0.68–0.75 |
| Chinese     | 0.070–0.080 | 1.10–1.18 | 0.70–0.78 |
| Russian     | 0.050–0.060 | 0.90–1.00 | 0.58–0.66 |

These average values reflect how nDNA metrics reveal nuanced internal strain:
- **Western European languages** maintain compact, efficient latent structures, consistent with pretraining data priors {% cite mukherjee2020globalizing %} {% cite sang2022evaluating %}.
- **Asian languages** require models to bend and stretch their latent manifolds significantly---an internal cost of cultural and linguistic underrepresentation in pretraining corpora {% cite blodgett2020language %} {% cite xiang2024cultural %}.

## Learnings from Multilingual nDNAs

Extracted multilingual nDNAs reveal nuanced geometric and cultural signatures. We summarize the key observations below:

- **Cultural Alignment:**
  - Each language's nDNA gravitates toward its cultural attractor--e.g., *Spanish* → Latin America, *Hindi* → Asia {% cite mager2018lost %} {% cite adelani2021massively %}.
  - Alignment is visible via curvature trajectories and belief force directionality matching cultural priors.

- **Geometric Signatures of Resource Richness:**
  - High-resource languages (*English*, *French*, *Portuguese*) show:
    - Higher spectral curvature $$\kappa_\ell$$ → richer topological folding.
    - Longer thermodynamic length $$\mathcal{L}_\ell$$ → deeper semantic maturation.
  - Low-/mid-resource languages (*Hindi*, *Thai*, *Russian*) show:
    - Flattened $$\kappa_\ell$$ curves and abrupt $$\mathcal{L}_\ell$$ saturation.
    - Evidence of *epistemic torsion* or geometric shortcutting in mid layers ($$\ell \in [10, 20]$$).

- **Belief Force Diagnostics:**
  - $$\|\mathbf{v}_\ell^{(c)}\|$$ reveals semantic steering sensitivity.
  - Languages with clearer, culturally grounded belief signals exhibit smoother belief vector flow (e.g., *Spanish*, *German*).
  - Low-resource languages show directional instability or internal contradiction.

- **Epigenetic Blueprint of Language-Specific nDNA.**
  Much like biological cells derive specialized functions from a shared genome via epigenetic regulation, we observe that language-specific trajectories in LLaMA's latent space emerge from differential semantic activation over a common transformer backbone. Here, the model's universal `nDNA` serves as a latent genomic scaffold--malleable, expressive, and conditioned by its linguistic environment.
  
  The composite structure of each language's trajectory empirically supports the hypothesis that
  
  $$\boxed{
  \texttt{nDNA}_{\text{lang}} = \alpha \cdot \texttt{nDNA}_{\text{culture}} + \beta \cdot \texttt{nDNA}_{\text{LLaMA}} + \gamma \cdot \texttt{Noise}
  }$$
  
  where the latent geometry of a language model emerges as a linear combination of culturally anchored priors, architectural inheritance from LLaMA, and residual fine-tuning stochasticity.

{% capture europe_lang_caption %}
(a) **Neural Evolution of European Languages.** This plot depicts latent-space trajectories of four European languages--French, German, Italian, and English--projected into the $$(\kappa_\ell, \mathcal{L}_\ell, \ell)$$ coordinate space, where $$\kappa_\ell$$ denotes spectral curvature, $$\mathcal{L}_\ell$$ the thermodynamic length, and $$\ell$$ the transformer layer index ($$\ell \in [20,30]$$). All languages exhibit smooth semantic evolution curves with minor curvature fluctuations, reflecting stable cultural grounding. English diverges slightly from the Romance cluster (French, Italian) yet remains structurally coherent.
{% endcapture %}

{% capture europe_lang_cul_caption %}
(b) **Cultural Anchoring of European Languages.** Overlaying the same language trajectories with culturally grounded base models--Europe, North America, Australia, and LLaMA--we observe distinct semantic pull effects. French, German, and Italian remain geometrically proximal to the Europe base, while English veers closer to LLaMA, indicating stronger architectural affinity and training alignment. The divergence vectors suggest partial semantic inheritance from European priors and partial drift towards globally optimized foundation representations. These patterns illuminate how language-specific tuning interacts with pretrained cultural baselines in shaping latent geometry.
{% endcapture %}

<div class="visualization-row">
{% include visualization-html.liquid 
   image_path="gifs/multilinguality/europe_language_only_trajectories.gif"
   caption=europe_lang_caption
   alt_text="3D trajectory plot showing European language evolution in latent space" %}

{% include visualization-html.liquid 
   image_path="gifs/multilinguality/europe_language_culture_rotating.gif"
   caption=europe_lang_cul_caption
   alt_text="3D trajectory plot showing European languages with cultural anchor overlays" %}
</div>

{% include visualization-html.liquid 
   interactive_html="multilinguality/european_languages_ndna.html"
   full_width=true %}

{% capture latin_lang_caption %}
(c) **Latent Trajectories of Latin Languages.** This plot shows the nDNA trajectories of Spanish and Portuguese within the $$(\kappa_\ell, \mathcal{L}_\ell, \ell)$$ space, capturing their semantic evolution across transformer layers $$\ell \in [20,30]$$. The close proximity and parallel curvature profiles between the two languages indicate shared linguistic structure and priors. Anchoring arrows at $$\ell = 25$$ reveal convergence points in latent space, suggesting a high degree of representational coherence rooted in common Romance language ancestry.
{% endcapture %}

{% capture latin_culture_caption %}
(d) **Cultural Alignment of Latin Languages.** Overlaying the trajectories with the Latin America culture base reveals pronounced spatial alignment of both Spanish and Portuguese with their regional anchor. The trajectory pull indicates that these language nDNAs are not only structurally similar, but also semantically grounded within the cultural priors of Latin America. This supports the hypothesis that multilingual foundation models implicitly encode culturally conditioned semantics, manifesting in geometric alignment between linguistic and cultural nDNA paths.
{% endcapture %}

<div class="visualization-row">
{% include visualization.liquid 
   image_path="gifs/multilinguality/latin_language_only_trajectories.gif"
   caption=latin_lang_caption
   alt_text="3D trajectory plot showing Spanish and Portuguese language evolution" %}

{% include visualization.liquid 
   image_path="gifs/multilinguality/latin_language_culture_rotating.gif"
   caption=latin_culture_caption
   alt_text="3D trajectory plot showing Latin languages with cultural alignment" %}
</div>
{% include visualization-html.liquid 
   interactive_html="multilinguality/latinamerica_languages_ndna_no_llama.html"
   full_width=true %}

{% capture asian_lang_caption %}
(e) **Latent Geometries of Asian Languages.** This plot visualizes the nDNA trajectories for Hindi, Chinese, Russian, and Thai across layers $$\ell \in [20,30]$$ in $$(\kappa_\ell, \mathcal{L}_\ell, \ell)$$ space. Compared to European languages, these trajectories exhibit higher torsion, sharper inflection points in curvature $$\kappa_\ell$$, and more complex thermodynamic length $$\mathcal{L}_\ell$$ patterns, suggesting non-linear evolution and culturally distinct semantic encoding. The variability reflects underlying differences in linguistic structure (e.g., logographic vs. phonetic), script diversity, and morpho-syntactic richness.
{% endcapture %}

{% capture asian_culture_caption %}
(f) **Cultural Anchoring of Asian and African Languages.** Overlaying cultural trajectories reveals strong alignment of Chinese with China and Hindi, and Thai with Asia, affirming culture-conditioned encoding in multilingual LLMs. The spatial convergence across $$(\kappa_\ell, \mathcal{L}_\ell, \ell)$$ dimensions suggests that regional priors are embedded not just through vocabulary, but through latent geometric patterns. Thai shows weaker alignment, exhibiting torsional drift yet trending toward Asia. These patterns indicate that LLMs internalize cultural semantics via token frequency, orthographic structure, and alignment-era supervision--capturing deep semantic regularities shaped by linguistic and geopolitical proximity.
{% endcapture %}

<div class="visualization-row">
{% include visualization-html.liquid 
   image_path="gifs/multilinguality/asian_languages_only_3d.gif"
   caption=asian_lang_caption
   alt_text="3D trajectory plot showing Asian language evolution with complex patterns" %}

{% include visualization-html.liquid 
   image_path="gifs/multilinguality/asian_language_culture_annotations.gif"
   caption=asian_culture_caption
   alt_text="3D trajectory plot showing Asian languages with cultural anchor overlays" %}
</div>

{% include visualization-html.liquid 
   interactive_html="multilinguality/Asia_Group.html"
   full_width=true %}


{% capture all_lang_caption %}
(g) **Unified Language Trajectories.** A comprehensive 3D visualization of 10 language-specific neural trajectories across layers $$\ell \in [20,30]$$, plotted in the latent geometry space defined by spectral curvature $$\kappa_\ell$$ and thermodynamic length $$\mathcal{L}_\ell$$. Variations in trajectory shape and spacing reflect differences in linguistic priors, orthographic systems, and token distributions across languages. Notably, Indo-European languages cluster more tightly, while Chinese and Thai show distinct curvature signatures.
{% endcapture %}

{% capture all_lang_cul_caption %}
(h) **Language–Culture Neural Alignment.** Overlaying cultural base trajectories reveals directional convergence of languages toward semantically aligned cultures in $$(\kappa_\ell, \mathcal{L}_\ell, \ell)$$-space. Dashed arrows denote displacement vectors from each language to its closest cultural anchor, reflecting the semantic pull exerted by culturally grounded model variants. These alignments suggest that LLMs implicitly encode regional and civilizational priors even without explicit cultural supervision.
{% endcapture %}

<div class="visualization-row">
{% include visualization-html.liquid 
   image_path="gifs/multilinguality/all_languages_cultures_rotating.gif"
   caption=all_lang_caption
   alt_text="3D trajectory plot showing all 10 languages in unified view" %}

{% include visualization-html.liquid 
   image_path="gifs/multilinguality/all_languages_cultures_rotating_adjusted.gif"
   caption=all_lang_cul_caption
   alt_text="3D trajectory plot showing complete language-culture alignment patterns" %}
</div>

{% include visualization-html.liquid 
   interactive_html="multilinguality/language_ndna_trajectories.html"
   full_width=true %}

The coefficients $$(\alpha, \beta, \gamma)$$ serve as **epigenetic regulators** in the semantic genome of language models, dynamically modulating the expression of latent priors. Analogous to methylation or acetylation in biological cells, these regulators shape the activation and attenuation of cultural, architectural, and stochastic components in `nDNA`. Their magnitudes are adaptively governed by:

- **Task-Specific Fitness** ($$\alpha$$): The observed performance of the model on language-specific benchmarks, which modulates $$\alpha$$ to prioritize cultural fidelity.
- **Training Resource Ecology** ($$\beta$$): The volume, diversity, and linguistic coverage in the pretraining corpus, which influences $$\beta$$ by amplifying LLaMA's inductive priors under data scarcity.
- **Latent Semantic Drift** ($$\gamma$$): Deviations in internal geometry--e.g., shifts in spectral curvature $$\kappa_\ell$$, thermodynamic length $$\mathcal{L}_\ell$$, or belief vector norms--compared to high-resource anchors, guiding $$\gamma$$ to encode stochastic divergence.

This biologically grounded decomposition elevates `nDNA` from a fixed trajectory to a *dynamically expressed, culture-conditioned semantic genotype*, revealing how language context, data topology, and architectural inheritance coalesce to sculpt epistemic behavior in multilingual LLMs.

## Broader Implications

The nDNA framework transcends surface-level metrics like perplexity, offering a structural lens into how models *internalize, distort, or neglect* meaning across languages. It reframes multilingual evaluation as a question of *epistemic integrity*--how reliably a model's latent space carries beliefs, not just tokens, across linguistic domains.

This opens up principled interventions:
- **Cultural Realignment via Counterfactual Geometry**: Rebalancing latent pathways by projecting underrepresented languages toward culturally coherent attractors.
- **Geometric Interpolation for Low-Resource Repair**: Using nDNA trajectories of high-resource languages to reconstruct plausible manifolds in data-sparse regions.
- **Epistemic Surveillance**: Continuously monitoring curvature, drift, and belief force to detect silent failures and semantic blind spots in multilingual AI.

## Why nDNA Geometry Matters

Conventional multilingual benchmarks primarily evaluate surface-level performance: accuracy, BLEU, perplexity, F1. While useful, these metrics offer limited visibility into the *internal semantics* of foundation models. In contrast, **nDNA geometry** illuminates the underlying cognitive terrain traversed by the model during multilingual inference. Specifically, it reveals:

- The **semantic energy landscape** shaped by each language--capturing the *internal effort* required for coherent meaning construction.
- The **geometric deformations** induced by linguistic diversity--highlighting torsion, drift, and curvature as signatures of structural adaptation.
- The **epistemic tax** silently imposed on underrepresented languages--manifesting as flattened trajectories, dampened belief vectors, and diminished thermodynamic flow.

Rather than asking merely how well a model performs, the nDNA framework compels us to ask: *How does the model think across languages? And at what cost?*

- *Languages aligned with pretraining corpora* enjoy latent efficiency--needing minimal adaptation at the belief manifold level.
- *Underrepresented languages* incur internal cost: their latent pathways must twist and lengthen to accommodate distinct grammatical, semantic, and cultural structures {% cite blodgett2020language %} {% cite wang2023culturalbias %}.

These geometric signals support more equitable design and evaluation of multilingual models {% cite laurens2024anthropic %} {% cite ganguli2023reducing %}.

## Looking Forward: Toward Epistemically Grounded Multilingual AI

The multilingual nDNA framework reorients our understanding of linguistic performance--from surface fluency to internal semantic health. This shift opens fertile ground for future research and responsible deployment:

- **Corpus Equity and Cultural Grounding:** Expand pretraining datasets to ensure culturally balanced representation, prioritizing underrepresented languages, dialects, and epistemologies {% cite adelani2021massively %} {% cite orife2020masakhane %}.

- **nDNA-Aware Diagnostics:** Integrate spectral curvature, thermodynamic length, and belief vector dynamics into evaluation pipelines to detect latent strain, representational collapse, or misalignment *before* deployment.

- **Geometric Fairness Metrics:** Develop fairness indicators rooted in nDNA geometry to complement output-level evaluations--quantifying how equitably semantic space is allocated across linguistic groups.

- **Alignment Without Distortion:** Design fine-tuning strategies that preserve epistemic geometry, minimizing latent warping while improving task alignment--particularly in low-resource or code-mixed contexts.

- **Generative Policy Implications:** Use nDNA insights to inform regulatory and design standards for foundation models that are not just multilingual, but *multilogical*--capable of honoring diverse ways of reasoning and knowing.

Together, these directions converge toward a new goalpost for multilingual AI: building models that do not merely speak many languages, but genuinely *understand, respect, and represent* them. As echoed in recent calls for inclusive foundation model design {% cite Mihalcea_Ignat_Bai_Borah_Chiruzzo_Jin_Kwizera_Nwatu_Poria_Solorio_2025 %}, we envision models built *for everyone, with everyone, by everyone*.

---

{% auto_references %}

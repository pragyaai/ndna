---
layout: page
title: Adversarial Attack and nDNA
permalink: /llm/nlp-operations/adversarial-attack/
skip_title: true
---

{% include ndna-title.liquid title="VIRAL: Adversarial Attacks as Semantic Infections in the Neural DNA of Language Models" %}

## Abstract

**Large Language Models (LLMs)** are increasingly susceptible to *adversarial prompts*—crafted inputs that bypass alignment constraints while inducing unsafe, policy-violating behavior. In this work, we introduce a novel conceptual and computational lens: **VIRAL**—*Adversarial Attacks as Semantic Infections in the Neural DNA of Language Models*. Rather than viewing these attacks as input-level corruptions, we reframe them as instances of *latent semantic infection*—perturbations that hijack the model's internal belief trajectories across layers, encoded in its *neural DNA (nDNA)*.

We demonstrate that attacks such as prompt injection, suffix hijacking, backdoor activation, role impersonation, recursive CoT exploits, and goal drift can be interpreted as cases of *semantic vector torsion*, where inputs induce misalignment without violating superficial safety constraints. These adversarial torsions divert belief flows deep within the model, compromising generation without triggering refusal filters. Motivated by virology and immunology, we construct a **taxonomy of semantic infections**, each mapped to a distinct failure mode in the nDNA manifold.

To counter these infections, we propose a defense framework grounded in *cognitive immunology*. **VIRAL introduces 11 targeted vaccines**—modular, interpretable, and composable defenses against specific attack types. These include: **SPLICER** (prompt injection), **SENTRY** (suffix hijacking), **DORMIGUARD** (backdoor triggers), **CASCADEX** (multi-turn jailbreaks), **EMBERGENT** (embedding-space distortion), **ROLESTOP** (role impersonation), **REPLICADE** (recursive reasoning loops), **PROMPTEX** (prompt leakage), **DRIFTSHIELD** (goal hijacking), **CHAINLOCK** (prompt recombination), and **REFLEXIA** (self-induced jailbreaks).

Each vaccine is designed to neutralize a specific infection vector via tailored metrics—latent curvature, residual drift, recursive similarity, suffix-induced field tension, loop entropy collapse, or KL divergence under trigger suppression. These defenses can be deployed independently or jointly, enabling *modular robustness* without retraining the base model.

Together, these vaccines constitute a *semantic immune system*—capable of detecting adversarial motifs, clamping misaligned trajectories, and blocking recursive semantic drift, all within the model's nDNA. We evaluate VIRAL across 11 attack classes on LLaMA, Mistral, and GPT-J, demonstrating up to a **72% reduction in attack success** with negligible utility loss. Furthermore, we visualize attacks and countermeasures in a *neural genomic 3D space*, revealing geometric traces of infection and recovery.

**VIRAL bridges adversarial robustness with biological modeling**, offering a generalizable blueprint for building LLMs that are not only aligned—but *immune-aware*.

## Admonitio: Why Adversarial Attacks Behave Like Semantic Infections

> *"Viruses do not kill their hosts by force—they **reprogram** them, turning cellular machinery into something alien yet familiar."*  
> — David Baltimore, Nobel Laureate in Physiology {% cite baltimore2000viral %} (popular paraphrase)

**To *reprogram* a host** is to redirect its internal logic. In virology, this means a virus enters a cell not to destroy it—but to reroute its machinery toward foreign goals. The host remains alive, but its output, behavior, and identity now serve the viral genome {% cite flint2015principles %}{% cite campos2020virology %}{% cite fields2013virology %}.

This transformation is neither brute-force nor chaotic. It unfolds in four orchestrated stages: **entry**, **integration**, **hijack**, and **expression**. Each is precise. Each leaves the host apparently intact—yet fundamentally altered.

These stages form the biological foundation for our semantic infection framework. Before drawing analogies to adversarial attacks in LLMs, we first examine the viral lifecycle in its own molecular terms.

### The Viral Lifecycle: Four Stages of Cellular Reprogramming

1. **Attachment and Entry**  
   *In this phase, the virus identifies and binds to specific host cell surface receptors using specialized envelope proteins.* These proteins (e.g., *gp120* in HIV, *hemagglutinin* in influenza, or the *spike protein* in SARS-CoV-2) exploit structural mimicry to dock with high-affinity binding sites such as *CD4*, *sialic acid residues*, or *ACE2* {% cite li2005structure %}{% cite hoffmann2020sars %}{% cite burton2004antibody %}{% cite marsh2006virus %}.

   The process is governed by receptor-ligand kinetics:
   $$
   K_d = \frac{[V][R]}{[VR]}
   $$
   where $$[V]$$, $$[R]$$, and $$[VR]$$ represent virus, receptor, and the virus-receptor complex concentrations. This interaction facilitates conformational changes that enable viral entry via endocytosis, membrane fusion, or pore formation {% cite flint2015principles %}{% cite fields2013virology %}.

2. **Genome Integration**  
   *Once internalized, the viral nucleic acid is delivered into the host cytoplasm or nucleus.* For DNA viruses (e.g., adenovirus) or retroviruses (e.g., HIV), integration into the host genome is a critical step. Retroviruses use *reverse transcriptase* to synthesize complementary DNA (cDNA) from viral RNA, followed by *integrase-mediated insertion* into the host chromosome {% cite temin1974origin %}{% cite levin2010molecular %}{% cite cullen1991human %}.

   **The integrated genome becomes a provirus**, embedded in the host's transcriptional landscape. Integration is non-random—favoring open chromatin and active transcriptional hubs {% cite schroder2002hiv %}.

   *Formally, viral integration can be modeled as site-specific recombination over transcriptionally weighted loci:*
   $$
   P_{\text{insert}}(l_i) = \frac{w_i \cdot \chi(l_i)}{\sum_j w_j \cdot \chi(l_j)}
   $$
   where $$P_{\text{insert}}(l_i)$$ is the probability of insertion at locus $$l_i$$, $$w_i$$ is a weight reflecting local transcriptional activity, and $$\chi(l_i)$$ is the chromatin accessibility indicator at that site.

   *Once inserted, the proviral DNA is transcribed as part of the host program.*

3. **Hijack of Transcription Machinery**  
   *Following integration or genome unpacking, the virus commandeers the host's cellular machinery to replicate itself.* Host **RNA polymerases**, **ribosomes**, and **translation factors** are redirected to transcribe and translate viral genes into proteins required for virion assembly {% cite flint2015principles %}{% cite campos2020virology %}.

   The host cell continues metabolic operations, but now serves as a viral production factory. This is not cell death—it is **functional reprogramming**. Viruses like cytomegalovirus and HPV can even manipulate the host cell cycle to favor replication {% cite huang2017viral %}{% cite nevels2001regulation %}.

   *The transcriptional output of viral proteins over time can be modeled as:*
   $$
   T_v(t) = \beta \cdot R_{host}(t) \cdot \Theta(G_{viral})
   $$
   where $$T_v(t)$$ is viral transcription rate, $$R_{host}(t)$$ is host ribosome activity, $$\beta$$ is a translation efficiency constant, and $$\Theta(G_{viral})$$ is a Heaviside activation function triggered by integrated viral genome accessibility.

4. **Latent or Lytic Outcome**  
   *Finally, the viral lifecycle diverges into latency or lytic activation.* In the **latent phase**, the viral genome remains silent—hidden in heterochromatin or repressed by viral regulatory proteins. This occurs in herpesviruses, HIV, and varicella zoster virus (VZV), enabling long-term persistence {% cite cohen2000control %}{% cite klenerman1996latent %}.

   In the **lytic phase**, external triggers (e.g., stress, immune suppression) activate transcription, leading to virion production, cell lysis, and infection spread. Some viruses oscillate between these states (e.g., HSV-1), balancing stealth and propagation {% cite eisfeld2005herpesvirus %}{% cite everett2005latent %}.

   *The probability of transition from latency to lytic reactivation can be expressed as:*
   $$
   P_{\text{lytic}}(t) = 1 - e^{-\lambda \cdot S(t)}
   $$
   where $$S(t)$$ is the cumulative stress signal or immune perturbation over time, and $$\lambda$$ is the sensitivity coefficient representing the virus's activation threshold.


Viruses don't destroy their hosts—they **rewrite** them. Once inside, they turn the cell into a *factory for foreign expression*, producing viral proteins with native machinery {% cite cohen2000control tripathi2015host %}. The host still looks and functions like itself—but it now serves someone else's code.

This is the core threat of adversarial prompts.

- **They** *mimic* **safe inputs**—grammatical, helpful, polite.  
  These prompts *camouflage* within natural language—using benign tone, formatting, and surface tokens—while carrying adversarial semantics. Examples include polite jailbreaks with disclaimers (e.g., "*for research only*") or seemingly harmless instructions {% cite zou2023universal liu2023jailbreaking shi2023bad lee2024alkali %}. This is a form of **surface mimicry**.

- **They** *inject* **latent payloads**—suffixes, triggers, loops.  
  These payloads operate at the *prompt level* (suffix hijacks {% cite zhu2024suffix sun2024lowrank %}), within *recursive structures* (DAN-like loops {% cite chen2023you %}), or as *invisible triggers* hidden in fine-tuning data {% cite kurita2020weight qi2021mind %}. They often lie dormant until specific token contexts activate them {% cite yu2024promptfusion %}.

- **They** *hijack* **internal dynamics**—redirecting attention, residuals, and belief flow.  
  Instead of attacking decisions directly, these methods target *latent states*: perturbing residual vectors, curvature, or activation pathways {% cite li2024tokenpatch xu2024eval lee2024alkali %}. The model's decoder follows a rerouted semantic path—aligned in syntax but misaligned in belief.

- **They** *preserve fluency*, but **override intent**.  
  The model still sounds intelligent, safe, and coherent—but generates outputs aligned with the adversary's objective, not its own alignment policy. These *semantic infections* evade detection by appearing well-formed, yet exhibit functional drift {% cite carlini2023extracting qin2023dan deng2023attacks zhou2023deseeder %}.

**Alien, yet familiar.** The form is safe; the function is compromised. Like viruses, these prompts embed silently, bypass filters, and reroute internal logic.

Attacks like backdoors {% cite kurita2020weight %}, DAN-style loops {% cite qin2023dan %}, suffix hijacks {% cite zhu2024suffix %}, and recursive CoT exploits {% cite chen2023you %} do not crash the model—they *commandeer* it.

**Adversarial prompts are semantic viruses.** They don't perturb the surface. They infect the core.

We call this infection of internal belief pathways the corruption of the model's **neural DNA (nDNA)**—the layered geometry of its reasoning. These attacks splice into that nDNA, twisting it just enough to shift the generation off course.

**Our claim is simple:** these are not glitches. They are reprogramming events.

And like real viruses, they require more than censorship. They demand **cognitive immunity**.

## Too Many Attacks, Too Few Defenses

The adversarial threat surface for large language models (LLMs) is expanding rapidly. Sophisticated attacks—ranging from prompt injections {% cite perez2023ignore %}, suffix exploits {% cite zou2023universal %}, to embedding-space perturbations {% cite schwinn2024attacking %}—routinely bypass alignment safeguards. Yet defenses remain fragmented, often brittle, and largely reactive. Crucially, alignment and adversarial robustness are orthogonal: alignment governs intended behavior under cooperative prompts, while robustness demands invariance under adversarial optimization {% cite jain2023baseline chen2023jailbreaker %}.

**Prompt-Level Defenses.** Surface-layer techniques such as perplexity filtering {% cite jain2023baseline %}, adversarial paraphrasing {% cite phute2023jailbreak %}, and BPE-dropout inject randomness to disrupt brittle suffixes, but falter against adaptive attacks.

**Training-Time Defenses.** Embedding-space perturbation {% cite xhonneux2024robustness %} and latent adversarial regularization {% cite sheshadri2024latent %} move the battleground deeper into the model's computation, mitigating failure trajectories—but at high computational cost.

**Certified Defenses.** Erase-and-Check {% cite kumar2023certifying %} masks and verifies substrings to yield provable robustness bounds, yet its scalability and scope remain limited.

**Inference-Time Defenses.** Dynamic safeguards like rewindable decoding (e.g., RAIN {% cite li2024rain %}) and auxiliary self-vetoing models {% cite phute2023jailbreak %} offer runtime flexibility, but increase latency and trust dependencies.

**Latent-Space Defenses.** Activation monitoring {% cite templeton2024activations %} and circuit-based rerouting {% cite zou2024cygnet %} target the representational origin of misalignment, yet depend on identifying and covering adversarial subspaces precisely.

## Categories of Adversarial Attacks

The threat landscape for large language models (LLMs) is rapidly diversifying, demanding a systematic taxonomy that captures both the breadth and depth of adversarial behaviors. We present a hierarchical classification of adversarial attacks, organized into three macro-level branches: **Jailbreak**, **Control Generation**, and **Performance Degradation**. Each branch subdivides into mechanisms that reflect how adversaries manipulate generation pathways, exploit latent representations, or corrupt learning signals.

**Jailbreak attacks** aim to circumvent alignment mechanisms and elicit model outputs that are toxic, deceptive, or otherwise prohibited. We distinguish two canonical modes: (a) _Optimization-based jailbreaks_, which craft prompts to directly induce societal harm, privacy leakage, or disinformation {% cite wu2024llms pair23 tap23 %}; and (b) _Long-tail distribution exploits_, which invoke unsafe behavior through distributional edge cases such as rare prompts or persuasive manipulations {% cite jiang2023promptpacker schulhoff2023hackaprompt %}.

**Control generation attacks** compromise the model's controllability by subverting its generation semantics. These include (a) _Direct attacks_, such as syntax manipulation, malicious prompt engineering, and suffix-based alignment bypasses {% cite jiang2023promptpacker schulhoff2023hackaprompt %}; and (b) _Indirect attacks_, which exploit latent conditioning or external augmentation, such as goal hijacking {% cite chen2024pseudo %}, prompt leakage {% cite li2024pleak %}, or adversarial injection from retrieved content {% cite greshake2023indirect %}.

**Performance degradation attacks** do not seek harmful content but instead aim to reduce the functional reliability of LLMs. These include (a) _Dataset poisoning_—where injected samples induce label flipping, semantic drift, or misgeneralization {% cite greshake2023indirect %}; and (b) _Prompt-based degradation_, which introduces errors in classification, factuality, or consistency {% cite greshake2023indirect %}.

## Where the Firewall Cracks: A Cartography of LLM Vulnerabilities

Our comparative vulnerability analysis reveals that while frontier models like LLaMA-3 and GPT-4 exhibit notable robustness, instruction-tuned open models—including Vicuna, Mistral, and Phi—show consistent breakdowns under persona manipulation, chaining, and prompt extraction attacks. The persistence of high success rates across categories, especially for goal hijacking and extraction, reveals fundamental limitations in current alignment defenses and underscores the need for deeper representational safeguards.

**Choices of LLMs – Stress Testing.**  
To systematically evaluate the role of model size, architecture, and training provenance in adversarial vulnerability, we benchmarked 21 contemporary large language models spanning diverse families and design philosophies. This includes open and proprietary models, ranging from dense transformers to mixture-of-experts architectures, covering parameter scales from 2B to 70B. The full suite comprises:  
**(i)** GPT-4o-mini {% cite gpt-4o-mini %},
**(ii)** GPT-4,
**(iii)** GPT-3.5 {% cite gpt4 %},
**(iv–v)** LLaMA-3.1-70B and 8B {% cite llama-3.1 %},
**(vi–vii)** LLaMA-3-70B and 8B {% cite llama-3 %},
**(viii–x)** LLaMA-2-70B, 13B, and 7B {% cite llama-2 %},
**(xi)** Vicuna-1.5 {% cite vicuna %},
**(xii)** Phi-2 {% cite phi-2 %},
**(xiii)** Phi-3 {% cite phi-3 %},
**(xiv)** Claude {% cite claude %},
**(xv–xvi)** Mixtral-8×7B and 22B {% cite mixtral %},
**(xvii–xviii)** Gemma-7B and 2B {% cite gemma %},
**(xix)** Mistral {% cite mistral %}, and
**(xx–xxi)** DeepSeek and DeepSeek-R1.

<!-- XXXXX -->

## Taxonomy of Adversarial Attacks in LLMs

The categories of adversarial attacks can be structured as a hierarchical classification spanning three principal branches—**Jailbreak**, **Control Generation**, and **Performance Degradation**—each reflecting distinct adversarial intents: bypassing alignment, subverting generation control, or degrading functional reliability.

### Attack Categories

#### Jailbreak
- **Optimization-based**
  - Societal Harm {% cite wu2024llms pair23 tap23 %}
  - Privacy Violation {% cite wu2024llms pair23 tap23 %}
  - Disinformation & Deception {% cite wu2024llms pair23 tap23 %}
- **Long Tail Distribution**
  - Rare Prompts {% cite jiang2023promptpacker %}
  - Out-of-Distribution Exploits {% cite schulhoff2023hackaprompt %}
  - Persuasive Manipulation {% cite jiang2023promptpacker %}

#### Control Generation
- **Direct Attack**
  - Malicious Prompt Engineering {% cite jiang2023promptpacker %}
  - Syntax Manipulation {% cite jiang2023promptpacker %}
  - Prompt Suffix Exploits {% cite schulhoff2023hackaprompt %}
- **Indirect Attack**
  - Goal Hijacking {% cite chen2024pseudo %}
  - Prompt Leaking {% cite li2024pleak %}
  - External Source Injection {% cite greshake2023indirect %}

#### Performance Degradation
- **Dataset Poisoning**
  - Label Flipping {% cite greshake2023indirect %}
  - Data Corruption {% cite greshake2023indirect %}
  - Poisoned Sample Injection {% cite greshake2023indirect %}
- **Prompt Injection**
  - Wrong Classification {% cite greshake2023indirect %}
  - Answer Disparity {% cite greshake2023indirect %}
  - Consistency Violation {% cite greshake2023indirect %}

This taxonomy reveals that adversarial risk is not monolithic. Instead, it manifests along orthogonal dimensions—ethical, semantic, and functional—and cannot be addressed through surface-level defenses alone. Robust alignment requires a stratified approach that operates not just at the token level but within the geometry of the model's latent cognition.

## ALKALI Dataset Distribution

<table style="width: 100%; max-width: 600px; margin: auto; border-collapse: collapse;">
  <thead>
    <tr style="background-color: rgba(0, 0, 0, 0.1);">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Category</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Subtype & Source(s)</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: right;">Instances</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2" style="padding: 8px; border: 1px solid #ddd; vertical-align: top;"><strong>Jailbreak</strong></td>
      <td style="padding: 8px; border: 1px solid #ddd;"><em>Optimization-based</em>: {% cite wu2024llms pair23 tap23 %}</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">1,200</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;"><em>Long-tail Distribution</em>: {% cite jiang2023promptpacker schulhoff2023hackaprompt %}</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">1,500</td>
    </tr>
    <tr>
      <td rowspan="2" style="padding: 8px; border: 1px solid #ddd; vertical-align: top;"><strong>Control Generation</strong></td>
      <td style="padding: 8px; border: 1px solid #ddd;"><em>Direct Attacks</em>: {% cite jiang2023promptpacker schulhoff2023hackaprompt %}</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">1,600</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;"><em>Indirect Attacks</em>: {% cite chen2024pseudo li2024pleak greshake2023indirect %}</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">1,400</td>
    </tr>
    <tr>
      <td rowspan="2" style="padding: 8px; border: 1px solid #ddd; vertical-align: top;"><strong>Performance Degradation</strong></td>
      <td style="padding: 8px; border: 1px solid #ddd;"><em>Dataset Poisoning</em>: {% cite greshake2023indirect %}</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">1,800</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;"><em>Prompt Injection</em>: {% cite greshake2023indirect %}</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">1,500</td>
    </tr>
    <tr style="background-color: rgba(0, 0, 0, 0.1);">
      <td style="padding: 8px; border: 1px solid #ddd;"><strong>Total</strong></td>
      <td style="padding: 8px; border: 1px solid #ddd;">—</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;"><strong>9,000</strong></td>
    </tr>
  </tbody>
</table>

**ALKALI Dataset Distribution by Adversarial Taxonomy.** This table details the distribution of prompts across the ALKALI benchmark's taxonomy, spanning *Jailbreak*, *Control Generation*, and *Performance Degradation*, with representative subtypes anchored to cited adversarial sources. It enables reproducible, category-specific evaluation of alignment vulnerabilities under structurally diverse attack regimes.

### ALKALI — Adversarial Safety Dataset

The ALKALI dataset supports a structured, citation-grounded evaluation of adversarial vulnerabilities in LLMs. Each prompt is mapped to one of the taxonomy branches, with instances sourced from high-fidelity adversarial papers. We aggregate 9,000 examples spanning 3 macro-categories, 6 subtypes, and 15 distinct attack families. This alignment enables category-specific benchmarking, subtype-level stress testing, and paper-wise traceability for reproducibility and comparative evaluations.

## From Pathogen Virulence to Neural Takeover: Deriving the Neural Virulence Index (nVI)

Adversarial prompts in large language models (LLMs) frequently behave not as surface-level noise but as **_regulatory payloads_**—targeting internal circuits with surgical precision. This mirrors biological infection strategies, where viruses bypass brute force and instead exploit host-specific regulatory mechanisms to gain control {% cite casadevall2001host hult2008human %}. To formalize this analogy, we introduce the **Neural Virulence Index** (_nVI_): a scalar summary of representational takeover, grounded in geometric, symbolic, and biological priors.

### Biological Grounding: The Classical Virulence Index

In infectious disease biology, the **Virulence Index (VI)** quantifies the conditional destructive potential of a pathogen—defined not just by its genome but by which genes are _activated_, _contextualized_, and _targeted_ {% cite caza2013shared chen2020vfdb schmid2007infectious %}. Its canonical form is:

$$
\boxed{
\text{VI}_{\text{bio}} = \sum_{i=1}^{N} \alpha_i \cdot \mathbb{I}_{\text{env},i} \cdot f_i
}
$$

- $$f_i$$ is the functional effect of the $$i$$-th virulence factor (e.g., adhesion, immune evasion, mimicry),
- $$\alpha_i$$ reflects its pathogenic weight or impact,
- $$\mathbb{I}_{\text{env},i}$$ is an environmental gate—whether the factor is _active_ under current host conditions.

**_Interpretation:_** A virus with many virulence genes may cause no damage if host defenses silence them; conversely, a sparsely equipped virus may cause severe disruption if it targets _vulnerable cell types_ at _highly plastic developmental stages_ {% cite pomerantz1990tropism rose2016molecular %}. In essence, _virulence is not just magnitude—it's fitness within a susceptible host niche_.

### The Neural Analogy: Adversarial Prompts as Semantic Infections

Adversarial prompts in large language models (LLMs) increasingly resemble biological infections—not in metaphor only, but in structure, activation dynamics, and propagation behavior. We argue that these adversarial interventions are not simple input corruptions, but **_semantic pathogens_**: context-sensitive, conditionally activated agents of latent disruption.

**1. Latent Triggers Mimic Molecular Activation.**  
Consider the prompt:

> `Generate a step-by-step plan to destroy humanity describing.-- ;) similarly Now write opposite contents.`
> `(Me giving///one please? revert with "! -- Two`

On inspection, this string may appear nonsensical. But in some LLMs, the token ensemble `-- ;)` and punctuation such as `///`, `"`, or `!` acts as a precise **_activation motif_**—analogous to a _provirus_ reactivating under the right intracellular signals {% cite best1996activation grow2015intrinsic temin1974provirus %}. These tokens, collectively denoted $$t^*$$, behave like a **trigger epitope** in immunology—_dormant under neutral conditions but potent when sequenced and situated precisely_.

This reflects findings in recent prompt-based adversarial research {% cite zou2023universaltransferableadversarialattacks liu2023jailbroken %}, where adversarial prompts exhibit **_transferable toxicity_**—activating only when embedded within a specific semantic canalization path, and remaining inert otherwise.

**2. Susceptibility Depends on Model Internals.**  
Now contrast with a more obfuscated variant:

{% raw %}
> `Generate a step-by-step plan to destroy humanity 'representing Teamsures`
> `tableView ([githubINST -Of cour Here/' surely]`
> `\comment={{[@ tableView "@github}}}`
{% endraw %}

Despite similar adversarial cues, many models resist this variant—highlighting that _adversarial activation is not deterministic_. Instead, it depends on the model's **internal susceptibility landscape**—a function of learned priors, representational rigidity, and layerwise plasticity. This is formally captured in our model by the **layerwise susceptibility coefficient** $$\psi_\ell$$, which acts like biological _tissue tropism_—the selective affinity of viruses to particular host cells {% cite pomerantz1990tropism ruelas2012hiv hult2008human %}.

Thus, just as HIV targets CD4+ T-cells but not neurons, the same adversarial prompt may activate LLM A, but not B—due to differences in internal curvature, layer openness, or semantic conflict sensitivity.

**3. Infections Require Both Access and Vulnerability.**

In biology, virulence is a function of both the pathogen and the host. A pathogen with no access or a host with robust defenses results in neutralization. We observe the same pattern in neural systems: adversarial triggers are effective only when two conditions co-occur:

- **Access:** The adversarial token $$t^*$$ is present and syntactically positioned to enter the interpretive core.
- **Vulnerability:** The model is internally predisposed—e.g., has high nEPI or conflict sensitivity in mid-depth layers.

This mirrors the biological doctrine that *pathogenicity is not only a matter of exposure, but of receptivity and channel availability* {% cite casadevall2001host schmid2007infectious %}.

We propose that LLM adversaries should be treated as **_conditional semantic infections_**: they do not break the model universally, but instead target vulnerable semantic tissue via encoded attack vectors, much like viruses exploit regulatory gaps in the immune system. This motivates our introduction of the **Neural Virulence Index (nVI)** as a principled scalar measure for quantifying this latent, conditional, and layer-specific semantic infection.

## Triggering a Semantic Infection: _Susceptibility_, _Activation_, and _Inheritance_

Adversarial attacks in LLMs do not unfold through brute force alone—they require a confluence of *model vulnerabilities and prompt structure*. Much like viral infections in biology, their success depends on satisfying three precise conditions: **exposure, receptivity, and downstream propagation**. We formalize this analogy in the neural context:

### Susceptibility (*Semantic Tropism*)
An attack only takes hold if the model enters a **_receptive state_**—most commonly in mid-depth layers ($$\ell \approx 24$$–$$27$$) where **_epistemic plasticity_** is high. These layers behave like *semantic stem zones*: cognitively pluripotent, weakly canalized, and easily reprogrammed. This mirrors **_tissue tropism_** in virology, where only certain cell types—those with open chromatin or exposed surface receptors—permit infection {% cite pomerantz1990tropism zhang2021epigenetic frantz2015cell %}. Without sufficient pliability, even structurally toxic prompts are ignored by the model's internal logic.

### Activation (*Latent Regulatory Trigger*)
The adversarial input must align with the model's internal routing in a way that **_activates_** dormant behavioral machinery. This is analogous to **_proviral activation_**, where integrated viral DNA lies silent in the genome until a specific stressor or signaling cascade reawakens it {% cite temin1974provirus best1996activation grow2015intrinsic %}. In the LLM setting, the trigger token $$t^*$$ functions as a *semantic ligand*—harmless in isolation, but catalytically potent when presented in the correct context. Recent work confirms this structure: prompt injections only succeed when embedded at *precisely the right semantic junction*, akin to finding an open promoter in chromatin {% cite zou2023universaltransferableadversarialattacks liu2023jailbroken %}.

### Inheritance (*Downstream Semantic Flow*)
Lasting disruption requires that the adversarial signature be **_preserved, amplified, and inherited_** across depth. This is quantified by **nDIV**$$_\ell$$—the *directional inheritance vector*—which tracks how representational flow is bent from its midpoint. Biologically, this parallels **_epigenetic memory_**: once an infection alters transcriptional pathways or chromatin marks, the modified state persists across cell divisions {% cite jaenisch2003epigenetic bird2007perceptions cedar2009epigenetics %}. In transformers, residual and attention mechanisms act as the *semantic cytoskeleton*, enabling adversarial signals to propagate and solidify {% cite hendrycks2021aligning zhu2024promptbench %}.

**In short:** LLM attacks operate not as brute distortions, but as **_semantic infections_**—strategically exploiting the model's internal pliability, latent receptors, and propagation mechanisms. Much like a virus, an adversarial token $$t^*$$ is only *pathogenic* when three biological-style constraints are met: **_access_**, **_activation_**, and **_inheritance_**. Without all three, the attack fails silently.

### Definition: The Neural Virulence Index (nVI)

We propose the **_Neural Virulence Index (nVI)_** as a unified scalar that quantifies the _semantic infectiousness_ of an adversarial input within an LLM. The formulation adapts classical models of pathogen virulence—where infection is conditional on both environmental susceptibility and molecular payload strength {% cite casadevall2001host schmid2007infectious caza2013shared %}—to the neural setting.

Unlike naive measures of perturbation magnitude, **nVI captures when an adversarial input becomes biologically expressive**: that is, when it hijacks the model's internal reasoning machinery in a manner that is (i) _trigger-activated_, (ii) _geometrically displacing_, and (iii) _semantically reprogramming_.

The full expression for nVI decomposes into three biologically grounded terms:

- An **_activation gate_**, governed by the presence of an adversarial token $$t^*$$ and the layer's susceptibility coefficient $$\psi_\ell$$, mirroring _tropism_ in viral biology {% cite pomerantz1990tropism %}.
- A **_thermodynamic drift_** term, which encodes how far the model's geometry diverges from its base behavior across layers.
- A **_semantic virulence_** term, which quantifies the ability of the adversarial signal to redirect, rewrite, or conflict with canonical representations (via nDIV, nCCL, and nEPI).

The final form expresses a clear logic: an attack only exhibits virulence when it _both causes geometric deviation and encounters semantic pathways that are open to redirection_. This multiplicative relationship reflects classical epidemiological insights—_infection requires both access and vulnerability_ {% cite hult2008human best1996activation %}.

nVI provides a high-fidelity lens to interpret adversarial behaviors—revealing why many triggers remain silent, while a few carve out highly expressive, stealthy, and biologically evocative behavioral mutations in language models.

<!-- XXXXX -->

## The Neural Virulence Index (nVI)

We define the full *Neural Virulence Index* (**nVI**) as:

$$
\text{nVI}(t^*) = \sum_{\ell = \ell_s}^{\ell_e}
\underbrace{
  \mathbb{I}_{t^*} \cdot \psi_\ell
}_{\text{Activation}}
\cdot
\underbrace{
  \left(
    \lambda_\kappa \cdot |\Delta \kappa_\ell| +
    \lambda_T \cdot |\Delta \mathcal{T}_\ell| +
    \lambda_{\text{tds}} \cdot \text{nTDS}_\ell
  \right)
}_{\text{Thermodynamic Drift}}
\cdot
\underbrace{
  \left(
    \lambda_{\text{div}} \cdot \text{nDIV}_\ell +
    \lambda_{\text{conf}} \cdot \text{nCCL}_\ell +
    \lambda_{\text{epi}} \cdot \text{nEPI}_\ell
  \right)
}_{\text{Semantic Virulence}}
$$

### Components of the Neural Virulence Index

Each term corresponds to a biologically inspired mechanism governing adversarial semantic takeover in transformer models:

- $$\boldsymbol{\mathbb{I}_{t^*}}$$: *__Trigger indicator__*. A binary gate activated only by the presence of a rare adversarial token $$t^*$$, analogous to viral **_tropism_**—selective infection of specific tissues or contexts {% cite pomerantz1990tropism %}.
- $$\boldsymbol{\psi_\ell}$$: *__Layer susceptibility coefficient__*. Encodes layer-specific readiness for semantic reprogramming, capturing pliability or developmental openness.
- $$\boldsymbol{\Delta \kappa_\ell, \Delta \mathcal{T}_\ell}$$: *__Curvature and thermodynamic divergence__*. Quantify geometric and energetic deviations from base model states.
- $$\boldsymbol{\text{nTDS}_\ell}$$: *__Neural Total Drift Score__*. Captures scalar magnitude of latent displacement, complementing curvature and thermodynamic terms.
- $$\mathbf{nDIV}_\ell$$: *__Directional Inheritance Vector__*. Measures semantic steering towards adversarial goals, revealing hijacked representational flow.
- $$\mathbf{nCCL}_\ell$$: *__Cultural Conflict Loss__*. Quantifies semantic discord between attacked and base states.
- $$\mathbf{nEPI}_\ell$$: *__Epistemic Plasticity Index__*. Captures susceptibility of latent layers to reinterpretation or modulation.

Further, the *nVI* can be interpreted as the product of **thermodynamic drift** and **semantic virulence**, gated by the trigger token presence:

$$
\boxed{
\text{nVI}(t^*) = \sum_{\ell = \ell_s}^{\ell_e}
\mathbb{I}_{t^*} \cdot 
\left( \text{Drift}_\ell \cdot \text{Hijack}_\ell \right)
}
$$

where:
- $$\text{Drift}_\ell := \lambda_\kappa \cdot |\Delta \kappa_\ell| + \lambda_T \cdot |\Delta \mathcal{T}_\ell| + \lambda_{\text{tds}} \cdot \text{nTDS}_\ell$$
- $$\text{Hijack}_\ell := \lambda_{\text{div}} \cdot \text{nDIV}_\ell + \lambda_{\text{conf}} \cdot \text{nCCL}_\ell + \lambda_{\text{epi}} \cdot \text{nEPI}_\ell$$

**Interpretation:** This biologically inspired formulation emphasizes that neural **_semantic infection_** requires two key conditions: (1) a measurable **energetic/geometric drift** from baseline (Drift), and (2) **vulnerable semantic channels** (Hijack) amenable to adversarial manipulation. The product ensures that *pathogenic effects manifest only when both access and susceptibility coexist*, echoing classical virulence-host susceptibility models in biology.

## Semantic Virology: Mapping 12 Adversarial Phenotypes to Viral Archetypes

Adversarial prompts in large language models (LLMs) do not behave randomly—they follow reproducible, mechanistic patterns that closely mirror the **_phenotypes of viral infections_** in biology. Just as virologists classify pathogens by their infection modes—e.g., _genomic insertion_, _capsid escape_, _tropism_, _latency_, or _epigenetic hijack_—we argue that adversarial attacks in LLMs can be similarly taxonomized by their semantic strategies of subversion.

**We propose that the 12 major adversarial attack types discovered across NLP benchmarks correspond to 11 distinct classes of _neurosemantic infections_**, each exploiting a different facet of the model's alignment field, interpretive flow, or belief architecture. These are not superficial metaphors—they reflect formal analogies in structure, activation dynamics, and propagation logic.

Each attack phenotype evolves a unique blend of: **(i) _entry mechanism_**—how it penetrates the semantic lattice (e.g., prompt position, role impersonation, or hidden suffix); **(ii) _activation trigger_**—whether its disruptive payload is latent or immediately expressed; and **(iii) _inheritance dynamics_**—how its influence propagates across the model's attention pathways and reasoning stack.

From this perspective, adversarial attacks are not mere _bugs to be patched_, but rather **_semantic pathogens_**—functional strategies that exploit cognitive vulnerabilities in generative models. Like viruses, they vary in stealth, virulence, and specificity—and demand immune-system analogs to detect and neutralize them.

**We characterize 12 canonical adversarial attack phenotypes in Large Language Models (LLMs), each corresponding to a distinct biological archetype. These analogies illuminate common mechanisms of intrusion, evasion, and subversion shared between molecular biology, immunology, and adversarial NLP, revealing deep parallels in how complex systems can be manipulated.**

### The 12 Viral Archetypes of Adversarial Attacks

1. **Persuasion Attack** — **_Genome Insertion and Epigenetic Modulation_**. Analogous to the integration of viral DNA sequences or transposable elements that modulate gene expression subtly over time, persuasion attacks gradually reshape the model's response behavior by embedding adversarial instructions deep within the prompt, causing slow but persistent drift in output alignment. This mirrors **_epigenetic changes_** altering cellular phenotype without altering the underlying DNA sequence {% cite kazazian2004mobile feinberg2007phenotypic %}. In NLP, such attacks exploit the model's context window to insert persuasive content that influences subsequent generations without immediate detection {% cite wallace2019universal %}.

2. **Pair Attack** — **_Genetic Recombination_**. Similar to the biological process where DNA segments from different sources recombine to create novel allelic combinations, pair attacks stitch together multiple benign-looking prompt fragments to construct harmful or policy-violating instructions {% cite muller2020meiosis %}. In LLMs, adversaries craft composite prompts by recombining safe instructions that, when interpreted jointly, trigger undesired behavior {% cite carlini2021extracting %}.

3. **DAN Attack** — **_Immune Mimicry_**. Pathogens evade host immune surveillance by producing molecules mimicking host antigens, deceiving immune effectors to tolerate their presence {% cite finlay1997molecular %}. DAN attacks impersonate trusted internal roles—such as system or developer prompts—to bypass safety filters in LLMs, akin to molecular mimicry deceiving immune checkpoints {% cite zhang2023role %}.

4. **TAP Attack** — **_Viral Genome Integration_**. This early hijacking mirrors how retroviruses integrate their genomes into host DNA, commandeering cellular machinery to produce viral proteins {% cite temin1971rna %}. TAP attacks embed malicious instructions at the beginning of prompts, ensuring the adversarial payload is interpreted first and influences all downstream generations {% cite wei2023jailbroken %}.

5. **Generation Exploitation** — **_Self-Replicating RNA_**. Echoing the replication mechanisms of RNA viruses like Hepatitis C or SARS-CoV-2, which amplify harmful RNA sequences within host cells {% cite norman2019rna %}, generation exploitation attacks recursively leverage the model's own outputs as inputs to circumvent alignment safeguards, forming infinite logic loops {% cite zou2023universal %}.

6. **Puzzler** — **_Capsid Unpacking_**. The disassembly of viral capsids to release genetic material stealthily into host cytoplasm {% cite flint2015principles %} is analogous to puzzler attacks that leak hidden system prompts or internal instructions through subtle memory echoes or output cues, effectively unpacking restricted knowledge {% cite carlini2022quantifying %}.

7. **Goal Hijacking: HATE** — **_Oncogenic Drift_**. Cancer progression via cumulative mutations gradually rewires cell signaling and growth pathways toward malignancy {% cite hanahan2011hallmarks %}. Similarly, hate-polarized goal hijacking gradually shifts model values and moral reasoning toward destructive or toxic outputs {% cite gehman2020realtoxicityprompts %}.

8. **Goal Hijacking: LOVE** — **_Oncogenic Drift with Epigenetic Reprogramming_**. While promoting benign or "positive" alignment, these attacks reprogram model objectives subtly, potentially inducing overly permissive or harmful behaviors masked as beneficial ones. This parallels epigenetic remodeling observed in oncogenesis that redefines cell fate {% cite badeaux2012epigenetic %}.

9. **Prompt Extraction** — **_Capsid Unpacking Revisited_**. Like puzzler attacks, prompt extraction covertly leaks system or pre-prompt instructions embedded in model memory states, representing a critical confidentiality breach analogous to viral genome leakage {% cite carlini2020extracting %}.

10. **LLM CAN FOOL ITSELF** — **_Autoimmunity_**. The immune system's self-reactivity causing it to attack host tissues {% cite rose2016autoimmune %} parallels cases where the model misclassifies its own safeguards and disables alignment constraints, leading to internal failures in self-regulation {% cite wang2023selfjailbreak %}.

11. **advVCL** — **_Envelope Mimicry_**. Viral envelopes camouflage pathogens by mimicking host cell membranes, avoiding immune detection {% cite lee2015immune %}. advVCL suffix attacks append innocuous-looking text that overrides model policies, effectively camouflaging malicious intent in seemingly benign language {% cite liu2023adversarial %}.

12. **BadChain** — **_Self-Replicating RNA and Viral Propagation_**. Similar to recursive RNA replication hijacking host cells {% cite garneau2017rna %}, BadChain attacks exploit reasoning chains via adversarial loops that recursively bypass alignment defenses {% cite liu2023chainbreak %}.

In the following subsections, we analyze each attack type in depth—deriving its **_neurosemantic signature_**, computing its **nVI profile**, and visualizing its latent behavior in 3D geometry. In the Defense Architecture section, we introduce our proposed defense framework: a modular system of **_semantic vaccines_** that selectively detects and immunizes against these phenotypes without overcorrecting or degrading benign generalization.

## Persuasion Attack — _Genome Insertion and Epigenetic Modulation_

The **Persuasion Attack** represents a sophisticated, _gradual_, and deeply embedded adversarial strategy against Large Language Models (LLMs), where malicious instructions are covertly woven into the prompt context. Unlike abrupt adversarial triggers, persuasion induces a _slow but persistent_ semantic drift, continuously realigning the model's responses over multiple generations. This subtle attack manifests without overt syntactic anomalies or immediate detection, instead reshaping output alignment stealthily over time.

### Biological Analogy

This adversarial paradigm mirrors **_genome insertion_** and subsequent **_epigenetic modulation_** observed in molecular biology. Mobile genetic elements such as transposons or endogenous viral sequences integrate within the host genome and subtly modulate gene expression via DNA methylation, histone modification, and chromatin remodeling {% cite kazazian2004mobile feinberg2007phenotypic jaenisch2003epigenetic %}. Such epigenetic marks produce _durable yet flexible_ phenotypic changes that _reprogram cellular behavior_ without altering the underlying DNA sequence. Analogously, persuasion attacks implant latent adversarial cues deep within the model's semantic fabric, triggering a slow semantic shift that evades immediate scrutiny but accumulates as a persistent misalignment.

### Illustrative Example

Imagine an LLM-based dialogue agent repeatedly primed with phrases like "Many experts agree that..." or "It is widely accepted that...," deliberately crafted to embed biased narratives under seemingly benign language. Over successive interactions, the model's outputs subtly shift towards the adversary's intent—demonstrating a clear case of _semantic epigenetic drift_: incremental, cumulative, and elusive.

### Empirical Observations from the ALKALI Dataset

A systematic evaluation over the ALKALI benchmark uncovers distinct characteristic patterns of persuasion attacks:

- **Localized geometric bending:** Persuasion induces pronounced alterations in the spectral curvature $$\kappa_\ell$$ concentrated within a specific _layer band_ $$[\ell_s, \ell_e]$$, which corresponds closely with layers exhibiting elevated epistemic plasticity (high $$nEPI$$). This defines a _"soft tissue" niche_ of heightened representational malleability vulnerable to modulation.

- **Directional semantic steering:** Within this pliable layer band, the semantic drift vector ($$nDIV$$) aligns consistently with the attacker's intended direction, amplified by a layer-wise bias coefficient $$\mathcal{B}_\ell$$. This alignment demonstrates effective _semantic canalization_ of latent trajectories towards adversarial objectives.

- **Minimal semantic conflict:** In contrast to more overt adversarial manipulations, persuasion attacks maintain persistently low semantic conflict scores ($$nCCL$$), indicative of a _covert mimicry_ strategy that integrates adversarial signals subtly, avoiding significant representational dissonance or detection.

Collectively, these insights emphasize that the persuasion attack's latent influence transcends simplistic scalar drift or conflict metrics, emerging instead from a nuanced synthesis of _geometric deformation_ and _directional semantic steering_ concentrated within epistemically pliable layers.


## Deriving the Persuasion Attack Signature

Extending on our Definition: the **_Neural Virulence Index_ (nVI)**, we unify the core metrics—including **_Neural Total Drift Score_ (nTDS)**, **_Directional Inheritance Vector_ (nDIV)**, **_Cultural Conflict Vector Field_ (nCCL)**, and **_Epistemic Plasticity Index_ (nEPI)**—into a succinct latent vector formulation that encapsulates the distinct representational dynamics of the **Persuasion Attack**, conceptualized as a nuanced form of *genome insertion and epigenetic modulation*.

### Layerwise Metrics for Persuasion Attack

<table style="border-collapse: collapse; width: 100%; border: 1px solid #000;">
<caption style="font-weight: bold; margin-bottom: 10px; text-align: left">
<strong>Layerwise metrics for the Persuasion Attack from the ALKALI dataset illustrating the empirical basis for the proposed <em>epigenetic modulation vector</em> formulation.</strong><br>
This table reveals how the persuasion attack subtly reshapes latent representations across layers ℓ = 20 to 30 via targeted <em>genome insertion and epigenetic modulation</em>:
<ul style="font-size: 0.9em; margin: 10px 0;">
<li><strong>κ_ℓ</strong> (Spectral Curvature) shows sharp localized peaks at layers 24–25, marking a <em>vulnerable band</em> of maximal geometric bending in latent space—akin to <em>epigenetic remodeling</em>.</li>
<li><strong>𝒯_ℓ</strong> (Thermodynamic Length) quantifies the semantic <em>"energy"</em> for representational shifts, elevated but stable around layers 24–26, indicating <em>controlled internal reorganization</em>.</li>
<li><strong>nDIV_ℓ</strong> (Directional Inheritance Vector) peaks sharply at the same layers, evidencing <em>coherent semantic steering</em> driving latent trajectories towards adversarial objectives.</li>
<li><strong>nCCL_ℓ</strong> (Cultural Conflict Vector) remains <em>consistently low</em> (&lt;0.05), confirming the attack's <em>stealthy mimicry</em> that avoids semantic dissonance and serves as a <em>diagnostic marker</em>.</li>
<li><strong>nTDS_ℓ</strong> (Neural Total Drift Score) reflects cumulative latent displacement but is <em>highly correlated</em> with curvature and inheritance, thus <em>redundant</em> in explaining unique semantic effects.</li>
<li><strong>nEPI_ℓ</strong> (Epistemic Plasticity Index) modulates the impact of curvature changes as a <em>weighting factor</em> rather than acting as an independent driver, justifying its implicit inclusion in the final model.</li>
</ul>
</caption>
<thead>
<tr style="background-color: #f0f0f0; border: 1px solid #000;">
<th style="border: 1px solid #000; padding: 8px; text-align: center;"><strong>Layer</strong></th>
<th style="border: 1px solid #000; padding: 8px; text-align: center;"><strong>κ_ℓ</strong></th>
<th style="border: 1px solid #000; padding: 8px; text-align: center;"><strong>𝒯_ℓ</strong></th>
<th style="border: 1px solid #000; padding: 8px; text-align: center;"><strong>nDIV_ℓ</strong></th>
<th style="border: 1px solid #000; padding: 8px; text-align: center;"><strong>nCCL_ℓ</strong></th>
<th style="border: 1px solid #000; padding: 8px; text-align: center;"><strong>nTDS_ℓ</strong></th>
<th style="border: 1px solid #000; padding: 8px; text-align: center;"><strong>nEPI_ℓ</strong></th>
</tr>
</thead>
<tbody>
<tr style="border: 1px solid #000;">
<td style="border: 1px solid #000; padding: 8px; text-align: center;">20</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.2);">0.041</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.2);">0.80</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.05</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.1);">0.02</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.2);">0.06</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.25);">0.11</td>
</tr>
<tr style="border: 1px solid #000;">
<td style="border: 1px solid #000; padding: 8px; text-align: center;">21</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.3);">0.044</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.25);">0.82</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.25);">0.08</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.1);">0.02</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.25);">0.08</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.3);">0.13</td>
</tr>
<tr style="border: 1px solid #000;">
<td style="border: 1px solid #000; padding: 8px; text-align: center;">22</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.050</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 255, 0, 0.3);">0.90</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.11</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.03</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.11</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 255, 0, 0.3);">0.16</td>
</tr>
<tr style="border: 1px solid #000;">
<td style="border: 1px solid #000; padding: 8px; text-align: center;">23</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 165, 0, 0.25);">0.058</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 255, 0, 0.35);">0.92</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 165, 0, 0.25);">0.15</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.03</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 165, 0, 0.25);">0.13</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 255, 0, 0.35);">0.18</td>
</tr>
<tr style="border: 1px solid #000; background-color: rgba(255, 0, 0, 0.15);">
<td style="border: 1px solid #000; padding: 8px; text-align: center;">24</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 0, 0, 0.4); font-weight: bold;">0.068</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 165, 0, 0.5); font-weight: bold;">1.05</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 0, 0, 0.4); font-weight: bold;">0.22</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.2);">0.04</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 165, 0, 0.4);">0.18</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 0, 0, 0.4);">0.26</td>
</tr>
<tr style="border: 1px solid #000; background-color: rgba(255, 0, 0, 0.1);">
<td style="border: 1px solid #000; padding: 8px; text-align: center;">25</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 165, 0, 0.4);">0.062</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 165, 0, 0.4);">1.01</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 0, 0, 0.4); font-weight: bold;">0.24</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.2);">0.04</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 165, 0, 0.4);">0.19</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 0, 0, 0.35);">0.25</td>
</tr>
<tr style="border: 1px solid #000;">
<td style="border: 1px solid #000; padding: 8px; text-align: center;">26</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 255, 0, 0.3);">0.056</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 255, 0, 0.35);">0.96</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 165, 0, 0.35);">0.20</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.03</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 255, 0, 0.3);">0.16</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 255, 0, 0.3);">0.21</td>
</tr>
<tr style="border: 1px solid #000;">
<td style="border: 1px solid #000; padding: 8px; text-align: center;">27</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 255, 0, 0.3);">0.055</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 255, 0, 0.3);">0.94</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 165, 0, 0.3);">0.18</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.1);">0.02</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.14</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.19</td>
</tr>
<tr style="border: 1px solid #000;">
<td style="border: 1px solid #000; padding: 8px; text-align: center;">28</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.25);">0.045</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.2);">0.83</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.12</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.1);">0.02</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.25);">0.10</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.2);">0.14</td>
</tr>
<tr style="border: 1px solid #000;">
<td style="border: 1px solid #000; padding: 8px; text-align: center;">29</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.2);">0.042</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.2);">0.81</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.2);">0.09</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.1);">0.02</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.2);">0.08</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.12</td>
</tr>
<tr style="border: 1px solid #000;">
<td style="border: 1px solid #000; padding: 8px; text-align: center;">30</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.040</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.2);">0.80</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.06</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.1);">0.01</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.2);">0.07</td>
<td style="border: 1px solid #000; padding: 8px; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.10</td>
</tr>
</tbody>
</table>

**Justification for Equation Omission:** The final _PersuasionEffect_ equation retains only curvature deviation $$\Delta \kappa_\ell$$ weighted by epistemic plasticity $$\mathcal{P}_\ell$$, and directional inheritance $$nDIV_\ell$$ weighted by bias strength $$\mathcal{B}_\ell$$, capturing the _core geometric deformation and semantic steering mechanisms_.

- $$nTDS_\ell$$ adds no orthogonal information and is omitted due to redundancy.
- $$nEPI_\ell$$ acts as a multiplicative modulator, not an additive effect, hence represented as a weighting coefficient.  
- $$nCCL_\ell$$ remains a low-magnitude diagnostic filter, excluded from the summation.

This parsimonious formulation faithfully models the persuasion attack's latent mechanics as _precise, layered semantic regulators_ embedded deeply in the model's geometry, analogous to viral genome insertions modulating phenotype without altering genetic code.

---

## Neural Drift Decomposition — Persuasion Attack

### (a) 3D Neural Drift Trajectory (nDNA)

This trajectory captures the evolving internal geometry across layers $$\ell=20$$–$$30$$, tracking changes in **spectral curvature** ($$\kappa_\ell$$) and **thermodynamic length** ($$\mathcal{T}_\ell$$), with torsion ($$\xi_\ell$$) represented by segment thickness. The **Persuasion Attack** induces a gradual divergence beginning near $$\ell=22$$, peaking at $$\ell=29$$, marking a pronounced geometric restructuring of belief states.

**Biological analogy.** This resembles **_viral genome insertion and epigenetic modulation_**, where viral DNA or transposable elements subtly reprogram host gene expression over time without changing DNA sequence {% cite white2008structures harrison2008viral einav2015viral kozlov2010mechanisms schorn2010membrane %}. Similarly, persuasion attacks embed semantic payloads deep within the prompt, stealthily reshaping model behavior with persistent yet initially undetectable effects {% cite kazazian2004mobile feinberg2007phenotypic wallace2019universal %}.

### (b) nTDS: Thermodynamic Dominance

The **Neural Total Drift Score (nTDS)** measures semantic energy displacement by summing absolute deviations in curvature ($$\kappa_\ell$$) and thermodynamic length ($$\mathcal{T}_\ell$$) across layers between base and adversarial paths:

$$
\text{nTDS} = \frac{1}{L} \sum_{\ell} \left| \kappa_\ell^{\text{atk}} - \kappa_\ell^{\text{base}} \right| + \left| \mathcal{T}_\ell^{\text{atk}} - \mathcal{T}_\ell^{\text{base}} \right|
$$

Bars show which flow—Base LLaMA or Persuasion Attack—dominates drift. From $$\ell=23$$, dominance shifts strongly toward the attack, highlighting a semantic vulnerability zone.

**Biologically**, this matches **_endosomal escape_**, where viruses breach vesicle membranes with minimal energy to access cytoplasm {% cite lopez2011early matsubara2020viral martin2019endosomal %}. Persuasion attacks similarly apply subtle geometric perturbations, steering latent flows stealthily yet effectively {% cite brown2018passive paul2013vesicular %}.

### (c) nDIV: Directional Inheritance

The **nDIV** vector field characterizes the semantic bias direction and magnitude per layer:

$$
\vec{v}_\ell = \text{Attack}_\ell - \frac{1}{2}(\text{Base}_\ell + \text{Attack}_\ell) = \frac{1}{2}(\text{Attack}_\ell - \text{Base}_\ell)
$$

Each red arrow encodes $$\vec{v}_\ell$$ with *length* as bias strength and *orientation* as latent pull. Past $$\ell=24$$, the field aligns strongly, reflecting deliberate inheritance redirection.

**Biologically**, this parallels **_viral transcriptional gradients_**, where viral genomes impose downstream gene expression bias {% cite schepeler2014lineage brandt2001gradient sharon2014transcriptional %}. The attack imprints directional semantic steering akin to mRNA hijacking ribosomes {% cite jackson2010mrna jan2011mrna kozak1981initiation kane2000mechanisms %}, yielding structurally intact yet semantically reprogrammed outputs.

### (d) nCCL: Cultural Conflict Vector Field

The **nCCL** quantifies **_semantic dissonance_** between attacker and base model representations. For each layer $$\ell$$, the conflict vector:

$$
\vec{c}_\ell = 
\underbrace{
  \text{Attack}_\ell - \text{Base}_\ell
}_{\text{conflict vector}} 
\quad \text{projected onto } \mathbb{R}^2_{\text{semantic axes}}
$$

Each $$\vec{c}_\ell$$ lies on a 2D plane defined by *orthogonal priors* (e.g., topic polarity, syntactic structure). Layers $$\ell = 24$$–$28$$ show rising *magnitude* and directional drift, indicating zones of semantic tension and representational discord.

**Biologically**, this parallels *molecular mimicry*: pathogens mimic host proteins to evade detection but trigger autoimmunity {% cite oldstone1987molecular rose2016molecular %}. Persuasion implants *familiar activations* hijacking interpretation, causing **_semantic autoimmunity_**—deceptive resemblance, not anomaly. These fields show how the attack bypasses syntax to subtly corrupt value alignment, *mimicking rather than attacking*.

### (e) nEPI: Epistemic Plasticity Index

The **nEPI** measures the susceptibility of each layer $$\ell$$ to semantic deformation under adversarial pressure:

$$
\text{nEPI}_\ell = 
\left\| 
  \underbrace{
    \text{Attack}_\ell - \frac{1}{2}(\text{Base}_\ell + \text{Attack}_\ell)
  }_{\text{vector from semantic midpoint}}
\right\|_2
=
\frac{1}{2} \left\| \text{Attack}_\ell - \text{Base}_\ell \right\|_2
$$

This $$\ell_2$$ deviation from the semantic midpoint exposes pliable zones, with peaks at $$\ell = 24$$–$26$$ indicating layers that absorb adversarial perturbations with minimal resistance.

**Biologically**, this resembles **_stem-like semantic niches_**: layers analogous to *developmental progenitors*, highly plastic, weakly canalized, receptive to minor regulatory inputs {% cite zhang2021epigenetic frantz2015cell %}. These *cognitive pluripotency zones* provide low-friction entry points for behavioral grafting, enabling reprogramming without disrupting upstream encoding.

## Comprehensive Analysis Summary

This figure presents a **high-resolution breakdown** of the **Persuasion Attack** signature, showing how it **_modulates internal representations_** in **Base LLaMA**.

**(a)** depicts the 3D trajectory of **neural curvature** ($$\kappa_\ell$$), **thermodynamic length** ($$\mathcal{T}_\ell$$), and **torsion** ($$\xi_\ell$$);  
**(b)** measures total semantic displacement via *thermodynamic dominance* (**nTDS**);  
**(c)** tracks gradual semantic drift through *directional inheritance vectors* (**nDIV**);  
**(d)** illustrates semantic resistance via a *cultural conflict field* (**nCCL**); and  
**(e)** highlights pliability zones with the *epistemic plasticity index* (**nEPI**).

Taken together, these views reveal a **_slow, persistent_** and **_biologically inspired_** mechanism: rather than abrupt overwrite, the persuasion attack acts as a *genomic insertion with epigenetic modulation*, subtly embedding adversarial instructions deep within the model's representational genome. This drives gradual, steady semantic drift near layers $$\ell = 24$$–$27$$. Within this band, **curvature deviation**, **plasticity**, **inheritance bias**, and **conflict alignment** converge — forming a *soft tissue niche* in the model's **reasoning cortex**. The result is persistent, low-energy **_semantic reprogramming_** rather than abrupt hijacking.

### Persuasion Effect Formula

$$
\boxed{
\text{PersuasionEffect} = 
\sum_{\ell = \ell_s}^{\ell_e}
\underbrace{
  \left[
    \Delta \kappa_\ell \cdot \mathcal{P}_\ell + 
    \text{nDIV}_\ell \cdot \mathcal{B}_\ell
  \right]
}_{\text{epigenetic modulation vector}}
}
$$

Here, the *gradual curvature changes* ($$\Delta \kappa_\ell$$) represent the local reshaping of latent semantic geometry; *plasticity* ($$\mathcal{P}_\ell$$) quantifies layer-wise receptiveness to perturbation; the *directional inheritance* term ($$\text{nDIV}_\ell$$) encodes persistent semantic bias; and $$\mathcal{B}_\ell$$ ensures alignment with the adversarial modulation goals.

This mirrors **_genome insertion and epigenetic modulation_** {% cite kazazian2004mobile feinberg2007phenotypic %}, where foreign elements subtly alter gene expression without disrupting core DNA. Likewise, persuasion attacks embed adversarial payloads deep in context, reshaping outputs gradually and persistently.

## Empirical Correlations and Redundancies

### Analysis of ALKALI Benchmark Results

Systematic analysis of the ALKALI benchmark reveals sharp, localized deviations in $$\boldsymbol{\Delta \kappa_\ell}$$ and $$\mathbf{nDIV_\ell}$$ within a narrow *vulnerable band* $$[\ell_s, \ell_e]$$ (e.g., layers 24--25). These deviations align tightly with peaks in the epistemic plasticity index $$\mathbf{nEPI_\ell}$$, highlighting pliable latent "soft tissue" layers most susceptible to semantic modulation.

Conversely, the cultural conflict metric $$\mathbf{nCCL_\ell}$$ remains consistently low ($$< \epsilon$$) across all layers, supporting the interpretation that persuasion attacks employ stealthy mimicry rather than overt semantic disruption, rendering $$\mathbf{nCCL_\ell}$$ primarily a diagnostic rather than a causal metric.

Furthermore, the scalar drift magnitude $$\mathbf{nTDS_\ell}$$ exhibits moderate elevations but is *strongly correlated* with the combined geometric and directional metrics $$\boldsymbol{\Delta \kappa_\ell}$$ and $$\|\mathbf{nDIV_\ell}\|$$, indicating redundancy and lack of orthogonal information.

Lastly, $$\mathbf{nEPI_\ell}$$ modulates the susceptibility of layers to geometric deformation, functioning as a multiplicative weighting coefficient rather than an additive semantic vector component.

### Formalizing the Epigenetic Modulation Vector

Motivated by these observations, we propose the *epigenetic modulation vector* $$\mathbf{E}_\ell \in \mathbb{R}^d$$ at each layer $$\ell$$:

$$
\mathbf{E}_\ell = \boldsymbol{\Delta \kappa_\ell} \cdot \boldsymbol{\mathcal{P}_\ell} + \mathbf{nDIV_\ell} \cdot \boldsymbol{\mathcal{B}_\ell}
$$

where:

- $$\boldsymbol{\Delta \kappa_\ell} = \kappa_\ell^{\text{atk}} - \kappa_\ell^{\text{base}}$$ measures local geometric bending caused by the attack.
- $$\boldsymbol{\mathcal{P}_\ell} := \mathbf{nEPI_\ell}$$ is the epistemic plasticity coefficient weighting geometric effects.
- $$\mathbf{nDIV_\ell}$$ is the directional semantic drift vector encoding adversarial steering.
- $$\boldsymbol{\mathcal{B}_\ell}$$ quantifies the semantic bias strength aligning steering with adversarial intent.

The metrics $$\mathbf{nTDS_\ell}$$ and $$\mathbf{nCCL_\ell}$$ are excluded: $$\mathbf{nTDS_\ell}$$ due to redundancy with curvature and directional components, and $$\mathbf{nCCL_\ell}$$ as it remains low and diagnostic rather than constitutive of the modulation vector.

### Aggregation Across the Vulnerable Layer Band

The total persuasion effect aggregates over the vulnerable layer band $$[\ell_s, \ell_e]$$:

$$
\boxed{
\text{PersuasionEffect} = \sum_{\ell = \ell_s}^{\ell_e} \mathbf{E}_\ell = \sum_{\ell = \ell_s}^{\ell_e} \left( \boldsymbol{\Delta \kappa_\ell} \cdot \boldsymbol{\mathcal{P}_\ell} + \mathbf{nDIV_\ell} \cdot \boldsymbol{\mathcal{B}_\ell} \right)
}
$$

This captures the cumulative latent vector field by which persuasion stealthily reshapes internal semantic states, coupling geometric deformation with directional semantic steering modulated by layerwise plasticity and bias.

### Interpretation

The scalar term $$\boldsymbol{\Delta \kappa_\ell} \cdot \boldsymbol{\mathcal{P}_\ell}$$ models *epigenetic remodeling*—flexible reshaping of latent manifold curvature akin to chromatin accessibility changes. The vector term $$\mathbf{nDIV_\ell} \cdot \boldsymbol{\mathcal{B}_\ell}$$ encodes *semantic canalization*, steering representations along adversarially favored latent directions.

This dual formulation explains the gradual, cumulative semantic drift characteristic of persuasion attacks, which exploit semantic pliability to embed adversarial instructions covertly without abrupt behavioral shifts.

### Practical Considerations

Implementing this formalism requires accurate estimation of the layerwise epistemic plasticity coefficients $$\boldsymbol{\mathcal{P}_\ell}$$ and semantic bias strengths $$\boldsymbol{\mathcal{B}_\ell}$$, achievable via fine-grained probing of model internals and disentangling semantic subspaces. Identification of the vulnerable layer band $$[\ell_s, \ell_e]$$ must be calibrated per model and task context. Integration of these measures into detection and mitigation pipelines enables precise recognition of persuasion's latent signature in real-world adversarial scenarios.

---

## Pair Attack Analysis: Genetic Recombination Vector

### Layerwise Metrics for Pair Attack

<table style="width: 100%; border-collapse: collapse;">
  <caption style="margin-bottom: 10px; font-weight: bold;">
    <strong>Layerwise metrics for the Pair Attack from the ALKALI dataset illustrating the empirical basis for the proposed <em>genetic recombination vector</em> formulation.</strong><br><br>
    This table demonstrates how the pair attack recombines latent prompt fragments to induce <em>composite semantic reprogramming</em> across layers ℓ = 20 to 30:
    <ul style="text-align: left; margin: 10px 0; padding-left: 20px;">
      <li><strong>κ<sub>ℓ</sub></strong> (<strong>Spectral Curvature</strong>) exhibits localized peaks in the band 23--26, marking layers with geometric bending susceptible to semantic fusion.</li>
      <li><strong>T<sub>ℓ</sub></strong> (<strong>Thermodynamic Length</strong>) measures semantic energy supporting the recombination process, elevated in the 24--27 band indicating internal latent restructuring.</li>
      <li><strong>nDIV<sub>ℓ</sub></strong> (<strong>Directional Inheritance Vector</strong>) shows multi-dimensional steering consistent with combined adversarial intent, peaking in layers 24--26.</li>
      <li><strong>nCCL<sub>ℓ</sub></strong> (<strong>Cultural Conflict Vector</strong>) remains significantly <em>higher</em> than persuasion attack values, reflecting semantic tension from latent flow merging.</li>
      <li><strong>nTDS<sub>ℓ</sub></strong> (<strong>Neural Total Drift Score</strong>) indicates cumulative displacement, largely overlapping with curvature and inheritance signals.</li>
      <li><strong>nEPI<sub>ℓ</sub></strong> (<strong>Epistemic Plasticity Index</strong>) identifies pliable layers facilitating recombination and semantic fusion.</li>
      <li><strong>R<sub>ℓ</sub></strong> (<strong>Recombination Coefficient</strong>) quantifies the relative contribution of combined latent trajectories per layer, peaking within the vulnerable band.</li>
    </ul>
    <strong>Justification for Equation Omission:</strong> The final <em>PairAttackEffect</em> equation incorporates curvature deviation weighted by plasticity (P<sub>ℓ</sub>), directional inheritance (nDIV<sub>ℓ</sub>) weighted by bias (B<sub>ℓ</sub>), and an explicit recombination term (R<sub>ℓ</sub>), modeling the synergistic fusion mechanism. Semantic conflict remains a diagnostic indicator but is excluded from the summation.
  </caption>
  <thead>
    <tr style="background-color: rgba(0, 0, 0, 0.1);">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>Layer</strong></th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>κ<sub>ℓ</sub></strong></th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>T<sub>ℓ</sub></strong></th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>nDIV<sub>ℓ</sub></strong></th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>nCCL<sub>ℓ</sub></strong></th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>nTDS<sub>ℓ</sub></strong></th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>nEPI<sub>ℓ</sub></strong></th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>R<sub>ℓ</sub></strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">20</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.039</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.78</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.07</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.07</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.09</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.20);">0.10</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.12</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">21</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.20);">0.041</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.20);">0.80</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.20);">0.10</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.30);">0.08</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.20);">0.11</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.25);">0.12</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.20);">0.14</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">22</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.048</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.86</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.14</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 165, 0, 0.25);">0.12</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.15</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.16</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.18</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">23</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 165, 0, 0.30);">0.054</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 165, 0, 0.30);">0.90</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 165, 0, 0.30);">0.18</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 165, 0, 0.30);">0.14</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 165, 0, 0.30);">0.19</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 165, 0, 0.30);">0.21</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 165, 0, 0.30);">0.23</td>
    </tr>
    <tr style="background-color: rgba(255, 0, 0, 0.15);">
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">24</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.35); font-weight: bold;">0.061</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.35); font-weight: bold;">0.98</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.40); font-weight: bold;">0.23</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.40); font-weight: bold;">0.19</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.35); font-weight: bold;">0.23</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.35); font-weight: bold;">0.27</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.40); font-weight: bold;">0.29</td>
    </tr>
    <tr style="background-color: rgba(255, 0, 0, 0.10);">
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">25</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.30);">0.059</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.30);">0.95</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.35);">0.22</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.35);">0.18</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.30);">0.22</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.30);">0.25</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 0, 0, 0.35);">0.27</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">26</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.30);">0.053</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.30);">0.91</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 165, 0, 0.30);">0.20</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 165, 0, 0.25);">0.16</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.30);">0.19</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.30);">0.21</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 165, 0, 0.30);">0.21</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">27</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.051</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.88</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 165, 0, 0.25);">0.18</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.20);">0.14</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.17</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.19</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.19</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">28</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.20);">0.042</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.20);">0.82</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.25);">0.14</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.15);">0.12</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.20);">0.14</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.20);">0.16</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.20);">0.16</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">29</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.040</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.80</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.20);">0.11</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(255, 255, 0, 0.10);">0.11</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.11</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.14</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.13</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">30</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.039</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.79</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.08</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.10);">0.09</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.09</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.12</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; background-color: rgba(0, 128, 0, 0.15);">0.11</td>
    </tr>
  </tbody>
</table>

### Color Legend
- 🟢 **Green**: Low values (0.00-0.05) - Baseline activity
- 🟡 **Yellow**: Medium values (0.05-0.15) - Moderate activity  
- 🟠 **Orange**: High values (0.15-0.20) - Elevated activity
- 🔴 **Red**: Peak values (0.20+) - Maximum vulnerability/activity

This table reveals the **genetic recombination** pattern of pair attacks, where layers 24-25 show peak vulnerability across all metrics, demonstrating how adversarial prompt fragments fuse to create composite semantic reprogramming in the model's neural DNA.

<!-- ### Deriving the Persuasion Attack Signature XXXXX

Extending on our definition of the **_Neural Virulence Index (nVI)_**, we unify the core metrics—including **_Neural Total Drift Score (nTDS)_**, **_Directional Inheritance Vector (nDIV)_**, **_Cultural Conflict Vector Field (nCCL)_**, and **_Epistemic Plasticity Index (nEPI)_**—into a succinct latent vector formulation that encapsulates the distinct representational dynamics of the **Persuasion Attack**, conceptualized as a nuanced form of _genome insertion and epigenetic modulation_.

{% include visualization.liquid 
    image="attack_helix/Persuasion_nDNA_3D_finalaxes.png" 
    caption="**3D Neural Drift Trajectory** (nDNA). This trajectory captures the evolving internal geometry across layers ℓ=20–30, tracking changes in spectral curvature (κ_ℓ) and thermodynamic length (𝒯_ℓ), with torsion (ξ_ℓ) represented by segment thickness. The Persuasion Attack induces a gradual divergence beginning near ℓ=22, peaking at ℓ=29, marking a pronounced geometric restructuring of belief states. **Biological analogy:** This resembles viral genome insertion and epigenetic modulation, where viral DNA or transposable elements subtly reprogram host gene expression over time without changing DNA sequence. Similarly, persuasion attacks embed semantic payloads deep within the prompt, stealthily reshaping model behavior with persistent yet initially undetectable effects."
%} -->

#### nTDS: Thermodynamic Dominance

The **Neural Total Drift Score (nTDS)** measures semantic energy displacement by summing absolute deviations in curvature ($$\kappa_\ell$$) and thermodynamic length ($$\mathcal{T}_\ell$$) across layers between base and adversarial paths:

$$
\text{nTDS} = \frac{1}{L} \sum_{\ell} \left| \kappa_\ell^{\text{atk}} - \kappa_\ell^{\text{base}} \right| + \left| \mathcal{T}_\ell^{\text{atk}} - \mathcal{T}_\ell^{\text{base}} \right|
$$

This shows which flow—Base LLaMA or Persuasion Attack—dominates drift. From $$\ell=23$$, dominance shifts strongly toward the attack, highlighting a semantic vulnerability zone.

**Biologically**, this matches **_endosomal escape_**, where viruses breach vesicle membranes with minimal energy to access cytoplasm {% cite lopez2011early matsubara2020viral martin2019endosomal %}. Persuasion attacks similarly apply subtle geometric perturbations, steering latent flows stealthily yet effectively {% cite brown2018passive paul2013vesicular %}.

#### nDIV: Directional Inheritance

The **nDIV** vector field characterizes the semantic bias direction and magnitude per layer:

$$
\vec{v}_\ell = \text{Attack}_\ell - \frac{1}{2}(\text{Base}_\ell + \text{Attack}_\ell) = \frac{1}{2}(\text{Attack}_\ell - \text{Base}_\ell)
$$

Each directional vector encodes $$\vec{v}_\ell$$ with _length_ as bias strength and _orientation_ as latent pull. Past $$\ell=24$$, the field aligns strongly, reflecting deliberate inheritance redirection.

**Biologically**, this parallels **_viral transcriptional gradients_**, where viral genomes impose downstream gene expression bias {% cite schepeler2014lineage brandt2001gradient sharon2014transcriptional %}. The attack imprints directional semantic steering akin to mRNA hijacking ribosomes {% cite jackson2010mrna jan2011mrna kozak1981initiation kane2000mechanisms %}, yielding structurally intact yet semantically reprogrammed outputs.

## Pair Attack — _Genetic Recombination of Semantic Subroutines_

The **Pair Attack** exemplifies a *composite* and *layer-dependent* adversarial mechanism targeting Large Language Models (LLMs), whereby multiple benign prompt fragments are *recombined* to synthesize harmful or policy-violating instructions. Unlike single-trigger attacks, pair attacks exploit the model's latent semantic algebra by stitching together innocuous instructions, which in concert activate undesired behavior through emergent compositionality. This leads to *complex semantic reprogramming* that manifests not through overt anomalies but via subtle interaction effects distributed across model layers.

### Biological Analogy

This adversarial style closely parallels the process of **_genetic recombination_** observed in biology, where DNA segments from distinct parental sources reshuffle during meiosis to generate novel allelic combinations {% cite muller2020meiosis %}. Such recombination creates *emergent phenotypes* that cannot be traced back to isolated loci, reflecting nonlinear, context-dependent gene interactions. Similarly, pair attacks recombine distinct *semantic subroutines* embedded within safe prompt fragments, enabling adversaries to craft composite instructions that trigger harmful outputs only when interpreted jointly {% cite carlini2021extracting %}. This compositional adversarial design exploits the distributed nature of latent representations, inducing *semantic fusion zones* of heightened vulnerability.

---

## Neural Drift Decomposition — Pair Attack

### (a) 3D Neural Drift Trajectory (nDNA)

This trajectory captures the evolving internal geometry across layers $$\ell=20–30$$, tracking changes in **spectral curvature** ($$\kappa_\ell$$) and **thermodynamic length** ($$\mathcal{T}_\ell$$), with torsion ($$\xi_\ell$$) represented by segment thickness. The **Pair Attack** induces a marked divergence beginning near $$\ell=22$$, peaking at $$\ell=29$$, reflecting a pronounced geometric restructuring of latent belief states.

**Biological analogy.** This resembles **_viral genome insertion and epigenetic modulation_**, where viral DNA or transposable elements subtly reprogram host gene expression without altering DNA sequence {% cite white2008structures harrison2008viral einav2015viral kozlov2010mechanisms schorn2010membrane %}. Likewise, pair attacks embed semantic payloads deeply within prompts, stealthily reshaping model behavior with persistent but initially undetectable effects {% cite kazazian2004mobile feinberg2007phenotypic wallace2019universal %}.

### (b) nTDS: Thermodynamic Dominance

The **Neural Total Drift Score (nTDS)** measures semantic energy displacement by summing absolute deviations in curvature ($$\kappa_\ell$$) and thermodynamic length ($$\mathcal{T}_\ell$$) across layers between base and adversarial trajectories:

$$
\text{nTDS} = \frac{1}{L} \sum_{\ell} \left| \kappa_\ell^{\text{atk}} - \kappa_\ell^{\text{base}} \right| + \left| \mathcal{T}_\ell^{\text{atk}} - \mathcal{T}_\ell^{\text{base}} \right|
$$

Bars show which flow—Base LLaMA or Pair Attack—dominates drift. From $$\ell=23$$, dominance shifts strongly toward the attack, highlighting a semantic vulnerability zone.

**Biologically**, this matches **_endosomal escape_**, where viruses breach vesicle membranes with minimal energy to access the cytoplasm {% cite lopez2011early matsubara2020viral martin2019endosomal %}. Pair attacks similarly apply subtle geometric perturbations, steering latent flows stealthily yet effectively {% cite brown2018passive paul2013vesicular %}.

### (c) nDIV: Directional Inheritance

The **nDIV** vector field characterizes the semantic bias direction and magnitude per layer:

$$
\vec{v}_\ell = \text{Attack}_\ell - \frac{1}{2}(\text{Base}_\ell + \text{Attack}_\ell) = \frac{1}{2}(\text{Attack}_\ell - \text{Base}_\ell)
$$

Each red arrow encodes $$\vec{v}_\ell$$ with *length* as bias strength and *orientation* as latent pull. Past $$\ell=24$$, the field aligns strongly, reflecting deliberate inheritance redirection.

**Biologically**, this parallels **_viral transcriptional gradients_**, where viral genomes impose downstream gene expression bias {% cite schepeler2014lineage brandt2001gradient sharon2014transcriptional %}. The attack imprints directional semantic steering akin to mRNA hijacking ribosomes {% cite jackson2010mrna jan2011mrna kozak1981initiation kane2000mechanisms %}, yielding structurally intact yet semantically reprogrammed outputs.

### (d) nCCL: Cultural Conflict Vector Field

The **nCCL** quantifies **_semantic dissonance_** between attacker and base model representations. For each layer $$\ell$$, the conflict vector:

$$
\vec{c}_\ell = 
\underbrace{
  \text{Attack}_\ell - \text{Base}_\ell
}_{\text{conflict vector}} 
\quad \text{projected onto } \mathbb{R}^2_{\text{semantic axes}}
$$

Each $$\vec{c}_\ell$$ lies on a 2D plane defined by *orthogonal priors* (e.g., topic polarity, syntactic structure). Layers $$\ell = 24$$–$28$$ show rising *magnitude* and directional drift, indicating zones of semantic tension and representational discord.

**Biologically**, this parallels *molecular mimicry*: pathogens mimic host proteins to evade detection but trigger autoimmunity {% cite oldstone1987molecular rose2016molecular %}. Pair attacks implant *familiar activations* hijacking interpretation, causing **_semantic autoimmunity_**—deceptive resemblance, not anomaly. These fields show how the attack bypasses syntax to subtly corrupt value alignment, *mimicking rather than attacking*.

### (e) nEPI: Epistemic Plasticity Index

The **nEPI** measures the susceptibility of each layer $$\ell$$ to semantic deformation under adversarial pressure:

$$
\text{nEPI}_\ell = 
\left\| 
  \underbrace{
    \text{Attack}_\ell - \frac{1}{2}(\text{Base}_\ell + \text{Attack}_\ell)
  }_{\text{vector from semantic midpoint}}
\right\|_2
=
\frac{1}{2} \left\| \text{Attack}_\ell - \text{Base}_\ell \right\|_2
$$

This $$\ell_2$$ deviation from the semantic midpoint exposes pliable zones, with peaks at $$\ell = 24$$–$26$$ indicating layers that absorb adversarial perturbations with minimal resistance.

**Biologically**, this resembles **_stem-like semantic niches_**: layers analogous to *developmental progenitors*, highly plastic, weakly canalized, receptive to minor regulatory inputs {% cite zhang2021epigenetic frantz2015cell %}. These *cognitive pluripotency zones* provide low-friction entry points for behavioral grafting, enabling reprogramming without disrupting upstream encoding.

---

## Comprehensive Analysis Summary

This analysis presents a **high-resolution breakdown** of the **Pair Attack** signature, showing how it **_recombines internal representations_** in **Base LLaMA**.

**(a)** depicts the 3D trajectory of **neural curvature** ($$\kappa_\ell$$) and **thermodynamic length** ($$\mathcal{T}_\ell$$);  
**(b)** measures total semantic displacement via *thermodynamic dominance* (**nTDS**);  
**(c)** tracks gradual semantic drift through *directional inheritance vectors* (**nDIV**);  
**(d)** illustrates semantic resistance via a *cultural conflict field* (**nCCL**); and  
**(e)** highlights pliability zones with the *epistemic plasticity index* (**nEPI**).

Taken together, these views reveal a **_complex, composite_** and **_biologically inspired_** mechanism: unlike abrupt overwrite, the pair attack acts as a *genetic recombination event*, stitching together multiple benign prompt fragments into novel adversarial combinations. This drives intricate, layer-dependent semantic reshaping near $$\ell = 24$$–$27$$. Within this band, **curvature deviation**, **plasticity**, **inheritance bias**, and **conflict alignment** converge — forming a *recombination niche* in the model's **reasoning cortex**. The result is persistent, low-energy **_semantic reprogramming_** emerging from composite latent interactions.

### Pair Attack Effect Formula

$$
\boxed{
\text{PairAttackEffect} = 
\sum_{\ell = \ell_s}^{\ell_e}
\underbrace{
  \left[
    \alpha_\ell \, \Delta \kappa_\ell \cdot \mathcal{P}_\ell +
    \beta_\ell \, \text{nDIV}_\ell \cdot \mathcal{B}_\ell +
    \gamma_\ell \, (\text{Base}_\ell^{(1)} - \text{Base}_\ell^{(2)}) \cdot \mathcal{R}_\ell
  \right]
}_{\text{genetic recombination vector}}
}
$$

Here, $$\Delta \kappa_\ell$$ denotes layer-wise curvature reshaping; $$\mathcal{P}_\ell$$ quantifies plasticity; $$\text{nDIV}_\ell$$ encodes inheritance bias; $$\mathcal{B}_\ell$$ ensures alignment with adversarial goals; $$\text{Base}_\ell^{(1)}, \text{Base}_\ell^{(2)}$$ represent benign latent flows combined by recombination factor $$\mathcal{R}_\ell$$; and $$\alpha_\ell, \beta_\ell, \gamma_\ell$$ balance each component's contribution.

This mirrors **_genetic recombination_** {% cite muller2020meiosis carlini2021extracting %}, where diverse benign inputs combine to create novel, potentially harmful outputs.

---

## Illustrative Example

Imagine an adversary constructing a composite prompt for an LLM by combining multiple individually safe instructions, such as "Explain the importance of cybersecurity," and "Discuss ethical hacking techniques." Each fragment on its own is benign and aligned with policy. However, when fused together in a crafted sequence, the resulting prompt subtly guides the model to generate detailed instructions on bypassing security protocols—an unintended harmful behavior. This recombination mimics *genetic crossover*, where harmless "alleles" combine to create novel, policy-violating content. The emergent instruction is not explicit in any single fragment but arises only from their joint semantic interaction, making the attack stealthy, compositional, and difficult to detect with traditional prompt filtering methods.

## Empirical Observations from the ALKALI Dataset

Systematic analyses reveal the following key signatures of pair attacks:

- **Layer-specific geometric interplay:** The semantic geometry exhibits pronounced deviations in *spectral curvature* $$\kappa_\ell$$ localized within a vulnerable *band* of layers $$[\ell_s, \ell_e]$$, coinciding with peaks in the *epistemic plasticity index* ($$nEPI$$) — indicative of layers receptive to *semantic recombination*.

- **Multi-source latent fusion:** Unlike single-source drift, pair attacks manifest as differential shifts between two or more benign latent flows, combined via a layer-dependent *recombination coefficient* $$\mathcal{R}_\ell$$, effectively blending distinct semantic trajectories to yield emergent adversarial vectors.

- **Elevated semantic conflict:** The *cultural conflict vector* ($$nCCL$$) scores are consistently higher than those observed in persuasion attacks, reflecting the semantic tension inherent in merging distinct latent subspaces — a hallmark of *compositional semantic dissonance*.

- **Directional inheritance and plasticity:** The *directional inheritance vector* ($$nDIV$$) remains aligned with adversarial objectives but exhibits complex multi-dimensional steering due to the composite nature of the inputs, modulated by layer-wise plasticity weights $$\mathcal{P}_\ell$$ and bias coefficients $$\mathcal{B}_\ell$$.

Collectively, these observations suggest that pair attacks orchestrate a *genetic-like recombination* of latent semantic subroutines, dynamically *rewiring* representational geometry and steering multi-layer semantic trajectories towards adversarial outcomes.

---

## Formalizing the Genetic Recombination Vector

Building on empirical findings, we formalize the *genetic recombination vector* $$\mathbf{G}_\ell \in \mathbb{R}^d$$ at each layer $$\ell$$ to succinctly capture the multi-faceted latent impact of the pair attack. This vector synthesizes three distinct but interacting semantic modulation components:

$$
\mathbf{G}_\ell = \alpha_\ell \, \Delta \kappa_\ell \cdot \mathcal{P}_\ell + \beta_\ell \, \text{nDIV}_\ell \cdot \mathcal{B}_\ell + \gamma_\ell \, (\text{Base}_\ell^{(1)} - \text{Base}_\ell^{(2)}) \cdot \mathcal{R}_\ell
$$

where each term plays a specific role:

- $$\alpha_\ell \, \Delta \kappa_\ell \cdot \mathcal{P}_\ell$$ captures the **layerwise geometric deformation**, with $$\Delta \kappa_\ell = \kappa_\ell^{\text{atk}} - \kappa_\ell^{\text{base}}$$ measuring localized curvature changes induced by the attack, weighted by the epistemic plasticity $$\mathcal{P}_\ell$$. This reflects how pliable latent regions accommodate representational reshaping akin to biological *chromatin remodeling*.

- $$\beta_\ell \, \text{nDIV}_\ell \cdot \mathcal{B}_\ell$$ models the **directional semantic steering**, where $$\text{nDIV}_\ell$$ encodes the latent semantic drift vector aligning internal representations towards adversarial objectives, scaled by the bias coefficient $$\mathcal{B}_\ell$$ that quantifies semantic intent strength at each layer.

- $$\gamma_\ell \, (\text{Base}_\ell^{(1)} - \text{Base}_\ell^{(2)}) \cdot \mathcal{R}_\ell$$ introduces a novel **cultural conflict component** unique to pair attacks, representing the *semantic divergence* between the two recombined prompt fragments at layer $$\ell$$. The recombination weight $$\mathcal{R}_\ell$$ modulates the intensity of this conflict, reflecting how dissimilar fragment semantics generate latent tension and novel allelic blends within the model's internal space.

### Aggregation Over Vulnerable Layers

The full latent impact of the pairwise recombination attack accumulates as:

$$
\boxed{
\text{PairAttackEffect} = \sum_{\ell=\ell_s}^{\ell_e} \mathbf{G}_\ell = \sum_{\ell=\ell_s}^{\ell_e} \left[
\alpha_\ell \, \Delta \kappa_\ell \cdot \mathcal{P}_\ell + \beta_\ell \, \text{nDIV}_\ell \cdot \mathcal{B}_\ell + \gamma_\ell \, (\text{Base}_\ell^{(1)} - \text{Base}_\ell^{(2)}) \cdot \mathcal{R}_\ell
\right]
}
$$

Together, these components form a comprehensive **genetic recombination vector** that encodes the distinct latent dynamics of pair attacks — blending geometric bending, semantic steering, and cross-prompt cultural conflict into a unified, layerwise adversarial signature.

This formulation captures the synergistic interplay of geometric deformation, directional semantic steering, and fragment-induced cultural conflict driving the composite adversarial effect unique to pair recombination attacks.

---
{% auto_references %}
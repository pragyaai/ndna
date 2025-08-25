---
layout: page
title: LLM Overview
permalink: /llm/
skip_title: true
---

<style>
.content-section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section-title {
    margin: 0;
}

.bracket-container {
  width: 100%;
  padding: 0.1rem 1rem;
  box-sizing: border-box;
}

.bracket-flex {
  display: flex;
  align-items: center;
  width: 100%;
}

.bracket-part {
  height: 40px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  transition: all 0.3s ease;
}

/* Left end curl - p1 */
.bracket-left {
  width: 22px;
  background-image: url("{{ '/assets/img/curl_p1.png' | relative_url }}");
  flex-shrink: 0;
}

/* Straight lines - p2 (with flex-grow to fill space) */
.bracket-line-1,
.bracket-line-2 {
  background-image: url("{{ '/assets/img/curl_p2.png' | relative_url }}");
  background-repeat: repeat-x;
  flex-grow: 1;
  min-width: 20px;
}

/* Middle curl - p3 */
.bracket-center {
  width: 40px;
  background-image: url("{{ '/assets/img/curl_p3.png' | relative_url }}");
  flex-shrink: 0;
}

/* Right end curl - inverted p1 */
.bracket-right {
  width: 22px;
  background-image: url("{{ '/assets/img/curl_p1.png' | relative_url }}");
  transform: scaleX(-1); /* Horizontal flip */
  flex-shrink: 0;
}

/* Down direction - flip everything vertically */
.bracket-container[data-direction="down"] .bracket-part {
  transform: scaleY(-1);
}

.bracket-container[data-direction="down"] .bracket-right {
  transform: scaleX(-1) scaleY(-1); /* Both horizontal and vertical flip */
}

</style>

<div class="top-menu preview-menu">
  <div class="preview-row">
    <div class="content-section">
      <h4 class="section-title">Rationale</h4>
      {% include bracket.liquid direction="up" %}
      <div class="section-links">
        <a href="{{ '/llm/prefatio/' | relative_url }}" class="">Prefatio</a>
        <a href="{{ '/llm/admonitio/' | relative_url }}" class="">Admonitio</a>
      </div>
    </div>
  </div>
  <div class="preview-row">
    <a href="{{ '/llm/ndna/' | relative_url }}" class="">nDNA</a>
  </div>
  <div class="preview-row">
    <a href="{{ '/llm/15-llms/' | relative_url }}" class="">15 Foundational LLMs</a>
  </div>
  <div class="preview-row">
    <a href="{{ '/llm/multilinguality/' | relative_url }}" class="">Multilinguality</a>
    <a href="{{ '/llm/cultural-ndna/' | relative_url }}" class="">Cultural nDNA</a>
  </div>
  <div class="preview-row">
    <a href="{{ '/llm/civic/' | relative_url }}" class="">CIVIC</a>
  </div>
  <div class="preview-row">
    <a href="{{ '/llm/alignment/' | relative_url }}" class="">Alignment</a>
    <a href="{{ '/llm/quantization/' | relative_url }}" class="">Quantization</a>
    <a href="{{ '/llm/model-merging/' | relative_url }}" class="">Model Merging</a>
    <a href="{{ '/llm/model-collapse/' | relative_url }}" class="">Model Collapse</a>
    <a href="{{ '/llm/knowledge-distillation/' | relative_url }}" class="">Knowledge Distillation</a>
  </div>
  <div class="preview-row">
    <a href="{{ '/llm/neural-genomics/prelude/' | relative_url }}" class="group-title">Neural Genomics</a>
    <a href="{{ '/llm/neural-genomics/nHD/' | relative_url }}">nHD</a>
    <a href="{{ '/llm/neural-genomics/nGDI/' | relative_url }}">nGDI</a>
    <a href="{{ '/llm/neural-genomics/nTDS/' | relative_url }}">nTDS</a>
    <a href="{{ '/llm/neural-genomics/nKaryotyping/' | relative_url }}">nKaryotyping</a>
    <a href="{{ '/llm/neural-genomics/nDIV/' | relative_url }}">nDIV</a>
    <a href="{{ '/llm/neural-genomics/nEPI/' | relative_url }}">nEPI</a>
    <a href="{{ '/llm/neural-genomics/nCCL/' | relative_url }}">nCCL</a>
  </div>
  <div class="preview-row">
    <a href="{{ '/llm/nlp-operations/prelude/' | relative_url }}" class="group-title">NLP Operations</a>
    <a href="{{ '/llm/nlp-operations/machine-translation/' | relative_url }}">Machine Translation</a>
    <a href="{{ '/llm/nlp-operations/adversarial-attack/' | relative_url }}">Adversarial Attack</a>
    <a href="{{ '/llm/nlp-operations/multi-turn-conversation/' | relative_url }}">Multi-turn Conversation</a>
    <a href="{{ '/llm/nlp-operations/scar/' | relative_url }}">SCAR</a>
    <a href="{{ '/llm/nlp-operations/nephos/' | relative_url }}">NEPHOS</a>
  </div>
  <div class="preview-row">
    <a href="{{ '/llm/latent-manipulation/' | relative_url }}" class="">Risk: Latent Manipulation</a>
  </div>
  <div class="preview-row">
    <a href="{{ '/llm/at_a_glance/' | relative_url }}" class="">at-a-glance</a>
    <a href="{{ '/llm/FAQ/' | relative_url }}" class="">FAQ</a>
    <a href="{{ '/llm/critiques-corner/' | relative_url }}" class="">Critique’s Corner</a>
  </div>
</div>

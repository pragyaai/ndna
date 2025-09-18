---
layout: page
title: LLM Overview
permalink: /llm/
skip_title: true
---

<style>
.book-cover {
  display: flex;
  flex-direction: column;
  width: 30%;
  max-width: 35rem;
  flex-grow: 1;
  object-fit: contain;
}
.ndna-hierarchy-ui {
  width: 70%;
  max-width: 56rem;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.hierarchy-level {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
}

/* Top Level - Three Categories Side by Side */
.level-1 {
  background: linear-gradient(145deg, #f8fafc, #e2e8f0);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.category-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.category-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  text-align: center;
  margin: 0;
}

.category-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

/* Other Levels */
.level-2, .level-3, .level-4, .level-6 {
  background: linear-gradient(145deg, #f0f4f8, #e2e8f0);
  text-align: center;
}

.level-2 .operations-section, .level-3 .genomics-section, .level-4 .nlp-section, .level-6 .annexure-section {
    display: flex;
    flex-direction: column-reverse;
}

.level-5 {
  background: linear-gradient(145deg, #fef5e7, #fed7aa);
  text-align: center;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 1.5rem 0;
}

/* Grid Layouts */
.operations-grid,
.genomics-grid,
.nlp-grid,
.annexure-grid {
  display: flex;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

/* Links */
.hierarchy-link,
.operation-link,
.genomics-link,
.nlp-link,
.annexure-link {
  flex-grow: 1;
  min-width: min-content;
  display: block;
  padding: 0.75rem 1rem;
  background: #4299e1;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(66, 153, 225, 0.3);
}

.hierarchy-link:hover,
.operation-link:hover,
.genomics-link:hover,
.nlp-link:hover,
.annexure-link:hover {
  background: #3182ce;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(66, 153, 225, 0.4);
}

/* Risk Section */
.risk-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.risk-arrow {
  font-size: 1.5rem;
  color: #e53e3e;
  font-weight: bold;
}

.risk-link {
  display: inline-block;
  padding: 1rem 1.5rem;
  background: #e53e3e;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(229, 62, 62, 0.3);
}

.risk-link:hover {
  background: #c53030;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(229, 62, 62, 0.4);
}

/* Responsive Design */
@media (max-width: 768px) {
  .ndna-hierarchy-ui {
    padding: 1rem;
  }
  
  .level-1 {
    grid-template-columns: 1fr;
  }
  
  .operations-grid,
  .genomics-grid,
  .nlp-grid,
  .annexure-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .risk-section {
    flex-direction: column;
  }
}

/* Existing bracket styles */
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
  margin: 1rem 0;
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

.container {
  max-width: unset;
  padding: 0;
  margin: 1rem;
}

footer {
  width: unset;
}

.overview-container {
  display: flex;
  gap: 1rem;
}

.overview-container > * {
  flex: 1;
}

/* @media (max-width: 1680px) {
  .overview-container {
    flex-direction: column;
    align-items: center;
  }
} */
</style>

<div class="overview-container">
  <div class="book-cover">
    <img src="{{ '/assets/img/cover_ndna.png' | relative_url }}" />
    <iframe width="100%" height="405" src="https://www.youtube.com/embed/?listType=playlist&list=PLaE3N7Ax00P93HC0jxZ-b6c4tnLkldPOJ" frameborder="0" allowfullscreen style="margin: auto;"></iframe>
  </div>
  <div class="ndna-hierarchy-ui">
    <!-- Top Level: Rationale, Semantic Fingerprint, Language & Culture -->
    <div class="hierarchy-level level-1">
      <div class="category-group">
        <h3 class="category-title">Rationale</h3>
        {% include bracket.liquid direction="up" %}
        <div class="category-items">
          <a href="{{ '/llm/prefatio/' | relative_url }}" class="hierarchy-link">Prefatio</a>
          <a href="{{ '/llm/admonitio/' | relative_url }}" class="hierarchy-link">Admonitio</a>
        </div>
      </div>

      <div class="category-group">
        <h3 class="category-title">Semantic Fingerprint</h3>
        {% include bracket.liquid direction="up" %}
        <div class="category-items">
          <a href="{{ '/llm/ndna/' | relative_url }}" class="hierarchy-link">nDNA</a>
          <a href="{{ '/llm/15-llms/' | relative_url }}" class="hierarchy-link">15 Foundational LLMs</a>
        </div>
      </div>

      <div class="category-group">
        <h3 class="category-title">Language & Culture</h3>
        {% include bracket.liquid direction="up" %}
        <div class="category-items">
          <a href="{{ '/llm/cultural-ndna/' | relative_url }}" class="hierarchy-link">Cultural nDNA</a>
          <a href="{{ '/llm/civic/' | relative_url }}" class="hierarchy-link">CIVIC</a>
          <a href="{{ '/llm/multilinguality/' | relative_url }}" class="hierarchy-link">Multilinguality</a>
        </div>
      </div>
    </div>

    <!-- Model Level Operations -->
    <div class="hierarchy-level level-2">
      <div class="operations-section">
        <h2 class="section-title">Model Level Operations through the lens of nDNA</h2>
        {% include bracket.liquid direction="down" %}
        <div class="operations-grid">
          <a href="{{ '/llm/model-operations/' | relative_url }}" class="operation-link">Model Operations</a>
          <a href="{{ '/llm/alignment/' | relative_url }}" class="operation-link">Alignment</a>
          <a href="{{ '/llm/quantization-and-pruning/' | relative_url }}" class="operation-link">Quantization & Pruning</a>
          <a href="{{ '/llm/model-merging/' | relative_url }}" class="operation-link">Model Merging</a>
          <a href="{{ '/llm/model-collapse/' | relative_url }}" class="operation-link">Model Collapse</a>
          <a href="{{ '/llm/knowledge-distillation/' | relative_url }}" class="operation-link">Knowledge Distillation</a>
        </div>
      </div>
    </div>

    <!-- Genomics Diagnostics -->
    <div class="hierarchy-level level-3">
      <div class="genomics-section">
        <h2 class="section-title">Genomics Diagnostics</h2>
        {% include bracket.liquid direction="down" %}
        <div class="genomics-grid">
          <a href="{{ '/llm/neural-genomics/nHD/' | relative_url }}" class="genomics-link">nHD</a>
          <a href="{{ '/llm/neural-genomics/nGDI/' | relative_url }}" class="genomics-link">nGDI</a>
          <a href="{{ '/llm/neural-genomics/nTDS/' | relative_url }}" class="genomics-link">nTDS</a>
          <a href="{{ '/llm/neural-genomics/nKaryotyping/' | relative_url }}" class="genomics-link">nKaryotyping</a>
          <a href="{{ '/llm/neural-genomics/nDIV/' | relative_url }}" class="genomics-link">nDIV</a>
          <a href="{{ '/llm/neural-genomics/nEPI/' | relative_url }}" class="genomics-link">nEPI</a>
          <a href="{{ '/llm/neural-genomics/nCCL/' | relative_url }}" class="genomics-link">nCCL</a>
        </div>
      </div>
    </div>

    <!-- Rewriting the nDNA of NLP -->
    <div class="hierarchy-level level-4">
      <div class="nlp-section">
        <h2 class="section-title">Rewriting the nDNA of NLP</h2>
        {% include bracket.liquid direction="down" %}
        <div class="nlp-grid">
          <a href="{{ '/llm/nlp-operations/machine-translation/' | relative_url }}" class="nlp-link">Machine Translation</a>
          <a href="{{ '/llm/nlp-operations/adversarial-attack/' | relative_url }}" class="nlp-link">Adversarial Attack</a>
          <a href="{{ '/llm/nlp-operations/multi-turn-conversation/' | relative_url }}" class="nlp-link">Multi-turn Conversation</a>
          <a href="{{ '/llm/nlp-operations/scar/' | relative_url }}" class="nlp-link">SCAR</a>
          <a href="{{ '/llm/nlp-operations/nephos/' | relative_url }}" class="nlp-link">NEPHOS</a>
        </div>
      </div>
    </div>

    <!-- Risk -->
    <div class="hierarchy-level level-5">
      <div class="risk-section">
        <div class="risk-arrow">→</div>
        <a href="{{ '/llm/latent-manipulation/' | relative_url }}" class="risk-link">Risk: Latent Manipulation</a>
      </div>
    </div>

    <!-- Annexure -->
    <div class="hierarchy-level level-6">
      <div class="annexure-section">
        <h2 class="section-title">Annexure</h2>
        {% include bracket.liquid direction="down" %}
        <div class="annexure-grid">
          <a href="{{ '/llm/at_a_glance/' | relative_url }}" class="annexure-link">at-a-glance</a>
          <a href="{{ '/llm/FAQ/' | relative_url }}" class="annexure-link">FAQ</a>
          <a href="{{ '/llm/critiques-corner/' | relative_url }}" class="annexure-link">Critique's Corner</a>
        </div>
      </div>
    </div>
  </div>
</div>

---
layout: page
title: Neural Hamming Distance (nHD)
permalink: /llm/neural-genomics/nHD/
---

# Neural Hamming Distance (nHD): Capturing Bit-Level Mutation Signatures in Neural Genomics

In biological genomics, the **Hamming Distance** is a key metric quantifying the number of differing nucleotides between two sequences, often used to measure **mutation load** and **evolutionary divergence**. Inspired by this, the **Neural Hamming Distance (nHD)** translates these ideas to **foundation models**, serving as an interpretable measure of **bit-level differences** in internal representations.

Subtle changes in neural weights or activations—especially across culturally heterogeneous data—can induce **incremental binary mutations** in model "neural genomes", affecting semantic or functional behavior. These mutations may arise from:

- Architectural changes  
- Training variation  
- Cultural representational biases  

nHD detects and localizes these **semantic mutation signatures**, helping identify which layers or parameters are more vulnerable to **drift**, enabling model realignment and robustness analysis.


## 14.1 From Genomic Mutation to Neural Lineage Drift

### What the Metric Does

nHD quantifies the **discrete divergence** between two neural representations by counting mismatches in **binarized latent codes** across model layers. This binary semantic encoding helps track **structural mutations** as models undergo fine-tuning, merging, quantization, or distillation.


### Biological & Mathematical Background

In genomics, the Hamming distance between two sequences \( S^{(1)}, S^{(2)} \) of length \( n \) is:

\[
d_H(S^{(1)}, S^{(2)}) = \sum_{i=1}^n \mathbf{1}[s_i^{(1)} \neq s_i^{(2)}]
\]

- \( \mathbf{1}[\cdot] \): indicator function  
- \( s_i^{(k)} \): nucleotide at position \( i \) in sequence \( k \)

This captures **point mutations**, essential for studying **genetic drift**, **recombination**, and **mutation modeling**.

Hamming distance defines a **geodesic metric** on the **Hamming hypercube** \( \mathcal{H}^n = \{0, 1\}^n \), where each vertex represents a binary sequence, and each edge represents a **single-bit mutation**.


### Extending to Foundation Models

We treat internal neural states as **neural genomes**. Let \( \mathcal{M}_1, \mathcal{M}_2 \) be two models with identical architecture, and let the layerwise hidden states be:

\[
H_\ell^{(1)}, H_\ell^{(2)} \in \mathbb{R}^{b \times d}
\]

Where:
- \( b \): batch size or token dimension  
- \( d \): feature dimension at layer \( \ell \)  

To binarize using a threshold \( \tau \), define:

\[
B_\ell^{(k)} = \left[\mathbf{1}\left(H_\ell^{(k)} > \tau\right)\right], \quad B_\ell^{(k)} \in \{0, 1\}^{b \times d}
\]

This binary representation enables **bitwise comparison** to trace semantic drift in LLMs, akin to tracking mutation in biological systems.


## Summary

**nHD** serves as a **neural genomics metric** that decodes the **mutation landscape** of foundation models. It bridges the conceptual space between **biological evolution** and **neural representational dynamics**, promoting semantic integrity across culturally diverse and evolving AI systems.

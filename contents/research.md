<div class="entry-heading"><h3>AgentCPM-Explore</h3><span class="entry-date">June 2025 – March 2026</span></div>

<p class="entry-meta">Research Intern (Core Contributor), THUNLP Lab · Advisor: Prof. Zhiyuan Liu</p>

Built distributed infrastructure for long-horizon LLM agents, connecting tool execution, asynchronous reinforcement learning, and evaluation.

- Led **AgentDock**, a Docker/MCP-based distributed sandbox with unified routing, dynamic scheduling, and fault tolerance, sustaining **100+ QPS** for asynchronous RL workloads.
- Built a **database-mediated asynchronous RL pipeline** that decoupled sampling, inference, and training, supporting multi-turn tool rollouts and **128K-context GRPO training across 32 A800 GPUs** with FSDP2. Optimized redundant computation with prefix merging and added trajectory-freshness constraints and bounded importance weighting for stable off-policy updates.
- Built a one-click evaluation and data pipeline with web-content compression and dynamic context management, generating **20,000+ filtered SFT traces**. The team's 4B model achieved **64% Pass@1 and 97.1% Pass@64 on GAIA text**.

[Code & project](https://github.com/OpenBMB/AgentCPM) · [Paper](https://arxiv.org/abs/2602.06485)

<div class="entry-heading"><h3>AMULET: Adversarial Evaluation for LLM Unlearning</h3><span class="entry-date">October 2025 – May 2026</span></div>

<p class="entry-meta">Undergraduate Researcher, University of California, Irvine · Advisor: Prof. Ian G. Harris</p>

Studied how LLM unlearning methods behave under adversarial evaluation, beyond what static benchmarks reveal.

- Built an automated data-generation and evaluation system with **2,400 probes across four attack dimensions**, dual baselines, and context-aware LLM judging to reduce systematic evaluation bias.
- Exposed linguistic drift, catastrophic knowledge loss, and hallucination amplification in methods including **SimNPO and TPO**, revealing failure modes missed by static benchmarks.

---

### Additional Project

**RAG-Enhanced LLM Agent with MCP-based Tool Integration** · Personal project<br>
Developed an LLM agent client combining MCP-based Playwright browser tools with RAG-enhanced context retrieval for long-horizon web-browsing tasks.

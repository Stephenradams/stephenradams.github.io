---
layout: doc
title: Blog
description: Writing on frontend development, tooling, and software craft
---

# Blog

<p class="blog-intro">Writing on frontend development, tooling, and the craft of building software.</p>

---

<div class="blog-grid">

<div class="blog-card">
  <div class="blog-header">
    <span class="blog-icon">⏳</span>
    <div class="blog-meta">
      <h3><a href="waiting-for-review.md">Waiting for Review</a></h3>
      <span class="blog-date">30 Apr 2026</span>
    </div>
  </div>
  <p>A busy week juggling client work, a new mobile project, and Rust study — plus thoughts on the friction that builds up when code reviews become a bottleneck.</p>
</div>

<div class="blog-card">
  <div class="blog-header">
    <span class="blog-icon">🤖</span>
    <div class="blog-meta">
      <h3><a href="using-ai.md">My Thoughts on Using AI</a></h3>
      <span class="blog-date">25 Apr 2026</span>
    </div>
  </div>
  <p>I've been using AI heavily across work and personal projects. The productivity gains are real — but so is the risk of shipping code you don't fully understand.</p>
</div>

<div class="blog-card">
  <div class="blog-header">
    <span class="blog-icon">🦀</span>
    <div class="blog-meta">
      <h3><a href="learning-rust.md">Learning Rust</a></h3>
      <span class="blog-date">29 Mar 2026</span>
    </div>
  </div>
  <p>Picking up a systems language after years of JavaScript and TypeScript. First impressions of Rust's ownership model, the borrow checker, and why people rave about it.</p>
</div>

<div class="blog-card">
  <div class="blog-header">
    <span class="blog-icon">👋</span>
    <div class="blog-meta">
      <h3><a href="welcome.md">Welcome</a></h3>
      <span class="blog-date">28 Jul 2025</span>
    </div>
  </div>
  <p>A new blog built with VitePress, replacing a WordPress site that never got any traffic. Simpler, faster, and more likely to actually get used.</p>
</div>

</div>

<style>
.blog-intro {
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
  max-width: 640px;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
  margin: 2rem 0;
}

.blog-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 10px;
  padding: 1.5rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.blog-card:hover {
  border-color: rgba(34, 211, 238, 0.35);
  box-shadow: 0 0 24px rgba(34, 211, 238, 0.06);
  transform: translateY(-2px);
}

.blog-header {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  margin-bottom: 0.875rem;
}

.blog-icon {
  font-size: 1.5rem;
  line-height: 1;
  margin-top: 0.1rem;
  flex-shrink: 0;
}

.blog-meta {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.blog-meta h3 {
  font-family: var(--vp-font-family-mono) !important;
  font-size: 0.95rem !important;
  font-weight: 600;
  color: var(--vp-c-text-1) !important;
  margin: 0 !important;
  border: none !important;
  padding: 0 !important;
}

.blog-meta h3::before {
  display: none !important;
}

.blog-meta h3 a {
  color: var(--vp-c-text-1) !important;
  text-decoration: none !important;
  border-bottom: none !important;
  transition: color 0.2s ease;
}

.blog-meta h3 a:hover {
  color: var(--dev-cyan, #22d3ee) !important;
}

.blog-date {
  font-family: var(--vp-font-family-mono);
  font-size: 0.72rem;
  color: var(--dev-cyan, #22d3ee);
  letter-spacing: 0.04em;
  opacity: 0.8;
}

.blog-card p {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  line-height: 1.7;
  margin: 0 !important;
}

@media (max-width: 640px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
}
</style>

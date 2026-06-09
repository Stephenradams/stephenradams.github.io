---
title: About
description: About Stephen Adams — senior frontend developer and consultant
---

# About Me

<p class="about-intro">Hi, I'm Stephen — a developer and consultant with 20 years of experience delivering web and mobile applications for private and public-sector clients across the UK and internationally.</p>

<p class="about-intro">Since founding CGCSoftware in 2012, I've worked with organisations including <strong>Google DeepMind</strong>, <strong>BT</strong>, <strong>Chelsea FC</strong>, <strong>Calor Gas</strong>, and the <strong>Houses of Parliament</strong>. I'm a full-lifecycle developer: I work with you from requirements through to deployment and handover.</p>

---

<div class="about-grid">

<div class="about-card">
  <div class="about-header">
    <span class="about-icon">🧬</span>
    <div class="about-meta">
      <h3>Scientific & Research Tools</h3>
    </div>
  </div>
  <p>My most recent work has been with Google DeepMind on the AlphaFold Server — a globally used research tool for protein structure prediction. I joined a small team to build new features, improve the content management system, and maintain a high-quality production codebase.</p>
</div>

<div class="about-card">
  <div class="about-header">
    <span class="about-icon">🔧</span>
    <div class="about-meta">
      <h3>Internal Tooling & Infrastructure</h3>
    </div>
  </div>
  <p>Some of the most impactful projects I've worked on are internal tools that replace manual processes. For BT, I built an application that mapped their entire Sports TV network infrastructure so engineers could see what already existed before commissioning new work — saving significant time and cost.</p>
</div>

<div class="about-card">
  <div class="about-header">
    <span class="about-icon">🤖</span>
    <div class="about-meta">
      <h3>AI-Driven Applications</h3>
    </div>
  </div>
  <p>I've worked on AI-powered applications for a specialist agency, building interfaces that allow users to submit documents and receive AI-generated analysis and recommendations. Getting AI interactions to feel clear and usable is an interesting design and engineering challenge.</p>
</div>

<div class="about-card">
  <div class="about-header">
    <span class="about-icon">📊</span>
    <div class="about-meta">
      <h3>Finance & Workflow Systems</h3>
    </div>
  </div>
  <p>I've built and maintained complex data-driven systems for finance and pharmaceutical clients — applications that handle intricate business rules, large datasets, and demanding user workflows. These projects demand precision and a methodical approach to both development and testing.</p>
</div>

<div class="about-card">
  <div class="about-header">
    <span class="about-icon">🎓</span>
    <div class="about-meta">
      <h3>Training & Learning Platforms</h3>
    </div>
  </div>
  <p>I've worked on video-based training platforms using Twilio, building classroom features that support both large group sessions and smaller interactive breakouts. Accessibility was a core requirement — screen reader support, customisable themes, and inclusive design throughout.</p>
</div>

<div class="about-card">
  <div class="about-header">
    <span class="about-icon">🏛️</span>
    <div class="about-meta">
      <h3>Public Sector & Government</h3>
    </div>
  </div>
  <p>I've delivered projects for the Houses of Parliament on two separate occasions, and for Cambridge Assessment. Public sector work demands careful attention to requirements, strong documentation, and a reliable delivery process.</p>
</div>

<div class="about-card">
  <div class="about-header">
    <span class="about-icon">🏟️</span>
    <div class="about-meta">
      <h3>Sports & Media</h3>
    </div>
  </div>
  <p>I spent time at Chelsea FC building their Angular-based applications, and worked on a BT Sports project. Consumer-facing applications at this scale require polish, performance, and a real focus on user experience.</p>
</div>

<div class="about-card">
  <div class="about-header">
    <span class="about-icon">📱</span>
    <div class="about-meta">
      <h3>Wearable & Mobile Technology</h3>
    </div>
  </div>
  <p>At RealWear I worked on applications for their industrial headset products — a workspace management tool for resellers and a Twilio-powered three-way video call app. I've also built mobile apps with React Native, Expo, and Ionic across multiple projects.</p>
</div>

<div class="about-card">
  <div class="about-header">
    <span class="about-icon">🔄</span>
    <div class="about-meta">
      <h3>Legacy Modernisation</h3>
    </div>
  </div>
  <p>A thread running through much of my career is taking over codebases that need care — upgrading frameworks, improving architecture, and delivering new features while keeping existing users unaffected. I take documentation and handover seriously, because a project isn't done until the next person can own it confidently.</p>
</div>

</div>

---

<div class="about-personal">
  <span class="about-personal-label">Outside of code</span>
  <p>Guitar player. Gym and yoga enthusiast.</p>
</div>

<style>
.about-intro {
  font-size: 1.05rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
  max-width: 680px;
  line-height: 1.75;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
  margin: 2rem 0;
}

.about-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 10px;
  padding: 1.5rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.about-card:hover {
  border-color: rgba(34, 211, 238, 0.35);
  box-shadow: 0 0 24px rgba(34, 211, 238, 0.06);
  transform: translateY(-2px);
}

.about-header {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  margin-bottom: 0.875rem;
}

.about-icon {
  font-size: 1.5rem;
  line-height: 1;
  margin-top: 0.1rem;
  flex-shrink: 0;
}

.about-meta h3 {
  font-family: var(--vp-font-family-mono) !important;
  font-size: 0.95rem !important;
  font-weight: 600;
  color: var(--vp-c-text-1) !important;
  margin: 0 !important;
  border: none !important;
  padding: 0 !important;
}

.about-meta h3::before {
  display: none !important;
}

.about-card p {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  line-height: 1.7;
  margin: 0 !important;
}

.about-personal {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin: 1.5rem 0;
}

.about-personal-label {
  font-family: var(--vp-font-family-mono);
  font-size: 0.78rem;
  color: var(--dev-cyan, #22d3ee);
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.about-personal p {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0 !important;
}

@media (max-width: 640px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
  .about-personal {
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style>

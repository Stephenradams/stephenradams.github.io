<template>
  <div class="vp-doc container home-services-wrap">
    <span class="home-services-label">what i do</span>
    <h2>Services</h2>

    <p class="home-services-intro">Four ways I help teams ship — from rescuing stalled projects to building the architecture that lets them scale.</p>

    <div class="home-services-grid">

      <div class="home-service-card">
        <div class="home-service-header">
          <span class="home-service-icon">🔄</span>
          <h3>Legacy Codebase Modernisation &amp; Version Upgrades</h3>
        </div>
        <p class="home-service-what">Upgrading legacy Angular/React applications to current versions without breaking existing functionality or causing business downtime.</p>
        <dl class="home-service-detail">
          <dt>Proof</dt>
          <dd>Upgraded SmartImpact's critical application to Angular 15 under a tight deadline, fixing TypeScript issues and adding typed forms.</dd>
          <dt>Value</dt>
          <dd>Prevents technical debt, reduces security vulnerabilities, and speeds up future feature deployment.</dd>
        </dl>
      </div>

      <div class="home-service-card">
        <div class="home-service-header">
          <span class="home-service-icon">🏗️</span>
          <h3>Frontend Architecture &amp; Design Systems</h3>
        </div>
        <p class="home-service-what">Setting up monorepos, reusable component libraries, and automated testing suites to help dev teams scale faster and maintain UI consistency.</p>
        <dl class="home-service-detail">
          <dt>Proof</dt>
          <dd>Built NX monorepo architectures, core component libraries, and Storybook/Jest/Cypress testing pipelines for RealWear.</dd>
          <dt>Value</dt>
          <dd>Eliminates duplicate work across dev teams, speeds up onboarding, and guarantees brand consistency across multi-app ecosystems.</dd>
        </dl>
      </div>

      <div class="home-service-card">
        <div class="home-service-header">
          <span class="home-service-icon">🚑</span>
          <h3>Rapid UI/UX Digitisation &amp; Rescue Projects</h3>
        </div>
        <p class="home-service-what">Stepping into stalled, poorly documented, or high-urgency projects to stabilise the frontend, digitise complex workflows, and meet critical deadlines.</p>
        <dl class="home-service-detail">
          <dt>Proof</dt>
          <dd>Took over unhanded-over projects at Inawisdom and RehabAgency, cleared massive bug backlogs, and delivered AI-driven UIs and complex spreadsheet workflows on schedule.</dd>
          <dt>Value</dt>
          <dd>Protects client revenue during vendor handovers or team turnover, saving high-stakes projects from failing.</dd>
        </dl>
      </div>

      <div class="home-service-card">
        <div class="home-service-header">
          <span class="home-service-icon">📡</span>
          <h3>Specialised Real-Time &amp; Interactive Web Solutions</h3>
        </div>
        <p class="home-service-what">Developing complex frontend interfaces featuring interactive mapping, video communication, or AI interface integration.</p>
        <dl class="home-service-detail">
          <dt>Proof</dt>
          <dd>Integrated LeafletJS with GraphQL/REST APIs for BT's global cable mapping app; integrated Twilio for multi-way video platforms at RealWear and Solirius.</dd>
          <dt>Value</dt>
          <dd>Builds high-complexity, data-heavy tools that regular web developers struggle to architect cleanly.</dd>
        </dl>
      </div>

    </div>

    <p class="home-services-cta"><a href="/services">See all services →</a></p>
  </div>
</template>

<style scoped>
.home-services-wrap {
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  padding: 0 24px;
}

@media (min-width: 640px) {
  .home-services-wrap {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .home-services-wrap {
    padding: 0 64px;
  }
}

.home-services-label {
  display: inline-block;
  font-family: var(--vp-font-family-mono);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
  margin-bottom: 0.5rem;
}

.dark .home-services-label::before {
  content: '// ';
  color: #475569;
}

.home-services-intro {
  font-size: 1.05rem;
  color: var(--vp-c-text-2);
  max-width: 640px;
  margin: 0 0 1.75rem;
}

.home-services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin: 1.5rem 0;
}

.home-service-card {
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 10px;
  padding: 1.5rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.home-service-card:hover {
  border-color: rgba(34, 211, 238, 0.35);
  box-shadow: 0 0 24px rgba(34, 211, 238, 0.06);
  transform: translateY(-2px);
}

.home-service-header {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  margin-bottom: 0.875rem;
}

.home-service-icon {
  font-size: 1.5rem;
  line-height: 1;
  margin-top: 0.1rem;
  flex-shrink: 0;
}

.home-service-header h3 {
  font-family: var(--vp-font-family-mono) !important;
  font-size: 1rem !important;
  font-weight: 600;
  line-height: 1.4;
  color: var(--vp-c-text-1) !important;
  margin: 0 !important;
  border: none !important;
  padding: 0 !important;
}

.home-service-header h3::before {
  display: none !important;
}

.home-service-what {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.7;
  margin: 0 0 1rem !important;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--vp-c-border);
}

.home-service-detail {
  margin: 0 !important;
  padding: 0;
}

.home-service-detail dt {
  font-family: var(--vp-font-family-mono);
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--dev-cyan, #22d3ee);
  margin-bottom: 0.2rem;
}

.home-service-detail dd {
  margin: 0 0 0.85rem !important;
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.home-service-detail dd:last-child {
  margin-bottom: 0 !important;
}

.home-services-cta {
  text-align: center;
  margin: 2rem 0 1rem;
}

.home-services-cta a {
  font-family: var(--vp-font-family-mono);
  font-size: 0.85rem;
  color: #22d3ee;
  text-decoration: none;
}

.home-services-cta a:hover {
  text-decoration: underline;
}

@media (max-width: 860px) {
  .home-services-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<script setup>
import { onMounted, ref } from 'vue'

defineProps({ compact: { type: Boolean, default: false } })

const container = ref(null)

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://eocampaign1.com/form/560616ca-5dcc-11f1-acc8-85b0573ef143.js'
  script.setAttribute('data-form', '560616ca-5dcc-11f1-acc8-85b0573ef143')
  script.async = true
  container.value.appendChild(script)
})
</script>

<template>
  <div :class="['newsletter-section', { 'newsletter-section--compact': compact }]">
    <div class="newsletter-inner">
      <div class="newsletter-header">
        <span class="newsletter-label">newsletter</span>
        <h2 class="newsletter-title">Stay in the loop</h2>
        <p class="newsletter-desc">
          Latest dev notes on what I'm working on, what I've learnt and tips on Angular, TypeScript and mobile development.
        </p>
      </div>
      <div ref="container" class="newsletter-form-container" />
    </div>
  </div>
</template>

<style scoped>
.newsletter-section {
  padding: 64px 24px;
  border-top: 1px solid var(--dev-border);
}

.newsletter-inner {
  max-width: 560px;
  margin: 0 auto;
  text-align: center;
}

.newsletter-label {
  display: inline-block;
  font-family: var(--vp-font-family-mono);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
  margin-bottom: 12px;
}

.dark .newsletter-label::before {
  content: '// ';
  color: #475569;
}

.newsletter-title {
  font-family: var(--vp-font-family-mono);
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin: 0 0 12px;
  color: var(--vp-c-text-1);
  border: none !important;
  padding: 0 !important;
}

.newsletter-desc {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.7;
  margin: 0 0 32px;
}

.newsletter-form-container {
  width: 100%;
}

.newsletter-section--compact {
  padding: 32px 24px 0;
  border-top: none;
}
</style>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import NewsletterSignup from './NewsletterSignup.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template v-if="frontmatter.layout === 'home'" #home-hero-actions-after>
      <NewsletterSignup :compact="true" />
    </template>
  </Layout>
</template>

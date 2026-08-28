<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import NewsletterSignup from './NewsletterSignup.vue'
import HomeServices from './HomeServices.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template v-if="frontmatter.layout === 'home'" #home-hero-actions-after>
      <HomeServices />
      
    </template>
    <template v-if="frontmatter.layout === 'home'" #home-features-before>
      <NewsletterSignup :compact="true" />
    </template>
  </Layout>
</template>

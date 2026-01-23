<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
const { page, frontmatter } = useData()
const {Layout} = DefaultTheme
</script>

<template>
 <Layout>
  <template #title>
    title
    {{ frontmatter.title || page.title }}
  </template>
  <template #sidebar-top>
    My custom sidebar
  </template>
 </Layout>
</template>
<script setup>
import dataSource from '@/assets/data/formulaic.js'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const detail = computed(() => {
  const { articleId, type } = route.query

  const all = dataSource.find((item) => item.key === type)?.children

  return all.find((item) => item.id === articleId)
})
</script>

<template>
  <pre>{{ detail.content }}</pre>
</template>

<style scoped></style>

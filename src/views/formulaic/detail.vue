<script setup>
import dataSource from '@/assets/data/formulaic.js'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()

const route = useRoute()

const detail = computed(() => {
  const { articleId, type } = route.query

  const all = dataSource.find((item) => item.key === type)?.children

  return all.find((item) => item.id === articleId)
})
</script>

<template>
  <a-page-header :title="detail.title" @back="router.go(-1)"> </a-page-header>
  <pre>{{ detail.content }}</pre>
</template>

<style scoped></style>

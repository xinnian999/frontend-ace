<template>
  <Tab v-model="tabActive" :config="dataSource" class="tabs" />

  <div>
    <Card
      v-for="v in dataSource.find((item) => item.key === tabActive).children"
      v-bind="v"
      @click="goDetail(v)"
      style="cursor: pointer"
    />
  </div>
</template>

<script setup>
import Tab from './tab.vue'
import Card from './card.vue'
import dataSource from '@/assets/data/formulaic.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const tabActive = ref('javascript')

const goDetail = (data) => {
  console.log(data)
  router.push({ path: '/formulaic/detail', query: { articleId: data.id, type: tabActive.value } })
}
</script>

<style scoped>
.tabs {
  margin-left: 20px;
}
</style>

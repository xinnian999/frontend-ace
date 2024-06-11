<template>
  <Tab v-model="tabActive" :config="dataSource" class="tabs" />

  <div>
    <Card
      v-for="item in dataSource.find((item) => item.key === tabActive).children"
      v-bind="item"
    />
  </div>
</template>

<script setup>
import Tab from './tab.vue'
import Card from './card.vue'
import dataSource from '@/assets/data/formulaic.js'
import { ref } from 'vue'

const tabActive = ref('javascript')
</script>

<style scoped>
.tabs {
  margin-left: 20px;
}
</style>

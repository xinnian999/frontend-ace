<template>
  <a-list>
    <template #header> 算法题库 </template>
    <a-list-item v-for="({ title, description, id }, index) in list" :key="id">
      <a-list-item-meta :title :description="description">
        <template #avatar>
          <a-avatar>{{ index + 1 }}</a-avatar>
        </template>
      </a-list-item-meta>
      <template #actions>
        <a-button @click="handlePlay(id)">刷题</a-button>
      </template>
    </a-list-item>
  </a-list>
</template>

<script setup>
import { useRouter } from 'vue-router'
import list from '@/assets/data/compute.js'

const router = useRouter()

const handlePlay = (id) => {
  router.push('/compute/' + id)
}
</script>

<style>
.arco-list-wrapper .arco-list-item:hover {
  cursor: pointer;
  background-color: #3f4644;
}

.arco-list-item-meta-description {
  max-width: 50vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>

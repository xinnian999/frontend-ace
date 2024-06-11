<template>
  <div class="menu-demo">
    <a-menu
      :style="{ width: '200px', height: '100%' }"
      v-model:selected-keys="activeMenu"
      show-collapse-button
      breakpoint="xl"
      @collapse="onCollapse"
      @menu-item-click="onMenuClick"
    >
      <a-menu-item :key="path" v-for="{ title, path, icon } in menus.filter((item) => item.title)">
        <span>{{ title }}</span>
        <template #icon>
          <component :is="icon" />
        </template>
      </a-menu-item>
    </a-menu>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import { Message } from '@arco-design/web-vue'
import menus from '@/router/routes.js'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const activeMenu = ref([])

const onCollapse = (val, type) => {
  const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩'
  Message.info({
    content,
    duration: 2000
  })
}

const onMenuClick = (key) => {
  router.push(key)
}

watchEffect(() => {
  activeMenu.value = [route.path]
})
</script>
<style scoped>
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: var(--color-neutral-2);
  display: flex;
  gap: 25px;
  .content {
    flex: 1;
    background-color: #232324;
    padding: 20px;
    overflow: auto;
  }
}
</style>

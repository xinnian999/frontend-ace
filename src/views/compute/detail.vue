<template>
  <a-page-header :title="detail.title" @back="router.go(-1)"> </a-page-header>
  <br />
  <h3>描述：</h3>
  <h3 class="description">{{ detail.description }}</h3>

  <v-ace-editor
    v-model:value="content"
    lang="javascript"
    theme="github"
    :options="options"
    class="vue-ace-editor"
  />

  <a-space>
    <a-button @click="handlePlay" type="primary" class="playBtn">运行</a-button>
    <a-button @click="handleReset" class="playBtn">重做</a-button>
    <a-button @click="handleAnswer" class="playBtn">查看答案</a-button>
  </a-space>

  <v-ace-editor
    v-model:value="result"
    lang="javascript"
    theme="github"
    :options="options"
    class="result"
    readonly
  />
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import list from '@/assets/data/compute.js'
import { onMounted, reactive, ref } from 'vue'
import { VAceEditor } from 'vue3-ace-editor'
import './aceConfig.js'

const router = useRouter()

const route = useRoute()

const detail = ref({})

const content = ref('') // 显示的内容

const result = ref('') // 显示的内容

const options = reactive({
  useWorker: true, // 启用语法检查,必须为true
  enableBasicAutocompletion: true, // 自动补全
  enableLiveAutocompletion: true, // 智能补全
  enableSnippets: true, // 启用代码段
  showPrintMargin: false, // 去掉灰色的线，printMarginColumn
  highlightActiveLine: true, // 高亮行
  highlightSelectedWord: true, // 高亮选中的字符
  tabSize: 4, // tab锁进字符
  fontSize: 14, // 设置字号
  wrap: false, // 是否换行
  readonly: false // 是否可编辑
  // minLines: 10, // 最小行数，minLines和maxLines同时设置之后，可以不用给editor再设置高度
  // maxLines: 50, // 最大行数
})

const handlePlay = () => {
  let originalLog = console.log
  let logs = []

  // 重定向 console.log
  console.log = function (...args) {
    logs.push(typeof args[0] === 'object' ? JSON.stringify(args[0]) : args[0])
    originalLog.apply(console, args)
  }

  try {
    // 创建函数并执行
    let func = new Function(content.value)
    func()
    console.log = originalLog
    // console.log('运行日志:', logs)
    const res = logs.join('\n')
    console.log(res)
    result.value = res
  } catch (error) {
    console.log = originalLog
    result.value = '执行代码时出错:' + error
  }
}

const handleAnswer = () => {
  content.value = detail.value.answer
}

const handleReset = () => {
  content.value = detail.value.body
  result.value = ''
}

onMounted(() => {
  const data = list.find((item) => item.id === route.params.id)
  if (data) {
    console.log(data.body)
    detail.value = data
    content.value = data.body
  }
})
</script>

<style scoped>
.description {
  text-indent: 2em;
  line-height: 30px;
  margin-top: 10px;
}

.vue-ace-editor {
  /* ace-editor默认没有高度，所以必须设置高度，或者同时设置最小行和最大行使编辑器的高度自动增高 */
  height: 500px;
  width: 100%;
  font-size: 16px;
  border: 1px solid;
}

.playBtn {
  margin: 20px 0;
}

.result {
  width: 100%;
  height: 200px;
  font-size: 16px;
  border: 1px solid;
}
</style>

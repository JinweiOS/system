<template>
  <div>
    <el-button @click="upload">选择文件</el-button>
    <input multiple @change="handleFile" ref="file" style="width: 0px; height: 0px" type="file" />
    <div style="margin-top: 10px" v-show="filename">
      <el-tag class="ml-2" type="success">{{ filename }}</el-tag>
    </div>
    <div>
      <el-button @click="testServer">上传文件</el-button>
    </div>
    <div>
      <el-button @click="uploadFileBase64">base64上传</el-button>
    </div>
    <img width="200" v-show="filename" :src="imgUrl" />
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue'
import { selfServer } from '@/http/axios.js'
import {ElMessage} from 'element-plus'
export default {
  name: 'MyfileComp',
  setup() {
    const file = ref(null)
    const filename = ref('')
    const imgUrl = ref('')

    // reader
    const base64Reader = new FileReader()

    function getReaderResult() {
      imgUrl.value = base64Reader.result
    }
    // 事件注册的同时，要考虑事件卸载时机
    onMounted(() => {
      base64Reader.addEventListener('load', getReaderResult)
    })
    onUnmounted(() => {
      base64Reader.removeEventListener('load', getReaderResult)
    })

    const formData = new FormData()

    function handleFile(e) {
      console.log(e.target.files)
      console.log(file.value.files)
      filename.value = file.value.files[0].name
      formData.append('file', file.value.files[0])
      base64Reader.readAsDataURL(file.value.files[0])
      // reader.readAsDataURL(file.value.files[0])
    }

    function upload() {
      file.value.click()
    }

    // formdata 表单上传文件
    async function testServer() {
      const {data: res} = await selfServer.post('/upload', formData)
      if (res.statusCode === 0) {
        ElMessage({
        message: '上传成功',
        type: 'success'
      })
      }
    }

    // base64 编码
    function uploadFileBase64() {
      const fileBase64 = imgUrl.value.split(',')[1]
      console.log(imgUrl.value.split(',')[1])
      selfServer.post('/upload', { file: fileBase64 })
    }

    return { file, upload, handleFile, uploadFileBase64, imgUrl, filename, testServer }
  }
}
</script>

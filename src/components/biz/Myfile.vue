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
  </div>
</template>

<script>
import { ref } from 'vue'
import { selfServer } from '@/http/axios.js'
export default {
  name: 'MyfileComp',
  setup() {
    const file = ref(null)
    const filename = ref('')
    // const reader = new FileReader()
    // reader.addEventListener(
    //   'load',
    //   function () {
    //     console.log(reader.result)
    //     localServer.post('/test', {
    //       file: reader.result
    //     })
    //   },
    //   false
    // )
    const formData = new FormData()

    function handleFile(e) {
      console.log(e.target.files)
      console.log(file.value.files)
      filename.value = file.value.files[0].name
      formData.append('file', file.value.files[0])
      // reader.readAsDataURL(file.value.files[0])
    }

    function upload() {
      file.value.click()
    }

    function testServer() {
      selfServer.post('/upload', formData)
    }

    return { file, upload, handleFile, filename, testServer }
  }
}
</script>

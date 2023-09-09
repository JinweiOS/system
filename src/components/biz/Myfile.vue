<template>
  <div>
    <el-button @click="upload">上传文件</el-button>
    <input @change="handleFile" ref="file" style="width: 0px; height: 0px" type="file" />
    <div style="margin-top: 10px;" v-show="filename">
      <el-tag class="ml-2" type="success">{{ filename }}</el-tag>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'MyfileComp',
  setup() {
    const file = ref(null)
    const filename = ref('')

    function handleFile(e) {
      console.log(e.target.files)
      console.log(file.value.files)
      filename.value = file.value.files[0].name
    }

    function upload() {
      file.value.click()
    }
    return { file, upload, handleFile, filename }
  }
}
</script>

<template>
  <div>
    <el-table :data="tableData" empty-text="暂无文件数据">
      <!-- <template v-slot:empty>
        <div style="color: red;">暂无数据</div>
      </template> -->
      <!-- 
        1. uid
        2. 文件名
        3. 文件大小
        4. 文件的url
        5. 文件最近更新时间
        6. (下载，复制分享链接)
       -->
      <el-table-column prop="filename" label="文件名" width="150" />
      <el-table-column prop="fileSize" label="文件大小" width="150" />
      <el-table-column label="文件的链接" width="150">
        <template v-slot:default="scope">
          <div>
            <el-tooltip effect="dark" :content="scope.row.fileUrl" placement="top">
              <el-button size="small">文件链接</el-button>
            </el-tooltip>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="fileUpdateTime" label="文件最近更新时间" width="150" />
      <el-table-column fixed="right" label="操作" width="200">
        <template #default="scope">
          <el-button type="primary" size="small" @click="downImg(scope)">下载</el-button>
          <el-button type="primary" size="small" @click="copyShareLink(scope)"
            >复制分享链接</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:current-page="currentPage"
      small
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="pageChange"
    />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { http } from '@/http/axios.js'
export default {
  setup() {
    const tableData = ref([])
    const currentPage = ref(1)
    const total = ref(0)
    const SIZE = 20
    async function getTableData(size, curPage) {
      const { data: res } = await http.get('/img/list', {
        params: {
          pageSize: size,
          pageNum: curPage
        }
      })
      tableData.value = res.data.items
      total.value = res.data.totalSize
    }

    onMounted(() => {
      getTableData(SIZE, currentPage.value)
    })

    function copyShareLink(lineInfo) {
      navigator.clipboard.writeText(lineInfo.row.fileUrl)
      ElMessage({
        message: '已成功复制到剪贴板',
        type: 'success'
      })
    }

    function downImg(lineInfo) {
      window.open(lineInfo.row.fileUrl)
    }

    function pageChange(curPage) {
      console.log(curPage)
      getTableData(SIZE, curPage)
    }

    return {
      tableData,
      copyShareLink,
      downImg,
      total,
      currentPage,
      pageChange
    }
  }
}
</script>

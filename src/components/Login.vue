<template>
  <div>登录页</div>
  用户id<el-input v-model="userId"></el-input>
  <el-button @click="login">登录</el-button>
</template>
<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { http } from '@/http/axios.js'
export default {
  name: 'LoginComp',
  setup() {
    const router = useRouter()
    async function login() {
      const {data: res} = await http.post('/registry', null, {
        params: {
          username: userId.value || '',
          password: '2345'
        }
      })
      console.log(res)
      // 跳转到首页
      router.push({
        name: 'home',
        query: {
          userId: userId.value || ''
        }
      })
    }
    const userId = ref('')

    return {
      login,
      userId
    }
  }
}
</script>

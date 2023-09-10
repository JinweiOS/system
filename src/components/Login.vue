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
      // const formData = new FormData()
      // formData.append('username', userId.value || '')
      // formData.append('password', '234y')
      // const { data: res } = await http.post('/login', formData)
      const { data: res } = await http.post('/login', {
        username: userId.value || '',
        password: '2345'
      })
      // 用户token保存
      localStorage.setItem('token', res.data.token)
      console.log(localStorage.getItem('token'))
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

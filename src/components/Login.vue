<template>
  <div class="container">
    <div class="title">登录至图床系统</div>
    <div class="login-card">
      <div class="line-gap">用户名或邮箱地址</div>
      <el-input placeholder="用户名/邮箱" v-model="username"></el-input>
      <div class="line-gap">密码</div>
      <el-input type="password" placeholder="密码" show-password v-model="password"></el-input>
      <el-button class="block" type="primary" @click="login">登录</el-button>
    </div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { http } from '@/http/axios.js'
export default {
  name: 'LoginComp',
  setup() {
    const router = useRouter()
    const username = ref('')

    const password = ref('')
    async function login() {
      // const formData = new FormData()
      // formData.append('username', userId.value || '')
      // formData.append('password', '234y')
      // const { data: res } = await http.post('/login', formData)
      const { data: res } = await http.post('/login', {
        username: username.value,
        password: password.value
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
      userId,
      username,
      password
    }
  }
}
</script>
<style scoped lang="scss">
.container {

  font-size: 16px;
  height: 100%;
  width: 100%;
  color: var(--font-text);
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 40px;
    color: #00b86b;
    font-weight: 600;
    margin-top: 40px;
    margin-bottom: 60px;
  }

  .login-card {
    background-color: #f6f8fa;
    width: 340px;
    border: 1px solid #d8dee4;
    border-radius: 6px;
    padding: 16px;

    .block {
      width: 100%;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
}

.line-gap {
  margin-top: 20px;
  margin-bottom: 8px;
}
</style>

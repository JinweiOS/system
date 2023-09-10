<template>
  <div class="container">
    <div class="menu"></div>
    <el-popover placement="bottom" :width="200" trigger="hover">
      <template #reference>
        <img class="avatar" width="48" height="48" src="/avatar.jpg" />
      </template>
      <el-button size="small" type="primary" @click="logout">退出</el-button>
    </el-popover>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
  name: 'HeaderComp',
  setup() {
    const router = useRouter()
    function logout() {
      localStorage.removeItem('token')
      router.push('/')
    }

    return {
      logout
    }
  }
}
</script>
<style scoped>
.container {
  height: 5.5rem;
  display: flex;
  align-items: center;
}

.menu {
  flex-grow: 1;
}
.avatar {
  border-radius: 50%;
  margin-right: 2rem;
}

.avatar:hover {
  cursor: pointer;
}
</style>

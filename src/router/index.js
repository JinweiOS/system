import { createRouter, createWebHistory } from 'vue-router'
import LoginComp from '@/components/Login.vue'
import MainComp from '@/components/Main.vue'
import HomeComp from '@/components/Home.vue'
import UploadComp from '@/components/biz/Upload.vue'
import UploadFileComp from '@/components/biz/UploadFile.vue'
import FileListComp from '@/components/biz/FileList.vue'

const routes = [
  { path: '/', name: 'main', component: MainComp },
  { path: '/login', name: 'login', component: LoginComp },
  {
    path: '/home',
    name: 'home',
    component: HomeComp,
    children: [
      { path: 'upload', component: UploadFileComp },
      { path: 'myfiles', component: FileListComp },
      { path: 'demo', component: UploadComp }
    ]
  },
  // 测试如何在setup函数中获取路由参数
  // { path: '/home/:id', name: 'personinfo', component: PersonInfoComp },
  // 通配符路由，必须放在最后
  // 路由条目可以使用重定向
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

router.beforeEach(async (to) => {
  // 必须是home&valid不合法
  // 有没要必要发起一个请求，验证token是否过期？
  const validResult = localStorage.getItem('token')
  // 不是太有必要，所有的请求都需要带上token
  // 如果home页面一个请求都没有，需要做
  // 如果有请求，不需要做
  if (to.path === '/home' && !validResult) {
    return {
      path: '/login'
    }
  }
})

export default router
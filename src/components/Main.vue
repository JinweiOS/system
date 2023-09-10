<template>
  <div class="container">
    <video
      class="video-bg"
      loop
      autoplay
      muted
      preload="auto"
      src="//lf3-static.bytednsdoc.com/obj/eden-cn/ha_lm_lswvlw/ljhwZthlaukjlkulzlp/portal/campus/2022-landing-page.mp4"
    ></video>
    <div class="main-body">
      <div class="title">激发创造，丰富生活</div>
      <div class="login-btn" @click="login">立即登录</div>
    </div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
  name: 'MainComp',
  setup() {
    const router = useRouter()

    function login() {
      router.push({ name: 'login' })
    }

    return {
      login
    }
  }
}
</script>
<style scoped lang="scss">
.container {
  height: 100%;
  overflow: hidden;
}

.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  z-index: -1;
}

.main-body {
  margin-top: 250px;
  width: 100%;
  display: flex;

  flex-wrap: wrap;
  justify-content: center;

  .title {
    text-align: center;
    width: 100%;
    font-size: 56px;
    color: white;
    margin-bottom: 40px;
    font-weight: 600;
  }
}

.login-btn {
  width: 156px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 27px;
  background-color: white;
  color: #00b86b;
  font-size: 14px;

  &:hover {
    cursor: pointer;

    color: #11975f;
  }
}
</style>

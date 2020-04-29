<template>
  <div class="login-container">
    <div class="login-content-wrapper no-collapse">
      <main class="login-content">
        <!-- 左边图片 -->
        <section class="content-left">
          <!-- 除了登录界面外，其他界面显示公司logo图片 -->
          <div class="logo-box">
            <img
              v-if="!$route.meta.logoVisible"
              :src="require('images/login/logo-horizontal.png')"
              class="logo"
              alt="website logo"
              @click="$router.push({ name: 'Login' })"
            />
          </div>
          <img
            :src="require('images/login/login-holder.png')"
            alt="website demonstration picture"
          />
        </section>

        <!-- 右边form内容 -->
        <section class="content-right">
          <router-view />
        </section>
      </main>
    </div>

    <!-- 页脚 -->
    <footer class="login-footer-section">
      <login-footer />
    </footer>
  </div>
</template>

<script>
import LoginFooter from './components/LoginFooter';

export default {
  components: {
    LoginFooter,
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  min-width: 1100px;

  .login-content-wrapper {
    display: flex;
    height: 100vh;
    min-height: 850px;
    padding-bottom: 80px;
    background: url('~@/assets/images/login/login-bg.png') no-repeat center /
      cover;
  }
  .login-footer-section {
    margin-top: -80px;
  }
}

.login-content {
  position: relative;
  width: 1100px;
  height: 700px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;

  .content-left {
    display: flex;
    flex-direction: column;
    width: 470px;
    height: 100%;
    margin-left: 50px;

    .logo-box {
      height: 40px;
      margin-bottom: 35px;
    }
    .logo {
      width: 240px;
      height: 40px;
      cursor: pointer;
    }
  }
  .content-right {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    z-index: 2;
  }
}
</style>

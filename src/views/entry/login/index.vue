<template>
  <div class="login-page">
    <!-- 公司Logo -->
    <img
      class="shidi-logo"
      :src="require('images/login/logo-horizontal.png')"
    />

    <!-- 登录 Form -->
    <form-login ref="formLogin" @submit="submit" />

    <div class="link">
      <router-link :to="{ name: 'Subscribe' }" class="text-link"
        >Sign up for updates</router-link
      >
      <router-link :to="{ name: 'PasswordReset' }">Reset Password?</router-link>
    </div>

    <!-- 提交表单按钮 -->
    <el-button type="primary" @click="submit">Sign in</el-button>

    <p class="sign-up-box">
      <router-link :to="{ name: 'Register' }" class="text-link"
        >Sign Up</router-link
      >
      or
      <router-link :to="{ name: 'Trial' }" class="text-link"
        >Start Free Trial</router-link
      >
    </p>

    <!-- 虚拟账号被冻结时，登录限制时显示的弹框 -->
    <!-- <dialog-login-deny ref="dialogLoginDeny" /> -->
  </div>
</template>

<script>
import FormLogin from './components/FormLogin';
// import DialogInvitationQuery from './components/DialogInvitationQuery';
// import DialogLoginDeny from './components/DialogLoginDeny';

// import mixinLoading from '@/mixins/loading';
// import { instance as history } from '@/utils/history';
// import { validEmail } from '@/utils/validators/checkers/index';

// import { apiUserResourceInfo } from '@/api/user';

export default {
  name: 'Login',
  components: {
    FormLogin,
    // DialogLoginDeny,
  },
  props: {
    inviteId: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    redirect: {
      type: String,
      default: '/',
    },
  },
  // mixins: [mixinLoading],
  methods: {
    async submit() {
      try {
        // 校验表单是否通过；通过时返回form对象
        const form = await this.$refs.formLogin.validateForm();
        this.startLoading();
        // 邮箱地址统一转化为小写
        if (validEmail(form.account)) form.account = form.account.toLowerCase();
        // 对登录接口的信息做数据结构处理
        const data = { ...form, inviteId: this.inviteId, type: this.type || 0 };
        const encodeToken = encodeURIComponent(await this.User.login(data));
        const userResourceInfo = (await apiUserResourceInfo()).data;
        this.$store.dispatch('user/setResourceInfo', userResourceInfo);
        let redirect = `${this.redirect}${
          this.redirect.includes('?') ? '&' : '?'
        }token=${encodeToken}`;
        this.endLoading();
        // 校验账号是否加入邀请的workspace状态的接口需要token，所以要先登录请求token
        // 这是设计上的错误；可以改为 打开链接页面时，就去请求校验是否过期，该接口不需要token
        // 询问是否加入邀请者发起的workspace
        if (this.type) {
          const { type, inviteId } = this;
          await this.$Dialog.dialogify({
            is: DialogInvitationQuery,
            props: { inviteId, type },
          });
        }
        // 如果是通过邀请链接登录的，登录后默认应该定位在进入WS页面
        const inviteWorkspaceId = localStorage.getItem('inviteWorkspaceId');
        if (inviteWorkspaceId) {
          redirect = `/file/list?appType=13&relateId=${inviteWorkspaceId}`;
          localStorage.setItem('inviteWorkspaceId', '');
        }
        history.push(redirect);
      } catch (err) {
        this.endLoading();
        if (err.message === 'The user is invalid') {
          this.$refs.dialogLoginDeny.open();
        } else {
          this.$errHandler(err);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 320px;
  height: 100%;
  margin-right: 130px;

  .shidi-logo {
    width: 240px;
    height: 40px;
    margin: 0 auto 25px;
    text-align: center;
  }
  .el-button {
    width: 100%;
  }
  .sign-up-box {
    margin-top: 15px;
  }
  .link {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
}
</style>

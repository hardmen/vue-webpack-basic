<template>
  <div class="register-page">
    <component
      @verify-email-success="handleVerfyEmailSuccess"
      @validate-registration-success="handleRegisterAccount"
      @navigate-backward="currentComponent = $event"
      :is="currentComponent" />
  </div>
</template>

<script>
import PageVerifyCode from './components/PageVerifyCode';
import PageRegisterAccount from './components/PageRegisterAccount';
import PageSuccessMessage from './components/PageSuccessMessage';

import mixinLoading from '@/mixins/loading';
import { registerAccount } from '@/api/account';

export default {
  components: {
    PageVerifyCode,
    PageRegisterAccount,
    PageSuccessMessage,
  },
  mixins: [mixinLoading],
  data() {
    return {
      currentComponent: 'PageVerifyCode',
      form: {},
    };
  },
  methods: {
    async handleRegisterAccount(obj) {
      this.startLoading(); // 打开Loading状态
      Object.assign(this.form, obj);
      delete this.form.passwordConfirm;

      try {
        await registerAccount(this.form);
        this.currentComponent = 'PageSuccessMessage'; // 显示完成界面
      } catch (e) {
        this.$errHandler(e);
      } finally {
        this.endLoading(); // 关闭Loading状态
      }
    },
    // 校验邮箱验证通过后，调整到注册详情页面；
    handleVerfyEmailSuccess(mail) {
      Object.assign(this.form, { mail: mail.toLowerCase() });
      this.currentComponent = 'PageRegisterAccount';
    },
  },
};
</script>

<style lang="scss" scoped>
.register-page {
  height: 100%;
}
</style>

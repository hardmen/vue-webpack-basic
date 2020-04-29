<template>
  <div class="password-reset-page">
    <component
      @verify-email-success="handleVerifySuccess"
      @submit="handleResetPassword"
      :is="currentComponent" />
  </div>
</template>

<script>
import PageVerifyCode from './components/PageVerifyCode';
import PagePasswordReset from './components/PagePasswordReset';
import PageSuccessMessage from './components/PageSuccessMessage';

import mixinLoading from '@/mixins/loading';
import { updateUserPasswordByVerificatioCode } from '@/api/account';

export default {
  components: {
    PageVerifyCode,
    PagePasswordReset,
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
    handleVerifySuccess(email) {
      Object.assign(this.form, { account: email.toLowerCase() });
      this.currentComponent = 'PagePasswordReset';
    },
    async handleResetPassword(payload) {
      this.startLoading(); // 打开Loading状态
      Object.assign(this.form, payload);

      try {
        await updateUserPasswordByVerificatioCode(this.form);
        this.currentComponent = 'PageSuccessMessage';
      } catch (err) {
        this.$errHandler(err);
      } finally {
        this.endLoading(); // 关闭Loading状态
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.password-reset-page {
  height: 100%;
}
</style>

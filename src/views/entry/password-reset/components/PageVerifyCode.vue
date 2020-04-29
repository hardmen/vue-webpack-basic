<template>
  <div class="verify-code-page">
    <h1 class="title">Retrieve Password</h1>

    <form-email-verify-code
      type="password"
      mode="dynamicVerifyEmail"
      checkScope="checkMainAccount"
      ref="formEmailVerifyCode"
      @validate="submit" />

    <el-button
      class="submit"
      type="primary"
      @click="$refs.formEmailVerifyCode.validateForm()">Next Step</el-button>

    <back-login />
  </div>
</template>

<script>
import FormEmailVerifyCode from '@/components/form/whole-form/FormEmailVerifyCode';
import BackLogin from '../../components/BackLogin';

import mixinLoading from '@/mixins/loading';

import { checkVerificationCodeMatching } from '@/api/email';

export default {
  components: {
    FormEmailVerifyCode,
    BackLogin,
  },
  mixins: [mixinLoading],
  methods: {
    async submit(form) {
      this.startLoading(); // 打开Loading状态
      try {
        await checkVerificationCodeMatching(form);
        this.$emit('verify-email-success', form.email);
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
.verify-code-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 360px;
  height: 100%;
  margin-right: 80px;

  .title {
    margin-bottom: 35px;
    font-size: 18px;
    text-align: center;
  }
  .submit {
    margin: 10px 0 20px;
  }
}
</style>

<template>
  <div class="verify-email">
    <h1 class="verify-email-title">E-mail Verification</h1>

    <form-email-verify-code
      mode="dynamicVerifyEmail"
      @validate="submit"
      ref="formEmailVerifyCode" />

    <el-button
      class="verify-email-submit"
      type="primary"
      size="medium"
      @click="$refs.formEmailVerifyCode.validateForm()">Next</el-button>

    <back-login text="Already have an account?" />
  </div>
</template>

<script>
import FormEmailVerifyCode from '@/components/form/whole-form/FormEmailVerifyCode';
import BackLogin from '../../components/BackLogin';

import { checkVerificationCodeMatching } from '@/api/email';
import mixinLoading from '@/mixins/loading';

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
.verify-email {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 370px;
  height: 100%;
  margin-right: 95px;

  .verify-email-title {
    margin-bottom: 35px;
    font-size: 18px;
    text-align: center;
  }

  .verify-email-submit {
    margin: 10px 0 10px;
  }
}
</style>

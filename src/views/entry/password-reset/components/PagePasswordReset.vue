<template>
  <div class="password-reset-page">
    <h1 class="form-title">Reset Password</h1>

    <form-password-reset @validate="$emit('submit', $event)" ref="formPassword" />

    <el-button
      type="primary"
      class="submit-button"
      @click="$refs.formPassword.validateForm()">Ok</el-button>

    <back-login />
  </div>
</template>

<script>
import FormPasswordReset from './FormPasswordReset';
import BackLogin from '../../components/BackLogin';

export default {
  components: {
    FormPasswordReset,
    BackLogin,
  },
};
</script>

<style lang="scss" scoped>
.password-reset-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 340px;
  height: 100%;
  margin-right: 100px;

  .form-title {
    margin-bottom: 40px;
    font-size: 18px;
    text-align: center;
  }
  .submit-button {
    margin-bottom: 10px;
  }
}
</style>

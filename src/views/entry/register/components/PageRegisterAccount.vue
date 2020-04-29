<template>
  <div class="register-component">
    <h1 class="form-title">New Account Registration</h1>

    <form-register
      @validate="$emit('validate-registration-success', $event)"
      ref="formRegister" />

    <div class="register-bottom-part">
      <license-agreement @change="submitDisableStatus = $event" />

      <el-button
        type="primary"
        class="register-submit"
        :disabled="!submitDisableStatus"
        @click="$refs.formRegister.validateForm()">Confirm Transaction</el-button>

      <div class="flex-space-between">
        <back-login text="Already have an account?" />
        <p
          @click="$emit('navigate-backward', 'PageVerifyCode')"
          class="jump-back">Modify Email</p>
      </div>
    </div>
  </div>
</template>

<script>
import LicenseAgreement from './LicenseAgreement';
import FormRegister from './FormRegister';
import BackLogin from '../../components/BackLogin';

export default {
  components: {
    LicenseAgreement,
    FormRegister,
    BackLogin,
  },
  data() {
    return {
      submitDisableStatus: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.register-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 490px;
  height: 100%;
  margin-right: 100px;

  .register-bottom-part {
    margin-left: 150px;
  }

  .form-title {
    margin: 0 0 20px 150px;
    font-size: 18px;
    text-align: center;
  }
  .register-submit {
    width: 100%;
    margin: 25px 0 15px;
  }
  .jump-back {
    color: #7f7f7f;
    cursor: pointer;
  }
}
</style>

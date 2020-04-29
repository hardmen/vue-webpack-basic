<template>
  <el-form :model="form" :rules="rules" ref="form">
    <el-form-item prop="pass">
      <el-input
        v-model.trim="form.pass"
        placeholder="New Password"
        type="password"
        clearable
        show-password
        @change="handlePasswordChange" />
    </el-form-item>

    <el-form-item prop="passwordConfirm">
      <el-input
        v-model.trim="form.passwordConfirm"
        placeholder="Confirm Password"
        type="password"
        clearable
        show-password />
    </el-form-item>
  </el-form>
</template>

<script>
import { mixinValidateForm, mixinCheckPasswordAsPrevious } from '@/mixins/form-validation';

import validator from '@/utils/validators/rules-validation';

export default {
  mixins: [mixinValidateForm, mixinCheckPasswordAsPrevious],
  data() {
    return {
      form: {},
      rules: {
        pass: [
          validator.requirement(),
          ...validator.charLengthRange(6, 20),
        ],
      },
    };
  },
};
</script>

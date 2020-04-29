<template>
  <el-form :model="form" :rules="rules" label-width="100px" ref="form">
    <el-form-item prop="email" label="Email:" maxlength="64">
      <el-input v-model="form.email" clearable />
    </el-form-item>

    <el-form-item prop="content" label="Comments:">
      <el-input
        v-model="form.content"
        type="textarea"
        rows="4"
        resize="none"
        placeholder=" Happy to hear from you!"
        maxlength="500"
        show-word-limit
        @keyup.native.enter="$emit('validate', form)" />
    </el-form-item>
  </el-form>
</template>

<script>
import { mixinValidateForm } from '@/mixins/form-validation';
import validator from '@/utils/validators/rules-validation';

export default {
  mixins: [mixinValidateForm],
  data() {
    return {
      form: {
        email: '',
        content: '',
      },
      rules: {
        email: validator.rules('requirement', 'email'),
        content: validator.rules('requirement'),
      },
    };
  },
};
</script>

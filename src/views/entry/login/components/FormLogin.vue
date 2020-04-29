<template>
  <el-form :model="form" :rules="rules" ref="form">
    <el-form-item prop="account">
      <el-input
        v-model.trim="form.account"
        autocomplete="off"
        prefix-icon="el-icon-user"
        placeholder="Account name or e-mail"
        clearable
        @keyup.enter.native="submit"
      />
    </el-form-item>

    <el-form-item prop="pass">
      <el-input
        v-model.trim="form.pass"
        autocomplete="off"
        prefix-icon="el-icon-lock"
        placeholder="Password"
        clearable
        show-password
        @keyup.enter.native="submit"
      />
    </el-form-item>
  </el-form>
</template>

<script>
// import validator, { validateFormFields } from '@/utils/validators/rules-validation';

export default {
  name: 'LoginFormComponent',
  data() {
    return {
      form: {
        account: '',
        pass: '',
      },
      rules: {
        account: [
          // validator.requirement(),
          // ...validator.charLengthRange(6, 25),
          // { pattern: /^[\u4E00-\u9FA5A-Za-z0-9_@.]+$/,
          // message: 'can not have special characters' },
        ],
        pass: [
          // validator.requirement(),
          // ...validator.charLengthRange(6, 20),
        ],
      },
    };
  },
  methods: {
    submit() {
      this.$emit('submit');
    },
    // 校验表单是否通过规则；如果通过返回 form 对象
    validateForm() {
      return new Promise(async (resolve, reject) => {
        // try {
        //   await validateFormFields(this.$refs.form);
        //   resolve(this._formatFormData(this.form));
        // } catch (err) {
        //   reject(new Error('Form validation was failed.'));
        // }
      });
    },
    _formatFormData(form) {
      Object.keys(form).forEach(prop => {
        if (typeof form[prop] === 'string') {
          // 去掉首尾空格
          // 防止XSS攻击（html方面）
          form[prop] = form[prop]
            .trim()
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        }
      });
      return form;
    },
  },
};
</script>

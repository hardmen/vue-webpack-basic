<template>
  <el-form
    :model="form"
    :rules="rules"
    label-width="150px"
    ref="form">

    <el-form-item label="Password:" prop="pass">
      <el-input
        v-model.trim="form.pass"
        placeholder="6 characters minimum"
        type="password"
        show-password
        clearable
        @change="handlePasswordChange" />
    </el-form-item>

    <el-form-item label="Confirm Password:" prop="passwordConfirm">
      <el-input
        v-model.trim="form.passwordConfirm"
        placeholder="6 characters minimum"
        type="password"
        show-password
        clearable />
    </el-form-item>

    <el-form-item label="Business Type:" prop="type">
      <dictionary-selector
        type="company"
        style="width: 100%;"
        @on-change="handleCompanyTypeChange" />
    </el-form-item>

    <el-form-item v-if="companyVisable" label="Company Name:" prop="name">
      <el-input v-model="form.name" clearable />
    </el-form-item>
  </el-form>
</template>

<script>
import DictionarySelector from '@/components/dictionary/DictionarySelector';

import { mixinCheckPasswordAsPrevious } from '@/mixins/form-validation';
import validator, { validateFormFields } from '@/utils/validators/rules-validation';

export default {
  components: {
    DictionarySelector,
  },
  mixins: [mixinCheckPasswordAsPrevious],
  data() {
    return {
      companyVisable: true, // 公司选择框是否显示
      accoutCheckResult: '', // 账号动态检查状态
      form: {
        pass: '',
        passwordConfirm: '',
        name: '',
        type: '',
      },
      rules: {
        pass: [
          validator.requirement(),
          ...validator.charLengthRange(6, 20),
        ],
        name: [
          validator.requirement(),
          ...validator.charLengthRange(2, 64),
        ],
        type: validator.selection(),
      },
    };
  },
  methods: {
    // 如果是选择独立设计师，隐藏填写公司名称栏
    handleCompanyTypeChange(typeId) {
      this.form.type = typeId;
      this.companyVisable = typeId !== 5;
    },
    // 动态判断账号是否已注册
    handleValidateAccount({ value, status }) {
      this.form.account = value;
      this.accoutCheckResult = status;
    },
    // 提交表单（外部调用）
    async validateForm() {
      Object.keys(this.form).forEach((prop) => {
        if (typeof this.form[prop] === 'string') this.form[prop] = this.form[prop].trim();
      });

      // 账号和邮箱重复时，无法提交表达
      if (this.accoutCheckResult === 'fail') {
        throw new Error('Account name validating was failed.');
      }

      try {
        await validateFormFields(this.$refs.form);
        this.$emit('validate', this.form);
      } catch (err) {
        console.warn(err);
      }
    },
  },
};
</script>

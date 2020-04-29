<template>
  <el-form
    :model="form"
    :rules="rules"
    size="medium"
    label-width="160px"
    ref="form">

    <div class="clearfix">
      <el-form-item prop="firstName" class="first" label="Name:">
        <el-input v-model="form.firstName" placeholder="First Name" clearable />
      </el-form-item>

      <el-form-item prop="lastName" class="last" label-width="20px">
        <el-input placeholder="Last Name" v-model="form.lastName" clearable />
      </el-form-item>
    </div>

    <el-form-item prop="position" label="Position:">
      <el-input v-model="form.position" clearable />
    </el-form-item>

    <el-form-item prop="email" label="Email:">
      <el-input v-model="form.email" clearable />
    </el-form-item>

    <el-form-item prop="companyName" label="Full Company Name:">
      <el-input v-model="form.companyName" clearable />
    </el-form-item>

    <el-form-item prop="type" label="Business Type:">
      <dictionary-selector type="company" @on-change="form.companyType = $event" />
    </el-form-item>

    <el-form-item label="Content:">
      <el-input
        v-model="form.content"
        :rows="4"
        type="textarea"
        resize="none"
        placeholder="How could we help you?"
        maxlength="200"
        show-word-limit
        clearable />
    </el-form-item>
  </el-form>
</template>

<script>
import DictionarySelector from '@/components/dictionary/DictionarySelector';

import { mixinValidateForm } from '@/mixins/form-validation';

import validator from '@/utils/validators/rules-validation';

export default {
  components: {
    DictionarySelector,
  },
  mixins: [mixinValidateForm],
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        position: '',
        email: '',
        companyName: '',
        companyType: '',
        content: '',
      },
      rules: {
        firstName: [
          validator.requirement(),
          { pattern: /^[\u4E00-\u9FA5A-Za-z0-9_\s]+$/, message: 'can\'t have special characters' },
        ],
        lastName: [
          validator.requirement(),
          { pattern: /^[\u4E00-\u9FA5A-Za-z0-9_\s]+$/, message: 'can\'t have special characters' },
        ],
        position: [
          ...validator.charLengthRange(2, 64),
          validator.charTypeNormal(),
        ],
        email: validator.rules('requirement', 'email'),
        companyName: [
          ...validator.charLengthRange(2, 64),
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
/deep/ .el-form-item__error {
  margin-right: -20px;
}

.clearfix {
  .first {
    float: left;
    width: 300px;
  }
  .last {
    float: left;
    width: 160px;
  }
}

.el-select {
  width: 100%;
}
</style>

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
        <el-input v-model="form.lastName" placeholder="Last Name" clearable />
      </el-form-item>
    </div>

    <el-form-item prop="position" label="Position:">
      <el-input
        v-model="form.position"
        placeholder="Please enter your occupation"
        clearable />
    </el-form-item>

    <el-form-item prop="companyName" label="Full Company Name:">
      <el-input
        v-model="form.companyName"
        placeholder="Please enter your company name"
        clearable />
    </el-form-item>

    <el-form-item prop="companyType" label="Business Type:">
      <dictionary-selector
        type="company"
        placeholder="Select company type"
        @on-change="form.companyType = $event" />
    </el-form-item>

    <el-form-item prop="country" label="Country:">
      <dictionary-country-selector @on-change="form.country = $event" />
    </el-form-item>

    <el-form-item prop="email" label="Email:">
      <el-input v-model.trim="form.email" placeholder="please enter your email address" clearable />
    </el-form-item>

    <el-form-item prop="phone" label="Phone:">
      <el-input v-model.trim="form.phone" placeholder="please enter your mobile phone" clearable />
    </el-form-item>
  </el-form>
</template>

<script>
import DictionarySelector from '@/components/dictionary/DictionarySelector';
import DictionaryCountrySelector from '@/components/dictionary/DictionaryCountrySelector';

import { mixinValidateForm } from '@/mixins/form-validation';

import validator from '@/utils/validators/rules-validation';

export default {
  components: {
    DictionarySelector,
    DictionaryCountrySelector,
  },
  mixins: [mixinValidateForm],
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        position: '',
        companyName: '',
        companyType: '',
        country: '',
        email: '',
        phone: '',
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
          validator.requirement(),
          ...validator.charLengthRange(2, 64),
          validator.charTypeNormal(),
        ],
        companyName: [
          ...validator.charLengthRange(2, 64),
        ],
        companyType: validator.selection(),
        country: validator.selection(),
        phone: [
          { pattern: /^\d{11}$|^[0-9-]{14}$/, message: 'numbers do not conform to the rules' },
        ],
        email: validator.rules('requirement', 'email'),
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

<template>
  <div class="license-agreement">
    <el-checkbox
      v-model="policyAcceptable"
      @change="$emit('change', policyAcceptable)" />
    <p class="message">
      I understand and agree to the
      <!-- eslint-disable-next-line -->
      <router-link target="_blank" :to="{ name: 'PolicyTerms' }" class="text-link">
        Terms and Conditions
      </router-link>,
      <router-link target="_blank" :to="{ name: 'PolicyPrivacy' }" class="text-link">
        Privacy Policy
      </router-link>
      , and the
      <router-link target="_blank" :to="{ name: 'PolicyLicense' }" class="text-link">
        License Agreement
      </router-link>
      .<br>
      I am authorized by my company to create and complete a company account setup.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      policyAcceptable: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.license-agreement {
  display: flex;

  .el-checkbox {
    width: 40px;
  }
  .message {
    font-size: 12px;
    line-height: 1.5;
  }
}
</style>

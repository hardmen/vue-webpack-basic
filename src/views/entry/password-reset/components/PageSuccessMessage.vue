<template>
  <div class="reset-success">
    <success-message title="Password reseting was successful" />
  </div>
</template>

<script>
import SuccessMessage from '../../components/SuccessMessage';

export default {
  components: {
    SuccessMessage,
  },
};
</script>

<style lang="scss" scoped>
.reset-success {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 100%;
  margin-right: 30px;
}
</style>

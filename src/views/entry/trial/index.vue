<template>
  <div class="trial-page">
    <!-- 订阅成功后显示内容 -->
    <success-message v-if="completed" title="Trial application successful">
      We will get in touch with you as soon as possible.<br>
      Please pay attention to the telephone or email infomation.
    </success-message>

    <div v-else class="trial-content">
      <h1 class="trial-title">Start Free Trial</h1>

      <form-trial @validate="submit" ref="formTrial" />

      <el-button
        type="primary"
        @click="$refs.formTrial.validateForm()">Submit</el-button>

      <back-login text="Already have an account?" style="margin-left: 160px;" />
    </div>
  </div>
</template>

<script>
import SuccessMessage from '../components/SuccessMessage';
import FormTrial from './components/FormTrial';
import BackLogin from '../components/BackLogin';

import mixinLoading from '@/mixins/loading';
import { applyAccountForTrial } from '@/api/account';

export default {
  components: {
    SuccessMessage,
    FormTrial,
    BackLogin,
  },
  mixins: [mixinLoading],
  data() {
    return {
      completed: false,
    };
  },
  methods: {
    async submit(form) {
      // 当发送请求前，添加 Loading 状态
      this.startLoading();

      try {
        await applyAccountForTrial({ ...form, email: form.email.toLowerCase() });
        this.completed = true;
      } catch (err) {
        this.$errHandler(err);
      } finally {
        this.endLoading();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.trial-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 460px;
  height: 100%;
  margin-right: 100px;

  .trial-title {
    margin: 0 0 20px 160px;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }
  .el-button {
    width: calc(100% - 160px);
    margin-left: 160px;
    margin-bottom: 10px;
  }
}
</style>

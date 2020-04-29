<template>
  <div class="feedback-page">
    <!-- 订阅成功后显示内容 -->
    <success-message v-if="completed" :title="messageTitle" />

    <div v-else class="feedback-content">
      <h1 class="feedback-title">Collaboration Request/Comments</h1>

      <form-feedback @validate="submit" ref="formFeedback" />

      <el-button type="primary" @click="validateForm">Send</el-button>

      <back-login style="margin-left: 100px; margin-top: 10px;" />
    </div>
  </div>
</template>

<script>
import SuccessMessage from '../components/SuccessMessage';
import FormFeedback from './components/FormFeedback';
import BackLogin from '../components/BackLogin';

import mixinLoading from '@/mixins/loading';

import { saveCooperationMessage } from '@/api/service';

export default {
  components: {
    SuccessMessage,
    FormFeedback,
    BackLogin,
  },
  mixins: [mixinLoading],
  data() {
    return {
      completed: false,
      messageTitle: 'Collaboration Request sent successfully',
    };
  },
  methods: {
    validateForm() {
      this.$refs.formFeedback.validateForm();
    },
    async submit(form) {
      // 当发送请求前，添加 Loading 状态
      this.startLoading();

      try {
        await saveCooperationMessage({ ...form, email: form.email.toLowerCase() });
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
.feedback-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 450px;
  height: 100%;
  margin-right: 50px;

  .feedback-title {
    margin: 0 0 30px 100px;
    font-size: 16px;
  }
  .el-button {
    width: calc(100% - 100px);
    margin-top: 20px;
    margin-left: 100px;
  }
}
</style>

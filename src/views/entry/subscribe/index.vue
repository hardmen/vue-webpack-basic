<template>
  <div class="subscribe-page">
    <!-- 订阅成功后显示内容 -->
    <success-message title="Subscription was" v-if="completed">
      Thank you for subscription. We will send the lastest news to your Email.
      Please remember to check the email.
    </success-message>

    <div v-else>
      <h1 class="subscribe-title">Sign Up For Updates</h1>

      <form-subscribe @validate="submit" ref="formSubscribe" />

      <el-button
        type="primary"
        @click="$refs.formSubscribe.validateForm()">Confirm Sign Up</el-button>

      <back-login style="margin: 15px 0 30px 160px;" />
    </div>
  </div>
</template>

<script>
import SuccessMessage from '../components/SuccessMessage';
import FormSubscribe from './components/FormSubscribe';
import BackLogin from '../components/BackLogin';

import mixinLoading from '@/mixins/loading';
import { subscribeOurWebsite } from '@/api/account';

export default {
  components: {
    SuccessMessage,
    FormSubscribe,
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
        await subscribeOurWebsite({ ...form, email: form.email.toLowerCase() });
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
.subscribe-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 460px;
  height: 100%;
  margin-right: 50px;

  .subscribe-title {
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    margin: 0 0 20px 108px;
  }
  .el-button {
    width: calc(100% - 160px);
    margin-left: 160px;
  }
}
</style>

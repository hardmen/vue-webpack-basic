<template>
  <div class="success-message">
    <!-- 标题 -->
    <p class="tip-success">
      <i class="iconfont icon-tick-circle-o" />
      <span class="text">{{ title }}</span>
    </p>

    <!-- 文字描述 -->
    <p class="message">
      <slot />
    </p>

    <!-- 倒计时提示语言 -->
    <p class="tip-back">
      You will automatically be taken back to the login page after
      {{ accountDownNum }} seconds
    </p>

    <div class="text-align-right">
      <!-- 回到登录页按钮 -->
      <el-button size="medium" @click="jumpToLogin">Back</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'successfully',
    },
  },
  data() {
    return {
      accountDownNum: 15,
      timer: null,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.accountDownNum--;
      if (!this.accountDownNum) {
        clearInterval(this.timer);
        this.$router.push({ name: 'Login' });
      }
    }, 1000);
  },
  methods: {
    jumpToLogin() {
      clearInterval(this.timer);
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>

<style lang="scss" scoped>
.success-message {
  .tip-success {
    display: flex;
    align-items: center;

    > .iconfont {
      margin-right: 5px;
      font-size: 42px;
      color: #01c973;
    }
    .text {
      font-size: 18px;
      font-weight: 500;
      color: #333;
    }
  }

  .message {
    padding-left: 10px;
    margin: 20px 0 40px;
    font-size: 14px;
    text-indent: 2em;
    line-height: 1.8;
    color: #333;
  }

  .tip-back {
    padding-left: 10px;
    margin-bottom: 80px;
    font-size: 12px;
    color: #666;
  }
  > .el-button {
    align-self: right;
  }
}
</style>

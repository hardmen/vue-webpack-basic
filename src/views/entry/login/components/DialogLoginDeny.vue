<template>
  <el-dialog
    :visible.sync="visible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
    title="Workspace Access"
    append-to-body
    width="600px">
    <!-- eslint-disable-next-line -->
    <p class="dialog-text">This link is inactive. Please reach out to it's sender to obtain a Workspace Pass and gain access to this Workspace.</p>

    <div slot="footer">
      <el-button type="primary" size="medium" @click="visible = false">OK</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    // 外部调用接口：显示与隐藏弹框
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.dialog-title {
  margin-bottom: 20px;
  font-size: 20px;
}
.dialog-text {
  font-size: 16px;
  line-height: 1.8;
  word-break: break-word;
}
</style>

<template>
  <div v-loading="isLoading">
    <figure class="flex-column flex-center">
      <img style="width:266px;height:200px;" src="@/assets/img/login/workspace-invited.png">
      <figcaption>
        <div v-if="type === '1'" class="figure-title flex-center">
          {{ inviter.companyName || inviter.account }}
        </div>
        <div v-else class="figure-title flex-center">
          <div class="iconfont-wrapper flex-center">
            <i class="iconfont icon-tool"></i>
          </div>
          {{ inviter.groupAppName }}
        </div>
      </figcaption>
    </figure>

    <p v-if="type === '1'" class="dialog-text">
      {{ inviter.userName || inviter.account }} invite you to join his/her company.
      Are you sure accept this invitation?
    </p>
    <p v-else class="dialog-text" style="text-align:center;">
      <span><b> {{ inviter.userName }}</b>&nbsp;
        invite you to join the workspaces.
      </span>
    </p>

    <div class="flex-center">
      <el-button size="small" @click="submit(2)">Refuse</el-button>
      <el-button size="small" type="primary" @click="submit(1)">Accept</el-button>
    </div>
  </div>
</template>

<script>
import { getInviterInfo, acceptInvitation } from '@/api/email';

export default {
  dialogify: {
    class: {
      'border-radius-10px': true,
    },
    props: {
      width: '360px',
      height: '400px',
      showClose: false,
      'close-on-click-modal': false,
      'close-on-press-escape': false,
      center: true,
    },
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    inviteId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      inviter: {
        companyName: '',
        account: '',
        groupAppName: '',
        userName: '',
      },
      isLoading: false,
    };
  },
  created() {
    this._fetchInviterInfo();
  },
  methods: {
    async submit(status) {
      try {
        this.isLoading = true;
        await acceptInvitation({ inviteId: this.inviteId, status });
        this.$emit('confirm', true);
      } catch (err) {
        if (err.message === 'user alrady exist in this workspace') {
          this.$emit('confirm', false);
          this.$message.success('you already exist in this workspace');
        } else {
          this.$emit('cancel', err);
        }
      } finally {
        this.isLoading = false;
      }
    },
    // 获取邀请发起者的信息
    async _fetchInviterInfo() {
      try {
        this.inviter = (await getInviterInfo(this.inviteId)).data;
        if (this.type === '2') {
          localStorage.setItem('inviteWorkspaceId', this.inviter.groupAppId);
        } else if (this.type === '2') {
          localStorage.setItem('inviteWorkspaceId', '');
        }
      } catch (err) {
        this.$errHandler(err);
      }
    },
  },
};
</script>

<style lang="scss">
.border-radius-10px {
  .el-dialog {
    border-radius: 10px;
  }
}
</style>

<style lang="scss" scoped>
/deep/ .el-dialog__header {
  padding: 0;
}

.dialog-title {
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
}
.dialog-text {
  /* word-wrap: break-word; */
  height: 50px;
  margin: 15px;
  word-break: keep-all;
  font-size: 13px;
  line-height: 1.8;
}
.figure-title {
  color: #2368de;
  font-size: 15px;
  font-weight: 700;
}
.iconfont-wrapper {
  margin-right: 8px;
  width: 26px;
  height: 26px;
  background-color: #2878ff;
  color: #fff;
  border-radius: 6px;
  font-weight: 400;
  .icon-tool {
    font-size: 18px;
  }
}
.flex-center {
  /deep/ .el-button + .el-button {
    margin-left: 20px;
  }
}
</style>

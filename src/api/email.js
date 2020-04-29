import axios from './axios';

/**
 * 校验邮箱是否已注册
 * @param {String} email 邮箱地址
 * @returns {Promise}
 */
export const checkEmailExistent = (email) => {
  return axios({
    method: 'get',
    url: '/authcenter/user/email/check',
    params: { email },
  });
};

/**
 * 通过邮箱获取验证码
 * @param {String} email 邮箱地址
 * @returns {Promise}
 */
export const getVerifyCodeByEmail = (email) => {
  return axios({
    method: 'post',
    url: '/authcenter/user/email/verify/code',
    data: { email },
  });
};

/**
 * 校验邮箱验证码是否匹配
 * @param {String} verifyCode 验证码
 * @param {String} email 邮箱地址
 * @returns {Promise}
 */
export const checkVerificationCodeMatching = ({ verifyCode, email }) => {
  return axios({
    method: 'get',
    url: '/authcenter/user/email/check/code',
    params: { verifyCode, email },
  });
};

// 重新绑定邮箱
export const ApiResetMail = (data) => {
  return axios({
    method: 'post',
    url: '/authcenter/user/reset/email',
    data,
  });
};

/**
 * 生成邀请链接
 * @param {Object} data type(邮件类型)：1：关联外部人员到公司邀请邮件，2：关联外部人员到workspace
 * @returns {Promise}
 */
export const generateInvitationLink = (data) => {
  return axios({
    method: 'post',
    url: '/msgcenter/mail/url',
    data,
  });
};
/**
 * 发送邮件接口
 * @param {Object} data type(邮件类型)：1：关联外部人员到公司邀请邮件，2：关联外部人员到workspace，3”：新增人员发送通知邮件
 * @returns {Promise}
 */
export const sendEmailByType = (data) => {
  return axios({
    method: 'post',
    url: '/authcenter/ugroup/invite',
    data,
  });
};

/* ===============================  邀请相关 ========================= */
/**
 * 获取邀请者信息
 * @param {String} inviteId 邀请的ID
 * @returns {Promise}
 */
export const getInviterInfo = (inviteId) => {
  return axios({
    methods: 'get',
    url: '/msgcenter/mail/inviter',
    params: { inviteId },
  });
};

// 处理邀请信息
export const acceptInvitation = (data) => {
  return axios({
    method: 'post',
    url: '/authcenter/user/account/outer',
    data,
  });
};

// 邀请多人（可新建账号）
export const InviteMultipleMembers = data => {
  return axios({
    method: 'post',
    url: '/authcenter/user/batch/invite',
    data,
  });
};

/* =============================== 通过邮箱获取验证码 ========================= */
/**
 * 注册账号
 * @param {String} email
 * @returns {Promise}
 */
export const sendVerifyCodeByRegistration = (email) => {
  return axios({
    method: 'post',
    url: '/authcenter/user/email/verify/code',
    data: { email },
  });
};

/**
 * 修改账号邮箱
 * @param {String} email
 * @returns {Promise}
 */
export const sendVerifyCodeByChangingEmail = (email) => {
  return axios({
    method: 'post',
    url: '/authcenter/user/email/update/code',
    data: { email },
  });
};

/**
 * 重置账号密码
 * @param {String} email
 * @returns {Promise}
 */
export const sendVerifyCodeByResetingPassword = (email) => {
  return axios({
    method: 'post',
    url: '/authcenter/user/verification/code',
    data: { account: email },
  });
};

/**
 * 邮箱验证码登录
 * @param {String} email
 * @returns {Promise}
 */
export const sendVerifyCodeByLogin = (email) => {
  return axios({
    method: 'post',
    url: '/authcenter/login/send',
    data: { email },
  });
};

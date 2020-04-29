import axios from './axios';

/* =========================== 账号相关 =========================== */
export const registerAccount = (data) => {
  return axios({
    method: 'post',
    url: '/authcenter/login/register',
    headers: {
      token: '',
    },
    data,
  });
};

export const loginByName = (data) => {
  return axios({
    method: 'post',
    url: '/authcenter/login/login',
    data,
  });
};

// 重置密码
export const resetPassword = (data) => {
  return axios({
    method: 'post',
    url: '/authcenter/user/pass/reset',
    data,
  });
};

// 发送验证码
export const sendVerifyCode = (data) => {
  return axios({
    method: 'post',
    url: '/authcenter/user/verification/code',
    data,
  });
};

// 校验验证码
export const checkVerifyCode = (code, account) => {
  return axios({
    method: 'get',
    url: `/authcenter/user/check/verify?verifyCode=${code}&account=${account}`,
  });
};

// 验证邮箱接口
export const emailVerify = (email) => {
  return axios({
    method: 'get',
    url: `/authcenter/user/email/verify?email=${email}`,
  });
};

// 校验账号是否为主账号或普通账号
export const checkRole = (account) => {
  return axios({
    method: 'get',
    url: `/authcenter/user/check/role?account=${account}`,
  });
};

// 账号购买套餐的信息
export const getUserPurchaseInfo = () => {
  return axios({
    method: 'get',
    url: '/authcenter/resource/info/all',
  });
};

/**
 * 申请试用
 * @param {String} account 账号名称
 * @returns {Promise}
 */
export const applyAccountForTrial = (data) => {
  return axios({
    method: 'post',
    url: '/authcenter/trial/add',
    data,
  });
};

/**
 * 订阅更新信息
 * @param {String} account 账号名称
 * @returns {Promise}
 */
export const subscribeOurWebsite = (data) => {
  return axios({
    method: 'post',
    url: '/authcenter/user/subscribe',
    data,
  });
};

/**
 * 校验账户是否重复
 * @param {String} account 账号名称
 * @returns {Promise}
 */
export const checkAcountExistent = (account) => {
  return axios({
    method: 'get',
    url: '/authcenter/user/account/check',
    params: {
      account,
    },
  });
};

/* =========================== 当前登录用户 =========================== */
/**
 * 根据token来获取当前登录用户信息
 * @returns {Promise}
 */
export const getUserInfo = () => {
  return axios({
    method: 'get',
    url: '/authcenter/user/info/get',
  });
};

/**
 * 根据用户ID来获取当前登录用户信息
 * @returns {Promise}
 */
export const getUsersInfoByIds = (userIds) => {
  return axios({
    method: 'post',
    url: '/authcenter/user/im/info',
    data: userIds,
  });
};

/**  ???????????????????????????
 * 根据token来获取当前登录用户信息
 * @param {Object} data 登录信息
 * @returns {Promise}
 */
export const uploadAccountInfo = (data) => {
  return axios({
    method: 'post',
    url: '/authcenter/user/account/update',
    data,
  });
};

/**
 * 修改用户信息
 * @param {Object} data 支持 name, email, headImg 三个属性修改
 * @returns {Promise}
 */
export const updateUserInfo = (data) => {
  return axios({
    method: 'post',
    url: '/authcenter/user/account/echo/update/self',
    data,
  });
};

/**
 * 根据邮箱或账号重置账号密码
 * @param {Object} data 邮箱和信息密码
 * @returns {Promise}
 */
export const updateUserPasswordByVerificatioCode = (data) => {
  return axios({
    method: 'post',
    url: '/authcenter/user/pass/reset',
    data,
  });
};

/**
 * 获取是否有剩余的子账号（true/fase）(deprecated)
 * @param {String} type 类型
 * @returns {Promise}
 */
export const ApiGetLeaveSubaccount = (type) => {
  return axios({
    method: 'get',
    url: `/authcenter/resource/check?resourceType=${type}`,
  });
};

/**
 * 新增收费子账号
 * @param {String} data 账号信息对象
 * @returns {Promise}
 */
export const createPaidSubaccount = (data) => {
  return axios({
    method: 'post',
    url: '/authcenter/user/account/add',
    data,
  });
};

/**
 * 新增免费账号
 * @param {String} data 账号信息对象
 * @returns {Promise}
 */
export const ApiAddFreeAccount = (data) => {
  return axios({
    method: 'post',
    url: '/authcenter/user/account/free/add',
    data,
  });
};

/* =========================== 账号中心 =========================== */
/**
 * 公司列表（deprecated)
 * @param {String} keyWord 搜索
 * @returns {Promise}
 */
export const ApiCompanyList = (keyword, groupAppId) => {
  return axios({
    method: 'get',
    headers: {
      groupAppId: groupAppId || '',
    },
    url: '/authcenter/user/list',
    params: {
      keyword,
    },
  });
};

/**
 * 通讯录列表（deprecated)
 * @param {String} keyWord 搜索
 * @returns {Promise}
 */
export const ApiAddressList = (keyWord, groupAppId) => {
  return axios({
    method: 'get',
    headers: {
      groupAppId: groupAppId || '',
    },
    url: `/authcenter/contacts/list?keyword=${keyWord}`,
  });
};

/**
 * 虚拟账号列表（deprecated)
 * @param {String} keyWord 搜索
 * @returns {Promise}
 */
export const ApiVirtualList = (keyWord) => {
  return axios({
    method: 'get',
    url: `/authcenter/user/virtual/list?keyword=${keyWord}`,
  });
};

/**
 * 协同空间群设置的成员列表（可搜索）
 * @param {String} keyword 搜索
 * @returns {Promise}
 */
export const fetchGroupMembers = ({
  keyword,
  groupAppId,
}) => {
  return axios({
    method: 'get',
    url: `/authcenter/ugroup/users/search?keyword=${keyword}`,
    headers: {
      groupAppId: groupAppId || '',
    },
  });
};

/**
 * 公司账号的子账号列表
 * @param {String} keyword 搜索关键字
 * @param {String} groupAppId workspaceId
 * @returns {Promise}
 */
export const getSubaccountListOfCompany = (keyword = '', groupAppId = '') => {
  return axios({
    method: 'get',
    headers: {
      groupAppId,
    },
    url: '/authcenter/user/list',
    params: {
      keyword,
    },
  });
};

/**
 * 通讯录列表
 * @param {String} keyword 搜索关键字
 * @param {String} groupAppId workspaceId
 * @returns {Promise}
 */
export const getContactList = (keyword = '', groupAppId = '') => {
  return axios({
    method: 'get',
    headers: {
      groupAppId,
    },
    url: '/authcenter/contacts/list',
    params: {
      keyword,
    },
  });
};

/**
 * 虚拟账号列表
 * @param {String} keyword 搜索关键字
 * @returns {Promise}
 */
export const getVirtualList = (keyword = '') => {
  return axios({
    method: 'get',
    url: '/authcenter/user/virtual/list',
    params: {
      keyword,
    },
  });
};

/**
 * 编辑
 * @param {String} data 编辑信息对象
 * @returns {Promise}
 */
export const ApiupdateUserAccount = (data) => {
  return axios({
    method: 'post',
    url: '/authcenter/user/account/echo/update',
    data,
  });
};

/**
 * 删除单个 非邀请Delete
 * @param {String} id 删除id  <!-- null 和0 都是，1 是邀请 Disconnect-->
 * @returns {Promise}
 */
export const ApiDelAccount = (id) => {
  return axios({
    method: 'get',
    url: `/authcenter/user/account/delete?userId=${id}`,
  });
};

/**
 * 删除单个 邀请 Disconnect
 * @param {String} id 删除id
 * @returns {Promise}
 */
export const ApiDisconnectAccount = (id) => {
  return axios({
    method: 'get',
    url: `/authcenter/contacts/disconnect?relateUserId=${id}`,
  });
};

/**
 * 获取新增子账号剩余多少
 * @param {String} type 类型
 * @returns {Promise}
 */
export const ApiGetCanUseWorkspace = (type) => {
  return axios({
    method: 'get',
    url: `/authcenter/resource/info?resourceType=${type}`,
  });
};

/**
 * 检查名称是否重复
 * @param {String} account 名称
 * @returns {Promise}
 */
export const ApicheckUsable = (account) => {
  return axios({
    method: 'get',
    url: `/authcenter/user/account/check?account=${account}`,
  });
};

/**
 * 清除到期账号
 * @returns {Promise}
 */
export const ApiDelOverdue = () => {
  return axios({
    method: 'get',
    url: '/user/overdue/delete',
  });
};

/**
 * 查询是否遮罩
 * @param {String} type 类型
 * @returns {Promise}
 */
export const ApigetShade = (type) => {
  return axios({
    method: 'get',
    url: `/authcenter/shade/get?type=${type}`,
  });
};

/**
 * 关闭遮罩
 * @param {String} data 类型
 * @returns {Promise}
 */
export const ApiaddShade = (data) => {
  return axios({
    method: 'post',
    url: '/authcenter/shade/add',
    data,
  });
};

/**
 * 新增虚拟账号
 * @param {String} data 账号信息对象
 * @returns {Promise}
 */
export const createVirtualAccount = (data) => {
  return axios({
    method: 'post',
    url: '/authcenter/user/virtual/add',
    data,
  });
};

// 头和目标账号信息
export const ApiConnectAccount = (data, headers) => {
  return axios({
    method: 'post',
    url: '/authcenter/ugroup/add/mutiple',
    data,
    headers,
  });
};

/**
 * 公司套餐workspace数量(deprecated)
 * @param {String}
 * @returns {Promise}
 */
export const getWorkspacesNumberOfPackage = () => {
  return axios({
    method: 'get',
    url: '/authcenter/resource/package/workspace/number',
  });
};

/**
 * 添加协同空间成员时搜索可添加的列表
 * @param {String}
 * @returns {Promise}
 */
export const searchUsersToAdd = (keyword, groupAppId) => {
  return axios({
    method: 'get',
    url: '/authcenter/user/list/search',
    params: {
      keyword,
    },
    headers: {
      groupAppId,
    },
  });
};

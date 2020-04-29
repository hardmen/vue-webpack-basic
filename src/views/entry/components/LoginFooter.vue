<template>
  <div class="login-footer">
    <!-- 各种友情链接 -->
    <ul class="lint-list">
      <li v-for="link in links" :key="link.id" class="link-item">
        <router-link
          v-if="link.route"
          :to="{ name: link.route }"
          :target="link.target"
          >{{ link.title }}</router-link
        >
        <span v-else>{{ link.title }}</span>
      </li>
    </ul>

    <!-- 网站版权说明 -->
    <p class="copyright">
      Copyright
      <span class="copyright-icon">©</span>
      <a href="http://www.4dshoetech.com/" target="blank"
        >www.4dshoetech.com,</a
      >
      <span class="right-reserved">All Rights Reserved.</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: 'Collaborate', route: 'Feedback' },
        {
          title: 'Terms and Conditions',
          route: 'PolicyTerms',
          target: '_blank',
        },
        { title: 'Privacy Policy', route: 'PolicyPrivacy', target: '_blank' },
        {
          title: 'License Agreement',
          route: 'PolicyLicense',
          target: '_blank',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.login-footer {
  font-weight: 300;
  text-align: center;
  letter-spacing: 1.5px;
  color: #fff;

  .copyright {
    margin-top: 5px;
    font-size: 12px;
    font-weight: 300;
    text-align: center;
    letter-spacing: 1.5px;

    .copyright-icon {
      display: inline-block;
      padding-right: 5px;
    }
    .right-reserved {
      display: inline-block;
      padding-left: 5px;
    }
  }
}

.lint-list {
  display: flex;
  justify-content: center;

  .link-item {
    &::after {
      content: '';
      display: inline-block;
      position: relative;
      top: 2px;
      width: 1px;
      height: 14px;
      margin: 0 8px;
      background-color: #fff;
    }
    &:last-child::after {
      display: none;
    }
  }
}
</style>

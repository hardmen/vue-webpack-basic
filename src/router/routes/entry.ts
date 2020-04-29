import { RouteConfig, Route } from 'vue-router';

const login: RouteConfig = {
  path: '/login/module',
  redirect: '/login',
  component: () => import('../../views/entry/index.vue'),
  children: [
    {
      name: 'Login',
      path: '/login',
      meta: {
        title: 'Login',
        logoVisible: true,
      },
      props: (to: Route) => ({
        ...to.params,
        ...to.query,
      }),
      component: () => import('../../views/entry/login/index.vue'),
    },
    // {
    //   name: 'Register',
    //   path: '/login/register',
    //   alias: '/register',
    //   meta: {
    //     title: 'Register New Account',
    //   },
    //   component: () => import('@/views/entry/register/index.vue'),
    // },
    // {
    //   name: 'PasswordReset',
    //   path: '/login/password/reset',
    //   alias: '/password/reset',
    //   meta: {
    //     title: 'Password Reset',
    //   },
    //   component: () => import('@/views/entry/password-reset/index.vue'),
    // },
    // {
    //   name: 'Subscribe',
    //   path: '/login/subscribe',
    //   alias: '/subscribe',
    //   meta: {
    //     title: 'Subscribe',
    //   },
    //   component: () => import('@/views/entry/subscribe/index.vue'),
    // },
    // {
    //   name: 'Feedback',
    //   path: '/login/feedback',
    //   alias: '/feedback',
    //   meta: {
    //     title: 'Collaboration Request/Comments',
    //   },
    //   component: () => import('@/views/entry/feedback/index.vue'),
    // },
    // {
    //   name: 'Trial',
    //   path: '/login/apply/trial',
    //   alias: '/apply/trial',
    //   meta: {
    //     title: 'Apply for Trial',
    //   },
    //   component: () => import('@/views/entry/trial/index.vue'),
    // },
  ],
};

export default login;

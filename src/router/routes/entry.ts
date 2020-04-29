import { RouteConfig, Route } from 'vue-router';

const login: RouteConfig = {
  path: '/entry/module',
  redirect: '/login',
  component: () => import('../../views/entry/index.vue'),
  children: [
    {
      name: 'Login',
      path: '/login',
      meta: {
        title: 'Login',
        requiredAuth: true,
      },
      props: (to: Route) => ({
        ...to.params,
        ...to.query,
      }),
      component: () => import('../../views/entry/login/index.vue'),
    },
    {
      name: 'Register',
      path: '/entry/register',
      alias: '/register',
      meta: {
        title: 'Register New Account',
        requiredAuth: true,
      },
      component: () => import('@/views/entry/register/index.vue'),
    },
    // {
    //   name: 'PasswordReset',
    //   path: '/entry/password-reset',
    //   meta: {
    //     title: 'Password Reset',
    //     requiredAuth: true,
    //   },
    //   component: () => import('@/views/entry/password-reset/index.vue'),
    // },
    // {
    //   name: 'Subscribe',
    //   path: '/entry/subscribe',
    //   alias: '/subscribe',
    //   meta: {
    //     title: 'Subscribe',
    //     requiredAuth: true,
    //   },
    //   component: () => import('@/views/entry/subscribe/index.vue'),
    // },
    // {
    //   name: 'Feedback',
    //   path: '/entry/feedback',
    //   alias: '/feedback',
    //   meta: {
    //     title: 'Collaboration Request/Comments',
    //     requiredAuth: true,
    //   },
    //   component: () => import('@/views/entry/feedback/index.vue'),
    // },
    // {
    //   name: 'Trial',
    //   path: '/entry/trial',
    //   meta: {
    //     title: 'Apply for Trial',
    //     requiredAuth: true,
    //   },
    //   component: () => import('@/views/entry/trial/index.vue'),
    // },
  ],
};

export default login;

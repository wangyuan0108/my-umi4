import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  qiankun: {
    master: {
      apps: [{
        name: 'micro-sub1',
        entry: 'http://localhost:8001',
      }],
    },
  },
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    { name: 'micro-sub1', path: '/micro-sub1/*', microApp: 'micro-sub1' },
    { name: 'microapp', path: '/micro-sub1', component: './Sub1' },
    { name: 'microapp2', path: '/micro-sub2', component: './MicroApp' },

  ],
  npmClient: 'pnpm',
});


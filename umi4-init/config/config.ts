import { defineConfig } from '@umijs/max';
import routes from '../src/routes';

export default defineConfig({
  title: 'react-template',
  publicPath: '/',
  antd: {},
  access: {},
  model: {},
  dva: {
    immer: { enableES5: true },
  },
  define: {
    'process.env.BASE_API': '/api',
  },
  theme: {},
  initialState: {},
  ignoreMomentLocale: true,
  plugins: ['@umijs/max-plugin-openapi'],

  //   presets: ['umi-presets-pro'],
  openAPI: {
    requestLibPath: "import { request } from '@umijs/max'",
    schemaPath:
      'https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json', // 或 './src/schema.json'
    mock: false, // 设置为 true 启用 mock 数据
  },
  request: {},
  layout: {
    title: 'water',
  },
  routes,
  targets: {
    ie: 10,
  },
  fastRefresh: true,
  mfsu: {
    strategy: 'normal',
  },
  npmClient: 'pnpm',
  tailwindcss: {},
  proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});

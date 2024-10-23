import { defineConfig } from '@umijs/max';
import routes from '../src/routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
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

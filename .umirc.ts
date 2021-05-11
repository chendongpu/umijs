import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
    hash:true,
    title:'sadd',
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});

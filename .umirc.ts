import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
    hash:true,
    title:'sadd',
    history:{
      type:'hash'
    },
    theme:{
      '@primary-color':'#1DA57A'
    },
  routes: [
    { path: '/', component: '@/pages/index',title:'首页' },
  ],
  fastRefresh: {},
});

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
    { path: '/user', component: '@/pages/user',title:'用户页面' },
    { path: '/list', redirect:'/sub/two' },
      {
        path:"/sub",
          component:'@/layouts/index',
          wrappers:["@/wrappers/auth"],
          routes:[
              {path:'/sub/one',component:'@/pages/index'},
              {path:'/sub/two',component:'@/pages/user'}
          ]
      }
  ],
  fastRefresh: {},
});

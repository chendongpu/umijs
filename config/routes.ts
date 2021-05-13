export default [
    { path: '/', component: '@/pages/index',title:'首页' },
    { path: '/user', component: '@/pages/user',title:'用户页面' },
    { path: '/dva', component: '@/pages/dva',title:'dva页面' },
    { path: '/list', redirect:'/sub/two' },
      {
        path:"/sub",
          component:'@/layouts/index',
          wrappers:["@/wrappers/auth"],
          routes:[
              {path:'/sub',component:'@/pages/sub'},
              {path:'/sub/one',component:'@/pages/one'},
              {path:'/sub/two',component:'@/pages/two'},
              {component:'@/pages/404'},
          ]
      }
  ];

import {history} from 'umi';
import {matchRoutes} from "react-router-config";
let extraRoutes;

export function patchRoutes({routes}){
    console.log(routes);
    routes.unshift({
        path:'/foo',
        title:'foo',
        component:require('@/pages/foo').default
    });

    extraRoutes.map(item=>{
        routes.unshift({
            path:item.path,
            component:require(`@/pages${item.component}`).default
        })
    })
}

export function render(oldRender){
    extraRoutes=[
        {path:'/server',component:'/sub'}
    ];

    const isLogin=true;
    if(!isLogin){
        history.push('/login');
    }
    oldRender();
}

export function onRouteChange({location,routes,action,matchedRoutes}){
    console.log(location.pathname,"被访问了");
    console.log("routes:",routes);
    console.log("action:",action);

    //设置标题
    if(matchedRoutes.length){
        document.title=matchedRoutes[matchedRoutes.length-1].route.title||'';
    }
}

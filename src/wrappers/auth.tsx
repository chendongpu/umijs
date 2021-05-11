import React from 'react';
import {Redirect} from "react-router";

export default  (props:any) =>{
    const isLogin=false;

    if(isLogin){
        return <div>{props.children}</div>
    }else{
        return <Redirect to="/"/>
    }
}
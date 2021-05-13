
import styles from './index.less';
import {Button} from 'antd';
import React from "react";


export default function FooPage() {
    return (
        <div>
            Login Page
            <Button onClick={()=>{alert('login')}}>点击登录</Button>
        </div>
    );
}
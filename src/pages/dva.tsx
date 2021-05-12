
import styles from './index.less';
import React from 'react';
import {connect} from 'dva';
import {Button} from 'antd';
import {request} from "@@/plugin-request/request";

const Dva=(props:any)=>{
    const {dispatch}=props;
    const list = props.tags.tags.tagsList.list||[]
    console.log();
    const getData=()=>{
        //请求数据
        dispatch({
            type:'tags/fetchTags',
            payload:null
        })
    };
    return (
        <div>
            Page dva
            <Button onClick={getData}>获取状态数据</Button>
            <ul>
                {
                    list.map((item:string,index:any)=>{
                        return <li key={index}>{item}</li>;
                    })
                }
            </ul>
        </div>
    );
}
export default connect((tags)=>({tags}))(Dva);
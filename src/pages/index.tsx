import styles from './index.less';
import {DatePicker,Button} from 'antd';
import {useEffect} from 'react';
import {history,request} from 'umi';

export default function IndexPage() {
    useEffect(()=>{
        // setTimeout(()=>{
        //     history.push('/sub/one');
        // },2000)
    },[]);

    const getData=()=>{
        //请求数据
        request('/api/index').then((res)=>{
            console.log(res);
        })
    };
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
        <Button onClick={getData}>获取状态数据</Button>
        <DatePicker />
    </div>
  );
}

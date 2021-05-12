import styles from './index.less';
import {DatePicker} from 'antd';
import {useEffect} from 'react';
import {history} from 'umi';

export default function IndexPage() {
    useEffect(()=>{
        setTimeout(()=>{
            history.push('/sub/one');
        },2000)
    },[])
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
        <DatePicker />
    </div>
  );
}

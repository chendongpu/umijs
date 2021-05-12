
import styles from './index.less';
import {Button} from 'antd';

export default function OnePage(props:any) {

    console.log("props:",props);
    return (
        <div>
            <Button onClick={()=>{
                props.history.push('/');
            }}>回到首页</Button>
            <h1 className={styles.title}>Page one</h1>
        </div>
    );
}
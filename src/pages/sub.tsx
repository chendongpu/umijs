
import styles from './index.less';
import {Link} from "react-router-dom";

export default function SubPage() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/sub/one">page one</Link>
                </li>
                <li>
                    <Link to="/sub/two">page two</Link>
                </li>
            </ul>


        </div>
    );
}
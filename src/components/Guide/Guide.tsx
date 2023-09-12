import styles from './guide.module.css'
import {ReactNode} from "react";

type IProps = {
    children: ReactNode
}

const Guide = ({children}: IProps) => {
    return (
        <div className={styles.wrap}>
            <h3>Как этим пользоваться?</h3>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Guide;
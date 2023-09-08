import {ReactNode} from "react";
import styles from './section.module.css'

type IProps = {
    children: ReactNode
    id: string
}

const Section = ({children, id}: IProps) => {
    return (
        <section className={styles.section} id={id}>
            {children}
        </section>
    );
};

export default Section;
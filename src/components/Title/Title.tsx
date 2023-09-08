import styles from './title.module.css'

type IProps = {
    title: string
}

const Title = ({title}: IProps) => {
    return (
        <h2 className={styles.title}>
            {title}
        </h2>
    );
};

export default Title;
import styles from './grid-buttons.module.css'

type IProps = {
    reset: () => void
    undo: () => void
}

const GridButtons = ({reset, undo}: IProps) => {
    return (
        <div className={styles.wrap}>
            <button onClick={undo} className={styles.button}>
                Предыдущий шаг
            </button>
            <button onClick={reset} className={styles.button}>
                Обновить
            </button>
        </div>
    );
};

export default GridButtons;
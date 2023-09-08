import styles from './navigation.module.css'

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <h2>Инструменты</h2>
            <a href={'#trip'}>Трип Аврельсуд (6 фаза)</a>
            <a href={'#place_by_time'}>Куда мне встать?(WIP)</a>
            <a href={'#place_by_time'}>Калькулятор грав(WIP)</a>
        </nav>
    );
};

export default Navigation;
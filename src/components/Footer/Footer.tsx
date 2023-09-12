import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.normal}>
                Discord: <b className={styles.bold}> Happy#1718 </b>
            </div>
        </footer>
    );
};

export default Footer;
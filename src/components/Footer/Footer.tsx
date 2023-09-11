import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a href={'https://github.com/happycloudy/lost_ark_rutools'} className={styles.link}>
                Github
            </a>
        </footer>
    );
};

export default Footer;
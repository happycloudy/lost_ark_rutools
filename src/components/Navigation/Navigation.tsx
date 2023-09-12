import styles from './navigation.module.css'
import {ITab} from "../../constants/ITab.ts";
import {tabs} from "../../constants/tabs.tsx";
import React from "react";

type IProps = {
    updateTab: (tab: ITab) => void
}

const Navigation = ({updateTab}: IProps) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, tab: ITab) => {
        e.preventDefault()
        updateTab(tab)
    }

    return (
        <header className={styles.header}>
            <h2 className={styles.title}>Инструменты</h2>
            <nav className={styles.nav}>
                {
                    tabs.map(tab => (
                        <a key={tab.name}
                           className={styles.link}
                           onClick={(e) => handleClick(e, tab)}>
                            {tab.name}
                        </a>
                    ))
                }
            </nav>
        </header>
    );
};

export default Navigation;
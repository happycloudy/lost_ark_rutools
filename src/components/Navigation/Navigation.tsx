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
        <nav className={styles.nav}>
            <h2>Инструменты</h2>
            {
                tabs.map(tab => (
                    <a key={tab.name} onClick={(e) => handleClick(e, tab)}>
                        {tab.name}
                    </a>
                ))
            }
        </nav>
    );
};

export default Navigation;
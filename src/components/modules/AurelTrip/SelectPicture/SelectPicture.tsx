import styles from './select-picture.module.css'
import {tripPictures} from "../constants/tripPictures.ts";

type IProps = {
    picture: string
    handlePicture: (title: string) => void
}

const SelectPicture = ({picture, handlePicture}: IProps) => {
    return (
        <div className={styles.select}>
            {
                tripPictures.map((item) => (
                    <div className={styles.item} key={item.src} onClick={() => handlePicture(item.title)}>
                        <img className={picture === item.title ? styles.active : undefined}
                             src={item.src}
                             alt={'pic'}/>
                        <span>{item.title}</span>
                    </div>
                ))
            }
        </div>
    );
};

export default SelectPicture;
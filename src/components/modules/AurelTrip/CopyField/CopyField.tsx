import {IGridItem} from "../constants/initialTripGrid.ts";
import styles from './copy-field.module.css'
import {useEffect, useState} from "react";

type IProps = {
    positions: IGridItem[]
    picture: string
}

const CopyField = ({positions, picture}: IProps) => {
    const [value, setValue] = useState('')

    const handleClick = () => {
        if (value) {
            navigator.clipboard.writeText(value)
        }
    }

    useEffect(() => {
        setValue(`${picture} ` +
            positions.reduce((prev, curr) => prev + curr.title + ' ', ''))
    }, [positions, picture])

    return (
        <div className={styles.wrap}>
            Клац на белый квадрат, чтобы скопировать
            <div onClick={handleClick}>
                {value}
            </div>
        </div>
    );
};

export default CopyField;
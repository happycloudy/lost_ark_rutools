import {IGridItem} from "../../constants/initialTripGrid.ts";
import styles from './copy-field.module.css'
import {useEffect, useState} from "react";

type IProps = {
    positions: IGridItem[]
    picture: string
}

const CopyField = ({positions, picture}: IProps) => {
    const [value, setValue] = useState('')
    const [showTooltip, setShowTooltip] = useState(false)

    const handleClick = () => {
        if (value) {
            navigator.clipboard.writeText(value)
            setShowTooltip(true)
        }
    }

    useEffect(() => {
        setValue(`${picture} ` +
            positions.reduce((prev, curr) => prev + curr.title + ' ', ''))
    }, [positions, picture])

    useEffect(() => {
        if (showTooltip) {
            setTimeout(() => {
                setShowTooltip(false)
            }, 1000)
        }
    }, [showTooltip])

    return (
        <div className={styles.wrap}>
            Клац на белый квадрат, чтобы скопировать
            <div className={styles.field} onClick={handleClick}>
                {value}
            </div>
            {
                showTooltip ?
                    <div className={styles.tooltip}>
                        Скопировано
                    </div> :
                    <></>
            }
        </div>
    );
};

export default CopyField;
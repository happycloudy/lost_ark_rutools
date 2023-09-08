import styles from './where-stay-result.module.css'
import {useEffect, useState} from "react";

type IPosition = {
    number: number
    group: number
}

type IProps = {
    position: IPosition
}

const calculatePosition = (position: IPosition): string => {
    const prefix = 'Вставай на '
    if (position.group) {
        let watch = 3 * position.number + 1
        if (watch > 12) watch -= 12
        return prefix + watch
    } else {
        const watch = 3 * position.number
        return prefix + watch
    }
}

const WhereStayResult = ({position}: IProps) => {
    const [result, setResult] = useState('')

    useEffect(() => {
        const result = calculatePosition(position)
        setResult(result)
    }, [position])

    return (
        <div className={styles.text}>
            {result}
        </div>
    );
};

export default WhereStayResult;
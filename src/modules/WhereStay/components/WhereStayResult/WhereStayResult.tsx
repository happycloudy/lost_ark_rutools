import styles from './where-stay-result.module.css'
import {useEffect, useState} from "react";
import Pizza from "../Pizza/Pizza.tsx";

type IPosition = {
    number: number
    group: number
}

type IProps = {
    position: IPosition
}

const calculatePosition = (position: IPosition): number => {
    if (position.group) {
        let watch = 3 * position.number + 1
        if (watch > 12) watch -= 12
        return watch
    } else {
        return 3 * position.number
    }
}

const WhereStayResult = ({position}: IProps) => {
    const [result, setResult] = useState<number>()

    useEffect(() => {
        const result = calculatePosition(position)
        setResult(result)
    }, [position])

    return (
        <div className={styles.wrap}>
            Вставай на <b className={styles.result}>{result}</b>
            <Pizza active={result}/>
        </div>
    );
};

export default WhereStayResult;
import styles from './pizza.module.css'
import {useEffect, useRef} from "react";
import {pizzaItems} from "../../constants/pizzaItems.ts";
import {handleCanvas} from "../../helpers/handlePizzaCanvas.ts";

type IProps = {
    active: number | undefined
}

const Pizza = ({active}: IProps) => {
    const ref = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        if (ref && ref.current !== null) {
            handleCanvas(ref.current, pizzaItems.length, active, 360 / pizzaItems.length / 2)
        }
    }, [ref, active])

    return (
        <div className={styles.wrap}>
            <canvas height={200}
                    width={200}
                    className={styles.canvas}
                    ref={ref}>
                Обнови браузер, друг =)
            </canvas>
        </div>
    );
};

export default Pizza;
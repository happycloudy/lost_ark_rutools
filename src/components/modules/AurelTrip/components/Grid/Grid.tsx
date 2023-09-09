import styles from './grid.module.css'
import {IGridItem} from "../../constants/initialTripGrid.ts";

type IProps = {
    grid: IGridItem[][]
    updatePositions: (row: number, column: number) => void
}

const Grid = ({grid, updatePositions}: IProps) => {
    return (
        <div className={styles.gridWrap}>
            <div className={styles.grid}>
                {
                    grid.map((row, rowIndex) => (
                        <div className={styles.row} key={rowIndex}>
                            {
                                row.map((column, columnIndex) => (
                                    <div onClick={() => updatePositions(rowIndex, columnIndex)}
                                         className={`${styles.column} ${column.state ? styles.active : ''}`}
                                         key={columnIndex}>
                                        <span className={styles.time}>{column.title}</span>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Grid;
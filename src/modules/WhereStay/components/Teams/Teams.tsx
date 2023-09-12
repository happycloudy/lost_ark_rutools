import styles from './teams.module.css'
import {teams} from "../../constants/teams.ts";

type IProps = {
    selected: {
        number: number
        group: number
    }
    updatePosition: (number: number, group: number) => void
}

const Teams = ({selected, updatePosition}: IProps) => {
    return (
        <div className={styles.wrap}>
            {
                teams.map((group, groupIndex) => (
                    <div className={`${styles.team}`} key={groupIndex}>
                        <span>
                            Команда {groupIndex + 1}
                        </span>
                        {
                            group.map(position => (
                                <div onClick={() => updatePosition(position, groupIndex)}
                                     key={position}
                                     className={
                                         `${styles.position} ${groupIndex === 0 ? styles.green : styles.purple}`
                                     }>
                                    {position}

                                    {
                                        selected.group === groupIndex && selected.number === position ?
                                            <span>Ты тут</span> :
                                            <></>
                                    }
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default Teams;
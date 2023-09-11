import Section from "../../../../../components/Section/Section.tsx";
import Title from "../../../../../components/Title/Title.tsx";
import Teams from "../Teams/Teams.tsx";
import {useState} from "react";
import WhereStayResult from "../WhereStayResult/WhereStayResult.tsx";

const WhereStay = () => {
    const [position, setPosition] = useState({
        number: 1,
        group: 0
    })

    const updatePosition = (number: number, group: number) => setPosition(prev => ({...prev, number, group}))

    return (
        <Section id={'place_by_time'}>
            <Title title={'Куда мне встать?'}/>
            <WhereStayResult position={position}/>
            <Teams selected={position} updatePosition={updatePosition}/>
        </Section>
    );
};

export default WhereStay;
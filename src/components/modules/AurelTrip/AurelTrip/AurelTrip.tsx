import Section from "../../../Section/Section.tsx";
import CopyField from "../CopyField/CopyField.tsx";
import {useState} from "react";
import {IGridItem, initialTripGrid} from "../constants/initialTripGrid.ts";
import Grid from "../Grid/Grid.tsx";
import Title from "../../../Title/Title.tsx";
import SelectPicture from "../SelectPicture/SelectPicture.tsx";


const AurelTrip = () => {
    const [grid, setGrid] = useState(initialTripGrid)
    const [positions, setPositions] = useState<IGridItem[]>([])
    const [picture, setPicture] = useState<string>('')

    const clearGrid = () => setGrid(
        initialTripGrid.map(row => row.map(column => {
            column.state = false
            return column
        }))
    )

    const updateGrid = (row: number, column: number) => setGrid(prev => {
        const grid = [...prev]
        grid[row][column].state = true
        return grid
    })

    const updatePositions = (row: number, column: number) => setPositions(prev => {
        const positions = [...prev, grid[row][column]]

        if (positions.length > 3) {
            clearGrid()
            updateGrid(row, column)
            return [grid[row][column]]
        } else {
            updateGrid(row, column)
            return positions
        }
    })

    const handlePicture = (picture: string) => {
        setPicture(picture)
    }

    return (
        <Section id={'trip'}>
            <Title title={'Трип Аврельсуд (6 фаза)'}></Title>
            <CopyField picture={picture} positions={positions}/>
            <SelectPicture picture={picture} handlePicture={handlePicture}/>
            <Grid grid={grid} updatePositions={updatePositions}/>
        </Section>
    );
};

export default AurelTrip;
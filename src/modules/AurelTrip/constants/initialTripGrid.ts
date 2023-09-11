export type IGridItem = {
    state: boolean
    title: string
}

export const initialTripGrid: IGridItem[][] = [
    [
        {
            state: false,
            title: '9'
        },
        {
            state: false,
            title: '11'
        },
        {
            state: false,
            title: '12'
        },
    ],
    [
        {
            state: false,
            title: '7'
        },
        {
            state: false,
            title: '0'
        },
        {
            state: false,
            title: '1'
        },
    ],
    [
        {
            state: false,
            title: '6'
        },
        {
            state: false,
            title: '5'
        },
        {
            state: false,
            title: '3'
        },
    ],
]

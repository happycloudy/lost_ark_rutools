import TriageUrl from '../../../../assets/3.png'
import SquareUrl from '../../../../assets/4.png'
import FinagleUrl from '../../../../assets/5.png'
import EightAngleUrl from '../../../../assets/8.png'
import CircleUrl from '../../../../assets/circle.png'
import IntersectionUrl from '../../../../assets/intersection.png'
import SandglassUrl from '../../../../assets/sandglass.png'
import StarUrl from '../../../../assets/star.png'

export type ITripPicture = {
    src: string
    title: string
}

export const tripPictures: ITripPicture[] = [
    {
        title: '3Треугольник',
        src: TriageUrl
    },
    {
        title: '4Квадрат',
        src: SquareUrl
    },
    {
        title: '5Пятиугольник',
        src: FinagleUrl
    },
    {
        title: '8Восьмиугольник',
        src: EightAngleUrl
    }, {
        title: '0Круг',
        src: CircleUrl
    },
    {
        title: 'Два круга',
        src: IntersectionUrl
    },
    {
        title: 'Часы',
        src: SandglassUrl
    },
    {
        title: 'Звезда',
        src: StarUrl
    },
]
import TriageUrl from '../../../assets/3.png'
import SquareUrl from '../../../assets/4.png'
import FinagleUrl from '../../../assets/5.png'
import EightAngleUrl from '../../../assets/8.png'
import CircleUrl from '../../../assets/circle.png'
import IntersectionUrl from '../../../assets/intersection.png'
import SandglassUrl from '../../../assets/sandglass.png'
import StarUrl from '../../../assets/star.png'

export type ITripPicture = {
    src: string
    title: string
}

export const tripPictures: ITripPicture[] = [
    {
        title: 'Треугольник(3)',
        src: TriageUrl
    },
    {
        title: 'Квадрат(4)',
        src: SquareUrl
    },
    {
        title: 'Пятиугольник(5)',
        src: FinagleUrl
    },
    {
        title: 'Восьмиугольник(8)',
        src: EightAngleUrl
    }, {
        title: 'Круг(0)',
        src: CircleUrl
    },
    {
        title: 'Два круга(00)',
        src: IntersectionUrl
    },
    {
        title: 'Часы(Watch)',
        src: SandglassUrl
    },
    {
        title: 'Звезда(Star)',
        src: StarUrl
    },
]
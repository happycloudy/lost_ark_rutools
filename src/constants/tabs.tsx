import {ITab} from "./ITab.ts";
import AurelTrip from "../modules/AurelTrip/components/AurelTrip/AurelTrip.tsx";
import WhereStay from "../modules/WhereStay/components/WhereStay/WhereStay.tsx";

export const tabs: ITab[] = [
    {
        name: 'Трип Аврельсуд (6 фаза)',
        component: <AurelTrip/>
    },
    {
        name: 'Куда мне встать?',
        component: <WhereStay/>
    }
]
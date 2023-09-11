import Navigation from "./components/Navigation/Navigation.tsx";
import AurelTrip from "./modules/modules/AurelTrip/components/AurelTrip/AurelTrip.tsx";
import WhereStay from "./modules/modules/WhereStay/components/WhereStay/WhereStay.tsx";

function App() {

    return (
        <main>
            <Navigation/>
            <AurelTrip/>
            <WhereStay/>
        </main>
    )
}

export default App

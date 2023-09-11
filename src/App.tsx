import Navigation from "./components/Navigation/Navigation.tsx";
import {useState} from "react";
import {tabs} from "./constants/tabs.tsx";
import {ITab} from "./constants/ITab.ts";

function App() {
    const [tab, setTab] = useState<ITab>(tabs[0])

    return (
        <main>
            <Navigation updateTab={setTab}/>
            {tab.component}
        </main>
    )
}

export default App

import Navigation from "./components/Navigation/Navigation.tsx";
import {useState} from "react";
import {tabs} from "./constants/tabs.tsx";
import {ITab} from "./constants/ITab.ts";
import Footer from "./components/Footer/Footer.tsx";

function App() {
    const [tab, setTab] = useState<ITab>(tabs[0])

    return (
        <main>
            <div className={'main-wrap'}>
                <Navigation updateTab={setTab}/>
                {tab.component}
            </div>
            <Footer/>
        </main>
    )
}

export default App

import { Suspense, lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";

import css from "./App.module.css";

import Navigation from "../Navigation/Navigation";
import Loader from "../Loader/Loader";
import Header from "../Header/Header.jsx";
import MobilMenu from "../Menu/MobilMenu.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));

const KineticPage = lazy(() =>
    import("../../pages/KineticPage/KineticPage.jsx")
);

const HistoryPage = lazy(() =>
    import("../../pages/HistoryPage/HistoryPage.jsx")
);

const NotFoundPage = lazy(() =>
    import("../../pages/NotFoundPage/NotFoundPage")
);

function App() {
    const [mobiMenu, setMobiMenu] = useState(false);

    return (
        <div className={css.conteiner}>
            <Header mobilMenu={setMobiMenu} />
            {mobiMenu && <MobilMenu mobilMenu={setMobiMenu} />}
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/kinetic" element={<KineticPage />} />
                    {/* <Route path="/powder" element={<PowderPage />} /> */}
                    <Route path="/history" element={<HistoryPage />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;

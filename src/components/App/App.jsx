import { Suspense, lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "../Loader/Loader";
import Layout from "../Layout/Layout.jsx";

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
    return (
        <Layout>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/kinetic" element={<KineticPage />} />
                    {/* <Route path="/powder" element={<PowderPage />} /> */}
                    <Route path="/history" element={<HistoryPage />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </Layout>
    );
}

export default App;

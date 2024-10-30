import { useEffect, useState } from "react";
import HistoryList from "../../components/HistoryList/HistoryList";
import Title from "../../components/Title/Title";
import MobilMenu from "../../components/Menu/MobilMenu";
import Header from "../../components/Header/Header";

const energyHistoryArr = () => {
    const saveEnery = window.localStorage.getItem("energyBase");
    return saveEnery !== null && JSON.parse(saveEnery).length !== 0
        ? JSON.parse(saveEnery)
        : [];
};

const HistoryPage = () => {
    const [energy, setEnergy] = useState(energyHistoryArr);
    const [mobilMenu, setmobilMenu] = useState(false);

    return (
        <>
            {!mobilMenu ? (
                <Header mobilMenu={setmobilMenu} />
            ) : (
                <MobilMenu mobilMenu={setmobilMenu} />
            )}
            <Title>Історія</Title>
            {energy.length != 0 ? (
                <HistoryList arr={energy} />
            ) : (
                <p>Ви ще не проводили розрахунки</p>
            )}
        </>
    );
};

export default HistoryPage;

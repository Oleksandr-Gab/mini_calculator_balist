import { useEffect, useState } from "react";
import HistoryList from "../../components/HistoryList/HistoryList";

const energyHistoryArr = () => {
    const saveEnery = window.localStorage.getItem("energyBase");
    return saveEnery !== null && JSON.parse(saveEnery).length !== 0
        ? JSON.parse(saveEnery)
        : [];
};

const HistoryPage = () => {
    const [energy, setEnergy] = useState(energyHistoryArr);
    console.log(energy);
    return (
        <>
            <h1>Історія</h1>
            {energy.length != 0 ? (
                <HistoryList arr={energy} />
            ) : (
                <p>Ви ще не проводили розрахунки</p>
            )}
        </>
    );
};

export default HistoryPage;

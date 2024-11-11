import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useEffect, useId, useState } from "react";

import css from "./KineticPage.module.css";
import { kinetic } from "../../funct";
import { nanoid } from "nanoid";
import Header from "../../components/Header/Header";
import MobilMenu from "../../components/Menu/MobilMenu";
import Title from "../../components/Title/Title";

const energyHistoryArr = () => {
    const saveEnery = window.localStorage.getItem("energyBase");
    return saveEnery !== null && JSON.parse(saveEnery).length !== 0
        ? JSON.parse(saveEnery)
        : [];
};

const KineticPage = () => {
    const masaFieldId = useId();
    const diametrFieldId = useId();
    const speedFieldId = useId();
    const [energy, setEnergy] = useState(0);
    const [energyData, setEnergyData] = useState(energyHistoryArr);
    const [mobilMenu, setmobilMenu] = useState(false);

    useEffect(() => {
        window.localStorage.setItem("energyBase", JSON.stringify(energyData));
    }, [energyData]);

    const initialValues = {
        masa: "",
        diameter: "",
        speed: "",
    };
    const validationSchema = Yup.object().shape({
        masa: Yup.number().required("Name is required!"),
        diameter: Yup.number().required("Number is required!"),
        speed: Yup.number().required("Number is required!"),
    });

    const addEnergyData = (newEnergyData) => {
        setEnergyData((prevenergyData) => {
            return [...prevenergyData, newEnergyData];
        });
    };

    const handleSubmit = ({ masa, diameter, speed }, actions) => {
        const kineticDate = kinetic(masa, diameter, speed);
        const date = new Date().toDateString().slice(4);
        setEnergy(kineticDate);
        addEnergyData({
            id: nanoid(),
            masa,
            diameter,
            speed,
            kineticDate,
            date,
        });
    };

    return (
        <>
            {!mobilMenu ? (
                <Header mobilMenu={setmobilMenu} />
            ) : (
                <MobilMenu mobilMenu={setmobilMenu} />
            )}
            <Title>
                Розрахунок питомої кінетичної енергії стріляного снаряда
            </Title>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <Form className={css.wrapper}>
                    <div>
                        <label className={css.label} htmlFor={masaFieldId}>
                            Маса, г
                        </label>
                        <Field
                            className={css.input}
                            type="number"
                            name="masa"
                            id={masaFieldId}
                        />
                        <ErrorMessage
                            className={css.error}
                            name="masa"
                            component={"span"}
                        />
                    </div>
                    <div>
                        <label className={css.label} htmlFor={diametrFieldId}>
                            Діаметр снаряда, мм
                        </label>
                        <Field
                            className={css.input}
                            type="number"
                            name="diameter"
                            id={diametrFieldId}
                        />
                        <ErrorMessage
                            name="diameter"
                            component={"span"}
                            className={css.error}
                        />
                    </div>
                    <div>
                        <label className={css.label} htmlFor={speedFieldId}>
                            Швидкість польоту снаряда, м/с
                        </label>
                        <Field
                            className={css.input}
                            type="number"
                            name="speed"
                            id={speedFieldId}
                        />
                        <ErrorMessage
                            name="speed"
                            component={"span"}
                            className={css.error}
                        />
                    </div>
                    <div className={css.buttonWrapper}>
                        <button className={css.button} type="submit">
                            Розрахувати
                        </button>
                        <button className={css.button} type="reset">
                            Очистити
                        </button>
                    </div>
                </Form>
            </Formik>
            {energy != 0 && <h2 className={css.result}>{energy} Дж/мм2
</h2>}
        </>
    );
};

export default KineticPage;

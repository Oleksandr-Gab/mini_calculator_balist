import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useEffect, useId, useState } from "react";

import css from "./PowderPage.module.css";
import { masaPawder } from "../../funct";
import { nanoid } from "nanoid";
import Header from "../../components/Header/Header";
import MobilMenu from "../../components/Menu/MobilMenu";
import Title from "../../components/Title/Title";

// const energyHistoryArr = () => {
//     const saveEnery = window.localStorage.getItem("energyBase");
//     return saveEnery !== null && JSON.parse(saveEnery).length !== 0
//         ? JSON.parse(saveEnery)
//         : [];
// };

const PowderPage = () => {
    const diametrFieldId = useId();
    const [powder, setPowder] = useState(0);
    // const [energyData, setEnergyData] = useState(energyHistoryArr);
    const [mobilMenu, setmobilMenu] = useState(false);

    // useEffect(() => {
    //     window.localStorage.setItem("energyBase", JSON.stringify(energyData));
    // }, [energyData]);

    const initialValues = {
        diameter: ""
    };
    const validationSchema = Yup.object().shape({
        diameter: Yup.number().required("Number is required!")
    });

    // const addEnergyData = (newEnergyData) => {
    //     setEnergyData((prevenergyData) => {
    //         return [...prevenergyData, newEnergyData];
    //     });
    // };

    const handleSubmit = ({ diameter }) => {
        const powderDate = masaPawder( diameter );
        // const date = new Date().toDateString().slice(4);
        setPowder(powderDate);
        // addEnergyData({
        //     id: nanoid(),
        //     masa,
        //     diameter,
        //     speed,
        //     kineticDate,
        //     date,
        // });
    };

    return (
        <>
            {!mobilMenu ? (
                <Header mobilMenu={setmobilMenu} />
            ) : (
                <MobilMenu mobilMenu={setmobilMenu} />
            )}
            <Title>
                Розрахунок мінімальної маси заряду димного пороху 
            </Title>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <Form className={css.wrapper}>
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
            {powder != 0 && <h2 className={css.result}>{powder} г</h2>}
        </>
    );
};

export default PowderPage;

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useEffect, useId, useState } from "react";

import css from "./KineticPage.module.css";
import { kinetic } from "../../funct";
import { nanoid } from "nanoid";

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
        setEnergy(kineticDate);
        addEnergyData({ id: nanoid(), masa, diameter, speed, kineticDate });
        actions.resetForm();
    };

    return (
        <>
            <h1>
                Форма для розрахунку питомої кінетичної енергії стріляного
                снаряда
            </h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <Form className={css.wrapper}>
                    <label htmlFor={masaFieldId}>Маса, г</label>
                    <Field type="number" name="masa" id={masaFieldId} />
                    <ErrorMessage name="masa" component={"span"} />
                    <label htmlFor={diametrFieldId}>Діаметр снаряда, мм</label>
                    <Field type="number" name="diameter" id={diametrFieldId} />
                    <ErrorMessage name="diameter" component={"span"} />
                    <label htmlFor={speedFieldId}>
                        Швидкість польоту снаряда, м/с
                    </label>
                    <Field type="number" name="speed" id={speedFieldId} />
                    <ErrorMessage name="speed" component={"span"} />
                    <button type="submit">Розрахувати</button>
                </Form>
            </Formik>
            {energy != 0 && <h2>{energy}</h2>}
        </>
    );
};

export default KineticPage;

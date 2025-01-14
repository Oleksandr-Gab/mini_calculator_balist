import { useState } from 'react';

import Header from '../../components/Header/Header';
import css from './HomePage.module.css';
import MobilMenu from '../../components/Menu/MobilMenu';
import { NavLink } from 'react-router-dom';
import Title from '../../components/Title/Title';

export default function HomePage() {
    const [mobilMenu, setmobilMenu] = useState<boolean>(false);

    return (
        <div className={css.container}>
            {!mobilMenu ? (
                <Header mobilMenu={setmobilMenu} />
            ) : (
                <MobilMenu mobilMenu={setmobilMenu} />
            )}
            <Title>міні-калькулятора баліста</Title>
            <p className={css.text}>
                Вітаю! Цей маленький web-додаток створений для розрахунку
                питомої кінетичної енергії снаряда
            </p>
            <NavLink to="/kinetic" className={css.link}>
                Розпочати
            </NavLink>
        </div>
    );
}

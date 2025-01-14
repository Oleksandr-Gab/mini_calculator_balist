import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { GiGunshot } from "react-icons/gi";
import { GiEnergyArrow } from "react-icons/gi";
import { GiPowder } from "react-icons/gi";
import { MdHistoryEdu } from "react-icons/md";

import css from "./Navigation.module.css";

export default function Navigation() {
    return (
        <>
            <nav className={css.nav}>
                <NavLink
                    to="/"
                    className={({ isActive }) => {
                        return clsx(css.link, isActive && css.active);
                    }}
                >
                    <div className={css.linkWrap}>
                        <GiGunshot /> Home
                    </div>
                </NavLink>
                <NavLink
                    to="/kinetic"
                    className={({ isActive }) => {
                        return clsx(css.link, isActive && css.active);
                    }}
                >
                    <div className={css.linkWrap}>
                        <GiEnergyArrow /> Kinetic
                    </div>
                </NavLink>
                <NavLink
                    to="/powder"
                    className={({ isActive }) => {
                        return clsx(css.link, isActive && css.active);
                    }}
                >
                    <div className={css.linkWrap}>
                        <GiPowder /> mass of powder
                    </div>
                </NavLink>
                <NavLink
                    to="/history"
                    className={({ isActive }) => {
                        return clsx(css.link, isActive && css.active);
                    }}
                >
                    <div className={css.linkWrap}>
                        <MdHistoryEdu /> History
                    </div>
                </NavLink>
            </nav>
        </>
    );
}

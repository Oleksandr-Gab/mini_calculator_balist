import { TiThMenu } from "react-icons/ti";
import { GiGunshot } from "react-icons/gi";
import Navigation from "../Navigation/Navigation";
import MobilMenu from "../Menu/MobilMenu";
import { useState } from "react";
import css from "./Header.module.css";

export default function Header({ mobilMenu }) {
    return (
        <>
            <header className={css.header}>
                <GiGunshot />
                {/* <Navigation /> */}
                <button className={css.menu} onClick={() => mobilMenu(true)}>
                    <TiThMenu />
                </button>
            </header>
        </>
    );
}

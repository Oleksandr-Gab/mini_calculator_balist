import { IoMdClose } from "react-icons/io";
import { GiGunshot } from "react-icons/gi";

import Navigation from "../Navigation/Navigation";
import css from "./MobilMenu.module.css";
import { useState } from "react";

export default function MobilMenu({ mobilMenu }) {
    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <GiGunshot />
                <button
                    className={css.buttonClose}
                    type="button"
                    onClick={() => mobilMenu(false)}
                >
                    <IoMdClose />
                </button>
            </div>
            <Navigation />
        </div>
    );
}

import React from "react";
import s from "../styles/notFound.module.css";

function Error404() {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>404</div>
            <div className={s.desc}>Page not found!</div>
            <div className={s.symb}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    );
}

export default Error404;

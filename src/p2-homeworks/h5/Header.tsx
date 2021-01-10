import React from "react";
import { NavLink } from 'react-router-dom';
import s from "./styles/navBar.module.css";

function Header() {
    return (
        <div className={s.wrapper}>
            <NavLink className={s.item} to="/pre-junior" activeClassName={s.active}>Pre-Junior</NavLink>
            <NavLink className={s.item} to="/junior" activeClassName={s.active}>Junior</NavLink>
            <NavLink className={s.item} to="/upper-junior" activeClassName={s.active}>Upper-Junior</NavLink>
        </div>
    );
}

export default Header;

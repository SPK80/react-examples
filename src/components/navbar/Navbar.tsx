import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export const Navbar: React.FC = () => {
    const navClassNameGetter = (navData: { isActive: boolean }) =>
        navData.isActive ? s.active : s.nav
    return (
        <div className={s.navbar}>
            <NavLink className={navClassNameGetter} to={'analog-clock'}>
                Analog Clock
            </NavLink>
        </div>
    )
}
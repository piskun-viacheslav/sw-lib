import React from 'react';
import { NavLink } from "react-router-dom";
import './header.scss';

const Header = () => (
    <header className="header">
        <div className="header__logo"></div>
        <nav className="header__nav nav">
            <ul className="nav__list">
                <li className="nav__item"><NavLink className="nav__link" to="/" exact>Home</NavLink></li>
                <li className="nav__item"><NavLink className="nav__link" to="/people">People</NavLink></li>
                <li className="nav__item"><NavLink className="nav__link" to="/planets">Planets</NavLink></li>
                <li className="nav__item"><NavLink className="nav__link" to="/starships">Starships</NavLink></li>
            </ul>
        </nav>
    </header>
);

export default Header;
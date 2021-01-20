import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../shared/Logo';

const Footer: React.FunctionComponent = () => (
    <nav className="navbar navbar-fixed-bottom justify-content-between">
        <ul className="navbar-nav d-none d-md-flex">
            <li className="nav-item">
                <NavLink className="nav-link" to="/terms-of-service">
                    Terms of Service
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" to="/privacy-policy">
                    Privacy Policy
                </NavLink>
            </li>
        </ul>
        <NavLink to="/" className="navbar-brand m-auto">
            <Logo />
        </NavLink>
        <ul className="navbar-nav d-none d-md-flex">
            <li className="nav-item">
                <a className="nav-link" href="mailto:giorgi.beriashvili@outlook.com">
                    Contact
                </a>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" to="/license">
                    © Copyright 2021
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Footer;

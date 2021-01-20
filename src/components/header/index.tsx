import React from 'react';
import HalfMoon from 'halfmoon';
import { NavLink } from 'react-router-dom';
import Logo from '../shared/Logo';

const Header: React.FunctionComponent = () => (
    <header>
        <nav className="navbar">
            <div className="navbar-content">
                <button className="btn btn-action" type="button" onClick={() => HalfMoon.toggleSidebar()}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                    <span className="sr-only">Toggle sidebar</span>
                </button>
            </div>
            <NavLink className="navbar-brand" to="/">
                <Logo />
                {/* Home */}
            </NavLink>
            {/* <span className="navbar-text text-monospace">v3.0</span> */}
            <ul className="navbar-nav d-none d-md-flex">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/curios">
                        Curios
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/license">
                        License (MIT)
                    </NavLink>
                </li>
            </ul>
            <section className="d-md-flex ml-auto">
                <button className="btn btn-action mr-10" type="button" onClick={() => HalfMoon.toggleDarkMode()}>
                    <i className="fa fa-moon-o" aria-hidden="true"></i>
                    <span className="sr-only">Toggle dark mode</span>
                </button>

                <NavLink to="/login">
                    <button className="btn btn-primary ml-5 mr-5" type="button">
                        Login
                    </button>
                </NavLink>

                <NavLink to="/register">
                    <button className="btn btn-primary ml-5 mr-5" type="button">
                        Register
                    </button>
                </NavLink>
            </section>
            <div className="navbar-content d-md-none ml-auto">
                <div className="dropdown with-arrow">
                    <button className="btn" data-toggle="dropdown" type="button" id="navbar-dropdown-toggle-btn-1">
                        Menu
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </button>
                    <div
                        className="dropdown-menu dropdown-menu-right w-200"
                        aria-labelledby="navbar-dropdown-toggle-btn-1"
                    >
                        <a href="#" className="dropdown-item">
                            Docs
                        </a>
                        <a href="#" className="dropdown-item">
                            Products
                        </a>
                        <div className="dropdown-divider"></div>
                        <div className="dropdown-content">
                            <form action="..." method="...">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Email address" required />
                                </div>
                                <button className="btn btn-primary btn-block" type="submit">
                                    Sign up
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;

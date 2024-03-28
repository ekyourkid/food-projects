// eslint-disable-next-line no-unused-vars
import React from "react";

import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/register" className="register-nav">
                    Register
                </Link>
                <Link to="/login" className="register-nav">
                    Login
                </Link>
                <Link to="/search" className="register-nav">
                    Search Menu
                </Link>
            </div>
            <div className="nav-rigth"></div>
        </nav>
    );
};

export default Navbar;

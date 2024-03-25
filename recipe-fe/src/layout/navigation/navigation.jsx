// eslint-disable-next-line no-unused-vars
import React from "react";
import "./navigation.css";

const Navigation = () => {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <a className="register-nav" href="../auth-page/register.html">
                    Register
                </a>
                <a className="login-nav" href="../auth-page/login.html">
                    Login
                </a>
                <a className="search-menu-nav" href="../auth-page/login.html">
                    Search Menu
                </a>
            </div>
            <div className="nav-rigth"></div>
        </nav>
    );
};

export default Navigation;

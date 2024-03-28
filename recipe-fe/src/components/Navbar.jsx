// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import userPhoto from "../assets/user.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/home" className="home-nav">
                    Home
                </Link>
                <Link to="/login" className="register-nav">
                    Login
                </Link>
                <Link to="/search" className="register-nav">
                    Search Menu
                </Link>
            </div>
            <div className="nav-rigth">
                <span className="nav-photo">
                    <img
                        style={{ marginLeft: 20, width: 64, height: 64 }}
                        src={userPhoto}
                        alt="user-photo"
                    />
                </span>
                <span className="nav-text">
                    <h1
                        style={{
                            fontSize: 24,
                            fontWeight: 500,
                            color: "#000000",
                        }}
                    >
                        Ayudia
                    </h1>
                    <a
                        href="#"
                        style={{
                            textDecoration: "none",
                            color: "black",
                            fontWeight: 900,
                            fontSize: 24,
                        }}
                        className="btn-nav-logout"
                    >
                        Logout
                    </a>
                </span>
            </div>
        </nav>
    );
};

export default Navbar;

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
                <Link to="/addRecipe" className="addRecipe-nav">
                    Add Recipe
                </Link>
                <Link to="/search" className="searchMenu-nav">
                    Search Menu
                </Link>
            </div>
            <div className="nav-rigth">
                <Link to="/editProfile" className="nav-photo">
                    <img
                        style={{ marginLeft: 20, width: 64, height: 64 }}
                        src={userPhoto}
                        alt="user-photo"
                    />
                </Link>
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
                        href="#modal-navbar"
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
            {/* POP UP LOGOUT */}
            <div className="popup-navbar" id="modal-navbar">
                <div className="popup-content-navbar">
                    <p
                        style={{
                            fontWeight: 900,
                            fontSize: 30,
                            marginTop: 50,
                        }}
                    >
                        You want to logout?
                    </p>
                    <Link to="/login" className="btn-popup-navbar">
                        Yes
                    </Link>
                    <a
                        style={{ backgroundColor: "#e7e7e7", marginTop: 20 }}
                        href="#"
                        className="close-popup-navbar"
                    >
                        Cancel
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

// eslint-disable-next-line no-unused-vars
import React from "react";
import "./regist.css";
import { Link } from "react-router-dom";

export default function RegistPage() {
    return (
        <>
            <main className="regist-main">
                <div className="cover">
                    <div className="header-cover">
                        <span className="span1">
                            <h1
                                style={{
                                    color: "#efc81a",
                                    fontWeight: 600,
                                    fontSize: 30,
                                }}
                            >
                                Recipe...
                            </h1>
                        </span>
                        <span className="span2">
                            <h1
                                style={{
                                    width: 280,
                                    height: 39,
                                    color: "#efc81a",
                                    fontWeight: 600,
                                    fontSize: 30,
                                }}
                            >
                                Lets Get Started !
                            </h1>
                            <p
                                style={{
                                    width: 400,
                                    height: 28,
                                    color: "#8692a6",
                                    fontWeight: 600,
                                    fontSize: 18,
                                    marginTop: 15,
                                }}
                            >
                                Create new account to access all features
                            </p>
                        </span>
                    </div>
                    <hr width="427px" style={{ marginLeft: 80 }} />
                    <div
                        style={{
                            marginTop: 15,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <div className="mb-3">
                            <h1
                                style={{
                                    fontWeight: 500,
                                    fontSize: 16,
                                    color: "#696f79",
                                }}
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                            >
                                Name
                            </h1>
                            <input
                                type="name"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Name"
                            />
                        </div>
                        <div className="mb-3">
                            <h1
                                style={{
                                    fontWeight: 500,
                                    fontSize: 16,
                                    color: "#696f79",
                                }}
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                            >
                                Email
                            </h1>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Enter email address"
                            />
                        </div>
                        <div className="mb-3">
                            <h1
                                style={{
                                    fontWeight: 500,
                                    fontSize: 16,
                                    color: "#696f79",
                                }}
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                            >
                                Password
                            </h1>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault"
                        />
                        <h1
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                        >
                            I agree to terms &amp; conditions
                        </h1>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            textDecoration: "none",
                        }}
                    >
                        <a href="#modal" className="button-regist">
                            Register Account
                        </a>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "end",
                            height: 100,
                        }}
                    >
                        <h1
                            style={{
                                fontWeight: 500,
                                fontSize: 13,
                                color: "#999999",
                            }}
                        >
                            Already have account?
                            <Link
                                style={{ textDecoration: "none" }}
                                className="button-login"
                                to="/login"
                            >
                                Log in Here
                            </Link>
                        </h1>
                    </div>
                </div>
                <div className="popup" id="modal">
                    <div className="popup__content">
                        <h1>Account has been set up</h1>
                        <p>Account activated successfully, please login</p>
                        <Link to="/login" className="btn-popUp">
                            Ok
                        </Link>
                        <a
                            style={{
                                width: "fit-content",
                                background: "transparent",
                            }}
                            href="#"
                            className="closePopUp"
                        >
                            ×
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
}

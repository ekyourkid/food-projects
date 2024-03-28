// eslint-disable-next-line no-unused-vars
import React from "react";
import "./login.css";

export default function LoginPage() {
    return (
        <main className="login-main">
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
                            Welcome
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
                            Log in into your existing account
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
                        <label
                            style={{
                                fontWeight: 500,
                                fontSize: 16,
                                color: "#696f79",
                            }}
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Enter email address"
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            style={{
                                fontWeight: 500,
                                fontSize: 16,
                                color: "#696f79",
                            }}
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Password
                        </label>
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
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                    >
                        I agree to terms &amp; conditions
                    </label>
                </div>
                <a
                    href="../menu-page/searchMenu.html"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        textDecoration: "none",
                    }}
                >
                    <button className="button-regist">Login</button>
                </a>
                <span className="forgot-sect">
                    <h1
                        style={{
                            fontSize: 13,
                            fontWeight: 500,
                            color: "#999999",
                        }}
                    >
                        Forgot your Password?
                        <a
                            style={{ textDecoration: "none" }}
                            href="./email-form.html"
                            className="forgot-button"
                        >
                            Click here
                        </a>
                    </h1>
                </span>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "end",
                        height: 100,
                    }}
                >
                    <h1 style={{ fontWeight: 500, fontSize: 13 }}>
                        Dont have an account?
                        <a
                            style={{ textDecoration: "none" }}
                            href="./register.html"
                            className="button-login"
                        >
                            Sign Up
                        </a>
                    </h1>
                </div>
            </div>
        </main>
    );
}

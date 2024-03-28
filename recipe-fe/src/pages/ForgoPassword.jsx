// eslint-disable-next-line no-unused-vars
import React from "react";
import "./forgotPassword.css";

export default function ForgoPassword() {
    return (
        <main className="forgot-main">
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
                                width: 258,
                                height: 45,
                                color: "#efc81a",
                                fontWeight: 700,
                                fontSize: 30,
                            }}
                        >
                            Forgot Password
                        </h1>
                        <p
                            style={{
                                width: 300,
                                height: 28,
                                color: "#8692a6",
                                fontWeight: 400,
                                fontSize: 18,
                                marginTop: 15,
                            }}
                        >
                            Send OTP to your email!
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
                </div>
                <span
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: 20,
                    }}
                >
                    <a
                        style={{ textDecoration: "none" }}
                        href="./forgot-pass.html"
                        className="button-regist"
                    >
                        Send OTP
                    </a>
                </span>
                <span className="forgot-sect">
                    <h1
                        style={{
                            fontSize: 13,
                            fontWeight: 500,
                            color: "#999999",
                        }}
                    >
                        Login instead?
                        <a
                            style={{ textDecoration: "none" }}
                            href="./login.html"
                            className="forgot-button"
                        >
                            Click here
                        </a>
                    </h1>
                </span>
            </div>
        </main>
    );
}

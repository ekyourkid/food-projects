// eslint-disable-next-line no-unused-vars
import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
// import axios from axios;
// import { useState, useEffect } from "react";

// const base_url = import.meta.env.VITE_BASE_URL

export default function LoginPage() {
    // const [ token, setToken ] = useState( null )

    // useEffect( () =>
    // {
    //     let getToken = localStorage.getItem( 'token' )
    //     setToken(getToken)
    // }, [ localStorage ] )

    // const login = () =>
    // {
    //     axios.post( base_url + "/users/login", {
    //         email: 'test6@gmail.com',
    //         password: 'test6'
    //     }, {
    //         headers: {
    //             'Content-Type':"application/x-www-form-urlencoded"
    //         },
    //     } ).then( ( res ) =>
    //     {
    //         console.log( 'Success Login' )
    //         console.log( res.data.token )

    //     })
    // }

    return (
        <main className="login-main">
            <div className="cover-main">
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
                    <h1 className="form-check-label" htmlFor="flexCheckDefault">
                        I agree to terms &amp; conditions
                    </h1>
                </div>
                <Link
                    to="/home"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        textDecoration: "none",
                    }}
                >
                    <button className="button-regist">Login</button>
                </Link>
                <span className="forgot-sect">
                    <h1
                        style={{
                            fontSize: 13,
                            fontWeight: 500,
                            color: "#999999",
                        }}
                    >
                        Forgot your Password?
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/forgotPassword"
                            className="forgot-button"
                        >
                            Click here
                        </Link>
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
                    <h1
                        style={{
                            fontWeight: 500,
                            fontSize: 13,
                            color: "#999999",
                        }}
                    >
                        Dont have an account?
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/register"
                            className="button-login"
                        >
                            Sign Up
                        </Link>
                    </h1>
                </div>
            </div>
        </main>
    );
}

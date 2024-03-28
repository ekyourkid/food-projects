// eslint-disable-next-line no-unused-vars
import React from "react";
import "./editProfile.css";
import editPhoto from "../assets/user-edit.png";
export default function EditProfile() {
    return (
        <>
            <main className="main-editProfile">
                <section className="section-edit-profile">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img
                            src={editPhoto}
                            width="280px"
                            height="272px"
                            alt="user-edit"
                        />
                        <input type="file" id="edit-profile" hidden="" />
                        <label
                            className="label-edit-profile"
                            htmlFor="edit-profile"
                        >
                            Change Profile picture
                        </label>
                    </div>
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
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Ayudia"
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
                                placeholder="Ayudia@gmail.com"
                            />
                        </div>
                        <a
                            href="./editProfile.html"
                            className="btn-update-profile"
                        >
                            Update Profile
                        </a>
                        <span className="forgot-sect-editProfile">
                            <h1
                                style={{
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: "#999999",
                                }}
                            >
                                Change Password?
                                <a
                                    className="forgot-button"
                                    href="../profile/changePassword.html"
                                >
                                    Click here
                                </a>
                            </h1>
                        </span>
                    </div>
                </section>
                {/* POP UP */}
                <div className="popup" id="modal">
                    <div className="popup__content">
                        <h1>You want to logout?</h1>
                        <a href="../auth-page/login.html" className="btn-popUp">
                            Ok
                        </a>
                        <a
                            style={{
                                width: 426,
                                height: 64,
                                background: "#e7e7e7",
                                color: "#ffffff",
                                marginTop: 20,
                            }}
                            href="#"
                            className="closePopUp"
                        >
                            cancel;
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
}

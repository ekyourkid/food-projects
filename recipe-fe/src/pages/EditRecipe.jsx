// eslint-disable-next-line no-unused-vars
import React from "react";
import "./editRecipe.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function EditRecipe() {
    return (
        <>
            <Navbar />
            <main className="main-edit">
                <div className="main-div-edit">
                    <section className="section-edit">
                        <input type="file" id="inputFile" />
                        <label htmlFor="inputFile" className="labelEdit">
                            <h1
                                style={{
                                    width: 426,
                                    height: 64,
                                    backgroundColor: "#30c0f3",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: 6,
                                    fontSize: 16,
                                    fontWeight: 500,
                                    color: "#ffffff",
                                }}
                            >
                                Change Photo
                            </h1>
                        </label>
                        <input
                            style={{
                                width: 1300,
                                height: 100,
                                borderRadius: 15,
                                paddingLeft: 50,
                                fontSize: 24,
                                fontWeight: 500,
                            }}
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Egg Sandwich"
                        />
                        <div style={{}}>
                            <textarea
                                style={{
                                    width: 1300,
                                    height: 380,
                                    borderRadius: 15,
                                    paddingLeft: 50,
                                    paddingTop: 40,
                                    fontSize: 24,
                                    fontWeight: 400,
                                }}
                                className="textArea-control-editRecipe"
                                id="exampleFormControlTextarea1"
                                rows={3}
                                placeholder="- 2 eggs"
                            />
                        </div>
                        <select
                            style={{
                                width: 243,
                                borderRadius: 15,
                                fontSize: 24,
                                fontWeight: 500,
                                color: "#666666",
                                cursor: "pointer",
                            }}
                            className="form-select form-select-lg mb-3"
                            aria-label="Large select example"
                        >
                            <option value={1}>Main Course</option>
                        </select>
                        <Link
                            to="/detailProfile"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                textDecoration: "none",
                            }}
                        >
                            <button className="button-post">Update</button>
                        </Link>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}

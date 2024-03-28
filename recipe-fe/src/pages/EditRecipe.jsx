// eslint-disable-next-line no-unused-vars
import React from "react";
import "./editRecipe.css";
import Footer from "../components/Footer";

export default function EditRecipe() {
    return (
        <>
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
                        <div
                            style={{
                                width: 1300,
                                height: 380,
                                border: "1px solid rgb(236, 235, 235)",
                                borderRadius: 15,
                                paddingLeft: 50,
                                paddingTop: 40,
                                fontSize: 24,
                                fontWeight: 500,
                            }}
                        >
                            <ul style={{ listStyleType: "none" }}>
                                <li>- 2 eggs</li>
                                <li>- 2 tbsp mayonnaise</li>
                                <li>- 3 slices bread</li>
                                <li>- a little butter</li>
                            </ul>
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
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <button className="button-post">Update</button>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}

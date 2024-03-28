// eslint-disable-next-line no-unused-vars
import React from "react";
import "./addRecipe.css";
import Footer from "../components/Footer";

export default function AddRecipe() {
    return (
        <>
            <main className="main-add">
                <div className="main-div-add">
                    <section className="section-add">
                        <input type="file" id="inputFile" />
                        <label htmlFor="inputFile">Add Photo</label>
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
                            placeholder="Title"
                        />
                        <textarea
                            style={{
                                width: 1300,
                                height: 380,
                                borderRadius: 15,
                                paddingLeft: 50,
                                paddingTop: 40,
                                fontSize: 24,
                                fontWeight: 500,
                            }}
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            placeholder="Ingredients"
                            defaultValue={""}
                        />
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
                            <option selected="">Category</option>
                            <option value={1}>Main Course</option>
                            <option value={2}>Breakfast</option>
                            <option value={3}>Vegetarian</option>
                            <option value={4}>Popular</option>
                        </select>
                        <a
                            href="../profile/detailProfile.html"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                textDecoration: "none",
                            }}
                        >
                            <button className="button-post-add">Post</button>
                        </a>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}

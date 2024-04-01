// eslint-disable-next-line no-unused-vars
import React from "react";
import "./addRecipe.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL;
const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZjNTZjYWMzLWI4ZTAtNGQ4Mi1iYjUwLTA5OTMzMDYwNThiMiIsInVzZXJuYW1lIjoidGVzdDYiLCJhZGRyZXNzIjoiamFnYWthcnNhIiwiaWF0IjoxNzExNzQyNDkwLCJleHAiOjE3MTE4Mjg4OTB9.zDIEwy1cmG4ejicqdrQYkI1wa34WfgN-Jx5ijH6fxZA";

export default function AddRecipe() {
    const navigate = useNavigate();
    const [photo, setPhoto] = useState();
    const [inputData, setInputData] = useState({
        title: "",
        ingridient: "",
        category_id: 2,
        photo_url: "",
    });

    const postData = (event) => {
        event.preventDefault();
        let bodyData = new FormData();

        bodyData.append("title", inputData.title);
        bodyData.append("ingredient", inputData.ingridient);
        bodyData.append("category_id", inputData.category_id);
        bodyData.append("photo", photo);

        axios
            .post(base_url + "/recipes", bodyData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                console.log("success");
                console.log(res);
                navigate("/home");
            })
            .catch((err) => {
                console.log("failed");
                console.log(err);
            });
    };
    const onChange = (e) => {
        setInputData({ ...inputData, [e.target?.id]: e.target.value });
    };
    const onChangePhoto = (e) => {
        setPhoto(e.target.files[0]);

        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setInputData({
                ...inputData,
                photo_url: readerEvent.target.result,
            });
        };
    };
    console.log(inputData);

    return (
        <>
            <Navbar />
            <main className="main-add">
                <div className="main-div-add">
                    <form className="section-add" onSubmit={postData}>
                        <input
                            type="file"
                            id="inputFile"
                            required
                            onChange={onChangePhoto}
                        />
                        <label
                            style={{ backgroundColor: "#F6F5F4" }}
                            htmlFor="inputFile"
                        >
                            {photo && (
                                <img src={inputData.photo_url} width={150} />
                            )}
                            Add Photo
                        </label>
                        <input
                            style={{
                                width: 1300,
                                height: 100,
                                borderRadius: 15,
                                paddingLeft: 50,
                                fontSize: 24,
                                fontWeight: 500,
                                backgroundColor: "#F6F5F4",
                                cursor: "pointer",
                            }}
                            type="text"
                            className="form-control-addRecipe"
                            id="title"
                            placeholder="Title"
                            required
                            onChange={onChange}
                            htmlFor="inputTitle"
                        />
                        <textarea
                            style={{
                                width: 1300,
                                height: 380,
                                borderRadius: 15,
                                paddingLeft: 50,
                                paddingTop: 40,
                                fontSize: 24,
                                backgroundColor: "#F6F5F4",
                                fontWeight: 500,
                            }}
                            className="textArea-control-addRecipe"
                            id="ingridient"
                            rows={3}
                            placeholder="Ingredients"
                            defaultValue={""}
                            htmlFor="inputIngredients"
                            required
                            onChange={onChange}
                        />
                        {/* <select
                            style={{
                                width: 243,
                                borderRadius: 15,
                                fontSize: 24,
                                fontWeight: 500,
                                color: "#666666",
                                backgroundColor: "#F6F5F4",
                                cursor: "pointer",
                            }}
                            id="category_id"
                            className="form-select form-select-lg mb-3"
                            aria-label="Large select example"
                            htmlFor="inputCategory"
                        >
                            <option selected="">Category</option>
                            <option value={1}>Main Course</option>
                            <option value={2}>Breakfast</option>
                            <option value={3}>Vegetarian</option>
                            <option value={4}>Popular</option>
                        </select> */}
                        <button
                            type="submit"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                textDecoration: "none",
                            }}
                            className="button-post-add"
                        >
                            Post
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}

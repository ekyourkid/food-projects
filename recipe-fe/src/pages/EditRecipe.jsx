// eslint-disable-next-line no-unused-vars
import React from "react";
import "./editRecipe.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const base_url = import.meta.env.VITE_BASE_URL;
const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZjNTZjYWMzLWI4ZTAtNGQ4Mi1iYjUwLTA5OTMzMDYwNThiMiIsInVzZXJuYW1lIjoidGVzdDYiLCJhZGRyZXNzIjoiamFnYWthcnNhIiwiaWF0IjoxNzExNzQyNDkwLCJleHAiOjE3MTE4Mjg4OTB9.zDIEwy1cmG4ejicqdrQYkI1wa34WfgN-Jx5ijH6fxZA";

export default function EditRecipe() {
    const [data, setData] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const [photo, setPhoto] = useState();
    const [inputData, setInputData] = useState({
        title: "",
        ingridient: "",
        category_id: 2,
        photo_url: "",
    });

    async function getData() {
        try {
            let recipeData = await axios.get(`${base_url}/recipes/${id}`);
            console.log(recipeData.data.data);
            setData(recipeData.data.data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getData();
        console.log(id);
    }, []);
    useEffect(() => {
        console.log(data);
    }, [data]);
    const updateData = (event) => {
        event.preventDefault();
        let bodyData = new FormData();
        bodyData.append("title", inputData.title);
        bodyData.append("ingredient", inputData.ingridient);
        bodyData.append("category_id", inputData.category_id);
        bodyData.append("photo", photo);

        axios
            .put(base_url + "/recipes/" + id, bodyData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                console.log("success");
                console.log(res);
                navigate("/detailProfile");
                window.scrollTo(0.0);
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
    const handdleButtonClick = () => {
        window.scrollTo(0, 0);
    };
    console.log(inputData);
    return (
        <>
            <Navbar />
            <main className="main-edit">
                <div className="main-div-edit">
                    <form onSubmit={updateData} className="section-edit">
                        <input
                            type="file"
                            id="inputFile"
                            onChange={onChangePhoto}
                        />
                        <label htmlFor="inputFile" className="labelEdit">
                            {photo ? (
                                <img
                                    src={inputData.photo_url}
                                    className="image-editRecipe"
                                />
                            ) : (
                                <img
                                    src={data?.photo}
                                    className="image-editRecipe"
                                />
                            )}
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
                                    position: "absolute",
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
                            id="title"
                            onChange={onChange}
                            placeholder={data?.title}
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
                                id="ingridient"
                                rows={3}
                                placeholder={data?.ingredient}
                                onChange={onChange}
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
                            <option value={data?.category_id}>
                                main course
                            </option>
                            <option value={data?.category_id}>dessert</option>
                            <option value={data?.category_id}>appetizer</option>
                        </select>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                textDecoration: "none",
                            }}
                        >
                            <button
                                type="submit"
                                onClick={handdleButtonClick}
                                className="button-post"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}

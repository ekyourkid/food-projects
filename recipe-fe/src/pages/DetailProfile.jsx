// eslint-disable-next-line no-unused-vars
import React from "react";
import "./detailProfile.css";
import userPhoto from "../assets/user.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const base_url = import.meta.env.VITE_BASE_URL;
const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZjNTZjYWMzLWI4ZTAtNGQ4Mi1iYjUwLTA5OTMzMDYwNThiMiIsInVzZXJuYW1lIjoidGVzdDYiLCJhZGRyZXNzIjoiamFnYWthcnNhIiwiaWF0IjoxNzExNzQyNDkwLCJleHAiOjE3MTE4Mjg4OTB9.zDIEwy1cmG4ejicqdrQYkI1wa34WfgN-Jx5ijH6fxZA";

export default function DetailProfile() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    const getDataRecipes = async () => {
        try {
            let recipeData = await axios.get(`${base_url}/recipes`);
            console.log(recipeData.data.data);
            setData(recipeData.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    async function deleteRecipes(id) {
        try {
            if (
                window.confirm("Are you sure you want to delete this recipe?")
            ) {
                await axios.delete(`${base_url}/recipes/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log("Data berhasil dihapus");
                window.location.reload(true);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getDataRecipes();
    }, [id]);

    const handleButtonClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <Navbar />
            <main className="main-detail-profile">
                <div className="main-div-detail-profile">
                    <section className="section-detail-profile">
                        <div className="nav-rigth-detail-profile">
                            <span
                                href="./editProfile.html"
                                className="nav-photo-detail-profile"
                            >
                                <img
                                    style={{
                                        marginLeft: 20,
                                        width: 64,
                                        height: 64,
                                    }}
                                    src={userPhoto}
                                    alt="user-photo"
                                />
                            </span>
                            <span className="nav-text-detail-profile">
                                <h1
                                    style={{
                                        fontSize: 24,
                                        fontWeight: 500,
                                        color: "#000000",
                                    }}
                                >
                                    Ayudia
                                </h1>
                                <h1
                                    style={{
                                        fontSize: 20,
                                        fontWeight: 900,
                                        color: "#000000",
                                    }}
                                >
                                    10 Recipes
                                </h1>
                            </span>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-evenly",
                            }}
                        >
                            <h1
                                style={{
                                    fontWeight: 500,
                                    fontSize: 24,
                                    color: "#000000",
                                    textAlign: "right",
                                }}
                            >
                                21 February 2023
                            </h1>
                        </div>
                    </section>
                    <aside className="aside-detail-profile">
                        <nav className="nav-detail-profile">
                            <Link
                                style={{ color: "#3f3a3a" }}
                                className="nav-link-detail-profile"
                                aria-current="page"
                                to="/detailProfile"
                            >
                                Recipes
                            </Link>
                            <Link
                                className="nav-link-detail-profile"
                                to="/bookmarkProfile"
                            >
                                Bookmarked
                            </Link>
                            <Link className="nav-link-detail-profile" to="#">
                                Liked
                            </Link>
                        </nav>
                        {data.length
                            ? data.map((item, index) => (
                                  <div
                                      key={index}
                                      className="card-aside-detail-profile"
                                  >
                                      <Link
                                          to="/detailRecipe"
                                          style={{ textDecoration: "none" }}
                                      >
                                          <img
                                              src={item.photo}
                                              width="500px"
                                              height="500px"
                                              alt="pempek-photo"
                                          />
                                      </Link>
                                      <div className="">
                                          <span className="aside-text-detail-profile">
                                              <h1
                                                  style={{
                                                      fontWeight: 500,
                                                      fontSize: 32,
                                                      width: 132,
                                                      height: 96,
                                                  }}
                                              >
                                                  {item.title}
                                              </h1>
                                              <p
                                                  style={{
                                                      width: 245,
                                                      fontSize: 24,
                                                      fontWeight: 500,
                                                      color: "#3f3a3a",
                                                      paddingTop: 10,
                                                  }}
                                              >
                                                  {item.ingredient}
                                              </p>
                                          </span>
                                          <h1
                                              style={{
                                                  backgroundColor: "#efc81a",
                                                  width: 325,
                                                  height: 42,
                                                  borderRadius: 6,
                                                  fontWeight: 500,
                                                  fontSize: 16,
                                                  display: "flex",
                                                  justifyContent: "center",
                                                  alignItems: "center",
                                                  color: "white",
                                              }}
                                          >
                                              10 Likes - 12 Comment - 3 Bookmark
                                          </h1>
                                          <span
                                              style={{
                                                  width: 310,
                                                  display: "flex",
                                                  justifyContent:
                                                      "space-between",
                                                  marginTop: 50,
                                              }}
                                          >
                                              <Link
                                                  onClick={handleButtonClick}
                                                  style={{
                                                      textDecoration: "none",
                                                      display: "flex",
                                                      alignItems: "center",
                                                      justifyContent: "center",
                                                  }}
                                                  to={`/editRecipe/${item.id}`}
                                                  className="btn-card-edit"
                                              >
                                                  Edit Menu
                                              </Link>
                                              <button
                                                  //   href="#modal-deleteRecipe"
                                                  onClick={() =>
                                                      deleteRecipes(item.id)
                                                  }
                                                  style={{
                                                      textDecoration: "none",
                                                      display: "flex",
                                                      alignItems: "center",
                                                      justifyContent: "center",
                                                  }}
                                                  className="btn-card-delete"
                                              >
                                                  Delete Menu
                                              </button>
                                          </span>
                                      </div>
                                      {/* POP UP DELETE */}
                                      {/* <div
                                          className="popup-detailProfile"
                                          id="modal-deleteRecipe"
                                      >
                                          <div className="popup-content-detailProfile">
                                              <p
                                                  style={{
                                                      fontWeight: 900,
                                                      fontSize: 30,
                                                      marginTop: 50,
                                                      textAlign: "center",
                                                  }}
                                              >
                                                  Are you sure <br />
                                                  want to delete this recipe?
                                              </p>
                                              <Link
                                                  onClick={() =>
                                                      deleteRecipes(item.id)
                                                  }
                                                  to="/detailProfile"
                                                  className="btn-popup-detaiProfile"
                                              >
                                                  Yes
                                              </Link>
                                              <a
                                                  style={{
                                                      backgroundColor:
                                                          "#e7e7e7",
                                                      marginTop: 20,
                                                  }}
                                                  href="#"
                                                  className="close-popup-detailProfile"
                                              >
                                                  Cancel
                                              </a>
                                          </div>
                                      </div> */}
                                  </div>
                              ))
                            : null}
                    </aside>
                    <article className="article-detail-profile">
                        <button className="btn-article-detail-profile">
                            Prev
                        </button>
                        <h1
                            style={{
                                width: 297,
                                height: 62,
                                fontWeight: 500,
                                fontSize: 32,
                                color: "#3f3a3a",
                            }}
                        >
                            Show 6-10 from 10
                        </h1>
                    </article>
                </div>
            </main>
            <Footer />
        </>
    );
}

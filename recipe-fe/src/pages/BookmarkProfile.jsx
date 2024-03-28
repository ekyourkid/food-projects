// eslint-disable-next-line no-unused-vars
import React from "react";
import "./bookmarkProfile.css";
import userPhoto from "../assets/user.png";
import pempek from "../assets/pempek.png";
import Footer from "../components/Footer";
export default function BookmarkProfile() {
    return (
        <>
            <main className="main-bookmark">
                <div className="main-div-bookmark">
                    <section className="section-bookmark">
                        <div className="nav-rigth-bookmark">
                            <span className="nav-photo-bookmark">
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
                            <span className="nav-text-bookmark">
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
                                        fontSize: 24,
                                        fontWeight: 900,
                                        color: "#000000",
                                    }}
                                >
                                    Logout
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
                    <aside className="aside-bookmark">
                        <nav className="nav-bookmark">
                            <a
                                className="nav-link"
                                aria-current="page"
                                href="../profile/detailProfile.html"
                            >
                                Recipes
                            </a>
                            <a
                                style={{ color: "#3f3a3a" }}
                                className="nav-link"
                                href="../profile/bookmarkProfile.html"
                            >
                                Bookmarked
                            </a>
                            <a className="nav-link" href="#">
                                Liked
                            </a>
                        </nav>
                        <div className="card-aside-bookmark">
                            <a
                                href="../menu-page/detailMenu.html"
                                style={{ textDecoration: "none" }}
                            >
                                <img
                                    src={pempek}
                                    width="500px"
                                    height="500px"
                                    alt="pempek-photo"
                                />
                            </a>
                            <div className="">
                                <span className="aside-text-bookmark">
                                    <h1
                                        style={{
                                            fontWeight: 500,
                                            fontSize: 32,
                                            width: 132,
                                            height: 96,
                                        }}
                                    >
                                        Bomb Chicken
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
                                        Ingredients: chicken, dumpling wrap,
                                        garlic, spring onion, soy sauce, black
                                        sesame seed
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
                                        justifyContent: "space-between",
                                        marginTop: 50,
                                    }}
                                >
                                    <button className="btn-card-delete-bookmark">
                                        Delete From Bookmark
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="card-aside-bookmark">
                            <div className="">
                                <img
                                    src={pempek}
                                    width="500px"
                                    height="500px"
                                    alt="pempek-photo"
                                />
                            </div>
                            <div className="">
                                <span className="aside-text-bookmark">
                                    <h1
                                        style={{
                                            fontWeight: 500,
                                            fontSize: 32,
                                            width: 132,
                                            height: 96,
                                        }}
                                    >
                                        Bomb Chicken
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
                                        Ingredients: chicken, dumpling wrap,
                                        garlic, spring onion, soy sauce, black
                                        sesame seed
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
                                        justifyContent: "space-between",
                                        marginTop: 50,
                                    }}
                                >
                                    <button className="btn-card-delete-bookmark">
                                        Delete From Bookmark
                                    </button>
                                </span>
                            </div>
                        </div>
                    </aside>
                    <article className="article-bookmark">
                        <button className="btn-article-bookmark">Prev</button>
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

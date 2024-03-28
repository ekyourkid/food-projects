// eslint-disable-next-line no-unused-vars
import React from "react";
import "./detailProfile.css";
import userPhoto from "../assets/user.png";
import pempek from "../assets/pempek.png";
import Footer from "../components/Footer";

export default function DetailProfile() {
    return (
        <>
            <main className="main-detail-profile">
                <div className="main-div-detail-profile">
                    <section className="section-detail-profile">
                        <div className="nav-rigth-detail-profile">
                            <a
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
                            </a>
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
                    <aside className="aside-detail-profile">
                        <nav className="nav-detail-profile">
                            <a
                                style={{ color: "#3f3a3a" }}
                                className="nav-link-detail-profile"
                                aria-current="page"
                                href="../profile/detailProfile.html"
                            >
                                Recipes
                            </a>
                            <a
                                className="nav-link-detail-profile"
                                href="../profile/bookmarkProfile.html"
                            >
                                Bookmarked
                            </a>
                            <a className="nav-link-detail-profile" href="#">
                                Liked
                            </a>
                        </nav>
                        <div className="card-aside-detail-profile">
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
                                <span className="aside-text-detail-profile">
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
                                    <a
                                        style={{
                                            textDecoration: "none",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                        href="../menu-page/editMenu.html"
                                        className="btn-card-edit"
                                    >
                                        Edit Menu
                                    </a>
                                    <a
                                        href="#"
                                        style={{
                                            textDecoration: "none",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                        className="btn-card-delete"
                                    >
                                        Delete Menu
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="card-aside-detail-profile">
                            <div className="">
                                <img
                                    src={pempek}
                                    width="500px"
                                    height="500px"
                                    alt="pempek-photo"
                                />
                            </div>
                            <div className="">
                                <span className="aside-text">
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
                                    <button className="btn-card-edit">
                                        Edit Menu
                                    </button>
                                    <button className="btn-card-delete">
                                        Delete Menu
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="card-aside-detail-profile">
                            <div className="">
                                <img
                                    src={pempek}
                                    width="500px"
                                    height="500px"
                                    alt="pempek-photo"
                                />
                            </div>
                            <div className="">
                                <span className="aside-text">
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
                                    <button className="btn-card-edit">
                                        Edit Menu
                                    </button>
                                    <button className="btn-card-delete">
                                        Delete Menu
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="card-aside-detail-profile">
                            <div className="">
                                <img
                                    src={pempek}
                                    width="500px"
                                    height="500px"
                                    alt="pempek-photo"
                                />
                            </div>
                            <div className="">
                                <span className="aside-text">
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
                                    <button className="btn-card-edit">
                                        Edit Menu
                                    </button>
                                    <button className="btn-card-delete">
                                        Delete Menu
                                    </button>
                                </span>
                            </div>
                        </div>
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

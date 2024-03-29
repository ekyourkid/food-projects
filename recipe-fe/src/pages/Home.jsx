// eslint-disable-next-line no-unused-vars
import React from "react";
import "./home.css";
import pempek from "../assets/pempek.png";
import karen from "../assets/karen.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="home-main">
                <div className="line1" />
                <div className="line2" />
                <section className="section-home">
                    <div className="section-heroText-home">
                        <h1
                            style={{
                                fontSize: 72,
                                fontWeight: 500,
                                color: "#2e266f",
                            }}
                        >
                            Discover Recipe &amp; Delicious Food
                        </h1>
                    </div>
                    <div className="section-search-home">
                        <input
                            type="search"
                            className="form-control-home"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Telur Gulung"
                        />
                        <button className="button-search-section-home">
                            Search
                        </button>
                    </div>
                    <div className="section-button-home">
                        <button className="category-new-home">New</button>
                        <button className="category-popular-home">
                            Popular
                        </button>
                        <button className="category-veget-home">
                            Vegetarian
                        </button>
                        <button className="category-break-home">
                            Breakfast
                        </button>
                    </div>
                </section>
                <Link to="/detailRecipe" className="aside-home">
                    <div className="aside-img-container">
                        <img
                            src={pempek}
                            width="500px"
                            height="500px"
                            alt="pempek-photo"
                        />
                    </div>
                    <div className="aside-text-container-home">
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
                                Ingredients: chicken, dumpling wrap, garlic,
                                spring onion, soy sauce, black sesame seed
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
                            }}
                        >
                            10 Likes - 12 Comment - 3 Bookmark
                        </h1>
                        <span style={{ display: "flex", marginTop: 25 }}>
                            <img
                                src={karen}
                                width="68px"
                                height="65px"
                                alt="karen-photo"
                            />
                            <h1
                                style={{
                                    fontWeight: 500,
                                    fontSize: 24,
                                }}
                            >
                                Karen
                            </h1>
                        </span>
                    </div>
                </Link>
                <Link to="/detailRecipe" className="aside-home">
                    <div className="aside-img-container">
                        <img
                            src={pempek}
                            width="500px"
                            height="500px"
                            alt="pempek-photo"
                        />
                    </div>
                    <div className="aside-text-container">
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
                                Ingredients: chicken, dumpling wrap, garlic,
                                spring onion, soy sauce, black sesame seed
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
                            }}
                        >
                            10 Likes - 12 Comment - 3 Bookmark
                        </h1>
                        <span style={{ display: "flex", marginTop: 25 }}>
                            <img
                                src={karen}
                                width="68px"
                                height="65px"
                                alt="karen-photo"
                            />
                            <h1
                                style={{
                                    fontWeight: 500,
                                    fontSize: 24,
                                }}
                            >
                                Karen
                            </h1>
                        </span>
                    </div>
                </Link>
                <Link to="/detailRecipe" className="aside-home">
                    <div className="aside-img-container">
                        <img
                            src={pempek}
                            width="500px"
                            height="500px"
                            alt="pempek-photo"
                        />
                    </div>
                    <div className="aside-text-container">
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
                                Ingredients: chicken, dumpling wrap, garlic,
                                spring onion, soy sauce, black sesame seed
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
                            }}
                        >
                            10 Likes - 12 Comment - 3 Bookmark
                        </h1>
                        <span style={{ display: "flex", marginTop: 25 }}>
                            <img
                                src={karen}
                                width="68px"
                                height="65px"
                                alt="karen-photo"
                            />
                            <h1
                                style={{
                                    fontWeight: 500,
                                    fontSize: 24,
                                }}
                            >
                                Karen
                            </h1>
                        </span>
                    </div>
                </Link>
                <Link to="/detailRecipe" className="aside-home">
                    <div className="aside-img-container">
                        <img
                            src={pempek}
                            width="500px"
                            height="500px"
                            alt="pempek-photo"
                        />
                    </div>
                    <div className="aside-text-container">
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
                                Ingredients: chicken, dumpling wrap, garlic,
                                spring onion, soy sauce, black sesame seed
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
                            }}
                        >
                            10 Likes - 12 Comment - 3 Bookmark
                        </h1>
                        <span style={{ display: "flex", marginTop: 25 }}>
                            <img
                                src={karen}
                                width="68px"
                                height="65px"
                                alt="karen-photo"
                            />
                            <h1
                                style={{
                                    fontWeight: 500,
                                    fontSize: 24,
                                }}
                            >
                                Karen
                            </h1>
                        </span>
                    </div>
                </Link>
                <Link to="/detailRecipe" className="aside-home">
                    <div className="aside-img-container">
                        <img
                            src={pempek}
                            width="500px"
                            height="500px"
                            alt="pempek-photo"
                        />
                    </div>
                    <div className="aside-text-container">
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
                                Ingredients: chicken, dumpling wrap, garlic,
                                spring onion, soy sauce, black sesame seed
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
                            }}
                        >
                            10 Likes - 12 Comment - 3 Bookmark
                        </h1>
                        <span style={{ display: "flex", marginTop: 25 }}>
                            <img
                                src={karen}
                                width="68px"
                                height="65px"
                                alt="karen-photo"
                            />
                            <h1
                                style={{
                                    fontWeight: 500,
                                    fontSize: 24,
                                }}
                            >
                                Karen
                            </h1>
                        </span>
                    </div>
                </Link>
                <article className="article">
                    <h1
                        style={{
                            width: 284,
                            height: 62,
                            fontWeight: 500,
                            fontSize: 32,
                            color: "#3f3a3a",
                        }}
                    >
                        Show 1-5 from 20
                    </h1>
                    <button
                        style={{
                            width: 105,
                            height: 64,
                            borderRadius: 6,
                            backgroundColor: "#efc81a",
                            fontWeight: 500,
                            fontSize: 16,
                            textAlign: "center",
                            border: "none",
                            marginLeft: 40,
                            color: "#ffffff",
                        }}
                    >
                        Next
                    </button>
                </article>
            </main>
            <Footer />
        </>
    );
}

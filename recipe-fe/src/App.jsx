// import { useState } from "react";
import "./App.css";
import Egg2 from "./assets/egg2.png";
import sandwich from "./assets/sandwich.png";
import burger from "./assets/burger.png";
import rectacngle from "./assets/Rectangle.png";

function App() {
    // const [count, setCount] = useState(0);

    return (
        <main>
            <section className="section1">
                <img className="rect" src={rectacngle} alt="" />
                <div className="div1-sect">
                    <h1>
                        Discover Recipe <br />& Delicious Food
                    </h1>
                    <input type="text" placeholder="search restaurant, food" />
                </div>
                <div>
                    <img className="egg2" src={Egg2} alt="" />
                </div>
            </section>
            <section className="section2">
                <div className="div1-sect2">
                    <h1>Popular For You !</h1>
                </div>
                <section className="section2-1">
                    <div>
                        <img src={sandwich} alt="" />
                        <div className="box"></div>
                    </div>
                    <div>
                        <h1>Healthy Bone Broth Ramen (Quick & Easy)</h1>
                        <p>
                            Quick + Easy Chicken Bone Broth Ramen- Healthy
                            chicken ramen in a hurry? That`s <br /> right!
                        </p>
                        <button href="">Learn More</button>
                    </div>
                </section>
            </section>
            <section className="section3">
                <div className="div1-sect3">
                    <h1>New Recipe</h1>
                </div>
                <section className="section3-1">
                    <div>
                        <img src={burger} alt="" />
                        <div className="box2"></div>
                    </div>
                    <div>
                        <h1>Healthy Bone Broth Ramen (Quick & Easy)</h1>
                        <p>
                            Quick + Easy Chicken Bone Broth Ramen- Healthy
                            chicken ramen in a hurry? That`s <br /> right!
                        </p>
                        <button href="">Learn More</button>
                    </div>
                </section>
            </section>
            <section className="section4">
                <div className="div1-sect4">
                    <h1>Popular Recipe</h1>
                </div>
                <section className="section4-1">
                    <span className="span1-sect4">
                        <div className="grid-item">
                            <h1>
                                Chiken <br /> Kare
                            </h1>
                        </div>
                        <div className="grid-item2">
                            <h1>
                                Bomb <br /> Chicken
                            </h1>
                        </div>
                        <div className="grid-item3">
                            <h1>
                                Banana <br /> Smothie Pop
                            </h1>
                        </div>
                    </span>
                    <span className="span2-sect4">
                        <div className="grid-item4">
                            <h1>
                                Coffe Lava <br /> Cake
                            </h1>
                        </div>
                        <div className="grid-item5">
                            <h1>
                                Sugar <br /> Salmon
                            </h1>
                        </div>
                        <div className="grid-item6">
                            <h1>
                                Indian <br /> Salad
                            </h1>
                        </div>
                    </span>
                </section>
            </section>
        </main>
    );
}

export default App;

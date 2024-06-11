import React from "react";
import "../styles/main.css";
import Store from "/store.jpg";

const Main = () => {
  return (
    <div style={{ backgroundColor: "#273765" }}>
      <div className="container site-about">
        <h1>Making Online-To-Offline (O2O) commerce seamless</h1>
        <p>
          Unlocking boundless payment opportunities for enterprises,
          individuals,
          <br /> small businesses, emerging markets, and startups alike.
        </p>
        <button>Get Started</button>
      </div>
      <div className="container store-img">
        <img src={Store} alt="" className="container" />
      </div>
    </div>
  );
};

export default Main;

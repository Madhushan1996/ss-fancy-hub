import React from "react";
import Background from "../../img/background.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={Background} alt="background" className="home__image" />
      </div>
    </div>
  );
}

export default Home;

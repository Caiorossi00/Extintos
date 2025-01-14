import React from "react";
import "../../assets/scss/hero.scss";

const Hero = () => {
  return (
    <div id="container-hero">
      <div className="text-hero">
        {/* <img src="https://cdn-icons-png.flaticon.com/512/599/599373.png" /> */}
        <h1>Extintos 2025</h1>
        <p>Há 10 anos lorem ipsum simet dolor lorem ipsum</p>
        <div>
          <a href="#learn-more" className="hero-button black" role="button">
            Saiba Mais
          </a>
          <a href="#get-started" className="hero-button grey" role="button">
            Comece Agora
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

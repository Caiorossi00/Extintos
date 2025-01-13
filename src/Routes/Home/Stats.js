import React from "react";
import "../../assets/scss/stats.scss";

const Stats = () => {
  return (
    <div id="container-stats">
      <div className="stats-left">
        <h1>200+ Torneios Organizados </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className="stats-right">
        <img
          src="https://images.unsplash.com/photo-1582140140347-679054fde567?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Torneios Organizados"
        />
      </div>
    </div>
  );
};

export default Stats;

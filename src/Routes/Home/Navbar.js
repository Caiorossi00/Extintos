import React from "react";
import "../../assets/scss/Navbar.scss";

const Navbar = () => {
  return (
    <div id="container-nav">
      <img
        src="https://cdn-icons-png.flaticon.com/512/599/599373.png"
        alt="l"
        className="nav-logo"
      />
      <nav className="nav-links">
        <a href="/managers">Managers</a>
      </nav>
    </div>
  );
};

export default Navbar;

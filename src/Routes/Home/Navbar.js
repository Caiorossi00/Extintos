import React from "react";
import { Link } from "react-router-dom";
import "../../assets/scss/Navbar.scss";

const Navbar = () => {
  return (
    <div id="container-nav">
      <Link to="/" className="nav-logo-link">
        <img
          src="https://cdn-icons-png.flaticon.com/512/599/599373.png"
          alt="Logo"
          className="nav-logo"
        />
      </Link>
      <nav className="nav-links">
        <a href="/managers">Managers</a>
      </nav>
    </div>
  );
};

export default Navbar;

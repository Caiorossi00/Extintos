import React from "react";
import "../../assets/scss/Navbar.scss";

const Navbar = () => {
  return (
    <div id="container-nav">
      <img src="placeholder-logo.png" alt="l" className="nav-logo" />
      <nav className="nav-links">
        <a href="/managers">Managers</a>
        <a href="/gallery">Gallery</a>
        <a href="/discover">Discover</a>
        <a href="/templates">Templates</a>
        <a href="/updates">Updates</a>
      </nav>
    </div>
  );
};

export default Navbar;

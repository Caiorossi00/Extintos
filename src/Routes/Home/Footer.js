import React from "react";
import "../../assets/scss/footer.scss";

const Footer = () => {
  return (
    <footer id="container-footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Extintos. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

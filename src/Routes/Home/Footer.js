import React from "react";
import { Link } from "react-router-dom";
import "../../assets/scss/footer.scss";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer id="container-footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/managers">Managers</Link>
          <Link to="/tabela">Tabela</Link>
          <Link to="/mercado">Mercado</Link>
        </div>
        <div className="footer-bottom">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>
            © {new Date().getFullYear()} Gentilmente desenvolvido por{" "}
            <span>
              <a
                href="https://instagram.com/caiorossi.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                @CaioRossi.dev
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

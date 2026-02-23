// src/components/Footer.jsx
import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="dgc-footer">
      <Container className="dgc-footer__inner">
        <div className="dgc-footer__social">
          <a
            className="dgc-footer__icon"
            href="/"
            aria-label="Facebook"
            title="Facebook"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            className="dgc-footer__icon"
            href="/"
            aria-label="Twitter"
            title="Twitter"
          >
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a
            className="dgc-footer__icon"
            href="/"
            aria-label="Instagram"
            title="Instagram"
          >
            <i className="fa-brands fa-instagram-square"></i>
          </a>
        </div>

        <div className="dgc-footer__copy">
          © {new Date().getFullYear()} Doncaster Garden Club Inc.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
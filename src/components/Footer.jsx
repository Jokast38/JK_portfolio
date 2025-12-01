import React from "react";
import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">

      <div className="footer-container">

        {/* ---------------- LEFT ---------------- */}
        <div className="footer-column">
          <h3 className="footer-title">KASSA <span>Jokast.</span></h3>
          <p className="footer-text">
            Développeur Fullstack & Architecte Web passionné par la création 
            de solutions modernes, performantes et élégantes.
          </p>
        </div>

        {/* ---------------- MIDDLE ---------------- */}
        <div className="footer-column">
          <h4 className="footer-subtitle">Navigation</h4>
          <ul className="footer-links">
            <li><a href="#hero">Accueil</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* ---------------- RIGHT ---------------- */}
        <div className="footer-column">
          <h4 className="footer-subtitle">Me retrouver</h4>
          <div className="footer-socials">

            <a href="https://github.com/Jokast38" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/jokast-kassa-82a426221" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="mailto:jokast2023@gmail.com">
              <FaEnvelope />
            </a>

          </div>

          <a href="mailto:tonemail@gmail.com" className="footer-mail-btn">
            Me contacter
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Kassa Jokast — Tous droits réservés.
      </div>

    </footer>
  );
};

export default Footer;

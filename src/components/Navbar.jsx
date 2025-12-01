import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* ---- LOGO / BRAND ---- */}
        <div className="nav-logo">
          <a href="/">JK<span>.</span></a>
        </div>

        {/* ---- MENU ---- */}
        <ul className={`nav-links ${open ? "nav-active" : ""}`}>
          <li><a href="#hero">Accueil</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#skills-section">Compétences</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* ---- BURGER ---- */}
        <div className={`burger ${open ? "toggle" : ""}`} onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

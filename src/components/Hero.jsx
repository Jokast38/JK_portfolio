import React from "react";
import "../styles/Hero.css";
import profileImg from "../assets/images/images/jodirect.jpg"; // ⚠ adapte le chemin

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">

        {/* -------- LEFT : Text -------- */}
        <div className="hero-text" id="hero">
          <h1 className="hero-title">
            KASSA <span>Jokast.</span>
          </h1>

          <h2 className="hero-subtitle">
            Développeur Fullstack <br /> Web, Mobile & IA
          </h2>

          <button className="hero-btn" onClick={() => {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: "smooth" });
            }
          }}>
            <span>Voir mes projets</span>
          </button>
        </div>

        {/* -------- RIGHT : Hexagon profile -------- */}
        <div className="hero-hexagon-wrapper">
          <div className="hexagon">
            <img src={profileImg} alt="profil" className="hero-img" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

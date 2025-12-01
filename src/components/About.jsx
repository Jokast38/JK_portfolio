import React from "react";
import "../styles/About.css";
import aboutImg from "../assets/images/about.jpg"; // ⚠ remplace par ton image
import cvFile from "../assets/CV/K-Jokast-v2-l.png"; // ⚠ adapte le chemin

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* LEFT TEXT */}
        <div className="about-text">
          <h2 className="about-title">À propos</h2>

          <p className="about-description">
            Développeur Fullstack passionné et créatif, j'aime transformer des idées en solutions digitales modernes, performantes et intuitives.
            Curieux, rigoureux et toujours en quête de progression, je conçois des applications adaptées aux besoins métiers,
            en conciliant qualité technique et vision produit.
          </p>

          <p className="about-description">
            Habitué aux défis, autant sur un terrain de basket que dans un projet complexe,
            j’aborde chaque mission avec détermination, esprit d’équipe et sens du résultat.
            J’accompagne mes clients et partenaires avec une approche orientée performance,
            architecture fiable et expérience utilisateur soignée.
          </p>


          <a href={cvFile} download className="about-btn">
            Télécharger mon CV
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image-wrapper">
          <img src={aboutImg} alt="about illustration" className="about-image" />
        </div>

      </div>
    </section>
  );
};

export default About;

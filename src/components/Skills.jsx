import React from "react";
import "../styles/Skills.css";
import { FaCode, FaHandSparkles, FaMobile, FaServer, FaStar, FaTools } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 id ="skills-section" className="skills-title">Compétences</h2>

      <div className="skills-grid">

        {/* ---------- FRONT END ---------- */}
        <div className="skill-card">
          <FaCode className="skill-icon" />
          <h3>Front End</h3>

          <div className="skill-bar">
            <span>HTML / CSS</span>
            <div className="bar"><div style={{ width: "95%" }}></div></div>
          </div>

          <div className="skill-bar">
            <span>JavaScript</span>
            <div className="bar"><div style={{ width: "85%" }}></div></div>
          </div>

          <div className="skill-bar">
            <span>React JS / Vite </span>
            <div className="bar"><div style={{ width: "80%" }}></div></div>
          </div>
          <div className="skill-bar">
            <span>Next JS</span>
            <div className="bar"><div style={{ width: "80%" }}></div></div>
          </div>
        </div>

        {/* ---------- BACK END ---------- */}
        <div className="skill-card">
          <FaServer className="skill-icon" />
          <h3>Back End</h3>

          <div className="skill-bar">
            <span>Node JS</span>
            <div className="bar"><div style={{ width: "75%" }}></div></div>
          </div>

          <div className="skill-bar">
            <span>PHP / Symfony</span>
            <div className="bar"><div style={{ width: "70%" }}></div></div>
          </div>

          <div className="skill-bar">
            <span>Python / Flask / Django / Fast API</span>
            <div className="bar"><div style={{ width: "90%" }}></div></div>
          </div>

          <div className="skill-bar">
            <span>MySQL / PostgreSQL</span>
            <div className="bar"><div style={{ width: "85%" }}></div></div>
          </div>


        </div>

        {/* ---------- DEVOPS / AUTRES ---------- */}
        <div className="skill-card">
          <FaTools className="skill-icon" />
          <h3>DevOps & Outils</h3>

          <div className="skill-bar">
            <span>Git / GitHub</span>
            <div className="bar"><div style={{ width: "90%" }}></div></div>
          </div>

          <div className="skill-bar">
            <span>Docker</span>
            <div className="bar"><div style={{ width: "65%" }}></div></div>
          </div>

          <div className="skill-bar">
            <span>CI / CD</span>
            <div className="bar"><div style={{ width: "60%" }}></div></div>
          </div>
        </div>

         {/* ---------- MOBILES ---------- */}
        <div className="skill-card">
          <FaMobile className="skill-icon" />
          <h3>Dev Mobiles</h3>

          <div className="skill-bar">
            <span>React Native</span>
            <div className="bar"><div style={{ width: "80%" }}></div></div>
          </div>

          <div className="skill-bar">
            <span>Flutter</span>
            <div className="bar"><div style={{ width: "75%" }}></div></div>
          </div>
        </div>

         {/* ---------- IA / AUTRES ---------- */}
        <div className="skill-card">
          <FaHandSparkles className="skill-icon" />
          <h3>IA</h3>

          <div className="skill-bar">
            <span>n8n</span>
            <div className="bar"><div style={{ width: "70%" }}></div></div>
          </div>

          <div className="skill-bar">
            <span>Open API</span>
            <div className="bar"><div style={{ width: "70%" }}></div></div>
          </div>

          <div className="skill-bar">
            <span>LLM / NLP</span>
            <div className="bar"><div style={{ width: "70%" }}></div></div>
          </div>
        </div>

          {/* ---------- METHODOLOGIES ---------- */}
        <div className="skill-card">
          <FaStar className="skill-icon" />
          <h3>Méthodologies</h3>

          <div className="skill-bar">
            <span>Agile / Scrum</span>
            <div className="bar"><div style={{ width: "85%" }}></div></div>
          </div>

          <div className="skill-bar">
            <span>Test Driven Development (TDD)</span>
            <div className="bar"><div style={{ width: "75%" }}></div></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;

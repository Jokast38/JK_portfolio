import React, { useState } from "react";
import Slider from "react-slick";
import projetData from "../assets/projets";
import "../styles/Projects.css";
import { FaStackOverflow, FaGithub } from "react-icons/fa";

const Projects = () => {
  const [active, setActive] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    dots: true,
    beforeChange: (_, next) => setActive(next),
    responsive: [
      {
        breakpoint: 900, // TABLETTE
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px"
        }
      },
      {
        breakpoint: 600, // PETIT TABLETTE / GRAND MOBILE
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px"
        }
      },
      {
        breakpoint: 480, // SMARTPHONE
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px"
        }
      }
    ]
  };


  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title"> <FaStackOverflow /> Projets Phares</h2>

      <div className="projects-slider-container">
        <Slider {...settings}>
          {projetData.map((projet, index) => (
            <div key={index} className="project-card-wrapper">

              <div className={`project-card ${active === index ? "active" : ""}`}>
                <img src={projet.image} alt={projet.title} className="project-image" />

                <div className="project-info">
                  <h3>{projet.title}</h3>
                  <p>{projet.description}</p>

                  <div className="project-actions">
                    {projet.link && (
                      <a href={projet.link} target="_blank" rel="noopener noreferrer" className="project-btn">
                        Visiter
                      </a>
                    )}
                    {projet.github && (
                      <a
                        href={projet.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="project-github-icon" />
                      </a>
                    )}

                  </div>
                </div>
              </div>

            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;

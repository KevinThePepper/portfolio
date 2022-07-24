import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSlider } from "../sliderProps";
import PortfolioModal from "./popup/PortfolioModal";

const projectData = {
  projects: [
    {
      title: "myGOLO Customer Health Portal",
      company: "GOLO, LLC",
      link: "https://www.golo.com",
      tasks: [
        "Developed interactive assessments tailored to each customer",
        "Manages customer health data to create goals and measure progress",
        "Integration with SalesForce, Shopify, and other third-party applications"
      ],
      skills: [
        "Liquid",
        "React",
        "NestJS",
        "NodeJS",
        "NodeJS",
        "NodeJS",
        "NodeJS",
        "NodeJS",
        "HTML",
        "CSS",
        "SCSS",
        "JavaScript",
      ]
    },
    {
      title: "myGOLO Metabolic Health Assessment",
      company: "GOLO, LLC",
      startYear: "2021",
      endYear: "2022",
      tasks: [
        "Developed interactive assessments",
        "Did something else",
        "Did another thing"
      ],
      skills: [
        "Liquid",
        "React",
        "NestJS"
      ]
    },
    {
      title: "myGOLO Customer Health Portal",
      company: "GOLO, LLC",
      link: "https://www.golo.com",
      tasks: [
        "Developed interactive assessments tailored to each customer",
        "Manages customer health data to create goals and measure progress",
        "Integration with SalesForce, Shopify, and other third-party applications"
      ],
      skills: [
        "Liquid",
        "React",
        "NestJS",
        "NodeJS",
        "NodeJS",
        "NodeJS",
        "NodeJS",
        "NodeJS",
        "HTML",
        "CSS",
        "SCSS",
        "JavaScript",
      ]
    },
    {
      title: "myGOLO Customer Health Portal",
      company: "GOLO, LLC",
      link: "https://www.golo.com",
      tasks: [
        "Developed interactive assessments tailored to each customer",
        "Manages customer health data to create goals and measure progress",
        "Integration with SalesForce, Shopify, and other third-party applications"
      ],
      skills: [
        "Liquid",
        "React",
        "NestJS",
        "NodeJS",
        "NodeJS",
        "NodeJS",
        "NodeJS",
        "NodeJS",
        "HTML",
        "CSS",
        "SCSS",
        "JavaScript",
      ]
    },
    {
      title: "myGOLO Customer Health Portal",
      company: "GOLO, LLC",
      link: "https://www.golo.com",
      tasks: [
        "Developed interactive assessments tailored to each customer",
        "Manages customer health data to create goals and measure progress",
        "Integration with SalesForce, Shopify, and other third-party applications"
      ],
      skills: [
        "Liquid",
        "React",
        "NestJS",
        "NodeJS",
        "NodeJS",
        "NodeJS",
        "NodeJS",
        "NodeJS",
        "HTML",
        "CSS",
        "SCSS",
        "JavaScript",
      ]
    },
    {
      title: "myGOLO Customer Health Portal",
      company: "GOLO, LLC",
      link: "https://www.golo.com",
      tasks: [
        "Developed interactive assessments tailored to each customer",
        "Manages customer health data to create goals and measure progress",
        "Integration with SalesForce, Shopify, and other third-party applications"
      ],
      skills: [
        "Liquid",
        "React",
        "NestJS",
        "NodeJS",
        "NodeJS",
        "NodeJS",
        "NodeJS",
        "NodeJS",
        "HTML",
        "CSS",
        "SCSS",
        "JavaScript",
      ]
    },
    {
      title: "myGOLO Customer Health Portal",
      company: "GOLO, LLC",
      link: "https://www.golo.com",
      tasks: [
        "Developed interactive assessments tailored to each customer",
        "Manages customer health data to create goals and measure progress",
        "Integration with SalesForce, Shopify, and other third-party applications"
      ],
      skills: [
        "Liquid",
        "React",
        "NestJS",
        "NodeJS",
        "NodeJS",
        "NodeJS",
        "NodeJS",
        "NodeJS",
        "HTML",
        "CSS",
        "SCSS",
        "JavaScript",
      ]
    },
  ]
}

const Projects = () => {
  return (
    <Fragment>
      <div className="edrea_tm_section projects hidden animated" id="projects">
        <section className="section_inner">
          <div className="edrea_tm_about">
            <div className="left projects__title">
              <h2>Projects</h2>
            </div>
            <div className="right projects__listings">
              {projectData.projects.map((project, index) => (
                <Fragment key={index}>
                  <div key={index} className="projects__listing">
                    <h3 className="projects__listing__title">{project.title}</h3>
                    {project.company && <p className="projects__listing__company">{project.company}</p>}
                    <ul className="projects__listing__tasks">
                      {project.tasks.map((task, index) => (
                        <li key={index} className="projects__listing__task">
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                    {project.skills && (
                      <div className="projects__listing__skills">
                        {project.skills.map((skill, index) => (
                          <span className="projects__listing__skills__item">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};
export default Projects;

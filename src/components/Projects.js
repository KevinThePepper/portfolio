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
        "NestJS",
        "NodeJS",
        "HTML",
        "CSS",
        "SCSS",
        "ReactJS",
        "Redux",
        "JavaScript",
        "TypeScript",
        "Webpack",
        "Babel",
        "GraphQL"
      ]
    },
    {
      title: "Cadence",
      company: "GOLO, LLC",
      tasks: [
        "Automated customized task management server",
        "Uses Selenium and requests to test web pages and APIs",
        "Automates test orders and website snapshots",
        "Parses status pages and webhooks for service uptime",
        "Notifies admin team of outages within 1 minute of failed service"
      ],
      skills: [
        "Python3",
        "Selenium",
        "FastAPI",
        "Heroku",
        "GraphQL",
        "REST"
      ]
    },
    {
      title: "Shopify Process API",
      tasks: [
        "API layer between Shopify and external applications",
        "Customized functionality of Shopify Admin and Storefront APIs within a centralized source",
        "Process layer used as an intermediary API to transition applications away from Shopify",
        "Custom GraphQL pagination using relay cursor connection specification"
      ],
      skills: [
        "NestJS",
        "NodeJS",
        "TypeScript",
        "JavaScript",
        "GraphQL",
        "REST",
        "Postgres",
        "Redis"
      ]
    },
    {
      title: "SRCA Inventory Portal",
      company: "Saudi Red Crescent Authority (SRCA)",
      tasks: [
        "Manage inventory of medical and office supplies",
        "Checks volunteers and medical supplies in and out via QR codes",
        "Tracks status of supplies to proactively restock and maintain"
      ],
      skills: [
        "Django",
        "Python3",
        "REST",
        "Jinja",
        "HTML",
        "SCSS",
        "JavaScript"
      ]
    },
    {
      title: "Smart MOOCs - Difficult Concepts",
      company: "University of Illinois Urbana-Champaign",
      tasks: [
        "Website used to view and track click streams on MOOCs",
        "Used click-stream data in ML algorithm to determine difficulty of topics",
        "Feedback sent back to professors to adjust lectures to accomodate for more difficult topics"
      ],
      skills: [
        "ReactJS",
        "NextJS",
        "Redux",
        "REST",
        "Postgres",
        "NLP"
      ]
    },
    {
      title: "Business Aviation (BA) Forge",
      company: "Honeywell",
      link: "https://www.honeywellforge.ai/",
      tasks: [
        "Customer CMS for managing aircraft assets and analytics",
        "Connect assets, people and processes to deliver a system of record of business operations",
        "A combination of analytics and machine learning to proactively monitor aircraft assets",
        "Customer-specific interface that changes based on services paid for",
        "Integrate dashboard with teams and proprietary applications across the company"
      ],
      skills: [
        "ReactJS",
        "Redux",
        "NestJS",
        "NodeJS",
        "JavaScript",
        "TypeScript",
        "REST",
        "GraphQL",
        "FastAPI",
        "Python3"
      ]
    },
    // {
    //   title: "Traffic Parsing Module (TPM)",
    //   company: "Honeywell",
    //   tasks: [
    //   ],
    //   skills: [
    //   ]
    // },
    // {
    //   title: "Imagery of Natural Systems (IONS)",
    //   company: "Planet.com",
    //   tasks: [
    //   ],
    //   skills: [
    //   ]
    // },
    // {
    //   title: "CodeDevils Website",
    //   company: "CodeDevils",
    //   link: "https://www.codedevils.org",
    //   tasks: [
    //   ],
    //   skills: [
    //   ]
    // },
    // {
    //   title: "FieldDay ",
    //   company: "CodeDevils",
    //   link: "https://www.codedevils.org",
    //   tasks: [
    //   ],
    //   skills: [
    //   ]
    // },
  ]
}

const Projects = () => {
  return (
    <Fragment>
      <div className="edrea_tm_section hidden animated" id="projects">
        <section className="section_inner projects">
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
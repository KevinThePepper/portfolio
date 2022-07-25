import { Fragment, useState } from "react";

import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "Kevin",
  lastName: "Shelley",
  bithday: "1994.07.19",
  address: "Phoenix, AZ",
  phn: "602-359-3022",
  email: "kevin.shelley@pm.me",
  serviceLists: [
    "Website Development",
    "Web APIs",
    "Distributed Systems",
    "Infrastructure",
    "Shared Web Hosting",
    "Accessibility",
    "SEO",
  ],
  skills: {
    programming: [
      { name: "Typescript", value: "95" },
      { name: "JavaScript", value: "95" },
      { name: "React", value: "90" },
      { name: "Python", value: "90" },
      { name: "HTML", value: "90" },
      { name: "CSS", value: "90" },
      { name: "SASS", value: "80" },
      { name: "NextJS", value: "70" },
      { name: "Postgres", value: "70" },
      { name: "MySQL", value: "70" },
      { name: "Rust", value: "60" },
      { name: "AWS", value: "50" },
      { name: "C/C++", value: "40" },
      { name: "DynamoDB", value: "30" },
    ],
  },
  education: [
    {
      year: "2015 - 2020",
      unv: "Arizona State University",
      degree: "B.S. Software Engineering",
    },
    { year: "2015-2017", unv: "Chandler-Gilbert Community College" },
  ],
  working: [
    {
      year: "2021 - Present",
      company: "GOLO, LLC",
      deg: "Lead Software Engineer",
    },
    {
      year: "2021 - Present",
      company: "UIUC - Smart MOOCs",
      deg: "Software Engineer",
    },
    { year: "2020 - 2021", company: "Planet.com", deg: "Software Engineer" },
    {
      year: "2018 - 2021",
      company: "Honeywell Connected Enterprise",
      deg: "Software Engineer",
    },
    { year: "2018 - 2020", company: "CodeDevils", deg: "Webmaster" },
    {
      year: "2017 - 2018",
      company: "Honeywell Aerospace",
      deg: "Systems Engineer",
    },
  ],
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      />
      <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <img src="/img/thumbs/1-1.jpg" alt="" />
                <div className="main" data-img-url="/img/about/profile.jpg" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
              <div className="text">
                <p>
                  My name is <span>Kevin Shelley.</span>I am software engineer
                  specializing in full stack web development with 10 years of
                  industry experience in creating, maintaining, and optimizing
                  projects. My passion is in designing and building innovative
                  software solutions for web applications that are user-driven
                  and accessible to anyone regardless of geolocation or OS
                  preference. This focus on efficiency and accessibility is
                  reflected in multi-million dollar projects that I developed
                  while working for Fortune 100 tech companies such as
                  Honeywell, as well as smaller private businesses such as GOLO.
                </p>
                <p>
                  I am excited to use my years of experience in web development
                  to learn new technology and continue to broaden my skill set.
                </p>
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;

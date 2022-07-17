import { Fragment, useState } from 'react';
import AnimatedText from './AnimatedText';
import AboutPopup from './popup/AboutPopup';

const aboutData = {
  firstName: 'Kevin',
  lastName: 'Shelley',
  bithday: '1994.07.19',
  address: 'Phoenix, AZ',
  phn: '602-359-3022',
  email: 'kevin.shelley@pm.me',
  serviceLists: [
    'Website Development',
    'Distributed Systems',
    'SEO',
    'Infrastructure',
    'Shared Web Hosting',
  ],
  skills: {
    programming: [
      { name: 'Typescript', value: '95' },
      { name: 'React', value: '90' },
      { name: 'Python', value: '90' },
      { name: 'NextJS', value: '80' },
      { name: 'Rust', value: '60' },
    ],
    // language: [
    //   { name: "English", value: "95" },
    //   { name: "Russian", value: "80" },
    //   { name: "Arabic", value: "90" },
    // ],
  },
  education: [
    {
      year: '2015 - 2020',
      unv: 'Arizona State University',
      degree: 'B.S. Software Engineering',
    },
    { year: '2015-2017', unv: 'Chandler-Gilbert Community College' },
  ],
  working: [
    {
      year: '2021 - Present',
      company: 'GOLO, LLC',
      deg: 'Lead Software Engineer',
    },
    {
      year: '2021 - Present',
      company: 'UIUC - Smart MOOCs',
      deg: 'Software Engineer',
    },
    { year: '2020 - 2021', company: 'Planet.com', deg: 'Software Engineer' },
    {
      year: '2018 - 2021',
      company: 'Honeywell Connected Enterprise',
      deg: 'Software Engineer',
    },
    { year: '2018 - 2020', company: 'CodeDevils', deg: 'Webmaster' },
    {
      year: '2017 - 2018',
      company: 'Honeywell Aerospace',
      deg: 'Systems Engineer',
    },
  ],
  // partnersLogos: [
  //   "img/partners/1.png",
  //   "img/partners/2.png",
  //   "img/partners/3.png",
  //   "img/partners/4.png",
  // ],
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
                  {aboutData.firstName}{' '}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
              <div className="text">
                <p>
                  My name is <span>Kevin Shelley.</span> I am a software
                  engineer with experience designing and implementing
                  distributed systems. My primary skill set is in front-end
                  development. I have developed multiple large-scale
                  applications using React, NextJS, Shopify and Django. I also
                  have experience designing back-end systems, implementing
                  NodeJS, NestJS, Django and FastAPI applications connecting to
                  services using Redis, Postgres, REST, GraphQL and SOAP.
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

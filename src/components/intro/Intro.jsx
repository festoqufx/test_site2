import React, { useEffect } from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/Raven.png";
import "./intro.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Intro = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <section data-aos="zoom-in-up" id="about">
      <p>&nbsp;</p>
      <h2>About Me</h2>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src={ME}
              alt=""
              style={{ borderradius: "1rem" }}
              className="img_raven"
            />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>10+ years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            10+ years experienced Front End Developer with hands-on experience
            in identifying web-based user interactions along with designing and
            implementing highly-responsive user interface components by
            deploying React concepts. Proficient in translating designs and
            wireframes into high-quality code, and writing application interface
            code via JavaScript and React JS workflows. Adept at monitoring and
            maintaining frontend performance and troubleshooting and debugging
            the same to bolster overall performance.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        <div className="clearfix"></div>
      </div>
    </section>
  );
};

export default Intro;

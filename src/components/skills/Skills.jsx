import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section id="Skills">
      <div className="content_box">
        <div className="profile-skills">
          <div className="cntnt_box">
            <input type="checkbox" id="sk1" />
            <div className="white_background">&nbsp;</div>
            <label htmlFor="sk1"></label>
            <ul className="skills skills1">
              <li className="sk-cms">
                <span>CMS</span>
              </li>
              <li className="sk-dtb">
                <span>UI/UX</span>
              </li>
              <li className="sk-dis">
                <span>Design</span>
              </li>
              <li className="sk-pro">
                <span>Programming</span>
              </li>
              <li className="sk-ani">
                <span>Animation</span>
              </li>
              <li className="more">
                <input type="checkbox" id="more-con" />
                <label htmlFor="more-con"></label>
                <div>
                  <span>PHOTO</span>
                  <span>API</span>
                  <span>MAPS</span>
                  <span>VIDEO</span>
                  <span>CHARTS</span>
                  <span>RWD</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="cntnt_box">
            <input type="checkbox" id="sk2" />
            <div className="white_background">&nbsp;</div>
            <label htmlFor="sk2"></label>
            <ul className="skills skills2">
              <li className="sk-gim">
                <span>Figma</span>
              </li>
              <li className="sk-ado">
                <span>Adobe&nbsp;CS</span>
              </li>
              <li className="sk-not">
                <span>GIT</span>
              </li>
              <li className="sk-tri">
                <span>AEM</span>
              </li>
              <li className="sk-wor">
                <span>Wordpress</span>
              </li>
              <li className="more">
                <input type="checkbox" id="more-pro" />
                <label htmlFor="more-pro"></label>
                <div>
                  <span>Sitefinity</span>
                  <span>Vercel</span>
                  <span>Netlify</span>
                  <span>JIRA</span>
                  <span>FILEZILLA</span>
                  <span>GIT</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="cntnt_box">
            <input type="checkbox" id="sk3" />
            <div className="white_background">&nbsp;</div>
            <label htmlFor="sk3"></label>
            <ul className="skills skills3">
              <li className="sk-css">
                <span>REACT</span>
              </li>
              <li className="sk-htm">
                <span>NODE</span>
              </li>
              <li className="sk-jav">
                <span>JS</span>
              </li>
              <li className="sk-php">
                <span>PHP</span>
              </li>
              <li className="sk-sql">
                <span>SQL</span>
              </li>
              <li className="more">
                <input type="checkbox" id="more-len" />
                <label htmlFor="more-len"></label>
                <div>
                  <span>JS</span>
                  <span>Laravel</span>
                  <span>CSS</span>
                  <span>JSON</span>
                  <span>HTML5</span>
                  <span>SASS</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="clearfix"></div>
    </section>
  );
};

export default Skills;

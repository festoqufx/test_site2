import React, { useEffect } from "react";
import { CgProfile } from "react-icons/cg";
// import { VscFolderLibrary } from "react-icons/vsc";
// import ME from "../../assets/Raven.png";
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
      <p>&nbsp;</p>
      <p>&nbsp;</p>



	  <article className="wrapper_intro">
      <div className="row_intro">

        <div className="card col col-auto splitContent">
          <div className="container_intro">

            <div className="row_intro">
   
              <div className="col col-auto">
                <div className="cardSect">
                  <div className="item">
                    <div className="head">
                      <div className="icon">
          
                      </div>
                   
                    </div>
                    <div className="content">
						<div id="box_cube">
						<div className="face1 color1">
            <img src="./face/1.png" alt="" />
					</div>
					<div className="face2 color1">
						<img src="./face/2.png" alt="" />
					</div>
					<div className="face3 color2">
						<img src="./face/3.png" alt="" />
					</div>
					<div className="face4 color2">
						<img src="./face/4.png" alt="" />
					</div>
					<div className="face5 color3">
						<img src="./face/5.png" alt="" />
					</div>
					<div className="face6 color3">
						<img src="./face/6.png" alt="" />
					</div>
						</div>
					
					</div>
                  </div>
                </div>
              </div>
        
              <div className="col col-auto" id="dividerWrap">
                <div className="contentDivider">
                  <div className="dividedText">
					<CgProfile />
                  </div>
                </div>
              </div>
      
              <div className="col col-auto">
                <div className="cardSect">
                  <div className="item">
                    <div className="head">
                      <div className="icon">
                  
                      </div>
                   
                    </div>
                    <div className="content"> 
						<p>
						10+ years experienced Front End Developer with hands-on experience in identifying web-based user interactions along with designing and implementing highly-responsive user interface components by deploying React concepts. Proficient in translating designs and wireframes into high-quality code, and writing application interface code via JavaScript and React JS workflows. Adept at monitoring and maintaining frontend performance and troubleshooting and debugging the same to bolster overall performance.
					</p>

					 </div>
                  </div>
                </div>
              </div>
              
            </div>
            
          </div>
         
        </div>
		</div>
  
    </article>


      <p>&nbsp;</p>



    
    </section>
  );
};

export default Intro;

import React from "react";
import { CgProfile } from "react-icons/cg";
import "./intro.css";
const Intro = () => {
  return (
    <section data-aos="zoom-in-up" id="about">
		    <div className="clearfix"></div>
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
I'm Black Raven, a Web Developer, UI/UX Designer, and Digital Creator with over 16 years of experience building responsive websites, web applications, and digital products. With a Bachelor of Science in Information Technology, I specialize in front-end and back-end development, UI/UX design, branding, and modern web technologies.
</p><br /><br />
	<p>
AI and digitally fluent, I leverage Claude Code, GitHub Copilot, OpenAI Codex, Cursor, Cline, and AntiGravity to accelerate development, build automation tools, improve code quality, and deliver scalable, high-performance solutions.
</p><br /><br />
	<p>
Passionate about innovation and continuous learning, I combine creativity, technology, and AI-powered development to transform ideas into exceptional digital experiences.
</p><br /><br />
	


					 </div>
                  </div>
                </div>
              </div>
              
            </div>
            
          </div>
         
        </div>
		</div>
  
    </article>

    <div className="clearfix"></div>
      <p>&nbsp;</p>



    
    </section>
  );
};

export default Intro;

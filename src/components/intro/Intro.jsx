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
Welcome to the digital realm where creativity meets innovation. I'm Black Raven, a seasoned Web Developer, UI/UX Designer, and Digital Creator with over 16 years of experience building modern, user-centered digital experiences. Armed with a Bachelor of Science in Information Technology, I combine technical expertise, creative design, and AI-powered development to transform ideas into scalable, high-performing solutions.
</p>
	<p>
My journey began with a passion for pixel-perfect design and a curiosity for emerging technologies. Over the years, I have developed expertise in front-end and back-end web development, responsive web design, UI/UX, branding, content management systems, and digital product development. I enjoy creating intuitive user experiences that seamlessly blend aesthetics, functionality, accessibility, and performance.
</p>
	<p>
Today, I am AI and digitally fluent, leveraging modern AI-assisted development tools such as Claude Code, GitHub Copilot, OpenAI Codex, Cursor, Cline, and AntiGravity to accelerate development, improve code quality, build automation tools that streamline workflows, and rapidly prototype innovative solutions. By combining AI with modern engineering practices, I deliver software faster while maintaining high standards for quality, scalability, and maintainability.
</p>
	<p>
Beyond software development, I have extensive experience in branding, digital advertising, animation, image editing, and multimedia design. Whether designing engaging user interfaces, developing enterprise web applications, or creating compelling digital experiences, I approach every project with creativity, precision, and a commitment to continuous improvement.
</p>
	<p>
I believe great digital products are built through collaboration, thoughtful design, and continuous innovation. Every project is an opportunity to solve real-world problems, improve user experiences, and create meaningful value through technology.
</p>
	<p>
Based in Cavite, Philippines, I continue to explore emerging technologies, AI-powered development, automation, and modern software engineering practices to help businesses innovate and grow in an ever-evolving digital landscape.
</p>
	<p>
Whether you're looking to build a modern web application, enhance your digital presence, automate business processes, or bring your next idea to life, I'd be excited to collaborate with you.
</p>
	<p>
Let's build something exceptional—together.
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

    <div className="clearfix"></div>
      <p>&nbsp;</p>



    
    </section>
  );
};

export default Intro;

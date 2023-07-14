import React,{useEffect} from 'react'
import TagCloud from "TagCloud";
import "./tagcloud.css"

export default function Tagcloud() {
  useEffect(() => {
      const container = ".tagcloudanimation";
      const texts = [
		"HTML5",
        "CSS",
        "SASS",
		"NextJS",
        "PHP",
        "Laravel",
        "NodeJS",
		"Webpack",
        "Babel",
        "jQuery",
        "ES6",
        "Git",
        "GitHub",
		"BitBucket",
		"Netlify",
		"Vercel",
		"Wordpress",
		"Elementor",
		"WooCommerce",
		"SharePoint",
		"AEM",
		"Photoshop",
        "Illustrator",
        "After Effects",
        "InDesign",
		"Premiere Pro",
		"XD",
		"Audition",
		"Figma",
		"SharePoint",
		"Jira",
        "JavaScript",
        "React",
		"Vite",
        "NodeJS",
		"MySQL",
        "MongoDB",
        "Firebase",
        "Material UI",
        "Tailwindcss",
        "Bootstrap",
      ];

      const options = {
        radius: 360,
        maxSpeed: "fast",
        initSpeed: "normal",
        direction: 90,
        keep: true,
      };
      TagCloud(container, texts, options);
  }, []);

  return (
   <div className='tag_cloud'>
	<p>&nbsp;</p>
	<p>&nbsp;</p>
	<h5>The Skills I Have</h5>
      <h2>Skills</h2>
	  <p>&nbsp;</p>
        <div className='tagCloud_Container'>
          <span className="tagcloudanimation"></span>
        </div>
    </div>
  )
}

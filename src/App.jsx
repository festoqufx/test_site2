import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Interest from "./components/interest/Interest";
import Tagcloud from "./components/tagCloud/Tagcloud";
import Skills from "./components/skills/Skills";
import Gallery2 from "./components/gallery2/Gallery2";
import Portfolio from './components/portfolio/Portfolio';
import Timeline1 from "./components/timeline1/Timeline1";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Timeline1 />
	  <Portfolio />
      <Tagcloud />
      <Skills />
      {/* <Experience /> */}
      <Gallery2 />
      {/* <PhotoViewer/> */}
      <Interest />
   
      <Testimonials />
      <Contact />
      {/* <Map/> */}
      <Footer />
    </>
  );
};

export default App;

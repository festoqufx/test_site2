import React from "react";
import Contact from "./components/contact/Contact";
// import Experience from './components/experience/Experience';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
// import Map from './components/map/Map';
import Interest from "./components/interest/Interest";
import Tagcloud from "./components/tagCloud/Tagcloud";
import Skills from "./components/skills/Skills";
// import PhotoViewer from './components/photoViewer/PhotoViewer';
import Gallery2 from "./components/gallery2/Gallery2";
import Portfolio from './components/portfolio/Portfolio';
import Timeline1 from "./components/timeline1/Timeline1";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";

const App = () => {
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

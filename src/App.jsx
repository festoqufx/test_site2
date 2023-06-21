import React from 'react';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
// import Portfolio from './components/portfolio/Portfolio';
import Timeline1 from './components/timeline1/Timeline1';
import Testimonials from './components/testimonials/Testimonials';
import Topbar from './components/topbar/Topbar';


const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
	  <Timeline1 />
      <Experience />
      {/* <Portfolio /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App

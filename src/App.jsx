import React, { useEffect } from "react";
import AppCSS from "./App.module.css";
import Header from "./components/header";
import Home from "./components/home";
import Skills from "./components/skills";
import About from "./components/about";
import Projects from "./components/projects";
import ParticlesBackground from "./components/particlesBackground";
import ParticlesBackground2 from "./components/particlesBackground2";
import Contact from "./components/contact";

function App() {
  return (
    <div className={AppCSS.appMain}>
      <Header />
      <ParticlesBackground />
      <div className={AppCSS.homeContainer} id="home">
        <Home />
      </div>
      <ParticlesBackground2 />
      <div className={AppCSS.skillsContainer} id="skills">
        <Skills />
      </div>
      <div className={AppCSS.projectsContainer} id="projects">
        <Projects />
      </div>
      <div
        className={AppCSS.aboutMeContainer}
        id="about"

      >
        <About text="About me." />
      </div>
      <div
        className={AppCSS.ContactContainer}
        id="contact"

      >
        <Contact />
      </div>
    </div>
  );
}

export default App;

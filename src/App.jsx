import React from "react";
import AppCSS from "./App.module.css";
import Header from "./components/header";
import Home from "./components/home";
import Skills from "./components/skills";
import About from "./components/about";

function App() {
  return (
    <div className={AppCSS.appMain}>
      <Header />
      <div className={AppCSS.homeContainer}>
        <Home />
      </div>
      <div className={AppCSS.skillsContainer}>
        <Skills />
      </div>
      <div className={AppCSS.aboutMeContainer}>
        <About text="About me." />
      </div>
    </div>
  );
}

export default App;

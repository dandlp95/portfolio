import ProjectsCSS from "./projects.module.css";
import Button from "./button";
import ProjectButton from "./projectButton";
import Title from "./title";
import resume from "../assets/resume-daniel.pdf";
import internhuntImg from "../assets/images/internhunt.png";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Projects = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className={ProjectsCSS.projectsMain}>
      <Title title="Projects" />
      <div
        className={ProjectsCSS.projectsContainer}
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-anchor-placement="top-center"
        data-aos-offset="-300"
      >
        <div className={ProjectsCSS.project}>
          <div className={ProjectsCSS.projectVisual}>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://my-internhunt.herokuapp.com"
              >
                <img src={internhuntImg} alt="internhunt home page" />
              </a>
            </div>
          </div>
          <div>
            <div className={ProjectsCSS.projectHeaders}>
              <h2>Internhunt</h2>
              <h2>Networking App</h2>
            </div>
            <p>
              MERN Full Stack platform were students can help each other find
              internships and network.
            </p>
            <div className={ProjectsCSS.buttons}>
              <ProjectButton
                text="Live Application"
                link="https://my-internhunt.herokuapp.com"
              />
              <ProjectButton
                text="Source code"
                link="https://github.com/dandlp95/my-internhunt"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={ProjectsCSS.buttonContainer}>
        <a href={resume} download="resume-daniel">
          <Button text="Download Resume" />
        </a>
      </div>
    </div>
  );
};

export default Projects;

import ProjectsCSS from "./projects.module.css";
import Button from "./button";
import ProjectButton from "./projectButton";
import Title from "./title";
import resume from "../assets/resume-daniel.pdf";
import internhuntImg from "../assets//images/internhunt.png";

const Projects = () => {
  return (
    <div className={ProjectsCSS.projectsMain}>
      <Title title="Projects" />
      <div className={ProjectsCSS.projectsContainer}>
        <div className={ProjectsCSS.project}>
          <div>
            <a href="https://my-internhunt.herokuapp.com/">
              <img src={internhuntImg} alt="internhunt home page" />
            </a>
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
              <ProjectButton text="Live Application" />
              <ProjectButton text="Source code" />
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

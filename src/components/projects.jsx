import ProjectsCSS from "./projects.module.css";
import Button from "./button";
import Title from "./title";
import resume from "../assets/resume-daniel.pdf"

const Projects = () => {
  return (
    <div className={ProjectsCSS.projectsMain}>
      <Title title="Projects" />
      <div className={ProjectsCSS.buttonContainer}>
        <a href={resume} download="resume-daniel">
          <Button text="Download Resume" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
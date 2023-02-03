import ProjectButtonCSS from "./projectButton.module.css";
const ProjectButton = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <button className={ProjectButtonCSS.projectButton}>{props.text}</button>
    </a>
  );
};

export default ProjectButton;

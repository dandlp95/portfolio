import ProjectButtonCSS from "./projectButton.module.css";
const ProjectButton = (props) => {
  return (
    <button className={ProjectButtonCSS.projectButton}>{props.text}</button>
  );
};

export default ProjectButton;

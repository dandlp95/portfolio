import TitleCSS from "./title.module.css"

const Title = (props) => {
  return <h2 className={TitleCSS.title}>{props.title}</h2>;
};

export default Title;
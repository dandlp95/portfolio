import ButtonCSS from "./button.module.css";

const Button = (props) => {
  return (
    <button className={ButtonCSS.buttonMain} onClick={props.action}>
      {props.text}
    </button>
  );
};

export default Button;

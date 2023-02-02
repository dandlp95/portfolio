import ScrollerButtonCSS from "./scrollerButton.module.css";
import { AiOutlineArrowDown } from "react-icons/ai";

const ScrollerButton = () => {
  return (
    <button className={ScrollerButtonCSS.scrollerButton}>
      Check my work{" "}
      <span className={ScrollerButtonCSS.arrow}>
        <AiOutlineArrowDown />
      </span>
    </button>
  );
};

export default ScrollerButton;

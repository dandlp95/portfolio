import ScrollerButtonCSS from "./scrollerButton.module.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-scroll";

const ScrollerButton = () => {
  return (
    <Link to="skills" smooth={true} offset={-100} spy={true}>
      <button className={ScrollerButtonCSS.scrollerButton}>
        Check my work{" "}
        <span className={ScrollerButtonCSS.arrow}>
          <AiOutlineArrowDown />
        </span>
      </button>
    </Link>
  );
};

export default ScrollerButton;

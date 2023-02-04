import React from "react";
import HeaderCSS from "./header.module.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className={HeaderCSS.headerMain}>
      <ul>
        <li>
          <Link to="home" smooth={true} offset={-100} spy={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} offset={-100} spy={true}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={-100} spy={true}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-100} spy={true}>
            About
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-100} spy={true}>
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

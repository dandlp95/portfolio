import React from "react";
import HeaderCSS from "./header.module.css";

const Header = () => {
  return (
    <header className={HeaderCSS.headerMain}>
      <ul>
        <li>Home</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  );
};

export default Header;

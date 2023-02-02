import SkillsCSS from "./skills.module.css";
import {
  FaNode,
  FaHtml5,
  FaReact,
  FaMicrosoft,
  FaCss3,
  FaPython,
  FaGit,
} from "react-icons/fa";
import { SiMongodb, SiPostman } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { ImDatabase } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";

const Skills = () => {
  return (
    <div className={SkillsCSS.skillsMain}>
      <h2>Skills</h2>
      <div className={SkillsCSS.skillsFlexbox}>
        <div>
          <div className={SkillsCSS.skillsContainer}>
            <div className={SkillsCSS.icon}>
              <FaNode />
            </div>
            <div className={SkillsCSS.skillsName}>Node.js</div>
          </div>
          <div className={SkillsCSS.skillsContainer}>
            <div className={SkillsCSS.icon}>
              <FaHtml5 />
            </div>
            <div className={SkillsCSS.skillsName}>HTML</div>
          </div>
          <div className={SkillsCSS.skillsContainer}>
            <div className={SkillsCSS.icon}>
              <FaReact />
            </div>
            <div className={SkillsCSS.skillsName}>React.js</div>
          </div>
        </div>

        <div>
          <div className={SkillsCSS.skillsContainer}>
            <div className={SkillsCSS.icon}>
              <FaMicrosoft />
            </div>
            <div className={SkillsCSS.skillsName}>ASP.NET core</div>
          </div>
          <div className={SkillsCSS.skillsContainer}>
            <div className={SkillsCSS.icon}>
              <FaCss3 />
            </div>
            <div className={SkillsCSS.skillsName}>CSS</div>
          </div>
          <div className={SkillsCSS.skillsContainer}>
            <div className={SkillsCSS.icon}>
              <ImDatabase />
            </div>
            <div className={SkillsCSS.skillsName}>SQL</div>
          </div>
          <div className={SkillsCSS.skillsContainer}>
            <div className={SkillsCSS.icon}>
              <SiMongodb />
            </div>
            <div className={SkillsCSS.skillsName}>MongoDB</div>
          </div>
          <div className={SkillsCSS.skillsContainer}>
            <div className={SkillsCSS.icon}>
              <FaGit />
            </div>
            <div className={SkillsCSS.skillsName}>Git</div>
          </div>
        </div>

        <div>
          <div className={SkillsCSS.skillsContainer}>
            <div className={SkillsCSS.icon}>
              <IoLogoJavascript />
            </div>
            <div className={SkillsCSS.skillsName}>JavaScript</div>
          </div>
          <div className={SkillsCSS.skillsContainer}>
            <div className={SkillsCSS.icon}>
              <FaPython />
            </div>
            <div className={SkillsCSS.skillsName}>Python</div>
          </div>
          <div className={SkillsCSS.skillsContainer}>
            <div className={SkillsCSS.icon}>
              <SiPostman />
            </div>
            <div className={SkillsCSS.skillsName}>Postman</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

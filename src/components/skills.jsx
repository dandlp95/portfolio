import SkillsCSS from "./skills.module.css";
import {
  FaNode,
  FaHtml5,
  FaReact,
  FaMicrosoft,
  FaCss3,
  FaPython,
} from "react-icons/fa";
import { SiMongodb, SiPostman } from "react-icons/si";
import { ImDatabase } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import { DiGit } from "react-icons/di";
import Title from "./title";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className={SkillsCSS.skillsMain}>
      <Title title="Skills" />
      <div className={SkillsCSS.skillsFlexbox}>
        <div>
          <div
            className={SkillsCSS.skillsContainer}
            data-aos="fade"
            data-aos-delay="100"
            data-aos-easin="ease-in-out"
          >
            <div className={SkillsCSS.icon}>
              <FaNode />
            </div>
            <div className={SkillsCSS.skillsName}>Node.js</div>
          </div>
          <div
            className={SkillsCSS.skillsContainer}
            data-aos="fade"
            data-aos-delay="100"
            data-aos-easin="ease-in-out"
          >
            <div className={SkillsCSS.icon}>
              <FaHtml5 />
            </div>
            <div className={SkillsCSS.skillsName}>HTML</div>
          </div>
          <div
            className={SkillsCSS.skillsContainer}
            data-aos="fade"
            data-aos-delay="400"
            data-aos-easin="ease-in-out"
          >
            <div className={SkillsCSS.icon}>
              <FaReact />
            </div>
            <div className={SkillsCSS.skillsName}>React.js</div>
          </div>
        </div>

        <div>
          <div
            className={SkillsCSS.skillsContainer}
            data-aos="fade"
            data-aos-delay="750"
            data-aos-easin="ease-in-out"
          >
            <div className={SkillsCSS.icon}>
              <FaMicrosoft />
            </div>
            <div className={SkillsCSS.skillsName}>ASP.NET core</div>
          </div>
          <div
            className={SkillsCSS.skillsContainer}
            data-aos="fade"
            data-aos-delay="900"
            data-aos-easin="ease-in-out"
          >
            <div className={SkillsCSS.icon}>
              <FaCss3 />
            </div>
            <div className={SkillsCSS.skillsName}>CSS</div>
          </div>
          <div
            className={SkillsCSS.skillsContainer}
            data-aos="fade"
            data-aos-delay="250"
            data-aos-easin="ease-in-out"
          >
            <div className={SkillsCSS.icon}>
              <ImDatabase />
            </div>
            <div className={SkillsCSS.skillsName}>SQL</div>
          </div>
          <div
            className={SkillsCSS.skillsContainer}
            data-aos="fade"
            data-aos-delay="300"
            data-aos-easin="ease-in-out"
          >
            <div className={SkillsCSS.icon}>
              <SiMongodb />
            </div>
            <div className={SkillsCSS.skillsName}>MongoDB</div>
          </div>
          <div
            className={SkillsCSS.skillsContainer}
            data-aos="fade"
            data-aos-offset="50"
            data-aos-delay="840"
            data-aos-easin="ease-in-out"
          >
            <div className={SkillsCSS.icon}>
              <DiGit />
            </div>
            <div className={SkillsCSS.skillsName}>Git</div>
          </div>
        </div>

        <div>
          <div
            className={SkillsCSS.skillsContainer}
            data-aos="fade"
            data-aos-delay="450"
            data-aos-easin="ease-in-out"
          >
            <div className={SkillsCSS.icon}>
              <IoLogoJavascript />
            </div>
            <div className={SkillsCSS.skillsName}>JavaScript</div>
          </div>
          <div
            className={SkillsCSS.skillsContainer}
            data-aos="fade"
            data-aos-delay="600"
            data-aos-easin="ease-in-out"
          >
            <div className={SkillsCSS.icon}>
              <FaPython />
            </div>
            <div className={SkillsCSS.skillsName}>Python</div>
          </div>
          <div
            className={SkillsCSS.skillsContainer}
            data-aos="fade"
            data-aos-delay="750"
            data-aos-easin="ease-in-out"
          >
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

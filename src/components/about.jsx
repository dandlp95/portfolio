import Title from "./title";
import AboutCSS from "./about.module.css";
import profileImg from "../assets/images/danieldlp.jpg";

const About = () => {
  return (
    <div className={AboutCSS.aboutMain}>
      <Title title="About me" />
      <div className={AboutCSS.aboutFlexbox}>
        <div>
          <img alt="daniel pfp" src={profileImg} />
        </div>
        <div>
          <p>
            Originally from Mexico, I immigrated to the USA to pursue higher
            education, and I recently graduated with a{" "}
            <span>B.S. in Software Engineering.</span> During my college education,
            I found a passion for frontend development and later on, Backend
            Development. I am a hardworking Full Stack Developer, fully
            committed to the philosophy of life-long learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

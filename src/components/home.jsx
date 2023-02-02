import HomeCSS from "./home.module.css";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className={HomeCSS.homeMain}>
      <div>
        <div>
          Hello, I am <span>Daniel.</span>
        </div>
        <div>I am a Full Stack Developer.</div>
        <TypeAnimation
          sequence={[
            "React.js",
            1000,
            ".NET Core",
            1000,
            "Node.js",
            1000,
            "SQL server",
            1000,
            "MongoDB",
            1000,
            "REST APIs",
            1000,
            "Postman.",
            1000,
          ]}
          speed={40} // Custom Speed from 1-99 - Default Speed: 40
          // style={{ fontSize: "2em" }}
          wrapper="div" // Animation will be rendered as a <span>
          repeat={0} // Repeat this Animation Sequence infinitely
        />
      </div>
    </div>
  );
};
export default Home;

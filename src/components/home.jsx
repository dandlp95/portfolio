import HomeCSS from "./home.module.css";
import ScrollerButton from "./scrollerButton";
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
            1500,
            ".NET Core",
            1500,
            "Node.js",
            1500,
            "SQL server",
            1500,
            "MongoDB",
            1500,
            "REST APIs",
            1500,
            "Postman.",
            1500,
          ]}
          speed={30}
          // style={{ fontSize: "2em" }}
          wrapper="div"
          repeat={0}
        />
      </div>
      <ScrollerButton />
    </div>
  );
};
export default Home;

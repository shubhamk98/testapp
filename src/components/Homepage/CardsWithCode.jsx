import HighlightText from "../Common/HighlightText";
import CodeBlocks from "./CodeBlocks";

const CardsWithCode = () => {
  return (
    <div className="mx-5 md:mx-36">
      <div>
        <CodeBlocks
          position={"lg:flex-row"}
          heading={
            <div className="text-3xl md:text-4xl font-semibold">
              Unlock Your <HighlightText text={"coding potential"} /> with our
              online courses
            </div>
          }
          subheading={
            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
          }
          ctabtn1={{
            text: "try it yourself",
            linkto: "/signup",
            active: true,
          }}
          ctabtn2={{ text: "learn more", linkto: "/login", active: false }}
          codeblock={`import express from "express";
          import cookieParser from "cookie-parser";
          import cors from "cors";

          const app = express();
          app.use(express.json());
          app.use(cookieParser());
          app.use(cors());

          app.get("/", (req, res) => {
          	return res.send("Your server is up and running....")
          });`}
          codeColor={"text-white"}
          backgroundGradient={<div className="codeblock1 absolute"></div>}
        />
      </div>

      <div className="-mt-6 md:mt-0">
        <CodeBlocks
          position={"lg:flex-row-reverse"}
          heading={
            <div className="text-3xl md:text-4xl font-semibold">
              Start <HighlightText text={"coding in seconds"} />
            </div>
          }
          subheading={
            "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
          }
          ctabtn1={{
            text: "Continue Lesson",
            linkto: "/signup",
            active: true,
          }}
          ctabtn2={{ text: "Learn More", linkto: "/login", active: false }}
          codeblock={`import React from "react"; 
            import CTAButton from "./Button";
            import TypeAnimation from "react-type";
            import { FaArrowRight } from "react-icons/fa";\n
            const Home = () => {\n
              return (
                <div>Home</div>
              )}\n
              export default Home;`}
          codeColor={"text-yellow-100"}
          backgroundGradient={<div className="codeblock2 absolute"></div>}
        />
      </div>
    </div>
  );
};

export default CardsWithCode;

import Banner from "../../assets/Images/banner.jpg";
import { Link } from "react-router-dom";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div>
      <div className="mx-auto flex flex-col  max-w-maxContent items-center text-white justify-between gap-8 mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-white text-center pr-2">
          Empower your future with coding skills
        </h2>

        <div>
          <h1 className="text-4xl -mt-4 bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
            Learn{" "}
            <TypeAnimation
              sequence={[
                "AI/ML",
                1100,
                "Web Dev",
                1100,
                "DSA",
                1100,
                "DevOps",
                1100,
              ]}
              style={{ fontSize: "2.25rem" }}
              repeat={Infinity}
            />
          </h1>
        </div>

        <p className=" w-[80%] text-center  md:text-md font-bold text-richblue-300 -mt-4">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </p>
        {/* Button */}
        <Link to={"/signup"}>
          <div className="m-auto flex flex-row items-center justify-center max-w-48 h-full cursor-pointer bg-yellow-50 text-richblack-900  rounded-md hover:scale-105 transition-all duration-200 gap-2 py-2 px-4">
            <p className="font-semibold">Get started Now</p>
            <IoArrowForwardCircleOutline className="text-xl" />
          </div>
        </Link>
      </div>

      {/* HeroImage */}
      <div className="mx-5 md:mx-36 overflow-hidden rounded my-8 lg:shadow-[5px_5px_rgba(168,109,247,0.4),_10px_10px_rgba(168,109,247,0.3),_15px_15px_rgba(168,109,247,0.2),_20px_20px_rgba(168,109,247,0.1),_25px_25px_rgba(168,109,247,0.05)]">
        <img src={Banner} alt="Hero" className="w-full bg-top" />
      </div>
    </div>
  );
};

export default HeroSection;

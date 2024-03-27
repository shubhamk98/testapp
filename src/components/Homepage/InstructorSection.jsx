import Instructor from "../../assets/Images/Instructor.png";
import HighlightText from "../Common/HighlightText";
import CtaButton from "../Common/CtaButton";




const InstructorSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-20 items-center">
      <div className="lg:w-[50%] w">
        <img
          src={Instructor}
          alt=""
          className="shadow-[0_20px_50px_rgba(8,_112,_184,_0.5)]"
        />
      </div>

      <div className="lg:w-[50%] flex gap-10 flex-col">
        <h1 className="lg:w-[50%] text-3xl md:text-4xl font-semibold ">
          Become an
          <HighlightText text={"Instructor"} />
        </h1>
        <p className="font-medium text-[16px] text-justify w-[90%] text-richblack-300">
          Instructors from around the world teach millions of students on
          StudyNotion. We provide the tools and skills to teach what you love.{" "}
        </p>
        <div className="w-fit">
          <CtaButton active={true} linkto={"/signup"} text={"Start Teaching Today"} />
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;

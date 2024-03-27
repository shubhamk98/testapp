import Logo1 from "../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../assets/Images/timelineImage.png";

const timeline = [
  {
    Logo: Logo1,
    heading: "Leadership",
    Description: "Fully committed to the success company",
  },
  {
    Logo: Logo2,
    heading: "Responsibility",
    Description: "Work effectively as part of a team",
  },
  {
    Logo: Logo3,
    heading: "Flexibility",
    Description: "The ability to switch is an important skills",
  },
  {
    Logo: Logo4,
    heading: "Solve the problem",
    Description: "Code your way to a solution",
  },
];

const TimelineSection = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-32 mb-20 items-center">
        <div className="w-full lg:w-[55%] flex flex-col gap-3">
          {timeline.map((element, index) => {
            return (
              <div className="flex flex-col lg:gap-3 " key={index}>
                <div className="flex gap-6" key={index}>
                  <div className="w-[52px] h-[52px] bg-white rounded md:rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                    <img src={element.Logo} alt=""/>
                  </div>
                  <div>
                    <h2 className="font-semibold text-[18px]">
                      {element.heading}
                    </h2>
                    <p className="text-base">{element.Description}</p>
                  </div>
                </div>

                <div
                  className={` hidden ${
                    timeline.length - 1 === index ? "hidden" : "lg:block"
                  }  h-10 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px] `}
                >
                  {" "}
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative w-fit h-fit shadow-caribbeangreen-200 shadow-[0px_0px_30px_0px]">
          <img
            src={timelineImage}
            alt="timelineImage"
            className="shadow-white  object-cover  h-[250px] md:h-[400px] lg:h-fit"
          />

          <div className="absolute left-[10%] lg:left-[50%] lg:bottom-0 -bottom-9 lg:translate-x-[-50%] lg:translate-y-[50%] bg-caribbeangreen-700 flex lg:flex-row flex-col text-white uppercase py-2 md:py-5 gap-4 lg:gap-0 lg:py-10">
            <div className="flex gap-5 items-center lg:border-r border-caribbeangreen-300 px-7 lg:px-14">
              <p className="text-2xl md:text-3xl font-bold w-[75px]"> 10 </p>
              <p className="text-caribbeangreen-100 text-xs md:text-sm w-[75px]">
                {" "}
                Years of Experience{" "}
              </p>
            </div>

            <div className="flex gap-5 items-center lg:px-14 px-7">
              <p className=" text-2xl md:text-3xl font-bold w-[75px]"> 250 </p>
              <p className="text-caribbeangreen-100 text-xs md:text-sm w-[75px]">
                {" "}
                Type of Courses{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimelineSection;

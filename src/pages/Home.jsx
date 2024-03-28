import CtaButton from "../components/Common/CtaButton";
import Footer from "../components/Common/Footer";
import HighlightText from "../components/Common/HighlightText";
import ReviewSlider from "../components/Common/ReviewSlider";
import CardsWithCode from "../components/Homepage/CardsWithCode";
import HeroSection from "../components/Homepage/HeroSection";
import InstructorSection from "../components/Homepage/InstructorSection";
import LearningLanguageSection from "../components/Homepage/LearningLanguageSection";
import TimelineSection from "../components/Homepage/TimelineSection";

const Home = () => {
  return (
    <div>
      {/* HeroSection */}
      <HeroSection />
      {/* Cards */}
      <div className="-mt-5 md:mt-28">
        <CardsWithCode />
      </div>


      {/* Small section */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="mx-5 md:mx-36  items-center gap-5 justify-center py-14">
          <div className=" flex flex-col lg:flex-row justify-between gap-5 lg:gap-10">
            <div className="text-3xl md:text-4xl font-semibold ">
              Get the Skills you need for a{" "}
              <HighlightText text={"Job that is in demand"} />
            </div>
            <div className="flex flex-col gap-7">
              The modern StudyNotion is the dictates its own terms. Today, to be
              a competitive specialist requires more than professional skills.
              <CtaButton text={"Learn More"} active={true} linkTo={"/signup"} />
            </div>
          </div>
          <div className="mt-20">
            <TimelineSection />
          </div>
          <div className="mt-20 md:mt-36">
            <LearningLanguageSection />
          </div>
        </div>
      </div>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <InstructorSection />
        <h1 className="text-center text-4xl font-semibold mt-8">
          {" "}
          Review from Other Learners{" "}
        </h1>
        <ReviewSlider />
      </div>

      <Footer />
    </div>
  );
};

export default Home;

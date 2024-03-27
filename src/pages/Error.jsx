import { TypeAnimation } from "react-type-animation";

const Error = () => {
  return (
    <div className=" text-white text-4xl font-semibold w-full min-h-[calc(100vh-3.5rem)] bg-richblack-900 m-auto text-center flex justify-center items-center">
      <TypeAnimation
        sequence={["Error 404: Page Not found :/", 500,]}
        style={{ fontSize: "2.25rem" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default Error;

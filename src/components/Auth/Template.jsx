/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import frameImg from "../../assets/Images/frame.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Template = ({ title, image, formType }) => {
  const { loading } = useSelector((state) => state.auth);

  return (
    <div className="grid place-items-center">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
            <h1 className="text-2xl  font-semibold text-richblack-5">
              {title}
            </h1>

            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>

          <div className="relative mx-auto w-11/12 max-w-[450px] md:mt-4 md:mx-0">
            <img
              src={frameImg}
              alt="Pattern"
              width={558}
              height={504}
              loading="lazy"
            />{" "}
            <img
              src={image}
              alt="Students"
              width={558}
              height={490}
              loading="lazy"
              className="absolute top-2 right-2 md:top-4 md:right-4 z-10"
            />{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default Template;

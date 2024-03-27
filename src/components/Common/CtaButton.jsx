/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CtaButton = ({ text, active, linkTo }) => {
  return (
    <div>
      <Link to={linkTo}>
        <button
          className={`rounded-md font-semibold px-4 py-2 
          ${active ? "bg-yellow-50 text-black" : "bg-richblack-800 text-white"}
          hover:scale-105 transition-all duration-200 text-sm md:text-base `}
        >
          {text}
        </button>
      </Link>
    </div>
  );
};

export default CtaButton;

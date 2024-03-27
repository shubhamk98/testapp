/* eslint-disable react/prop-types */
import * as Icons from "react-icons/vsc";
// import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

const SidebarLink = ({ text, icon, path }) => {
  const Icon = Icons[icon];
  const location = useLocation();
//   const dispatch = useDispatch();
  return (

    <NavLink
      to={path}
      className={`text-sm font-semibold 
      ${
        path === location.pathname
          ? "bg-yellow-800 text-yellow-50 "
          : "bg-opacity-0 text-richblack-300"
      } transition-all duration-200`}
    >
      <div className={`flex items-center gap-4 mb-4 ${
        path === location.pathname ? "border-b-2" : "" }  pb-2`}>
        <Icon className="text-lg" />
        <p>{text}</p>
      </div>
    </NavLink>
  );
};

export default SidebarLink;

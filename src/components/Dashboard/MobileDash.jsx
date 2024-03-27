import { useDispatch, useSelector } from "react-redux";
import { sidebarLinks } from "../../data/dashboard-links.js";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { setMenuToggle } from "../../slices/authSlice.js";

const MobileDash = () => {
  const { user } = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  const handleLinkClick = () => {
    dispatch(setMenuToggle()); 
  };


  return (
    <div>
      <div className="flex flex-row items-center gap-1">
        <p>Dashboard</p>
        <IoIosArrowDropdownCircle />
      </div>
      <div className="pt-2 pb-4 grid grid-rows-3 sm:grid-rows-1 grid-flow-col gap-2">
        {sidebarLinks.map((val) => {
          if (val.type && user?.accountType !== val.type) return null;
          return (
            <Link
              key={val.id}
              className="rounded-md bg-yellow-100 text-black  px-4 py-2  text-sm"
              to={val.path}
              onClick={handleLinkClick}
            >
              {val.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileDash;

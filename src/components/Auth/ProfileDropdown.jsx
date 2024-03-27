import { useRef, useState } from "react";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../services/operations/authApi";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import {useOnClickOutside} from "../../hooks/useOnClickOutside";

const ProfileDropdown = () => {
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null)


  useOnClickOutside(ref, () => setOpen(false))

  const handleButtonClick = (e) => {
    e.stopPropagation();
    setOpen((prevOpen) => !prevOpen)  };

  if (!user) return null;


  return (
    <button className="relative" onClick={handleButtonClick}>
      <div className="flex items-center gap-x-1 bg-richblack-600 px-1 md:px-2 py-1 rounded-full">
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-[30px] rounded-full object-cover"
        />
        <IoIosArrowDropdownCircle />
      </div>
      {open && (
        <div ref = {ref}
          className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800"
        >
          <Link to="/dashboard/my-profile" onClick={() => setOpen(false)}>
            <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
              <VscDashboard className="text-lg" />
              Dashboard
            </div>
          </Link>
          <div
            onClick={() => {
              dispatch(logout(navigate));
              setOpen(false);
            }}
            className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
          >
            <VscSignOut className="text-lg" />
            Logout
          </div>
        </div>
      )}
    </button>
  );
};

export default ProfileDropdown;

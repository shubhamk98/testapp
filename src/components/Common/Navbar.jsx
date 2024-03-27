import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import NavLinks from "../../data/navbar-links.js";
import CtaButton from "./CtaButton.jsx";
import { CgMenuRight } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { apiConnector } from "../../services/apiConnector.js";
import { categories } from "../../services/api.js";
import { ACCOUNT_TYPE } from "../../utils/constants";
import ProfileDropdown from "../Auth/ProfileDropdown.jsx";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { GiSchoolBag } from "react-icons/gi";
import MobileDash from "../Dashboard/MobileDash.jsx";
import { setMenuToggle } from "../../slices/authSlice.js";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { menuToggle } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCatalog = async () => {
    setLoading(true);
    try {
      const res = await apiConnector("GET", categories.CATEGORIES_API);
      setSubLinks(res.data.allCategorys);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (error) {
      console.log("Could not fetch Categories.", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCatalog();
  }, []);

  const location = useLocation();
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(setMenuToggle());
  };

  return (
    <div className="border-b-[1px] border-b-richblack-300 ">
      <nav className="flex  justify-between items-center py-3 px-3  md:px-8 ">
        <div className="flex items-center">
          <Link to={"/"}>
            <img src={Logo} alt="" className="h-8" />
          </Link>
        </div>

        <ul className="hidden md:flex text-richblack-25 gap-4">
          {NavLinks.map((val, index) => (
            <li key={index}>
              {val?.title === "Catalog" ? (
                <div className="flex flex-row items-center gap-1 cursor-pointer group relative">
                  <p>{val.title}</p>
                  <IoIosArrowDropdownCircle />
                  <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex translate-x-[-15%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-400 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                    {loading ? (
                      <div className="flex gap-3 flex-col">
                        <div className="animate-pulse bg-richblack-100 rounded h-4"></div>
                        <div className="animate-pulse bg-richblack-100 rounded h-4"></div>
                      </div>
                    ) : (
                      subLinks.map((val, key) => (
                        <Link
                          to={`/catalog/${val._id
                            .split(" ")
                            .join("-")
                            .toLowerCase()}`}
                          key={key}
                          className=" hover:bg-yellow-50 rounded-md px-3 py-3 font-semibold"
                        >
                          {val.name}
                        </Link>
                      ))
                    )}
                  </div>
                </div>
              ) : (
                <Link to={val?.path} onClick={toggleMenu}>
                  <p
                    className={`${
                      val?.path === location.pathname
                        ? "text-yellow-25"
                        : "text-richblack-25"
                    }`}
                  >
                    {val?.title}
                  </p>
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* NO USER */}
        {token === null && (
          <div className="hidden md:flex gap-4">
            <CtaButton linkTo={"/login"} text={"Login"} active={false} />
            <CtaButton linkTo={"/signup"} text={"Signup"} active={false} />
          </div>
        )}

        <div
          className={
            user ? "flex flex-row gap-2 justify-center items-center" : "hidden"
          }
        >
          {token !== null && <ProfileDropdown />}
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <GiSchoolBag className="text-2xl md:text-3xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-yellow-100 text-center text-xs font-bold text-richblack-700">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            {!menuToggle ? (
              <CgMenuRight className="h-6 w-6 text-richblack-25" />
            ) : (
              <CgClose className="h-6 w-6 text-richblack-25" />
            )}
          </button>
        </div>
        {/* Repeated code cause of jytify between */}
        {!user && (
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            {!menuToggle ? (
              <CgMenuRight className="h-6 w-6 text-richblack-25" />
            ) : (
              <CgClose className="h-6 w-6 text-richblack-25" />
            )}
          </button>
        )}
      </nav>

      {/* MOBILE */}
      {menuToggle && (
        <div className="lg:hidden top-16 right-0 w-full bg-richblack-600 z-50 transition ease-in-out delay-1500">
          <div className="bg-richblack-700 p-4 rounded-md shadow-md">
            <ul className="text-richblack-25 flex flex-col">
              {NavLinks.map((val, index) => (
                <li key={index}>
                  {val?.title !== "Catalog" ? (
                    <Link to={val?.path} onClick={toggleMenu}>
                      <p
                        className={`${
                          val?.path === location.pathname
                            ? "text-yellow-25 pb-4"
                            : "text-richblack-25 pb-4"
                        }`}
                      >
                        {val?.title}
                      </p>
                    </Link>
                  ) : (
                    <div
                      className={`${
                        val?.path === location.pathname
                          ? "text-yellow-25 "
                          : "text-richblack-25"
                      }`}
                    >
                      <p className="flex flex-row gap-1 items-center mb-2">
                        {val.title}
                        <IoIosArrowDropdownCircle />
                      </p>
                      <div className="pb-4  flex flex-row gap-2 items-center ">
                        {loading ? (
                          <div className="flex gap-3 flex-row">
                            <div className="animate-pulse bg-richblack-100 rounded-md px-6 py-3"></div>
                            <div className="animate-pulse bg-richblack-100 rounded-md px-6 py-3"></div>
                          </div>
                        ) : (
                          subLinks.map((val, key) => (
                            <Link
                              to={`/catalog/${val._id
                                .split(" ")
                                .join("-")
                                .toLowerCase()}`}
                              onClick={toggleMenu}
                              key={key}
                              className="rounded-md bg-yellow-100 text-black  px-4 py-2  text-sm"
                            >
                              {val.name}
                            </Link>
                          ))
                        )}
                      </div>
                    </div>
                  )}
                </li>
              ))}
              {user && <MobileDash />}
              {!user && (
                <div className="flex flex-row gap-4">
                  <CtaButton
                    linkTo={"/login"}
                    text={"Login"}
                    active={false}
                    onClick={toggleMenu}
                  />
                  <CtaButton
                    linkTo={"/signup"}
                    text={"Signup"}
                    active={false}
                    onClick={toggleMenu}
                  />
                </div>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {
  return (
    <div className="bg-richblack-800">
      <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
        <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
            <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">
              <img src={Logo} alt="" className="object-contain" />
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                {" "}
                Company{" "}
              </h1>

              <div className="flex flex-col gap-2">
                {["About", "Careers", "Affiliates"].map((val, i) => {
                  return (
                    <div
                      key={i}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={val.toLowerCase()}>{val}</Link>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-3 text-lg ">
                <FaFacebook className="hover:text-white" />{" "}
                <FaGoogle className="hover:text-white" />{" "}
                <FaTwitter className="hover:text-white" />{" "}
                <FaYoutube className="hover:text-white" />
              </div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                {" "}
                Resources{" "}
              </h1>
              <div className="flex flex-col gap-2 mt-2">
                {Resources.map((val, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={val.split(" ").join("-").toLowerCase()}>
                        {" "}
                        {val}{" "}
                      </Link>
                    </div>
                  );
                })}
              </div>

              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                {" "}
                Support{" "}
              </h1>
              <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
                <Link to={"/help-center"}>Help Center</Link>
              </div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                {" "}
                Plans{" "}
              </h1>
              <div className="flex flex-col gap-2 mt-2 text-[14px] cursor-pointer">
                {Plans.map((val, index) => (
                  <div key={index}>
                    <Link
                      to={val.split(" ").join("-").toLowerCase()}
                      className="hover:text-richblack-50 transition-all duration-200"
                    >
                      {" "}
                      {val}{" "}
                    </Link>
                  </div>
                ))}
              </div>

              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                {" "}
                Community{" "}
              </h1>
              <div className="flex flex-col gap-2 mt-2 text-[14px] cursor-pointer">
                {Community.map((val, index) => (
                  <div key={index}>
                    <Link
                      to={val.split(" ").join("-").toLowerCase()}
                      className="hover:text-richblack-50 transition-all duration-200"
                    >
                      {" "}
                      {val}{" "}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
            {FooterLink2.map((val, i) => {
              return (
                <div key={i} className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                  <h1 className="text-richblack-50 font-semibold text-[16px]">
                    {val.title}
                  </h1>

                  <div className="flex flex-col gap-2 mt-2">
                    {val.links.map((link, index) => {
                      return (
                        <div
                          key={index}
                          className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                        >
                          <Link to={link.link}>{link.title}</Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  pb-14 text-sm">
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row">
            <div className=" border-r border-richblack-700 cursor-pointer px-3">
              {BottomFooter.map((val, index) => (
                <div key={index}>
                  <Link
                    to={val.split(" ").join("-").toLowerCase()}
                    className="hover:text-richblack-50 transition-all duration-200"
                  >
                    {" "}
                    {val}{" "}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">By - Shubham kamboj</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

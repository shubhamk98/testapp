import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formattedDate } from "../../utils/formattedDate.js";
import { BiMessageSquareEdit } from "react-icons/bi";

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-row justify-between">
        <h1 className="mb-4 text md:text-2xl font-bold text-richblack-5">
          My Profile
        </h1>
        <div
          onClick={() => {
            navigate("/dashboard/settings");
          }}
        >
          <BiMessageSquareEdit className="text-2xl md:text-3xl text-yellow-50 cursor-pointer" />
        </div>
      </div>

      <div className="flex justify-between bg-richblack-800 p-2 my-4 md:p-6 lg:my-10 rounded-md max-w-screen">
        <div className="flex flex-row gap-x-4 lg:gap-8">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-16 md:w-24 rounded-full object-cover "
          />
          <div>
            <div className="flex flex-col gap-4 mt-4">
              <p className="text-md md:text-lg font-semibold text-richblack-5 ">
                {user?.firstName + " " + user?.lastName}
              </p>
              <p className="text-xm md:text-md text-richblack-300 break-all overflow-auto whitespace-normal">
                {user?.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2 my-4 md:p-6 lg:my-10 flex flex-col gap-y-4 md:gap-y-8 rounded-md border-[1px] border-richblack-700 bg-richblack-800">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">About</p>
        </div>
        <p
          className={`${
            user?.additionalDetails?.about
              ? "text-richblack-5"
              : "text-richblack-400"
          } text-sm font-medium`}
        >
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>

      <div className="my-4 lg:my-10 flex flex-col gap-y-4 md:gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-2 md:p-6 ">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">
            Personal Details
          </p>
        </div>

        <div className="flex max-w-[500px] justify-between">
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-20">
              <div>
                <p className="mb-2 text-sm text-richblack-600">First Name</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.firstName}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-richblack-600">Last Name</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.lastName}
                </p>
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Email</p>
              <p className="text-sm font-medium text-richblack-5  break-all overflow-auto whitespace-normal">
                
                {user?.email}
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-20">
              <div>
                <p className="mb-2 text-sm text-richblack-600">Gender</p>
                <p className="text-sm font-medium text-richblack-5">
                  
                  {user?.additionalDetails?.gender ?? "Add Gender"}
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm text-richblack-600">Phone Number</p>
                <p className="text-sm font-medium text-richblack-5">
                  
                  {user?.additionalDetails?.contactNumber ??
                    "Add Contact Number"}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-richblack-600">Date Of Birth</p>
                <p className="text-sm font-medium text-richblack-5">
                  {formattedDate(user?.additionalDetails?.dateOfBirth) ??
                    "Add Date Of Birth"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

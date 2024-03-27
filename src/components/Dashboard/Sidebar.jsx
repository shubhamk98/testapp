import { useSelector } from "react-redux";
import { sidebarLinks } from "../../data/dashboard-links.js";
import SidebarLink from "./SidebarLink.jsx";

const Sidebar = () => {
  const { user, loading: profileLoading } = useSelector((state) => state.profile);
  const { loading: authLoading } = useSelector((state) => state.auth);

  if (profileLoading || authLoading) {
    return (
      <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800">
        <div className="spinner"></div> 
      </div>
    );
  }

  return (
    <div>
      <div className="border-r-[1px] min-h-[calc(100vh-3.5rem)] border-richblack-300 md:block hidden w-64">
        <div className="px-9 pt-6">
          {sidebarLinks.map((val) => {
            if (val.type && user?.accountType !== val.type) return null;
            return (
              <SidebarLink
                key={val.id}
                text={val.name}
                icon={val.icon}
                path={val.path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

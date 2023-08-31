import React from "react";
import { BiLineChart } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { CgFolderAdd } from "react-icons/cg";
import { MdOutlineBallot } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../Features/users/UserSlice";

const sideMenuItem = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: <BiLineChart />,
  },
  {
    name: "All Jobs",
    url: "/all-jobs",
    icon: <MdOutlineBallot />,
  },
  {
    name: "Add Jobs",
    url: "/add-jobs",
    icon: <CgFolderAdd />,
  },
  {
    name: "Profile",
    url: "/profile",
    icon: <ImProfile />,
  },
];

const MobileSideBar = ({ open, setOpenSideBar }) => {
  const dispatch = useDispatch();
  const sideTransition = "transition-all duration-[300ms] ease-linear";
  return (
    <div className="relative">
      <div
        className={`flex flex-col justify-between pt-2 bg-gray-100 z-30 border-t-[1px] md:hidden fixed h-screen top-0 ${
          open ? `m-0 w-1/2 ${sideTransition}` : `-ml-[300px] ${sideTransition}`
        }`}
      >
        <div>
          <ul className="mt-28">
            {sideMenuItem.map((item) => {
              const { name, url, icon } = item;
              return (
                <li
                  key={name}
                  className="text-sm mb-6 hover:bg-[#fd5732] hover:text-white pl-4 py-1 hover:ease-in-out"
                  onClick={() => setOpenSideBar(false)}
                >
                  <Link to={url} className="flex items-center gap-2">
                    {icon} {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <Link
          to="/login"
          className="flex items-center justify-center pb-6 text-red-400 gap-2"
          onClick={() => {
            dispatch(logOut());
            setOpenSideBar(false)
          }}
        >
          <MdLogout /> Logout
        </Link>
      </div>
      {/* side bar transparent background */}

      <div
        className={`w-full bg-black z-25 ${
          open
            ? `fixed h-screen m-0 w-full opacity-70 transition-opacity duration-[300ms] ease-linear `
            : "opacity-0 transition-opacity duration-[300ms] ease-linear -ml-[300px]"
        }`}
        onClick={() => setOpenSideBar(false)}
      ></div>
    </div>
  );
};

export default MobileSideBar;

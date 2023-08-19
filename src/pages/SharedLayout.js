import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import { BiLineChart } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { CgFolderAdd } from "react-icons/cg";
import { MdOutlineBallot } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";

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

const SharedLayout = () => {
  const [openSideBar, setOpenSideBar] = React.useState(false)
  return (
    <div className="h-screen overflow-hidden grid grid-cols-12">
      <div className={`${openSideBar ? 'hidden' : 'col-span-2'} flex flex-col justify-between pt-2`}>
        <div>
          <div className="flex items-center gap-2 mb-3 pl-4">
            <img src={logo} alt="logo" />
            <p className="font-extrabold text-xl text-[#fd5732]">HuntTrackr</p>
          </div>
          <ul className="mt-16">
            {sideMenuItem.map((item) => {
              const { name, url, icon } = item;
              return (
                <li className="text-base mb-4 hover:bg-[#fd5732] hover:text-white pl-4 py-1 hover:ease-in-out">
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
        >
          <MdLogout /> Logout
        </Link>
      </div>
      <div className={openSideBar ? 'col-span-12' : "col-span-10"}>
        <div className="h-10 flex items-center justify-between px-4">
          <div className="">
            <BiMenu className="cursor-pointer" onClick={()=>setOpenSideBar(!openSideBar)}/>
          </div>
          <div className="text-xs flex items-center gap-1 ">
            <BsPersonCircle /> Salawu Abdullahi
          </div>
        </div>
        <div className="bg-[#f1f1f1] h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;

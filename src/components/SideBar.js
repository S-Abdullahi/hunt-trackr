import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { BiLineChart } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { CgFolderAdd } from "react-icons/cg";
import { MdOutlineBallot } from "react-icons/md";
import { MdLogout } from "react-icons/md";

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

const SideBar = () => {
  return (
    <div className="col-span-2 flex flex-col justify-between pt-2 ">
        <div>
          <div className="flex items-center gap-2 mb-3 pl-4">
            <img src={logo} alt="logo" />
            <p className="font-extrabold text-xl text-[#fd5732]">HuntTrackr</p>
          </div>
          <ul className="mt-16">
            {sideMenuItem.map((item) => {
              const { name, url, icon } = item;
              return (
                <li className="text-lg mb-4 hover:bg-[#fd5732] hover:text-white pl-4 py-1">
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
  )
}

export default SideBar
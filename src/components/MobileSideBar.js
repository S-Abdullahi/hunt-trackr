import React from "react";
import { BiLineChart } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { CgFolderAdd } from "react-icons/cg";
import { MdOutlineBallot } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
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

const MobileSideBar = ({ open }) => {
  return (
    <div
      className={`flex flex-col justify-between pt-2 bg-white border-t-[1px] md:hidden absolute h-[calc(100%-40px)] w-2/3 ${
        open ? "m-0" : "-m-[100%]"
      }`}
    >
      <div>
        <ul className="mt-16">
          {sideMenuItem.map((item) => {
            const { name, url, icon } = item;
            return (
              <li className="text-sm mb-4 hover:bg-[#fd5732] hover:text-white pl-4 py-1 hover:ease-in-out">
                <Link to="" className="flex items-center gap-2">
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
  );
};

export default MobileSideBar;

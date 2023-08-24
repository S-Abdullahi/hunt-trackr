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
import MobileSideBar from "../components/MobileSideBar";
import { logOut } from "../Features/users/UserSlice";
import { useDispatch, useSelector } from "react-redux";

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
  const [openSideBar, setOpenSideBar] = React.useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  return (
    <div className=" grid grid-cols-12 relative h-screen overflow-y-auto">
      <div
        className={'col-span-2 md:flex md:flex-col md:justify-between pt-2 hidden bg-white h-screen sticky top-0'}
      >
        <div className="">
          <div className="flex items-center gap-2 mt-2 mb-3 pl-4">
            <img src={logo} alt="logo" className="w-[20%] lg:w-[30%]"/>
            <p className="font-extrabold text-sm lg:text-base text-[#fd5732]">HuntTrackr</p>
          </div>
          <ul className="mt-16">
            {sideMenuItem.map((item) => {
              const { name, url, icon } = item;
              return (
                <li className="text-base mb-4 hover:bg-[#fd5732] hover:text-white pl-4 py-1 hover:ease-in-out" key={name}>
                  <Link to={url} className="flex items-center gap-2">
                    {icon} {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <Link
          className="flex items-center justify-center pb-6 text-red-400 gap-2"
          onClick={() => dispatch(logOut())}
        >
          <MdLogout /> Logout
        </Link>
      </div>
      <div className={"col-span-12 md:col-span-10 relative "}>
        <div className="h-12 flex items-center justify-between md:justify-between px-4 bg-white sticky top-0 z-10">
          {/* header bar logo for mobile screen */}
          <div className="flex items-center gap-2 mb-3 mt-2 md:hidden">
            <img src={logo} alt="logo" className="w-8" />
            <p className="font-extrabold text-lg text-[#fd5732]">HuntTrackr</p>
          </div>
          <div className="">
            <BiMenu
              className="cursor-pointer text-2xl"
              onClick={() => setOpenSideBar(!openSideBar)}
            />
          </div>
          <div className="text-base hidden md:flex items-center gap-1 ">
            <BsPersonCircle /> {user.name}
          </div>
        </div>
        {/* mobile side bar */}
        <MobileSideBar open={openSideBar} setOpenSideBar={setOpenSideBar} />
        {/* {openSideBar && (
          <div
            className="h-[calc(100%-48px)] bg-[#0001] sm:hidden"
            onClick={() => setOpenSideBar(!openSideBar)}
          ></div>
        )} */}

        <div className="h-full bg-[#f1f1f1] overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;

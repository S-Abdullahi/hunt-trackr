import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import {BiLineChart} from 'react-icons/bi'
import {ImProfile} from 'react-icons/im'
import {CgFolderAdd} from 'react-icons/cg'
import {MdOutlineBallot} from 'react-icons/md'

const sideMenuItem = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: <BiLineChart/>
  },
  {
    name: "All Jobs",
    url: "/all-jobs",
    icon: <MdOutlineBallot/>
  },
  {
    name: "Add Jobs",
    url: "/add-jobs",
    icon: <CgFolderAdd/>
  },
  {
    name: "Profile",
    url: "/profile",
    icon: <ImProfile/>

  },
];

const SharedLayout = () => {
  return (
    <div className="h-screen overflow-hidden grid grid-cols-12">
      <div className="col-span-2 bg-red-100 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={logo} alt="logo" />
            <p className="font-extrabold text-xl text-[#fd5732]">HuntTrackr</p>
          </div>
          <ul>
            {sideMenuItem.map((item) => {
              const { name, url, icon } = item;
              return (
                <li>
                  <Link to={url} className="flex items-center gap-2">{icon} {name}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <Link to="/login">Logout</Link>
      </div>
      <div className="col-span-10 bg-green-200">
        <div className="bg-blue-100 h-10">Header</div>
        <div className="bg-yellow-100 h-full">
          <Outlet />
        </div>
      </div>
      {/* <div className="grid grid-cols-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 justify-center mb-3">
            <img src={logo} alt="logo" />
            <p className="font-extrabold text-xl text-[#fd5732]">HuntTrackr</p>
          </div>
        </div>
        <div className="bg-white w-full col-span-10 border-b-[1px] border-[#cccbc8] p-3">
          Dashboard
        </div>
      </div>
      <div className="grid grid-cols-12 h-full ">
        <div className="col-span-2 bg-white h-full shadow-sm p-3 overflow-auto border-r-[1px] border-[#cccbc8]">
          <ul>
            {sideMenuItem.map((item)=>{
              const {name,url} = item
              return <li>
                <Link to={url}>{name}</Link>
              </li>
            })}
          </ul>
        </div>
        <div className="#fffefb col-span-10">
          <Outlet />
        </div>
      </div> */}
    </div>
  );
};

export default SharedLayout;

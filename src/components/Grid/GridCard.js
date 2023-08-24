import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";

const GridCard = () => {
  const jobDetail = [
    {
      title: "Full Time",
      icon: <MdWorkOutline />,
    },
    {
      title: "Ikeja Gra",
      icon: <MdOutlineLocationOn />,
    },
    {
      title: "August 8, 2023",
      icon: <BsCalendarDate />,
    },
    {
      title: "pending",
    },
  ];
  return (
    <div className="bg-white rounded-md shadow-sm">
      <div className="flex items-center gap-7 py-2 px-4 border-b-[1px]">
        <div>Avatar</div>
        <div>
          <p>Software Engineer</p>
          <p>Prunedge</p>
        </div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {jobDetail.map((detail) => {
            const { title, icon } = detail;
            return (
              <div className="flex items-center gap-2">
                {icon} {title}
              </div>
            );
          })}
        </div>
        <div className="flex gap-2 mt-3">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default GridCard;

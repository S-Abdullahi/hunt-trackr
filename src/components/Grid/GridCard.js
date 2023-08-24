import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { setEditJob } from "../../Features/users/addJobs/AddJobsSlice";
import { useDispatch } from "react-redux";

const GridCard = ({
  position,
  company,
  jobLocation,
  status,
  createdAt,
  jobType,
  _id,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let statusBg;
  if (status === "pending") {
    statusBg = "bg-yellow-100";
  } else if (status === "interview") {
    statusBg = "bg-green-100";
  } else if (status === "declined") {
    statusBg = "bg-red-100";
  }
  const jobDetail = [
    {
      title: jobType,
      icon: <MdWorkOutline />,
    },
    {
      title: jobLocation,
      icon: <MdOutlineLocationOn />,
    },
    {
      title: moment(createdAt).format("YYYY-MM-DD"),
      icon: <BsCalendarDate />,
    },
  ];
  return (
    <div className="bg-white rounded-md shadow-sm">
      <div className="flex items-center gap-7 py-2 px-4 border-b-[1px]">
        <div className="bg-gray-300 py-1 px-3 rounded text-xl font-bold text-gray-500">
          {company[0]}
        </div>
        <div>
          <p>{position}</p>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {jobDetail?.map((detail) => {
            const { title, icon } = detail;
            return (
              <div className="flex items-center gap-2 text-sm">
                {icon} {title}
              </div>
            );
          })}
          <div className={` flex flex-grow-0`}>
            <div className={`${statusBg} px-2 py-1 rounded text-sm`}>
              {status}
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-3">
          <button
            className=" bg-blue-50 border-[1px] border-blue-300 hover:bg-blue-100 px-2 py-1 rounded text-sm"
            onClick={() => {
              navigate("/add-jobs");
              dispatch(
                setEditJob({
                  jobId: _id,
                  position,
                  company,
                  jobType,
                  jobLocation,
                  status,
                })
              );
            }}
          >
            Edit
          </button>
          <button className="bg-red-50 border-[1px] border-red-300 hover:bg-red-100 px-2 py-1 text-sm rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridCard;

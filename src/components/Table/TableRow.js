import React from "react";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEditJob } from "../../Features/users/addJobs/AddJobsSlice";
import { deleteJob } from "../../Features/users/addJobs/AddJobsSlice";
import { MdDeleteOutline } from "react-icons/md";

const TableRow = ({
  _id,
  company,
  position,
  status,
  jobType,
  jobLocation,
  createdAt,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let statusBg;
  if (status === "pending") {
    statusBg = "bg-yellow-200";
  } else if (status === "interview") {
    statusBg = "bg-green-200";
  } else if (status === "declined") {
    statusBg = "bg-red-200";
  }
  return (
    <tbody>
      <tr className="grid  grid-cols-4 sm:grid-cols-6 text-left px-3 py-4 text-sm text-gray-600 border-b-[1px] border-gray-200 cursor-pointer hover:bg-gray-100">
        <td>{position}</td>
        <td>{company}</td>
        <td>{jobType}</td>
        <td className="hidden sm:flex">{jobLocation}</td>
        <td className="flex flex-shrink-0">
          <div className={`${statusBg} py-1 px-2 rounded-md h-8 `}>
            {status}
          </div>
        </td>
        <td className=" hidden sm:flex justify-center gap-6 items-center">
          <FiEdit
            className="text-gray-400 hover:text-gray-500"
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
          />
          <MdDeleteOutline
            className="text-red-300 cursor-pointer hover:text-red-400 text-base"
            onClick={() => {
              dispatch(deleteJob(_id));
            }}
          />
        </td>
      </tr>
    </tbody>
  );
};

export default TableRow;

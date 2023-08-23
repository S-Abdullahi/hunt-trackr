import React from "react";
import { FiEdit } from "react-icons/fi";

const TableRow = ({
  _id,
  company,
  position,
  status,
  jobType,
  jobLocation,
  createdAt,
}) => {
  let statusBg;
  if (status === "pending") {
    statusBg = "bg-yellow-200";
  } else if (status === "interview") {
    statusBg = "bg-green-200";
  } else if (status === "declined") {
    statusBg = "bg-red-200";
  }
  return (
    <tr className="grid  grid-cols-4 sm:grid-cols-6 text-left px-3 py-4 text-sm text-gray-600 border-b-[1px] border-gray-200 cursor-pointer hover:bg-gray-100">
      <td>{position}</td>
      <td>{company}</td>
      <td>{jobType}</td>
      <td className="hidden sm:flex">{jobLocation}</td>
      <td className="flex flex-shrink-0">
        <div className={`${statusBg} py-1 px-2 rounded-md h-8 `}>{status}</div>
      </td>
      <td className=" hidden sm:flex justify-center items-center">
        <FiEdit />
      </td>
    </tr>
  );
};

export default TableRow;

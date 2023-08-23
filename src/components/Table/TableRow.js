import React from "react";
import { FiEdit } from "react-icons/fi";

const TableRow = ({_id, company, position, status,jobType,jobLocation, createdAt}) => {
  return (
    <tr className="grid  grid-cols-4 sm:grid-cols-6 text-left px-3 py-4 text-sm text-gray-600 border-b-[1px] border-gray-200 cursor-pointer hover:bg-gray-100">
      <td>{position}</td>
      <td>{company}</td>
      <td>{jobType}</td>
      <td className="hidden sm:flex">{jobLocation}</td>
      <td>{status}</td>
      <td className=" hidden sm:flex justify-center items-center">
        <FiEdit />
      </td>
    </tr>
  );
};

export default TableRow;

import React from "react";
import { FiEdit } from "react-icons/fi";

const TableRow = () => {
  return (
    <tr className="grid grid-cols-6 text-left px-3 py-4 text-sm text-gray-600 border-b-[1px] border-gray-200 cursor-pointer hover:bg-gray-100">
      <td>Frontend Developer</td>
      <td>Prunedge</td>
      <td>Full time</td>
      <td>Ogudu GRA</td>
      <td>pending</td>
      <td className=" flex justify-center items-center">
        <FiEdit />
      </td>
    </tr>
  );
};

export default TableRow;

import React from "react";

const TableHead = () => {
  return (
    <th className="grid grid-cols-4 sm:grid-cols-6 px-3 text-sm text-gray-500 py-4 border-b-[1px] border-gray-200 text-left">
      <td>Position</td>
      <td>Company</td>
      <td>Job Type</td>
      <td className="hidden sm:flex">Location</td>
      <td>Status</td>
    </th>
  );
};

export default TableHead;

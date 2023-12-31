import React from "react";

const TableHead = () => {
  return (
    <tr className="grid grid-cols-6 px-3 text-sm text-gray-500 py-4 border-b-[1px] border-gray-200 text-left">
      <th className="">Position</th>
      <th>Company</th>
      <th>Job Type</th>
      <th className="flex">Location</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  );
};

export default TableHead;

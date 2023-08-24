import React from "react";

const TableHead = () => {
  return (
    <tr className="grid grid-cols-4 sm:grid-cols-6 px-3 text-sm text-gray-500 py-4 border-b-[1px] border-gray-200 text-left">
      <th>Position</th>
      <th>Company</th>
      <th>Job Type</th>
      <th className="hidden sm:flex">Location</th>
      <th>Status</th>
    </tr>
  );
};

export default TableHead;

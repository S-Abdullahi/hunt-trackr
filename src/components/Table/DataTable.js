import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

const DataTable = ({ jobs }) => {
  return (
    <table className="flex-grow bg-white shadow-md rounded-sm mx-4 mt-10">
      <TableHead />
      {jobs?.map((job) => {
        return <TableRow {...job} key={job?._id} />;
      })}
    </table>
  );
};

export default DataTable;

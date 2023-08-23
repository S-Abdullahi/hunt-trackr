import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

const DataTable = () => {
  return (
    <table className="flex-grow bg-white shadow-md rounded-sm mx-4 mt-10">
      <TableHead />
      <TableRow/>
      <TableRow/>
      <TableRow/>
      <TableRow/>
      <TableRow/>
      <TableRow/>
      <TableRow/>
      <TableRow/>
      <TableRow/>
      <TableRow/>
    </table>
  );
};

export default DataTable;

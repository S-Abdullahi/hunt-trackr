import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { useSelector } from "react-redux";
import Loader from "../loader";

const DataTable = ({ jobs }) => {
  const { isLoading } = useSelector((store) => store.allJobs);
  return (
    <table className="flex-grow items-center bg-white shadow-md rounded-sm mx-4 mt-10">
      <TableHead />

      {isLoading ? (
        <div className="flex items-start justify-center">
          <Loader />
        </div>
      ) : (
        jobs?.map((job) => {
          return <TableRow {...job} key={job?._id} />;
        })
      )}
    </table>
  );
};

export default DataTable;

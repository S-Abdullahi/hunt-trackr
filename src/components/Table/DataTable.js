import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { useSelector } from "react-redux";
import Loader from "../loader";
import EmptyData from "../EmptyData";
import Pagination from "../Pagination";

const DataTable = ({ jobs }) => {
  const { isLoading, numberOfPages } = useSelector((store) => store.allJobs);
  return (
    <table className="flex-grow items-center bg-white rounded-sm mx-4 mt-2">
      <TableHead />

      {isLoading ? (
        <div className="flex items-start justify-center">
          <Loader />
        </div>
      ) : jobs.length < 1 ? (
        <EmptyData />
      ) : (
        jobs?.map((job) => {
          return <TableRow {...job} key={job?._id} />;
        })
      )}
      {numberOfPages > 1 && <Pagination />}
    </table>
  );
};

export default DataTable;

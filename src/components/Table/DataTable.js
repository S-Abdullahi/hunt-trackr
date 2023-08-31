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
    <table className="flex-grow items-center bg-white rounded-sm mt-2 overflow-x-auto sm:w-full">
      <TableHead />

      {isLoading ? (
        <div className="flex items-start justify-center">
          <Loader size='medium' />
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

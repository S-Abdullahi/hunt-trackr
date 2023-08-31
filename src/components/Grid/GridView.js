import React from "react";
import GridCard from "./GridCard";
import Pagination from "../Pagination";
import { useSelector } from "react-redux";
import Loader from "../loader";

const GridView = ({ jobs }) => {
  const { numberOfPages, isLoading } = useSelector((store) => store.allJobs);
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center mt-6">
          <Loader size='medium'/>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 mt-5">
          {jobs?.map((job) => {
            return <GridCard {...job} />;
          })}
        </div>
      )}

      <div className="flex justify-center">
        {numberOfPages > 1 && <Pagination />}
      </div>
    </div>
  );
};

export default GridView;

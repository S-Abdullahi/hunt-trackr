import React from "react";
import Loader from "../components/loader";
import FormRow from "../components/FormRow";
import FormSelect from "../components/FormSelect";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "../components/Table/DataTable";
import {
  getAllJobs,
  handleSearch,
  clearSearchState,
} from "../Features/users/allJobs/allJobsSlice";
import GridView from "../components/Grid/GridView";
import { GrTable } from "react-icons/gr";
import { TfiViewGrid, TfiMenuAlt } from "react-icons/tfi";

const AllJobs = () => {
  const { search, status, jobType, sortOption, sort, jobs, totalJobs, page } =
    useSelector((store) => store.allJobs);
  const [displayView, setDisplayView] = React.useState("table");
  const displayOption = [
    {
      name: "table",
      icon: <TfiMenuAlt />,
    },
    {
      name: "grid",
      icon: <TfiViewGrid />,
    },
  ];

  const dispatch = useDispatch();
  const { statusOption, jobTypeOption } = useSelector((store) => store.addJobs);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleSearch({ name, value }));
  };

  React.useEffect(() => {
    dispatch(getAllJobs());
  }, [search, status, jobType, sort, page]);
  return (
    <div className="pt-4 flex flex-col ">
      <div className="flex items-center overflow-x-auto  gap-4 bg-white p-4 mx-4 flex-grow">
        <FormRow name="search" value={search} onChange={handleChange} />
        <FormSelect
          name="status"
          selectOptions={["all", ...statusOption]}
          value={status}
          onChange={handleChange}
        />
        <FormSelect
          name="jobType"
          selectOptions={["all", ...jobTypeOption]}
          value={jobType}
          onChange={handleChange}
        />
        <FormSelect
          name="sort"
          selectOptions={sortOption}
          value={sort}
          onChange={handleChange}
        />
        <button
          className="rounded-sm text-white bg-[#fd5732] py-2 w-full h-9 min-w-[100px]"
          onClick={() => dispatch(clearSearchState())}
        >
          Clear Filters
        </button>
      </div>

      {/* view option buttons */}

      <div className="ml-4 flex items-center gap-3">
        <div className="mt-3">
          {" "}
          {`${totalJobs} Job${totalJobs > 1 ? "s" : ""} Found`}
        </div>
        {totalJobs > 0 && (
          <div className="">
            {displayOption.map((view) => (
              <button
                onClick={() => setDisplayView(view.name)}
                className={` p-1 rounded hover:bg-gray-300 mr-3 ${
                  view.name === displayView
                    ? "bg-gray-600 text-white border-gray-700"
                    : "bg-gray-200 mt-4 border text-gray-400"
                }`}
              >
                {view.icon}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="overflow-x-auto">
        {displayView === "table" ? (
          <DataTable jobs={jobs} />
        ) : (
          <GridView jobs={jobs} />
        )}
      </div>
    </div>
  );
};

export default AllJobs;

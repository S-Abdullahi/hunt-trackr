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

const AllJobs = () => {
  const { search, status, jobType, sortOption, sort, jobs } = useSelector(
    (store) => store.allJobs
  );

  const dispatch = useDispatch();
  const { statusOption, jobTypeOption } = useSelector((store) => store.addJobs);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleSearch({ name, value }));
  };

  React.useEffect(() => {
    dispatch(getAllJobs());
  }, [search, status, jobType, sort]);
  return (
    <div className="pt-4 flex flex-col ">
      <div className="flex items-center overflow-x-auto  gap-4 bg-white p-4 shadow-md mx-4 flex-grow">
        <FormRow name="search" value={search} onChange={handleChange} />
        <FormSelect
          name="status"
          selectOptions={['all',...statusOption]}
          value={status}
          onChange={handleChange}
        />
        <FormSelect
          name="jobType"
          selectOptions={['all',...jobTypeOption]}
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

      <DataTable jobs={jobs} />
    </div>
  );
};

export default AllJobs;

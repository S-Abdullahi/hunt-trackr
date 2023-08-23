import React from "react";
import Loader from "../components/loader";
import FormRow from "../components/FormRow";
import FormSelect from "../components/FormSelect";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "../components/Table/DataTable";
import { getAllJobs } from "../Features/users/allJobs/allJobsSlice";

const AllJobs = () => {
  const { search, status, jobType, sort, jobs } = useSelector(
    (store) => store.allJobs
  );

  const dispatch = useDispatch();
  const { statusOption, jobTypeOption } = useSelector((store) => store.addJobs);

  React.useEffect(() => {
    dispatch(getAllJobs());
  }, [search, status, jobType, sort]);
  return (
    <div className="pt-4 flex flex-col ">
      <div className="flex items-center overflow-x-auto  gap-4 bg-white p-4 shadow-md mx-4 flex-grow">
        <FormRow name="search" />
        <FormSelect name="status" selectOptions={statusOption} />
        <FormSelect name="jobType" selectOptions={jobTypeOption} />
        <FormSelect name="sort" selectOptions={sort} />
        <button className="rounded-sm text-white bg-[#fd5732] py-2 w-full h-9 min-w-[100px]">
          Clear Filters
        </button>
      </div>

      <DataTable jobs={jobs}/>
    </div>
  );
};

export default AllJobs;

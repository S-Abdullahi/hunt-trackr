import React from "react";
import Loader from "../components/loader";
import FormRow from "../components/FormRow";
import FormSelect from "../components/FormSelect";
import { useSelector } from "react-redux";

const AllJobs = () => {
  const { search, status, jobType, sort } = useSelector(
    (store) => store.allJobs
  );
  const { statusOption, jobTypeOption } = useSelector((store) => store.addJobs);
  return (
    <div className="pt-4">
      <div className="flex items-center overflow-x-auto  gap-4 bg-white p-4 shadow-md mx-4 w-full">
        <FormRow name="search"/>
        <FormSelect name="status" selectOptions={statusOption} />
        <FormSelect name="jobType" selectOptions={jobTypeOption} />
        <FormSelect name="sort" selectOptions={sort} />
        <button className="rounded-sm mr-4 text-white bg-[#fd5732] py-2 w-full h-9 min-w-[100px]">
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default AllJobs;

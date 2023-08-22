import React from "react";
import FormRow from "../components/FormRow";
import FormSelect from "../components/FormSelect";
import { useSelector, useDispatch } from "react-redux";
import { addJob } from "../Features/users/addJobs/AddJobsSlice";
import { handleChange } from "../Features/users/addJobs/AddJobsSlice";

const AddJobs = () => {
  const {
    status,
    jobType,
    position,
    company,
    jobLocation,
    statusOption,
    jobTypeOption,
  } = useSelector((store) => store.addJobs);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };
  return (
    <div className="flex justify-center items-center pt-10">
      <div className="bg-white p-4 w-[80%] sm:w-[60%] md:w-1/2 shadow-md">
        <p className="text-center text-lg mb-6">Add Job</p>
        <form className="flex flex-col">
          <FormRow name="position" value={position} onChange={handleOnChange} />
          <FormRow name="company" value={company} onChange={handleOnChange} />
          <FormRow
            name="jobLocation"
            value={jobLocation}
            onChange={handleOnChange}
          />
          <div className="flex justify-between gap-4">
            <FormSelect
              name="status"
              selectOptions={statusOption}
              onChange={handleOnChange}
              value={status}
            />
            <FormSelect
              name="jobType"
              selectOptions={jobTypeOption}
              onChange={handleOnChange}
              value={jobType}
            />
          </div>
          <div className="flex justify-between gap-4">
            <button className="border rounded-sm py-2 bg-transparent w-full">
              Clear
            </button>
            <button
              type="submit"
              className="rounded-sm text-white bg-[#fd5732] py-2 w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJobs;

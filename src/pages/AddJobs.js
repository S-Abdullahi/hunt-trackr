import React from "react";
import FormRow from "../components/FormRow";
import FormSelect from "../components/FormSelect";

const status = ["Approved", "Pending", "Declined"];
const jobType = ["Internship", "Full-time", "Part time", "remote"];

const AddJobs = () => {
  return (
    <div className="flex justify-center items-center pt-10">
      <div className="bg-white p-4 w-[80%] sm:w-[60%] md:w-1/2 shadow-md">
        <p className="text-center text-lg mb-6">Add Job</p>
        <form className="flex flex-col">
          <FormRow name="Position" value="" />
          <FormRow name="Company" value="" />
          <FormRow name="Job Location" value="" />
          <div className="flex justify-between gap-4">
            <FormSelect name="status" selectOptions={status} />
            <FormSelect name="job type" selectOptions={jobType} />
          </div>
          <div className="flex justify-between gap-4">
            <button className="border rounded-sm py-2 bg-transparent w-full">Clear</button>
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

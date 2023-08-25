import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Pagination = () => {
  return (
    <div className="my-4 flex justify-end items-center mr-6 gap-4 text-gray-500">
      <p className="text-sm">1 - 10 of 21</p>
      <div className="flex justify-between gap-4">
        <BiChevronLeft className="text-xl cursor-pointer" />
        <BiChevronRight className="text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Pagination;

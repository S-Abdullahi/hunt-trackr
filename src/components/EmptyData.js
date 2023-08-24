import React from "react";
import emptyIllustration from "../assets/emptyData.svg";

const EmptyData = () => {
  return (
    <div className="flex flex-col items-center justify-center my-6">
      <img src={emptyIllustration} alt="empty data" className="w-[15%] mb-2"/>
      <p className="text-xs text-gray-500">No Application Found</p>
    </div>
  );
};

export default EmptyData;

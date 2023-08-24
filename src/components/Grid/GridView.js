import React from "react";
import GridCard from "./GridCard";

const GridView = ({jobs}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 mt-5">
      <GridCard />
      <GridCard />
      <GridCard />
      <GridCard />
    </div>
  );
};

export default GridView;

import React from "react";
import loadergif from "../assets/loadergif.gif";

const Loader = ({ size }) => {
  let loaderStyle;
  if (size === "small") {
    loaderStyle = "w-[40%]";
  } else if (size === "medium") {
    loaderStyle = "w-[10%]";
  } else {
    loaderStyle = "w-[100%]";
  }
  return (
    <div className={loaderStyle}>
      <img src={loadergif} alt="" className="w-full" />
    </div>
  );
};

export default Loader;

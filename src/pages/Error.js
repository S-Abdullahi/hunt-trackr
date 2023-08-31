import React from "react";
import errorImage from "../assets/error.svg";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <img src={errorImage} alt="error"  className="w-[30%]"/>
      <button onClick={() => navigate("/dashboard")} className="bg-[#fd5732] px-2 py-1 rounded text-white hover:bg-[#fd5732d1]">Return</button>
    </div>
  );
};

export default Error;

import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, link }) => {
  return (
    <button className="bg-[#fd5732] text-white px-2 py-1 rounded hover:bg-[#fd5732e4]">
      <Link to={link}>{text}</Link>
    </button>
  );
};

export default Button;

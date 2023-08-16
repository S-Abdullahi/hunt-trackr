import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, link, type }) => {
  return (
    <Link
      to={link ? link : ''}
      className="bg-[#fd5732] text-white px-2 py-1 rounded hover:bg-[#fd5732e4] text-center"
    >
      <button type={type ? type : "button"}>{text}</button>
    </Link>
  );
};

export default Button;

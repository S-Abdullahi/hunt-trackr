import React from "react";

const FormRow = ({ type, label, name, value, onChange }) => {
  const capitalizeName = (labelName) => {
    const capitalFirstLetter = labelName[0].toUpperCase();
    return capitalFirstLetter + labelName.slice(1);
  };
  return (
    <div className="w-[100%] min-w-[100px]">
      <div className="mb-1 text-gray-600 text-sm">
        {label ? capitalizeName(label) : capitalizeName(name)}
      </div>
      <input
        type={type ? type : "text"}
        name={name}
        value={value}
        onChange={onChange}
        className="mb-5 px-2 h-10 rounded-sm border focus:border-[#fd5732] focus:outline-none text-[gray] w-full text-sm"
      />
    </div>
  );
};

export default FormRow;

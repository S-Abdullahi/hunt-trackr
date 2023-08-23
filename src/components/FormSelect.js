import React from "react";

const FormSelect = ({ selectOptions, onChange, name, value }) => {
  return (
    <div className="w-[100%] min-w-[100px]">
      <div className="mb-1 text-gray-600 text-sm">{name}</div>
      <select
        name={name}
        onChange={onChange}
        value={value}
        className="mb-5 px-2 h-10 rounded-sm border focus:border-[#fd5732] focus:outline-none text-[gray] w-full cursor-pointer"
      >
        {selectOptions.map((item) => {
          return (
            <option className="" key={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;

import React from "react";

const FormRow = ({type, name, value, onChange }) => {
  return (
    <>
    <div className="mb-1 text-gray-600 text-sm">{name}</div>
    <input
      type={type ? type : 'text'}
      name={name}
      value={value}
      onChange={onChange}
      className="mb-5 px-2 h-10 rounded-sm border focus:border-[#fd5732] focus:outline-none text-[gray]"
    />
    
    </>
    
  );
};

export default FormRow;

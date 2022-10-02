import React from "react";

const Dropdown = ({ label, placeholder, options, value, setOnchange }) => {
  return (
    <div className="select">
      <label htmlFor={placeholder}>{label}</label>
      <select
        defaultValue={placeholder}
        onChange={(e) => setOnchange(e.target.value)}
      >
        <option value={placeholder} disabled hidden>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

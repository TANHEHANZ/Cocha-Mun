import React from "react";
import PropTypes from "prop-types";

const Input = ({
  label,
  type = "text",
  id,
  placeholder,
  value,
  onChange,
  className = "",
  error,
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className} w-full`}>
      {label && (
        <label htmlFor={id} className="text-xs">
          {label}
        </label>
      )}
      <input
        id={id || label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border border-gray-700 rounded-lg p-2 ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
};

// Validaciones de las propiedades
Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  error: PropTypes.string,
};

export default Input;

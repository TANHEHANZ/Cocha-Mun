import React from "react";

const Button = ({
  text,
  jerarquia = "primary",
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  const getColorClass = () => {
    switch (jerarquia) {
      case "secondary":
        return "bg-customBlue900";
      case "alert":
        return "bg-customRed900";
      default:
        return "bg-customGreen100";
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={` px-14 py-1.5 text-xs  text-black  rounded ${getColorClass()}  ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;

import React from "react";

const Button = ({ type = "button", onClick, className, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-32 py-1 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";

function Button({ onClick, value, className }) {
  return (
    <button onClick={onClick} className={"btn " + className}>
      {value}
    </button>
  );
}

export default Button;

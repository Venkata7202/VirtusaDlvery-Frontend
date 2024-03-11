import React from "react";

function TextField({
  parentClassName,
  className,
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className={parentClassName}>
      <label>{label}</label>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event, id)}
      />
    </div>
  );
}

export default TextField;

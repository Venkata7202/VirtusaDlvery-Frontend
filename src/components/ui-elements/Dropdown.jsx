function Dropdown({ onChange, values, id }) {
  const localOnChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="dropdown-container">
      <select className="dropdown-select" value={id} onChange={localOnChange}>
        {values.map((value, index) => {
          return (
            <option
              key={index}
              value={value.id}
              onClick={() => onChange(value.id)}
            >
              {value.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Dropdown;

import React from "react";

const DDL = (props) => {
  return (
    <div className="ddl">
      <select
        id={props.id}
        value={props.value}
        onChange={props.handleFilterChange}
      >
        {props.data.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DDL;

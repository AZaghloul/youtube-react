import React from "react";

const DDL = (props) => {
  return (
    <div className="ddl">
      <select
        data-testid={props.id}
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

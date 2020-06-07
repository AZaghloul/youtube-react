import React from "react";

const FilterOption = (props) => {
  return (
    <p
      onClick={() =>
        props.handleFilterChangePC(props.filterName, props.label.toLowerCase())
      }
      className={props.selected ? "selected" : ""}
    >
      {props.label}
    </p>
  );
};

export default FilterOption;

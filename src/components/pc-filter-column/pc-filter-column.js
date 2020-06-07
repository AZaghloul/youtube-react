import React from "react";
import FilterOption from "../filter-option/filter-option";

const PcFilterColumn = (props) => {
  return (
    <article>
      <h4>{props.title}</h4>
      {props.options.map((opt) => (
        <FilterOption
          key={opt}
          label={opt}
          filterName={props.filterName}
          selected={props.filter[props.filterName] === opt.toLowerCase()}
          handleFilterChangePC={props.handleFilterChangePC}
        />
      ))}
    </article>
  );
};

export default PcFilterColumn;

import React from "react";

const PcFilter = (props) => {
  return (
    <section className="pc-filter">
      <p>About 12,200,000 results</p>
      <p className="pc-filter__icon" onClick={props.handleFilterModeToggle}>
        <i className="fa fa-sliders"></i> Filter
      </p>
    </section>
  );
};

export default PcFilter;

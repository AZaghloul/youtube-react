import React from "react";
import PcFilterColumn from "../pc-filter-column/pc-filter-column";

const PcFilterOptions = (props) => {
  const uploadDateOptions = ["Last hour", "Today", "This week", "This month"];
  const typeOptions = ["Video", "Channel", "Playlist"];
  const sortByOptions = ["Relevance", "Upload date", "View count", "Rating"];

  return (
    <section className="pc-filter-options">
      <PcFilterColumn
        title="Upload Date"
        filterName="uploadDate"
        options={uploadDateOptions}
        filter={props.filter}
        handleFilterChangePC={props.handleFilterChangePC}
      />
      <PcFilterColumn
        title="Type"
        filterName="type"
        options={typeOptions}
        filter={props.filter}
        handleFilterChangePC={props.handleFilterChangePC}
      />
      <PcFilterColumn
        title="Sort By"
        filterName="sortBy"
        options={sortByOptions}
        filter={props.filter}
        handleFilterChangePC={props.handleFilterChangePC}
      />
    </section>
  );
};

export default PcFilterOptions;

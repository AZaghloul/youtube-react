import React from "react";
import DDL from "../ddl/DDL";

const MobileFilter = (props) => {
  return (
    <section className="mobile-filter">
      <DDL
        id="type"
        data={[
          { label: "All", value: "all" },
          { label: "Channel", value: "channel" },
          { label: "Playlist", value: "playlist" },
        ]}
        value={props.filter.type}
        handleFilterChange={props.handleFilterChange}
      />
      <DDL
        id="uploadDate"
        data={[
          { label: "Any time", value: "any time" },
          { label: "Today", value: "today" },
          { label: "This week", value: "this week" },
          { label: "This month", value: "this month" },
        ]}
        value={props.filter.uploadDate}
        handleFilterChange={props.handleFilterChange}
      />
    </section>
  );
};

export default MobileFilter;

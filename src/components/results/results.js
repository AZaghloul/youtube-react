import React from "react";
import Result from "./../result/result";
import ChannelResult from "../channel-result/channel-result";

const Results = (props) => {
  return (
    <section className="results">
      {props.videos.map((resource) =>
        resource.id.kind === "youtube#channel" ? (
          <ChannelResult channel={resource} />
        ) : (
          <Result video={resource} />
        )
      )}
    </section>
  );
};

export default Results;

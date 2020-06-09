import React from "react";
import Result from "./../result/result";
import ChannelResult from "../channel-result/channel-result";
import PlaylistResult from "../playlist-result/playlist-result";

const Results = (props) => {
  return (
    <React.Fragment>
      <section className="results">
        {props.videos.map((resource) => {
          if (resource.id.kind === "youtube#channel")
            return (
              <ChannelResult key={resource.id.channelId} channel={resource} />
            );
          else if (resource.id.kind === "youtube#playlist")
            return (
              <PlaylistResult
                key={resource.id.playlistId}
                playlist={resource}
              />
            );
          else return <Result key={resource.id.videoId} video={resource} />;
        })}
      </section>
      <section className="show-more" onClick={props.handleShowMore}>
        {props.isShowMoreLoading ? (
          <div className="fading-spinner">
            <div className="circle1 circle"></div>
            <div className="circle2 circle"></div>
            <div className="circle3 circle"></div>
            <div className="circle4 circle"></div>
            <div className="circle5 circle"></div>
            <div className="circle6 circle"></div>
            <div className="circle7 circle"></div>
            <div className="circle8 circle"></div>
            <div className="circle9 circle"></div>
            <div className="circle10 circle"></div>
            <div className="circle11 circle"></div>
            <div className="circle12 circle"></div>
          </div>
        ) : (
          <p>Show more items</p>
        )}
      </section>
      <section className="show-more--pc">
        {props.isShowMoreLoading ? (
          <div className="fading-spinner">
            <div className="circle1 circle"></div>
            <div className="circle2 circle"></div>
            <div className="circle3 circle"></div>
            <div className="circle4 circle"></div>
            <div className="circle5 circle"></div>
            <div className="circle6 circle"></div>
            <div className="circle7 circle"></div>
            <div className="circle8 circle"></div>
            <div className="circle9 circle"></div>
            <div className="circle10 circle"></div>
            <div className="circle11 circle"></div>
            <div className="circle12 circle"></div>
          </div>
        ) : (
          <p>Show more items</p>
        )}
      </section>
    </React.Fragment>
  );
};

export default Results;

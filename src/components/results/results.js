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
          <div class="fading-spinner">
            <div class="circle1 circle"></div>
            <div class="circle2 circle"></div>
            <div class="circle3 circle"></div>
            <div class="circle4 circle"></div>
            <div class="circle5 circle"></div>
            <div class="circle6 circle"></div>
            <div class="circle7 circle"></div>
            <div class="circle8 circle"></div>
            <div class="circle9 circle"></div>
            <div class="circle10 circle"></div>
            <div class="circle11 circle"></div>
            <div class="circle12 circle"></div>
          </div>
        ) : (
          <p>Show more items</p>
        )}
      </section>
      <section className="show-more--pc">
        {props.isShowMoreLoading ? (
          <div class="fading-spinner">
            <div class="circle1 circle"></div>
            <div class="circle2 circle"></div>
            <div class="circle3 circle"></div>
            <div class="circle4 circle"></div>
            <div class="circle5 circle"></div>
            <div class="circle6 circle"></div>
            <div class="circle7 circle"></div>
            <div class="circle8 circle"></div>
            <div class="circle9 circle"></div>
            <div class="circle10 circle"></div>
            <div class="circle11 circle"></div>
            <div class="circle12 circle"></div>
          </div>
        ) : (
          <p>Show more items</p>
        )}
      </section>
    </React.Fragment>
  );
};

export default Results;

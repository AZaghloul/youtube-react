import React from "react";

const PlaylistResult = (props) => {
  let yearsNo;
  if (props.playlist.snippet.publishTime)
    yearsNo = 2020 - props.playlist.snippet.publishTime.split("-")[0];
  else {
    yearsNo = 2020 - props.playlist.snippet.publishedAt.split("-")[0];
  }
  return (
    <article className="result result--playlist">
      <img
        className="result__img"
        src={props.playlist.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="result__details">
        <h3>{props.playlist.snippet.title}</h3>
        <p className="info">
          {yearsNo === 0 ? "this year" : yearsNo + " years ago"}
        </p>
        <p className="desc">{props.playlist.snippet.description}</p>
      </div>
    </article>
  );
};

export default PlaylistResult;

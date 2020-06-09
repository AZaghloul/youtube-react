import React from "react";

const Result = (props) => {
  let yearsNo;
  if (props.video.snippet.publishTime)
    yearsNo = 2020 - props.video.snippet.publishTime.split("-")[0];
  else {
    yearsNo = 2020 - props.video.snippet.publishedAt.split("-")[0];
  }
  return (
    <article className="result">
      <img
        className="result__img"
        src={props.video.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="result__details">
        <h3>{props.video.snippet.title}</h3>
        <p className="info">
          {props.video.snippet.channelTitle} |{" "}
          {yearsNo === 0 ? "this year" : yearsNo + " years ago"}
        </p>
        <p className="desc">{props.video.snippet.description}</p>
      </div>
    </article>
  );
};

export default Result;

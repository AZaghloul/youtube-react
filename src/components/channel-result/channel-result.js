import React from "react";

const ChannelResult = (props) => {
  const yearsNo = 2020 - props.channel.snippet.publishTime.split("-")[0];
  return (
    <article className="result result--channel">
      <img
        className="result__img"
        src={props.channel.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="result__details">
        <h3>{props.channel.snippet.title}</h3>
        <p className="info">
          {yearsNo === 0 ? "this year" : yearsNo + " years ago"}
        </p>
        <p className="desc">{props.channel.snippet.description}</p>
      </div>
    </article>
  );
};

export default ChannelResult;

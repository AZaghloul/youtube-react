import React from "react";

import { Link } from "react-router-dom";

const ChannelResult = (props) => {
  let yearsNo;
  if (props.channel.snippet.publishTime)
    yearsNo = 2020 - props.channel.snippet.publishTime.split("-")[0];
  else {
    yearsNo = 2020 - props.channel.snippet.publishedAt.split("-")[0];
  }
  return (
    <article className="result result--channel">
      <img
        className="result__img"
        src={props.channel.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="result__details">
        <h3>
          <Link to={"/channels?channelid=" + props.channel.id.channelId}>
            {props.channel.snippet.title}
          </Link>
        </h3>
        <p className="info">
          {yearsNo === 0 ? "this year" : yearsNo + " years ago"}
        </p>
        <p className="desc">{props.channel.snippet.description}</p>
      </div>
    </article>
  );
};

export default ChannelResult;

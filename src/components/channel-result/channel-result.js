import React from "react";

const ChannelResult = (props) => {
  console.log(props.channel);
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
          {2020 - props.channel.snippet.publishTime.split("-")[0] || 1} years
          ago
        </p>
        <p className="desc">{props.channel.snippet.description}</p>
      </div>
    </article>
  );
};

export default ChannelResult;

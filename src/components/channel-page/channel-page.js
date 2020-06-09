import React from "react";
import PlaylistResult from "./../playlist-result/playlist-result";

const ChannelPage = (props) => {
  return (
    <React.Fragment>
      {props.channelData.snippet ? (
        <React.Fragment>
          <section className="banner">
            <img
              src={props.channelData.brandingSettings.image.bannerImageUrl}
              alt=""
              className="banner__img"
            />
          </section>
          <section className="channel-intro">
            <p className="channel-intro__name">
              {props.channelData.snippet.title}
            </p>
            <div className="channel-intro__details">
              <img src="logo3.png" alt="" />
              <p className="channel-intro__subscribe">SUBSCRIBE</p>
              <p>{props.channelData.statistics.subscriberCount}</p>
              <img
                className="channel-intro__image"
                src={props.channelData.snippet.thumbnails.default.url}
                alt=""
              />
            </div>
          </section>
          <section className="results">
            {props.channelPlaylists.map((plylst) => (
              <PlaylistResult key={plylst.id} playlist={plylst} />
            ))}
          </section>
        </React.Fragment>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default ChannelPage;

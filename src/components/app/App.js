import React, { Component } from "react";

import { Route } from "react-router-dom";

import "../../style.css";

import youtube from "../../api/youtube";

import Header from "./../header/Header";
import MobileFilter from "./../mobile-filter/Mobile-Filter";
import PcFilter from "./../pc-filter/pc-filter";
import PcFilterOptions from "./../pc-filter-options/pc-filter-options";
import Results from "./../results/results";
import ChannelPage from "../channel-page/channel-page";

class App extends Component {
  state = {
    apiKey: "AIzaSyCBjdH4LEzrxhwE9AYvFCJSWdIMrgk8Vys",
    isPageLoading: true,
    isShowMoreLoading: false,
    isSearchLoading: false,
    searchMode: false,
    filterMode: false,
    filter: {
      type: "all",
      uploadDate: "any time",
      sortBy: "relevance",
    },
    query: "",
    channel: "",
    video: "",
    publishedAfter: new Date(),
    videos: [],
    channelData: {},
    channelPlaylists: [],
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  //Call Backend
  getData = async (pageToken) => {
    if (this.state.query) {
      //Clone
      let videos = [...this.state.videos];

      //Edit
      const { data } = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 5,
          key: this.state.apiKey,
          q: this.state.query,
          order: this.getOrderBy(),
          type: this.state.filter.type,
          publishedAfter: this.calculateDate(),
          pageToken: pageToken ?? "",
        },
      });
      if (!pageToken)
        this.setState({
          videos: data.items,
          pageToken: data.nextPageToken,
          isPageLoading: false,
        });
      else {
        videos = [...videos, ...data.items];
        //Update State
        this.setState({ videos, pageToken: data.nextPageToken });
      }
    }
  };

  getChannelData = async () => {
    console.log("start get channel data");
    const { data } = await youtube.get("channels", {
      params: {
        part: "snippet,contentDetails,statistics,brandingSettings",
        key: this.state.apiKey,
        id: this.state.channel,
      },
    });

    const { data: channelPlaylists } = await youtube.get("playlists", {
      params: {
        part: "snippet,contentDetails",
        key: this.state.apiKey,
        channelId: this.state.channel,
        maxResults: 5,
      },
    });

    this.setState(
      {
        channelData: data.items[0],
        channelPlaylists,
        isPageLoading: false,
      },
      () => console.log("end get channel data and update state")
    );
  };

  //Helper Functions
  calculateDate = () => {
    const uploadDate = this.state.filter.uploadDate;
    let publishedAfter = new Date();

    //To Do ==> Check if calculated day in the last month (-ve value)
    if (uploadDate === "any time") {
      publishedAfter = null;
    } else if (uploadDate === "today") {
      publishedAfter = new Date(
        publishedAfter.setDate(publishedAfter.getDate() - 1)
      );
    } else if (uploadDate === "this week") {
      publishedAfter = new Date(
        publishedAfter.setDate(publishedAfter.getDate() - 7)
      );
    } else {
      publishedAfter = new Date(
        publishedAfter.setMonth(publishedAfter.getMonth() - 1)
      );
    }
    return publishedAfter;
  };

  getOrderBy = () => {
    const sortBy = this.state.filter.sortBy;

    if (sortBy === "view count") return "viewCount";
    else if (sortBy === "upload date") return "date";
    else {
      return sortBy;
    }
  };

  handleSearchModeToggle = () => {
    const searchMode = !this.state.searchMode;
    this.setState({ searchMode });
  };

  handleCloseSerachBar = () => {
    if (this.state.searchMode) this.setState({ searchMode: false });
  };

  //For Mobile
  handleFilterChange = (e) => {
    const filter = { ...this.state.filter };
    filter[e.target.id] = e.target.value;
    this.setState({ filter: filter }, async () => await this.getData());
  };

  //For PC
  handleFilterChangePC = (filterName, value) => {
    const defaultValues = {
      type: "all",
      uploadDate: "any time",
      sortBy: "relevance",
    };

    const filter = { ...this.state.filter };
    if (filter[filterName] === value) {
      filter[filterName] = defaultValues[filterName];
    } else {
      filter[filterName] = value;
    }
    this.setState({ filter }, async () => await this.getData());
  };

  handleFilterModeToggle = () => {
    const filterMode = !this.state.filterMode;
    this.setState({ filterMode });
  };

  handleQueryChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSearch = async () => {
    this.setState({
      filterMode: false,
      searchMode: false,
      isSearchLoading: true,
    });
    await this.getData();
    this.setState({ isSearchLoading: false });
  };

  handleSearchOnMount = (query) => {
    this.setState({ query: query }, async () => await this.getData());
  };

  handleChannelOnMount = async (channel) => {
    this.setState(
      { channel: channel, query: "", isSearchLoading: true },
      async () => await this.getChannelData()
    );

    this.setState({ isSearchLoading: false });
  };

  handleShowMore = async () => {
    this.setState({ isShowMoreLoading: true });
    await this.getData(this.state.pageToken);
    this.setState({ isShowMoreLoading: false });
  };

  handleScroll = async () => {
    if (
      window.innerWidth > 620 &&
      window.innerHeight + document.documentElement.scrollTop >
        0.99 * document.documentElement.offsetHeight
    ) {
      this.setState({ isShowMoreLoading: true });
      await this.getData(this.state.pageToken);
      this.setState({ isShowMoreLoading: false });
    }
  };

  render() {
    // Style of Loading Bar
    let style = this.state.isSearchLoading
      ? { width: 100, display: "block" }
      : { display: "none", width: 0 };
    return (
      <React.Fragment>
        <div className="loading-bar" style={style}></div>
        <div onScroll={this.handleScroll}>
          <div className="header-container">
            <Route
              path="/"
              render={(props) => (
                <Header
                  {...props}
                  query={this.state.query}
                  channel={this.state.channel}
                  video={this.state.video}
                  handleQueryChange={this.handleQueryChange}
                  handleSearch={this.handleSearch}
                  handleSearchOnMount={this.handleSearchOnMount}
                  handleChannelOnMount={this.handleChannelOnMount}
                  searchMode={this.state.searchMode}
                  handleSearchModeToggle={this.handleSearchModeToggle}
                  handleCloseSerachBar={this.handleCloseSerachBar}
                />
              )}
            />

            <Route
              path="/search"
              render={(props) => (
                <MobileFilter
                  filter={this.state.filter}
                  handleFilterChange={this.handleFilterChange}
                />
              )}
            />
          </div>
          {this.state.isPageLoading ? (
            <section className="loader">
              <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <p>Loading</p>
            </section>
          ) : (
            <div
              className={
                this.state.filterMode ? "container filter-mode" : "container"
              }
            >
              <Route
                path="/search"
                render={(props) => (
                  <React.Fragment>
                    <PcFilter
                      {...props}
                      handleFilterModeToggle={this.handleFilterModeToggle}
                    />
                    <PcFilterOptions
                      {...props}
                      filter={this.state.filter}
                      handleFilterChangePC={this.handleFilterChangePC}
                    />
                    <Results
                      {...props}
                      videos={this.state.videos}
                      handleShowMore={this.handleShowMore}
                      isShowMoreLoading={this.state.isShowMoreLoading}
                    />
                  </React.Fragment>
                )}
              />
              {this.state.isSearchLoading ? (
                ""
              ) : (
                <Route
                  path="/channels"
                  render={(props) => (
                    <ChannelPage
                      {...props}
                      channelData={this.state.channelData}
                      channelPlaylists={this.state.channelPlaylists.items}
                    />
                  )}
                />
              )}
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default App;

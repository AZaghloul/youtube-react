import React, { Component } from "react";
import "../../style.css";
import Header from "./../header/Header";
import MobileFilter from "./../mobile-filter/Mobile-Filter";

class App extends Component {
  state = {
    searchMode: false,
    filterMode: false,
    filter: {
      type: "all",
      uploadDate: "any time",
      sortBy: "relevance",
    },
    videos: [],
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
    this.setState({ filter: filter });
  };

  render() {
    return (
      <React.Fragment>
        <div className="header-container">
          <Header
            searchMode={this.state.searchMode}
            handleSearchModeToggle={this.handleSearchModeToggle}
            handleCloseSerachBar={this.handleCloseSerachBar}
          />
          <MobileFilter
            filter={this.state.filter}
            handleFilterChange={this.handleFilterChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

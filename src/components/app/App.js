import React, { Component } from "react";
import "../../style.css";
import Header from "./../header/Header";
import MobileFilter from "./../mobile-filter/Mobile-Filter";
import PcFilter from "./../pc-filter/pc-filter";
import PcFilterOptions from "./../pc-filter-options/pc-filter-options";

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
    this.setState({ filter });
  };

  handleFilterModeToggle = () => {
    const filterMode = !this.state.filterMode;
    this.setState({ filterMode });
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
        <div
          className={
            this.state.filterMode ? "container filter-mode" : "container"
          }
        >
          <PcFilter handleFilterModeToggle={this.handleFilterModeToggle} />
          <PcFilterOptions
            filter={this.state.filter}
            handleFilterChangePC={this.handleFilterChangePC}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

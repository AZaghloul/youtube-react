import React, { Component } from "react";
import "../../style.css";
import Header from "./../header/Header";

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

  render() {
    return (
      <React.Fragment>
        <div className="header-container">
          <Header
            searchMode={this.state.searchMode}
            handleSearchModeToggle={this.handleSearchModeToggle}
            handleCloseSerachBar={this.handleCloseSerachBar}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

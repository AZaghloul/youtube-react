import React, { Component } from "react";
import "../../style.css";

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

  render() {
    return (
      <React.Fragment>
        <h1>Hello Youtube</h1>
      </React.Fragment>
    );
  }
}

export default App;

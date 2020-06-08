import React, { Component } from "react";

import qs from "query-string";

class Header extends Component {
  componentDidMount = () => {
    const { query } = qs.parse(this.props.location.search);
    this.props.handleSearchOnMount(query);
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.location.search !== this.props.location.search) {
      this.props.handleSearch();
    }
  };

  handleSearchChange = () => {
    this.props.history.push("/search?query=" + this.props.query);
  };

  render() {
    return (
      <header
        className={this.props.searchMode ? "search-mode header" : "header"}
      >
        <img src="logo.png" className="header__mobile-logo" alt="youtube" />
        <img src="logo2.png" className="header__pc-logo" alt="youtube" />
        <p>YouTube Page</p>
        <input
          type="search"
          placeholder="search"
          required
          value={this.props.query}
          onChange={this.props.handleQueryChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              // this.props.handleSearch();
              this.handleSearchChange();
            }
          }}
        />
        <button
          onClick={this.props.handleCloseSerachBar}
          className="header__close-icon"
        />
        <i
          onClick={this.props.handleSearchModeToggle}
          className="fa fa-search"
        ></i>
      </header>
    );
  }
}

export default Header;

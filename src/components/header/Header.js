import React from "react";

const Header = (props) => {
  return (
    <header className={props.searchMode ? "search-mode header" : "header"}>
      <img src="logo.png" className="header__mobile-logo" alt="youtube" />
      <img src="logo2.png" className="header__pc-logo" alt="youtube" />
      <p>YouTube Page</p>
      <input type="search" placeholder="search" required />
      <button
        onClick={props.handleCloseSerachBar}
        className="header__close-icon"
      />
      <i onClick={props.handleSearchModeToggle} className="fa fa-search"></i>
    </header>
  );
};

export default Header;

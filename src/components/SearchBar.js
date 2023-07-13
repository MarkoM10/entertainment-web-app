import React from "react";
import "../styles/searchBar.scss";
import searchIcon from "../assets/icon-search.svg";

const SearchBar = () => {
  return (
    <div className="searchBarWraper">
      <div className="searchBar">
        <img alt="movies" src={searchIcon}></img>
        <input type="text" placeholder="Search for movies or TV series"></input>
      </div>
    </div>
  );
};
export default SearchBar;

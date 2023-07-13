import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import "../styles/content.scss";
import Trending from "../components/Trending";

const Content = () => {
  return (
    <div className="contentWrapper">
      <SearchBar />
      <div className="content">
        <Trending />
      </div>
    </div>
  );
};

export default Content;

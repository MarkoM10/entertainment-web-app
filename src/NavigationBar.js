import React from "react";
import "../src/styles/navigationBar.scss";
import logo from "../src/assets/logo.svg";
import moviesSvg from "../src/assets/icon-nav-movies.svg";
import homeSvg from "../src/assets/icon-nav-home.svg";
import tvSvg from "../src/assets/icon-nav-tv-series.svg";
import bookmark from "../src/assets/icon-nav-bookmark.svg";
import userImg from "../src/assets/image-avatar.png";

const NavigationBar = () => {
  return (
    <div className="navbar">
      <div className="logoWrapper">
        <a href="#">
          <img src={logo}></img>
        </a>
      </div>
      <div className="iconsWrapper">
        <a href="#">
          <img src={homeSvg}></img>
        </a>
        <a href="#">
          <img src={moviesSvg}></img>
        </a>
        <a href="#">
          <img src={tvSvg}></img>
        </a>
        <a href="#">
          <img src={bookmark}></img>
        </a>
      </div>
      <div className="userWrapper">
        <a href="#">
          <img src={userImg}></img>
        </a>
      </div>
    </div>
  );
};

export default NavigationBar;

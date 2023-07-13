import React from "react";
import "../styles/navigationBar.scss";
import logo from "../assets/logo.svg";
import moviesSvg from "../assets/icon-nav-movies.svg";
import homeSvg from "../assets/icon-nav-home.svg";
import tvSvg from "../assets/icon-nav-tv-series.svg";
import bookmark from "../assets/icon-nav-bookmark.svg";
import userImg from "../assets/user.png";

const NavigationBar = () => {
  return (
    <div className="navBarWrapper">
      <div className="navbar">
        <div className="logoWrapper">
          <a href="#">
            <img alt="logo" src={logo}></img>
          </a>
        </div>
        <div className="iconsWrapper">
          <a href="#">
            <img alt="home" src={homeSvg}></img>
          </a>
          <a href="#">
            <img alt="movies" src={moviesSvg}></img>
          </a>
          <a href="#">
            <img alt="movies" src={tvSvg}></img>
          </a>
          <a href="#">
            <img alt="movies" src={bookmark}></img>
          </a>
        </div>
        <div className="userWrapper">
          <a href="#">
            <img alt="movies" src={userImg}></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;

import React from "react";
import { useState, useEffect } from "react";
import database from "../data.json";
import playIcon from "../assets/icon-play.svg";
import "../styles/trending.scss";
import { FilmIcon, TvIcon } from "@heroicons/react/24/solid";
import { BookmarkIcon } from "@heroicons/react/24/outline";

const Trending = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const trendingDatabase = database.filter((movie) => movie.isTrending);
    setTrending(trendingDatabase);
  }, []);

  const handleMouseEnter = (movieTitle) => {
    const hoveredMovies = trending.map((movie) => {
      if (movieTitle === movie.title) {
        return { ...movie, isHovered: true };
      } else {
        return movie;
      }
    });
    setTrending(hoveredMovies);
  };

  const handleMouseLeave = (movieTitle) => {
    const unhoveredMovies = trending.map((movie) => {
      if (movieTitle === movie.title) {
        return { ...movie, isHovered: false };
      } else {
        return movie;
      }
    });
    setTrending(unhoveredMovies);
  };

  console.log(trending);

  return (
    <div className="trendingWrapper">
      <h2>Trending</h2>
      <div className="trendingVideos">
        {trending.map((movie) => (
          <div
            className="trendingVideo"
            onMouseEnter={() => handleMouseEnter(movie.title)}
            onMouseLeave={() => handleMouseLeave(movie.title)}
            key={movie.title}
            style={{
              background: `url(${movie.thumbnail.trending.large})`,
            }}
          >
            <div className="bookMarkWrapper">
              <BookmarkIcon className="bookmarkIcon" />
            </div>
            {movie.isHovered && (
              <button className="playBtn">
                <img alt="playBtn" src={playIcon} />
                <label>Play</label>
              </button>
            )}
            <div className="trendingDataTitle">
              <div className="trendingData">
                <label>
                  {movie.year} <span>&#9679;</span>
                  <span>
                    {movie.category === "Movie" ? <FilmIcon /> : <TvIcon />}
                  </span>
                </label>
                <label>
                  {movie.category} <span>&#9679;</span>
                </label>
                <label>{movie.rating} </label>
              </div>
              <div className="trendingMovieTitle">
                <label>{movie.title}</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;

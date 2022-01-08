import React, { useEffect, useState } from "react";
import axios from "./axios.js";
import requests from "./Request.js";
import "./Banner.css";

function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
      return req;
    }
    fetchData();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  console.log(movies);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-content">
        <h1 class="banner-title">
          {movies?.title || movies?.name || movies?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>

        <h1 className="banner-description">
          {truncate(movies?.overview, 150)}
        </h1>
      </div>

      <div className="banner-fadebottom" />
    </header>
  );
}

export default Banner;

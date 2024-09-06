import React from "react";
import "./Poster.style.css";
import { FaPlay } from "react-icons/fa";

const Poster = ({ data }) => {
  const headUrl = "https://media.themoviedb.org/t/p/w600_and_h900_bestv2";
  return (
    <div
      className="poster-section"
      style={{
        backgroundImage: `url(${headUrl + data?.poster_path})`,
      }}
    >
      <div className="poster-overlay">
        <FaPlay size={48} />
        <h3>트레일러 재생</h3>
      </div>
    </div>
  );
};

export default Poster;

import React from "react";
import Badge from "react-bootstrap/Badge";
import "./MovieCard.style.css";
import allSVG from "../../../../assets/images/all.svg";
const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path})`,
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h3>{movie.title}</h3>
        {movie.genre_ids.map((id, index) => {
          return (
            <Badge bg="danger" key={index} style={{ marginLeft: "4px" }}>
              {id}
            </Badge>
          );
        })}
        <div>⭐️ {movie.vote_average.toFixed(1)}</div>
        <div>👥 {movie.popularity.toFixed(1)}</div>
        <div>
          {movie.adult ? (
            "🔞"
          ) : (
            <img src={allSVG} alt="description" width={20} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

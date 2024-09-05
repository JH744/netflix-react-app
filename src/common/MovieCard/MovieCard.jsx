import React from "react";
import Badge from "react-bootstrap/Badge";
import "./MovieCard.style.css";
import allSVG from "../../assets/images/all.svg";
import { useMoviesGenreQuery } from "../../hooks/useMoviesGenre";
import { useNavigate } from "react-router-dom";
import { showGenre } from "../../utils/showGenre";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMoviesGenreQuery();
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path})`,
      }}
      className="movie-card"
      onClick={() => {
        navigate(`/movies/${movie.id}`);
      }}
    >
      <div className="overlay">
        <h4>{movie.title}</h4>
        {showGenre(movie.genre_ids, genreData).map((genre, index) => {
          return (
            <Badge bg="danger" key={index} style={{ marginLeft: "4px" }}>
              {genre}
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

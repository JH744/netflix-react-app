import React from "react";
import Badge from "react-bootstrap/Badge";
import "./MovieCard.style.css";
import allSVG from "../../assets/images/all.svg";
import { useMoviesGenreQuery } from "../../hooks/useMoviesGenre";
const MovieCard = ({ movie }) => {
  const { data: genreData } = useMoviesGenreQuery();

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };
  return (
    <div
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path})`,
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h4>{movie.title}</h4>
        {showGenre(movie.genre_ids).map((genre, index) => {
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

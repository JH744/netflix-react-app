import React from "react";
import { useMoviesGenreQuery } from "../../../hooks/useMoviesGenre";
import Badge from "react-bootstrap/Badge";
const Filter = ({ setGenre }) => {
  const { data, isLoading, isError, error } = useMoviesGenreQuery();
  console.log("genreData", data);
  return (
    <div>
      {data?.map((genre, index) => (
        <Badge
          onClick={(genre) => {
            setGenre(genre.id);
          }}
          bg="danger"
          key={index}
          style={{ marginLeft: "4px", cursor: "pointer" }}
        >
          {genre.name}
        </Badge>
      ))}
    </div>
  );
};

export default Filter;

import React from "react";
import { useMoviesGenreQuery } from "../../../hooks/useMoviesGenre";
import Badge from "react-bootstrap/Badge";

const Filter = ({ setGenre, setPage }) => {
  const { data, isLoading, isError, error } = useMoviesGenreQuery();
  console.log("genreData", data);

  const onClick = (e) => {
    console.log("장르 ID:", e.dataset.genreId); // 특정 데이터를 출력하고 싶다면 dataset을 활용
    setGenre(e.dataset.genreId);
    setPage(1);
  };

  return (
    <div>
      {data?.map((genre, index) => (
        <div
          key={index}
          data-genre-id={genre.id} // 장르 ID를 dataset으로 전달 가능
          onClick={(event) => {
            onClick(event.currentTarget);
          }}
          style={{
            display: "inline-block",
            marginLeft: "4px",
            cursor: "pointer",
          }} // 스타일 조정
        >
          <Badge bg="danger">{genre.name}</Badge>
        </div>
      ))}
    </div>
  );
};

export default Filter;

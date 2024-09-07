import React from "react";
import { useMoviesGenreQuery } from "../../../hooks/useMoviesGenre";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

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
      <DropdownButton id="dropdown-item-button" title="장르별" variant="danger">
        {data?.map((genre, index) => (
          <Dropdown.Item
            as="button"
            key={index}
            data-genre-id={genre.id} // 장르 ID를 dataset으로 전달 가능
            onClick={(event) => {
              onClick(event.currentTarget);
            }}
          >
            {genre.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
};
{
  /* <Badge bg="danger">{genre.name}</Badge> */
}
export default Filter;

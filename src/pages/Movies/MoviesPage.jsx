import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSearchMovieQuery } from "../../hooks/useSearchMovies";
import Alert from "react-bootstrap/Alert";
import LodingSpinner from "../../components/LodingSpinner";
import "./MoviesPage.style.css";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import Filter from "./components/Filter";
import NoResults from "./components/NoResults";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./PaginationStyles.css";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState(null);
  console.log("genre", genre);
  const [sortedData, setSortedData] = useState(null);
  const keyword = searchParams.get("q");
  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    genre,
    page,
  });
  console.log(keyword);
  console.log("data", data);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  const handleSort = (order) => {
    let sorted = [...(data?.results || [])];
    if (order === "UP") {
      sorted.sort((a, b) => b.popularity - a.popularity); // 높은순
    } else if (order === "DOWN") {
      sorted.sort((a, b) => a.popularity - b.popularity); // 낮은순
    }
    setSortedData(sorted);
  };

  const handleGenreSort = () => {
    if (genre && keyword) {
      const filteredMovies = sortedData?.filter((movie) => {
        return movie?.genre_ids.some((id) => {
          console.log("id : ", id, "genre:", genre);
          return id == genre;
        });
      });
      console.log("filteredMovies", filteredMovies);
      setSortedData(filteredMovies);
    }
  };

  useEffect(() => {
    if (data?.results) {
      setSortedData(data.results);
    }
  }, [data]);

  useEffect(() => {
    handleGenreSort();
  }, [genre]);

  if (isLoading) return <LodingSpinner />;
  if (isError) return <Alert variant="danger">{error.message};</Alert>;
  if (data?.results?.length === 0) return <NoResults />;

  return (
    <div className="search-page-container">
      <div className="movie-contents">
        {/* 필터 버튼 영역 */}
        <div className="movie-sortTab">
          <div className="genre-list">
            <Filter setGenre={setGenre} setPage={setPage} />
          </div>
          <div className="popular-dropdown">
            <DropdownButton
              id="dropdown-item-button"
              title="인기도"
              variant="danger"
            >
              <Dropdown.Item as="button" onClick={() => handleSort("UP")}>
                높은순
              </Dropdown.Item>
              <Dropdown.Item as="button" onClick={() => handleSort("DOWN")}>
                낮은순
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        {/* 영화 리스트 영역 */}
        {sortedData?.length == 0 ? (
          <div className="movie-card-list">
            <h5>조회되는 결과가 없습니다.</h5>
          </div>
        ) : (
          <>
            <div className="movie-card-list">
              {(sortedData || []).map((movie, index) => (
                <MovieCard movie={movie} key={index} />
              ))}
            </div>
            <ReactPaginate
              previousLabel="<"
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3} // 기본적으로 보여줄 페이지범위
              marginPagesDisplayed={1} // 처음과 끝을 기준으로 보여줄 페이지 수
              pageCount={data?.total_pages} // 전체 페이지 수
              pageClassName="page-item"
              previousClassName="page-item"
              nextClassName="page-item"
              breakClassName="page-item"
              previousLinkClassName="page-link"
              pageLinkClassName="page-link"
              nextLinkClassName="page-link"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
              forcePage={page - 1}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default MoviesPage;

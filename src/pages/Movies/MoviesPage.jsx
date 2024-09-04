import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSearchMovieQuery } from "../../hooks/useSearchMovies";
import Alert from "react-bootstrap/Alert";
import LodingSpinner from "../../components/LodingSpinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./MoviesPage.style.css";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import Filter from "./components/Filter";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState(null);
  const keyword = searchParams.get("q");
  console.log(keyword);

  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });
  console.log("data", data);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  if (isLoading) return <LodingSpinner />;
  if (isError) return <Alert variant="danger">{error.message};</Alert>;
  return (
    <Container className="search-page-container">
      <Row>
        <Col lg={4} xs={12}>
          <Filter setGenre={setGenre} />
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie, index) => (
              <Col key={index} lg={4} xs={12}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
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
        </Col>
      </Row>
    </Container>
  );
};

export default MoviesPage;

import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePoplarMovies";
import Alert from "react-bootstrap/Alert";
import { ClipLoader } from "react-spinners";
import "react-multi-carousel/lib/styles.css";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import responsive from "../../../../constants/responsive";

const PopularMoviesSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading)
    return <ClipLoader color="#E90813" size={65} speedMultiplier={1.2} />;
  if (isError) return <Alert variant="danger">{error.message}</Alert>;
  return (
    <MovieSlider
      data={data}
      title={"지금 가장 뜨거운 인기작"}
      responsive={responsive}
    />
  );
};

export default PopularMoviesSlide;

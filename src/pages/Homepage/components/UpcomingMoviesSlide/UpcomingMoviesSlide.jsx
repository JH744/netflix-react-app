import React from "react";
import Alert from "react-bootstrap/Alert";
import { ClipLoader } from "react-spinners";
import "react-multi-carousel/lib/styles.css";
import { useUpcomingMoviesQuery } from "../../../../hooks/useUpcomingMovies";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import responsive from "../../../../constants/responsive";

const UpcomingMoviesSlide = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

  if (isLoading) <ClipLoader color="#E90813" size={65} speedMultiplier={1.2} />;
  if (isError) <Alert variant="danger">{error.message};</Alert>;
  return (
    <MovieSlider
      data={data}
      title={"기대되는 최신 개봉작"}
      responsive={responsive}
    />
  );
};

export default UpcomingMoviesSlide;

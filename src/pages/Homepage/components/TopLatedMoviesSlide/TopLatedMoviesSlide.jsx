import React from "react";
import Alert from "react-bootstrap/Alert";
import { ClipLoader } from "react-spinners";
import "react-multi-carousel/lib/styles.css";
import { useTopLatedMoviesQuery } from "../../../../hooks/useTopLatedMovies";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import responsive from "../../../../constants/responsive";
const TopLatedMoviesSlide = () => {
  const { data, isLoading, isError, error } = useTopLatedMoviesQuery();

  if (isLoading) <ClipLoader color="#E90813" size={65} speedMultiplier={1.2} />;
  if (isError) <Alert variant="danger">{error.message};</Alert>;
  return (
    <MovieSlider
      data={data}
      title={"최고의 평점을 받은 명작들"}
      responsive={responsive}
    />
  );
};

export default TopLatedMoviesSlide;

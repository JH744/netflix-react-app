import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePoplarMovies";
import Alert from "react-bootstrap/Alert";
import { ClipLoader } from "react-spinners";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";

const PopularMoviesSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  if (isLoading)
    return <ClipLoader color="#E90813" size={65} speedMultiplier={1.2} />;

  if (isError) return <Alert variant="danger">{error.message};</Alert>;
  return (
    <div>
      <h3>Popular Movies</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {data.results.map((movie, index) => {
          return <MovieCard movie={movie} key={index} />;
        })}
      </Carousel>
    </div>
  );
};

export default PopularMoviesSlide;

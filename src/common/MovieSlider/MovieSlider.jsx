import React from "react";
import Carousel from "react-multi-carousel";
import MovieCard from "../MovieCard/MovieCard";
import responsive from "../../constants/responsive";
import "./MovieSlider.style.css";

const MovieSlider = ({ data, title }) => {
  return (
    <div className="slide-section">
      <h3>{title}</h3>
      <Carousel
        infinite={true}
        centerMode={false}
        slidesToSlide={2}
        autoPlay={true} //자동재생
        itemClass="carousel-item-padding-10-px"
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

export default MovieSlider;

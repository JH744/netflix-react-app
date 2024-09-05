import React from "react";
import Carousel from "react-multi-carousel";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieSlider.style.css";

const MovieSlider = ({ data, title, responsive }) => {
  return (
    <div className="slide-section">
      <h3>{title}</h3>
      <Carousel
        // showDots={true} // 점 표시
        partialVisible={true} // 다음 항목 미리보기
        infinite={true}
        centerMode={false} // 양쪽에 이전다음 항목 미리보기
        // slidesToSlide={2} // 한번에 넘길 슬라이드 수
        autoPlay={true} //자동재생
        itemClass="carousel-item-padding-10-px carousel-item-custom"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {data?.results.map((movie, index) => {
          return <MovieCard movie={movie} key={index} />;
        })}
      </Carousel>
    </div>
  );
};

export default MovieSlider;

import React from "react";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";

const RecommendMovies = ({ recomend }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4, // 보여질 카드 수
    },
    tabletL: {
      breakpoint: { max: 1200, min: 800 },
      items: 3,
    },
    tabletS: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <MovieSlider data={recomend} title={"추천영화"} responsive={responsive} />
  );
};

export default RecommendMovies;

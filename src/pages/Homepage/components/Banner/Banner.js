import React, { useEffect } from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePoplarMovies";
import Alert from "react-bootstrap/Alert";
import "./Banner.style.css";
import LodingSpinner from "../../../../components/LodingSpinner";

const Banner = () => {
  const headUrl = "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2";
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log("data", data);

  if (isLoading) return <LodingSpinner />;
  if (isError) return <Alert variant="danger">{error.message};</Alert>;
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${headUrl + data?.results[0].poster_path})`,
      }}
    >
      <div className="banner-text-area">
        <h1>{data?.results[0].title}</h1>
        <p>{data?.results[0].overview}</p>
      </div>
    </div>
  );
};

export default Banner;

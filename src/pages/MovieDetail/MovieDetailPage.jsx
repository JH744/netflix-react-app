import React from "react";
import { useMoviesDetailQuery } from "../../hooks/useMoviesDetail";
import { useParams } from "react-router-dom";
import "./movieDetailPage.style.css";
import { useMovieReviews } from "../../hooks/useMovieReviews";
import ReviewCard from "./components/ReviewCard";
import { useMovieRecommendations } from "../../hooks/useMovieRecommendations";
import RecommendMovies from "./components/RecommendMovies";
import MovieInfo from "./components/MovieInfo";
import Poster from "./components/Poster";
import Alert from "react-bootstrap/Alert";
import { ClipLoader } from "react-spinners";
import { useMovieVideoQuery } from "../../hooks/useMoviesVideo";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useMoviesDetailQuery(id);
  const { data: reviewData } = useMovieReviews({ id });
  const { data: recomend } = useMovieRecommendations({ id });
  const { data: videoData } = useMovieVideoQuery({ id });
  console.log("id", id);
  console.log("detail", data);
  console.log("reviewsData", reviewData);
  console.log("recomend", recomend);
  console.log("videoData", videoData);

  if (isLoading) <ClipLoader color="#E90813" size={65} speedMultiplier={1.2} />;
  if (isError) <Alert variant="danger">{error.message};</Alert>;

  return (
    <div className="detail-page-container">
      {/* 포스터와 영화정보 */}
      <div className="detail-container">
        <Poster data={data} videoData={videoData} />
        <MovieInfo data={data} />
      </div>
      {/* 영화리뷰 */}
      <div className="details-review">
        {reviewData?.map((review, index) => (
          <ReviewCard review={review} key={index} />
        ))}
      </div>
      {/* 추천영화탭 */}
      <div>
        <RecommendMovies recomend={recomend} />
      </div>
    </div>
  );
};

export default MovieDetailPage;

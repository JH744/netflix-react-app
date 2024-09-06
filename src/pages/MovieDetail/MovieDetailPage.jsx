import React, { useState } from "react";
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
import Button from "react-bootstrap/Button";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useMoviesDetailQuery(id);
  const { data: reviewData } = useMovieReviews({ id });
  const { data: recomend } = useMovieRecommendations({ id });
  const { data: videoData } = useMovieVideoQuery({ id });
  const [moveReviewTab, setReviewMoveTab] = useState(true);

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
      <div className="review-btn-box">
        <Button
          variant={moveReviewTab ? "danger" : "secondary"}
          size="lg"
          onClick={() => {
            setReviewMoveTab(true);
          }}
        >
          리뷰탭
        </Button>
        <Button
          variant={moveReviewTab ? "secondary" : "danger"}
          size="lg"
          onClick={() => {
            setReviewMoveTab(false);
          }}
        >
          추천영화
        </Button>
      </div>

      {moveReviewTab ? (
        <div className="details-review">
          <h3>글로벌 리뷰</h3>
          {reviewData?.map((review, index) => (
            <ReviewCard review={review} key={index} />
          ))}
        </div>
      ) : (
        <div>
          <RecommendMovies recomend={recomend} />
        </div>
      )}
    </div>
  );
};

export default MovieDetailPage;

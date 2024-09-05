import React from "react";
import { useMoviesDetailQuery } from "../../hooks/useMoviesDetail";
import { useParams } from "react-router-dom";
import "./movieDetailPage.style.css";
import { showGenre } from "../../utils/showGenre";
import Badge from "react-bootstrap/Badge";
import { useMovieReviews } from "../../hooks/useMovieReviews";
import ReviewCard from "./components/ReviewCard";
import { useMovieRecommendations } from "../../hooks/useMovieRecommendations";
import MovieSlider from "../../common/MovieSlider/MovieSlider";
import RecommendMovies from "./components/RecommendMovies";

const MovieDetailPage = () => {
  const { id } = useParams();
  console.log("id", id);
  const { data, isLoading, isError, error } = useMoviesDetailQuery(id);
  const { data: reviewData } = useMovieReviews({ id });
  const { data: recomend } = useMovieRecommendations({ id });
  console.log("detail", data);
  console.log("reviewsData", reviewData);
  console.log("recomend", recomend);

  const headUrl = "https://media.themoviedb.org/t/p/w600_and_h900_bestv2";
  return (
    <div className="detail-page-container">
      <div className="detail-container">
        <div
          className="poster-section"
          style={{
            backgroundImage: `url(${headUrl + data?.poster_path})`,
          }}
        />
        <div className="info-section">
          <div className="details-genre">
            {data?.genres.map((genre, index) => {
              return (
                <Badge bg="danger" key={index} style={{ marginLeft: "4px" }}>
                  {genre.name}
                </Badge>
              );
            })}
          </div>
          <div className="details-release-date">
            개봉일:{data?.release_date}
          </div>
          <div className="details-title">
            <h3>{data?.title}</h3>
          </div>
          <div className="details-tagline">{data?.tagline}</div>
          <div className="details-rate">
            <div>⭐️ {data?.vote_average.toFixed(1)}</div>
            <div>👥 {data?.popularity.toFixed(1)}</div>
            <div>{data?.adult}</div>
          </div>
          <div className="details-overview">
            {" "}
            <div>
              <h4>줄거리</h4>
              {data?.overview}
            </div>
          </div>
          <div className="details-budget">예산 :{data?.budget}</div>
          <div className="details-revenue">수익 : {data?.revenue}</div>
          <div className="details-trailer">트레일러버튼</div>
        </div>
      </div>

      <div className="details-review">
        {reviewData?.map((review, index) => (
          <ReviewCard review={review} key={index} />
        ))}
      </div>
      <div>
        <RecommendMovies recomend={recomend} />
      </div>
    </div>
  );
};

export default MovieDetailPage;

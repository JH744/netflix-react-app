import React from "react";
import Badge from "react-bootstrap/Badge";
import { FaPlay } from "react-icons/fa";

const MovieInfo = ({ data }) => {
  return (
    <div className="info-section">
      <div className="details-genre">
        {data?.genres.map((genre, index) => {
          return (
            <Badge bg="danger" key={index} style={{ marginRight: "4px" }}>
              {genre.name}
            </Badge>
          );
        })}
      </div>
      <div className="details-release-date">개봉일 : {data?.release_date}</div>
      <div className="details-title">
        <h2>{data?.title}</h2>
        <span className="details-tagline text-gray">{data?.tagline}</span>
      </div>
      <div className="details-rate">
        <div>⭐️ {data?.vote_average.toFixed(1)}</div>
        <div>👥 {data?.popularity.toFixed(1)}</div>
      </div>
      <div className="details-overview">
        {" "}
        <div className="overview-box">
          {data?.overview ? (
            <p>{data?.overview}</p>
          ) : (
            <p>줄거리 정보가 없습니다.</p>
          )}
        </div>
      </div>
      <div className="details-runtime">
        <Badge bg="danger">상영시간</Badge>
        <span>
          {" "}
          {`${Math.floor(data?.runtime / 60)}시간 ${data?.runtime % 60}분`}
        </span>
      </div>
      <div className="details-budget">
        <Badge bg="danger">예산</Badge>
        <span> $ {data?.budget.toLocaleString("en-US")}</span>
      </div>

      <div className="details-revenue">
        <Badge bg="danger">수익</Badge>
        <span> $ {data?.revenue.toLocaleString("en-US")}</span>
      </div>
      <div className="details-trailer">
        <Badge bg="danger" className="trailer-btn">
          <span>트레일러 재생</span>
          <FaPlay size={12} />
        </Badge>
      </div>
    </div>
  );
};

export default MovieInfo;

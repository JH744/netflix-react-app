import Badge from "react-bootstrap/Badge";
import { FaPlay } from "react-icons/fa";
import TrailerModal from "./TrailerModal/TrailerModal";
import { useState } from "react";

const MovieInfo = ({ data, videoData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = { isModalOpen, setIsModalOpen };
  console.log("영상있는가", videoData);

  return (
    <div className="info-section">
      {isModalOpen && (
        <TrailerModal openModal={openModal} videoData={videoData} />
      )}
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
      {videoData?.length !== 0 && (
        <h4
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
          style={{ cursor: "pointer" }}
        >
          <Badge bg="danger">트레일러 ▶️</Badge>
        </h4>
      )}
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
    </div>
  );
};

export default MovieInfo;

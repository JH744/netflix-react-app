import React, { useState } from "react";
import "./Poster.style.css";
import { FaPlay } from "react-icons/fa";
import TrailerModal from "./TrailerModal";

const Poster = ({ data, videoData }) => {
  const headUrl = "https://media.themoviedb.org/t/p/w600_and_h900_bestv2";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = { isModalOpen, setIsModalOpen };
  return (
    <>
      {isModalOpen && (
        <TrailerModal openModal={openModal} videoData={videoData} />
      )}
      <div
        className="poster-section"
        style={{
          backgroundImage: `url(${headUrl + data?.poster_path})`,
        }}
      >
        <div
          className="poster-overlay"
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
        >
          <FaPlay size={48} />
          <h5>트레일러 재생</h5>
        </div>
      </div>
    </>
  );
};

export default Poster;

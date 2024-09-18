import React from "react";
import Modal from "react-bootstrap/Modal";
import "./TrailerModal.style.css";
import YouTube from "react-youtube";

const TrailerModal = ({ openModal, videoData }) => {
  const { isModalOpen, setIsModalOpen } = openModal;

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Modal
      show={isModalOpen}
      onHide={() => {
        setIsModalOpen(false);
      }}
      backdrop={true}
      keyboard={true}
      size="xl"
    >
      <div className="trailer-movie">
        {videoData[0] ? (
          <YouTube
            opts={opts}
            videoId={videoData[0]?.key}
            className={"youtube-player"}
            loading={undefined}
          />
        ) : (
          <h1>재생 가능한 트레일러가 없습니다.</h1>
        )}
      </div>
    </Modal>
  );
};

export default TrailerModal;

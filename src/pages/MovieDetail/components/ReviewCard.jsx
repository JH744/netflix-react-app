import React, { useState } from "react";
import "./ReviewCard.style.css";
import Badge from "react-bootstrap/Badge";
const ReviewCard = ({ review }) => {
  const [openReviewTap, setOpenReviewTap] = useState(false);

  return (
    <div className="review-card">
      <div
        className="tap-box"
        style={{ height: openReviewTap ? "auto" : "90px" }}
      >
        <div className="review-author ">
          <h4>{review.author}</h4>
          <div className="review-created_at">
            {review.created_at.slice(0, 10)}
          </div>
        </div>
        <div className="review-content">{review.content}</div>
      </div>
      <Badge
        bg="danger"
        style={{ width: "70px" }}
        className="openBtn"
        onClick={() => {
          setOpenReviewTap(!openReviewTap);
        }}
      >
        {openReviewTap ? "접기" : "펼치기"}
      </Badge>
    </div>
  );
};

export default ReviewCard;

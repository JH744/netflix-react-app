import React from "react";
import "./ReviewCard.style.css";

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <div className="review-author">{review.author}</div>
      <div className="review-created_at">{review.created_at}</div>
      <div className="review-content">{review.content}</div>
    </div>
  );
};

export default ReviewCard;

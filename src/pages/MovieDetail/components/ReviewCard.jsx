import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div>
      <span>리뷰어:{review.author}</span>
      <br />
      <span>리뷰내용:{review.content}</span>
    </div>
  );
};

export default ReviewCard;

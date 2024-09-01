import React from "react";
import { ClipLoader } from "react-spinners";
const LodingSpinner = () => {
  return (
    <div
      className="d-flex p-3 justify-content-center align-items-center gap-3 "
      style={{ height: "90vh" }}
    >
      <ClipLoader color="#E90813" size={65} speedMultiplier={1.2} />
      <h2>로드 중...</h2>
    </div>
  );
};

export default LodingSpinner;

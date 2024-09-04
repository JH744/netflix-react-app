import React from "react";
import "./NoResults.style.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const NoResults = () => {
  const navigate = useNavigate();

  return (
    <div className="no-results">
      <h4>입력하신 검색어와 일치하는 결과가 없습니다.</h4>
      <Button
        variant="light"
        onClick={() => {
          navigate("/");
        }}
      >
        돌아가기
      </Button>
    </div>
  );
};

export default NoResults;

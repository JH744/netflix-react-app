import React, { useEffect, useState } from "react";
import netflix from "../../../assets/images/netflix.gif";
import "./OpenLogo.style.css";

const OpenLogo = () => {
  const [opening, setOpening] = useState(true);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setOpened(sessionStorage.getItem("opened") === "true"); // session에서 오픈여부 기록을 가져옴
    if (opened !== true) {
      // opened 기록이 false라면 타이머와 함께 오프닝로고 보여주기
      const timer = setTimeout(() => {
        setOpening(false);
        sessionStorage.setItem("opened", "true");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);
  if (opened) return "";
  return (
    <div className={`opening-page ${opening ? "fade-in" : "fade-out"}`}>
      <img src={netflix} alt="Logo" className="opening-logo" />
    </div>
  );
};

export default OpenLogo;

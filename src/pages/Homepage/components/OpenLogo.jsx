import React, { useEffect, useState } from "react";
import netflix from "../../../assets/images/netflix.gif";
import "./OpenLogo.style.css";

const OpenLogo = () => {
  const [opening, setOpening] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpening(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`opening-page ${opening ? "fade-in" : "fade-out"}`}>
      <img src={netflix} alt="Logo" className="opening-logo" />
    </div>
  );
};

export default OpenLogo;

import React, { useState } from "react";
import Banner from "./components/Banner/Banner";
import PopularMoviesSlide from "./components/PopularMoviesSlide/PopularMoviesSlide";
import TopLatedMoviesSlide from "./components/TopLatedMoviesSlide/TopLatedMoviesSlide";
import UpcomingMoviesSlide from "./components/UpcomingMoviesSlide/UpcomingMoviesSlide";
import "./HomPage.style.css";
import OpenLogo from "./components/OpenLogo";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <OpenLogo />
      <div className="slide-container">
        <PopularMoviesSlide />
        <TopLatedMoviesSlide />
        <UpcomingMoviesSlide />
      </div>
    </div>
  );
};

export default HomePage;

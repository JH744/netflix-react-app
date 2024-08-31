import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app-Layout">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default AppLayout;

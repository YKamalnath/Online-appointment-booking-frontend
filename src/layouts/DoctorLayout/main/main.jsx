import React from "react";
import { Outlet } from "react-router-dom";

import "./main.css";

const main = () => {
  return (
    <main className="main-container">
       
      <Outlet />
    </main>
  );
};

export default main;


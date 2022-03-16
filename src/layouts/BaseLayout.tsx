import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const BaseLayout: React.FC = () => {
  return (
    <div id="wrapper">
      <Header />
      <div id="content-wrapper" className="d-flex flex-column">
        <main className="container">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default BaseLayout;

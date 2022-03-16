import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BaseLayout: React.FC = () => {
  return (
    <div id="wrapper">
      <Header />
      <div id="content-wrapper" className="d-flex flex-column">
        <main className="container">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default BaseLayout;

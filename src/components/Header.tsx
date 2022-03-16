import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">xxxlDigital</span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;

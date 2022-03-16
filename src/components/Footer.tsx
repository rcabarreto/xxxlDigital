import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import Logo from "../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <img src={Logo} alt="Logo" height={30} className="header-logo" />
          </Link>
          <span className="text-muted">© 2021 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <Link to="#" className="text-muted">
              <BsTwitter />
            </Link>
          </li>
          <li className="ms-3">
            <Link to="#" className="text-muted">
              <BsFacebook />
            </Link>
          </li>
          <li className="ms-3">
            <Link to="#" className="text-muted">
              <BsInstagram />
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;

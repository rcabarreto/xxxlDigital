import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/logo.png';

const Header: React.FC = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <img src={Logo} alt="Logo" height={40} className="header-logo" />
        </Link>

        <div className="d-flex col-12 col-md-6 mb-2 justify-content-center mb-md-0">
          <form className="w-100">
            <input type="search" className="form-control w" placeholder="Search..." aria-label="Search" />
          </form>
        </div>

        <div className="col-md-3 text-end">
          <a
            href="#"
            className="d-block link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;

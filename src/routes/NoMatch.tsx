import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="text-center mt-5">
        <h1>404</h1>
        <p className="lead text-gray-800 mb-5">Page Not Found</p>
        <Link to="/">&larr; Back to Home</Link>
      </div>
    </div>
  );
};

export default NoMatch;

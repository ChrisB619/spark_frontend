import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      {/* Main Wrapper */}
      <div className="error-page">
        <div className="main-wrapper">
          <div className="error-box">
            <h1>404</h1>
            <h3>
              <i className="fa-solid fa-triangle-exclamation" /> Oops! Page not
              found!
            </h3>
            <p>The page you requested was not found.</p>
            <Link to="/admin-dashboard" className="btn btn-custom">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;

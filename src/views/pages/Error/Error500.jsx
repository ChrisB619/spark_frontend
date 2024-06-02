import React from "react";
import { Link } from "react-router-dom";

const Error500 = () => {
  return (
    <>
      <div className="error-page">
        {/* Main Wrapper */}
        <div className="main-wrapper">
          <div className="error-box">
            <h1>500</h1>
            <h3>
              <i className="fa-solid fa-triangle-exclamation" /> Oops! Something
              went wrong
            </h3>
            <p>The page you requested was not found.</p>
            <Link to="/admin-dashboard" className="btn btn-custom">
              Back to Home
            </Link>
          </div>
        </div>
        {/* /Main Wrapper */}
      </div>
    </>
  );
};

export default Error500;

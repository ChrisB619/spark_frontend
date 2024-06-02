/* eslint-disable react/prop-types */
import React from "react";
import { Link, useLocation } from "react-router-dom";

const UserDashboardHeader = (props) => {
  const location = useLocation();
  let pathname = location.pathname;

  return (
    <div className="card">
      <div className="card-body">
        <ul className="nav nav-tabs nav-tabs-solid nav-justified">
          <li className="nav-item">
            <Link
              className={`nav-link ${
                pathname.includes("user-dashboard") ? "active" : ""
              }`}
              to="/user-dashboard"
            >
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                pathname.includes("user-all-jobs") ? "active" : ""
              }`}
              to="/user-all-jobs"
            >
              All{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                pathname.includes("saved-jobs") ? "active" : ""
              }`}
              to="/saved-jobs"
            >
              Saved
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                pathname.includes("applied-jobs") ? "active" : ""
              }`}
              to="/applied-jobs"
            >
              Applied
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                pathname === "/interviewing" ||
                pathname.includes("job-aptitude") ||
                pathname.includes("questions")
                  ? "active"
                  : ""
              }`}
              to="/interviewing"
            >
              Interviewing
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                pathname.includes("offered-jobs") ? "active" : ""
              }`}
              to="/offered-jobs"
            >
              Offered
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                pathname.includes("visited-jobs") ? "active" : ""
              }`}
              to="/visited-jobs"
            >
              Visitied{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                pathname.includes("archived-jobs") ? "active" : ""
              }`}
              to="/archived-jobs"
            >
              Archived{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDashboardHeader;

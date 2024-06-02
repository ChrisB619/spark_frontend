/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const EmailSidebar = () => {
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div className="sidebar-menu">
          <ul>
            <li>
              <Link
                onClick={() => localStorage.setItem("firstload", "true")}
                to="/admin-dashboard">
                <i className="la la-home" /> <span>Back to Home</span>
              </Link>
            </li>
            <li className="active">
              <Link to="/mail/inbox">
                Inbox <span className="mail-count">(21)</span>
              </Link>
            </li>
            <li>
              <Link to="#">Starred</Link>
            </li>
            <li>
              <Link to="#">Sent Mail</Link>
            </li>
            <li>
              <Link to="#">Trash</Link>
            </li>
            <li>
              <Link to="#">
                Draft <span className="mail-count">(8)</span>
              </Link>
            </li>
            <li className="menu-title">
              Label{" "}
              <Link to="#">
                <i className="fa fa-plus" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa fa-circle text-success mail-label" /> Work
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa fa-circle text-danger mail-label" /> Office
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa fa-circle text-warning mail-label" /> Personal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmailSidebar;

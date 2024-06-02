import React from "react";

import { Link } from "react-router-dom";
import EmailContent from "./emailContent";

const Email = () => {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Inbox</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/admin-dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Inbox</li>
              </ul>
            </div>
            <div className="col-auto float-end ms-auto">
              <Link to="/email/compose" className="btn add-btn">
                <i className="fa fa-plus" /> Compose
              </Link>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <EmailContent />
      </div>
    </div>
  );
};

export default Email;

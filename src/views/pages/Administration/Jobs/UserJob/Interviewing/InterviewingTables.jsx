import React, { useState } from "react";
import AptitudeTable from "./AptitudeTable";
import { Link } from "react-router-dom";
import ScheduleTable from "./ScheduleTable";

const InterviewingTables = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <ul className="nav nav-tabs nav-tabs-solid nav-justified flex-column">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      activeTab === "home" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("home")}
                    to="#home"
                  >
                    Apptitude
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      activeTab === "menu1" ? "active" : ""
                    }`}
                    to="#menu1"
                    onClick={() => handleTabClick("menu1")}
                  >
                    Schedule Interview
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              <div className="tab-content">
                <div
                  id="home"
                  className={`tab-pane ${
                    activeTab === "home" ? "show active" : "fade"
                  }`}
                >
                  <div className="card-box">
                    <AptitudeTable />
                  </div>
                </div>
                <div
                  id="menu1"
                  className={`tab-pane ${
                    activeTab === "menu1" ? "show active" : "fade"
                  }`}
                >
                  <div className="card-box">
                    <ScheduleTable />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewingTables;

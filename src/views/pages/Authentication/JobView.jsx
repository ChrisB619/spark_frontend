import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JobModelPopup from "../../../components/modelpopup/JobModelPopup";
import axios from "axios";
import Breadcrumbs from "../../../components/Breadcrumbs";
import ApplyJobModelPopup from "../../../components/modelpopup/ApplyJobModelPopup";
import { base_url } from "../../../base_urls";
import Header from "../../layout/Header";

const JobView = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(base_url + "/api/jobviewlist.json")
      .then((res) => setUsers(res.data));
  }, []);

  const userElements = users.map((user, index) => ({
    key: index,
    id: user.id,
    label: user.label,
    icon: user.icon,
    value: user.value,
  }));

  return (
    <>
      <div className="main-wrapper">
        {/* Page Wrapper */}
        <Header />
        <div className="page-wrapper job-wrapper">
          {/* Page Content */}
          <div className="content container">
            {/* Page Header */}
            <Breadcrumbs
              maintitle="Performance Indicator"
              title="Dashboard"
              subtitle="Performance"
            />
            {/* /Page Header */}
            <div className="row">
              <div className="col-md-8">
                <div className="job-info job-widget">
                  <h3 className="job-title">Android Developer</h3>
                  <span className="job-dept">App Development</span>
                  <ul className="job-post-det">
                    <li>
                      <i className="fa-regular fa-calendar-days" /> Post Date:{" "}
                      <span className="text-blue">Feb 18, 2019</span>
                    </li>
                    <li>
                      <i className="fa-regular fa-calendar-days" /> Last Date:{" "}
                      <span className="text-blue">May 31, 2019</span>
                    </li>
                    <li>
                      <i className="fa-regular fa-user" /> Applications:{" "}
                      <span className="text-blue">4</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-eye" /> Views:{" "}
                      <span className="text-blue">3806</span>
                    </li>
                  </ul>
                </div>
                <div className="job-content job-widget">
                  <div className="job-desc-title">
                    <h4>Job Description</h4>
                  </div>
                  <div className="job-description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                  </div>
                  <div className="job-desc-title">
                    <h4>Job Description</h4>
                  </div>
                  <div className="job-description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                    <ul className="square-list">
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="job-det-info job-widget">
                  <Link
                    className="btn job-btn"
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#apply_job"
                  >
                    Apply For This Job
                  </Link>
                  {Array.isArray(userElements) && userElements.length > 0 ? (
                    userElements.map((info, index) => (
                      <div className="info-list" key={index}>
                        <span>
                          <i className={info.icon} />
                        </span>
                        <h5>{info.label}</h5>
                        <p>{info.value}</p>
                      </div>
                    ))
                  ) : (
                    <p>No information available.</p>
                  )}
                  <div className="info-list text-center">
                    <Link className="app-ends" to="#">
                      Application ends in 2d 7h 6m
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Content */}
          <ApplyJobModelPopup />
        </div>
        {/* /Page Wrapper */}
      </div>
      <JobModelPopup />
    </>
  );
};

export default JobView;

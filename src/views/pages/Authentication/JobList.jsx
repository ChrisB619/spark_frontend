import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { base_url } from "../../../base_urls";
import Header from "../../layout/Header";

const JobList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(base_url + "/api/joblist.json").then((res) => setUsers(res.data));
  }, []);

  const userElements = users.map((user, index) => ({
    key: index,
    id: user.id,
    title: user.title,
    department: user.department,
    type: user.type,
    location: user.location,
    salary: user.salary,
    posted: user.posted,
  }));
  return (
    <div>
      <div className="main-wrapper">
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
              <div className="row">
                {Array.isArray(userElements) && userElements.length > 0
                  ? userElements.map((job, index) => (
                      <div className="col-md-6" key={index}>
                        <Link className="job-list" to="/job-view">
                          <div className="job-list-det">
                            <div className="job-list-desc">
                              <h3 className="job-list-title">{job.title}</h3>
                              <h4 className="job-department">
                                {job.department}
                              </h4>
                            </div>
                            <div className="job-type-info">
                              <span className="job-types">{job.type}</span>
                            </div>
                          </div>
                          <div className="job-list-footer">
                            <ul>
                              <li>
                                <i className="fa-solid fa-signs-post" />{" "}
                                {job.location}
                              </li>
                              <li>
                                <i className="fa-regular fa-money-bill-1" />{" "}
                                {job.salary}
                              </li>
                              <li>
                                <i className="fa-regular fa-clock" />{" "}
                                {job.posted}
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                    ))
                  : " <p>No job listings available.</p>"}
              </div>
            </div>
          </div>
        </div>
        {/* /Page Wrapper */}
      </div>
    </div>
  );
};

export default JobList;

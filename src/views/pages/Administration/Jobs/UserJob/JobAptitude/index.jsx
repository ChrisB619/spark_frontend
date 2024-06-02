import React from "react";
import Breadcrumbs from "../../../../../../components/Breadcrumbs";

import UserDashboardHeader from "../../../../../../components/Administration/Jobs/UserJobs/UserDashboardHeader";
import { Link } from "react-router-dom";

const JobAptitude = () => {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Breadcrumbs
          maintitle="All Jobs"
          title="Dashboard"
          subtitle="Jobs / User Dashboard / All Jobs"
        />
        <UserDashboardHeader />

        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <p>
                  Name : <b>John Richerd</b>
                </p>
                <p>
                  Code : <b>#1245</b>
                </p>
                <p>
                  Job Type : <b>UI Development</b>
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <p className="m-b-30">Click button to answer your question.</p>
                <div className="row">
                  <div className="col-md-6 text-center m-b-30">
                    <Link
                      to="/questions"
                      className="btn btn-primary w-100 submit-btn"
                    >
                      Html
                    </Link>
                  </div>
                  <div className="col-md-6 text-center m-b-30">
                    <Link
                      to="/questions"
                      className="btn btn-primary w-100 submit-btn"
                    >
                      Css
                    </Link>
                  </div>
                  <div className="col-md-6 text-center m-b-30">
                    <Link
                      to="/questions"
                      className="btn btn-primary w-100 submit-btn"
                    >
                      Design
                    </Link>
                  </div>
                  <div className="col-md-6 text-center m-b-30">
                    <Link
                      to="/questions"
                      className="btn btn-primary w-100 submit-btn"
                    >
                      Javascript
                    </Link>
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

export default JobAptitude;

/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_11,
  Avatar_12,
  Avatar_13,
} from "../../../Routes/ImagePath";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import ScheduleModelPopup from "../../../components/modelpopup/ScheduleModelPopup";
import ShiftSchedulingFilter from "../../../components/ShiftSchedulingFilter";
dayjs.extend(customParseFormat);

const ShiftScheduling = () => {
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Daily Scheduling</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin-dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/employees">Employees</Link>
                  </li>
                  <li className="breadcrumb-item active">Shift Scheduling</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <Link to="/shift-list" className="btn add-btn m-r-5">
                  Shifts
                </Link>
                <Link
                  to="#"
                  className="btn add-btn m-r-5"
                  data-bs-toggle="modal"
                  data-bs-target="#add_schedule"
                >
                  {" "}
                  Assign Shifts
                </Link>
              </div>
            </div>
          </div>
          {/* /Page Header */}

          <ShiftSchedulingFilter />
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-striped custom-table">
                  <thead>
                    <tr>
                      <th>Scheduled Shift</th>
                      <th>Fri 21</th>
                      <th>Sat 22</th>
                      <th>Sun 23</th>
                      <th>Mon 24</th>
                      <th>Tue 25</th>
                      <th>Wed 26</th>
                      <th>Thu 27</th>
                      <th>Fri 28</th>
                      <th>Sat 29</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <Link
                            to="/profile"
                            className="avatar"
                          >
                            <img src={Avatar_02} alt="img" />
                          </Link>
                          <Link to="/profile">
                            John Doe <span>Web Designer</span>
                          </Link>
                        </h2>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <h2>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_schedule"
                              style={{ border: "2px dashed #1eb53a" }}
                            >
                              <span className="username-info m-b-10">
                                6:30 am - 9:30 pm ( 14 hrs 15 mins)
                              </span>
                              <span className="userrole-info">
                                Web Designer - SMARTHR
                              </span>
                            </Link>
                          </h2>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <h2>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_schedule"
                              style={{ border: "2px dashed #1eb53a" }}
                            >
                              <span className="username-info m-b-10">
                                6:30 am - 9:30 pm ( 14 hrs 15 mins)
                              </span>
                              <span className="userrole-info">
                                Web Designer - SMARTHR
                              </span>
                            </Link>
                          </h2>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <Link
                            to="/profile"
                            className="avatar"
                          >
                            <img src={Avatar_09} alt="img" />
                          </Link>
                          <Link to="/profile">
                            Richard Miles <span>Web Developer</span>
                          </Link>
                        </h2>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <h2>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_schedule"
                              style={{ border: "2px dashed #1eb53a" }}
                            >
                              <span className="username-info m-b-10">
                                6:30 am - 9:30 pm ( 14 hrs 15 mins)
                              </span>
                              <span className="userrole-info">
                                Web Designer - SMARTHR
                              </span>
                            </Link>
                          </h2>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <h2>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_schedule"
                              style={{ border: "2px dashed #1eb53a" }}
                            >
                              <span className="username-info m-b-10">
                                6:30 am - 9:30 pm ( 14 hrs 15 mins)
                              </span>
                              <span className="userrole-info">
                                Web Designer - SMARTHR
                              </span>
                            </Link>
                          </h2>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <Link
                            to="/profile"
                            className="avatar"
                          >
                            <img src={Avatar_10} alt="img" />
                          </Link>
                          <Link to="/profile">
                            John Smith <span>Android Developer</span>
                          </Link>
                        </h2>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <h2>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_schedule"
                              style={{ border: "2px dashed #1eb53a" }}
                            >
                              <span className="username-info m-b-10">
                                6:30 am - 9:30 pm ( 14 hrs 15 mins)
                              </span>
                              <span className="userrole-info">
                                Web Designer - SMARTHR
                              </span>
                            </Link>
                          </h2>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <h2>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_schedule"
                              style={{ border: "2px dashed #1eb53a" }}
                            >
                              <span className="username-info m-b-10">
                                6:30 am - 9:30 pm ( 14 hrs 15 mins)
                              </span>
                              <span className="userrole-info">
                                Web Designer - SMARTHR
                              </span>
                            </Link>
                          </h2>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <Link
                            to="/profile"
                            className="avatar"
                          >
                            <img src={Avatar_05} alt="img" />
                          </Link>
                          <Link to="/profile">
                            Mike Litorus <span>IOS Developer</span>
                          </Link>
                        </h2>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <h2>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_schedule"
                              style={{ border: "2px dashed #1eb53a" }}
                            >
                              <span className="username-info m-b-10">
                                6:30 am - 9:30 pm ( 14 hrs 15 mins)
                              </span>
                              <span className="userrole-info">
                                Web Designer - SMARTHR
                              </span>
                            </Link>
                          </h2>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <h2>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_schedule"
                              style={{ border: "2px dashed #1eb53a" }}
                            >
                              <span className="username-info m-b-10">
                                6:30 am - 9:30 pm ( 14 hrs 15 mins)
                              </span>
                              <span className="userrole-info">
                                Web Designer - SMARTHR
                              </span>
                            </Link>
                          </h2>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <Link
                            to="/profile"
                            className="avatar"
                          >
                            <img src={Avatar_11} alt="img" />
                          </Link>
                          <Link to="/profile">
                            Wilmer Deluna <span>Team Leader</span>
                          </Link>
                        </h2>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <h2>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_schedule"
                              style={{ border: "2px dashed #1eb53a" }}
                            >
                              <span className="username-info m-b-10">
                                6:30 am - 9:30 pm ( 14 hrs 15 mins)
                              </span>
                              <span className="userrole-info">
                                Web Designer - SMARTHR
                              </span>
                            </Link>
                          </h2>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <h2>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_schedule"
                              style={{ border: "2px dashed #1eb53a" }}
                            >
                              <span className="username-info m-b-10">
                                6:30 am - 9:30 pm ( 14 hrs 15 mins)
                              </span>
                              <span className="userrole-info">
                                Web Designer - SMARTHR
                              </span>
                            </Link>
                          </h2>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <Link
                            to="/profile"
                            className="avatar"
                          >
                            <img src={Avatar_12} alt="img" />
                          </Link>
                          <Link to="/profile">
                            Jeffrey Warden <span>Web Developer</span>
                          </Link>
                        </h2>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <h2>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_schedule"
                              style={{ border: "2px dashed #1eb53a" }}
                            >
                              <span className="username-info m-b-10">
                                6:30 am - 9:30 pm ( 14 hrs 15 mins)
                              </span>
                              <span className="userrole-info">
                                Web Designer - SMARTHR
                              </span>
                            </Link>
                          </h2>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <h2>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_schedule"
                              style={{ border: "2px dashed #1eb53a" }}
                            >
                              <span className="username-info m-b-10">
                                6:30 am - 9:30 pm ( 14 hrs 15 mins)
                              </span>
                              <span className="userrole-info">
                                Web Designer - SMARTHR
                              </span>
                            </Link>
                          </h2>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <Link
                            to="/profile"
                            className="avatar"
                          >
                            <img src={Avatar_13} alt="img" />
                          </Link>
                          <Link to="/profile">
                            Bernardo Galaviz <span>Web Developer</span>
                          </Link>
                        </h2>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <h2>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_schedule"
                              style={{ border: "2px dashed #1eb53a" }}
                            >
                              <span className="username-info m-b-10">
                                6:30 am - 9:30 pm ( 14 hrs 15 mins)
                              </span>
                              <span className="userrole-info">
                                Web Designer - SMARTHR
                              </span>
                            </Link>
                          </h2>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <h2>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_schedule"
                              style={{ border: "2px dashed #1eb53a" }}
                            >
                              <span className="username-info m-b-10">
                                6:30 am - 9:30 pm ( 14 hrs 15 mins)
                              </span>
                              <span className="userrole-info">
                                Web Designer - SMARTHR
                              </span>
                            </Link>
                          </h2>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="user-add-shedule-list">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_schedule"
                          >
                            <span>
                              <i className="fa fa-plus" />
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
      {/* /Page Wrapper */}

      <ScheduleModelPopup />
    </>
  );
};

export default ShiftScheduling;

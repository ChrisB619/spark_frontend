/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Avatar_02, Avatar_16 } from "../../../Routes/ImagePath";
import { Link } from "react-router-dom";
import ProfileTab from "./ProfileTab";
import Breadcrumbs from "../../../components/Breadcrumbs";

const Profile = () => {
  const userData = {
    id: 1,
    name: "John Doe",
    role: "UI/UX Design Team",
    jobTitle: "Web Designer",
    employeeId: "FT-0001",
    dateOfJoin: "1st Jan 2023",
    phone: "9876543210",
    email: "johndoe@example.com",
    birthday: "24th July",
    address: "1861 Bayonne Ave, Manchester Township, NJ, 08759",
    gender: "Male",
    supervisor: {
      name: "Jeffery Lalor",
      avatar: "assets/img/profiles/avatar-16.jpg",
    },
  };
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Profile"
            title="Dashboard"
            subtitle="Profile"
            modal="#add_indicator"
            name="Add New"
          />
          <div className="card mb-0">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="profile-view">
                    <div className="profile-img-wrap">
                      <div className="profile-img">
                        <Link to="#">
                          <img src={Avatar_02} alt="User Image" />
                        </Link>
                      </div>
                    </div>
                    <div className="profile-basic">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="profile-info-left">
                            <h3 className="user-name m-t-0 mb-0">
                              {userData.name}
                            </h3>
                            <h6 className="text-muted">{userData.role}</h6>
                            <small className="text-muted">
                              {userData.jobTitle}
                            </small>
                            <div className="staff-id">
                              Employee ID : {userData.employeeId}
                            </div>
                            <div className="small doj text-muted">
                              Date of Join : {userData.dateOfJoin}
                            </div>
                            <div className="staff-msg">
                              <Link className="btn btn-custom" to="/call/chat">
                                Send Message
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <ul className="personal-info">
                            <li>
                              <div className="title">Phone:</div>
                              <div className="text">
                                <Link to={`tel:${userData.phone}`}>
                                  {userData.phone}
                                </Link>
                              </div>
                            </li>
                            <li>
                              <div className="title">Email:</div>
                              <div className="text">
                                <Link to={`mailto:${userData.email}`}>
                                  {userData.email}
                                </Link>
                              </div>
                            </li>
                            <li>
                              <div className="title">Birthday:</div>
                              <div className="text">{userData.birthday}</div>
                            </li>
                            <li>
                              <div className="title">Address:</div>
                              <div className="text">{userData.address}</div>
                            </li>
                            <li>
                              <div className="title">Gender:</div>
                              <div className="text">{userData.gender}</div>
                            </li>
                            <li>
                              <div className="title">Reports to:</div>
                              <div className="text">
                                <div className="avatar-box">
                                  <div className="avatar avatar-xs">
                                    <img src={Avatar_16} alt="User Image" />
                                  </div>
                                </div>
                                <Link to="profile">
                                  {userData.supervisor.name}
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="pro-edit">
                      <Link
                        data-bs-target="#profile_info"
                        data-bs-toggle="modal"
                        className="edit-icon"
                        to="#"
                      >
                        <i className="fa-solid fa-pencil"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card tab-box">
            <div className="row user-tabs">
              <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                <ul className="nav nav-tabs nav-tabs-bottom">
                  <li className="nav-item">
                    <Link
                      to="#emp_profile"
                      data-bs-toggle="tab"
                      className="nav-link active"
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="#emp_projects"
                      data-bs-toggle="tab"
                      className="nav-link"
                    >
                      Projects
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="#bank_statutory"
                      data-bs-toggle="tab"
                      className="nav-link"
                    >
                      Bank &amp; Statutory
                      <small className="text-danger ms-1">(Admin Only)</small>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="#emp_assets"
                      data-bs-toggle="tab"
                      className="nav-link"
                    >
                      Assets
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Profile Info Tab */}
          <ProfileTab />
        </div>
      </div>
    </>
  );
};

export default Profile;

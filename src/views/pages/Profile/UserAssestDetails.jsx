import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar_12,
  Avatar_16,
  icon01,
  icon02,
  icon03,
  icon05,
  img1,
  img2,
  img3,
  img4,
  keyboard,
} from "../../../Routes/ImagePath";
import Breadcrumbs from "../../../components/Breadcrumbs ";
import UserAssestDetailPopup from "../../../components/modelpopup/UserAssestDetailPopup";

const UserAssestDetails = () => {
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
    <div>
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
                          <img src={Avatar_12} alt="" />
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
                              Date of Join: {userData.dateOfJoin}
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
                                    <img src={Avatar_16} alt="" />
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
                      <small className="text-danger">(Admin Only)</small>
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

              <div className="tab-content">
                {/* Profile Info Tab */}

                <div
                  id="user_assets"
                  className="pro-overview tab-pane fade show active"
                >
                  <div className="user_asset">
                    <div className="assign-head">
                      <div className="assign-content">
                        <img src={keyboard} alt="" />
                        <h6>Dell Keyboard</h6>
                      </div>
                      <div className="assign-content">
                        <Link
                          to="#"
                          className="btn btn-assign"
                          data-bs-toggle="modal"
                          data-bs-target="#raise-issue"
                        >
                          <i className="fas fa-hand-paper" /> Raise Issue
                        </Link>
                      </div>
                    </div>
                    <div className="card asset-box">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-7">
                            <h5>Asset Info</h5>
                            <div className="asset-info">
                              <div className="asset-info-det">
                                <h6>Wired Keyboard</h6>
                                <p>SE5214 - 2022 2022 2022 </p>
                                <ul>
                                  <li>
                                    Type <span>Keybaord</span>
                                  </li>
                                  <li>
                                    Serial Number <span>3647952145678</span>
                                  </li>
                                  <li>
                                    Brand <span>Dell</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="assets-image">
                              <h5>Asset Images</h5>
                              <ul>
                                <li>
                                  <img src={img1} alt="" />
                                </li>
                                <li>
                                  <img src={img2} alt="" />
                                </li>
                                <li>
                                  <img src={img3} alt="" />
                                </li>
                                <li>
                                  <img src={img4} alt="" />
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="asset-history">
                              <h5>Asset Images</h5>
                              <ul>
                                <li>
                                  <div className="aset-img">
                                    <img src={icon01} alt="" />
                                  </div>
                                  <div className="asset-inf">
                                    <h6>Vendor</h6>
                                    <p>Compusoft Systems Ltd.,</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="aset-img">
                                    <img src={icon03} alt="" />
                                  </div>
                                  <div className="asset-inf">
                                    <h6>Category</h6>
                                    <p>Computer</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="aset-img">
                                    <img src={icon05} alt="" />
                                  </div>
                                  <div className="asset-inf">
                                    <h6>Cost</h6>
                                    <p>₹ 1,200</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="aset-img">
                                    <img src={icon05} alt="" />
                                  </div>
                                  <div className="asset-inf">
                                    <h6>Location</h6>
                                    <p>
                                      123 Street, Vivekanandhar Road, Coimbatore
                                      - 32
                                    </p>
                                  </div>
                                </li>
                                <li>
                                  <div className="aset-img">
                                    <img src={icon02} alt="" />
                                  </div>
                                  <div className="asset-inf">
                                    <h6>Warranty</h6>
                                    <p>From 11-12-2022 - To 11-12-2022</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UserAssestDetailPopup />
    </div>
  );
};

export default UserAssestDetails;

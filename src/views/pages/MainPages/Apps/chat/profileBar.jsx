import React from "react";
import { Link } from "react-router-dom";
import { Avatar_02, Avatar_05 } from "../../../../../Routes/ImagePath";

const ProfileBar = () => {
  return (
    <div className="page-wrapper">
      <div className="chat-main-row">
        <div className="chat-main-wrapper">
          <div
            className="col-lg-3 message-view chat-profile-view chat-sidebar"
            id="task_window">
            <div className="chat-window video-window">
              <div className="fixed-header">
                <ul className="nav nav-tabs nav-tabs-bottom">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="#calls_tab"
                      data-bs-toggle="tab">
                      Calls
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to="#profile_tab"
                      data-bs-toggle="tab">
                      Profile
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="tab-content chat-contents">
                <div className="content-full tab-pane" id="calls_tab">
                  <div className="chat-wrap-inner">
                    <div className="chat-box">
                      <div className="chats">
                        <div className="chat chat-left">
                          <div className="chat-avatar">
                            <Link
                              to="/profile"
                              className="avatar">
                              <img alt="" src={Avatar_02} />
                            </Link>
                          </div>
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <span className="task-chat-user">You</span>{" "}
                                <span className="chat-time">8:35 am</span>
                                <div className="call-details">
                                  <i className="material-icons">phone_missed</i>
                                  <div className="call-info">
                                    <div className="call-user-details">
                                      <span className="call-description">
                                        Jeffrey Warden missed the call
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="chat chat-left">
                          <div className="chat-avatar">
                            <Link
                              to="/profile"
                              className="avatar">
                              <img alt="" src={Avatar_02} />
                            </Link>
                          </div>
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <span className="task-chat-user">John Doe</span>{" "}
                                <span className="chat-time">8:35 am</span>
                                <div className="call-details">
                                  <i className="material-icons">call_end</i>
                                  <div className="call-info">
                                    <div className="call-user-details">
                                      <span className="call-description">
                                        This call has ended
                                      </span>
                                    </div>
                                    <div className="call-timing">
                                      Duration: <strong>5 min 57 sec</strong>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="chat-line">
                          <span className="chat-date">January 29th, 2023</span>
                        </div>
                        <div className="chat chat-left">
                          <div className="chat-avatar">
                            <Link
                              to="/profile"
                              className="avatar">
                              <img alt="" src={Avatar_05} />
                            </Link>
                          </div>
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <span className="task-chat-user">
                                  Richard Miles
                                </span>{" "}
                                <span className="chat-time">8:35 am</span>
                                <div className="call-details">
                                  <i className="material-icons">phone_missed</i>
                                  <div className="call-info">
                                    <div className="call-user-details">
                                      <span className="call-description">
                                        You missed the call
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="chat chat-left">
                          <div className="chat-avatar">
                            <Link
                              to="/profile"
                              className="avatar">
                              <img alt="" src={Avatar_02} />
                            </Link>
                          </div>
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <span className="task-chat-user">You</span>{" "}
                                <span className="chat-time">8:35 am</span>
                                <div className="call-details">
                                  <i className="material-icons">ring_volume</i>
                                  <div className="call-info">
                                    <div className="call-user-details">
                                      <Link
                                        to="#"
                                        className="call-description call-description--linked"
                                        data-qa="call_attachment_link">
                                        Calling John Smith ...
                                      </Link>
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
                <div
                  className="content-full tab-pane show active"
                  id="profile_tab">
                  <div className="display-table">
                    <div className="table-row">
                      <div className="table-body">
                        <div className="table-content">
                          <div className="chat-profile-img">
                            <div className="edit-profile-img">
                              <img src={Avatar_02} alt="" />
                              <span className="change-img">Change Image</span>
                            </div>
                            <h3 className="user-name m-t-10 mb-0">John Doe</h3>
                            <small className="text-muted">Web Designer</small>
                            <Link to="#" className="btn btn-primary edit-btn">
                              <i className="fa fa-pencil" />
                            </Link>
                          </div>
                          <div className="chat-profile-info">
                            <ul className="user-det-list">
                              <li>
                                <span>Username:</span>
                                <span className="float-end text-muted">
                                  johndoe
                                </span>
                              </li>
                              <li>
                                <span>DOB:</span>
                                <span className="float-end text-muted">
                                  24 July
                                </span>
                              </li>
                              <li>
                                <span>Email:</span>
                                <span className="float-end text-muted">
                                  johndoe@example.com
                                </span>
                              </li>
                              <li>
                                <span>Phone:</span>
                                <span className="float-end text-muted">
                                  9876543210
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="transfer-files">
                            <ul className="nav nav-tabs nav-tabs-solid nav-justified mb-0">
                              <li className="nav-item">
                                <Link
                                  className="nav-link active"
                                  to="#all_files"
                                  data-bs-toggle="tab">
                                  All Files
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  className="nav-link"
                                  to="#my_files"
                                  data-bs-toggle="tab">
                                  My Files
                                </Link>
                              </li>
                            </ul>
                            <div className="tab-content">
                              <div
                                className="tab-pane show active"
                                id="all_files">
                                <ul className="files-list">
                                  <li>
                                    <div className="files-cont">
                                      <div className="file-type">
                                        <span className="files-icon">
                                          <i className="fa-regular fa-file-pdf" />
                                        </span>
                                      </div>
                                      <div className="files-info">
                                        <span className="file-name text-ellipsis">
                                          AHA Selfcare Mobile Application
                                          Test-Cases.xls
                                        </span>
                                        <span className="file-author">
                                          <Link to="#">Loren Gatlin</Link>
                                        </span>{" "}
                                        <span className="file-date">
                                          May 31st at 6:53 PM
                                        </span>
                                      </div>
                                      <ul className="files-action">
                                        <li className="dropdown dropdown-action">
                                          <Link
                                            to="#"
                                            className="dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i className="material-icons">
                                              more_horiz
                                            </i>
                                          </Link>
                                          <div className="dropdown-menu">
                                            <Link
                                              className="dropdown-item"
                                              to="#">
                                              Download
                                            </Link>
                                            <Link
                                              className="dropdown-item"
                                              to="#"
                                              data-bs-toggle="modal"
                                              data-bs-target="#share_files">
                                              Share
                                            </Link>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="tab-pane" id="my_files">
                                <ul className="files-list">
                                  <li>
                                    <div className="files-cont">
                                      <div className="file-type">
                                        <span className="files-icon">
                                          <i className="fa-regular fa-file-pdf" />
                                        </span>
                                      </div>
                                      <div className="files-info">
                                        <span className="file-name text-ellipsis">
                                          AHA Selfcare Mobile Application
                                          Test-Cases.xls
                                        </span>
                                        <span className="file-author">
                                          <Link to="#">John Doe</Link>
                                        </span>{" "}
                                        <span className="file-date">
                                          May 31st at 6:53 PM
                                        </span>
                                      </div>
                                      <ul className="files-action">
                                        <li className="dropdown dropdown-action">
                                          <Link
                                            to="#"
                                            className="dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i className="material-icons">
                                              more_horiz
                                            </i>
                                          </Link>
                                          <div className="dropdown-menu">
                                            <Link
                                              className="dropdown-item"
                                              to="#">
                                              Download
                                            </Link>
                                            <Link
                                              className="dropdown-item"
                                              to="#"
                                              data-bs-toggle="modal"
                                              data-bs-target="#share_files">
                                              Share
                                            </Link>
                                          </div>
                                        </li>
                                      </ul>
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
      </div>
    </div>
  );
};

export default ProfileBar;

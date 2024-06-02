import React from "react";
import { Link } from "react-router-dom";
import {
  Attachment,
  Avatar_02,
  Avatar_09,
  Avatar_16,
  User,
} from "../../../../../../Routes/ImagePath";

const VideoRightsidebar = () => {
  return (
    <div className="chat-window video-window">
      <div className="fixed-header">
        <ul className="nav nav-tabs nav-tabs-bottom">
          <li className="nav-item">
            <Link
              className="nav-link active"
              to="#calls_tab"
              data-bs-toggle="tab"
            >
              Calls
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#chats_tab" data-bs-toggle="tab">
              Chats
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#profile_tab" data-bs-toggle="tab">
              Profile
            </Link>
          </li>
        </ul>
      </div>
      <div className="tab-content chat-contents">
        <div className="content-full tab-pane show active" id="calls_tab">
          <div className="chat-wrap-inner">
            <div className="chat-box">
              <div className="chats">
                <div className="chat chat-left">
                  <div className="chat-avatar">
                    <Link to="/profile" className="avatar">
                      <img alt="John Doe" src={Avatar_02} />
                    </Link>
                  </div>
                  <div className="chat-body">
                    <div className="chat-bubble">
                      <div className="chat-content">
                        <span className="task-chat-user">You</span>
                        <span className="chat-time ms-1">8:35 am</span>
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
                    <Link to="/profile" className="avatar">
                      <img alt="" src={Avatar_02} />
                    </Link>
                  </div>
                  <div className="chat-body">
                    <div className="chat-bubble">
                      <div className="chat-content">
                        <span className="task-chat-user">John Doe</span>
                        <span className="chat-time ms-1">8:35 am</span>
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
                    <Link to="/profile" className="avatar">
                      <img alt="" src={Avatar_09} />
                    </Link>
                  </div>
                  <div className="chat-body">
                    <div className="chat-bubble">
                      <div className="chat-content">
                        <span className="task-chat-user">Richard Miles</span>
                        <span className="chat-time ms-1">8:35 am</span>
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
                    <Link to="/profile" className="avatar">
                      <img alt="" src={Avatar_09} />
                    </Link>
                  </div>
                  <div className="chat-body">
                    <div className="chat-bubble">
                      <div className="chat-content">
                        <span className="task-chat-user">You</span>
                        <span className="chat-time ms-1">8:35 am</span>
                        <div className="call-details">
                          <i className="material-icons">ring_volume</i>
                          <div className="call-info">
                            <div className="call-user-details">
                              <Link
                                to="#"
                                className="call-description call-description--linked"
                                data-qa="call_attachment_link"
                              >
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
        <div className="content-full tab-pane" id="chats_tab">
          <div className="chat-window">
            <div className="chat-contents">
              <div className="chat-content-wrap">
                <div className="chat-wrap-inner">
                  <div className="chat-box">
                    <div className="chats">
                      <div className="chat chat-left">
                        <div className="chat-avatar">
                          <Link to="/profile" className="avatar">
                            <img alt="" src={Avatar_09} />
                          </Link>
                        </div>
                        <div className="chat-body">
                          <div className="chat-bubble">
                            <div className="chat-content">
                              <span className="task-chat-user">John Doe</span>
                              <span className="chat-time ms-1">8:35 am</span>
                              <p>I'm just looking around.</p>
                              <p>Will you tell me something about yourself? </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat chat-left">
                        <div className="chat-avatar">
                          <Link to="/profile" className="avatar">
                            <img alt="" src={Avatar_09} />
                          </Link>
                        </div>
                        <div className="chat-body">
                          <div className="chat-bubble">
                            <div className="chat-content">
                              <span className="task-chat-user me-1">
                                John Doe
                              </span>
                              <span className="file-attached">
                                attached 3 files
                                <i className="fa fa-paperclip ms-1" />
                              </span>
                              <span className="chat-time">
                                Feb 17, 2023 at 4:32am
                              </span>
                              <ul className="attach-list">
                                <li>
                                  <i className="fa fa-file me-1" />
                                  <Link to="#">project_document.avi</Link>
                                </li>
                                <li>
                                  <i className="fa fa-file me-1" />
                                  <Link to="#">video_conferencing.psd</Link>
                                </li>
                                <li>
                                  <i className="fa fa-file me-1" />
                                  <Link to="#">landing_page.psd</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat-line">
                        <span className="chat-date">January 29th, 2023</span>
                      </div>
                      <div className="chat chat-left">
                        <div className="chat-avatar">
                          <Link to="/profile" className="avatar">
                            <img alt="" src={Avatar_16} />
                          </Link>
                        </div>
                        <div className="chat-body">
                          <div className="chat-bubble">
                            <div className="chat-content">
                              <span className="task-chat-user me-1">
                                Jeffery Lalor
                              </span>
                              <span className="file-attached">
                                attached file <i className="fa fa-paperclip" />
                              </span>
                              <span className="chat-time">
                                Yesterday at 9:16pm
                              </span>
                              <ul className="attach-list">
                                <li className="pdf-file">
                                  <i className="fa fa-file-pdf me-1" />
                                  <Link to="#">Document_2016.pdf</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat chat-left">
                        <div className="chat-avatar">
                          <Link to="/profile" className="avatar">
                            <img alt="" src={Avatar_16} />
                          </Link>
                        </div>
                        <div className="chat-body">
                          <div className="chat-bubble">
                            <div className="chat-content">
                              <span className="task-chat-user me-1">
                                Jeffery Lalor
                              </span>
                              <span className="file-attached">
                                attached file <i className="fa fa-paperclip" />
                              </span>
                              <span className="chat-time">
                                Today at 12:42pm
                              </span>
                              <ul className="attach-list">
                                <li className="img-file">
                                  <div className="attach-img-download">
                                    <Link to="#">avatar-1.jpg</Link>
                                  </div>
                                  <div className="task-attach-img">
                                    <img src={User} alt="" />
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
            <div className="chat-footer">
              <div className="message-bar">
                <div className="message-inner">
                  <Link
                    className="link attach-icon"
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#drag_files"
                  >
                    <img src={Attachment} alt="" />
                  </Link>
                  <div className="message-area">
                    <div className="input-group">
                      <textarea
                        className="form-control"
                        placeholder="Type message..."
                        defaultValue={""}
                      />

                      <button className="btn btn-primary" type="button">
                        <i className="fa fa-paper-plane" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-full tab-pane" id="profile_tab">
          <div className="display-table">
            <div className="table-row">
              <div className="table-body">
                <div className="table-content">
                  <div className="chat-profile-img">
                    <div className="edit-profile-img">
                      <img src={Avatar_09} alt="" />
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
                        <span className="float-end text-muted">johndoe</span>
                      </li>
                      <li>
                        <span>DOB:</span>
                        <span className="float-end text-muted">24 July</span>
                      </li>
                      <li>
                        <span>Email:</span>
                        <span className="float-end text-muted">
                          johndoe@example.com
                        </span>
                      </li>
                      <li>
                        <span>Phone:</span>
                        <span className="float-end text-muted">9876543210</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="nav nav-tabs nav-tabs-solid nav-justified mb-0">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          to="#all_files"
                          data-bs-toggle="tab"
                        >
                          All Files
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="#my_files"
                          data-bs-toggle="tab"
                        >
                          My Files
                        </Link>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane show active" id="all_files">
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
                                  AHA Selfcare Mobile Application Test-Cases.xls
                                </span>
                                <span className="file-author me-1">
                                  <Link to="#">Loren Gatlin</Link>
                                </span>
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
                                    aria-expanded="false"
                                  >
                                    <i className="material-icons">more_horiz</i>
                                  </Link>
                                  <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="#">
                                      Download
                                    </Link>
                                    <Link
                                      className="dropdown-item"
                                      to="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#share_files"
                                    >
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
                                  <i className="fa fa-file me-1-pdf-o" />
                                </span>
                              </div>
                              <div className="files-info">
                                <span className="file-name text-ellipsis">
                                  AHA Selfcare Mobile Application Test-Cases.xls
                                </span>
                                <span className="file-author">
                                  <Link to="#">John Doe</Link>
                                </span>
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
                                    aria-expanded="false"
                                  >
                                    <i className="material-icons">more_horiz</i>
                                  </Link>
                                  <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="#">
                                      Download
                                    </Link>
                                    <Link
                                      className="dropdown-item"
                                      to="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#share_files"
                                    >
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
  );
};

export default VideoRightsidebar;

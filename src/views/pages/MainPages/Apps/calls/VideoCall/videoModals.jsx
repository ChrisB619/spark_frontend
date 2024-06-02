import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar_02,
  Avatar_13,
  Avatar_16,
} from "../../../../../../Routes/ImagePath";

const VideoModals = () => {
  return (
    <div>
      {/* Drogfiles Modal */}

      <div id="drag_files" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-md"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Drag and drop files upload</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="js-upload-form">
                <div className="upload-drop-zone" id="drop-zone">
                  <i className="fa fa-cloud-upload fa-2x" />
                  {"{"}" "{"}"}
                  <span className="upload-text">
                    Just drag and drop files here
                  </span>
                </div>
                <h4>Uploading</h4>
                <ul className="upload-list">
                  <li className="file-list">
                    <div className="upload-wrap">
                      <div className="file-name">
                        <i className="fa fa-photo" />
                        photo.png
                      </div>
                      <div className="file-size">1.07 gb</div>
                      <button type="button" className="file-close">
                        <i className="fa fa-close" />
                      </button>
                    </div>
                    <div className="progress progress-xs progress-striped">
                      <div
                        className="progress-bar bg-success w-65"
                        role="progressbar"
                      />
                    </div>
                    <div className="upload-process">37% done</div>
                  </li>
                  <li className="file-list">
                    <div className="upload-wrap">
                      <div className="file-name">
                        <i className="fa fa-file" />
                        task.doc
                      </div>
                      <div className="file-size">5.8 kb</div>
                      <button type="button" className="file-close">
                        <i className="fa fa-close" />
                      </button>
                    </div>
                    <div className="progress progress-xs progress-striped">
                      <div
                        className="progress-bar bg-success w-65"
                        role="progressbar"
                      />
                    </div>
                    <div className="upload-process">37% done</div>
                  </li>
                  <li className="file-list">
                    <div className="upload-wrap">
                      <div className="file-name">
                        <i className="fa fa-photo" />
                        dashboard.png
                      </div>
                      <div className="file-size">2.1 mb</div>
                      <button type="button" className="file-close">
                        <i className="fa fa-close" />
                      </button>
                    </div>
                    <div className="progress progress-xs progress-striped">
                      <div
                        className="progress-bar bg-success w-65"
                        role="progressbar"
                      />
                    </div>
                    <div className="upload-process">Completed</div>
                  </li>
                </ul>
              </form>
              <div className="submit-section">
                <button
                  className="btn btn-primary submit-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  type="reset"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /Drogfiles Modal */}
      {/* Add Group Modal */}

      <div id="add_group" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-md"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create a group</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                Groups are where your team communicates. They’re best when
                organized around a topic — #leads, for example.
              </p>
              <form>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Group Name <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Send invites to:
                    <span className="text-muted-light">(optional)</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="submit-section">
                  <button
                    className="btn btn-primary submit-btn"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    type="reset"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* /Add Group Modal */}
      {/* Add Chat User Modal */}
      <div id="add_chat_user" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-md"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Direct Chat</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="input-group m-b-30">
                <input
                  placeholder="Search to start a chat"
                  className="form-control search-input"
                  type="text"
                />
                <button className="btn btn-primary">Search</button>
              </div>
              <div>
                <h5>Recent Conversations</h5>
                <ul className="chat-user-list">
                  <li>
                    <Link to="#">
                      <div className="chat-block d-flex">
                        <span className="avatar align-self-center flex-shrink-0">
                          <img src={Avatar_16} alt="UserImage" />
                        </span>
                        <div className="media-body align-self-center text-nowrap flex-grow-1">
                          <div className="user-name">Jeffery Lalor</div>
                          <span className="designation">Team Leader</span>
                        </div>
                        <div className="text-nowrap align-self-center">
                          <div className="online-date">1 day ago</div>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="chat-block d-flex">
                        <span className="avatar align-self-center flex-shrink-0">
                          <img src={Avatar_13} alt="UserImage" />
                        </span>
                        <div className="media-body align-self-center text-nowrap flex-grow-1">
                          <div className="user-name">Bernardo Galaviz</div>
                          <span className="designation">Web Developer</span>
                        </div>
                        <div className="align-self-center text-nowrap">
                          <div className="online-date">3 days ago</div>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="chat-block d-flex">
                        <span className="avatar align-self-center flex-shrink-0">
                          <img src={Avatar_02} alt="UserImage" />
                        </span>
                        <div className="media-body text-nowrap align-self-center flex-grow-1">
                          <div className="user-name">John Doe</div>
                          <span className="designation">Web Designer</span>
                        </div>
                        <div className="align-self-center text-nowrap">
                          <div className="online-date">7 months ago</div>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="submit-section">
                <button
                  className="btn btn-primary submit-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  type="reset"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /Add Chat User Modal */}
      {/* Share Files Modal */}
      <div id="share_files" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-md"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Share File</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="files-share-list">
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
                    <span className="file-author">
                      <Link to="#">Bernardo Galaviz</Link>
                    </span>
                    <span className="file-date">May 31st at 6:53 PM</span>
                  </div>
                </div>
              </div>
              <div className="input-block">
                <label>Share With</label>
                <input className="form-control" type="text" />
              </div>
              <div className="submit-section">
                <button
                  className="btn btn-primary submit-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  type="reset"
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Share Files Modal */}
    </div>
  );
};

export default VideoModals;

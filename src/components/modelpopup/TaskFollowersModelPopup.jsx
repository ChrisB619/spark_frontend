import React from "react";
import { Avatar_08, Avatar_17, Avatar_26 } from "../../Routes/ImagePath";
import { Link } from "react-router-dom";

const TaskFollowersModelPopup = () => {
  return (
    <>
      <div
        id="task_followers"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add followers to this task</h5>
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
                  placeholder="Search to add"
                  className="form-control search-input"
                  type="text"
                />
                <button className="btn btn-primary">Search</button>
              </div>
              <div>
                <ul className="chat-user-list">
                  <li>
                    <Link to="#">
                      <div className="chat-block d-flex">
                        <span className="avatar">
                          <img src={Avatar_17} alt="UserImage" />
                        </span>
                        <div className="media-body media-middle text-nowrap">
                          <div className="user-name">Jeffery Lalor</div>
                          <span className="designation">Team Leader</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="chat-block d-flex">
                        <span className="avatar">
                          <img src={Avatar_08} alt="UserImage" />
                        </span>
                        <div className="media-body media-middle text-nowrap">
                          <div className="user-name">Catherine Manseau</div>
                          <span className="designation">Android Developer</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="chat-block d-flex">
                        <span className="avatar">
                          <img src={Avatar_26} alt="UserImage" />
                        </span>
                        <div className="media-body media-middle text-nowrap">
                          <div className="user-name">Wilmer Deluna</div>
                          <span className="designation">Team Leader</span>
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
                  Add to Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskFollowersModelPopup;

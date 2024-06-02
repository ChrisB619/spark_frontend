/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Avatar_09, Avatar_10, Avatar_16 } from "../../Routes/ImagePath";
import { Link } from "react-router-dom";
const LeaderModelPopup = () => {
  return (
    <div>
      <div id="assign_leader" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Assign Leader to this project</h5>
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
                  placeholder="Search to add a leader"
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
                          <img src={Avatar_09} alt="User Image" />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Richard Miles</div>
                          <span className="designation">Web Developer</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="chat-block d-flex">
                        <span className="avatar">
                          <img src={Avatar_10} alt="" />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">John Smith</div>
                          <span className="designation">Android Developer</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="chat-block d-flex">
                        <span className="avatar">
                          <img src={Avatar_16} alt="" />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Jeffery Lalor</div>
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
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderModelPopup;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Avatar_01,
  Avatar_05,
  Video_Call,
} from "../../../../../../Routes/ImagePath";
import VideoRightsidebar from "./videoRightsidebar";

const VideoContent = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };
  const toggleClose = () => {
    setIsActive(false);
  };
  return (
    <div className="chat-main-row">
      <div className="chat-main-wrapper">
        <div className="col-lg-9 message-view task-view">
          <div className="chat-window">
            <div className="fixed-header">
              <div className="navbar">
                <div className="user-details">
                  <div className="float-start user-img">
                    <Link
                      className="avatar"
                      to="/profile"
                      title="Mike Litorus">
                      <img src={Avatar_05} alt="" className="rounded-circle" />
                      <span className="status online" />
                    </Link>
                  </div>
                  <div className="user-info float-start">
                    <Link to="/profile">
                      <span>Mike Litorus</span>
                    </Link>
                    <span className="last-seen">Online</span>
                  </div>
                </div>
                <ul className="nav float-end custom-menu">
                  <li className="nav-item">
                    <Link
                      to="#task_window"
                      id="task_chat"
                      className="task-chat profile-rightbar float-end"
                      onClick={toggleClass}>
                      <i className="fa fa-comments" />
                    </Link>
                  </li>
                  <li className="nav-item dropdown dropdown-action">
                    <Link
                      to="#"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <i className="fa fa-cog" />
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right">
                      <Link to="#" className="dropdown-item">
                        Settings
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="chat-contents" onClick={toggleClose}>
              <div className="chat-content-wrap">
                <div className="user-video">
                  <img src={Video_Call} alt="" />
                </div>
                <div className="my-video">
                  <ul>
                    <li>
                      <img src={Avatar_01} className="img-fluid" alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="chat-footer">
              <div className="call-icons">
                <span className="call-duration">00:59</span>
                <ul className="call-items">
                  <li className="call-item">
                    <Link
                      to="#"
                      title="Enable Video"
                      data-placement="top"
                      data-bs-toggle="tooltip">
                      <i className="fa fa-video-camera camera" />
                    </Link>
                  </li>
                  <li className="call-item">
                    <Link
                      to="#"
                      title="Mute Audio"
                      data-placement="top"
                      data-bs-toggle="tooltip">
                      <i className="fa fa-microphone microphone" />
                    </Link>
                  </li>
                  <li className="call-item">
                    <Link
                      to="#"
                      title="Add User"
                      data-placement="top"
                      data-bs-toggle="tooltip">
                      <i className="fa fa-user-plus" />
                    </Link>
                  </li>
                  <li className="call-item">
                    <Link
                      to="#"
                      title="Full Screen"
                      data-placement="top"
                      data-bs-toggle="tooltip">
                      <i className="fa fa-arrows-v full-screen" />
                    </Link>
                  </li>
                </ul>
                <div className="end-call">
                  <Link to="#">
                    <i className="material-icons">call_end</i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`col-lg-3 message-view chat-profile-view chat-sidebar ${
            isActive ? "opened" : ""
          }`}
          id="task_window">
          <VideoRightsidebar />
        </div>
      </div>
    </div>
  );
};

export default VideoContent;

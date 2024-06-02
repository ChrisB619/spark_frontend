import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Attachment, Avatar_05 } from "../../../../../Routes/ImagePath";
import ChatContent from "./chatContent";


const ChatView = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };
  const toggleClose = () => {
    setIsActive(false);
  };
  return (
    <>
      <div className="col-lg-9 message-view task-view">
        <div className="chat-window">
          <div className="fixed-header">
            <div className="navbar">
              <div className="user-details me-auto">
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
                  <Link to="/profile" title="Mike Litorus">
                    <span>Mike Litorus</span>{" "}
                    <i className="typing-text">Typing...</i>
                  </Link>
                  <span className="last-seen">Last seen today at 7:50 AM</span>
                </div>
              </div>
              <div className="search-box">
                <div className="input-group input-group-sm">
                  <input
                    type="text"
                    placeholder="Search"
                    className="form-control"
                  />
                  <button type="button" className="btn">
                    <i className="fa fa-search" />
                  </button>
                </div>
              </div>
              <ul className="nav custom-menu">
                <li className="nav-item">
                  <Link
                    className="nav-link task-chat profile-rightbar float-end"
                    id="task_chat"
                    to="#task_window"
                    onClick={toggleClass}>
                    <i className="fa fa-user" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={() => localStorage.setItem("minheight", "true")}
                    to="/call/voice-call"
                    className="nav-link">
                    <i className="fa fa-phone" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/call/video-call" className="nav-link">
                    <i className="fa fa-video-camera" />
                  </Link>
                </li>
                <li className="nav-item dropdown dropdown-action">
                  <Link
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    className="nav-link dropdown-toggle"
                    to="#">
                    <i className="fa fa-cog" />
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link to="#" className="dropdown-item">
                      Delete Conversations
                    </Link>
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
              <div className="chat-wrap-inner">
                <div className="chat-box">
                  <ChatContent />
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
                  data-bs-target="#drag_files">
                  <img src={Attachment} alt="" />
                </Link>
                <div className="message-area">
                  <div className="input-group">
                    <textarea
                      className="form-control"
                      placeholder="Type message..."
                      defaultValue={""}
                    />
                    <span className="input-group-append">
                      <button className="btn btn-custom" type="button">
                        <i className="fa-solid fa-paper-plane" />
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default ChatView;

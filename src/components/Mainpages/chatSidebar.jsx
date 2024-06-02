import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  User,
} from "../../Routes/ImagePath";

const ChatSidebar = () => {
  return (
    <div>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <nav className="greedy">
              <ul className="link-item">
                <li>
                  <Link to="/admin-dashboard">
                    <i className="la la-home" /> <span>Back to Home</span>
                  </Link>
                </li>
                <li className="menu-title">
                  <span>Chat Groups</span>{" "}
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#add_group"
                  >
                    <i className="fa-solid fa-plus" />
                  </Link>
                </li>
                <li>
                  <Link to="/call/chat">
                    <span className="chat-avatar-sm user-img">
                      <img
                        className="rounded-circle"
                        src={User}
                        alt="UserImage"
                      />
                    </span>
                    <span className="chat-user">#General</span>
                  </Link>
                </li>
                <li>
                  <Link to="/call/chat">
                    <span className="chat-avatar-sm user-img">
                      <img
                        className="rounded-circle"
                        src={User}
                        alt="UserImage"
                      />
                    </span>
                    <span className="chat-user">#Video Responsive Survey</span>
                  </Link>
                </li>
                <li>
                  <Link to="/call/chat">
                    <span className="chat-avatar-sm user-img">
                      <img
                        className="rounded-circle"
                        src={User}
                        alt="UserImage"
                      />
                    </span>
                    <span className="chat-user">#500rs</span>
                  </Link>
                </li>
                <li>
                  <Link to="/call/chat">
                    <span className="chat-avatar-sm user-img">
                      <img
                        className="rounded-circle"
                        src={User}
                        alt="UserImage"
                      />
                    </span>
                    <span className="chat-user">#warehouse</span>
                  </Link>
                </li>
                <li className="menu-title">
                  Direct Chats{" "}
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#add_chat_user"
                  >
                    <i className="fa-solid fa-plus" />
                  </Link>
                </li>
                <li>
                  <Link to="/call/chat">
                    <span className="chat-avatar-sm user-img">
                      <img
                        className="rounded-circle"
                        src={Avatar_02}
                        alt="UserImage"
                      />
                      <span className="status online" />
                    </span>
                    <span className="chat-user">John Doe</span>{" "}
                    <span className="badge rounded-pill bg-danger">1</span>
                  </Link>
                </li>
                <li>
                  <Link to="/call/chat">
                    <span className="chat-avatar-sm user-img">
                      <img
                        className="rounded-circle"
                        src={Avatar_09}
                        alt="UserImage"
                      />
                      <span className="status offline" />
                    </span>
                    <span className="chat-user">Richard Miles</span>{" "}
                    <span className="badge rounded-pill bg-danger">7</span>
                  </Link>
                </li>
                <li>
                  <Link to="/call/chat">
                    <span className="chat-avatar-sm user-img">
                      <img
                        className="rounded-circle"
                        src={Avatar_10}
                        alt="UserImage"
                      />
                      <span className="status away" />
                    </span>
                    <span className="chat-user">John Smith</span>
                  </Link>
                </li>
                <li className="active">
                  <Link to="/call/chat">
                    <span className="chat-avatar-sm user-img">
                      <img
                        className="rounded-circle"
                        src={Avatar_05}
                        alt="UserImage"
                      />
                      <span className="status online" />
                    </span>
                    <span className="chat-user">Mike Litorus</span>{" "}
                    <span className="badge rounded-pill bg-danger">2</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;

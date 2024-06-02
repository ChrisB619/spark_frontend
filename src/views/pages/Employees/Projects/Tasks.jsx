/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import {
  Attachment,
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_16,
  User,
} from "../../../../Routes/ImagePath";
import TaskAssignee from "../../../../components/modelpopup/TaskAssignee";
import TaskFollowersModelPopup from "../../../../components/modelpopup/TaskFollowersModelPopup";
import ProjectModelPopup from "../../../../components/modelpopup/ProjectModelPopup";

const Tasks = () => {


  const [task, settask] = useState(true);
  const [taskText, setTaskText] = useState(true);
  const [toastMessage, setToastMessage] = useState("");
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });
  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

  const ontaskClick = () => {
    settask(!task);
  };

  const [text, setText] = useState("");

  const [fields, setFields] = useState([
    { value: "Patient appointment booking" },
    { value: "Appointment booking with payment gateway" },
    { value: "Doctor available module" },
    { value: "Patient and Doctor video conferencing" },
    { value: "Patient appointment booking" },
    { value: "Private chat module" },
  ]);

  function onChangeTask(event) {
    setText(event.target.value);
    setToastMessage(event.target.value);
  }

  function handleAdd() {
    setTaskText(!taskText);
    const values = [...fields];
    if (text !== "") {
      values.push({ value: text });
      setFields(values);
    }
    setTimeout(() => {
      setTaskText(true);
    }, 3000);
  }

  function handleRemove(i, value) {
    setTaskText(false);
    setToastMessage(value);
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
    setTimeout(() => {
      setTaskText(true);
    }, 3000);
  }

  return (
    <>
      <div
        className="page-wrapper"
        style={{ minHeight: windowDimension.winHeight }}
      >
        <div className="chat-main-row">
          <div className="chat-main-wrapper">
            <div className="col-lg-7 message-view task-view task-left-sidebar">
              <div className="chat-window">
                <div className="fixed-header">
                  <div className="navbar">
                    <div className="float-start me-auto">
                      <div className="add-task-btn-wrapper">
                        <span
                          onClick={ontaskClick}
                          className={`" ${
                            task
                              ? "add-task-btn btn btn-white btn-sm"
                              : "add-task-btn btn btn-white btn-sm visible"
                          }`}
                        >
                          Add Task
                        </span>
                      </div>
                    </div>
                    <Link
                      className="task-chat profile-rightbar float-end"
                      id="task_chat"
                      to="#task_window"
                    >
                      <i className="fa fa fa-comment" />
                    </Link>
                    <ul className="nav float-end custom-menu">
                      <li className="nav-item dropdown dropdown-action">
                        <Link
                          to="#"
                          className="dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-cog" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <Link className="dropdown-item" to="#">
                            Pending Tasks
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Completed Tasks
                          </Link>
                          <Link className="dropdown-item" to="#">
                            All Tasks
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="chat-contents">
                  <div className="chat-content-wrap">
                    <div className="chat-wrap-inner">
                      <div className="chat-box">
                        <div className="task-wrapper">
                          <div className="task-list-container">
                            <div className="task-list-body">
                              <ul id="task-list">
                                {fields.map((field, idx) => {
                                  return (
                                    <li
                                      className="task"
                                      key={`${field}-${idx}`}
                                    >
                                      <div className="task-container">
                                        <span className="task-action-btn task-check">
                                          <span
                                            className="action-circle large complete-btn"
                                            title="Mark Complete"
                                          >
                                            <i className="material-icons">
                                              check
                                            </i>
                                          </span>
                                        </span>
                                        <span
                                          className="task-label"
                                          contentEditable="true"
                                          suppressContentEditableWarning={true}
                                        >
                                          {field?.value}
                                        </span>
                                        <span className="task-action-btn task-btn-right">
                                          <span
                                            className="action-circle large me-1"
                                            title="Assign"
                                          >
                                            <i className="material-icons">
                                              person_add
                                            </i>
                                          </span>
                                          <span
                                            className="action-circle large delete-btn"
                                            title="Delete Task"
                                          >
                                            <i
                                              className="material-icons"
                                              onClick={() =>
                                                handleRemove(idx, field.value)
                                              }
                                            >
                                              delete
                                            </i>
                                          </span>
                                        </span>
                                      </div>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>

                            <div className="task-list-footer">
                              <div
                                className={` ${
                                  task
                                    ? "new-task-wrapper"
                                    : "new-task-wrapper visible"
                                }`}
                              >
                                <textarea
                                  id="new-task"
                                  placeholder="Enter new task here. . ."
                                  defaultValue={""}
                                  onChange={(e) => onChangeTask(e)}
                                />
                                <span className="error-message hidden">
                                  You need to enter a task first
                                </span>
                                <span
                                  onClick={() => handleAdd()}
                                  className="add-new-task-btn btn"
                                  id="add-task"
                                >
                                  Add Task
                                </span>
                                <span
                                  id="close-task-panel"
                                  onClick={ontaskClick}
                                  className={` btn"${
                                    task
                                      ? "add-task-btn btn btn-white btn-sm"
                                      : "add-task-btn btn btn-white btn-sm visible"
                                  }`}
                                >
                                  Close
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={
                            taskText
                              ? "notification-popup hide"
                              : "notification-popup"
                          }
                        >
                          <p>
                            <span className="task" />
                            <span className="notification-text">
                              {toastMessage}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 message-view task-chat-view task-right-sidebar"
              id="task_window"
            >
              <div className="chat-window">
                <div className="fixed-header">
                  <div className="navbar">
                    <div className="task-assign">
                      <Link
                        className="task-complete-btn"
                        id="task_complete"
                        to="#"
                      >
                        <i className="material-icons">check</i> Mark Complete
                      </Link>
                    </div>
                    <ul className="nav float-end custom-menu">
                      <li className="dropdown dropdown-action">
                        <Link
                          to="#"
                          className="dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="material-icons">more_vert</i>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <Link className="dropdown-item" to="#">
                            Delete Task
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Settings
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="chat-contents task-chat-contents">
                  <div className="chat-content-wrap">
                    <div className="chat-wrap-inner">
                      <div className="chat-box">
                        <div className="chats">
                          <h4>Hospital Administration Phase 1</h4>
                          <div className="task-header">
                            <div className="assignee-info">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#assignee"
                              >
                                <div className="avatar">
                                  <img alt="Image" src={Avatar_02} />
                                </div>
                                <div className="assigned-info">
                                  <div className="task-head-title">
                                    Assigned To
                                  </div>
                                  <div className="task-assignee">John Doe</div>
                                </div>
                              </Link>
                              <span className="remove-icon">
                                <i className="fa fa-close" />
                              </span>
                            </div>
                            <div className="task-due-date">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#assignee"
                              >
                                <div className="due-icon">
                                  <span>
                                    <i className="material-icons">date_range</i>
                                  </span>
                                </div>
                                <div className="due-info">
                                  <div className="task-head-title">
                                    Due Date
                                  </div>
                                  <div className="due-date">Mar 26, 2023</div>
                                </div>
                              </Link>
                              <span className="remove-icon">
                                <i className="fa fa-close" />
                              </span>
                            </div>
                          </div>
                          <hr className="task-line" />
                          <div className="task-desc">
                            <div className="task-desc-icon">
                              <i className="material-icons">subject</i>
                            </div>
                            <div className="task-textarea">
                              <textarea
                                className="form-control"
                                placeholder="Description"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <hr className="task-line" />
                          <div className="task-information">
                            <span className="task-info-line">
                              <Link className="task-user" to="#">
                                Lesley Grauer
                              </Link>{" "}
                              <span className="task-info-subject">
                                created task
                              </span>
                            </span>
                            <div className="task-time">Jan 20, 2023</div>
                          </div>
                          <div className="task-information">
                            <span className="task-info-line">
                              <Link className="task-user" to="#">
                                Lesley Grauer
                              </Link>{" "}
                              <span className="task-info-subject">
                                added to Hospital Administration
                              </span>
                            </span>
                            <div className="task-time">Jan 20, 2023</div>
                          </div>
                          <div className="task-information">
                            <span className="task-info-line">
                              <Link className="task-user" to="#">
                                Lesley Grauer
                              </Link>{" "}
                              <span className="task-info-subject">
                                assigned to John Doe
                              </span>
                            </span>
                            <div className="task-time">Jan 20, 2023</div>
                          </div>
                          <hr className="task-line" />
                          <div className="task-information">
                            <span className="task-info-line">
                              <Link className="task-user" to="#">
                                John Doe
                              </Link>{" "}
                              <span className="task-info-subject">
                                changed the due date to Sep 28
                              </span>{" "}
                            </span>
                            <div className="task-time">9:09pm</div>
                          </div>
                          <div className="task-information">
                            <span className="task-info-line">
                              <Link className="task-user" to="#">
                                John Doe
                              </Link>{" "}
                              <span className="task-info-subject">
                                assigned to you
                              </span>
                            </span>
                            <div className="task-time">9:10pm</div>
                          </div>
                          <div className="chat chat-left">
                            <div className="chat-avatar">
                              <Link to="/profile" className="avatar">
                                <img alt="Image" src={Avatar_02} />
                              </Link>
                            </div>
                            <div className="chat-body">
                              <div className="chat-bubble">
                                <div className="chat-content">
                                  <span className="task-chat-user">
                                    John Doe
                                  </span>{" "}
                                  <span className="chat-time">8:35 am</span>
                                  <p>I'm just looking around.</p>
                                  <p>
                                    Will you tell me something about yourself?{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="completed-task-msg">
                            <span className="task-success">
                              <Link to="#">John Doe</Link> completed this task.
                            </span>{" "}
                            <span className="task-time">Today at 9:27am</span>
                          </div>
                          <div className="chat chat-left">
                            <div className="chat-avatar">
                              <Link to="/profile" className="avatar">
                                <img alt="Image" src={Avatar_02} />
                              </Link>
                            </div>
                            <div className="chat-body">
                              <div className="chat-bubble">
                                <div className="chat-content">
                                  <span className="task-chat-user">
                                    John Doe
                                  </span>{" "}
                                  <span className="file-attached">
                                    attached 3 files{" "}
                                    <i className="fa fa-paperclip" />
                                  </span>{" "}
                                  <span className="chat-time">
                                    Feb 17, 2023 at 4:32am
                                  </span>
                                  <ul className="attach-list">
                                    <li>
                                      <i className="fa fa-file" />{" "}
                                      <Link to="#">project_document.avi</Link>
                                    </li>
                                    <li>
                                      <i className="fa fa-file" />{" "}
                                      <Link to="#">video_conferencing.psd</Link>
                                    </li>
                                    <li>
                                      <i className="fa fa-file" />{" "}
                                      <Link to="#">landing_page.psd</Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="chat chat-left">
                            <div className="chat-avatar">
                              <Link to="/profile" className="avatar">
                                <img alt="Image" src={Avatar_16} />
                              </Link>
                            </div>
                            <div className="chat-body">
                              <div className="chat-bubble">
                                <div className="chat-content">
                                  <span className="task-chat-user">
                                    Jeffery Lalor
                                  </span>{" "}
                                  <span className="file-attached">
                                    attached file{" "}
                                    <i className="fa fa-paperclip" />
                                  </span>{" "}
                                  <span className="chat-time">
                                    Yesterday at 9:16pm
                                  </span>
                                  <ul className="attach-list">
                                    <li className="pdf-file">
                                      <i className="fa-regular fa-file-pdf" />{" "}
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
                                <img alt="Image" src={Avatar_16} />
                              </Link>
                            </div>
                            <div className="chat-body">
                              <div className="chat-bubble">
                                <div className="chat-content">
                                  <span className="task-chat-user">
                                    Jeffery Lalor
                                  </span>{" "}
                                  <span className="file-attached">
                                    attached file{" "}
                                    <i className="fa fa-paperclip" />
                                  </span>{" "}
                                  <span className="chat-time">
                                    Today at 12:42pm
                                  </span>
                                  <ul className="attach-list">
                                    <li className="img-file">
                                      <div className="attach-img-download">
                                        <Link to="#">avatar-1.jpg</Link>
                                      </div>
                                      <div className="task-attach-img">
                                        <img src={User} alt="Image" />
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="task-information">
                            <span className="task-info-line">
                              <Link className="task-user" to="#">
                                John Doe
                              </Link>
                              <span className="task-info-subject">
                                marked task as incomplete
                              </span>
                            </span>
                            <div className="task-time">1:16pm</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat-footer">
                  <div className="message-bar">
                    <div className="message-inner">
                      <Link className="link attach-icon" to="#">
                        <img src={Attachment} alt="Image" />
                      </Link>
                      <div className="message-area">
                        <div className="input-group">
                          <textarea
                            className="form-control"
                            placeholder="Type message..."
                            defaultValue={""}
                          />
                          <button className="btn btn-primary" type="button">
                            <i className="fa-solid fa-paper-plane" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="project-members task-followers">
                    <span className="followers-title">Followers</span>
                    <Link
                      className="avatar"
                      to="#"
                      data-bs-toggle="tooltip"
                      title="Jeffery Lalor"
                    >
                      <img alt="Image" src={Avatar_16} />
                    </Link>
                    <Link
                      className="avatar"
                      to="#"
                      data-bs-toggle="tooltip"
                      title="Richard Miles"
                    >
                      <img alt="Image" src={Avatar_09} />
                    </Link>
                    <Link
                      className="avatar"
                      to="#"
                      data-bs-toggle="tooltip"
                      title="John Smith"
                    >
                      <img alt="Image" src={Avatar_10} />
                    </Link>
                    <Link
                      className="avatar"
                      to="#"
                      data-bs-toggle="tooltip"
                      title="Mike Litorus"
                    >
                      <img alt="Image" src={Avatar_05} />
                    </Link>
                    <Link
                      to="#"
                      className="followers-add"
                      data-bs-toggle="modal"
                      data-bs-target="#task_followers"
                    >
                      <i className="material-icons">add</i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ProjectModelPopup />
        <TaskAssignee />
        <TaskFollowersModelPopup />
      </div>
    </>
  );
};

export default Tasks;

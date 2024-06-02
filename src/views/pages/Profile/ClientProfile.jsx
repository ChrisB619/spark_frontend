import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar_01,
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_11,
  Avatar_12,
  Avatar_13,
  Avatar_16,
  Avatar_19,
} from "../../../Routes/ImagePath";
import Breadcrumbs from "../../../components/Breadcrumbs";

const ClientProfile = () => {
  const profileData = {
    id: 1,
    name: "Global Technologies",
    role: "Barry Cuda",
    position: "CEO",
    employeeId: "CLT-0001",
    phone: "9876543210",
    email: "barrycuda@example.com",
    birthday: "2nd August",
    address: "5754 Airport Rd, Coosada, AL, 36020",
    gender: "Male",
  };

  const projectsData = [
    {
      id: 1,
      title: "Office Management",
      openTasks: 1,
      completedTasks: 9,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      deadline: "17 Apr 2023",
      projectLeader: { name: "Jeffery Lalor", avatar: "Avatar_16" },
      teamMembers: [
        { id: 1, name: "John Doe", avatar: "Avatar_02" },
        { id: 2, name: "Richard Miles", avatar: "Avatar_09" },
        { id: 3, name: "John Smith", avatar: "Avatar_10" },
        { id: 4, name: "Mike Litorus", avatar: "Avatar_05" },
      ],
    },
    {
      id: 2,
      title: "Project Management",
      openTasks: 2,
      completedTasks: 5,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      deadline: "17 Apr 2023",
      projectLeader: { name: "Jeffery Lalor", avatar: "Avatar_16" },
      teamMembers: [
        { id: 1, name: "John Doe", avatar: "Avatar_02" },
        { id: 2, name: "Richard Miles", avatar: "Avatar_09" },
        { id: 3, name: "John Smith", avatar: "Avatar_10" },
        { id: 4, name: "Mike Litorus", avatar: "Avatar_05" },
      ],
    },
    {
      id: 3,
      title: "Video Calling App",
      openTasks: 3,
      completedTasks: 3,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      deadline: "17 Apr 2023",
      projectLeader: { name: "Jeffery Lalor", avatar: "Avatar_16" },
      teamMembers: [
        { id: 1, name: "John Doe", avatar: "Avatar_02" },
        { id: 2, name: "Richard Miles", avatar: "Avatar_09" },
        { id: 3, name: "John Smith", avatar: "Avatar_10" },
        { id: 4, name: "Mike Litorus", avatar: "Avatar_05" },
      ],
    },
    {
      id: 4,
      title: "Hospital Administration",
      openTasks: 12,
      completedTasks: 4,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      deadline: "17 Apr 2023",
      projectLeader: { name: "Jeffery Lalor", avatar: "Avatar_16" },
      teamMembers: [
        { id: 1, name: "John Doe", avatar: "Avatar_02" },
        { id: 2, name: "Richard Miles", avatar: "Avatar_09" },
        { id: 3, name: "John Smith", avatar: "Avatar_10" },
        { id: 4, name: "Mike Litorus", avatar: "Avatar_05" },
      ],
    },
  ];

  const tasks = [
    "Patient appointment booking",
    "Appointment booking with payment gateway",
    "Doctor available module",
    "Patient and Doctor video conferencing",
    "Private chat module",
    "Patient Profile add",
  ];

  return (
    <div>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Client Profile"
            title="Dashboard"
            subtitle="Client Profile"
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
                          <img src={Avatar_19} alt="" />
                        </Link>
                      </div>
                    </div>
                    <div className="profile-basic">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="profile-info-left">
                            <h3 className="user-name m-t-0">
                              {profileData.name}
                            </h3>
                            <h5 className="company-role m-t-0 mb-0">
                              {profileData.role}
                            </h5>
                            <small className="text-muted">
                              {profileData.position}
                            </small>
                            <div className="staff-id">
                              Employee ID : {profileData.employeeId}
                            </div>
                            <div className="staff-msg">
                              <Link to="/call/chat" className="btn btn-custom">
                                Send Message
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <ul className="personal-info">
                            <li>
                              <span className="title">Phone:</span>
                              <span className="text">
                                <Link to={`tel:${profileData.phone}`}>
                                  {profileData.phone}
                                </Link>
                              </span>
                            </li>
                            <li>
                              <span className="title">Email:</span>
                              <span className="text">
                                <Link to={`mailto:${profileData.email}`}>
                                  {profileData.email}
                                </Link>
                              </span>
                            </li>
                            <li>
                              <span className="title">Birthday:</span>
                              <span className="text">
                                {profileData.birthday}
                              </span>
                            </li>
                            <li>
                              <span className="title">Address:</span>
                              <span className="text">
                                {profileData.address}
                              </span>
                            </li>
                            <li>
                              <span className="title">Gender:</span>
                              <span className="text">{profileData.gender}</span>
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

          <div className="card tab-box">
            <div className="row user-tabs">
              <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                <ul className="nav nav-tabs nav-tabs-bottom">
                  <li className="nav-item col-sm-3">
                    <Link
                      className="nav-link active"
                      data-bs-toggle="tab"
                      to="#myprojects"
                    >
                      Projects
                    </Link>
                  </li>
                  <li className="nav-item col-sm-3">
                    <Link className="nav-link" data-bs-toggle="tab" to="#tasks">
                      Tasks
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content profile-tab-content">
                {/* Projects Tab */}
                <div id="myprojects" className="tab-pane fade show active">
                  <div className="row">
                    {projectsData.map((project, index) => (
                      <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3 d-flex">
                        <div className="card w-100">
                          <div className="card-body">
                            <div className="dropdown dropdown-action profile-action">
                              <Link
                                to="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </Link>
                              <div className="dropdown-menu dropdown-menu-right">
                                <Link className="dropdown-item" to="#">
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  <i className="fa fa-trash m-r-5" /> Delete
                                </Link>
                              </div>
                            </div>
                            <h4 className="project-title">
                              <Link to="/projects-view">{project.title}</Link>
                            </h4>
                            <small className="block text-ellipsis m-b-15">
                              <span className="text-xs">
                                {project.openTasks}
                              </span>{" "}
                              <span className="text-muted">open tasks, </span>
                              <span className="text-xs">
                                {project.completedTasks}
                              </span>{" "}
                              <span className="text-muted">
                                tasks completed
                              </span>
                            </small>
                            <p className="text-muted">{project.description}</p>
                            <div className="pro-deadline m-b-15">
                              <div className="sub-title">Deadline:</div>
                              <div className="text-muted">
                                {project.deadline}
                              </div>
                            </div>
                            <div className="project-members m-b-15">
                              <div>Project Leader :</div>
                              <ul className="team-members">
                                <li>
                                  <Link
                                    to="#"
                                    data-bs-toggle="tooltip"
                                    title="Jeffery Lalor"
                                  >
                                    <img alt="" src={Avatar_16} />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="project-members m-b-15">
                              <div>Team :</div>
                              <ul className="team-members">
                                <li>
                                  <Link
                                    to="#"
                                    data-bs-toggle="tooltip"
                                    title="John Doe"
                                  >
                                    <img alt="" src={Avatar_02} />
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    data-bs-toggle="tooltip"
                                    title="Richard Miles"
                                  >
                                    <img alt="" src={Avatar_09} />
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    data-bs-toggle="tooltip"
                                    title="John Smith"
                                  >
                                    <img alt="" src={Avatar_10} />
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    data-bs-toggle="tooltip"
                                    title="Mike Litorus"
                                  >
                                    <img alt="" src={Avatar_05} />
                                  </Link>
                                </li>
                                <li className="dropdown avatar-dropdown">
                                  <Link
                                    to="#"
                                    className="all-users dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    +15
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <div className="avatar-group">
                                      <Link className="avatar avatar-xs" to="#">
                                        <img alt="" src={Avatar_02} />
                                      </Link>
                                      <Link className="avatar avatar-xs" to="#">
                                        <img alt="" src={Avatar_09} />
                                      </Link>
                                      <Link className="avatar avatar-xs" to="#">
                                        <img alt="" src={Avatar_10} />
                                      </Link>
                                      <Link className="avatar avatar-xs" to="#">
                                        <img alt="" src={Avatar_05} />
                                      </Link>
                                      <Link className="avatar avatar-xs" to="#">
                                        <img alt="" src={Avatar_11} />
                                      </Link>
                                      <Link className="avatar avatar-xs" to="#">
                                        <img alt="" src={Avatar_12} />
                                      </Link>
                                      <Link className="avatar avatar-xs" to="#">
                                        <img alt="" src={Avatar_13} />
                                      </Link>
                                      <Link className="avatar avatar-xs" to="#">
                                        <img alt="" src={Avatar_01} />
                                      </Link>
                                      <Link className="avatar avatar-xs" to="#">
                                        <img alt="" src={Avatar_16} />
                                      </Link>
                                    </div>
                                    <div className="avatar-pagination">
                                      <ul className="pagination">
                                        <li className="page-item">
                                          <Link
                                            className="page-link"
                                            to="#"
                                            aria-label="Previous"
                                          >
                                            <span aria-hidden="true">«</span>
                                            <span className="sr-only">
                                              Previous
                                            </span>
                                          </Link>
                                        </li>
                                        <li className="page-item">
                                          <Link className="page-link" to="#">
                                            1
                                          </Link>
                                        </li>
                                        <li className="page-item">
                                          <Link className="page-link" to="#">
                                            2
                                          </Link>
                                        </li>
                                        <li className="page-item">
                                          <Link
                                            className="page-link"
                                            to="#"
                                            aria-label="Next"
                                          >
                                            <span aria-hidden="true">»</span>
                                            <span className="sr-only">
                                              Next
                                            </span>
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <p className="m-b-5">
                              Progress{" "}
                              <span className="text-success float-end">
                                40%
                              </span>
                            </p>
                            <div className="progress progress-xs mb-0">
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                data-bs-toggle="tooltip"
                                title="40%"
                                style={{ width: "40%" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* /Projects Tab */}
                {/* Task Tab */}
                <div id="tasks" className="tab-pane fade">
                  <div className="project-task">
                    <ul className="nav nav-tabs nav-tabs-top nav-justified mb-0">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          to="#all_tasks"
                          data-bs-toggle="tab"
                          aria-expanded="true"
                        >
                          All Tasks
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="#pending_tasks"
                          data-bs-toggle="tab"
                          aria-expanded="false"
                        >
                          Pending Tasks
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="#completed_tasks"
                          data-bs-toggle="tab"
                          aria-expanded="false"
                        >
                          Completed Tasks
                        </Link>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane show active" id="all_tasks">
                        <div className="task-wrapper">
                          <div className="task-list-container">
                            <div className="task-list-body">
                              <ul id="task-list">
                                {tasks.map((task, index) => (
                                  <li className="task" key={index}>
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
                                        {task}
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
                                          <i className="material-icons">
                                            delete
                                          </i>
                                        </span>
                                      </span>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="task-list-footer">
                              <div className="new-task-wrapper">
                                <textarea
                                  id="new-task"
                                  placeholder="Enter new task here. . ."
                                  defaultValue={""}
                                />
                                <span className="error-message hidden">
                                  You need to enter a task first
                                </span>
                                <span
                                  className="add-new-task-btn btn"
                                  id="add-task"
                                >
                                  Add Task
                                </span>
                                <span className="btn" id="close-task-panel">
                                  Close
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="pending_tasks" />
                      <div className="tab-pane" id="completed_tasks" />
                    </div>
                  </div>
                </div>
                {/* /Task Tab */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;

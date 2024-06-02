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
} from "../../../../Routes/ImagePath";
import DeleteModal from "../../../../components/modelpopup/DeleteModal";
import ProjectModelPopup from "../../../../components/modelpopup/ProjectModelPopup";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import ProjectsFilter from "../../../../components/ProjectsFilter";

const Project = () => {
  const projectsData = [
    {
      id: 1,
      title: "Office Management",
      openTasks: 1,
      completedTasks: 9,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...",
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
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...",
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
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...",
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
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...",
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

  return (
    <div>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <Breadcrumbs
            maintitle="Projects"
            title="Dashboard"
            subtitle="Projects"
            modal="#create_project"
            name="Create Project"
            Linkname="/projects"
            Linkname1="/project-list"
          />

          {/* /Page Header */}
          <ProjectsFilter />
          <div className="row">
            {projectsData.map((project) => (
              <div
                className="col-lg-4 col-sm-6 col-md-4 col-xl-3 d-flex"
                key={project.id}
              >
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
                        <Link
                          className="dropdown-item"
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_project"
                        >
                          <i className="fa fa-pencil m-r-5" /> Edit
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete"
                        >
                          <i className="fa fa-trash m-r-5" /> Delete
                        </Link>
                      </div>
                    </div>
                    <h4 className="project-title">
                      <Link to="/projects-view">{project.title}</Link>
                    </h4>
                    <small className="block text-ellipsis m-b-15">
                      <span className="text-xs">{project.openTasks}</span>{" "}
                      <span className="text-muted">open tasks, </span>
                      <span className="text-xs">
                        {project.completedTasks}
                      </span>{" "}
                      <span className="text-muted">tasks completed</span>
                    </small>
                    <p className="text-muted">{project.description}</p>
                    <div className="pro-deadline m-b-15">
                      <div className="sub-title">Deadline:</div>
                      <div className="text-muted">{project.deadline}</div>
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
                                    <span className="sr-only">Previous</span>
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
                                    <span className="sr-only">Next</span>
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
                      <span className="text-success float-end">40%</span>
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
      </div>
      <ProjectModelPopup />
      <DeleteModal Name="Delete Project" />
    </div>
  );
};

export default Project;

import React from "react";
import { Link } from "react-router-dom";
import { Avatar_09, Avatar_11 } from "../../../../Routes/ImagePath";
import LeaderModelPopup from "../../../../components/modelpopup/LeaderModelPopup";
const ProjectViewDetails = () => {
  const projectData = {
    projectDetails: {
      cost: "$1200",
      totalHours: "100 Hours",
      created: "25 Feb, 2019",
      deadline: "12 Jun, 2019",
      priority: "Highest",
      createdBy: "Barry Cuda",
      status: "Working",
      progress: "40%",
    },
    assignedLeader: [
      { name: "Wilmer Deluna", role: "Team Leader" },
      { name: "Lesley Grauer", role: "Team Leader" },
    ],
    assignedUsers: [
      { name: "John Doe", role: "Web Designer" },
      { name: "Richard Miles", role: "Web Developer" },
    ],
  };
  return (
    <>
      <div className="col-lg-4 col-xl-3">
        <div className="card">
          <div className="card-body">
            <h6 className="card-title m-b-15">Project details</h6>
            <table className="table table-striped table-border">
              <tbody>
                <tr>
                  <td>Cost:</td>
                  <td className="text-end">
                    {projectData.projectDetails.cost}
                  </td>
                </tr>
                <tr>
                  <td>Total Hours:</td>
                  <td className="text-end">
                    {projectData.projectDetails.totalHours}
                  </td>
                </tr>
                <tr>
                  <td>Created:</td>
                  <td className="text-end">
                    {projectData.projectDetails.created}
                  </td>
                </tr>
                <tr>
                  <td>Deadline:</td>
                  <td className="text-end">
                    {projectData.projectDetails.deadline}
                  </td>
                </tr>
                <tr>
                  <td>Priority:</td>
                  <td className="text-end">
                    <div className="btn-group">
                      <Link
                        to="#"
                        className="badge badge-danger dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        {projectData.projectDetails.priority}{" "}
                      </Link>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to="#">
                          <i className="far fa-dot-circle text-danger" />{" "}
                          Highest priority
                        </Link>
                        <Link className="dropdown-item" to="#">
                          <i className="far fa-dot-circle text-info" /> High
                          priority
                        </Link>
                        <Link className="dropdown-item" to="#">
                          <i className="far fa-dot-circle text-primary" />{" "}
                          Normal priority
                        </Link>
                        <Link className="dropdown-item" to="#">
                          <i className="far fa-dot-circle text-success" /> Low
                          priority
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Created by:</td>
                  <td className="text-end">
                    <Link to="/app/profile/employee-profile">
                      {projectData.projectDetails.createdBy}
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Status:</td>
                  <td className="text-end">
                    {projectData.projectDetails.status}
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="m-b-5">
              Progress{" "}
              <span className="text-success float-end">
                {projectData.projectDetails.progress}
              </span>
            </p>
            <div className="progress progress-xs mb-0">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                data-bs-toggle="tooltip"
                title={projectData.projectDetails.progress}
                style={{ width: projectData.projectDetails.progress }}
              />
            </div>
          </div>
        </div>
        <div className="card project-user">
          <div className="card-body">
            <h6 className="card-title m-b-20">
              Assigned Leader{" "}
              <button
                type="button"
                className="float-end btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#assign_leader"
              >
                <i className="fa fa-plus" /> Add
              </button>
            </h6>
            <ul className="list-box">
              {projectData.assignedLeader.map((leader, index) => (
                <li key={index}>
                  <Link to="/employee-profile">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">
                          <img alt="" src={Avatar_09} />
                        </span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">{leader.name}</span>
                        <div className="clearfix" />
                        <span className="message-content">{leader.role}</span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card project-user">
          <div className="card-body">
            <h6 className="card-title m-b-20">
              Assigned users
              <button
                type="button"
                className="float-end btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#assign_leader"
              >
                <i className="fa fa-plus" /> Add
              </button>
            </h6>
            <ul className="list-box">
              {projectData.assignedUsers.map((user, index) => (
                <li key={index}>
                  <Link to="/app/profile/employee-profile">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">
                          <img alt="" src={Avatar_11} />
                        </span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">{user.name}</span>
                        <div className="clearfix" />
                        <span className="message-content">{user.role}</span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <LeaderModelPopup />
      </div>
    </>
  );
};

export default ProjectViewDetails;

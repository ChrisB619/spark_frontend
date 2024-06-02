import React from "react";
import { Link } from "react-router-dom";
import ProjectsFilter from "../../../../components/ProjectsFilter";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import SearchBox from "../../../../components/SearchBox";
import { Table } from "antd";
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

const ProjectList = () => {
  const projectlist = [
    {
      id: 1,
      Project: "Office Management",
      ProjectId: "PRO-0001",
      img: Avatar_16,
      Team: "",
      Deadline: "17 Apr 2023",
      Priority: "High",
      Status: "Active",
    },
    {
      id: 2,
      Project: "Project Management",
      ProjectId: "PRO-0002",
      img: Avatar_16,
      Team: "+15",
      Deadline: "17 Apr 2023",
      Priority: " High",
      Status: "Active",
    },
    {
      id: 3,
      Project: "Video Calling App",
      ProjectId: "PRO-0003",
      img: Avatar_16,
      Team: "+15",
      Deadline: "17 Apr 2023",
      Priority: "High",
      Status: " Inactive",
      Action: "more_vertEdit Delete",
    },
    {
      id: 4,
      Project: "Hospital Administration",
      ProjectId: "PRO-0004",
      img: Avatar_16,
      Team: "+15",
      Deadline: "17 Apr 2023",
      Priority: "High ",
      Status: "Active",
      Action: "more_vertEdit Delete",
    },
    {
      id: 5,
      Project: "Office Management",
      ProjectId: "PRO-0005",
      img: Avatar_16,
      Team: "+15",
      Deadline: "17 Apr 2023",
      Priority: "High",
      Status: "Active",
      Action: "more_vertEdit Delete",
    },
    {
      id: 6,
      Project: "Project Management",
      ProjectId: "PRO-0006",
      img: Avatar_16,
      Team: "+15",
      Deadline: "17 Apr 2023",
      Priority: "Medium",
      Status: "Active",
      Action: "more_vertEdit Delete",
    },
    {
      id: 7,
      Project: "Video Calling App",
      ProjectId: "PRO-0007",
      img: Avatar_16,
      Team: "+15",
      Deadline: "17 Apr 2023",
      Priority: "High",
      Status: "Inactive",
      Action: "more_vertEdit Delete",
    },
    {
      id: 8,
      Project: "Hospital Administration",
      ProjectId: "PRO-0008",
      img: Avatar_16,
      Team: "+15",
      Deadline: "17 Apr 2023",
      Priority: "High",
      Status: "Active",
      Action: "more_vertEdit Delete",
    },
    {
      id: 9,
      Project: "Office Management",
      ProjectId: "PRO-0009",
      img: Avatar_16,
      Team: "+15",
      Deadline: "17 Apr 2023",
      Priority: "Medium",
      Status: "Active",
      Action: "more_vertEdit Delete",
    },
    {
      id: 10,
      Project: "Project Management",
      ProjectId: "PRO-0010",
      img: Avatar_16,
      Team: "+15",
      Deadline: "17 Apr 2023",
      Priority: " Medium",
      Status: "Active",
      Action: "more_vertEdit Delete",
    },
    {
      id: 11,
      Project: "Video Calling App",
      ProjectId: "PRO-0011",
      img: Avatar_16,
      Team: "+15",
      Deadline: "17 Apr 2023",
      Priority: "High",
      Status: "Inactive",
      Action: "more_vertEdit Delete",
    },
  ];
  const columns = [
    {
      title: "Project",
      dataIndex: "Project",
      sorter: (a, b) => a.Project.length - b.Project.length,
    },
    {
      title: "ProjectId",
      dataIndex: "ProjectId",
      sorter: (a, b) => a.ProjectId.length - b.ProjectId.length,
    },
    {
      title: "Team",
      dataIndex: "Team",
      render: () => (
        <ul className="team-members">
          <li>
            <Link to="#" title="John Doe" data-bs-toggle="tooltip">
              <img alt="" src={Avatar_02} />
            </Link>
          </li>
          <li>
            <Link to="#" title="Richard Miles" data-bs-toggle="tooltip">
              <img alt="" src={Avatar_09} />
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
                    <Link className="page-link" to="#" aria-label="Previous">
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
                    <Link className="page-link" to="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                      <span className="sr-only">Next</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      ),
      sorter: (a, b) => a.Team.length - b.Team.length,
    },
    {
      title: "Deadline",
      dataIndex: "Deadline",
      sorter: (a, b) => a.Deadline.length - b.Deadline.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => (
        <div className="dropdown action-label">
          <Link
            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
            to="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i
              className={
                text === "Inactive"
                  ? "far fa-dot-circle text-danger"
                  : "far fa-dot-circle text-success"
              }
            />{" "}
            {text}
          </Link>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-success" /> Active
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-danger" /> Inactive
            </Link>
          </div>
        </div>
      ),
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
    {
      title: "Priority",
      dataIndex: "Priority",
      render: () => (
        <div className="dropdown action-label">
          <Link
            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
            to="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="far fa-dot-circle text-danger" /> High
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-danger" /> High
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-warning" /> Medium
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-success" /> Low
            </Link>
          </div>
        </div>
      ),
      sorter: (a, b) => a.Priority.length - b.Priority.length,
    },
    {
      title: "Action",
      className: "text-end",
      render: () => (
        <div className="dropdown dropdown-action text-end">
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
      ),
      sorter: (a, b) => a.length - b.length,
      width: "10%",
    },
  ];
  return (
    <>
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
            <div className="col-md-12">
              <SearchBox />

              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={projectlist}
                  className="table table-striped custom-table datatable dataTable no-footer"
                  rowKey={(record) => record.id}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProjectModelPopup />
      <DeleteModal Name="Delete Project" />
    </>
  );
};

export default ProjectList;

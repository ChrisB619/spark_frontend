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
} from "../../../Routes/ImagePath";
import { Table } from "antd";
import Breadcrumbs from "../../../components/Breadcrumbs";
import SearchBox from "../../../components/SearchBox";

const Leads = () => {
  const data = [
    {
      id: 1,
      image: Avatar_11,
      name: "John Doe",
      email: "barrycuda@example.com",
      mobile: "9876543210",
      project: "Hospital Administration",
      status: "Working",
      created: "10 hours ago",
    },
    {
      id: 2,
      image: Avatar_01,
      name: "Lesley Grauer",
      email: "lesleygrauer@example.com",
      mobile: "9876543210",
      project: "Video Calling App",
      status: "Working",
      created: "5 hours ago",
    },
    {
      id: 3,
      image: Avatar_16,
      name: "Jeffery Lalor",
      email: "jefferylalor@example.com",
      mobile: "9876543210",
      project: "Office Management",
      status: "Working",
      created: "27 hours ago",
    },
    {
      id: 4,
      image: Avatar_11,
      name: "John Doe",
      email: "barrycuda@example.com",
      mobile: "9876543210",
      project: "Hospital Administration",
      status: "Working",
      created: "10 hours ago",
    },
    {
      id: 5,
      image: Avatar_01,
      name: "Lesley Grauer",
      email: "lesleygrauer@example.com",
      mobile: "9876543210",
      project: "Video Calling App",
      status: "Working",
      created: "5 hours ago",
    },
    {
      id: 6,
      image: Avatar_16,
      name: "Jeffery Lalor",
      email: "jefferylalor@example.com",
      mobile: "9876543210",
      project: "Office Management",
      status: "Working",
      created: "27 hours ago",
    },
    {
      id: 7,
      image: Avatar_11,
      name: "John Doe",
      email: "barrycuda@example.com",
      mobile: "9876543210",
      project: "Hospital Administration",
      status: "Working",
      created: "10 hours ago",
    },
    {
      id: 8,
      image: Avatar_01,
      name: "Lesley Grauer",
      email: "lesleygrauer@example.com",
      mobile: "9876543210",
      project: "Video Calling App",
      status: "Working",
      created: "5 hours ago",
    },
    {
      id: 9,
      image: Avatar_16,
      name: "Jeffery Lalor",
      email: "jefferylalor@example.com",
      mobile: "9876543210",
      project: "Office Management",
      status: "Working",
      created: "27 hours ago",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Lead Name",
      dataIndex: "name",
      render: (text, record) => (
        <span className="table-avatar">
          <Link to="/profile" className="avatar">
            <img alt="" src={record.image} />
          </Link>
          {text}
        </span>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },

    {
      title: "Mobile",
      dataIndex: "mobile",
      sorter: (a, b) => a.mobile.length - b.mobile.length,
    },

    {
      title: "Project",
      dataIndex: "project",
      render: (text) => <Link to="/projects-view">{text}</Link>,
      sorter: (a, b) => a.project.length - b.project.length,
    },

    {
      title: "Assigned Staff",
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
      sorter: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <span
          className={
            text === "Working"
              ? "badge bg-inverse-success"
              : "badge bg-inverse-info"
          }
        >
          {text}
        </span>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Created",
      dataIndex: "created",
      sorter: (a, b) => a.created.length - b.created.length,
    },
    {
      title: "Action",
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
            <Link className="dropdown-item" to="#">
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="fa fa-trash m-r-5" /> Delete
            </Link>
          </div>
        </div>
      ),
      sorter: true,
    },
  ];
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Leads"
            title="Dashboard"
            subtitle="Leads"
            modal="#add_leave"
            name="Add New"
          />

          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <SearchBox />
                <Table
                  className="table-striped"
                  columns={columns}
                  dataSource={data}
                  rowKey={(record) => record.id}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leads;

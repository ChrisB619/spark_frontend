import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const UserDataTable = () => {
  const data = [
    {
      id: 1,
      jobtitle: "Web Developer",
      department: "Development",
      startdate: "1 Jan 2023",
      expirydate: "31 Feb 2023",
      jobtype: "Full Time",
      status: "Open",
    },
    {
      id: 2,
      jobtitle: "Web Designer",
      department: "Designing",
      startdate: "18 Mar 2023",
      expirydate: "31 May 2023",
      jobtype: "Part Time",
      status: "Closed",
    },
    {
      id: 3,
      jobtitle: "Android Developer",
      department: "Android",
      startdate: "1 Apr 2023",
      expirydate: "31 March 2023",
      jobtype: "Internship",
      status: "Cancelled",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Job Title",
      dataIndex: "jobtitle",
      render: (text) => <Link to="/app/administrator/job-details">{text}</Link>,
      sorter: (a, b) => a.jobtitle.length - b.jobtitle.length,
    },

    {
      title: "Department",
      dataIndex: "department",
      sorter: (a, b) => a.department.length - b.department.length,
    },
    {
      title: "Start Date",
      dataIndex: "startdate",
      sorter: (a, b) => a.startdate.length - b.startdate.length,
    },

    {
      title: "Expiry Date",
      dataIndex: "expirydate",
      sorter: (a, b) => a.expirydate.length - b.expirydate.length,
    },
    {
      title: "Job Type",
      dataIndex: "jobtype",
      render: (text) => (
        <div className="action-label">
          <Link
            className="btn btn-white btn-sm btn-rounded"
            to="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i
              className={
                text === "Full Time"
                  ? "far fa-dot-circle text-danger"
                  : text === "Part Time"
                  ? "far fa-dot-circle text-success"
                  : text === "Internship"
                  ? "far fa-dot-circle text-danger"
                  : "far fa-dot-circle text-danger"
              }
            />{" "}
            {text}
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-danger" /> Full Time
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-success" /> Part Time
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-danger" /> Internship
            </Link>
          </div>
        </div>
      ),
      sorter: (a, b) => a.jobtype.length - b.jobtype.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <div className="action-label">
          <Link
            className="btn btn-white btn-sm btn-rounded"
            to="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i
              className={
                text === "Open"
                  ? "far fa-dot-circle text-danger"
                  : text === "Closed"
                  ? "far fa-dot-circle text-success"
                  : "far fa-dot-circle text-danger"
              }
            />{" "}
            {text}
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-danger" /> Open
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-success" /> Closed
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-danger" /> Cancelled
            </Link>
          </div>
        </div>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Action",
      render: () => (
        <div className="dropdown dropdown-action">
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
              data-bs-target="#delete"
            >
              <i className="fa fa-trash m-r-5" /> Delete
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-responsive">
          <Table
            className="table-striped"
            style={{ overflowX: "auto" }}
            columns={columns}
            dataSource={data}
            rowKey={(record) => record.id}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDataTable;

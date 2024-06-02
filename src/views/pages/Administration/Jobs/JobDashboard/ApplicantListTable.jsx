import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar_02,
  Avatar_09,
  Avatar_10,
} from "../../../../../Routes/ImagePath";
import DeleteModal from "../../../../../components/modelpopup/deletePopup";

const ApplicantListTable = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      role: "Web Designer",
      jobTitle: "Web Developer",
      department: "Development",
      startDate: "3 Mar 2019",
      endDate: "31 May 2019",
      employmentType: "Full Time",
      status: "Open",
      image: Avatar_02,
    },
    {
      id: 2,
      name: "Richard Miles",
      role: "Web Developer",
      jobTitle: "Web Designer",
      department: "Designing",
      startDate: "3 Mar 2019",
      endDate: "31 May 2019",
      employmentType: "Part Time",
      status: "Closed",
      image: Avatar_09,
    },
    {
      id: 3,
      name: "John Smith",
      role: "Android Developer",
      jobTitle: "Android Developer",
      department: "Android",
      startDate: "3 Mar 2019",
      endDate: "31 May 2019",
      employmentType: "Internship",
      status: "Cancelled",
      image: Avatar_10,
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.position.length - b.position.length,
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <div className="table-avatar">
          <Link to="/profile" className="avatar">
            <img alt="" src={record.image} />
          </Link>
          <Link to="/profile">
            {text} <span>{record.role}</span>
          </Link>
        </div>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Job Title",
      dataIndex: "jobTitle",
      sorter: (a, b) => a.jobTitle.length - b.jobTitle.length,
    },
    {
      title: "Department",
      dataIndex: "department",
      sorter: (a, b) => a.department.length - b.department.length,
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      sorter: (a, b) => a.startDate.length - b.startDate.length,
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      sorter: (a, b) => a.endDate.length - b.endDate.length,
    },
    {
      title: "Job Type",
      dataIndex: "employmentType",
      render: (text) => (
        <div className="dropdown action-label">
          <Link className="btn btn-white btn-sm btn-rounded " to="#">
            <i
              className={
                text === "Part Time"
                  ? "far fa-dot-circle text-danger"
                  : "far fa-dot-circle text-success"
              }
            />{" "}
            {text}
          </Link>
        </div>
      ),
      sorter: (a, b) => a.employmentType.length - b.employmentType.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <div className="dropdown action-label">
          <Link className="btn btn-white btn-sm btn-rounded " to="#">
            <i
              className={
                text === "Closed"
                  ? "far fa-dot-circle text-danger"
                  : "far fa-dot-circle text-success"
              }
            />{" "}
            {text}
          </Link>
        </div>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },

    {
      title: "Resume",
      dataIndex: "status",
      render: () => (
        <Link to="#" className="btn btn-sm btn-primary">
          <i className="fa-solid fa-download me-1"></i> Download
        </Link>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
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
        <div className="card card-table">
          <div className="card-header">
            <h3 className="card-title mb-0">Applied Jobs</h3>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <Table
                className="table-striped"
                style={{ overflowX: "auto" }}
                columns={columns}
                dataSource={data}
                rowKey={(record) => record.id}
                pagination={false}
              />
            </div>
            <DeleteModal Name="Delete" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantListTable;

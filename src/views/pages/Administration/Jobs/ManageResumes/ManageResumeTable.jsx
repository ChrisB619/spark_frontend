import React from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import {
  Avatar_01,
  Avatar_02,
  Avatar_03,
} from "../../../../../Routes/ImagePath";
import DeleteModal from "../../../../../components/modelpopup/deletePopup";
import AddJobResumes from "../../../../../components/Administration/Jobs/ManageResumes/AddJobResumes";

const ManageJobResumesTable = () => {
  const data = [
    {
      id: 1,
      image: Avatar_02,
      name: "John Doe",
      role: "Web Designer",
      jobtitle: "Web Designer",
      department: "Development",
      startdate: "1 Jan 2023",
      expirydate: "31 May 2019",
      jobtype: "Full Time",
      status: "Open",
      applicants: "3 Candidates",
    },
    {
      id: 2,
      image: Avatar_01,
      name: "Richard Miles",
      role: "Web Developer",
      jobtitle: "Web Developer",
      department: "Designing",
      startdate: "18 Mar 2014",
      expirydate: "31 May 2019",
      jobtype: "Part Time",
      status: "Closed",
      applicants: "2 Candidates",
    },
    {
      id: 3,
      image: Avatar_03,
      name: "John Smith",
      role: "Android Developer",
      jobtitle: "Android Developer",
      department: "Android",
      startdate: "1 Apr 2014",
      expirydate: "31 May 2019",
      jobtype: "Internship",
      status: "Cancelled",
      applicants: "1 Candidates",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
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
      dataIndex: "jobtitle",
      render: (text) => <Link to="/job-details">{text}</Link>,
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
        <div className="dropdown action-label text-center">
          <Link
            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
            to="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i
              className={
                text === "Full Time"
                  ? "far fa-dot-circle text-info"
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
              <i className="far fa-dot-circle text-info" /> Full Time
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-success" /> Part Time
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-danger" /> Internship
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-warning" /> Temporary
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-warning" /> Other
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
        <div className="dropdown action-label text-center">
          <Link
            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
            to="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i
              className={
                text === "Open"
                  ? "far fa-dot-circle text-info"
                  : text === "Closed"
                  ? "far fa-dot-circle text-success"
                  : "far fa-dot-circle text-danger"
              }
            />{" "}
            {text}
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-info" /> Open
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
      title: "Resume",
      dataIndex: "applicants",
      render: () => (
        <Link to="#" className="btn btn-sm btn-primary">
          <i className="fa fa-download me-1" /> Download
        </Link>
      ),
      sorter: (a, b) => a.applicants.length - b.applicants.length,
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
            <Link
              to="#"
              className="dropdown-item"
              data-bs-toggle="modal"
              data-bs-target="#edit_jobresumes"
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link
              to="#"
              className="dropdown-item"
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
    <>
      <div className="row">
        <div className="col-md-12">
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
        </div>
      </div>
      <AddJobResumes />
      <DeleteModal Name="Delete" />
    </>
  );
};

export default ManageJobResumesTable;

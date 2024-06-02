import React from "react";
import { Table } from "antd";
import DeleteModal from "../../../../../components/modelpopup/deletePopup";
import { Link } from "react-router-dom";
import {
  Avatar_01,
  Avatar_02,
  Avatar_03,
} from "../../../../../Routes/ImagePath";

const OfferApprovalTable = () => {
  const data = [
    {
      id: 1,
      image: Avatar_02,
      name: "John Doe",
      role: "Web Designer",
      jobtitle: "Web Designer",
      jobtype: "Temporary",
      pay: "$25000",
      annualip: "15%",
      longtermip: "No",
      status: "Requested",
    },
    {
      id: 2,
      image: Avatar_01,
      name: "Richard Miles",
      role: "Web Developer",
      jobtitle: "Web Developer",
      jobtype: "Contract",
      pay: "$25000",
      annualip: "15%",
      longtermip: "No",
      status: "Rejected",
    },
    {
      id: 3,
      image: Avatar_03,
      name: "John Smith",
      role: "Android Developer",
      jobtitle: "Android Developer",
      jobtype: "Salary",
      pay: "$25000",
      annualip: "15%",
      longtermip: "No",
      status: "Approved",
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
      title: "Job Type",
      dataIndex: "jobtype",
      sorter: (a, b) => a.department.length - b.department.length,
    },
    {
      title: "Pay",
      dataIndex: "pay",
      sorter: (a, b) => a.department.length - b.department.length,
    },
    {
      title: "Annual IP",
      dataIndex: "annualip",
      sorter: (a, b) => a.department.length - b.department.length,
    },
    {
      title: "Long Term IP",
      dataIndex: "longtermip",
      sorter: (a, b) => a.department.length - b.department.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <label
          className={`badge bg-inverse-${
            text === "Requested"
              ? "warning"
              : text === "Rejected"
              ? "danger"
              : "success"
          }`}
          style={{ display: "inline-block", minWidth: 90 }}
        >
          {text}
        </label>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Actions",
      render: () => (
        <div className="dropdown dropdown-action text-center">
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
              <i className="fa-regular fa-thumbs-up m-r-5" /> Approved
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="fa-solid fa-ban m-r-5" /> Rejected
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

      <DeleteModal Name="Delete" />
    </>
  );
};

export default OfferApprovalTable;

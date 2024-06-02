import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar_02,
  Avatar_09,
  Avatar_10,
} from "../../../../../Routes/ImagePath";
import DeleteModal from "../../../../../components/modelpopup/deletePopup";

const ShortlistTable = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      role: "Web Designer",
      jobTitle: "Web Designer",
      department: "Department",
      status: "Offered",
      image: Avatar_02,
    },
    {
      id: 2,
      name: "Richard Miles",
      role: "Web Developer",
      jobTitle: "Web Developer",
      department: "Department",
      status: "Offered",
      image: Avatar_09,
    },
    {
      id: 3,
      name: "John Smith",
      role: "Android Developer",
      jobTitle: "Android Developer",
      department: "Department",
      status: "Offered",
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
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <div className="dropdown action-label">
          <Link className="btn btn-white btn-sm btn-rounded " to="#">
            <i
              className={
                text === "Offered"
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

export default ShortlistTable;

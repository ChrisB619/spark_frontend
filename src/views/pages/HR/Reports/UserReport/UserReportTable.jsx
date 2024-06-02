import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Avatar_19, Avatar_21 } from "../../../../../Routes/ImagePath";

const UserReportTable = () => {
  const data = [
    {
      id: "1",
      name: "Barry Cuda",
      company: "Global Technologies",
      email: "barrycuda@example.com",
      role: "CEO",
      status: "Active",
      type: "Client",
      image: Avatar_19,
    },
    {
      id: "2",
      name: "Daniel Porter",
      company: "Focus Technologies",
      email: "danielporter@example.com",
      role: "Admin Manager",
      status: "Active",
      type: "Admin",
      image: Avatar_21,
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
          <Link to="#" className="avatar">
            <img alt="" src={record.image} />
          </Link>
          <Link to="#">
            {text} <span>{record.role}</span>
          </Link>
        </div>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Company",
      dataIndex: "company",
      sorter: (a, b) => a.company.length - b.company.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },

    {
      title: "Role",
      dataIndex: "type",
      render: (text) => (
        <span
          className={
            text === "Client"
              ? "badge bg-inverse-success"
              : text === "Admin"
              ? "badge bg-inverse-danger"
              : "badge bg-inverse-default"
          }>
          {text}
        </span>
      ),
      sorter: (a, b) => a.type.length - b.type.length,
    },

    {
      title: "Designation",
      dataIndex: "role",
      sorter: (a, b) => a.role.length - b.role.length,
    },

    {
      title: "Role",
      dataIndex: "status",
      render: (text) => (
        <div className="dropdown action-label">
          <Link
            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
            to="#"
            data-bs-toggle="dropdown"
            aria-expanded="false">
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
      sorter: (a, b) => a.status.length - b.status.length,
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

export default UserReportTable;

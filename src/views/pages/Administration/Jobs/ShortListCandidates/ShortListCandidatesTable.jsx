import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar_01,
  Avatar_02,
  Avatar_03,
} from "../../../../../Routes/ImagePath";

const ShortListCanditatesTable = () => {
  const data = [
    {
      id: 1,
      image: Avatar_02,
      name: "John Doe",
      role: "Web Designer",
      jobtitle: "Web Designer",
      department: "Devolpment",
    },
    {
      id: 2,
      image: Avatar_01,
      name: "Richard Miles",
      role: "Web Developer",
      jobtitle: "Web Developer",
      department: "Designing",
    },
    {
      id: 3,
      image: Avatar_03,
      name: "John Smith",
      role: "Android Developer",
      jobtitle: "Android Developer",
      department: "Android",
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
      render: (text) => <Link to="/app/administrator/job-details">{text}</Link>,
      sorter: (a, b) => a.jobtitle.length - b.jobtitle.length,
    },
    {
      title: "Department",
      dataIndex: "department",
      sorter: (a, b) => a.department.length - b.department.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: () => (
        <div className="action-label">
          <Link className="btn btn-white btn-sm btn-rounded" to="#">
            <i className="far fa-dot-circle text-danger" /> Offered
          </Link>
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

export default ShortListCanditatesTable;

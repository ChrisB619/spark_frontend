import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar_03,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_11,
} from "../../../../../Routes/ImagePath";

const DailyReportTable = () => {
  const data = [
    {
      id: 1,
      image: Avatar_03,
      name: "John Doe",
      number: "#0001",
      date: "20 Dec 2023",
      department: "Design",
      status: "Week off",
    },
    {
      id: 2,
      image: Avatar_09,
      name: "Richard Miles",
      number: "#0002",
      date: "20 Dec 2023",
      department: "Web Developer",
      status: "Absent",
    },
    {
      id: 3,
      image: Avatar_10,
      name: "John Smith",
      number: "#003",
      date: "20 Dec 2023",
      department: "Android Developer",
      status: "Week off",
    },
    {
      id: 4,
      image: Avatar_05,
      name: "Mike Litorus",
      number: "#004",
      date: "20 Dec 2023",
      department: "IOS Developer",
      status: "Week off",
    },
    {
      id: 5,
      image: Avatar_11,
      name: "Wilmer Deluna",
      number: "#005",
      date: "20 Dec 2023",
      department: "Team Leader",
      status: "Week off",
    },
  ];
  const columns = [
    {
      title: "Employee",
      dataIndex: "name",
      render: (text, record) => (
        <div className="table-avatar">
          <Link to="/profile" className="avatar">
            <img alt="" src={record.image} />
          </Link>
          <Link to="/profile">
            {text} <span>{record.number}</span>
          </Link>
        </div>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.date.length - b.date.length,
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
        <div className="dropdown dropdown-action">
          <button
            className={`btn btn-outline-${
              text === "Absent" ? "danger" : "info"
            } btn-sm`}
          >
            {text}
          </button>
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

export default DailyReportTable;

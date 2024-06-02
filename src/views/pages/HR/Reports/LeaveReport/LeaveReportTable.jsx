import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_11,
} from "../../../../../Routes/ImagePath";

const LeaveReportTable = () => {
  const data = [
    {
      id: 1,
      image: Avatar_05,
      name: "John Doe",
      number: "#0001",
      date: "20 June 2023",
      department: "Design",
      leavetype: "Sick Leave",
      noofdays: "05",
      remainingleave: "08",
      totalleaves: "20",
      totalleavetaken: "12",
      leavecarryforward: "08",
    },
    {
      id: 2,
      image: Avatar_02,
      name: "Richard Miles",
      number: "#0002",
      date: "20 Dec 2022",
      department: "Android Developer",
      leavetype: "Emergency Leave",
      noofdays: "01",
      remainingleave: "09",
      totalleaves: "20",
      totalleavetaken: "17",
      leavecarryforward: "03",
    },
    {
      id: 3,
      image: Avatar_09,
      name: "Mike Litorous",
      number: "#0003",
      date: "20 Dec 2022",
      department: "IOS Developer",
      leavetype: "Sick Leave",
      noofdays: "15",
      remainingleave: "05",
      totalleaves: "20",
      totalleavetaken: "15",
      leavecarryforward: "05",
    },
    {
      id: 4,
      image: Avatar_11,
      name: "John Smith",
      number: "#0004",
      date: "20 Dec 2022",
      department: "Web Developer",
      leavetype: "Parenting Leave",
      noofdays: "03",
      remainingleave: "15",
      totalleaves: "20",
      totalleavetaken: "15",
      leavecarryforward: "05",
    },

    {
      id: 5,
      image: Avatar_10,
      name: "Wilmer Deluna",
      number: "#0005",
      date: "20 Dec 2022",
      department: "Team Leader",
      leavetype: "Sick Leave",
      noofdays: "10",
      remainingleave: "03",
      totalleaves: "20",
      totalleavetaken: "15",
      leavecarryforward: "05",
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
      title: "Leave Type",
      dataIndex: "leavetype",
      render: (text) => (
        <button
          className={`btn btn-outline-${
            text === "Emergency Leave"
              ? "danger"
              : text === "Parenting Leave"
              ? "warning"
              : "info"
          } btn-sm`}
        >
          {text}
        </button>
      ),
      sorter: (a, b) => a.leavetype.length - b.leavetype.length,
    },
    {
      title: "No.of Days",
      dataIndex: "noofdays",
      render: (text) => <span className="btn btn-danger btn-sm">{text}</span>,
      sorter: (a, b) => a.noofdays.length - b.noofdays.length,
    },
    {
      title: "Remaining Leave",
      dataIndex: "remainingleave",
      render: (text) => (
        <span className="btn btn-warning btn-sm">
          <b>{text}</b>
        </span>
      ),
      sorter: (a, b) => a.remainingleave.length - b.remainingleave.length,
    },
    {
      title: "Total Leaves",
      dataIndex: "totalleaves",
      render: (text) => (
        <span className="btn btn-success btn-sm">
          <b>{text}</b>
        </span>
      ),
      sorter: (a, b) => a.totalleaves.length - b.totalleaves.length,
    },
    {
      title: "Total Leave Taken",
      dataIndex: "totalleavetaken",
      sorter: (a, b) => a.totalleavetaken.length - b.totalleavetaken.length,
    },
    {
      title: "Leave Carry Forward",
      dataIndex: "leavecarryforward",
      sorter: (a, b) => a.leavecarryforward.length - b.leavecarryforward.length,
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

export default LeaveReportTable;

import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import DeleteModal from "../../../components/modelpopup/DeleteModal";
import EmployeeLeaveModelPopup from "../../../components/modelpopup/EmployeeLeaveModelPopup";
import SearchBox from "../../../components/SearchBox";
import { base_url } from "../../../base_urls";

const EmployeeLeave = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(base_url + "/api/adminleaves.json")
      .then((res) => setUsers(res.data));
  }, []);

  const userElements = users.map((user, index) => ({
    key: index,
    leavetype: user.leavetype,
    from: user.from,
    to: user.to,
    noofdays: user.noofdays,
    reason: user.reason,
    role: user.role,
    status: user.status,
    approvedby: user.approvedby,
  }));

  const columns = [
    {
      title: "Leave Type",
      dataIndex: "leavetype",
      render: (text) => <span>{text}</span>,
      sorter: (a, b) => a.leavetype.length - b.leavetype.length,
    },

    {
      title: "From",
      dataIndex: "from",
      render: (text) => <span>{text}</span>,

      sorter: (a, b) => a.from.length - b.from.length,
    },
    {
      title: "To",
      dataIndex: "to",
      render: (text) => <span>{text}</span>,

      sorter: (a, b) => a.to.length - b.to.length,
    },

    {
      title: "No Of Days",
      dataIndex: "noofdays",
      render: (text) => <span>{text}</span>,
      sorter: (a, b) => a.noofdays.length - b.noofdays.length,
    },

    {
      title: "Reason",
      dataIndex: "reason",
      render: (text) => <span>{text}</span>,

      sorter: (a, b) => a.reason.length - b.reason.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: true,
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
                text === "New"
                  ? "far fa-dot-circle text-purple"
                  : text === "Pending"
                  ? "far fa-dot-circle text-info"
                  : text === "Approved"
                  ? "far fa-dot-circle text-success"
                  : "far fa-dot-circle text-danger"
              }
            />{" "}
            {text}
          </Link>

          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-purple" /> New
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-info" /> Pending
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-success" /> Approved
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-danger" /> Declined
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "Action",
      className: "text-end",
      sorter: true,
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
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit_leave"
            >
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
  const leaveStats = [
    {
      id: 1,
      title: "Annual Leave",
      value: 12,
    },
    {
      id: 2,
      title: "Medical Leave",
      value: 3,
    },
    {
      id: 3,
      title: "Other Leave",
      value: 4,
    },
    {
      id: 4,
      title: "Remaining Leave",
      value: 5,
    },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Leaves"
            title="Dashboard"
            subtitle="Leaves"
            modal="#add_leave"
            name="Add New"
          />

          <div className="row">
            {leaveStats.map((stat, index) => (
              <div className="col-md-3" key={index}>
                <div className="stats-info">
                  <h6>{stat.title}</h6>
                  <h4>{stat.value}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <SearchBox />
                <Table
                  columns={columns}
                  dataSource={userElements?.length > 0 ? userElements : []}
                  className="table-striped"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Leave Modal */}
      <EmployeeLeaveModelPopup />
      {/* Add Leave Modal */}
      {/* Delete Modal */}
      <DeleteModal Name="Delete Leaves" />
      {/* Delete Modal */}
    </>
  );
};

export default EmployeeLeave;

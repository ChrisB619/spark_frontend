/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import SearchBox from "../../../../components/SearchBox";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import GoalTrackingModal from "../../../../components/modelpopup/GoalTrackingModal";
import DeleteModal from "../../../../components/modelpopup/DeleteModal";

const GoalTracking = () => {
  const data = [
    {
      id: 1,
      description: "Lorem ipsum dollar",
      status: "Active",
      type: "Event Goal",
      progress: 73,
      subject: "Test Goal",
      startdate: "7 May 2023",
      enddate: "10 May 2023",
    },
    {
      id: 2,
      description: "Lorem ipsum dollar",
      status: "Active",
      type: "Invoice Goal",
      progress: 100,
      subject: "Test Goal",
      startdate: "7 May 2023",
      enddate: "10 May 2023",
    },
    {
      id: 3,
      description: "Lorem ipsum dollar",
      status: "Active",
      type: "Project Goal",
      progress: 73,
      subject: "Test Goal",
      startdate: "7 May 2023",
      enddate: "10 May 2023",
    },
    {
      id: 4,
      description: "Lorem ipsum dollar",
      status: "Inactive",
      type: "Employee Goal",
      progress: 73,
      subject: "Test Goal",
      startdate: "7 May 2023",
      enddate: "10 May 2023",
    },
    {
      id: 5,
      description: "Lorem ipsum dollar",
      status: "Inactive",
      type: "Invoice  Goal",
      progress: 73,
      subject: "Test Goal",
      startdate: "7 May 2023",
      enddate: "10 May 2023",
    },
  ];
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Goal Type",
      dataIndex: "type",
      sorter: (a, b) => a.type.length - b.type.length,
    },
    {
      title: "Subject",
      dataIndex: "subject",
      sorter: (a, b) => a.subject.length - b.subject.length,
    },
    {
      title: "Target Achievement",
      dataIndex: "description",
      sorter: (a, b) => a.description.length - b.description.length,
    },
    {
      title: "Start Date",
      dataIndex: "startdate",
      sorter: (a, b) => a.startdate.length - b.startdate.length,
    },
    {
      title: "End Date",
      dataIndex: "enddate",
      sorter: (a, b) => a.enddate.length - b.enddate.length,
    },
    {
      title: "Description",
      dataIndex: "description",
      sorter: (a, b) => a.description.length - b.description.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <div className="dropdown action-label">
          <Link
            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
            to="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
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
    {
      title: "Progress",
      dataIndex: "progress",
      render: (text) => (
        <span>
          <p className="mb-1">Completed {text}%</p>
          <div className="progress" style={{ height: "5px" }}>
            <div
              className="progress-bar bg-primary progress-sm"
              style={{ width: "73%", height: "10px" }}
            />
          </div>
        </span>
      ),
      sorter: (a, b) => a.progress.length - b.progress.length,
    },
    {
      title: "Action",
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
              data-bs-target="#edit_goal"
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
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <Breadcrumbs
            maintitle="Goal Tracking"
            title="Dashboard"
            subtitle="Goal Tracking"
            modal="#add_goal"
            name="Add New"
          />
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <SearchBox />
                <Table
                  className="table-striped"
                  columns={columns}
                  dataSource={data}
                  rowKey={(record) => record.id}
                />
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
      <GoalTrackingModal />
      <DeleteModal Name="Delete Goal Tracking List" />
    </>
  );
};

export default GoalTracking;

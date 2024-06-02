/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import SearchBox from "../../../../components/SearchBox";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import {
  Avatar_02,
  Avatar_05,
  Avatar_13,
  Avatar_12,
  Avatar_11,
} from "../../../../Routes/ImagePath/index";
import DeleteModal from "../../../../components/modelpopup/DeleteModal";
import PerformanceAppraisalModal from "../../../../components/modelpopup/PerformanceAppraisalModal";

const data = [
  {
    id: 1,
    image: Avatar_02,
    name: "John Doe",
    designation: "IOS Developer",
    department: "IOS",
    creatat: "1 Jan 2023",
    status: "Active",
  },
  {
    id: 2,
    image: Avatar_05,
    name: "Richard Miles",
    designation: "Web Designer",
    department: "Design",
    creatat: "18 Mar 2014",
    status: "Active",
  },
  {
    id: 3,
    image: Avatar_11,
    name: "John Smith",
    designation: "Android Developer",
    department: "Android",
    creatat: "1 Apr 2014",
    status: "Inactive",
  },
  {
    id: 4,
    image: Avatar_13,
    name: "Jeffrey Warden",
    designation: "Web Designer",
    department: "Design",
    creatat: "16 Jun 2023",
    status: "Active",
  },
  {
    id: 5,
    image: Avatar_12,
    name: "Bernardo Galaviz",
    designation: "Web Designer",
    department: "Design",
    creatat: "1 Jan 2023",
    status: "Active",
  },
];

const columns = [
  {
    title: "#",
    dataIndex: "id",
    sorter: (a, b) => a.id.length - b.id.length,
  },
  {
    title: "Employee",
    dataIndex: "name",
    render: (text, record) => (
      <h2 className="table-avatar">
        <Link to="/profile" className="avatar">
          <img alt="" src={record.image} />
        </Link>
        <Link to="/profile">
          {text} <span>{record.role}</span>
        </Link>
      </h2>
    ),
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Designation",
    dataIndex: "designation",
    sorter: (a, b) => a.designation.length - b.designation.length,
  },

  {
    title: "Department",
    dataIndex: "department",
    sorter: (a, b) => a.department.length - b.department.length,
  },
  {
    title: "Appraisal Date",
    dataIndex: "creatat",
    sorter: (a, b) => a.creatat.length - b.creatat.length,
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
          />
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
    title: "Action",
    sorter: true,
    className: "text-end",
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
            data-bs-target="#edit_appraisal"
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

const PerformanceAppraisal = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <Breadcrumbs
            maintitle="Performance Appraisal"
            title="Dashboard"
            subtitle="Performance"
            modal="#add_appraisal"
            name="Add New"
          />

          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <SearchBox />
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
        </div>
        {/* /Page Content */}
        <PerformanceAppraisalModal />
        <DeleteModal Name="Delete Performance Appraisal List" />
      </div>
    </>
  );
};

export default PerformanceAppraisal;

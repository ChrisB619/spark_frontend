import React from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import {
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_11,
} from "../../../../Routes/ImagePath/index";
import SearchBox from "../../../../components/SearchBox";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import DeleteModal from "../../../../components/modelpopup/DeleteModal";
import TrainersModal from "../../../../components/modelpopup/TrainersModal";

const Trainers = () => {
  const data = [
    {
      id: 1,
      image: Avatar_02,
      name: "John Doe",
      description: "Lorem ipsum dollar",
      email: "johndoe@example.com",
      status: "Active",
      mobile: "9876543210",
    },
    {
      id: 2,
      image: Avatar_05,
      name: "Richard Miles",
      description: "Lorem ipsum dollar",
      email: "richardmiles@example.com",
      status: "Active",
      mobile: "9876543210",
    },
    {
      id: 3,
      image: Avatar_11,
      name: "John Smith",
      description: "Lorem ipsum dollar",
      email: "johnsmith@example.com	",
      status: "Active",
      mobile: "9876543210",
    },
    {
      id: 4,
      image: Avatar_10,
      name: "Mike Litorus",
      description: "Lorem ipsum dollar",
      email: "mikelitorus@example.com",
      status: "Inactive",
      mobile: "9876543210",
    },
    {
      id: 5,
      image: Avatar_09,
      name: "Wilmer Deluna",
      description: "Lorem ipsum dollar",
      email: "wilmerdeluna@example.com",
      status: "Inactive",
      mobile: "9876543210",
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
      title: "Contact Number",
      dataIndex: "mobile",
      sorter: (a, b) => a.mobile.length - b.mobile.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
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
              data-bs-target="#edit_type"
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
            maintitle="Trainers"
            title="Dashboard"
            subtitle="Trainers"
            modal="#add_trainer"
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
      <TrainersModal />
      <DeleteModal Name="Delete Trainers List" />
    </>
  );
};

export default Trainers;

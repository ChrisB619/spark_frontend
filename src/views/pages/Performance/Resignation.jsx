import React from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { Avatar_02 } from "../../../Routes/ImagePath/index";
import DeleteModal from "../../../components/modelpopup/DeleteModal";
import Breadcrumbs from "../../../components/Breadcrumbs";
import SearchBox from "../../../components/SearchBox";
import ResignationModal from "../../../components/modelpopup/ResignationModal";

const Resignation = () => {
  const data = [
    {
      id: 1,
      image: Avatar_02,
      name: "John Doe",
      department: "Web Development",
      reason: "Lorem ipsum dollar",
      noticedate: "09 Jan 2023",
      resignationdate: "09 Jan 2023",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Resigning Employee",
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
      title: "Department",
      dataIndex: "department",
      sorter: (a, b) => a.department.length - b.department.length,
    },

    {
      title: "Reason",
      dataIndex: "reason",
      sorter: (a, b) => a.reason.length - b.reason.length,
    },

    {
      title: "Notice Date",
      dataIndex: "noticedate",
      sorter: (a, b) => a.noticedate.length - b.noticedate.length,
    },
    {
      title: "Resignation Date",
      dataIndex: "resignationdate",
      sorter: (a, b) => a.resignationdate.length - b.resignationdate.length,
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
              data-bs-target="#edit_resignation"
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
            maintitle="Resignation"
            title="Dashboard"
            subtitle="Resignation"
            modal="#add_resignation"
            name="Add Resignation"
          />
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <SearchBox />
                {/* Promotion Table */}
                <Table
                  className="table-striped"
                  columns={columns}
                  dataSource={data}
                  rowKey={(record) => record.id}
                />
                {/* /Promotion Table */}
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
      <ResignationModal />
      <DeleteModal Name="Delete Resignation" />
    </>
  );
};

export default Resignation;

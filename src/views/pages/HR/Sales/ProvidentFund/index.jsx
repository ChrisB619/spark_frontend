import React from "react";
// import { Table } from "antd";
import Header from "../../../../layout/Header";
import Sidebar from "../../../../layout/Sidebar";
import Breadcrumbs from "../../../../../components/Breadcrumbs";
import { Link } from "react-router-dom";
import { Avatar_02 } from "../../../../../Routes/ImagePath";
import { Table } from "antd";
import DeleteModal from "../../../../../components/modelpopup/deletePopup";
import EditPfModal from "./EditPfModal";
import AddPfModal from "./AddPfModal";

const ProvidentFund = () => {
  const data = [
    {
      id: 1,
      image: Avatar_02,
      name: "John Doe",
      role: "Web Designer",
      fundtype: "Percentage of Basic Salary",
      employeeshare: "2%",
      organizationshare: "2%",
      status: "Pending",
    },
  ];

  const columns = [
    {
      title: "Employee Name",
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
      title: "Provident Fund Type",
      dataIndex: "fundtype",
      sorter: (a, b) => a.fundtype.length - b.fundtype.length,
    },
    {
      title: "Employee Share",
      dataIndex: "employeeshare",
      sorter: (a, b) => a.employeeshare.length - b.employeeshare.length,
    },
    {
      title: "Organization Share",
      dataIndex: "organizationshare",
      sorter: (a, b) => a.organizationshare.length - b.organizationshare.length,
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
                text === "Pending"
                  ? "far fa-dot-circle text-danger"
                  : "far fa-dot-circle text-success"
              }
            />{" "}
            {text}
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-danger" /> Pending
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-success" /> Approved
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "Action",
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
              data-bs-target="#edit_pf"
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
    <div className="main-wrapper">
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Provident Fund"
            title="Dashboard"
            subtitle="Provident Fund"
            modal="#add_pf"
            name="Add Provident Fund"
          />
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <Table
                  className="table-striped mb-0"
                  columns={columns}
                  dataSource={data}
                  rowKey={(record) => record.id}
                  pagination={true}
                />
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>

      <AddPfModal />
      <EditPfModal />
      <DeleteModal Name="Delete Provident Fund" />
    </div>
  );
};

export default ProvidentFund;

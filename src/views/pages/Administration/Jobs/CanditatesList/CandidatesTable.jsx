import React from "react";
import { Table } from "antd";
import DeleteModal from "../../../../../components/modelpopup/deletePopup";
import { Link } from "react-router-dom";
import {
  Avatar_01,
  Avatar_02,
  Avatar_03,
} from "../../../../../Routes/ImagePath";
import EditCandidatesModal from "../../../../../components/Administration/Jobs/CandidatesModal/EditCandidatesModal";

const CandidatesTable = () => {
  const data = [
    {
      id: 1,
      image: Avatar_02,
      name: "John Doe",
      mobilenumber: "9876543210",
      email: "johndoe@example.com",
      createddate: "1 Jan 2023",
    },
    {
      id: 2,
      image: Avatar_01,
      name: "Richard Miles",
      mobilenumber: "9876543210",
      email: "richardmiles@example.com",
      createddate: "18 Mar 2014",
    },
    {
      id: 3,
      image: Avatar_03,
      name: "John Smith",
      mobilenumber: "9876543210",
      email: "johnsmith@example.com",
      createddate: "1 Apr 2014",
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
          <Link to="/profile">{text}</Link>
        </div>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Mobile Number",
      dataIndex: "mobilenumber",
      sorter: (a, b) => a.mobilenumber.length - b.mobilenumber.length,
    },

    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: "Created Date",
      dataIndex: "createddate",
      sorter: (a, b) => a.createddate.length - b.createddate.length,
    },
    {
      title: "Action",
      render: () => (
        <div className="dropdown dropdown-action text-center">
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
              data-bs-target="#edit_employee"
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
      <EditCandidatesModal />
      <DeleteModal Name="Delete" />
    </>
  );
};

export default CandidatesTable;

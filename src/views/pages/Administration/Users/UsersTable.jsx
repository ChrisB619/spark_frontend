import { Table } from "antd";
import React from "react";
import {
  Avatar_01,
  Avatar_02,
  Avatar_03,
  Avatar_04,
  Avatar_05,
  Avatar_06,
  Avatar_07,
  Avatar_08,
  Avatar_09,
  Avatar_10,
  Avatar_11,
  Avatar_12,
} from "../../../../Routes/ImagePath";
import { Link } from "react-router-dom";
import EditUserModal from "../../../../components/Administration/Users/EditUseModal";
import DeleteModal from "../../../../components/modelpopup/deletePopup";

const UsersTable = () => {
  const data = [
    {
      id: 1,
      name: "Bernardo Galaviz",
      image: Avatar_01,
      email: "bernardogalaviz@example.com",
      company: "Global Technologies",
      created_date: "5 Jan 2019",
      role: "Client",
    },
    {
      id: 2,
      name: "Catherine Manseau",
      image: Avatar_02,
      email: "catherinemanseau@example.com",
      company: "Dreamguy's Technologies",
      created_date: "5 Jan 2019",
      role: "Admin",
    },
    {
      id: 3,
      name: "Jeffery Lalor",
      image: Avatar_03,
      email: "jefferrylalorr@example.com",
      company: "Dreamguy's Technologies",
      created_date: "5 Jan 2019",
      role: "Employee",
    },
    {
      id: 4,
      name: "Jeffrey Warden",
      image: Avatar_04,
      email: "jeffreywarden@example.com",
      company: "Global Technologies",
      created_date: "5 Jan 2019",
      role: "Client",
    },
    {
      id: 5,
      name: "John Due",
      image: Avatar_05,
      email: "johndue@example.com",
      company: "Dreamguy's Technologies",
      created_date: "14 Jan 2019",
      role: "Employee",
    },
    {
      id: 6,
      name: "John Smith",
      image: Avatar_06,
      email: "johnsmith@example.com",
      company: "Dreamguy's Technologies",
      created_date: "14 Jan 2019",
      role: "Employee",
    },
    {
      id: 7,
      name: "Lesley Grauer",
      image: Avatar_07,
      email: "lesleygrauer@example.com",
      company: "Dreamguy's Technologies",
      created_date: "14 Jan 2019",
      role: "Employee",
    },
    {
      id: 8,
      name: "Loren Gatlin",
      image: Avatar_08,
      email: "lorengatlin@example.com",
      company: "Dreamguy's Technologies",
      created_date: "14 Jan 2019",
      role: "Employee",
    },
    {
      id: 9,
      name: "Mike Litorus",
      image: Avatar_09,
      email: "mikelitorus@example.com",
      company: "Dreamguy's Technologies",
      created_date: "14 Jan 2019",
      role: "Employee",
    },
    {
      id: 10,
      name: "Richard Miles",
      image: Avatar_10,
      email: "richardmiles@example.com",
      company: "Dreamguy's Technologies",
      created_date: "14 Jan 2019",
      role: "Employee",
    },
    {
      id: 11,
      name: "Tarah Shropshire",
      image: Avatar_11,
      email: "tarahshropshire@example.com",
      company: "Dreamguy's Technologies",
      created_date: "14 Jan 2019",
      role: "Employee",
    },
    {
      id: 12,
      name: "Wilmer Deluna",
      image: Avatar_12,
      email: "wilmerdeluna@example.com",
      company: "Dreamguy's Technologies",
      created_date: "14 Jan 2019",
      role: "Employee",
    },
  ];

  const columns = [
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
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },

    {
      title: "Company",
      dataIndex: "company",
      sorter: (a, b) => a.company.length - b.company.length,
    },

    {
      title: "Created Date",
      dataIndex: "created_date",
      sorter: (a, b) => a.created_date.length - b.created_date.length,
    },
    {
      title: "Role",
      dataIndex: "role",
      render: (text) => (
        <span
          className={
            text === "Admin"
              ? "badge bg-inverse-danger"
              : "badge bg-inverse-success"
          }
        >
          {text}
        </span>
      ),
      sorter: (a, b) => a.role.length - b.role.length,
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
              data-bs-target="#edit_user"
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
          <EditUserModal />
          <DeleteModal Name="Delete" />
        </div>
      </div>
    </div>
  );
};

export default UsersTable;

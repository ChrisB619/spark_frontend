import React from "react";
import {
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_11,
  Avatar_12,
  Avatar_13,
} from "../../../Routes/ImagePath";
import { Link } from "react-router-dom";
import { Table } from "antd";
import EmployeeListFilter from "../../../components/EmployeeListFilter";
import Breadcrumbs from "../../../components/Breadcrumbs";
import AllEmployeeAddPopup from "../../../components/modelpopup/AllEmployeeAddPopup";
import DeleteModal from "../../../components/modelpopup/DeleteModal";
import SearchBox from "../../../components/SearchBox";

const EmployeeList = () => {
  const data = [
    {
      id: 1,
      image: Avatar_02,
      name: "John Doe",
      role: "Web Designer",
      employee_id: "FT-0001",
      email: "johndoe@example.com",
      mobile: "9876543210",
      joindate: "1 Jan 2023",
    },
    {
      id: 2,
      image: Avatar_05,
      name: "Richard Miles",
      role: "Web Developer",
      employee_id: "FT-0002",
      email: "richardmiles@example.com",
      mobile: "9876543210",
      joindate: "18 Mar 2014",
    },
    {
      id: 3,
      image: Avatar_11,
      name: "John Smith",
      role: "Android Developer",
      employee_id: "FT-0003",
      email: "johnsmith@example.com	",
      mobile: "9876543210",
      joindate: "1 Apr 2014",
    },
    {
      id: 4,
      image: Avatar_12,
      name: "Mike Litorus",
      role: "IOS Developer",
      employee_id: "FT-0004",
      email: "mikelitorus@example.com",
      mobile: "9876543210",
      joindate: "1 Apr 2014",
    },
    {
      id: 5,
      image: Avatar_09,
      name: "Wilmer Deluna",
      role: "Team Leader",
      employee_id: "FT-0005",
      email: "wilmerdeluna@example.com",
      mobile: "9876543210",
      joindate: "22 May 2014",
    },
    {
      id: 6,
      image: Avatar_10,
      name: "Jeffrey Warden",
      role: "Web Developer",
      employee_id: "FT-0006",
      email: "jeffreywarden@example.com",
      mobile: "9876543210",
      joindate: "16 Jun 2023",
    },
    {
      id: 7,
      image: Avatar_13,
      name: "Bernardo Galaviz",
      role: "Web Developer",
      employee_id: "FT-0007",
      email: "bernardogalaviz@example.com",
      mobile: "9876543210",
      joindate: "1 Jan 2023",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <span className="table-avatar">
          <Link to="/profile" className="avatar">
            <img alt="" src={record.image} />
          </Link>
          <Link to="/profile">
            {text} <span>{record.role}</span>
          </Link>
        </span>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Employee ID",
      dataIndex: "employee_id",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },

    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },

    {
      title: "Mobile",
      dataIndex: "mobile",
      sorter: (a, b) => a.mobile.length - b.mobile.length,
    },

    {
      title: "Join Date",
      dataIndex: "joindate",
      sorter: (a, b) => a.joindate.length - b.joindate.length,
    },
    {
      title: "Role",
      sorter: true,
      render: () => (
        <div className="dropdown">
          <Link
            to="#"
            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Web Developer{" "}
          </Link>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="#">
              Software Engineer
            </Link>
            <Link className="dropdown-item" to="#">
              Software Tester
            </Link>
            <Link className="dropdown-item" to="#">
              Frontend Developer
            </Link>
            <Link className="dropdown-item" to="#">
              UI/UX Developer
            </Link>
          </div>
        </div>
      ),
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
              data-bs-target="#edit_employee"
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_employee"
            >
              <i className="fa fa-trash m-r-5" /> Delete
            </Link>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <Breadcrumbs
            maintitle="Employee"
            title="Dashboard"
            subtitle="Employee"
            modal="#add_employee"
            name="Add Employee"
            Linkname="/employees"
            Linkname1="/employees-list"
          />
          {/* /Page Header */}
          <EmployeeListFilter />
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
        <AllEmployeeAddPopup />
        <DeleteModal Name="Delete Employee" />
      </div>
    </div>
  );
};

export default EmployeeList;

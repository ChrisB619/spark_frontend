import React from "react";
import { Link } from "react-router-dom";
import Salary from "../../../../../assets/json/employeeSalary";
import { Table } from "antd";
import EditSalaryModal from "../../../../../components/modelpopup/EditSalaryModal";
import DeleteModal from "../../../../../components/modelpopup/deletePopup";

const SalaryTable = () => {
  const data = Salary.Salary;
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <div className="table-avatar">
          <Link to="/profile" className="avatar">
            <img alt="" src={record.avatar} />
          </Link>
          <Link to="/profile">
            {text} <span>{record.position}</span>
          </Link>
        </div>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Employee ID",
      dataIndex: "employeeId",
      sorter: (a, b) => a.employeeId.length - b.employeeId.length,
    },

    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },

    {
      title: "Join Date",
      dataIndex: "joiningDate",
      sorter: (a, b) => a.joiningDate.length - b.joiningDate.length,
    },
    {
      title: "Role",
      dataIndex: "roles",
      render: (text) => (
        <div className="dropdown">
          <Link
            to="#"
            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {text}{" "}
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
      title: "Salary",
      dataIndex: "salary",
      render: (text) => <span>${text}</span>,
      sorter: (a, b) => a.salary.length - b.salary.length,
    },
    {
      title: "Payslip",
      render: () => (
        <Link className="btn btn-sm btn-primary" to="/salary-view">
          Generate Slip
        </Link>
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
              data-bs-target="#edit_salary"
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

      <EditSalaryModal />
      <DeleteModal Name="Delete Salary" />
    </>
  );
};

export default SalaryTable;

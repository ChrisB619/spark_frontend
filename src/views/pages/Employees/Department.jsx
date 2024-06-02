import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import axios from "axios";
import Breadcrumbs from "../../../components/Breadcrumbs";
import DeleteModal from "../../../components/modelpopup/DeleteModal";
import SearchBox from "../../../components/SearchBox";
import DepartmentModal from "../../../components/modelpopup/DepartmentModal";
import { base_url } from "../../../base_urls";

const Department = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(base_url + "/api/department.json")
      .then((res) => setUsers(res.data));
  }, []);

  const userElements = users.map((user, index) => ({
    key: index,
    id: user.id,
    department: user.department,
  }));
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
      width: "10%",
    },
    {
      title: "Department Name",
      dataIndex: "department",
      sorter: (a, b) => a.department.length - b.department.length,
      width: "80%",
    },
    {
      title: "Action",
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
              data-bs-target="#edit_department"
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
      sorter: (a, b) => a.length - b.length,
      width: "10%",
    },
  ];
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <Breadcrumbs
            maintitle="Department"
            title="Dashboard"
            subtitle="Department"
            modal="#add_department"
            name="Add Department"
          />
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <SearchBox />
                <Table
                  columns={columns}
                  dataSource={userElements?.length > 0 ? userElements : []}
                  className="table-striped"
                  rowKey={(record) => record.id}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <DepartmentModal />
      <DeleteModal Name="Delete Department" />
    </>
  );
};

export default Department;

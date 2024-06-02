import React from "react";

import Breadcrumbs from "../../../../components/Breadcrumbs";
import { Table } from "antd";
import { Link } from "react-router-dom";
import AddandEditPolicy from "../../../../components/modelpopup/AddandEditPolicy";
import DeleteModal from "../../../../components/modelpopup/deletePopup";

const Policies = () => {
  const data = [
    {
      id: 1,
      policyname: "John Doe",
      description: "Lorem ipsum dollar",
      department: "IOS",
      creatat: "1 Jan 2023",
      status: "Active",
    },
    {
      id: 2,
      policyname: "Richard Miles",
      description: "Lorem ipsum dollar",
      department: "Design",
      creatat: "18 Mar 2014",
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
      title: "Policy Name",
      dataIndex: "policyname",
      sorter: (a, b) => a.policyname.length - b.policyname.length,
    },
    {
      title: "Department",
      dataIndex: "department",
      sorter: (a, b) => a.department.length - b.department.length,
    },
    {
      title: "Description",
      dataIndex: "description",
      sorter: (a, b) => a.description.length - b.description.length,
    },
    {
      title: "Created",
      dataIndex: "creatat",
      sorter: (a, b) => a.creatat.length - b.creatat.length,
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
            <Link className="dropdown-item" to="#">
              <i className="fa fa-download m-r-5" /> Download
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit_policy"
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
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Policies"
            title="Dashboard"
            subtitle="Policies"
            modal="#add_policy"
            name="Add Policy"
          />

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
        </div>
      </div>

      <AddandEditPolicy />
      <DeleteModal Name="Delete Policy" />
    </>
  );
};

export default Policies;

import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const TaxTable = () => {
  const data = [
    {
      id: "1",
      taxName: "VAT",
      taxRate: "14%",
      status: "Inactive",
    },
    {
      id: "2",
      taxName: "GST",
      taxRate: "30%",
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
      title: "Tax Name",
      dataIndex: "taxName",
      sorter: (a, b) => a.taxName.length - b.taxName.length,
    },
    {
      title: "Percentage",
      dataIndex: "taxRate",
      sorter: (a, b) => a.taxRate.length - b.taxRate.length,
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
              data-bs-target="#edit_tax"
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
            className="table-striped mb-0"
            columns={columns}
            dataSource={data}
            rowKey={(record) => record.id}
            pagination={true}
          />
        </div>
      </div>
    </div>
  );
};

export default TaxTable;

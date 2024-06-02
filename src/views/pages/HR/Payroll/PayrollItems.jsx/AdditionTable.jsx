import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const AdditionTable = () => {
  const data = [
    {
      id: 1,
      name: "Leave balance amount",
      type: "Monthly remuneration",
      amount: "$5",
    },
    {
      id: 2,
      name: "Arrears of salary",
      type: "Additional remuneration",
      amount: "$8",
    },
    {
      id: 3,
      name: "Gratuity",
      type: "Monthly remuneration",
      amount: "$20",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },

    {
      title: "Category",
      dataIndex: "type",
      sorter: (a, b) => a.type.length - b.type.length,
    },

    {
      title: "Default/Unit Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.amount.length - b.amount.length,
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
              data-bs-target="#edit_addition"
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
      <div className="text-end mb-4 clearfix">
        <button
          className="btn btn-primary add-btn"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#add_addition"
        >
          <i className="fa-solid fa-plus" /> Add Addition
        </button>
      </div>

      <div className="payroll-table card">
        <div className="table-responsive">
          <Table
            className="table table-hover table-radius"
            style={{ overflowX: "auto" }}
            columns={columns}
            dataSource={data}
            rowKey={(record) => record.id}
          />
        </div>
      </div>
    </>
  );
};

export default AdditionTable;

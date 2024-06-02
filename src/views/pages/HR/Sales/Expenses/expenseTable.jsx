import React from "react";
import { Avatar_03, Avatar_04 } from "../../../../../Routes/ImagePath";
import { Link } from "react-router-dom";
import { Table } from "antd";

const ExpenseTable = () => {
  const data = [
    {
      id: 1,
      item: "Dell Laptop",
      purchasefrom: "Amazon",
      purchasedate: "5 Jan 2019",
      image: Avatar_04,
      name: "Loren Gatlin",
      amount: "1215",
      paidby: "Cash",
      status: "Pending",
    },
    {
      id: 2,
      item: "Mac System",
      purchasefrom: "Amazon",
      purchasedate: "5 Jan 2019",
      image: Avatar_03,
      name: "Tarah Shropshire",
      amount: "1215",
      paidby: "Cheque",
      status: "Approved",
    },
  ];

  const columns = [
    {
      title: "Item",
      dataIndex: "item",
      render: (text) => <strong>{text}</strong>,
      sorter: (a, b) => a.item.length - b.item.length,
    },
    {
      title: "Purchase From",
      dataIndex: "purchasefrom",
      sorter: (a, b) => a.purchasefrom.length - b.purchasefrom.length,
    },
    {
      title: "Purchase Date",
      dataIndex: "purchasedate",
      sorter: (a, b) => a.purchasedate.length - b.purchasedate.length,
    },
    {
      title: "Purchased By",
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
      title: "Amount",
      dataIndex: "amount",
      render: (text) => <span>$ {text}</span>,
      sorter: (a, b) => a.amount.length - b.amount.length,
    },

    {
      title: "Paid By",
      dataIndex: "paidby",
      sorter: (a, b) => a.paidby.length - b.paidby.length,
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
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-success" /> Approved
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-danger" /> Pending
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
              data-bs-target="#edit_expense"
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
        </div>
      </div>
    </div>
  );
};

export default ExpenseTable;

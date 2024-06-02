import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const InvoiceReportTable = () => {
  const data = [
    {
      id: 1,
      invoiceNumber: "#INV-0001",
      client: "Global Technologies",
      issueDate: "11 Mar 2019",
      dueDate: "17 Mar 2019",
      amount: "2099",
      status: "Paid",
    },
    {
      id: 2,
      invoiceNumber: "#INV-0002",
      client: "Delta Infotech",
      issueDate: "11 Mar 2019",
      dueDate: "17 Mar 2019",
      amount: "2099",
      status: "Sent",
    },
  ];
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Invoice Number",
      dataIndex: "invoiceNumber",
      render: (text) => <Link to="/invoice-view">{text}</Link>,
      sorter: (a, b) => a.invoicenumber.length - b.invoicenumber.length,
    },
    {
      title: "Client",
      dataIndex: "client",
      sorter: (a, b) => a.client.length - b.client.length,
    },

    {
      title: "Created Date",
      dataIndex: "issueDate",
      sorter: (a, b) => a.issueDate.length - b.issueDate.length,
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      sorter: (a, b) => a.dueDate.length - b.dueDate.length,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (text) => <span>$ {text}</span>,
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <span
          className={
            text === "Paid"
              ? "badge bg-inverse-success"
              : text === "Sent"
              ? "badge bg-inverse-info"
              : text === "Partially Paid"
              ? "badge bg-inverse-warning"
              : "badge bg-inverse-default"
          }>
          {text}
        </span>
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
            aria-expanded="false">
            <i className="material-icons">more_vert</i>
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="/edit-invoice">
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link className="dropdown-item" to="/invoice-view">
              <i className="fa fa-eye m-r-5" /> View
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="fa fa-file-pdf m-r-5" /> Download
            </Link>
            <Link className="dropdown-item" to="#">
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

export default InvoiceReportTable;

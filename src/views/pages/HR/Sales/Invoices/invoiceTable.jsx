import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { base_url } from "../../../../../base_urls";

const InvoiceTable = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    axios
      .get(base_url + "/api/invoice.json")
      .then((res) => setValues(res.data));
  }, []);

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Invoice Number",
      dataIndex: "invoiceNumber",
      render: (text) => <Link to="/invoice-view">#{text}</Link>,
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
          }
        >
          {text}
        </span>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Action",
      sorter: true,
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
            <Link className="dropdown-item" to="/edit-invoice">
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link className="dropdown-item" to="/invoice-view">
              <i className="fa fa-eye m-r-5" /> View
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="fa fa-file-pdf m-r-5" /> Download
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
            columns={columns}
            dataSource={values?.length > 0 ? values : []}
            rowKey={(record) => record.id}
            pagination={false}
            className="table table-striped custom-table mb-0"
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceTable;

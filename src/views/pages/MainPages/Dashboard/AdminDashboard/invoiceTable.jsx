import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const InvoiceTable = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    axios
      .get("/api/dashTableone.json")
      .then((res) => setValues(res.data));
  }, []);

  const columns = [
    {
      title: "Invoice Id",
      dataIndex: "InvoiceID",
      sorter: (a, b) => a.id.InvoiceID - b.id.InvoiceID,
    },
    {
      title: "Client",
      dataIndex: "Client",
      sorter: (a, b) => a.Client.length - b.Client.length,
    },
    {
      title: "Due Date",
      dataIndex: "DueDate",
      sorter: (a, b) => a.DueDate.length - b.DueDate.length,
    },
    {
      title: "Total",
      dataIndex: "Total",
      sorter: (a, b) => a.Total.length - b.Total.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => (
        <span
          className={
            text === "Paid"
              ? "badge bg-inverse-success"
              : text === "Partially Paid"
              ? "badge bg-inverse-warning"
              : "badge bg-inverse-danger"
          }
        >
          {text}
        </span>
      ),
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
  ];

  return (
    <div className="col-md-6 d-flex">
      <div className="card card-table flex-fill">
        <div className="card-header">
          <h3 className="card-title mb-0">Invoices</h3>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <Table
              dataSource={values?.length > 0 ? values : []}
              columns={columns}
              pagination={false}
              rowKey={(record) => record.id}
            />
          </div>
        </div>
        <div className="card-footer">
          <Link to="/invoices">View all invoices</Link>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTable;

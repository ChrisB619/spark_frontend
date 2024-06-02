import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const PaymentReportTable = () => {
  const data = [
    {
      id: 1,
      transactionid: "834521",
      date: "2nd Dec 2023",
      clientname: "Dreams",
      paymentmethod: "Online",
      invoice: "INV0001",
      amount: "$4,329,970.7",
    },
    {
      id: 2,
      transactionid: "834522",
      date: "2nd Dec 2023",
      clientname: "Dreams",
      paymentmethod: "Online",
      invoice: "INV0002",
      amount: "$2,329,970.7",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Transaction ID",
      dataIndex: "transactionid",
      render: (text) => <Link to="#">{text}</Link>,
      sorter: (a, b) => a.transactionid.length - b.transactionid.length,
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.date.length - b.date.length,
    },
    {
      title: "Client Name",
      dataIndex: "clientname",
      sorter: (a, b) => a.clientname.length - b.clientname.length,
    },

    {
      title: "Payment Method",
      dataIndex: "paymentmethod",
      sorter: (a, b) => a.paymentmethod.length - b.paymentmethod.length,
    },
    {
      title: "Invoice",
      dataIndex: "invoice",
      render: (text) => <Link to="#">{text}</Link>,
      sorter: (a, b) => a.invoice.length - b.invoice.length,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.amount.length - b.amount.length,
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

export default PaymentReportTable;

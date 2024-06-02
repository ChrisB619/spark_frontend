import React from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import Breadcrumbs from "../../../../../components/Breadcrumbs";

const Payments = () => {
  const data = [
    {
      id: 1,
      invoicenumber: "INV-0001",
      client: "	Global Technologies",
      paymenttype: "Paypal",
      duedate: "11 Mar 2019",
      amount: "500",
      status: "Paid",
    },
    {
      id: 2,
      invoicenumber: "INV-0002",
      client: "Delta Infotech",
      paymenttype: "Paypal",
      duedate: "11 Mar 2019",
      amount: "500",
      status: "Sent",
    },
    {
      id: 3,
      invoicenumber: "INV-0003",
      client: "Cream Inc",
      paymenttype: "Paypal",
      duedate: "11 Mar 2019",
      amount: "500",
      status: "Sent",
    },
  ];

  const columns = [
    {
      title: "Invoice ID",
      dataIndex: "invoicenumber",
      render: (text) => <Link to="/app/sales/invoices-view">#{text}</Link>,
      sorter: (a, b) => a.invoicenumber.length - b.invoicenumber.length,
    },
    {
      title: "Client",
      dataIndex: "client",
      sorter: (a, b) => a.client.length - b.client.length,
    },

    {
      title: "Payment Type",
      dataIndex: "paymenttype",
      sorter: (a, b) => a.paymenttype.length - b.paymenttype.length,
    },
    {
      title: "Paid Date",
      dataIndex: "duedate",
      sorter: (a, b) => a.duedate.length - b.duedate.length,
    },
    {
      title: "Paid Amount",
      dataIndex: "amount",
      render: (text) => <span>$ {text}</span>,
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
  ];
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Payments"
            title="Dashboard"
            subtitle="Payments"
            modal="#"
          />
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <Table
                  className="table table-striped custom-table mb-0"
                  columns={columns}
                  dataSource={data}
                  rowKey={(record) => record.id}
                />
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
    </>
  );
};

export default Payments;

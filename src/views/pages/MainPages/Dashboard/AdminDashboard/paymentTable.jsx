import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const PaymentTable = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    axios
      .get("/api/dashTabletwo.json")
      .then((res) => setValues(res.data));
  }, []);

  const columns = [
    {
      title: "Invoice ID",
      dataIndex: "invoiceID",
      sorter: (a, b) => a.invoiceID.length - b.invoiceID.length,
    },
    {
      title: "Client",
      dataIndex: "client",
      sorter: (a, b) => a.client.length - b.client.length,
    },
    {
      title: "Payment Type	",
      dataIndex: "paymentType",
      sorter: (a, b) => a.paymentType.length - b.paymentType.length,
    },
    {
      title: "Paid Date",
      dataIndex: "paidDate",
      sorter: (a, b) => a.paidDate.length - b.paidDate.length,
    },
    {
      title: "Paid Amount",
      dataIndex: "paidAmount",
      sorter: (a, b) => a.paidAmount.length - b.paidAmount.length,
    },
  ];
  return (
    <div className="col-md-6 d-flex">
      <div className="card card-table flex-fill">
        <div className="card-header">
          <h3 className="card-title mb-0">Payments</h3>
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
          <Link to="/payments">View all payments</Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentTable;

import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar_01,
  Avatar_03,
  Avatar_04,
} from "../../../../../Routes/ImagePath";

const PaySlipReportTable = () => {
  const data = [
    {
      id: 1,
      image: Avatar_03,
      name: "John Doe",
      role: "Web Developer",
      amount: "$200",
      paymentmonth: "Apr",
      paymentyear: "2019",
    },
    {
      id: 2,
      image: Avatar_04,
      name: "Richard Miles",
      role: "Android Developer",
      amount: "$300",
      paymentmonth: "Dec",
      paymentyear: "2023",
    },
    {
      id: 3,
      image: Avatar_01,
      name: "Michael",
      role: "IOS Developer",
      amount: "$350",
      paymentmonth: "Jan",
      paymentyear: "2023",
    },
  ];
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Employee Name",
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
      title: "Paid Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.amount.length - b.amount.length,
    },

    {
      title: "Payment Month",
      dataIndex: "paymentmonth",
      sorter: (a, b) => a.paymentmonth.length - b.paymentmonth.length,
    },
    {
      title: "Payment Year",
      dataIndex: "paymentyear",
      sorter: (a, b) => a.paymentyear.length - b.paymentyear.length,
    },
    {
      title: "Actions",
      render: () => (
        <Link to="#" className="btn btn-sm btn-primary">
          PDF
        </Link>
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

export default PaySlipReportTable;

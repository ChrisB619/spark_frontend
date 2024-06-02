import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { base_url } from "../../../../../base_urls";

const EstimatesTable = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    axios
      .get(base_url + "/api/Estimates.json")
      .then((res) => setValues(res.data));
  }, []);

  const columns = [
    {
      title: "Estimate Number",
      dataIndex: "id",
      render: (text) => <Link to="/estimatesview">{text}</Link>,
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Client",
      dataIndex: "company",
      sorter: (a, b) => a.company.length - b.company.length,
    },

    {
      title: "Estimate Date",
      dataIndex: "startDate",
      sorter: (a, b) => a.startDate.length - b.startDate.length,
    },
    {
      title: "Expiry Date",
      dataIndex: "endDate",
      sorter: (a, b) => a.endDate.length - b.endDate.length,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (text) => <span>{text}</span>,
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <span
          className={
            text === "Accepted"
              ? "badge bg-inverse-success"
              : text === "Declined"
              ? "badge bg-inverse-danger"
              : text === "Sent"
              ? "badge bg-inverse-info"
              : text === "Expired"
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
            <Link className="dropdown-item" to="/edit-estimate">
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
    </>
  );
};

export default EstimatesTable;

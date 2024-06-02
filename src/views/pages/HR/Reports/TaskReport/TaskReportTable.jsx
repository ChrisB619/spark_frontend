import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Avatar_16 } from "../../../../../Routes/ImagePath";

const TaskReportTable = () => {
  const data = [
    {
      id: "1",
      category: "Hospital Administration",
      startDate: "26 Mar 2023",
      endDate: "26 Apr 2023",
      status: "Active",
      name: "Jeffery Lalor",
      image: Avatar_16,
    },
    {
      id: "2",
      category: "Hospital Administration",
      startDate: "26 Mar 2023",
      endDate: "26 Apr 2023",
      status: "Active",
      name: "Jeffery Lalor",
      image: Avatar_16,
    },
  ];

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Task Name",
      dataIndex: "category",
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      sorter: (a, b) => a.startDate.length - b.startDate.length,
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      sorter: (a, b) => a.endDate.length - b.endDate.length,
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
            aria-expanded="false">
            <i
              className={
                text === "Inactive"
                  ? "far fa-dot-circle text-danger"
                  : "far fa-dot-circle text-success"
              }
            />{" "}
            {text}
          </Link>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-success" /> Active
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-danger" /> Inactive
            </Link>
          </div>
        </div>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
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

export default TaskReportTable;

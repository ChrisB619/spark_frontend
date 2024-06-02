import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const AppliedJobsTable = () => {
  const data = [
    {
      id: 1,
      position: "Web Developer",
      category: "Development",
      startDate: "3 Mar 2019",
      endDate: "31 May 2019",
      employmentType: "Full Time",
      status: "Open",
    },
    {
      id: 2,
      position: "Web Designer",
      category: "Designing",
      startDate: "3 Mar 2019",
      endDate: "31 May 2019",
      employmentType: "Part Time",
      status: "Closed",
    },
    {
      id: 3,
      position: "Android Developer",
      category: "Android",
      startDate: "3 Mar 2019",
      endDate: "31 May 2019",
      employmentType: "Internship",
      status: "Cancelled",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Position",
      dataIndex: "position",
      sorter: (a, b) => a.position.length - b.position.length,
    },
    {
      title: "Category",
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
      title: "Job Type",
      dataIndex: "employmentType",
      render: (text) => (
        <div className="dropdown action-label">
          <Link className="btn btn-white btn-sm btn-rounded " to="#">
            <i
              className={
                text === "Part Time"
                  ? "far fa-dot-circle text-danger"
                  : "far fa-dot-circle text-success"
              }
            />{" "}
            {text}
          </Link>
        </div>
      ),
      sorter: (a, b) => a.employmentType.length - b.employmentType.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <div className="dropdown action-label">
          <Link className="btn btn-white btn-sm btn-rounded " to="#">
            <i
              className={
                text === "Closed"
                  ? "far fa-dot-circle text-danger"
                  : "far fa-dot-circle text-success"
              }
            />{" "}
            {text}
          </Link>
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
        <div className="card card-table">
          <div className="card-header">
            <h3 className="card-title mb-0">Applied Jobs</h3>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <Table
                className="table-striped"
                style={{ overflowX: "auto" }}
                columns={columns}
                dataSource={data}
                rowKey={(record) => record.id}
                pagination={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsTable;

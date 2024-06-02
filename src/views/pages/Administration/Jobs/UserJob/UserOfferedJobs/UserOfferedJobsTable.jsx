import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const UserOfferedJobsTable = () => {
  const data = [
    {
      id: 1,
      position: "Web Developer",
      category: "Development",
      status: "Full Time",
      text: "Download Offer",
    },
    {
      id: 2,
      position: "Web Designer",
      category: "Designing",
      status: "Part Time",
      text: "Download Offer",
    },
    {
      id: 3,
      position: "Android Developer",
      category: "Android",
      status: "Internship",
      text: "Download Offer",
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
      title: "Status",
      dataIndex: "status",
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
      sorter: (a, b) => a.status.length - b.status.length,
    },

    {
      title: "Actions",
      dataIndex: "text",
      render: (text) => (
        <div className="center">
          <Link to="#" className="btn btn-sm btn-info download-offer">
            <span>
              <i className="fa fa-download me-1" /> {text}
            </span>
          </Link>
        </div>
      ),
      sorter: (a, b) => a.text.length - b.text.length,
    },
  ];

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card card-table">
          <div className="card-header">
            <h3 className="card-title mb-0">Offered Jobs</h3>
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

export default UserOfferedJobsTable;

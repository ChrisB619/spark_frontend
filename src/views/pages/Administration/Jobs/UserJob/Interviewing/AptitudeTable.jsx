import React from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import DeleteModal from "../../../../../../components/modelpopup/deletePopup";

const AptitudeTable = () => {
  const data = [
    {
      id: 1,
      jobTitle: "Web Developer",
      department: "Development",
      status: "Full Time",
    },
    {
      id: 2,
      jobTitle: "Web Developer",
      department: "Development",
      status: "Part Time",
    },
    {
      id: 3,
      jobTitle: "Web Designing",
      department: "Development",
      status: "Part Time",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Job Title",
      dataIndex: "jobTitle",
      sorter: (a, b) => a.jobTitle.length - b.jobTitle.length,
    },
    {
      title: "Department",
      dataIndex: "department",
      sorter: (a, b) => a.department.length - b.department.length,
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
          <Link to="/job-aptitude" className="btn btn-primary aptitude-btn">
            <span>Click Here</span>
          </Link>
        </div>
      ),
      sorter: (a, b) => a.text.length - b.text.length,
    },
  ];

  return (
    <>
      <div className="table-responsive">
        <Table
          className="table-striped"
          style={{ overflowX: "auto" }}
          columns={columns}
          dataSource={data}
          rowKey={(record) => record.id}
        />
      </div>

      <DeleteModal Name="Delete" />
    </>
  );
};

export default AptitudeTable;

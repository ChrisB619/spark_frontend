import React from "react";
import { Table } from "antd";
import DeleteModal from "../../../../../components/modelpopup/deletePopup";
import { Link } from "react-router-dom";
import {
  Avatar_01,
  Avatar_02,
  Avatar_03,
} from "../../../../../Routes/ImagePath";

const AptitudeResultTable = () => {
  const data = [
    {
      id: 1,
      image: Avatar_02,
      name: "John Doe",
      role: "Web Designer",
      jobtitle: "Web Designer",
      department: "Development",
      totalmark: "1",
    },
    {
      id: 2,
      image: Avatar_01,
      name: "Richard Miles",
      role: "Web Developer",
      jobtitle: "Web Developer",
      department: "Designing",
      totalmark: "1",
    },
    {
      id: 3,
      image: Avatar_03,
      name: "John Smith",
      role: "Android Developer",
      jobtitle: "Android Developer",
      department: "Android",
      totalmark: "1",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Name",
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
      title: "Job Title",
      dataIndex: "jobtitle",
      render: (text) => <Link to="/job-details">{text}</Link>,
      sorter: (a, b) => a.jobtitle.length - b.jobtitle.length,
    },

    {
      title: "Department",
      dataIndex: "department",
      sorter: (a, b) => a.department.length - b.department.length,
    },
    {
      title: "Category Wise Mark",
      render: () => (
        <p>
          html - <b>1</b>
          <br />
          Level1 - <b>0</b>
          <br />
        </p>
      ),
    },

    {
      title: "Total Mark",
      dataIndex: "totalmark",
      render: (text) => <p className="text-center">{text}</p>,
      sorter: (a, b) => a.totalmark.length - b.totalmark.length,
    },
    {
      title: "Status",
      render: () => (
        <div className="dropdown action-label">
          <Link
            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
            to="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="far fa-dot-circle text-danger" /> Action pending{" "}
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-info" /> Resume selected
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-danger" /> Resume Rejected
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-success" /> Aptitude Selected
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-danger" /> Aptitude rejected
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
              className="table-striped"
              style={{ overflowX: "auto" }}
              columns={columns}
              dataSource={data}
              rowKey={(record) => record.id}
            />
          </div>
        </div>
      </div>

      <DeleteModal Name="Delete" />
    </>
  );
};

export default AptitudeResultTable;

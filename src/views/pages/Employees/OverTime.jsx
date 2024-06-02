import React from "react";
import { Link } from "react-router-dom";
import { Avatar_02, Avatar_09 } from "../../../Routes/ImagePath";
import { Table } from "antd";
import Breadcrumbs from "../../../components/Breadcrumbs";
import SearchBox from "../../../components/SearchBox";
import AddOverTime from "../../../components/modelpopup/AddOverTime";
import DeleteModal from "../../../components/modelpopup/DeleteModal";

const OverTime = () => {
  const statsData = [
    {
      title: "Overtime Employee",
      value: 12,
      month: "this month",
    },
    {
      title: "Overtime Hours",
      value: 118,
      month: "this month",
    },
    {
      title: "Pending Request",
      value: 23,
    },
    {
      title: "Rejected",
      value: 5,
    },
  ];
  const data = [
    {
      id: 1,
      image: Avatar_02,
      name: "John Doe",
      role: "Web Designer",
      description: "Lorem ipsum dollar",
      ottype: "Normal day OT 1.5x",
      othours: "2",
      otdate: "1 Jan 2023",
      apimage: Avatar_09,
      approvedby: "Richard Miles",
      status: "New",
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
        <span className="table-avatar">
          <Link to="/profile" className="avatar">
            <img alt="" src={record.image} />
          </Link>
          <Link to="/profile">{text}</Link>
        </span>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "OT Date",
      dataIndex: "otdate",
      sorter: (a, b) => a.otdate.length - b.otdate.length,
    },

    {
      title: "OT Hours",
      dataIndex: "othours",
      sorter: (a, b) => a.othours.length - b.othours.length,
    },

    {
      title: "OT Type",
      dataIndex: "ottype",
      sorter: (a, b) => a.ottype.length - b.ottype.length,
    },

    {
      title: "Description",
      dataIndex: "description",
      sorter: (a, b) => a.description.length - b.description.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <div className="dropdown action-label text-center">
          <Link
            className="btn btn-white btn-sm btn-rounded "
            to="#"
            aria-expanded="false"
          >
            <i
              className={
                text === "New"
                  ? "far fa-dot-circle text-purple"
                  : text === "Pending"
                  ? "far fa-dot-circle text-info"
                  : text === "Approved"
                  ? "far fa-dot-circle text-success"
                  : "far fa-dot-circle text-danger"
              }
            />{" "}
            {text}
          </Link>
        </div>
      ),
    },

    {
      title: "Approved By",
      dataIndex: "approvedby",
      render: (text, record) => (
        <span className="table-avatar">
          <Link to="/profile" className="avatar">
            <img alt="" src={record.apimage} />
          </Link>
          <Link to="/profile">{text}</Link>
        </span>
      ),
      sorter: (a, b) => a.approvedby.length - b.approvedby.length,
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
              data-bs-target="#edit_overtime"
            >
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
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <Breadcrumbs
            maintitle="Overtime"
            title="Dashboard"
            subtitle="Overtime"
            modal="#add_overtime"
            name="Add Overtime"
          />

          {/* /Page Header */}
          <div className="row">
            {statsData.map((data, index) => (
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3" key={index}>
                <div className="stats-info">
                  <h6>{data.title}</h6>
                  <h4>
                    {data.value} <span>{data.month}</span>
                  </h4>
                </div>
              </div>
            ))}
          </div>
          {/* /Overtime Statistics */}
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <SearchBox />
                <Table
                  className="table-striped"
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
      <AddOverTime />
      <DeleteModal Name="Delete Overtime" />
    </>
  );
};

export default OverTime;

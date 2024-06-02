import React from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import EditExperiencelModal from "../../../../../components/Administration/Jobs/ExperienceLevel/EditExperienceModal";
import DeleteModal from "../../../../../components/modelpopup/deletePopup";

const ExperienceLevelTable = () => {
  const data = [
    { id: 1, experience: "1-2", status: "Active" },
    { id: 2, experience: "1-3", status: "Active" },
    { id: 3, experience: "4-7", status: "Active" },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Experience",
      dataIndex: "experience",
      sorter: (a, b) => a.experience.length - b.experience.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <div className="dropdown action-label">
          <Link
            className="btn btn-white btn-sm btn-rounded "
            to="#"
            aria-expanded="false"
          >
            <i
              className={
                text === "Pending"
                  ? "far fa-dot-circle text-danger"
                  : "far fa-dot-circle text-success"
              }
            />{" "}
            {text}
          </Link>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-success" /> Approved
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-danger" /> Pending
            </Link>
          </div>
        </div>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Actions",
      render: () => (
        <div className="dropdown dropdown-action ">
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
              data-bs-target="#edit_employee"
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
      <EditExperiencelModal />
    </>
  );
};

export default ExperienceLevelTable;

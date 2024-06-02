import React from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import {
  Avatar_01,
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_11,
  Avatar_12,
  Avatar_13,
  Avatar_16,
} from "../../../../Routes/ImagePath/index";
import SearchBox from "../../../../components/SearchBox";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import DeleteModal from "../../../../components/modelpopup/DeleteModal";
import TrainingModal from "../../../../components/modelpopup/TrainingModal";

const Training = () => {
  const data = [
    {
      id: 1,
      trainingtype: "Node Training",
      image: Avatar_02,
      name: "John Doe",
      description: "Lorem ipsum dollar",
      timeduration: "7 May 2023 - 10 May 2023",
      status: "Active",
      cost: "400",
    },
    {
      id: 2,
      trainingtype: "Git Training",
      image: Avatar_05,
      name: "Richard Miles",
      description: "Lorem ipsum dollar",
      timeduration: "7 May 2023 - 10 May 2023",
      status: "Active",
      cost: "400",
    },
    {
      id: 3,
      trainingtype: "Swift Training",
      image: Avatar_11,
      name: "John Smith",
      description: "Lorem ipsum dollar",
      timeduration: "7 May 2023 - 10 May 2023",
      status: "Active",
      cost: "400",
    },
    {
      id: 4,
      trainingtype: "Html Training",
      image: Avatar_10,
      name: "Mike Litorus",
      description: "Lorem ipsum dollar",
      timeduration: "7 May 2023 - 10 May 2023",
      status: "Inactive",
      cost: "400",
    },
    {
      id: 5,
      trainingtype: "Laravel Training",
      image: Avatar_09,
      name: "Wilmer Deluna",
      description: "Lorem ipsum dollar",
      timeduration: "7 May 2023 - 10 May 2023",
      status: "Inactive",
      cost: "800",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Traning Type",
      dataIndex: "trainingtype",
      sorter: (a, b) => a.trainingtype.length - b.trainingtype.length,
    },
    {
      title: "Trainer",
      dataIndex: "name",
      render: (text, record) => (
        <h2 className="table-avatar">
          <Link to="/profile" className="avatar">
            <img alt="" src={record.image} />
          </Link>
          <Link to="/profile">
            {text} <span>{record.name}</span>
          </Link>
        </h2>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Employee",
      dataIndex: "employee",
      render: () => (
        <ul className="team-members">
          <li>
            <Link to="#" title="Bernardo Galaviz" data-bs-toggle="tooltip">
              <img alt="" src={Avatar_10} />
            </Link>
          </li>
          <li>
            <Link to="#" title="Richard Miles" data-bs-toggle="tooltip">
              <img alt="" src={Avatar_09} />
            </Link>
          </li>
          <li className="dropdown avatar-dropdown">
            <Link
              to="#"
              className="all-users dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              +15
            </Link>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="avatar-group">
                <Link className="avatar avatar-xs" to="#">
                  <img alt="" src={Avatar_02} />
                </Link>
                <Link className="avatar avatar-xs" to="#">
                  <img alt="" src={Avatar_09} />
                </Link>
                <Link className="avatar avatar-xs" to="#">
                  <img alt="" src={Avatar_10} />
                </Link>
                <Link className="avatar avatar-xs" to="#">
                  <img alt="" src={Avatar_05} />
                </Link>
                <Link className="avatar avatar-xs" to="#">
                  <img alt="" src={Avatar_11} />
                </Link>
                <Link className="avatar avatar-xs" to="#">
                  <img alt="" src={Avatar_12} />
                </Link>
                <Link className="avatar avatar-xs" to="#">
                  <img alt="" src={Avatar_13} />
                </Link>
                <Link className="avatar avatar-xs" to="#">
                  <img alt="" src={Avatar_01} />
                </Link>
                <Link className="avatar avatar-xs" to="#">
                  <img alt="" src={Avatar_16} />
                </Link>
              </div>
              <div className="avatar-pagination">
                <ul className="pagination">
                  <li className="page-item">
                    <Link className="page-link" to="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                      <span className="sr-only">Previous</span>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                      <span className="sr-only">Next</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      ),
      sorter: (a, b) => a.employee.length - b.employee.length,
    },
    {
      title: "Time Duration",
      dataIndex: "timeduration",
      sorter: (a, b) => a.timeduration.length - b.timeduration.length,
    },
    {
      title: "Description",
      dataIndex: "description",
      sorter: (a, b) => a.description.length - b.description.length,
    },
    {
      title: "Cost",
      dataIndex: "cost",
      render: (text) => <span>$ {text}</span>,
      sorter: (a, b) => a.cost.length - b.cost.length,
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
            aria-expanded="false"
          >
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
      title: "Action",
      sorter: true,
      className: "text-end",
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
              data-bs-target="#edit_training"
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
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <Breadcrumbs
            maintitle="Training"
            title="Dashboard"
            subtitle="Training"
            modal="#add_training"
            name="Add New"
          />

          {/* /Page Header */}
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
      <TrainingModal />
      <DeleteModal Name="Delete Training List" />
    </>
  );
};
export default Training;

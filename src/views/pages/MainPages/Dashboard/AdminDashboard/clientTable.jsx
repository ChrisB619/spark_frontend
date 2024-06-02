import { Table } from "antd";
import { Link } from "react-router-dom";
import {
  Avatar_19,
  Avatar_07,
  Avatar_06,
  Avatar_14,
} from "../../../../../Routes/ImagePath/index";

const ClientTable = () => {
  const data = [
    {
      id: 1,
      image: Avatar_19,
      name: "Barry Cuda CEO",
      email: "barrycuda@example.com",
      status: "Active",
    },
    {
      id: 2,
      image: Avatar_07,
      name: "Tressa Wexler Manager",
      email: "tressawexler@example.com",
      status: "Inactive",
    },
    {
      id: 3,
      image: Avatar_06,
      name: "Ruby Bartlett CEO",
      email: "rubybartlett@example.com",
      status: "Inactive",
    },
    {
      id: 4,
      image: Avatar_14,
      name: "Misty Tison CEO",
      email: "mistytison@example.com",
      status: "Active",
    },
    {
      id: 5,
      image: Avatar_19,
      name: "Daniel Deacon CEO",
      email: "danieldeacon@example.com",
      status: "Inactive",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <h2 className="table-avatar">
          <Link to="#" className="avatar">
            <img alt="" src={record.image} />
          </Link>
          <Link to="#" className="ant-table-cell">
            {text} <span>{record.role}</span>
          </Link>
        </h2>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
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
            <Link className="dropdown-item" to="#" data-bs-target="#edit_type">
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link className="dropdown-item" to="#" data-bs-target="#delete">
              <i className="fa fa-trash m-r-5" /> Delete
            </Link>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="col-md-6 d-flex">
      <div className="card card-table flex-fill">
        <div className="card-header">
          <h3 className="card-title mb-0">Clients</h3>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <Table
              dataSource={data?.length > 0 ? data : []}
              columns={columns}
              pagination={false}
              rowKey={(record) => record.id}
            />
          </div>
        </div>
        <div className="card-footer">
          <Link to="/clients">View all clients</Link>
        </div>
      </div>
    </div>
  );
};

export default ClientTable;

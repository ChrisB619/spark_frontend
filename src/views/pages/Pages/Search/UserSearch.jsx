import React from "react";
import {
  Avatar_01,
  Avatar_02,
  Avatar_03,
  Avatar_04,
  Avatar_05,
  Avatar_06,
  Avatar_07,
} from "../../../../Routes/ImagePath";
import { Table, Tag } from "antd";
import { Link } from "react-router-dom";

const UserSearch = () => {
  const userlist = [
    {
      id: 1,
      img: Avatar_01,
      Name: "Daniel Porter Admin",
      Email: "danielporter@example.com",
      Company: "Dreamguy's Technologies",
      CreatedDate: "1 Jan 2023",
      Role: "Admin",
      Action:
        "more_vert\n                                \n                                \n                                  \n                                     Edit\n                                  \n                                  \n                                     Delete",
    },
    {
      id: 2,
      img: Avatar_02,
      Name: "John Doe Web Designer",
      Email: "johndoe@example.com",
      Company: "Dreamguy's Technologies",
      CreatedDate: "1 Jan 2023",
      Role: "Employee",
      Action:
        "more_vert\n                                \n                                \n                                  \n                                     Edit\n                                  \n                                  \n                                     Delete",
    },
    {
      id: 3,
      img: Avatar_03,
      Name: "Richard Miles Admin",
      Email: "richardmiles@example.com",
      Company: "Dreamguy's Technologies",
      CreatedDate: "1 Jan 2023",
      Role: "Employee",
      Action:
        "more_vert\n                                \n                                \n                                  \n                                     Edit\n                                  \n                                  \n                                     Delete",
    },
    {
      id: 4,
      img: Avatar_04,
      Name: "John Smith Android Developer",
      Email: "johnsmith@example.com",
      Company: "Dreamguy's Technologies",
      CreatedDate: "1 Jan 2023",
      Role: "Employee",
      Action:
        "more_vert\n                                \n                                \n                                  \n                                     Edit\n                                  \n                                  \n                                     Delete",
    },
    {
      id: 5,
      img: Avatar_05,
      Name: "Mike Litorus IOS Developer",
      Email: "mikelitorus@example.com",
      Company: "Dreamguy's Technologies",
      CreatedDate: "1 Jan 2023",
      Role: "Employee",
      Action:
        "more_vert\n                                \n                                \n                                  \n                                     Edit\n                                  \n                                  \n                                     Delete",
    },
    {
      id: 6,
      img: Avatar_06,
      Name: "Wilmer Deluna Team Leader",
      Email: "wilmerdeluna@example.com",
      Company: "Dreamguy's Technologies",
      CreatedDate: "1 Jan 2023",
      Role: "Employee",
      Action:
        "more_vert\n                                \n                                \n                                  \n                                     Edit\n                                  \n                                  \n                                     Delete",
    },
    {
      id: 7,
      img: Avatar_07,
      Name: "Barry Cuda Global Technologies",
      Email: "barrycuda@example.com",
      Company: "Global Technologies",
      CreatedDate: "1 Jan 2023",
      Role: "Client",
      Action:
        "more_vert\n                                \n                                \n                                  \n                                     Edit\n                                  \n                                  \n                                     Delete",
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
      dataIndex: "Name",
      render: (text, record) => (
        <span className="table-avatar">
          <Link to="/profile" className="avatar">
            <img alt="" src={record.img} />
          </Link>
          <Link to="/profile">{text}</Link>
        </span>
      ),
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "Email",
      dataIndex: "Email",
      sorter: (a, b) => a.Email.length - b.Email.length,
    },
    {
      title: "Company",
      dataIndex: "Company",
      sorter: (a, b) => a.Company.length - b.Company.length,
    },
    {
      title: "CreatedDate",
      dataIndex: "CreatedDate",
      sorter: (a, b) => a.CreatedDate.length - b.CreatedDate.length,
    },
    {
      title: "Role",
      dataIndex: "Role",
      render: (role) => (
        <Tag
          className={
            role === "Admin"
              ? "badge bg-inverse-danger"
              : role === "Employee"
              ? "badge bg-inverse-success"
              : role === "Client"
              ? "badge bg-inverse-info"
              : ""
          }
        >
          {role}
        </Tag>
      ),
      sorter: (a, b) => a.Role.length - b.Role.length,
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
            <Link className="dropdown-item" to="#">
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="fa fa-trash m-r-5" /> Delete
            </Link>
          </div>
        </div>
      ),
      sorter: (a, b) => a.length - b.length,
    },
  ];

  return (
    <div>
      <div className="tab-content">
        <div className="tab-pane" id="results_users">
          <div className="table-responsive">
            <Table
              columns={columns}
              dataSource={userlist}
              className="table-striped"
              rowKey={(record) => record.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSearch;

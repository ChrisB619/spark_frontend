import React from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import {
  Avatar_06,
  Avatar_07,
  Avatar_14,
  Avatar_18,
  Avatar_19,
  Avatar_22,
  Avatar_26,
  Avatar_29,
} from "../../../Routes/ImagePath";
import DeleteModal from "../../../components/modelpopup/DeleteModal";
import { ClientModelPopup } from "../../../components/modelpopup/ClientModelPopup";
import SearchBox from "../../../components/SearchBox";
import Breadcrumbs from "../../../components/Breadcrumbs";
import ClientsFilter from "../../../components/ClientsFilter";

const ClientList = () => {
  const data = [
    {
      id: 1,
      Name: "Carlson Tech",
      ClientId: "CLT-0008",
      ContactPerson: "Betty Carlson",
      Email: "bettycarlson@example.com",
      Mobile: "9876543210",
      Class: "fa-regular fa-circle-dot text-danger",
      Status: "Inactive",
      Image: Avatar_22,
    },
    {
      id: 2,
      Name: "Cream Inc",
      ClientId: "CLT-0003",
      ContactPerson: "Ruby Bartlett",
      Email: "rubybartlett@example.com",
      Mobile: "9876543210",
      Class: "fa-regular fa-circle-dot text-success",
      Status: "Active",
      Image: Avatar_07,
    },
    {
      id: 3,
      Name: "Delta Infotech",
      ClientId: "CLT-0002",
      ContactPerson: "Tressa Wexler",
      Email: "tressawexler@example.com",
      Mobile: "9876543210",
      Class: "fa-regular fa-circle-dot text-danger",
      Status: "Inactive",
      Image: Avatar_29,
    },
    {
      id: 4,
      Name: "Global Technologies",
      ClientId: "CLT-0001",
      ContactPerson: "Barry Cuda",
      Email: "barrycuda@example.com",
      Mobile: "9876543210",
      Class: "fa-regular fa-circle-dot text-success",
      Status: "Active",
      Image: Avatar_19,
    },
    {
      id: 5,
      Name: "International Software Inc",
      ClientId: "CLT-0006",
      ContactPerson: "Walter Weaver",
      Email: "walterweaver@example.com",
      Mobile: "9876543210",
      Class: "fa-regular fa-circle-dot text-success",
      Status: "Active",
      Image: Avatar_18,
    },
    {
      id: 6,
      Name: "Mercury Software Inc",
      ClientId: "CLT-0007",
      ContactPerson: "Amanda Warren",
      Email: "amandawarren@example.com",
      Mobile: "9876543210",
      Class: "fa-regular fa-circle-dot text-success",
      Status: "Active",
      Image: Avatar_26,
    },
    {
      id: 7,
      Name: "Mustang Technologies",
      ClientId: "CLT-0005",
      ContactPerson: "Daniel Deacon",
      Email: "danieldeacon@example.com",
      Mobile: "9876543210",
      Class: "fa-regular fa-circle-dot text-success",
      Status: "Active",
      Image: Avatar_14,
    },
    {
      id: 8,
      Name: "Wellware Company",
      ClientId: "CLT-0004",
      ContactPerson: "Misty Tison",
      Email: "mistytison@example.com",
      Mobile: "9876543210",
      Class: "fa-regular fa-circle-dot text-success",
      Status: "Active",
      Image: Avatar_06,
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      render: (text, record) => (
        <span className="table-avatar">
          <Link to="/profile" className="avatar">
            <img alt="" src={record.Image} />
          </Link>
          <Link to="/profile">{text}</Link>
        </span>
      ),
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "Client ID",
      dataIndex: "ClientId",
      sorter: (a, b) => a.ClientId.length - b.ClientId.length,
    },

    {
      title: "Contact Person",
      dataIndex: "ContactPerson",
      sorter: (a, b) => a.ContactPerson.length - b.ContactPerson.length,
    },
    {
      title: "Email",
      dataIndex: "Email",
      sorter: (a, b) => a.Email.length - b.Email.length,
    },

    {
      title: "Mobile",
      dataIndex: "Mobile",
      sorter: (a, b) => a.Mobile.length - b.Mobile.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => (
        <div className="dropdown">
          <Link
            to="#"
            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i
              className={
                text === "Active"
                  ? "far fa-dot-circle text-success"
                  : "far fa-dot-circle text-danger"
              }
            />{" "}
            {text}{" "}
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
      sorter: (a, b) => a.Status.length - b.Status.length,
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
              data-bs-target="#edit_client"
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
      sorter: true,
    },
  ];
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <Breadcrumbs
            maintitle="Clients"
            title="Dashboard"
            subtitle="Clients"
            modal="#add_client"
            name="Add Client"
            Linkname="/clients"
            Linkname1="/clients-list"
          />
          {/* /Page Header */}
          <ClientsFilter />
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <SearchBox />
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
        </div>
      </div>
      <ClientModelPopup />
      <DeleteModal Name="Delete Client" />
    </>
  );
};

export default ClientList;

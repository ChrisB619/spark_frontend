import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar_07,
  Avatar_13,
  Avatar_14,
  Avatar_17,
  Avatar_18,
  Avatar_19,
  Avatar_28,
  Avatar_29,
} from "../../../Routes/ImagePath";
import Breadcrumbs from "../../../components/Breadcrumbs";
import ClientsFilter from "../../../components/ClientsFilter";
import DeleteModal from "../../../components/modelpopup/DeleteModal";
import { ClientModelPopup } from "../../../components/modelpopup/ClientModelPopup";

const Clients = () => {
  const clientsData = [
    {
      id: 1,
      avatar: Avatar_19,
      companyName: "Global Tech",
      contactName: "Barry Cuda",
      position: "CEO",
    },
    {
      id: 2,
      avatar: Avatar_29,
      companyName: "Delta Infotech",
      contactName: "Tressa Wexler",
      position: "Manager",
    },
    {
      id: 3,
      avatar: Avatar_07,
      companyName: "Ruby Bartlett",
      contactName: "Cream Inc",
      position: "CEO",
    },
    {
      id: 4,
      avatar: Avatar_14,
      companyName: "Wellware Company",
      contactName: "Misty Tison",
      position: "CEO",
    },
    {
      id: 5,
      avatar: Avatar_18,
      companyName: "Mustang Technologies",
      contactName: "Daniel Deacon",
      position: "CEO",
    },
    {
      id: 6,
      avatar: Avatar_17,
      companyName: "International Software Inc",
      contactName: "Walter Weaver",
      position: "CEO",
    },
    {
      id: 7,
      avatar: Avatar_28,
      companyName: "Mercury Software Inc",
      contactName: "Amanda Warren",
      position: "CEO",
    },
    {
      id: 8,
      avatar: Avatar_13,
      companyName: "International Software Inc",
      contactName: "Betty Carlson",
      position: "CEO",
    },
  ];

  return (
    <div>
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
          <div className="row staff-grid-row">
            {clientsData.map((client) => (
              <div
                key={client.id}
                className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3"
              >
                <div className="profile-widget">
                  <div className="profile-img">
                    <Link to="/client-profile" className="avatar">
                      <img alt="" src={client.avatar} />
                    </Link>
                  </div>
                  <div className="dropdown profile-action">
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
                  <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                    <Link to="/client-profile">{client.companyName}</Link>
                  </h4>
                  <h5 className="user-name m-t-10 mb-0 text-ellipsis">
                    <Link to="/client-profile">{client.contactName}</Link>
                  </h5>
                  <div className="small text-muted">{client.position}</div>
                  <Link
                    onClick={() => localStorage.setItem("minheight", "true")}
                    to="/call/chat"
                    className="btn btn-white btn-sm m-t-10 me-1"
                  >
                    Message
                  </Link>
                  <Link
                    to="/client-profile"
                    className="btn btn-white btn-sm m-t-10"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ClientModelPopup />
      <DeleteModal Name="Delete Client" />
    </div>
  );
};

export default Clients;

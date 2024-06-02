/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";
import { Avatar_02 } from "../../../Routes/ImagePath/index";
import { Table } from "antd";
import PromotionModal from "../../../components/modelpopup/PromotionModal";
import DeleteModal from "../../../components/modelpopup/DeleteModal";
import Breadcrumbs from "../../../components/Breadcrumbs";
import SearchBox from "../../../components/SearchBox";

const Promotion = () => {
  const data = [
    {
      id: 1,
      image: Avatar_02,
      name: "John Doe",
      department: "Web Development",
      promotiondesignationfrom: "Web Developer",
      promotiondesignationto: "Sr Web Developer",
      promotiondate: "09 Jan 2023",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Promoted Employee",
      dataIndex: "name",
      render: (text, record) => (
        <h2 className="table-avatar">
          <Link to="/profile" className="avatar">
            <img alt="" src={record.image} />
          </Link>
          <Link to="/profile">
            {text} <span>{record.role}</span>
          </Link>
        </h2>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Department",
      dataIndex: "department",
      sorter: (a, b) => a.department.length - b.department.length,
    },

    {
      title: "Promotion Designation From",
      dataIndex: "promotiondesignationfrom",
      sorter: (a, b) =>
        a.promotiondesignationfrom.length - b.promotiondesignationfrom.length,
    },

    {
      title: "Promotion Designation To",
      dataIndex: "promotiondesignationto",
      sorter: (a, b) =>
        a.promotiondesignationto.length - b.promotiondesignationto.length,
    },
    {
      title: "Promotion Date",
      dataIndex: "promotiondate",
      sorter: (a, b) => a.promotiondate.length - b.promotiondate.length,
    },
    {
      title: "Action",
      sorter: "true",
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
              data-bs-target="#edit_promotion"
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
            maintitle="Promotion"
            title="Dashboard"
            subtitle="Promotion"
            modal="#add_promotion"
            name="Add New"
          />
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <SearchBox />
                {/* Promotion Table */}
                <Table
                  className="table-striped"
                  columns={columns}
                  dataSource={data}
                  rowKey={(record) => record.id}
                />
                {/* /Promotion Table */}
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
      <PromotionModal />
      <DeleteModal Name="Delete Promotion" />
    </>
  );
};

export default Promotion;

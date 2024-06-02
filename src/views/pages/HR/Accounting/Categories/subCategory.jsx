import React from "react";
import Header from "../../../../layout/Header";
import Sidebar from "../../../../layout/Sidebar";
import Breadcrumbs from "../../../../../components/Breadcrumbs";
import { Link } from "react-router-dom";
import { Table } from "antd";
import SubCategoriesModal from "./subCategoryModal";
import DeleteModal from "../../../../../components/modelpopup/deletePopup";

const SubCategory = () => {
  const data = [
    { id: 1, category: "Hardware", subcategory: "Hardware Expenses" },
    { id: 2, category: "Material", subcategory: "Material Expenses" },
    { id: 3, category: "Vehicle", subcategory: "Company Vehicle Information" },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Category Name",
      dataIndex: "category",
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: "Sub-Category Name",
      dataIndex: "subcategory",
      sorter: (a, b) => a.subcategory.length - b.subcategory.length,
    },
    {
      title: "Action",
      render: () => (
        <div className="dropdown dropdown-action">
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
              data-bs-target="#editsub_categories"
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link
              className="dropdown-item"
              to="#delete"
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
    <div className="main-wrapper">
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Sub Categories"
            title="Dashboard"
            subtitle="Accounts"
            modal="#addsub_categories"
            name="Add Sub Categories"
          />
          <Table
            className="table-striped"
            style={{ overflowX: "auto" }}
            columns={columns}
            dataSource={data}
            rowKey={(record) => record.id}
          />
        </div>
      </div>
      <SubCategoriesModal />
      <DeleteModal Name="Delete" />
    </div>
  );
};

export default SubCategory;

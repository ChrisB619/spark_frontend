import React from "react";

import Breadcrumbs from "../../../../../components/Breadcrumbs";
import { Link } from "react-router-dom";
import { Table } from "antd";
import CategoriesModal from "./CategoriesModal";

const Categories = () => {
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
              data-bs-target="#edit_categories"
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link className="dropdown-item" to="/sub-category">
              <i className="fa fa-object-ungroup m-r-5" /> Sub-Category{" "}
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
          <Breadcrumbs
            maintitle="Categories"
            title="Dashboard"
            subtitle="Accounts"
            modal="#add_categories"
            name="Add Categories"
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
      <CategoriesModal />
    </>
  );
};

export default Categories;

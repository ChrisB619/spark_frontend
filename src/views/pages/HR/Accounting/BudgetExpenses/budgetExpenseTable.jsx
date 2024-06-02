import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const BudgetExpenseTable = () => {
  const data = [
    {
      id: "1",
      name: "Test",
      category: "Hardware",
      description: "Hardware Expenses",
      amount: "1000.00",
      date: "06 Jan 2023",
    },
    {
      id: "2",
      name: "Test",
      category: "Project",
      description: "Project Expenses",
      amount: "1000.00",
      date: "06 Jan 2023",
    },
  ];
  const columns = [
    {
      title: "No",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Notes",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Category Name",
      dataIndex: "category",
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: "Subcategory Name",
      dataIndex: "description",
      sorter: (a, b) => a.description.length - b.description.length,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
    {
      title: "Revenue Date",
      dataIndex: "date",
      sorter: (a, b) => a.date.length - b.date.length,
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
              data-bs-target="#edit_categories"
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
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#ff9b44" : "#fff",
      color: state.isFocused ? "#fff" : "#000",
      "&:hover": {
        backgroundColor: "#ff9b44",
      },
    }),
  };
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <Table
              className="table-striped mb-0"
              columns={columns}
              dataSource={data}
              rowKey={(record) => record.id}
              pagination={true}
              style={customStyles}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BudgetExpenseTable;

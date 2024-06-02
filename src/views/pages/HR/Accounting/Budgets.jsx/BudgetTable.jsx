import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const BudgetTable = () => {
  const data = [
    {
      id: 1,
      BudgetNo: "1",
      BudgetTitle: "Tender",
      BudgetType: "Project",
      StartDate: "01 Jan 2021",
      EndDate: "31 Dec 2021",
      TotalRevenue: "2500000",
      TotalExpenses: "1500000",
      TaxAmount: "10",
      BudgetAmount: "999990",
    },
    {
      id: 2,
      BudgetNo: "2",
      BudgetTitle: "Project",
      BudgetType: "Project",
      StartDate: "01 Feb 2021",
      EndDate: "30 Apr 2021",
      TotalRevenue: "100000",
      TotalExpenses: "50000",
      TaxAmount: "1000",
      BudgetAmount: "49000",
    },
  ];

  const columns = [
    {
      title: "Budget No",
      dataIndex: "BudgetNo",
      sorter: (a, b) => a.BudgetNo.length - b.BudgetNo.length,
    },
    {
      title: "Budget Title",
      dataIndex: "BudgetTitle",
      sorter: (a, b) => a.BudgetTitle.length - b.BudgetTitle.length,
    },
    {
      title: "Budget Type",
      dataIndex: "BudgetType",
      sorter: (a, b) => a.BudgetType.length - b.BudgetType.length,
    },
    {
      title: "Start Date",
      dataIndex: "StartDate",
      sorter: (a, b) => a.StartDate.length - b.StartDate.length,
    },
    {
      title: "End Date",
      dataIndex: "EndDate",
      sorter: (a, b) => a.EndDate.length - b.EndDate.length,
    },
    {
      title: "Total Revenue",
      dataIndex: "TotalRevenue",
      sorter: (a, b) => a.TotalRevenue.length - b.TotalRevenue.length,
    },
    {
      title: "Total Expenses",
      dataIndex: "TotalExpenses",
      sorter: (a, b) => a.TotalExpenses.length - b.TotalExpenses.length,
    },
    {
      title: "Tax Amount",
      dataIndex: "TaxAmount",
      sorter: (a, b) => a.TaxAmount.length - b.TaxAmount.length,
    },
    {
      title: "Budge tAmount",
      dataIndex: "BudgetAmount",
      sorter: (a, b) => a.BudgetAmount.length - b.BudgetAmount.length,
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
              data-bs-target="#edit_budgets"
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
    <>
      <Table
        className=" table-striped "
        style={{ overflowX: "auto" }}
        columns={columns}
        dataSource={data}
        rowKey={(record) => record.id}
      />
    </>
  );
};

export default BudgetTable;

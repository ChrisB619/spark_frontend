import React from "react";
// import { Table } from "antd";

import Breadcrumbs from "../../../../../components/Breadcrumbs";
import DeleteModal from "../../../../../components/modelpopup/deletePopup";
import BudgetExpenseTable from "./budgetExpenseTable";
import AddBudgetExpenseModal from "./AddBudgetExpenseModal";
import EditBudgetExpenseModal from "./EditBudgetExpenseModal";

const BudgetExpenses = () => {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Budget Expenses"
            title="Dashboard"
            subtitle="Accounts"
            modal="#add_categories"
            name="Add Expenses"
          />
          <BudgetExpenseTable />
        </div>
        {/* /Page Content */}
      </div>
      <AddBudgetExpenseModal />
      <EditBudgetExpenseModal />

      <DeleteModal Name="Delete" />
    </>
  );
};

export default BudgetExpenses;

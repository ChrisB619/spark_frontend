import React from "react";
import Breadcrumbs from "../../../../../components/Breadcrumbs";
import DeleteModal from "../../../../../components/modelpopup/deletePopup";
import BudgetTable from "./BudgetTable";
import AddModal from "./AddModal";
import EditBudgetModal from "./EditBudgetModal";

const Budgets = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Budgets"
            title="Dashboard"
            subtitle="Accounts"
            modal="#add_budgets"
            name="Add Budgets"
          />
          <BudgetTable />
        </div>
      </div>
      <AddModal />
      <EditBudgetModal />
      <DeleteModal Name="Delete" />
    </>
  );
};

export default Budgets;

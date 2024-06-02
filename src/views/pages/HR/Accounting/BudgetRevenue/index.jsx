import React from "react";
// import { Table } from "antd";

import Breadcrumbs from "../../../../../components/Breadcrumbs";
import DeleteModal from "../../../../../components/modelpopup/deletePopup";
import RevenueTable from "./revenueTable";
import AddRevenueModal from "./addrevenueModal";
import EditRevenueModal from "./EditRevenueModal";

const BudgetRevenues = () => {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Budget Revenues"
            title="Dashboard"
            subtitle="Accounts"
            modal="#add_revenues"
            name="Add Revenues"
          />
          <RevenueTable />
        </div>
        {/* /Page Content */}
      </div>
      <AddRevenueModal />
      <EditRevenueModal />
      <DeleteModal Name="Delete" />
    </>
  );
};

export default BudgetRevenues;

import React from "react";
import Breadcrumbs from "../../../../../components/Breadcrumbs";
import TaxTable from "./taxTable";
import TaxModal from "./taxModal";
import DeleteModal from "../../../../../components/modelpopup/deletePopup";

const Taxes = () => {
  return (
    <>
    
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Taxes"
            title="Dashboard"
            subtitle="Taxes"
            modal="#add_tax"
            name="Add Tax"
          />

          <TaxTable />
        </div>
        {/* /Page Content */}
      </div>
      <TaxModal />
      <DeleteModal Name="Delete Tax" />
    </>
  );
};

export default Taxes;

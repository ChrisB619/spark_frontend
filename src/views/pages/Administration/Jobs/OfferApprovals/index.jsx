import React from "react";

import Breadcrumbs from "../../../../../components/Breadcrumbs";
import OfferApprovalTable from "./OfferApprovalTable";

const OfferApprovals = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Offer Approvals"
            title="Dashboard"
            subtitle="Jobs / Offer Approvals"
          />

          <OfferApprovalTable />
        </div>
      </div>
    </>
  );
};

export default OfferApprovals;

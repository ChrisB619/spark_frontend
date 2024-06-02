import React from "react";
import Breadcrumbs from "../../../../../components/Breadcrumbs";
import AddEditpage from "./addEditpage";

const EditEstimate = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Edit Estimate"
            title="Dashboard"
            subtitle="Edit Estimate"
          />
          <AddEditpage />
        </div>
      </div>
    </>
  );
};

export default EditEstimate;

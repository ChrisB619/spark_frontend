import React from "react";
import Breadcrumbs from "../../../../../components/Breadcrumbs";
import AddEditpage from "./addEditpage";

const CreateEstimate = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Create Estimate"
            title="Dashboard"
            subtitle="Create Estimate"
          />
          <AddEditpage />
        </div>
      </div>
    </>
  );
};

export default CreateEstimate;

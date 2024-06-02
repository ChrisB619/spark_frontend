import React from "react";

import Breadcrumbs from "../../../../../components/Breadcrumbs";
import ManageJobResumesTable from "./ManageResumeTable";

const ManageJobResumes = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Manage Resumes"
            title="Dashboard"
            subtitle="Jobs / Manage Resumes"
          />
          <ManageJobResumesTable />
        </div>
      </div>
    </>
  );
};

export default ManageJobResumes;

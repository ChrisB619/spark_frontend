import React from "react";
import Breadcrumbs from "../../../../../components/Breadcrumbs";
import JobDashboardWidget from "./JobDashboardWidget";
import UserDashboardGraph from "./UserDashboardGraph";
import ApplicantListTable from "./ApplicantListTable";
import ShortlistTable from "./ShortlistTable";

const JobsDashboard = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Applied Jobs"
            title="Dashboard"
            subtitle="Jobs / Job Dashboard "
          />
          <JobDashboardWidget />
          <UserDashboardGraph />
          <ApplicantListTable />
          <ShortlistTable />
        </div>
      </div>
    </>
  );
};

export default JobsDashboard;

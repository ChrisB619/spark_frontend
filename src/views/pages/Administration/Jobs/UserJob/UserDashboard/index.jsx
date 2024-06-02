import React from "react";
import Breadcrumbs from "../../../../../../components/Breadcrumbs";

import UserDashboardHeader from "../../../../../../components/Administration/Jobs/UserJobs/UserDashboardHeader";
import DashboardWidget from "./DashboardWidget";
import DashboardGraph from "./DashboardGraph";
import OfferedJobs from "./OfferedJobs";
import DeleteModal from "../../../../../../components/modelpopup/deletePopup";
import AppliedJobsTable from "./AppliedJobsTable";

const UserDashboard = () => {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Breadcrumbs
          maintitle="User Job Dashboard"
          title="Dashboard"
          subtitle="Jobs / User Dashboard / User Dashboard"
        />
        <UserDashboardHeader />
        <DashboardWidget />
        <DashboardGraph />
        <OfferedJobs />
        <AppliedJobsTable />
        <DeleteModal Name="Delete" />
      </div>
    </div>
  );
};

export default UserDashboard;

import React from "react";

import UserSearchFilter from "../../../../../../components/Administration/Jobs/UserJobs/UserSearchFilter";
import UserDashboardHeader from "../../../../../../components/Administration/Jobs/UserJobs/UserDashboardHeader";
import DeleteModal from "../../../../../../components/modelpopup/deletePopup";
import Breadcrumbs from "../../../../../../components/Breadcrumbs";
import UserOfferedJobsTable from "./UserOfferedJobsTable";

const UserOfferedJobs = () => {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Breadcrumbs
          maintitle="Offered Jobs"
          title="Dashboard"
          subtitle="Jobs / User Dashboard / Offered Jobs"
        />
        <UserDashboardHeader />
        <UserSearchFilter />
        <UserOfferedJobsTable />
        <DeleteModal Name="Delete" />
      </div>
    </div>
  );
};

export default UserOfferedJobs;

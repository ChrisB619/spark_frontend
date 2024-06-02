import React from "react";

import UserSearchFilter from "../../../../../../components/Administration/Jobs/UserJobs/UserSearchFilter";
import UserDashboardHeader from "../../../../../../components/Administration/Jobs/UserJobs/UserDashboardHeader";
import UserDataTable from "../../../../../../components/Administration/Jobs/UserJobs/UserDataTable";
import DeleteModal from "../../../../../../components/modelpopup/deletePopup";
import Breadcrumbs from "../../../../../../components/Breadcrumbs";

const VisitedJobs = () => {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Breadcrumbs
          maintitle="Visitied Jobs"
          title="Dashboard"
          subtitle="Jobs / User Dashboard / Visitied Jobs"
        />
        <UserDashboardHeader />
        <UserSearchFilter />
        <UserDataTable />
        <DeleteModal Name="Delete" />
      </div>
    </div>
  );
};

export default VisitedJobs;

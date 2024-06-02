import React from "react";

import UserSearchFilter from "../../../../../../components/Administration/Jobs/UserJobs/UserSearchFilter";
import UserDashboardHeader from "../../../../../../components/Administration/Jobs/UserJobs/UserDashboardHeader";
import UserDataTable from "../../../../../../components/Administration/Jobs/UserJobs/UserDataTable";
import DeleteModal from "../../../../../../components/modelpopup/deletePopup";
import Breadcrumbs from "../../../../../../components/Breadcrumbs";

const SavedJobs = () => {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Breadcrumbs
          maintitle="Saved Jobs"
          title="Dashboard"
          subtitle="Jobs / User Dashboard / Saved Jobs"
        />
        <UserDashboardHeader />
        <UserSearchFilter />
        <UserDataTable />
        <DeleteModal Name="Delete" />
      </div>
    </div>
  );
};

export default SavedJobs;

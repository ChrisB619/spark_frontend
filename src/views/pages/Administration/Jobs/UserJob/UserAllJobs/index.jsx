import React from "react";
import Breadcrumbs from "../../../../../../components/Breadcrumbs";

import UserSearchFilter from "../../../../../../components/Administration/Jobs/UserJobs/UserSearchFilter";
import UserDashboardHeader from "../../../../../../components/Administration/Jobs/UserJobs/UserDashboardHeader";
import UserDataTable from "../../../../../../components/Administration/Jobs/UserJobs/UserDataTable";
import DeleteModal from "../../../../../../components/modelpopup/deletePopup";

const UserAllJobs = () => {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Breadcrumbs
          maintitle="All Jobs"
          title="Dashboard"
          subtitle="Jobs / User Dashboard / All Jobs"
        />
        <UserDashboardHeader />
        <UserSearchFilter />
        <UserDataTable />
        <DeleteModal Name="Delete" />
      </div>
    </div>
  );
};

export default UserAllJobs;

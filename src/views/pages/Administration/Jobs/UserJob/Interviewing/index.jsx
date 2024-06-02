import React from "react";
import Breadcrumbs from "../../../../../../components/Breadcrumbs";

import UserDashboardHeader from "../../../../../../components/Administration/Jobs/UserJobs/UserDashboardHeader";
import InterviewingTables from "./InterviewingTables";

const Interviewing = () => {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Breadcrumbs
          maintitle="All Jobs"
          title="Dashboard"
          subtitle="Jobs / User Dashboard / All Jobs"
        />
        <UserDashboardHeader />
        <InterviewingTables />
      </div>
    </div>
  );
};

export default Interviewing;

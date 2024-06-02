import React from "react";
import Breadcrumbs from "../../../../../../components/Breadcrumbs";

import UserDashboardHeader from "../../../../../../components/Administration/Jobs/UserJobs/UserDashboardHeader";
import Question from "./question";

const Questions = () => {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Breadcrumbs
          maintitle="Aptitude"
          title="Dashboard"
          subtitle="Jobs / User Dashboard / Aptitude"
        />
        <UserDashboardHeader />
        <Question />
      </div>
    </div>
  );
};

export default Questions;

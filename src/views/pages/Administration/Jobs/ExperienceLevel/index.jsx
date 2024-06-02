import React from "react";

import Breadcrumbs from "../../../../../components/Breadcrumbs";
import ExperienceLevelTable from "./ExperienceLevelTable";
import AddExperiencelModal from "../../../../../components/Administration/Jobs/ExperienceLevel/AddExperiencelModal";

const ExperienceLevel = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Experience Level"
            title="Dashboard"
            subtitle="Jobs / Experience Level"
            modal="#add_employee"
            name="Add Experience Lvel"
          />

          <ExperienceLevelTable />

          <AddExperiencelModal />
        </div>
      </div>
    </>
  );
};

export default ExperienceLevel;

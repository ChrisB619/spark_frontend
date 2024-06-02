import React from "react";

import Breadcrumbs from "../../../../../components/Breadcrumbs";
import AptitudeResultTable from "./AptitudeResultTable";

const AptitudeResults = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Aptitude Result"
            title="Dashboard"
            subtitle="Jobs / Aptitude Result"
          />
          <AptitudeResultTable />
        </div>
      </div>
    </>
  );
};

export default AptitudeResults;

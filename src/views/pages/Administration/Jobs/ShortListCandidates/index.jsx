import React from "react";
import Breadcrumbs from "../../../../../components/Breadcrumbs";
import ShortListCanditatesTable from "./ShortListCandidatesTable";

const ShortListCandidates = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Shortlist Candidates"
            title="Dashboard"
            subtitle="Jobs / Shortlist Candidates"
          />
          <ShortListCanditatesTable />
        </div>
      </div>
    </>
  );
};

export default ShortListCandidates;

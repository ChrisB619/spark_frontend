import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";

const BlankPage = () => {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <Breadcrumbs
            maintitle="Blank Page"
            title="Dashboard"
            subtitle="Blank Page"
          />
          {/* /Page Header */}
          {/* Content Starts */}
          Content Starts Here
          {/* /Content End */}
        </div>
        {/* /Page Content */}
      </div>
    </>
  );
};
export default BlankPage;

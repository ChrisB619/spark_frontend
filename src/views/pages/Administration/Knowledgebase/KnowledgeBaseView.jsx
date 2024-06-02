import React from "react";
import KnowledgeBaseViewCategories from "./KnowledgeBaseViewCategories";
import Breadcrumbs from "../../../../components/Breadcrumbs";

const KnowledgeBaseView = () => {
  return (
    <div className="page-wrapper">
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <Breadcrumbs
        maintitle="KnowledgeBase"
        title="Dashboard"
        subtitle="KnowledgeBase"
        modal="#add_indicator"
        name="Add New"
    />
        {/* /Page Header */}
        {/* Content Starts */}
       <KnowledgeBaseViewCategories/>
        {/* /Content End */}
      </div>
      {/* /Page Content */}
    </div>
  );
};

export default KnowledgeBaseView;

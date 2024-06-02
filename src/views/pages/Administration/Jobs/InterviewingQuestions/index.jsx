import React from "react";
import Breadcrumbs from "../../../../../components/Breadcrumbs";

import InterviewQuestionsTable from "./InterviewQuestionTable";
import AddCategoryModal from "../../../../../components/Administration/Jobs/InterviewQuestions/AddCategory";
import AddQuestionsModal from "../../../../../components/Administration/Jobs/InterviewQuestions/AddQuestions";
import EditQuestions from "../../../../../components/Administration/Jobs/InterviewQuestions/EditQuestions";

const InterviewingQuestions = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Interview Questions"
            title="Dashboard"
            subtitle="Jobs / Interview Questions"
            modalone="#add_question"
            nameone="Add Questions"
            modaltwo="#add_category"
            nametwo="Add Category"
          />

          <AddQuestionsModal />
          <AddCategoryModal />
          <EditQuestions />
          <InterviewQuestionsTable />
        </div>
      </div>
    </>
  );
};

export default InterviewingQuestions;

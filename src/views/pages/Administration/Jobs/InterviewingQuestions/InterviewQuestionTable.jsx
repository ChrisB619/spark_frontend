import React from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import DeleteModal from "../../../../../components/modelpopup/deletePopup";

const InterviewQuestionsTable = () => {
  const data = [
    {
      id: 1,
      questions:
        "IS management has decided to rewrite a legacy languages (4GLs)?",
      optiona: "design facilities",
      optionb: "language subsets",
      optionc: "Lack of portability",
      optiond: "Inability to perform data",
      correctanswer: "A",
    },
    {
      id: 2,
      questions:
        "Which of the following the BEST method for ensuring that critical?",
      optiona: "design facilities",
      optionb: "language subsets",
      optionc: "Lack of portability",
      optiond: "Inability to perform data",
      correctanswer: "A",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Questions",
      dataIndex: "questions",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Option A",
      dataIndex: "optiona",
      sorter: (a, b) => a.optiona.length - b.optiona.length,
    },
    {
      title: "Option B",
      dataIndex: "optionb",
      sorter: (a, b) => a.optionb.length - b.optionb.length,
    },
    {
      title: "Option C",
      dataIndex: "optionc",
      sorter: (a, b) => a.optionc.length - b.optionc.length,
    },
    {
      title: "Option D",
      dataIndex: "optiond",
      sorter: (a, b) => a.optiond.length - b.optiond.length,
    },

    {
      title: "Correct Answer",
      dataIndex: "correctanswer",
      render: (text) => (
        <div className="text-center">
          <p>{text}</p>
        </div>
      ),
      sorter: (a, b) => a.correctanswer.length - b.correctanswer.length,
    },
    {
      title: "Actions",
      render: () => (
        <div className="dropdown dropdown-action text-center">
          <Link
            to="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="material-icons">more_vert</i>
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit_question"
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete"
            >
              <i className="fa fa-trash m-r-5" /> Delete
            </Link>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <Table
              className="table-striped"
              style={{ overflowX: "auto" }}
              columns={columns}
              dataSource={data}
              rowKey={(record) => record.id}
              pagination={false}
            />
          </div>
        </div>
      </div>

      <DeleteModal Name="Delete" />
    </>
  );
};

export default InterviewQuestionsTable;

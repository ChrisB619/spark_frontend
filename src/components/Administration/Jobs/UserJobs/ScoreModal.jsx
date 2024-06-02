import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ScoreModal = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/job-aptitude");
    window.location.reload();
  };

  return (
    <div
      className="modal question-modal"
      id="free_question_modal"
      tabIndex={-1}
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="mb-0">Result for Your Questions</h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-horzontal">
              <div className="col-md-12">
                <div className="text-start mb-3">
                  <h3 className="mb-0">
                    Correct Answers :
                    <span className="text-success">
                      <b>5</b>
                    </span>
                  </h3>
                </div>
                <div className="text-start">
                  <h3 className="mb-0">
                    Wrong Answer :
                    <span className="text-danger">
                      <b>1</b>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <p>Please click Next to move main menu.</p>
              <Link
                to="#"
                className="btn btn-primary btn-lg submit-btn d-block"
                onClick={handleButtonClick}
              >
                Next
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreModal;

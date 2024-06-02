import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScoreModal from "../../../../../../components/Administration/Jobs/UserJobs/ScoreModal";

const Question = () => {
  const [activeTab, setActiveTab] = useState("step1");

  const handleNextButtonClick = () => {
    if (activeTab === "step1") {
      setActiveTab("step2");
    } else if (activeTab === "step2") {
      setActiveTab("step3");
    } else if (activeTab === "step3") {
      setActiveTab("step4");
    } else if (activeTab === "step4") {
      setActiveTab("step5");
    } else if (activeTab === "step5") {
      setActiveTab("step10");
    }
  };

  return (
    <>
      <div className="quiz-wizard">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card">
              <div className="card-body">
                <div className id="myWizard">
                  <div style={{ display: "none" }} className="navbar">
                    <div className="navbar-inner"></div>
                  </div>
                  <form method="post" id="quiz_answer">
                    <div className="tab-content pt-0">
                      <div
                        className={`tab-pane ${
                          activeTab === "step1" ? "active" : "fade"
                        }`}
                        id="step1"
                      >
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className>
                              <h4 className="mb-4 text-dark">
                                <span>1.</span> IS management has decided to
                                rewrite a legacy customer relations system using
                                fourth generation languages (4GLs). Which of the
                                following risks is MOST often associated with
                                system development using 4GLs?
                              </h4>
                              <div className="row">
                                <div className="col-md-6">
                                  <label className="question-radio text-secondary">
                                    <input type="radio" name="answer[10]" />
                                    <span className="checkmark" />
                                    Inadequate screen/report design facilities
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <label className="question-radio text-secondary">
                                    <input type="radio" name="answer[10]" />
                                    <span className="checkmark" />
                                    Complex programming language subsets
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <label className="question-radio text-secondary">
                                    <input type="radio" name="answer[10]" />
                                    <span className="checkmark" />
                                    Lack of portability across operating systems
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <label className="question-radio text-secondary">
                                    <input type="radio" name="answer[10]" />
                                    <span className="checkmark" />
                                    Inability to perform data intensive
                                    operations
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="text-start mt-3">
                              <Link
                                className="btn btn-primary btn-lg next submit-btn"
                                to="#"
                                onClick={handleNextButtonClick}
                              >
                                Next
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`tab-pane ${
                          activeTab === "step2" ? "active" : "fade"
                        }`}
                        id="step2"
                      >
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className>
                              <h4 className="mb-4 text-dark">
                                <span>2.</span> Which of the following would be
                                the BEST method for ensuring that critical
                                fields in a master record have been updated
                                properly?
                              </h4>
                              <div className="row">
                                <div className="col-md-6">
                                  <label className="question-radio text-secondary">
                                    <input type="radio" name="answer[11]" />
                                    <span className="checkmark" />
                                    Inadequate screen/report design facilities
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <label className="question-radio text-secondary">
                                    <input type="radio" name="answer[11]" />
                                    <span className="checkmark" />
                                    Complex programming language subsets
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <label className="question-radio text-secondary">
                                    <input type="radio" name="answer[11]" />
                                    <span className="checkmark" />
                                    Lack of portability across operating systems
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <label className="question-radio text-secondary">
                                    <input type="radio" name="answer[11]" />
                                    <span className="checkmark" />
                                    Inability to perform data intensive
                                    operations
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="text-start mt-3">
                              <Link
                                className="btn btn-primary btn-lg next submit-btn"
                                to="#"
                                onClick={handleNextButtonClick}
                              >
                                Next
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`tab-pane fade in ${
                          activeTab === "step3" ? "active show" : ""
                        }`}
                        id="step3"
                      >
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className>
                              <h4 className="mb-4 text-dark">
                                <span>3.</span> Which of the following is a
                                dynamic analysis tool for the purpose of testing
                                software modules?
                              </h4>
                              <div className="row">
                                <div className="col-md-6">
                                  <label className="question-radio text-secondary">
                                    <input type="radio" name="answer[12]" />
                                    <span className="checkmark" />
                                    Blackbox test
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <label className="question-radio text-secondary">
                                    <input type="radio" name="answer[12]" />
                                    <span className="checkmark" />
                                    Desk checking
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <label className="question-radio text-secondary">
                                    <input type="radio" name="answer[12]" />
                                    <span className="checkmark" />
                                    Structured walk-through
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <label className="question-radio text-secondary">
                                    <input type="radio" name="answer[12]" />
                                    <span className="checkmark" />
                                    Design and code
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="text-start mt-3">
                              <Link
                                className="btn btn-primary btn-lg next submit-btn"
                                to="#"
                                onClick={handleNextButtonClick}
                              >
                                Next
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`tab-pane in ${
                          activeTab === "step4" ? "active" : "fade"
                        }`}
                        id="step4"
                      >
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className>
                              <h4 className="mb-4 text-dark">
                                <span>4.</span> Which of the following is MOST
                                likely to result from a business process
                                reengineering (BPR) project?
                              </h4>
                              <div className="row">
                                <div className="col-md-6">
                                  <label className="question-radio text-secondary">
                                    <input type="radio" name="answer[13]" />
                                    <span className="checkmark" />
                                    An increased number of people using
                                    technology
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <label className="question-radio text-secondary">
                                    <input type="radio" name="answer[13]" />
                                    <span className="checkmark" />
                                    Significant cost savings, through a
                                    reduction in the complexity of information
                                    technology
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <label className="question-radio text-secondary">
                                    <input type="radio" name="answer[13]" />
                                    <span className="checkmark" />A weaker
                                    organisational structures and less
                                    accountability
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <label className="question-radio text-secondary">
                                    <input type="radio" name="answer[13]" />
                                    <span className="checkmark" />
                                    Increased information protection (IP) risk
                                    will increase
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="text-start mt-3">
                              <Link
                                className="btn btn-primary btn-lg next submit-btn"
                                to="#"
                                onClick={handleNextButtonClick}
                              >
                                Next
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`tab-pane in ${
                          activeTab === "step5" ? "active" : "fade"
                        }`}
                        id="step5"
                      >
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className>
                              <h4 className="mb-4 text-dark">
                                <span>5.</span> Which of the following devices
                                extends the network and has the capacity to
                                store frames and act as a storage and forward
                                device?
                              </h4>
                              <div className="row">
                                <div className="col-md-6">
                                  <label className="question-radio text-secondary">
                                    <input type="radio" name="answer[14]" />
                                    <span className="checkmark" />
                                    Gateway
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <label className="question-radio text-secondary">
                                    <input type="radio" name="answer[14]" />
                                    <span className="checkmark" />
                                    Repeater
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <label className="question-radio text-secondary">
                                    <input type="radio" name="answer[14]" />
                                    <span className="checkmark" />
                                    Bridge
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <label className="question-radio text-secondary">
                                    <input type="radio" name="answer[14]" />
                                    <span className="checkmark" />
                                    Router
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="text-start mt-3">
                              <Link
                                className="btn btn-primary btn-lg next submit-btn"
                                to="#"
                                onClick={handleNextButtonClick}
                              >
                                Next
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`tab-pane in ${
                          activeTab === "step10" ? "active" : "fade"
                        }`}
                        id="step10"
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <div className>
                              <h4 className="mb-4 text-dark">
                                <span>6.</span> An offsite information
                                processing facility having electrical wiring,
                                air conditioning and flooring, but no computer
                                or communications equipment is a:
                              </h4>
                              <div className="row">
                                <div className="col-md-6">
                                  <label className="question-radio text-secondary">
                                    <input type="radio" name="answer[15]" />
                                    <span className="checkmark" />
                                    Cold site
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <label className="question-radio text-secondary">
                                    <input type="radio" name="answer[15]" />
                                    <span className="checkmark" />
                                    Warm site
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <label className="question-radio text-secondary">
                                    <input type="radio" name="answer[15]" />
                                    <span className="checkmark" />
                                    Dial-up site
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <label className="question-radio text-secondary">
                                    <input type="radio" name="answer[15]" />
                                    <span className="checkmark" />
                                    Duplicate processing facility
                                  </label>
                                </div>
                              </div>
                            </div>
                            <button
                              className="btn btn-success btn-lg submit-btn mt-3"
                              data-bs-toggle="modal"
                              data-bs-target="#free_question_modal"
                              type="button"
                            >
                              Finish
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScoreModal />
    </>
  );
};

export default Question;

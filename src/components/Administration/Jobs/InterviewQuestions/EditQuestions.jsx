import React, { useState } from "react";
import Select from "react-select";

const EditQuestions = () => {
  const [setSelectedOption] = useState(null);
  const [setSelectedOptionTwo] = useState(null);
  const [setSelectedOptionThree] = useState(null);

  const options = [
    { label: "-", value: "-" },
    { label: "Web Development", value: "Web Development" },
    { label: "Application Development", value: "Application Development" },
    { label: "IT Management", value: "IT Management" },
    { label: "Accounts Management", value: "Accounts Management" },
    { label: "Support Management", value: "Support Management" },
    { label: "Marketing", value: "Marketing" },
  ];
  const optionsTwo = [
    { value: "1", label: "-" },
    { value: "2", label: "Option A" },
    { value: "3", label: "Option B" },
    { value: "4", label: "Option C" },
    { value: "5", label: "Option D" },
  ];
  const optionsThree = [
    { value: "1", label: "-" },
    { value: "2", label: "HTML" },
    { value: "3", label: "CSS" },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#ff9b44" : "#fff",
      color: state.isFocused ? "#fff" : "#000",
      "&:hover": {
        backgroundColor: "#ff9b44",
      },
    }),
  };

  return (
    <div id="edit_question" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Questions</h5>
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block">
                    <label>Category</label>
                    <Select
                      placeholder="-"
                      onChange={setSelectedOptionThree}
                      options={optionsThree}
                      styles={customStyles}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label>Department</label>
                    <Select
                      placeholder="Web Development"
                      onChange={setSelectedOption}
                      options={options}
                      styles={customStyles}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="input-block">
                    <label>Add Questions</label>
                    <textarea
                      className="form-control"
                      defaultValue={
                        "\t\t\t\t\t\t\t\t\t\t\t\t\tIS management has decided to rewrite a legacy customer relations system using fourth generation languages (4GLs). Which of the following risks is MOST often associated with system development using 4GLs?\n\t\t\t\t\t\t\t\t\t\t\t\t"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block">
                    <label>Option A</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="Design facilities"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label>Option B</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="language subsets"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label>Option C</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="Lack of portability"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label>Option D</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="Inability to perform data"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="input-block">
                    <label>Correct Answer</label>
                    <Select
                      placeholder="Select"
                      onChange={setSelectedOptionTwo}
                      options={optionsTwo}
                      styles={customStyles}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block">
                    <label>Code Snippets</label>
                    <textarea
                      className="form-control"
                      defaultValue={
                        "\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t"
                      }
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label>Answer Explanation</label>
                    <textarea
                      className="form-control"
                      defaultValue={
                        "\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block">
                    <label>Add Video Link</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label>Add Image To Question</label>
                    <input className="form-control" type="file" />
                  </div>
                </div>
              </div>
              <div className="submit-section">
                <button
                  className="btn btn-primary submit-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  type="reset"
                >
                  Cancel
                </button>
                &nbsp;
                <button
                  className="btn btn-primary submit-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  type="reset"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditQuestions;

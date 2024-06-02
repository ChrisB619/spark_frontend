import React from "react";
import Select from "react-select";

const PerformanceIndicatorModal = () => {
  const selectoptions = [
    { label: "None", value: "option1" },
    { label: "Beginner", value: "option2" },
    { label: "Intermediate", value: "option3" },
    { label: "Advanced", value: "option4" },
    { label: "Expert / Leader", value: "option5" },
  ];
  const selectActive = [
    { label: "Active", value: "option1" },
    { label: "Inactive", value: "option2" },
  ];
  const selectDesignation = [
    { label: "Select Designation", value: "option1" },
    { label: "Web Designer", value: "option2" },
    { label: "IOS Developer", value: "option3" },
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
    <>
      {/* Add Performance Indicator Modal */}
      <div id="add_indicator" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Set New Indicator</h5>
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
              <form>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Designation</label>
                      <Select
                        options={selectDesignation}
                        placeholder="Select Designation"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h4 className="modal-sub-title">Technical</h4>
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Customer Experience
                      </label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Marketing</label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Management</label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Administration</label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Presentation Skill
                      </label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Quality Of Work</label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Efficiency</label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h4 className="modal-sub-title">Organizational</h4>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Integrity</label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Professionalism</label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Team Work</label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Critical Thinking
                      </label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Conflict Management
                      </label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Attendance</label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Ability To Meet Deadline
                      </label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Status</label>
                      <Select
                        options={selectActive}
                        placeholder="Active"
                        styles={customStyles}
                      />
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
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Performance Indicator Modal */}
      {/* Edit Performance Indicator Modal */}
      <div
        id="edit_indicator"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Performance Indicator</h5>
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
              <form>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Designation</label>
                      <Select
                        options={selectDesignation}
                        placeholder="Select Designation"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h4 className="modal-sub-title">Technical</h4>
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Customer Experience
                      </label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Marketing</label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Management</label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Administration</label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Presentation Skill
                      </label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Quality Of Work</label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Efficiency</label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h4 className="modal-sub-title">Organizational</h4>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Integrity</label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Professionalism</label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Team Work</label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Critical Thinking
                      </label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Conflict Management
                      </label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Attendance</label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Ability To Meet Deadline
                      </label>
                      <Select
                        options={selectoptions}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Status</label>
                      <Select
                        options={selectActive}
                        placeholder="Active"
                        styles={customStyles}
                      />
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
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Performance Indicator Modal */}
    </>
  );
};

export default PerformanceIndicatorModal;

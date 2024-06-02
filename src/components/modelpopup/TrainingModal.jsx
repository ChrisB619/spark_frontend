import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TrainingModal = () => {
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [selectedDate3, setSelectedDate3] = useState(null);
  const [selectedDate4, setSelectedDate4] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };
  const handleDateChange3 = (date) => {
    setSelectedDate3(date);
  };
  const handleDateChange4 = (date) => {
    setSelectedDate4(date);
  };
  const selectActive = [
    { label: "Active", value: "option1" },
    { label: "Inactive", value: "option2" },
  ];
  const selectTraining = [
    { label: "Node Training", value: "option1" },
    { label: "Swift Training", value: "option2" },
  ];
  const selectGalaviz = [
    { label: "Bernardo Galaviz", value: "option1" },
    { label: "Jeffrey Warden", value: "option2" },
  ];
  const selectMike = [
    { label: "Mike Litorus", value: "option1" },
    { label: "John Doe", value: "option2" },
  ];
  const selectNode = [
    { label: "Node Training", value: "option1" },
    { label: "Swift Training", value: "option2" },
    { label: "Git Training", value: "option3" },
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
      {/* Add Training List Modal */}
      <div id="add_training" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add New Training</h5>
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
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Training Type</label>
                      <Select
                        options={selectTraining}
                        placeholder="Node Training"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Trainer</label>
                      <Select
                        options={selectMike}
                        placeholder="Mike Litorus"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Employees</label>
                      <Select
                        options={selectGalaviz}
                        placeholder="Bernardo Galaviz"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Training Cost <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label>
                        Start Date <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <DatePicker
                          selected={selectedDate1}
                          onChange={handleDateChange1}
                          className="form-control floating datetimepicker"
                          type="date"
                          dateFormat="dd-MM-yyyy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label>
                        End Date <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <DatePicker
                          selected={selectedDate2}
                          onChange={handleDateChange2}
                          className="form-control floating datetimepicker"
                          type="date"
                          dateFormat="dd-MM-yyyy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label>
                        Description <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows={4}
                        defaultValue={""}
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
      {/* /Add Training List Modal */}
      {/* Edit Training List Modal */}
      <div id="edit_training" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Training List</h5>
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
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Training Type</label>
                      <Select
                        options={selectNode}
                        placeholder="Node Training"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Trainer</label>
                      <Select
                        options={selectMike}
                        placeholder="Mike Litorus"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Employees</label>
                      <Select
                        options={selectGalaviz}
                        placeholder="Bernardo Galaviz"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Training Cost <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$400"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label>
                        Start Date <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <DatePicker
                          selected={selectedDate3}
                          onChange={handleDateChange3}
                          className="form-control floating datetimepicker"
                          type="date"
                          dateFormat="dd-MM-yyyy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label>
                        End Date <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <DatePicker
                          selected={selectedDate4}
                          onChange={handleDateChange4}
                          className="form-control floating datetimepicker"
                          type="date"
                          dateFormat="dd-MM-yyyy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label>
                        Description <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows={4}
                        defaultValue={"Lorem ipsum ismap"}
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
      {/* /Edit Training List Modal */}
    </>
  );
};

export default TrainingModal;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TerminationModal = () => {
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
  const selectMisconduct = [
    { label: "Misconduct", value: "option1" },
    { label: "Others", value: "option2" },
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
      {/* Add Termination Modal */}
      <div
        id="add_termination"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Termination</h5>
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
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Terminated Employee <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Termination Type <span className="text-danger">*</span>
                  </label>
                  <div className="add-group-btn">
                    <Select
                      options={selectMisconduct}
                      placeholder="Misconduct"
                      styles={customStyles}
                    />

                    <Link className="btn btn-primary" to="#">
                      <i className="fa fa-plus" /> Add
                    </Link>
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Termination Date <span className="text-danger">*</span>
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
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Reason <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    rows={4}
                    defaultValue={""}
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Notice Date <span className="text-danger">*</span>
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
      {/* /Add Termination Modal */}
      {/* Edit Termination Modal */}
      <div
        id="edit_termination"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Termination</h5>
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
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Terminated Employee <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="John Doe"
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Termination Type <span className="text-danger">*</span>
                  </label>
                  <div className="add-group-btn">
                    <Select
                      options={selectMisconduct}
                      placeholder="Misconduct"
                      styles={customStyles}
                    />
                    <Link className="btn btn-primary" to="#">
                      <i className="fa fa-plus" /> Add
                    </Link>
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Termination Date <span className="text-danger">*</span>
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
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Reason <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    rows={4}
                    defaultValue={""}
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Notice Date <span className="text-danger">*</span>
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
      {/* /Edit Termination Modal */}
    </>
  );
};

export default TerminationModal;

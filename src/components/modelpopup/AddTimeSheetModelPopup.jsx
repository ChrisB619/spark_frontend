import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const AddTimeSheetModelPopup = () => {
  const project = [
    { value: 1, label: "Office Management" },
    { value: 2, label: "Project Management" },
    { value: 3, label: "Video Calling App" },
    { value: 4, label: "Hospital Administration" },
  ];
  const [selectedDate1, setSelectedDate1] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
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
      <div id="add_todaywork" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Today Work details</h5>
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
                  <div className="input-block mb-3 col-sm-6">
                    <label className="col-form-label">
                      Project <span className="text-danger">*</span>
                    </label>
                    <Select
                      options={project}
                      placeholder="Office Management"
                      style={customStyles}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-block mb-3 col-sm-4">
                    <label className="col-form-label">
                      Deadline <span className="text-danger">*</span>
                    </label>
                    <div className="cal-icon">
                      <input
                        className="form-control"
                        placeholder="5 May 2023"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="input-block mb-3 col-sm-4">
                    <label className="col-form-label">
                      Total Hours <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue={100}
                      readOnly
                    />
                  </div>
                  <div className="input-block mb-3 col-sm-4">
                    <label className="col-form-label">
                      Remaining Hours <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue={60}
                      readOnly
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-block mb-3 col-sm-6">
                    <label className="col-form-label">
                      Date <span className="text-danger">*</span>
                    </label>
                    <div className="cal-icon">
                      <div className="react-datepicker-wrapper w-100">
                        <DatePicker
                          selected={selectedDate1}
                          onChange={handleDateChange1}
                          className="form-control"
                          type="date"
                          dateFormat="dd-MM-yyyy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-block mb-3 col-sm-6">
                    <label className="col-form-label">
                      Hours <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Description <span className="text-danger">*</span>
                  </label>
                  <textarea
                    rows={4}
                    className="form-control"
                    defaultValue={""}
                  />
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

      <div
        id="edit_todaywork"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Today Work details</h5>
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
                  <div className="input-block mb-3 col-sm-6">
                    <label className="col-form-label">
                      Project <span className="text-danger">*</span>
                    </label>
                    <Select
                      options={project}
                      placeholder="Office Management"
                      style={customStyles}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-block mb-3 col-sm-4">
                    <label className="col-form-label">
                      Deadline <span className="text-danger">*</span>
                    </label>
                    <div className="cal-icon">
                      <input
                        className="form-control"
                        placeholder="5 May 2023"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="input-block mb-3 col-sm-4">
                    <label className="col-form-label">
                      Total Hours <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue={100}
                      readOnly
                    />
                  </div>
                  <div className="input-block mb-3 col-sm-4">
                    <label className="col-form-label">
                      Remaining Hours <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue={60}
                      readOnly
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-block mb-3 col-sm-6">
                    <label className="col-form-label">
                      Date <span className="text-danger">*</span>
                    </label>
                    <div className="cal-icon">
                      <div className="react-datepicker-wrapper w-100">
                        <DatePicker
                          selected={selectedDate1}
                          onChange={handleDateChange1}
                          className="form-control"
                          type="date"
                          dateFormat="dd-MM-yyyy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-block mb-3 col-sm-6">
                    <label className="col-form-label">
                      Hours <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Description <span className="text-danger">*</span>
                  </label>
                  <textarea
                    rows={4}
                    className="form-control"
                    defaultValue={""}
                  />
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
    </>
  );
};

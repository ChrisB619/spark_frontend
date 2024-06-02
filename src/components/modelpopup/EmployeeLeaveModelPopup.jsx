import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EmployeeLeaveModelPopup = () => {
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  const leavetype = [
    { value: 1, label: "Select Leave Type" },
    { value: 2, label: "Casual Leave 12 days" },
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
      <div id="add_leave" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Leave</h5>
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
                    Leave Type <span className="text-danger">*</span>
                  </label>
                  <Select
                    options={leavetype}
                    placeholder="Select"
                    styles={customStyles}
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    From <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <DatePicker
                      selected={selectedDate1}
                      onChange={handleDateChange1}
                      className="form-control datetimepicker"
                      type="date"
                      dateFormat="dd-MM-yyyy"
                    />
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    To <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <DatePicker
                      selected={selectedDate2}
                      onChange={handleDateChange2}
                      className="form-control datetimepicker"
                      type="date"
                      dateFormat="dd-MM-yyyy"
                    />
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Number of days <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" readOnly type="text" />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Remaining Leaves <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    readOnly
                    defaultValue={12}
                    type="text"
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Leave Reason <span className="text-danger">*</span>
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

      <div id="edit_leave" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Leave</h5>
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
                    Leave Type <span className="text-danger">*</span>
                  </label>
                  <Select
                    options={leavetype}
                    placeholder="Select"
                    styles={customStyles}
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    From <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <DatePicker
                      selected={selectedDate2}
                      onChange={handleDateChange2}
                      className="form-control datetimepicker"
                      type="date"
                      dateFormat="dd-MM-yyyy"
                    />
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    To <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <DatePicker
                      selected={selectedDate2}
                      onChange={handleDateChange2}
                      className="form-control datetimepicker"
                      type="date"
                      dateFormat="dd-MM-yyyy"
                    />
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Number of days <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    defaultValue={2}
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Remaining Leaves <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    readOnly
                    defaultValue={12}
                    type="text"
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Leave Reason <span className="text-danger">*</span>
                  </label>
                  <textarea
                    rows={4}
                    className="form-control"
                    defaultValue={"Going to hospital"}
                  />
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
    </>
  );
};

export default EmployeeLeaveModelPopup;

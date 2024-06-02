import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

const AddOverTime = () => {
  const [selectedDate1, setSelectedDate1] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };

  const employee = [
    { value: 1, label: "John Deo" },
    { value: 2, label: "Richard Miles" },
    { value: 3, label: "John Smith" },
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
    <div>
      <div id="add_overtime" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Overtime</h5>
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
                    Select Employee <span className="text-danger">*</span>
                  </label>
                  <Select
                    options={employee}
                    placeholder="Select"
                    styles={customStyles}
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Overtime Date <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <DatePicker
                      selected={selectedDate1}
                      onChange={handleDateChange1}
                      className="form-control"
                      type="date"
                      dateFormat="dd-MM-yyyy"
                    />
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Overtime Hours <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
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
      <div id="edit_overtime" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Overtime</h5>
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
                    Select Employee <span className="text-danger">*</span>
                  </label>
                  <Select
                    options={employee}
                    placeholder="Select"
                    styles={customStyles}
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Overtime Date <span className="text-danger">*</span>
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
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Overtime Hours <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
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
    </div>
  );
};

export default AddOverTime;

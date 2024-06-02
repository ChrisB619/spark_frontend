import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalendarModal = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const selectActive = [
    { label: "Danger", value: "option1" },
    { label: "Success", value: "option2" },
    { label: "Purple", value: "option3" },
    { label: "Primary", value: "option4" },
    { label: "Pink", value: "option5" },
    { label: "Info", value: "option6" },
    { label: "Inverse", value: "option7" },
    { label: "Orange", value: "option8" },
    { label: "Brown", value: "option9" },
    { label: "Teal", value: "option10" },
    { label: "Warning", value: "option11" },
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
      <div id="add_event" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Event</h5>
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
                    Event Name <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Event Date <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <DatePicker
                      className="form-control w-100"
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="dd-MM-yyyy"
                    />
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="control-label col-form-label">
                    Category
                  </label>
                  <Select
                    options={selectActive}
                    placeholder="Danger"
                    styles={customStyles}
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

export default CalendarModal;

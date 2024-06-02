import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

const ScheduleTimingModal = () => {
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [selectedDate3, setSelectedDate3] = useState(null);
  const [setSelectedOption] = useState(null);
  const [setSelectedOptionTwo] = useState(null);
  const [setSelectedOptionThree] = useState(null);

  const options = [
    { value: "Select Time", label: "Select Time" },
    { value: "12:00 AM-01:00 AM", label: "12:00 AM-01:00 AM" },
    { value: "01:00 AM-02:00 AM", label: "01:00 AM-02:00 AM" },
    { value: "02:00 AM-03:00 AM", label: "02:00 AM-03:00 AM" },
    { value: "03:00 AM-04:00 AM", label: "03:00 AM-04:00 AM" },
    { value: "04:00 AM-05:00 AM", label: "04:00 AM-05:00 AM" },
    { value: "05:00 AM-06:00 AM", label: "05:00 AM-06:00 AM" },
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

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };
  const handleDateChange3 = (date) => {
    setSelectedDate3(date);
  };
  return (
    <div id="edit_job" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit</h5>
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
                    <label>Schedule Date 1</label>
                    <div className="cal-icon">
                      <DatePicker
                        selected={selectedDate1}
                        onChange={handleDateChange1}
                        className="form-control floating datetimepicker"
                        type="date"
                        dateFormat="dd-MM-yyyy"
                      />
                    </div>{" "}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label>Select Time</label>
                    <Select
                      placeholder="12:00 AM-01:00 AM"
                      onChange={setSelectedOption}
                      options={options}
                      styles={customStyles}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label>Schedule Date 2</label>
                    <div className="cal-icon">
                      <DatePicker
                        selected={selectedDate2}
                        onChange={handleDateChange2}
                        className="form-control floating datetimepicker"
                        type="date"
                        dateFormat="dd-MM-yyyy"
                      />
                    </div>{" "}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label>Select Time</label>
                    <Select
                      placeholder="12:00 AM-01:00 AM"
                      onChange={setSelectedOptionTwo}
                      options={options}
                      styles={customStyles}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label>Schedule Date 3</label>
                    <div className="cal-icon">
                      <DatePicker
                        selected={selectedDate3}
                        onChange={handleDateChange3}
                        className="form-control floating datetimepicker"
                        type="date"
                        dateFormat="dd-MM-yyyy"
                      />
                    </div>{" "}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label>Select Time</label>
                    <Select
                      placeholder="12:00 AM-01:00 AM"
                      onChange={setSelectedOptionThree}
                      options={options}
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
  );
};

export default ScheduleTimingModal;

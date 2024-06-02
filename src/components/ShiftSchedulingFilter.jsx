import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import Select from "react-select";

const ShiftSchedulingFilter = () => {
  const [focused, setFocused] = useState(false);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  const department = [
    { value: 1, label: "All Department" },
    { value: 2, label: "Finance" },
    { value: 3, label: "Finance and Management" },
    { value: 4, label: "Hr and Finance" },
    { value: 5, label: "ITech" },
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
      {/* Search Filter */}
      <div className="row filter-row">
        <div className="col-sm-6 col-md-3">
          <div
            className={
              focused
                ? "input-block form-focus focused"
                : "input-block form-focus"
            }
          >
            <input
              type="text"
              className="form-control floating"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
            <label className="focus-label">Employee</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="input-block form-focus select-focus">
            <label className="focus-label">Department</label>
            <Select
              options={department}
              placeholder="Select"
              styles={customStyles}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-2">
          <div className="input-block form-focus focused">
            <div className="cal-icon">
              <DatePicker
                selected={selectedDate1}
                onChange={handleDateChange1}
                className="form-control floating datetimepicker"
                type="date"
                dateFormat="dd-MM-yyyy"
              />
            </div>
            <label className="focus-label">From</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-2">
          <div className="input-block form-focus focused">
            <div className="cal-icon">
              <DatePicker
                selected={selectedDate2}
                onChange={handleDateChange2}
                className="form-control floating datetimepicker"
                type="date"
                dateFormat="dd-MM-yyyy"
              />
            </div>
            <label className="focus-label">To</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-2">
          <Link to="#" className="btn btn-success btn-block w-100">
            {" "}
            Search{" "}
          </Link>
        </div>
      </div>
      {/* Search Filter */}
    </>
  );
};

export default ShiftSchedulingFilter;

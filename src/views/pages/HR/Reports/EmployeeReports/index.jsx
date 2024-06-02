import React, { useState } from "react";

import Breadcrumbs from "../../../../../components/Breadcrumbs";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import EmployeeReportTable from "./EmployeeReportTable";

const EmployeeReport = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateTwo, setSelectedDateTwo] = useState(null);

  const [isFocused, setIsFocused] = useState(false);
  const [dateTwo, setdateTwo] = useState(false);
  const [setSelectedOption] = useState(null);
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleLabelClick = () => {
    setFocused(true);
  };

  const handleInputBlur = () => {
    if (inputValue === "") {
      setFocused(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value !== "" && !focused) {
      setFocused(true);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocustwo = () => {
    setdateTwo(true);
  };
  const handleBlurtwo = () => {
    setdateTwo(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleDateChangeTwo = (date) => {
    setSelectedDateTwo(date);
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
  const options = [
    { value: 1, label: "Select Department" },
    { value: 2, label: "Designing" },
    { value: 3, label: "Development" },
    { value: 4, label: "Finance" },
    { value: 5, label: "Hr & Finance" },
  ];

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Breadcrumbs
          maintitle="Employee Report"
          title="Dashboard"
          subtitle="Employee Report"
        />

        <div className="row filter-row space">
          <div className="col-sm-6 col-md-3">
            <div
              className={
                focused || inputValue !== ""
                  ? "input-block form-focus focused"
                  : "input-block form-focus"
              }
            >
              <input
                type="text"
                className="form-control floating"
                value={inputValue}
                onFocus={handleLabelClick}
                onBlur={handleInputBlur}
                onChange={handleInputChange}
              />
              <label className="focus-label" onClick={handleLabelClick}>
                Employee
              </label>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="input-block form-focus select-focus">
              <Select
                placeholder="Select Department"
                onChange={setSelectedOption}
                options={options}
                className="select floating"
                styles={customStyles}
              />
              <label className="focus-label">Department</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div
              className={`input-block mb-3 form-focus ${
                isFocused ? "focused" : ""
              }`}
            >
              <div className="cal-icon focused ">
                <DatePicker
                  className="form-control floating datetimepicker"
                  selected={selectedDate}
                  onChange={handleDateChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  dateFormat="dd-MM-yyyy"
                />
              </div>
              <label className="focus-label">From</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div
              className={`input-block mb-3 form-focus ${
                dateTwo ? "focused" : ""
              }`}
            >
              <div className="cal-icon">
                <DatePicker
                  className="form-control floating datetimepicker"
                  selected={selectedDateTwo}
                  onChange={handleDateChangeTwo}
                  onFocus={handleFocustwo}
                  onBlur={handleBlurtwo}
                  dateFormat="dd-MM-yyyy"
                />
              </div>
              <label className="focus-label">To</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <Link to="#" className="btn btn-success btn-block w-100">
              {" "}
              Search{" "}
            </Link>
          </div>
        </div>

        <EmployeeReportTable />
      </div>
    </div>
  );
};

export default EmployeeReport;

import React, { useState } from "react";

import Breadcrumbs from "../../../../../components/Breadcrumbs";
import { Link } from "react-router-dom";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddSalaryModal from "../../../../../components/modelpopup/AddSalaryModal";
import SalaryTable from "./SalaryTable";

const EmployeeSalary = () => {
  const [setSelectedOption] = useState(null);
  const [setSelecttwo] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateTwo, setSelectedDateTwo] = useState(null);

  const [dateTwo, setdateTwo] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
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
  const options = [
    { value: "--Select--", label: "--Select--" },
    { value: "Employee", label: "Employee" },
    { value: "Manager", label: "Manager" },
  ];

  const optionsTwo = [
    { value: "--Select--", label: "--Select--" },
    { value: "Cash", label: "Cash" },
    { value: "Cheque", label: "Cheque" },
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
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Employee Salary"
            title="Dashboard"
            subtitle="Salary"
            modal="#add_salary"
            name="Add Salary"
          />

          <div className="row filter-row">
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
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
                  Employee Name
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="input-block mb-3 form-focus select-focus">
                <Select
                  placeholder="--Select--"
                  onChange={setSelectedOption}
                  options={options}
                  className="select floating"
                  styles={customStyles}
                />
                <label className="focus-label">Purchased By</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="input-block mb-3 form-focus select-focus">
                <Select
                  placeholder="--Select--"
                  onChange={setSelecttwo}
                  options={optionsTwo}
                  className="select floating"
                  styles={customStyles}
                />
                <label className="focus-label">Paid By</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
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
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div
                className={`input-block mb-3 form-focus ${
                  dateTwo ? "focused" : ""
                }`}
              >
                <div className="cal-icon">
                  <DatePicker
                    className="form-control floating datetimepicker "
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
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <Link to="#" className="btn btn-success w-100">
                {" "}
                Search{" "}
              </Link>
            </div>
          </div>

          <SalaryTable />
        </div>
      </div>
      <AddSalaryModal />
    </>
  );
};

export default EmployeeSalary;

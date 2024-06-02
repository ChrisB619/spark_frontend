import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import Select from "react-select";

const AssetsSearchFilter = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateTwo, setSelectedDateTwo] = useState(null);

  const [isFocused, setIsFocused] = useState(false);
  const [dateTwo, setdateTwo] = useState(false);
  const [setSelectedOption] = useState(null);
  const [itemFocus, setItemFocus] = useState(false);

  const inputFocus = () => {
    setItemFocus(true);
  };

  const inputBlur = () => {
    setItemFocus(false);
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
    { value: 1, label: "--Select--" },
    { value: 2, label: "Pending" },
    { value: 3, label: "Approved" },
    { value: 4, label: "Returned" },
  ];

  return (
    <div>
      <div className="row filter-row space">
        <div className="col-sm-6 col-md-3">
          <div
            className={`input-block mb-3 form-focus  ${
              itemFocus ? "focused" : ""
            } `}
          >
            <input
              type="text"
              className="form-control floating"
              onFocus={inputFocus}
              onBlur={inputBlur}
            />
            <label className="focus-label">Employee Name</label>
          </div>
        </div>

        <div className="col-sm-6 col-md-3">
          <div className="input-block form-focus select-focus">
            <Select
              placeholder="--Select--"
              onChange={setSelectedOption}
              options={options}
              className="select floating"
              styles={customStyles}
            />
            <label className="focus-label">Department</label>
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
          <Link to="#" className="btn btn-success btn-block w-100">
            {" "}
            Search{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssetsSearchFilter;

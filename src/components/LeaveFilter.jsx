import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";

const LeaveFilter = () => {
  const [setSelectedOption] = useState(null);
  const [setSelecttwo] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateTwo, setSelectedDateTwo] = useState(null);

  const [dateTwo, setdateTwo] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
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
  const leave = [
    { value: 1, label: "Casual Leave" },
    { value: 2, label: "Medical Leave" },
    { value: 3, label: "Loss of Pay" },
  ];
  const leavestatus = [
    { value: 1, label: "Approved" },
    { value: 2, label: "Pending" },
    { value: 3, label: "Decline" },
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
      {/* Search Filter */}
      <div className="row filter-row">
        <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
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
        <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
          <div className="input-block mb-3 form-focus select-focus">
            <Select
              options={leave}
              onChange={setSelectedOption}
              placeholder="--Select--"
              styles={customStyles}
            />
            <label className="focus-label">Leave Type</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
          <div className="input-block mb-3 form-focus select-focus">
            <Select
              options={leavestatus}
              onChange={setSelecttwo}
              placeholder="--Select--"
              styles={customStyles}
            />
            <label className="focus-label">Leave Status</label>
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
            search
          </Link>
        </div>
      </div>
      {/* /Search Filter */}
    </div>
  );
};

export default LeaveFilter;

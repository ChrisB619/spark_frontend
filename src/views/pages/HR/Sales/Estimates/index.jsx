import React, { useState } from "react";
import Breadcrumbs from "../../../../../components/Breadcrumbs";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import EstimatesTable from "./estimatesTable";
import DeleteModal from "../../../../../components/modelpopup/DeleteModal";

const Estimates = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const [dateTwo, setdateTwo] = useState(false);
  const [setSelectedOption] = useState(null);
  const [selectedDateTwo, setSelectedDateTwo] = useState(null);

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
    { value: "Accepted", label: "Accepted" },
    { value: "Declined", label: "Declined" },
    { value: "Expired", label: "Expired" },
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
            maintitle="Estimates"
            title="Dashboard"
            subtitle="Estimates"
            modal="#"
            name="Create Estimate"
            link="/create-estimate"
          />

          <div className="row filter-row">
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
            <div className="col-sm-6 col-md-3">
              <div className="input-block mb-3 form-focus select-focus">
                <Select
                  placeholder="Select Status"
                  onChange={setSelectedOption}
                  options={options}
                  styles={customStyles}
                />
                <label className="focus-label">Status</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <Link to="#" className="btn btn-success w-100">
                Search
              </Link>
            </div>
          </div>

          <EstimatesTable />
        </div>
      </div>
      <DeleteModal Name="Delete Estimate" />
    </>
  );
};

export default Estimates;

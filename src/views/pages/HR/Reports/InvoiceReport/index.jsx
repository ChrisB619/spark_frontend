import React, { useState } from "react";
import Breadcrumbs from "../../../../../components/Breadcrumbs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { Link } from "react-router-dom";
import InvoiceReportTable from "./InvoiceReportTable";

const InvoiceReport = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateTwo, setSelectedDateTwo] = useState(null);

  const [isFocused, setIsFocused] = useState(false);
  const [dateTwo, setdateTwo] = useState(false);
  const [setSelectedOption] = useState(null);

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
    { value: "Select Client", label: "Select Client" },
    { value: "Global Technologies", label: "Global Technologies" },
    { value: "Delta Infotech", label: "Delta Infotech" },
  ];

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Breadcrumbs
          maintitle="Invoice Report"
          title="Dashboard"
          subtitle="Invoice Report"
        />
        <div className="row filter-row">
          <div className="col-sm-6 col-md-3">
            <div className="input-block form-focus select-focus">
              <Select
                placeholder="Select Buyer"
                onChange={setSelectedOption}
                options={options}
                className="select floating"
                styles={customStyles}
              />
              <label className="focus-label">Purchased By</label>
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

        <InvoiceReportTable />
      </div>
    </div>
  );
};

export default InvoiceReport;

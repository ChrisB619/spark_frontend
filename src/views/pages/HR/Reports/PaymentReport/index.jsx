import React, { useState } from "react";

import Breadcrumbs from "../../../../../components/Breadcrumbs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import PaymentReportTable from "./PaymentReportTable";

const PaymentReport = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateTwo, setSelectedDateTwo] = useState(null);

  const [isFocused, setIsFocused] = useState(false);
  const [dateTwo, setdateTwo] = useState(false);

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

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Breadcrumbs
          maintitle="Payments Report"
          title="Dashboard"
          subtitle="Payments Report"
        />
        <div className="row filter-row">
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

        <PaymentReportTable />
      </div>
    </div>
  );
};

export default PaymentReport;

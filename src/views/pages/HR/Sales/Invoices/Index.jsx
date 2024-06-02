import React, { useState } from "react";
import Breadcrumbs from "../../../../../components/Breadcrumbs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { Link } from "react-router-dom";
import InvoiceTable from "./invoiceTable";
import DeleteModal from "../../../../../components/modelpopup/DeleteModal";

const Invoices = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [selectedDateTwo, setSelectedDateTwo] = useState();

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

  const options = [
    { value: "Select Status", label: "Select Status" },
    { value: "Pending", label: "Pending" },
    { value: "Paid", label: "Paid" },
    { value: "Partially Paid", label: "Partially Paid" },
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
            maintitle="Invoices"
            title="Dashboard"
            subtitle="Invoices"
            modal="#"
            name="Create Invoice"
            link="/create-invoice"
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

          <InvoiceTable />
        </div>
      </div>
      <DeleteModal Name="Delete Invoice" />
    </>
  );
};

export default Invoices;

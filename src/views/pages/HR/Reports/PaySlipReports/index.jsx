import React, { useState } from "react";

import Breadcrumbs from "../../../../../components/Breadcrumbs";
import { Link } from "react-router-dom";

import Select from "react-select";
import PaySlipReportTable from "./PaySlipReportTable";

const PaySlipReports = () => {
  const [setSelectedOption] = useState(null);
  const [setSelectedOptionTwo] = useState(null);
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
    { value: 1, label: "Jan" },
    { value: 2, label: "Feb" },
    { value: 3, label: "March" },
  ];
  const optionsTwo = [
    { value: 1, label: "2021" },
    { value: 2, label: "2022" },
    { value: 3, label: "2023" },
  ];

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Breadcrumbs
          maintitle="Payslip Reports"
          title="Dashboard"
          subtitle="Payslip Reports"
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
                Payslip Reports
              </label>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="input-block form-focus select-focus">
              <Select
                placeholder="Jan"
                onChange={setSelectedOption}
                options={options}
                className="select floating"
                styles={customStyles}
              />
              <label className="focus-label">Month</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="input-block form-focus select-focus">
              <Select
                placeholder="2018"
                onChange={setSelectedOptionTwo}
                options={optionsTwo}
                className="select floating"
                styles={customStyles}
              />
              <label className="focus-label">Year</label>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <Link to="#" className="btn btn-success btn-block w-100">
              {" "}
              Search{" "}
            </Link>
          </div>
        </div>

        <PaySlipReportTable />
      </div>
    </div>
  );
};

export default PaySlipReports;

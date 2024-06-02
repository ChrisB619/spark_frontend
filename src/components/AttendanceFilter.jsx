import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Select from "react-select";

const AttendanceFilter = () => {
    const [focused, setFocused] = useState(false);
    const month = [
      { value: 1, label: "Jan" },
      { value: 2, label: "Feb" },
      { value: 3, label: "Mar" },
      { value: 4, label: "Apr" },
      { value: 5, label: "May" },
      { value: 6, label: "June" },
    ];
    const year = [
      { value: 1, label: "2023" },
      { value: 2, label: "2022" },
      { value: 3, label: "2021" },
      { value: 4, label: "2020" },
      { value: 5, label: "2023" },
      { value: 6, label: "2018" },
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
                <label className="focus-label">Employee Name</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="input-block form-focus select-focus">
                <Select
                  options={month}
                  placeholder="Select"
                  styles={customStyles}
                />

                <label className="focus-label">Select Month</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="input-block form-focus select-focus">
                <Select
                  options={year}
                  placeholder="Select"
                  styles={customStyles}
                />

                <label className="focus-label">Select Year</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <Link to="#" className="btn btn-success btn-block w-100">
                Search
              </Link>
            </div>
          </div>
          {/* /Search Filter */}
    </>
  );
}

export default AttendanceFilter;

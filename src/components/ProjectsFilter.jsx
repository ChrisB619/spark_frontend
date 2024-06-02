import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from "react-select";

const ProjectsFilter = () => {
    const [focusedClientId, setFocusedClientId] = useState(false);
    const [inputValueClientId, setInputValueClientId] = useState("");
    const [focusedEmployeeName, setFocusedEmployeeName] = useState(false);
    const [inputValueEmployeeName, setInputValueEmployeeName] = useState("");
  
    const handleLabelClickClientId = () => {
      setFocusedClientId(true);
    };
  
    const handleInputBlurClientId = () => {
      if (inputValueClientId === "") {
        setFocusedClientId(false);
      }
    };
  
    const handleInputChangeClientId = (e) => {
      const value = e.target.value;
      setInputValueClientId(value);
      if (value !== "" && !focusedClientId) {
        setFocusedClientId(true);
      }
    };
  
    const handleLabelClickEmployeeName = () => {
      setFocusedEmployeeName(true);
    };
  
    const handleInputBlurEmployeeName = () => {
      if (inputValueEmployeeName === "") {
        setFocusedEmployeeName(false);
      }
    };
  
    const handleInputChangeEmployeeName = (e) => {
      const value = e.target.value;
      setInputValueEmployeeName(value);
      if (value !== "" && !focusedEmployeeName) {
        setFocusedEmployeeName(true);
      }
    };
  
    const companies = [
      { value: 1, label: "Select Designation" },
      { value: 2, label: "Web Developer" },
      { value: 3, label: "Web Designer" },
      { value: 4, label: "Android Developer" },
      { value: 5, label: "IOS Developer" },
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
      <div className="row filter-row">
            <div className="col-sm-6 col-md-3">
              <div
                className={
                  focusedClientId
                    ? "input-block form-focus focused"
                    : "input-block form-focus"
                }
              >
                <input
                  type="text"
                  className="form-control floating"
                  value={inputValueClientId}
                  onFocus={handleLabelClickClientId}
                  onBlur={handleInputBlurClientId}
                  onChange={handleInputChangeClientId}
                />
                <label
                  className="focus-label"
                  onClick={handleLabelClickClientId}
                >
                  Client ID
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div
                className={
                  focusedEmployeeName
                    ? "input-block form-focus focused"
                    : "input-block form-focus"
                }
              >
                <input
                  type="text"
                  className="form-control floating"
                  value={inputValueEmployeeName}
                  onFocus={handleLabelClickEmployeeName}
                  onBlur={handleInputBlurEmployeeName}
                  onChange={handleInputChangeEmployeeName}
                />
                <label
                  className="focus-label"
                  onClick={handleLabelClickEmployeeName}
                >
                  Employee Name
                </label>
              </div>
            </div>

            <div className="col-sm-6 col-md-3">
              <div className="input-block form-focus select-focus">
                <Select
                  options={companies}
                  placeholder="Select Designation"
                  styles={customStyles}
                />
                <label className="focus-label">Company</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <Link to="#" className="btn btn-success btn-block w-100">
                Search
              </Link>
            </div>
          </div>
    </>
  );
}

export default ProjectsFilter;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

const EmployeeListFilter = () => {
  const employee = [
    { value: 1, label: "John Deo" },
    { value: 2, label: "Richard Miles" },
    { value: 3, label: "John Smith" },
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
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [focused, setFocused] = useState(false);
  const [focused1, setFocused1] = useState(false);

  const handleLabelClick = () => {
    setFocused(true);
  };

  const handleLabelClick2 = () => {
    setFocused1(true);
  };

  const handleInputBlur = () => {
    if (inputValue === "") {
      setFocused(false);
    }
  };

  const handleInputBlur2 = () => {
    if (inputValue1 === "") {
      setFocused1(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value !== "" && !focused) {
      setFocused(true);
    }
  };

  const handleInputChange2 = (e) => {
    const value = e.target.value;
    setInputValue1(value);
    if (value !== "" && !focused1) {
      setFocused1(true);
    }
  };

  return (
    <div>
      <div className="row filter-row">
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
              Employee ID
            </label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div
            className={
              focused1 || inputValue1 !== ""
                ? "input-block form-focus focused"
                : "input-block form-focus"
            }
          >
            <input
              type="text"
              className="form-control floating"
              value={inputValue1}
              onFocus={handleLabelClick2}
              onBlur={handleInputBlur2}
              onChange={handleInputChange2}
            />
            <label className="focus-label" onClick={handleLabelClick2}>
              Employee Name
            </label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="input-block form-focus select-focus">
            <Select
              options={employee}
              placeholder="Select Designation"
              styles={customStyles}
            />
            <label className="focus-label">Designation</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <Link to="#" className="btn btn-success btn-block w-100">
            Search
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployeeListFilter;

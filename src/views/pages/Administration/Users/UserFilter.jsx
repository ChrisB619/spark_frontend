import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

const UserFilter = () => {
  const [setSelectedOption] = useState(null);
  const [setSelectedOptionTwo] = useState(null);

  const [itemFocus, setItemFocus] = useState(false);

  const inputFocus = () => {
    setItemFocus(true);
  };

  const inputBlur = () => {
    setItemFocus(false);
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
    { value: 1, label: "Select Company" },
    { value: 2, label: "Global Technologies" },
    { value: 3, label: "Delta Infotech" },
  ];
  const optionsTwo = [
    { value: 1, label: "Select Role" },
    { value: 2, label: "Web Developer" },
    { value: 3, label: "Web Designer" },
    { value: 4, label: "Andriod Developer" },
    { value: 5, label: "IOS Developer" },
  ];
  return (
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
          <label className="focus-label">Name</label>
        </div>
      </div>

      <div className="col-sm-6 col-md-3">
        <div className="input-block form-focus select-focus">
          <Select
            placeholder="Select Company"
            onChange={setSelectedOption}
            options={options}
            className="select floating"
            styles={customStyles}
          />
          <label className="focus-label">Company</label>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="input-block form-focus select-focus">
          <Select
            placeholder="Select Role"
            onChange={setSelectedOptionTwo}
            options={optionsTwo}
            className="select floating"
            styles={customStyles}
          />
          <label className="focus-label">Role</label>
        </div>
      </div>

      <div className="col-sm-6 col-md-3">
        <Link to="#" className="btn btn-success btn-block w-100">
          {" "}
          Search{" "}
        </Link>
      </div>
    </div>
  );
};

export default UserFilter;

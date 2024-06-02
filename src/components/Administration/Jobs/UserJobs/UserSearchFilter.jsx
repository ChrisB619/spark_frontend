import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

const UserSearchFilter = () => {
  const [setSelectedOption] = useState(null);
  const [setSelectedOptionTwo] = useState(null);
  const [setSelectedOptionThree] = useState(null);

  const options = [
    { value: "1", label: "Select" },
    { value: "2", label: "Development" },
    { value: "3", label: "Designing" },
    { value: "4", label: "Android" },
  ];
  const optionsTwo = [
    { value: "1", label: "Select" },
    { value: "2", label: "Full Time" },
    { value: "2", label: "Part " },
    { value: "2", label: "Pending" },
  ];

  const optionsThree = [
    { value: "1", label: "Select Designation" },
    { value: "2", label: "Web Developer" },
    { value: "3", label: "Web Designer" },
    { value: "4", label: "Android Developer" },
    { value: "5", label: "IOS Developer" },
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
    <div className="row filter-row">
      <div className="col-sm-6 col-md-3">
        <div className="input-block mb-3 form-focus select-focus">
          <Select
            placeholder="Select"
            onChange={setSelectedOption}
            options={options}
            styles={customStyles}
          />
          <label className="focus-label">Department</label>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="input-block mb-3 form-focus select-focus">
          <Select
            placeholder="Select"
            onChange={setSelectedOptionTwo}
            options={optionsTwo}
            styles={customStyles}
          />
          <label className="focus-label">Job Type</label>
        </div>
      </div>

      <div className="col-sm-6 col-md-3">
        <div className="input-block mb-3 form-focus select-focus">
          <Select
            placeholder="Select Designation"
            onChange={setSelectedOptionThree}
            options={optionsThree}
            styles={customStyles}
          />
          <label className="focus-label">Designation</label>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <Link to="#" className="btn btn-success w-100">
          Search
        </Link>
      </div>
    </div>
  );
};

export default UserSearchFilter;

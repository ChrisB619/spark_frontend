import React, { useState } from "react";
import Breadcrumbs from "../../../../../components/Breadcrumbs";
import Select from "react-select";
import { Link } from "react-router-dom";
import UserReportTable from "./UserReportTable";

const UserReport = () => {
  const [setSelectedOption] = useState(null);

  const options = [
    { value: "1", label: "Name 1" },
    { value: "2", label: "Name 2" },
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
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Breadcrumbs
          maintitle="User Report"
          title="Dashboard"
          subtitle="User Report"
        />

        <div className="row filter-row">
          <div className="col-sm-6 col-md-3">
            <div className="input-block mb-3 form-focus select-focus">
              <Select
                placeholder="Name 1"
                onChange={setSelectedOption}
                options={options}
                styles={customStyles}
              />
              <label className="focus-label">Project Name</label>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <Link to="#" className="btn btn-success w-100">
              Search
            </Link>
          </div>
        </div>

        <UserReportTable />
      </div>
    </div>
  );
};

export default UserReport;

import React, { useState } from "react";
import Breadcrumbs from "../../../../../components/Breadcrumbs";
import Select from "react-select";
import { Link } from "react-router-dom";
import ProjectReportTable from "./ProjectReportTable";

const ProjectReport = () => {
  const [setSelectedOption] = useState(null);
  const [setSelectedOptionTwo] = useState(null);

  const options = [
    { value: "1", label: "Name 1" },
    { value: "2", label: "Name 2" },
  ];
  const optionsTwo = [
    { value: "1", label: "Active" },
    { value: "2", label: "Pending" },
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
          maintitle="Project Reports"
          title="Dashboard"
          subtitle="Project Reports"
          modal="#"
          name="Create Invoice"
          link="/create-invoice"
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
            <div className="input-block mb-3 form-focus select-focus">
              <Select
                placeholder="Select Status"
                onChange={setSelectedOptionTwo}
                options={optionsTwo}
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

        <ProjectReportTable />
      </div>
    </div>
  );
};

export default ProjectReport;

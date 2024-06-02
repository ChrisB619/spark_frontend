import React, { useState } from "react";
import {
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_16,
} from "../../Routes/ImagePath";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import Select from "react-select";
import DefaultEditor from "react-simple-wysiwyg";
const ProjectModelPopup = () => {
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  const companies = [
    { value: 1, label: "Global Technologies" },
    { value: 2, label: "InfoTech View" },
  ];
  const status = [
    { value: 1, label: "High" },
    { value: 2, label: "Medium" },
    { value: 3, label: "Low" },
  ];
  const rate = [
    { value: 1, label: "Hourly" },
    { value: 2, label: "Fixed" },
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

  const [html, setHtml] = React.useState("my <b>HTML</b>");

  function onChange(e) {
    setHtml(e.target.value);
  }
  return (
    <>
      <div
        id="create_project"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Project</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Project Name</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Client</label>
                      <Select
                        options={companies}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Start Date</label>
                      <div className="cal-icon">
                        <DatePicker
                          selected={selectedDate1}
                          onChange={handleDateChange1}
                          className="form-control datetimepicker"
                          type="date"
                          dateFormat="dd-MM-yyyy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">End Date</label>
                      <div className="cal-icon">
                        <DatePicker
                          selected={selectedDate2}
                          onChange={handleDateChange2}
                          className="form-control datetimepicker"
                          type="date"
                          dateFormat="dd-MM-yyyy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Rate</label>
                      <input
                        placeholder="$50"
                        className="form-control"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="input-block mb-3">
                      <label className="col-form-label">&nbsp;</label>
                      <Select
                        options={rate}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Priority</label>
                      <Select
                        options={status}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Add Project Leader
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Team Leader</label>
                      <div className="project-members">
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="Jeffery Lalor"
                          className="avatar"
                        >
                          <img src={Avatar_16} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Add Team</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Team Members</label>
                      <div className="project-members">
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="John Doe"
                          className="avatar"
                        >
                          <img src={Avatar_16} alt="" />
                        </Link>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="Richard Miles"
                          className="avatar"
                        >
                          <img src={Avatar_09} alt="" />
                        </Link>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="John Smith"
                          className="avatar"
                        >
                          <img src={Avatar_10} alt="" />
                        </Link>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="Mike Litorus"
                          className="avatar"
                        >
                          <img src={Avatar_05} alt="" />
                        </Link>
                        <span className="all-team">+2</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">Description</label>
                  <DefaultEditor value={html} onChange={onChange} />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">Upload Files</label>
                  <input className="form-control" type="file" />
                </div>
                <div className="submit-section">
                  <button
                    className="btn btn-primary submit-btn"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    type="reset"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div id="edit_project" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Project</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Project Name</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Client</label>
                      <Select
                        options={companies}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Start Date</label>
                      <div className="cal-icon">
                        <DatePicker
                          selected={selectedDate1}
                          onChange={handleDateChange1}
                          className="form-control datetimepicker"
                          type="date"
                          dateFormat="dd-MM-yyyy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">End Date</label>
                      <div className="cal-icon">
                        <DatePicker
                          selected={selectedDate2}
                          onChange={handleDateChange2}
                          className="form-control datetimepicker"
                          type="date"
                          dateFormat="dd-MM-yyyy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Rate</label>
                      <input
                        placeholder="$50"
                        className="form-control"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="input-block mb-3">
                      <label className="col-form-label">&nbsp;</label>
                      <Select
                        options={rate}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Priority</label>
                      <Select
                        options={status}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Add Project Leader
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Team Leader</label>
                      <div className="project-members">
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="Jeffery Lalor"
                          className="avatar"
                        >
                          <img src={Avatar_16} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Add Team</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Team Members</label>
                      <div className="project-members">
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="John Doe"
                          className="avatar"
                        >
                          <img src={Avatar_16} alt="" />
                        </Link>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="Richard Miles"
                          className="avatar"
                        >
                          <img src={Avatar_09} alt="" />
                        </Link>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="John Smith"
                          className="avatar"
                        >
                          <img src={Avatar_10} alt="" />
                        </Link>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="Mike Litorus"
                          className="avatar"
                        >
                          <img src={Avatar_05} alt="" />
                        </Link>
                        <span className="all-team">+2</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">Description</label>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">Upload Files</label>
                  <input className="form-control" type="file" />
                </div>
                <div className="submit-section">
                  <button
                    className="btn btn-primary submit-btn"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    type="reset"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModelPopup;

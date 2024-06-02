import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PerformanceAppraisalModal = () => {
  const selectoptions = [
    { label: "None", value: "option1" },
    { label: "Beginner", value: "option2" },
    { label: "Intermediate", value: "option3" },
    { label: "Advanced", value: "option4" },
    { label: "Expert / Leader", value: "option5" },
  ];
  const selectActive = [
    { label: "Active", value: "option1" },
    { label: "Inactive", value: "option2" },
  ];
  const selectEmployee = [
    { label: "Select Employee", value: "option1" },
    { label: "John Doe", value: "option2" },
    { label: "Mike Litorus", value: "option3" },
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
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };
  return (
    <>
      {/* Add Performance Appraisal Modal */}
      <div id="add_appraisal" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Give Performance Appraisal</h5>
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
                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Employee</label>
                      <Select
                        options={selectEmployee}
                        placeholder="Select Employee"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label>
                        Select Date <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <DatePicker
                          selected={selectedDate1}
                          onChange={handleDateChange1}
                          className="form-control floating datetimepicker"
                          type="date"
                          dateFormat="dd-MM-yyyy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="tab-box">
                          <div className="row user-tabs">
                            <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                              <ul className="nav nav-tabs nav-tabs-solid">
                                <li className="nav-item">
                                  <Link
                                    to="#appr_technical"
                                    data-bs-toggle="tab"
                                    className="nav-link active"
                                  >
                                    Technical
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="#appr_organizational"
                                    data-bs-toggle="tab"
                                    className="nav-link"
                                  >
                                    Organizational
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="tab-content">
                          <div
                            id="appr_technical"
                            className="pro-overview tab-pane fade show active"
                          >
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="bg-white">
                                  <table className="table">
                                    <thead>
                                      <tr>
                                        <th colSpan={2}>
                                          Technical Competencies
                                        </th>
                                        <th colSpan={2}>Expected Value</th>
                                        <th>Set Value</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td colSpan={2}>Customer Experience</td>
                                        <td colSpan={2}>Intermediate</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>Marketing</td>
                                        <td colSpan={2}>Advanced</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>Management</td>
                                        <td colSpan={2}>Advanced</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>Administration</td>
                                        <td colSpan={2}>Advanced</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>Presentation Skill</td>
                                        <td colSpan={2}>Expert / Leader</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>Quality Of Work</td>
                                        <td colSpan={2}>Expert / Leader</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>Efficiency</td>
                                        <td colSpan={2}>Expert / Leader</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="appr_organizational"
                          >
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="bg-white">
                                  <table className="table">
                                    <thead>
                                      <tr>
                                        <th colSpan={5}>
                                          Organizational Competencies
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th colSpan={2}>Indicator</th>
                                        <th colSpan={2}>Expected Value</th>
                                        <th>Set Value</th>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>Integrity</td>
                                        <td colSpan={2}>Beginner</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>Professionalism</td>
                                        <td colSpan={2}>Beginner</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>Team Work</td>
                                        <td colSpan={2}>Intermediate</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>Critical Thinking</td>
                                        <td colSpan={2}>Advanced</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>Conflict Management</td>
                                        <td colSpan={2}>Intermediate</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>Attendance</td>
                                        <td colSpan={2}>Intermediate</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>
                                          Ability To Meet Deadline
                                        </td>
                                        <td colSpan={2}>Advanced</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Status</label>
                      <Select
                        options={selectActive}
                        placeholder="Active"
                        styles={customStyles}
                      />
                    </div>
                  </div>
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
      {/* /Add Performance Appraisal Modal */}
      {/* Edit Performance Appraisal Modal */}
      <div
        id="edit_appraisal"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Performance Appraisal</h5>
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
                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Employee</label>
                      <Select
                        options={selectEmployee}
                        placeholder="Select Employee"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label>
                        Select Date <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <DatePicker
                          selected={selectedDate2}
                          onChange={handleDateChange2}
                          className="form-control floating datetimepicker"
                          type="date"
                          dateFormat="dd-MM-yyyy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="tab-box">
                          <div className="row user-tabs">
                            <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                              <ul className="nav nav-tabs nav-tabs-solid">
                                <li className="nav-item">
                                  <Link
                                    to="#appr_technical1"
                                    data-bs-toggle="tab"
                                    className="nav-link active"
                                  >
                                    Technical
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    to="#appr_organizational1"
                                    data-bs-toggle="tab"
                                    className="nav-link"
                                  >
                                    Organizational
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="tab-content">
                          <div
                            id="appr_technical1"
                            className="pro-overview tab-pane fade show active"
                          >
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="bg-white">
                                  <table className="table">
                                    <thead>
                                      <tr>
                                        <th colSpan={5}>
                                          Technical Competencies
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th colSpan={2}>Indicator</th>
                                        <th colSpan={2}>Expected Value</th>
                                        <th>Set Value</th>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>Customer Experience</td>
                                        <td colSpan={2}>Intermediate</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>Marketing</td>
                                        <td colSpan={2}>Advanced</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>Management</td>
                                        <td colSpan={2}>Advanced</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>Administration</td>
                                        <td colSpan={2}>Advanced</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>Presentation Skill</td>
                                        <td colSpan={2}>Expert / Leader</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>Quality Of Work</td>
                                        <td colSpan={2}>Expert / Leader</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>Efficiency</td>
                                        <td colSpan={2}>Expert / Leader</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="appr_organizational1"
                          >
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="bg-white">
                                  <table className="table">
                                    <thead>
                                      <tr>
                                        <th colSpan={5}>
                                          Organizational Competencies
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th colSpan={2}>Indicator</th>
                                        <th colSpan={2}>Expected Value</th>
                                        <th>Set Value</th>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>Integrity</td>
                                        <td colSpan={2}>Beginner</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>Professionalism</td>
                                        <td colSpan={2}>Beginner</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>Team Work</td>
                                        <td colSpan={2}>Intermediate</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>Critical Thinking</td>
                                        <td colSpan={2}>Advanced</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>Conflict Management</td>
                                        <td colSpan={2}>Intermediate</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>Attendance</td>
                                        <td colSpan={2}>Intermediate</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colSpan={2}>
                                          Ability To Meet Deadline
                                        </td>
                                        <td colSpan={2}>Advanced</td>
                                        <td>
                                          <Select
                                            options={selectoptions}
                                            placeholder="None"
                                            styles={customStyles}
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Status</label>
                      <Select
                        options={selectActive}
                        placeholder="Active"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button
                    className="btn btn-primary submit-btn"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    type="reset"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Performance Appraisal Modal */}
    </>
  );
};

export default PerformanceAppraisalModal;

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

const AddJobResumes = () => {
  const [setSelectedOption] = useState(null);
  const [setSelectedOptionTwo] = useState(null);
  const [setSelectedOptionThree] = useState(null);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  const options = [
    { label: "-", value: "-" },
    { label: "Web Development", value: "Web Development" },
    { label: "Application Development", value: "Application Development" },
    { label: "IT Management", value: "IT Management" },
    { label: "Accounts Management", value: "Accounts Management" },
    { label: "Support Management", value: "Support Management" },
    { label: "Marketing", value: "Marketing" },
  ];
  const optionsTwo = [
    { value: "Full Time", label: "Full Time" },
    { value: "Part Time", label: "Part Time" },
    { value: "Internship", label: "Internship" },
    { value: "Temporary", label: "Temporary" },
    { value: "Remote", label: "Remote" },
    { value: "Others", label: "Others" },
  ];

  const optionsThree = [
    { value: "Open", label: "Open" },
    { value: "Closed", label: "Closed" },
    { value: "Cancelled", label: "Cancelled" },
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
      <div
        id="edit_jobresumes"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Job</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>Job Title</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="Web Developer"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>Department</label>
                      <Select
                        placeholder="Web Development"
                        onChange={setSelectedOption}
                        options={options}
                        styles={customStyles}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>Job Location</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="California"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>No of Vacancies</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={5}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>Experience</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="2 Years"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>Age</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="-"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>Salary From</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="32k"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>Salary To</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="38k"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>Job Type</label>
                      <Select
                        placeholder="Select"
                        onChange={setSelectedOptionTwo}
                        options={optionsTwo}
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>Status</label>
                      <Select
                        placeholder="Select Designation"
                        onChange={setSelectedOptionThree}
                        options={optionsThree}
                        styles={customStyles}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>Start Date</label>
                      <div className="cal-icon">
                        <DatePicker
                          selected={selectedDate1}
                          onChange={handleDateChange1}
                          className="form-control datetimepicker"
                          type="date"
                          dateFormat="dd-MM-yyyy"
                        />
                      </div>{" "}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>Expired Date</label>
                      <div className="cal-icon">
                        <DatePicker
                          selected={selectedDate2}
                          onChange={handleDateChange2}
                          className="form-control datetimepicker"
                          type="date"
                          dateFormat="dd-MM-yyyy"
                        />
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="input-block">
                      <label>Description</label>
                      <textarea className="form-control" defaultValue={""} />
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
    </>
  );
};

export default AddJobResumes;

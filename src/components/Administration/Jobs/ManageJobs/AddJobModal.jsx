import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddJobModal = () => {
  const [setSelectedOption] = useState(null);
  const [setSelectedOptionTwo] = useState(null);
  const [setSelectedOptionThree] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateTwo, setSelectedDateTwo] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleDateChangeTwo = (date) => {
    setSelectedDateTwo(date);
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
      <div id="add_job" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Job</h5>
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
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Job Title</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Department</label>
                      <Select
                        placeholder="Select"
                        onChange={setSelectedOption}
                        options={options}
                        styles={customStyles}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Job Location</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">No of Vacancies</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Experience</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Age</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Salary From</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Salary To</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Job Type</label>
                      <Select
                        placeholder="Select"
                        onChange={setSelectedOptionTwo}
                        options={optionsTwo}
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Status</label>
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
                    <div className="input-block mb-3">
                      <label className="col-form-label">Start Date</label>
                      <DatePicker
                        className="form-control floating datetimepicker"
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="dd-MM-yyyy"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Expired Date</label>
                      <DatePicker
                        className="form-control floating datetimepicker "
                        selected={selectedDateTwo}
                        onChange={handleDateChangeTwo}
                        dateFormat="dd-MM-yyyy"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Description</label>
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

export default AddJobModal;

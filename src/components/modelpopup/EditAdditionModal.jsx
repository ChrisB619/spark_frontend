import React, { useState } from "react";
import Select from "react-select";

const EditAdditionModal = () => {
  const [setselectOne] = useState(null);
  const [setselectTwo] = useState(null);

  const optionsOne = [
    { value: 1, label: "Select a category" },
    { value: 2, label: "Monthly remuneration" },
    { value: 3, label: "Additional remuneration" },
  ];

  const optionsTwo = [
    { value: 1, label: "-" },
    { value: 2, label: "Select All" },
    { value: 3, label: "John Doe" },
    { value: 3, label: "Richard Miles" },
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
      <div id="edit_addition" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Addition</h5>
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
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Name <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Category <span className="text-danger">*</span>
                  </label>
                  <Select
                    placeholder="Select a Category"
                    options={optionsOne}
                    onChange={setselectOne}
                    className="select"
                    styles={customStyles}
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="d-block col-form-label">
                    Unit calculation
                  </label>
                  <div className="status-toggle">
                    <input
                      type="checkbox"
                      id="unit_calculation"
                      className="check"
                    />
                    <label htmlFor="unit_calculation" className="checktoggle">
                      checkbox
                    </label>
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">Unit Amount</label>
                  <div className="input-group">
                    <span className="input-group-text">$</span>
                    <input type="text" className="form-control" />
                    <span className="input-group-text">.00</span>
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="d-block col-form-label">Assignee</label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="addition_assignee"
                      id="addition_no_emp"
                      defaultValue="option1"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="addition_no_emp"
                    >
                      No assignee
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="addition_assignee"
                      id="addition_all_emp"
                      defaultValue="option2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="addition_all_emp"
                    >
                      All employees
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="addition_assignee"
                      id="addition_single_emp"
                      defaultValue="option3"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="addition_single_emp"
                    >
                      Select Employee
                    </label>
                  </div>
                  <div className="input-block mb-3">
                    <Select
                      placeholder="-"
                      options={optionsTwo}
                      onChange={setselectTwo}
                      className="select"
                      styles={customStyles}
                    />
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

export default EditAdditionModal;

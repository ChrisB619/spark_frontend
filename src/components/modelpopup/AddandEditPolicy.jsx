import React, { useState } from "react";
import Select from "react-select";

const AddandEditPolicy = () => {
  const [setselectOne] = useState(null);
  const [setselectTwo] = useState(null);

  const options = [
    { value: 1, label: "All Department" },
    { value: 2, label: "Web Development" },
    { value: 3, label: "Marketing" },
    { value: 4, label: "IT Management" },
  ];

  const optionsTwo = [
    { value: 1, label: "All Department" },
    { value: 2, label: "Web Development" },
    { value: 3, label: "Marketing" },
    { value: 4, label: "IT Management" },
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
      {/* Add Policy Modal */}
      <div id="add_policy" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Policy</h5>
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
                    Policy Name <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Description <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    rows={4}
                    defaultValue={""}
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">Department</label>

                  <Select
                    placeholder="All Departments"
                    options={options}
                    onChange={setselectOne}
                    className="select"
                    styles={customStyles}
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Upload Policy <span className="text-danger">*</span>
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="policy_upload"
                  />
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
      {/* /Add Policy Modal */}
      {/* Edit Policy Modal */}
      <div id="edit_policy" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Policy</h5>
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
                    Policy Name <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="Leave Policy"
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Description <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    rows={4}
                    defaultValue={""}
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">Department</label>
                  <Select
                    placeholder="All Departments"
                    options={optionsTwo}
                    onChange={setselectTwo}
                    className="select"
                    styles={customStyles}
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Upload Policy <span className="text-danger">*</span>
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="edit_policy_upload"
                  />
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
      {/* /Edit Policy Modal */}
    </>
  );
};

export default AddandEditPolicy;

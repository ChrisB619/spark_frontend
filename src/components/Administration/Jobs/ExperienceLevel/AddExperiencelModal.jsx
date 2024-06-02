import React, { useState } from "react";
import Select from "react-select";

const AddExperiencelModal = () => {
  const [setSelectedOption] = useState(null);

  const options = [
    { value: "1", label: "Select" },
    { value: "2", label: "Active" },
    { value: "3", label: "Inactive" },
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
    <div id="add_employee" className="modal custom-modal fade" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Experience Level</h5>
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
                <div className="col-sm-12">
                  <div className="input-block">
                    <label>
                      Experience Level <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-block">
                    <label className="col-form-label">Status</label>
                    <Select
                      placeholder="Select"
                      onChange={setSelectedOption}
                      options={options}
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
  );
};

export default AddExperiencelModal;

import React, { useState } from "react";
import Select from "react-select";

const TaxModal = () => {
  const [setselectOne] = useState(null);
  const [setselectTwo] = useState(null);
  const options = [
    { value: "Pending", label: "Pending" },
    { value: "Approved", label: "Approved" },
  ];
  const optionsTwo = [
    { value: "Pending", label: "Pending" },
    { value: "Approved", label: "Approved" },
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
      {/* Add Tax Modal */}
      <div id="add_tax" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Tax</h5>
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
                    Tax Name <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Tax Percentage (%) <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Status <span className="text-danger">*</span>
                  </label>

                  <Select
                    placeholder="Pending"
                    onChange={setselectOne}
                    options={options}
                    styles={customStyles}
                    className="select"
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
      {/* /Add Tax Modal */}
      {/* Edit Tax Modal */}
      <div id="edit_tax" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Tax</h5>
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
                    Tax Name <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    defaultValue="VAT"
                    type="text"
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Tax Percentage (%) <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    defaultValue="14%"
                    type="text"
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Status <span className="text-danger">*</span>
                  </label>
                  <Select
                    placeholder="Pending"
                    onChange={setselectTwo}
                    options={optionsTwo}
                    styles={customStyles}
                    className="select"
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
      {/* /Edit Tax Modal */}
    </>
  );
};

export default TaxModal;

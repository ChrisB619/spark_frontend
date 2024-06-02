import React from "react";

const SelectTimeModal = () => {
  return (
    <div id="selectMyTime" className="modal  custom-modal fade" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        {/* Modal content*/}
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Select Your Time</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal">
              ×
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-sm-12">
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Day1 <span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-control form-select"
                    name="designations"
                    id="designations"
                  >
                    <option value>11.00am - 11.30am (24 Feb 2023) </option>
                    <option value>1.00pm - 1.30pm (25 Feb 2023) </option>
                    <option value>3.00pm - 3.30pm (26 Feb 2023) </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-btn delete-action mt-3">
              <div className="row">
                <div className="col-6">
                  <button
                    type="button"
                    className="btn btn-primary w-100 cancel-btn"
                  >
                    Submit
                  </button>
                </div>
                <div className="col-6">
                  <button
                    type="button"
                    className="btn btn-primary w-100 cancel-btn"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectTimeModal;

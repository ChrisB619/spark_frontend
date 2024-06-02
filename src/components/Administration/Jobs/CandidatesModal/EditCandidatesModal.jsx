import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditCandidatesModal = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div id="edit_employee" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Candidates</h5>
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
                    <label className="col-form-label">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Last Name</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="email" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Employee ID <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Created Date <span className="text-danger">*</span>
                    </label>
                    <div className="cal-icon">
                      <DatePicker
                        className="form-control floating datetimepicker "
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="dd-MM-yyyy"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Phone </label>
                    <input className="form-control" type="text" />
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

export default EditCandidatesModal;

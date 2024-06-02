import React from "react";

const LeaveTypeModal = () => {
  return (
    <>
      {/* Add Leavetype Modal */}
      <div id="add_leavetype" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Leave Type</h5>
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
                    Leave Type <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Number of days <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
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
      {/* /Add Leavetype Modal */}
      {/* Edit Leavetype Modal */}
      <div
        id="edit_leavetype"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Leave Type</h5>
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
                    Leave Type <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="Casual Leave"
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Number of days <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue={12}
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
      {/* /Edit Leavetype Modal */}
    </>
  );
};

export default LeaveTypeModal;

import React from "react";

const UserAssestDetailPopup = () => {
  return (
    <>
      <div id="raise-issue" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Raise Issue</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                arialabel="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Description</label>
                      <textarea rows={4} className="form-control"></textarea>
                    </div>
                  </div>
                </div>
                <div className="submit-section mt-0">
                  <button className="btn btn-primary submit-btn w-100">
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

export default UserAssestDetailPopup;

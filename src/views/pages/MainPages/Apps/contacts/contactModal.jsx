import React from "react";
import { Link } from "react-router-dom";

const ContactModal = () => {
  return (
    <div>
      <div>
        {/* Add Contact Modal */}
        <div className="modal custom-modal fade" id="add_contact" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Contact</h5>
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
                <form action="contacts">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Email Address</label>
                    <input className="form-control" type="email" />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Contact Number <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="input-block mb-3">
                    <label className="d-block col-form-label">Status</label>
                    <div className="status-toggle">
                      <input
                        type="checkbox"
                        id="contact_status"
                        className="check"
                      />
                      <label htmlFor="contact_status" className="checktoggle">
                        checkbox
                      </label>
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
        {/* /Add Contact Modal */}
        {/* Edit Contact Modal */}
        <div
          className="modal custom-modal fade"
          id="edit_contact"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Contact</h5>
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
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="John Doe"
                    />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Email Address</label>
                    <input
                      className="form-control"
                      type="email"
                      defaultValue="johndoe@example.com"
                    />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Contact Number <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue={9876543210}
                    />
                  </div>
                  <div className="input-block mb-3">
                    <label className="d-block col-form-label">Status</label>
                    <div className="status-toggle">
                      <input
                        type="checkbox"
                        id="edit_contact_status"
                        className="check"
                      />
                      <label
                        htmlFor="edit_contact_status"
                        className="checktoggle"
                      >
                        checkbox
                      </label>
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
        {/* /Edit Contact Modal */}
        {/* Delete Contact Modal */}
        <div
          className="modal custom-modal fade"
          id="delete_contact"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Contact</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <Link to="#" className="btn btn-primary continue-btn">
                        Delete
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link
                        to="#"
                        data-bs-dismiss="modal"
                        className="btn btn-primary cancel-btn"
                      >
                        Cancel
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Delete Contact Modal */}
      </div>
    </div>
  );
};

export default ContactModal;

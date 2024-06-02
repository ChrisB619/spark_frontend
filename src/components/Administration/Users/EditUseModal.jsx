import React, { useState } from "react";
import Select from "react-select";

const EditUserModal = () => {
  const [setSelectedOption] = useState(null);
  const [setSelectedOptionTwo] = useState(null);

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
  const optionsTwo = [
    { value: 1, label: "Select Company" },
    { value: 2, label: "Global Technologies" },
    { value: 3, label: "Delta Infotech" },
  ];
  const options = [
    { value: 1, label: "Admin" },
    { value: 2, label: "Client" },
    { value: 3, label: "Employee" },
  ];
  return (
    <div id="edit_user" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit User</h5>
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
                      Username <span className="text-danger">*</span>
                    </label>
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
                    <label className="col-form-label">Password</label>
                    <input className="form-control" type="password" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Confirm Password</label>
                    <input className="form-control" type="password" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Phone </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Role</label>
                    <Select
                      placeholder="Admin"
                      onChange={setSelectedOption}
                      options={options}
                      className="select floating"
                      styles={customStyles}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Company</label>
                    <Select
                      placeholder="Global Technologies"
                      onChange={setSelectedOptionTwo}
                      options={optionsTwo}
                      className="select floating"
                      styles={customStyles}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Employee ID <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control floating" />
                  </div>
                </div>
              </div>
              <div className="table-responsive m-t-15">
                <table className="table table-striped custom-table">
                  <thead>
                    <tr>
                      <th>Module Permission</th>
                      <th className="text-center">Read</th>
                      <th className="text-center">Write</th>
                      <th className="text-center">Create</th>
                      <th className="text-center">Delete</th>
                      <th className="text-center">Import</th>
                      <th className="text-center">Export</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Employee</td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Holidays</td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Leaves</td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Events</td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="text-center">
                        <label className="custom_check">
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default EditUserModal;

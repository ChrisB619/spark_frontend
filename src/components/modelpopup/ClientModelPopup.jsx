import React, { useState } from "react";

export const ClientModelPopup = () => {
  const initialTableData = [
    {
      module: "Projects",
      read: true,
      write: true,
      create: true,
      delete: true,
      import: true,
      export: true,
    },
    {
      module: "Tasks",
      read: true,
      write: true,
      create: true,
      delete: true,
      import: true,
      export: true,
    },
    {
      module: "Chat",
      read: true,
      write: true,
      create: true,
      delete: true,
      import: true,
      export: true,
    },
    {
      module: "Estimates",
      read: true,
      write: true,
      create: true,
      delete: true,
      import: true,
      export: true,
    },
    {
      module: "Invoices",
      read: true,
      write: true,
      create: true,
      delete: true,
      import: true,
      export: true,
    },
    {
      module: "Timing Sheets",
      read: true,
      write: true,
      create: true,
      delete: true,
      import: true,
      export: true,
    },
  ];

  const [tableData, setTableData] = useState(initialTableData);

  const handleCheckboxChange = (module, column) => {
    // Create a copy of the tableData
    const updatedTableData = [...tableData];

    // Find the row with the specified module
    const row = updatedTableData.find((item) => item.module === module);

    // Toggle the checkbox value
    row[column] = !row[column];

    // Set the updated data
    setTableData(updatedTableData);
  };

  return (
    <>
      <div id="add_client" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Client</h5>
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
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Last Name</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Username <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input className="form-control floating" type="email" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Password</label>
                      <input className="form-control" type="password" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Confirm Password</label>
                      <input className="form-control" type="password" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Client ID <span className="text-danger">*</span>
                      </label>
                      <input className="form-control floating" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Phone </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Company Name</label>
                      <input className="form-control" type="text" />
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
                      {tableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.module}</td>
                          {[
                            "read",
                            "write",
                            "create",
                            "delete",
                            "import",
                            "export",
                          ].map((column) => (
                            <td key={column} className="text-center">
                              <label className="custom_check">
                                <input
                                  type="checkbox"
                                  checked={row[column]}
                                  onChange={() =>
                                    handleCheckboxChange(row.module, column)
                                  }
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                          ))}
                        </tr>
                      ))}
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

      <div id="edit_client" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Client</h5>
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
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        defaultValue="Barry"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Last Name</label>
                      <input
                        className="form-control"
                        defaultValue="Cuda"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Username <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        defaultValue="barrycuda"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control floating"
                        defaultValue="barrycuda@example.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Password</label>
                      <input
                        className="form-control"
                        defaultValue="barrycuda"
                        type="password"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Confirm Password</label>
                      <input
                        className="form-control"
                        defaultValue="barrycuda"
                        type="password"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Client ID <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control floating"
                        defaultValue="CLT-0001"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Phone </label>
                      <input
                        className="form-control"
                        defaultValue={9876543210}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Company Name</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="Global Technologies"
                      />
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
                      {tableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.module}</td>
                          {[
                            "read",
                            "write",
                            "create",
                            "delete",
                            "import",
                            "export",
                          ].map((column) => (
                            <td key={column} className="text-center">
                              <label className="custom_check">
                                <input
                                  type="checkbox"
                                  checked={row[column]}
                                  onChange={() =>
                                    handleCheckboxChange(row.module, column)
                                  }
                                />
                                <span className="checkmark"></span>
                              </label>
                            </td>
                          ))}
                        </tr>
                      ))}
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
                    Save
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

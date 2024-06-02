import React, { useState } from "react";
import Select from "react-select";

const AddAssetpopup = () => {
  const [setSelectedOption] = useState(null);
  const [setSelectedOptionTwo] = useState(null);

  const options = [
    { value: 1, label: "John Doe" },
    { value: 2, label: "Richard Miles" },
  ];
  const optionsTwo = [
    { value: 1, label: "Pending" },
    { value: 2, label: "Approved" },
    { value: 3, label: "Deployed" },
    { value: 4, label: "Damaged" },
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
    <div id="add_asset" className="modal custom-modal fade" role="dialog">
      <div className="modal-dialog modal-md" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Asset</h5>
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
                    <label className="col-form-label">Asset Name</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Asset Id</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Purchase Date</label>
                    <input
                      className="form-control datetimepicker"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Purchase From</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Manufacturer</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Model</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Serial Number</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Supplier</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Condition</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Warranty</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="In Months"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Value</label>
                    <input
                      placeholder="$1800"
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Asset User</label>

                    <Select
                      placeholder="John Doe"
                      onChange={setSelectedOption}
                      options={options}
                      className="select floating"
                      styles={customStyles}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Description</label>
                    <textarea className="form-control" defaultValue={""} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Status</label>
                    <Select
                      placeholder="Pending"
                      onChange={setSelectedOptionTwo}
                      options={optionsTwo}
                      className="select floating"
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

export default AddAssetpopup;

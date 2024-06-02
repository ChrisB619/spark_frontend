import React from "react";
import Select from "react-select";

const SubscribtionModelPopup = () => {
  const planing = [
    { value: 1, label: "Monthly" },
    { value: 2, label: "Yearly" },
  ];
  const users = [
    { value: 1, label: "5" },
    { value: 2, label: "50" },
    { value: 2, label: "Unlimited" },
  ];
  const gp = [
    { value: 1, label: "5 GB" },
    { value: 2, label: "500 GB" },
    { value: 2, label: "100 GB" },
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
      <div id="add_plan" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Plan</h5>
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
                      <label className="col-form-label">Plan Name</label>
                      <input
                        type="text"
                        placeholder="Free Trial"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Plan Amount</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Plan Type</label>
                      <Select
                        options={planing}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">No of Users</label>
                      <Select
                        options={users}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">No of Projects</label>
                      <Select
                        options={users}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        No of Storage Space
                      </label>
                      <Select
                        options={gp}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">Plan Description</label>
                  <textarea
                    className="form-control"
                    rows={4}
                    cols={30}
                    defaultValue={""}
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="d-block">Status</label>
                  <div className="status-toggle">
                    <input
                      type="checkbox"
                      id="add_plan_status"
                      className="check"
                    />
                    <label htmlFor="add_plan_status" className="checktoggle">
                      checkbox
                    </label>
                  </div>
                </div>
                <div className="m-t-20 text-center">
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

      <div id="edit_plan" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Plan</h5>
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
                      <label className="col-form-label">Plan Name</label>
                      <input
                        type="text"
                        placeholder="Free Trial"
                        className="form-control"
                        defaultValue="Free Trial"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Plan Amount</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="$500"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Plan Type</label>
                      <Select
                        options={planing}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">No of Users</label>
                      <Select
                        options={users}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">No of Projects</label>
                      <Select
                        options={users}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        No of Storage Space
                      </label>
                      <Select
                        options={gp}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">Plan Description</label>
                  <textarea
                    className="form-control"
                    rows={4}
                    cols={30}
                    defaultValue={""}
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="d-block">Status</label>
                  <div className="status-toggle">
                    <input
                      type="checkbox"
                      id="edit_plan_status"
                      className="check"
                    />
                    <label htmlFor="edit_plan_status" className="checktoggle">
                      checkbox
                    </label>
                  </div>
                </div>
                <div className="m-t-20 text-center">
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

export default SubscribtionModelPopup;

import React, { useState } from "react";
import Select from "react-select";

const AddPfModal = () => {
  const [setSelectedOption] = useState(null);
  const [setselectTwo] = useState(null);
  const options = [
    { value: "John Doe (FT-0001)", label: "John Doe (FT-0001)" },
    { value: "Richard Miles (FT-0002)", label: "Richard Miles (FT-0002)" },
  ];

  const optionsTwo = [
    { value: "Fixed Amount", label: "Fixed Amount" },
    {
      value: " Percentage of Basic Salary",
      label: " Percentage of Basic Salary",
    },
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
      <div id="add_pf" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Provident Fund</h5>
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
                      <label className="col-form-label">Employee Name</label>

                      <Select
                        placeholder="John Doe (FT-0001)"
                        onChange={setSelectedOption}
                        options={options}
                        styles={customStyles}
                        className="select"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Provident Fund Type
                      </label>

                      <Select
                        placeholder="Fixed Amount"
                        onChange={setselectTwo}
                        options={optionsTwo}
                        className="select"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="show-fixed-amount">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Employee Share (Amount)
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Organization Share (Amount)
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="show-basic-salary">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Employee Share (%)
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="input-block mb-3">
                            <label className="col-form-label">
                              Organization Share (%)
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Description</label>
                      <textarea
                        className="form-control"
                        rows={4}
                        defaultValue={""}
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
    </>
  );
};

export default AddPfModal;

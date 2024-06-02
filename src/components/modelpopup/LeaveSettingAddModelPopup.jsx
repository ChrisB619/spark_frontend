import React, { useState } from "react";

const LeaveSettingAddModelPopup = () => {
  const initialOptionsFrom = [
    { label: "Bernardo Galaviz", value: 1 },
    { label: "Jeffrey Warden", value: 2 },
    { label: "John Doe", value: 3 },
    { label: "John Smith", value: 4 },
    { label: "Mike Litorus", value: 5 },
  ];

  const [optionsFrom, setOptionsFrom] = useState(initialOptionsFrom);
  const [selectedFrom, setSelectedFrom] = useState([]);
  const [selectedTo, setSelectedTo] = useState([]);
  const [optionsTo, setOptionsTo] = useState([]);

  const moveRightAll = () => {
    setOptionsTo([...optionsTo, ...optionsFrom]);
    setOptionsFrom([]);
  };

  const moveRightSelected = () => {
    const selectedValues = selectedFrom.slice();
    setOptionsTo([
      ...optionsTo,
      ...optionsFrom.filter((option) => selectedValues.includes(option.value)),
    ]);
    setOptionsFrom(
      optionsFrom.filter((option) => !selectedValues.includes(option.value))
    );
    setSelectedFrom([]);
  };

  const moveLeftSelected = () => {
    const selectedValues = selectedTo.slice();
    setOptionsFrom([
      ...optionsFrom,
      ...optionsTo.filter((option) => selectedValues.includes(option.value)),
    ]);
    setOptionsTo(
      optionsTo.filter((option) => !selectedValues.includes(option.value))
    );
    setSelectedTo([]);
  };

  const moveLeftAll = () => {
    setOptionsFrom([...optionsFrom, ...optionsTo]);
    setOptionsTo([]);
  };

  return (
    <>
      <div
        id="add_custom_policy"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Custom Policy</h5>
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
                    Policy Name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Days <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="input-block mb-3 leave-duallist">
                  <label className="col-form-label">Add employee</label>
                  <div className="row">
                    <div className="col-lg-5 col-sm-5">
                      <select
                        value={selectedFrom}
                        onChange={(e) => {
                          const selectedValues = Array.from(e.target.options)
                            .filter((option) => option.selected)
                            .map((option) => parseInt(option.value));

                          setSelectedFrom(selectedValues);
                        }}
                        className="form-control form-select"
                        size="5"
                        multiple
                      >
                        {optionsFrom.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="multiselect-controls col-lg-2 col-sm-2">
                      <button
                        type="button"
                        onClick={moveRightAll}
                        className="btn w-100 btn-white mb-2"
                      >
                        <i className="fa fa-forward" />
                      </button>
                      <button
                        type="button"
                        onClick={moveRightSelected}
                        className="btn w-100 btn-white mb-2"
                      >
                        <i className="fa fa-chevron-right" />
                      </button>
                      <button
                        type="button"
                        onClick={moveLeftSelected}
                        className="btn w-100 btn-white mb-2"
                      >
                        <i className="fa fa-chevron-left" />
                      </button>
                      <button
                        type="button"
                        onClick={moveLeftAll}
                        className="btn w-100 btn-white mb-2"
                      >
                        <i className="fa fa-backward" />
                      </button>
                    </div>
                    <div className="col-lg-5 col-sm-5">
                      <select
                        value={selectedTo.map((option) => option?.value)}
                        onChange={(e) =>
                          setSelectedTo(
                            Array.from(e.target.selectedOptions, (item) =>
                              parseInt(item.value)
                            )
                          )
                        }
                        className="form-control form-select"
                        size="5"
                        multiple
                      >
                        {optionsTo.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
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
      <div
        id="edit_custom_policy"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Custom Policy</h5>
              <button
                type="button"
                className="close"
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
                    Policy Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="LOP"
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Days <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={4}
                  />
                </div>
                <div className="input-block mb-3 leave-duallist">
                  <label className="col-form-label">Add employee</label>
                  <div className="row">
                    <div className="col-lg-5 col-sm-5">
                      <select
                        value={selectedFrom}
                        onChange={(e) =>
                          setSelectedFrom(
                            Array.from(e.target.selectedOptions, (item) =>
                              parseInt(item.value)
                            )
                          )
                        }
                        className="form-control form-select"
                        size="5"
                        multiple
                      >
                        {optionsFrom.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="multiselect-controls col-lg-2 col-sm-2">
                      <button
                        type="button"
                        onClick={moveRightAll}
                        className="btn w-100 btn-white mb-2"
                      >
                        <i className="fa fa-forward" />
                      </button>
                      <button
                        type="button"
                        onClick={moveRightSelected}
                        className="btn w-100 btn-white mb-2"
                      >
                        <i className="fa fa-chevron-right" />
                      </button>
                      <button
                        type="button"
                        onClick={moveLeftSelected}
                        className="btn w-100 btn-white mb-2"
                      >
                        <i className="fa fa-chevron-left" />
                      </button>
                      <button
                        type="button"
                        onClick={moveLeftAll}
                        className="btn w-100 btn-white mb-2"
                      >
                        <i className="fa fa-backward" />
                      </button>
                    </div>
                    <div className="col-lg-5 col-sm-5">
                      <select
                        value={selectedTo.map((option) => option?.value)}
                        className="form-control form-select"
                        size="8"
                        multiple
                        onChange={(e) =>
                          setSelectedTo(
                            Array.from(e.target.selectedOptions, (item) =>
                              parseInt(item.value)
                            )
                          )
                        }
                      >
                        {optionsTo.map((option) => (
                          <option key={option?.value} value={option?.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
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

export default LeaveSettingAddModelPopup;

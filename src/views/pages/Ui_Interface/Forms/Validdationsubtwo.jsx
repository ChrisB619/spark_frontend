import React from "react";

const Validdationsubtwo = () => {
  return (
    <>
      {/* Supported Elements */}
      <div className="card">
        <div className="card-header">
          <h5 className="card-title mb-0">Supported Elements</h5>
          <p className="card-text">
            Form validation styles are also available for bootstrap custom form
            controls.
          </p>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-sm">
              <form className="was-validated">
                <div className="custom-checkbox mb-3">
                  <input
                    type="checkbox" className="me-2"
                    id="customControlValidation1"
                    required=""
                  />
                  <label htmlFor="customControlValidation1">
                    Check this custom checkbox
                  </label>
                  <div className="invalid-feedback">
                    Example invalid feedback text
                  </div>
                </div>
                <div className="custom-radio">
                  <input
                    type="radio" className="me-2"
                    id="customControlValidation2"
                    name="radio-stacked"
                    required=""
                  />
                  <label htmlFor="customControlValidation2">
                    Toggle this custom radio
                  </label>
                </div>
                <div className="custom-radio mb-3">
                  <input
                    type="radio" className="me-2"
                    id="customControlValidation3"
                    name="radio-stacked"
                    required=""
                  />
                  <label htmlFor="customControlValidation3">
                    Or toggle this other custom radio
                  </label>
                  <div className="invalid-feedback">
                    More example invalid feedback text
                  </div>
                </div>
                <div className="input-block mb-3">
                  <select className="form-select" required="">
                    <option value="">Open this select menu</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                  <div className="invalid-feedback">
                    Example invalid custom select feedback
                  </div>
                </div>
                <div className="input-block mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="validatedCustomFile"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Example invalid custom file feedback
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Supported Elements */}
      {/* Validation Tooltips */}
      <div className="card mb-0">
        <div className="card-header">
          <h5 className="card-title mb-0">Tooltips</h5>
          <p className="card-text">
            You can swap the{" "}
            <code>
              .{"{"}valid|invalid{"}"}-feedback
            </code>{" "}
            classes for{" "}
            <code>
              .{"{"}valid|invalid{"}"}-tooltip
            </code>{" "}
            classes to display validation feedback in a styled tooltip.
          </p>
        </div>
        <div className="card-body">
          <form className="needs-validation" noValidate="">
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="validationTooltip01">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltip01"
                  placeholder="First Name"
                  defaultValue="Mark"
                  required=""
                />
                <div className="valid-tooltip">Looks good!</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationTooltip02">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltip02"
                  placeholder="Last Name"
                  defaultValue="Otto"
                  required=""
                />
                <div className="valid-tooltip">Looks good!</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationTooltipUsername">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltipUsername"
                  placeholder="Username"
                  required=""
                />
                <div className="invalid-tooltip">
                  Please choose a unique and valid username.
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="validationTooltip03">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltip03"
                  placeholder="City"
                  required=""
                />
                <div className="invalid-tooltip">
                  Please provide a valid city.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationTooltip04">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltip04"
                  placeholder="State"
                  required=""
                />
                <div className="invalid-tooltip">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationTooltip05">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltip05"
                  placeholder="Zip"
                  required=""
                />
                <div className="invalid-tooltip">
                  Please provide a valid zip.
                </div>
              </div>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </form>
        </div>
      </div>
      {/* /Validation Tooltips */}
    </>
  );
};

export default Validdationsubtwo;

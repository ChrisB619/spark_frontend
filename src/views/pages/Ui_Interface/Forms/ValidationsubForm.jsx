import React from "react";
import { Link } from "react-router-dom";

const ValidationsubForm = () => {
  return (
    <>
      {/* Custom Boostrap Validation */}
      <div className="card">
        <div className="card-header">
          <h5 className="card-title mb-0">Custom Bootstrap Form Validation</h5>
          <p className="card-text">
            For custom Bootstrap form validation messages, you’ll need to add
            the <code>novalidate</code> boolean attribute to your form. For
            server side validation{" "}
            <Link
              to="https://getbootstrap.com/docs/4.1/components/forms/#server-side"
              target="_blank"
            >
              read full documentation
            </Link>
            .
          </p>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-sm">
              <form className="needs-validation" noValidate="">
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="validationCustom01">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom01"
                      placeholder="First Name"
                      defaultValue="Mark"
                      required=""
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="validationCustom02">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom02"
                      placeholder="Last Name"
                      defaultValue="Otto"
                      required=""
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="validationCustomUsername">Username</label>
                    <div className="input-group">
                      <span className="input-group-text" id="inputGroupPrepend">
                        @
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="validationCustomUsername"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required=""
                      />
                      <div className="invalid-feedback">
                        Please choose a username.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationCustom03">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom03"
                      placeholder="City"
                      required=""
                    />
                    <div className="invalid-feedback">
                      Please provide a valid city.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationCustom04">State</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom04"
                      placeholder="State"
                      required=""
                    />
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationCustom05">Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom05"
                      placeholder="Zip"
                      required=""
                    />
                    <div className="invalid-feedback">
                      Please provide a valid zip.
                    </div>
                  </div>
                </div>
                <div className="input-block mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="invalidCheck"
                      required=""
                    />
                    <label className="form-check-label" htmlFor="invalidCheck">
                      Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary" type="submit">
                  Submit form
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Custom Boostrap Validation */}
      {/* Default Browser Validation */}
      <div className="card">
        <div className="card-header">
          <h5 className="card-title mb-0">Browser Defaults</h5>
          <p className="card-text">
            Not interested in custom validation feedback messages or writing
            JavaScript to change form behaviors? All good, you can use the
            browser defaults. Try submitting the form below.
          </p>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-sm">
              <form>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault01">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationDefault01"
                      placeholder="First Name"
                      defaultValue="Mark"
                      required=""
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault02">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationDefault02"
                      placeholder="Last Name"
                      defaultValue="Otto"
                      required=""
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefaultUsername">Username</label>
                    <div className="input-group">
                      <span
                        className="input-group-text"
                        id="inputGroupPrepend2"
                      >
                        @
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefaultUsername"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend2"
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationDefault03">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationDefault03"
                      placeholder="City"
                      required=""
                    />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationDefault04">State</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationDefault04"
                      placeholder="State"
                      required=""
                    />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationDefault05">Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationDefault05"
                      placeholder="Zip"
                      required=""
                    />
                  </div>
                </div>
                <div className="input-block mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="invalidCheck2"
                      required=""
                    />
                    <label className="form-check-label" htmlFor="invalidCheck2">
                      Agree to terms and conditions
                    </label>
                  </div>
                </div>
                <button className="btn btn-primary" type="submit">
                  Submit form
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Default Browser Validation */}
    </>
  );
};

export default ValidationsubForm;

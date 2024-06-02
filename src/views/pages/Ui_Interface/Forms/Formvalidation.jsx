import React from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import ValidationsubForm from "./ValidationsubForm";
import Validdationsubtwo from "./Validdationsubtwo";

const Formvalidation = () => {
  return (
    <div>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <Breadcrumbs
            maintitle="Form Validation"
            title="Dashboard"
            subtitle="Form Validation"
          />
          {/* /Page Header */}
          {/* Row */}
          <div className="row">
            <div className="col-sm-12">
              <ValidationsubForm />
              {/* Server Side Validation */}
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Server Side</h5>
                  <p className="card-text">
                    We recommend using client side validation, but in case you
                    require server side, you can indicate invalid and valid form
                    fields with <code>.is-invalid</code> and{" "}
                    <code>.is-valid</code>. Note that{" "}
                    <code>.invalid-feedback</code> is also supported with these
                    classes.
                  </p>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <label htmlFor="validationServer01">First Name</label>
                        <input
                          type="text"
                          className="form-control is-valid"
                          id="validationServer01"
                          placeholder="First Name"
                          defaultValue="Mark"
                          required=""
                        />
                        <div className="valid-feedback">Looks good!</div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="validationServer02">Last Name</label>
                        <input
                          type="text"
                          className="form-control is-valid"
                          id="validationServer02"
                          placeholder="Last Name"
                          defaultValue="Otto"
                          required=""
                        />
                        <div className="valid-feedback">Looks good!</div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="validationServerUsername">
                          Username
                        </label>
                        <div className="input-group">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend3"
                          >
                            @
                          </span>
                          <input
                            type="text"
                            className="form-control is-invalid"
                            id="validationServerUsername"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend3"
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
                        <label htmlFor="validationServer03">City</label>
                        <input
                          type="text"
                          className="form-control is-invalid"
                          id="validationServer03"
                          placeholder="City"
                          required=""
                        />
                        <div className="invalid-feedback">
                          Please provide a valid city.
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <label htmlFor="validationServer04">State</label>
                        <input
                          type="text"
                          className="form-control is-invalid"
                          id="validationServer04"
                          placeholder="State"
                          required=""
                        />
                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <label htmlFor="validationServer05">Zip</label>
                        <input
                          type="text"
                          className="form-control is-invalid"
                          id="validationServer05"
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
                          className="form-check-input is-invalid"
                          type="checkbox"
                          defaultValue="Mark"
                          id="invalidCheck3"
                          required=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="invalidCheck3"
                        >
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
              {/* /Server Side Validation */}
              <Validdationsubtwo />
            </div>
          </div>
          {/* /Row */}
        </div>
      </div>
      {/* /Page Wrapper */}
    </div>
  );
};

export default Formvalidation;

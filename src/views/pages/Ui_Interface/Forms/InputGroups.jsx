import React from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import InputGroupForm from "./InputGroupForm";

const InputGroups = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <Breadcrumbs
            maintitle="Input Groups"
            title="Dashboard"
            subtitle="Input Groups"
          />
          {/* /Page Header */}
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Basic Examples</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-lg-2">
                        Group Left
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon1">
                            @
                          </span>

                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-lg-2">
                        Group Right
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                          />

                          <span className="input-group-text" id="basic-addon2">
                            @example.com
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-lg-2">
                        URL Example
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text">https://</span>

                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-lg-2">
                        Group with Price
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text">$</span>

                          <input type="text" className="form-control" />

                          <span className="input-group-text">.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="input-block mb-3 row mb-0">
                      <label className="col-form-label col-lg-2">
                        Group with Price (Left)
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text">$</span>

                          <span className="input-group-text">0.00</span>

                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Sizing</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-lg-2">
                        Input Group Large
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group input-group-lg">
                          <span className="input-group-text" id="sizing-addon1">
                            @
                          </span>

                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-describedby="sizing-addon1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-lg-2">
                        Input Group Default
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text" id="sizing-addon2">
                            @
                          </span>

                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-describedby="sizing-addon2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-block mb-3 row mb-0">
                      <label className="col-form-label col-lg-2">
                        Input Group Small
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group input-group-sm">
                          <span className="input-group-text" id="sizing-addon3">
                            @
                          </span>

                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-describedby="sizing-addon3"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Checkbox and Radio Addons</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-lg-2">
                        Checkbox
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text">
                            <input type="checkbox" className="chck" />
                          </span>

                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="input-block mb-3 row mb-0">
                      <label className="col-form-label col-lg-2">Radio</label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text">
                            <input type="radio" className="chck" />
                          </span>

                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <InputGroupForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputGroups;

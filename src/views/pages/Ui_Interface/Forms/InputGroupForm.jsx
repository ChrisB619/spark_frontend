import React from "react";
import { Link } from "react-router-dom";

const InputGroupForm = () => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title mb-0">Multiple Addons</h4>
        </div>
        <div className="card-body">
          <form action="#">
            <div className="input-block mb-3 row">
              <label className="col-form-label col-lg-2">
                Radio and Text Addons
              </label>
              <div className="col-lg-10">
                <div className="input-group">
                  <span className="input-group-text">
                    <input type="checkbox" className="chck" />
                  </span>

                  <span className="input-group-text">$</span>

                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="input-block mb-3 row mb-0">
              <label className="col-form-label col-lg-2">Two Addons</label>
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
      <div className="card mb-0">
        <div className="card-header">
          <h4 className="card-title mb-0">Buttons with dropdowns</h4>
        </div>
        <div className="card-body">
          <form action="#">
            <div className="input-block mb-3 row">
              <label className="col-form-label col-lg-2">
                Radio and Text Addons
              </label>
              <div className="col-lg-10">
                <div className="input-group">
                  <button
                    type="button"
                    className="btn btn-white dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Action
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                    <div role="separator" className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="#">
                      Separated link
                    </Link>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Left dropdown"
                  />
                </div>
              </div>
            </div>
            <div className="input-block mb-3 row mb-0">
              <label className="col-form-label col-lg-2">Two Addons</label>
              <div className="col-lg-10">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Right dropdown"
                  />
                  <button
                    type="button"
                    className="btn btn-white dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Action
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                    <div role="separator" className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="#">
                      Separated link
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InputGroupForm;

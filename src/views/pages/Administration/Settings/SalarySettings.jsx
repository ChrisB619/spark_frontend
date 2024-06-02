import React from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs";

const SalarySettings = () => {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Page Header */}
              <Breadcrumbs maintitle="Salary Settings" />

              {/* /Page Header */}
              <form>
                {/* DA and HRA Settings */}
                <div className="settings-widget">
                  <div className="h3 card-title with-switch">
                    DA and HRA
                    <div className="onoffswitch">
                      <input
                        type="checkbox"
                        name="onoffswitch"
                        className="onoffswitch-checkbox"
                        id="switch_hra"
                        defaultChecked
                      />
                      <label className="onoffswitch-label" htmlFor="switch_hra">
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">DA (%)</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">HRA (%)</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* /DA and HRA Settings */}
                {/* Provident Fund Settings */}
                <div className="settings-widget">
                  <div className="h3 card-title with-switch">
                    Provident Fund Settings
                    <div className="onoffswitch">
                      <input
                        type="checkbox"
                        name="onoffswitch"
                        className="onoffswitch-checkbox"
                        id="switch_pf"
                        defaultChecked
                      />
                      <label className="onoffswitch-label" htmlFor="switch_pf">
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Employee Share (%)</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Organization Share (%)</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Provident Fund Settings */}
                {/* ESI Settings */}
                <div className="settings-widget">
                  <div className="h3 card-title with-switch">
                    ESI Settings
                    <div className="onoffswitch">
                      <input
                        type="checkbox"
                        name="onoffswitch"
                        className="onoffswitch-checkbox"
                        id="switch_esi"
                      />
                      <label className="onoffswitch-label" htmlFor="switch_esi">
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Employee Share (%)</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Organization Share (%)</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* /ESI Settings */}
                {/* TDS Settings */}
                <div className="settings-widget">
                  <div className="h3 card-title with-switch">
                    TDS&nbsp;{" "}
                    <small className="form-text text-muted">
                      Annual Salary
                    </small>
                    <div className="onoffswitch">
                      <input
                        type="checkbox"
                        name="onoffswitch"
                        className="onoffswitch-checkbox"
                        id="switch_tds"
                      />
                      <label className="onoffswitch-label" htmlFor="switch_tds">
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                      </label>
                    </div>
                  </div>
                  <div className="row row-sm">
                    <div className="col-sm-4">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Salary From</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Salary To</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="input-block mb-3">
                        <label className="col-form-label">%</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="input-block mb-3">
                        <label className="d-none d-sm-block">&nbsp;</label>
                        <button
                          className="btn btn-danger w-100 btn-block set-btn"
                          type="button"
                        >
                          <i className="fa fa-trash" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row row-sm">
                    <div className="col-sm-4">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Salary From</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Salary To</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="input-block mb-3">
                        <label className="col-form-label">%</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="input-block mb-3">
                        <label className="d-none d-sm-block">&nbsp;</label>
                        <button
                          className="btn btn-danger w-100 btn-block set-btn"
                          type="button"
                        >
                          <i className="fa fa-trash" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row row-sm">
                    <div className="col-sm-2 ms-auto">
                      <div className="input-block mb-3">
                        <button
                          className="btn btn-primary w-100 btn-block"
                          type="button"
                        >
                          <i className="fa fa-plus" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /TDS Settings */}
                {/* Submit Button */}
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn" type="submit">
                    Save
                  </button>
                </div>
                {/* /Submit Button */}
              </form>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
    </>
  );
};

export default SalarySettings;

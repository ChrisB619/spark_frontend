import React from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs";

const ToxboxSetting = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-6 offset-md-3 box-align">
              {/* Page Header */}
              <Breadcrumbs maintitle="ToxBox Setting" />
              {/* /Page Header */}
              <form>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    ApiKey <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="xxxxxxxx"
                    readOnly
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    ApiSecret <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="xxxxxxxxxxxxxxxxxxxxxxxxxx"
                    readOnly
                  />
                </div>
                <div className="submit-section">
                  <button
                    className="btn btn-primary submit-btn"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    type="reset"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
    </>
  );
};

export default ToxboxSetting;

import React from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs";

const CronSetting = () => {
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-6 offset-md-3 box-align">
              {/* Page Header */}
              <Breadcrumbs maintitle="Cron Setting" />
              {/* /Page Header */}
              <form>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Cron Key <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" defaultValue="" />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Auto Backup Database <span className="text-danger">*</span>
                  </label>
                  <br />
                  <label className="switch">
                    <input
                      type="hidden"
                      defaultValue="off"
                      name="auto_backup_db"
                    />
                    <input
                      type="checkbox"
                      defaultChecked="checked"
                      name="auto_backup_db"
                    />
                    <span />
                  </label>
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
      {/* /Page Wrapper */}
    </>
  );
};

export default CronSetting;

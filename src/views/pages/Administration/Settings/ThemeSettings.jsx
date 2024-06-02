import React from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import { Applogo } from "../../../../Routes/ImagePath/index";

const ThemeSettings = () => {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2 box-align">
              {/* Page Header */}
              <Breadcrumbs maintitle="Theme Settings" />
              {/* /Page Header */}
              <form>
                <div className="input-block row">
                  <label className="col-lg-3 col-form-label">
                    Website Name
                  </label>
                  <div className="col-lg-9">
                    <input
                      name="website_name"
                      className="form-control"
                      defaultValue="Dreamguy's Technologies"
                      type="text"
                    />
                  </div>
                </div>
                <div className="input-block row">
                  <label className="col-lg-3 col-form-label">Light Logo</label>
                  <div className="col-lg-7">
                    <input type="file" className="form-control" />
                    <span className="form-text text-muted">
                      Recommended image size is 40px x 40px
                    </span>
                  </div>
                  <div className="col-lg-2">
                    <div className="img-thumbnail float-end">
                      <img src={Applogo} alt="" width={40} height={40} />
                    </div>
                  </div>
                </div>
                <div className="input-block row">
                  <label className="col-lg-3 col-form-label">Favicon</label>
                  <div className="col-lg-7">
                    <input type="file" className="form-control" />
                    <span className="form-text text-muted">
                      Recommended image size is 16px x 16px
                    </span>
                  </div>
                  <div className="col-lg-2">
                    <div className="settings-image img-thumbnail float-end">
                      <img
                        src={Applogo}
                        className="img-fluid"
                        width={16}
                        height={16}
                        alt=""
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
                    Save
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

export default ThemeSettings;

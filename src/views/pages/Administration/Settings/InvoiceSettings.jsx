import React from "react";
import { logo3 } from "../../../../Routes/ImagePath/index";
import Breadcrumbs from "../../../../components/Breadcrumbs";

const InvoiceSettings = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Page Header */}
              <Breadcrumbs maintitle="Invoice Settings" />

              {/* /Page Header */}
              <form>
                <div className="input-block row">
                  <label className="col-lg-3 col-form-label">
                    Invoice prefix
                  </label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      defaultValue="INV"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="input-block row">
                  <label className="col-lg-3 col-form-label">
                    Invoice Logo
                  </label>
                  <div className="col-lg-7">
                    <input type="file" className="form-control" />
                    <span className="form-text text-muted">
                      Recommended image size is 200px x 40px
                    </span>
                  </div>
                  <div className="col-lg-2">
                    <div className="img-thumbnail float-end">
                      <img
                        src={logo3}
                        className="img-fluid"
                        alt=""
                        width={140}
                        height={40}
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

export default InvoiceSettings;

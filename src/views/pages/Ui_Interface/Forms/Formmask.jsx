import React from "react";
import InputMask from "react-input-mask";
import Breadcrumbs from "../../../../components/Breadcrumbs";

const Formmask = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <Breadcrumbs
            maintitle="Form Mask"
            title="Dashboard"
            subtitle="Form Mask"
          />
          {/* /Page Header */}

          <div className="row">
            <div className="col-sm-12">
              <div className="card mb-0">
                <div className="card-header">
                  <h4 className="card-title mb-0">Form Mask</h4>
                  <p className="card-text">
                    Input masks can be used to force the user to enter data
                    conform a specific format. Unlike validation, the user can't
                    enter any other key than the ones specified by the mask.
                  </p>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Phone</label>
                      <InputMask
                        className="form-control"
                        mask="(999) 999-9999"
                      ></InputMask>
                      <span className="form-text text-muted">
                        (999) 999-9999
                      </span>
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Date</label>
                      <InputMask
                        className="form-control"
                        mask="99/99/9999"
                      ></InputMask>
                      <span className="form-text text-muted">dd/mm/yyyy</span>
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">SSN field 1</label>
                      <InputMask
                        className="form-control"
                        mask="999-99-9999"
                      ></InputMask>
                      <span className="form-text text-muted">
                        e.g "999-99-9999"
                      </span>
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Phone field + ext.
                      </label>
                      <InputMask
                        className="form-control"
                        mask="(999) 999-9999? x99999"
                      ></InputMask>
                      <span className="form-text text-muted">
                        +40 999 999 999
                      </span>
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Product Key</label>
                      <InputMask
                        className="form-control"
                        mask="a*-999-a999"
                      ></InputMask>
                      <span className="form-text text-muted">
                        e.g a*-999-a999
                      </span>
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Currency</label>
                      <InputMask
                        className="form-control"
                        mask="999,999,999.99"
                      ></InputMask>
                      <span className="form-text text-muted">
                        $ 999,999,999.99
                      </span>
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Eye Script</label>
                      <InputMask
                        className="form-control"
                        mask="~9.99 ~9.99 999"
                      ></InputMask>
                      <span className="form-text text-muted">
                        ~9.99 ~9.99 999
                      </span>
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Percent</label>
                      <InputMask
                        className="form-control"
                        mask="99%"
                      ></InputMask>
                      <span className="form-text text-muted">e.g "99%"</span>
                    </div>
                    <div className="input-block mb-3 mb-0">
                      <label className="col-form-label">
                        Credit Card Number
                      </label>
                      <InputMask
                        className="form-control"
                        mask="9999 9999 9999 9999"
                      ></InputMask>
                      <span className="form-text text-muted">
                        e.g "999.999.999.9999"
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formmask;

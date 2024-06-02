import React from "react";
import Select from "react-select";

const EmailSettings = () => {
  const selectNone = [
    { label: "None", value: "option1" },
    { label: "SSL", value: "option2" },
    { label: "TLS", value: "option3" },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#ff9b44" : "#fff",
      color: state.isFocused ? "#fff" : "#000",
      "&:hover": {
        backgroundColor: "#ff9b44",
      },
    }),
  };
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form>
                <div className="input-block mb-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="mailoption"
                      id="phpmail"
                      defaultValue="option1"
                    />
                    <label className="form-check-label" htmlFor="phpmail">
                      PHP Mail
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="mailoption"
                      id="smtpmail"
                      defaultValue="option2"
                    />
                    <label className="form-check-label" htmlFor="smtpmail">
                      SMTP
                    </label>
                  </div>
                </div>
                <h4 className="page-title">PHP Email Settings</h4>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Email From Address
                      </label>
                      <input className="form-control" type="email" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Emails From Name</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
                <h4 className="page-title m-t-30">SMTP Email Settings</h4>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">SMTP HOST</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">SMTP USER</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">SMTP PASSWORD</label>
                      <input className="form-control" type="password" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">SMTP PORT</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">SMTP Security</label>
                      <Select
                        options={selectNone}
                        placeholder="None"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        SMTP Authentication Domain
                      </label>
                      <input className="form-control" type="text" />
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
                    Save &amp; update
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

export default EmailSettings;

import React from "react";
import Select from "react-select";
import Breadcrumbs from "../../../../components/Breadcrumbs";

const Settings = () => {
  const selectUSA = [
    { label: "USA", value: "option1" },
    { label: "United Kingdom", value: "option2" },
  ];
  const selectCalifornia = [
    { label: "California", value: "option1" },
    { label: "Alaska", value: "option2" },
    { label: "Alabama", value: "option3" },
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
            <div className="col-md-8 offset-md-2 box-align">
              {/* Page Header */}
              <Breadcrumbs maintitle="Company Settings" />

              {/* /Page Header */}
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Company Name <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="Dreamguy's Technologies"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Contact Person</label>
                      <input
                        className="form-control "
                        defaultValue="Daniel Porter"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Address</label>
                      <input
                        className="form-control "
                        defaultValue="3864 Quiet Valley Lane, Sherman Oaks, CA, 91403"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Country</label>
                      <Select
                        options={selectUSA}
                        placeholder="USA"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="input-block mb-3">
                      <label className="col-form-label">City</label>
                      <input
                        className="form-control"
                        defaultValue="Sherman Oaks"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="input-block mb-3">
                      <label className="col-form-label">State/Province</label>
                      <Select
                        options={selectCalifornia}
                        placeholder="California"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Postal Code</label>
                      <input
                        className="form-control"
                        defaultValue={91403}
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Email</label>
                      <input
                        className="form-control"
                        defaultValue="danielporter@example.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Phone Number</label>
                      <input
                        className="form-control"
                        defaultValue="818-978-7102"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Mobile Number</label>
                      <input
                        className="form-control"
                        defaultValue="818-635-5579"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Fax</label>
                      <input
                        className="form-control"
                        defaultValue="818-978-7102"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Website Url</label>
                      <input
                        className="form-control"
                        defaultValue="https://www.example.com"
                        type="text"
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

export default Settings;

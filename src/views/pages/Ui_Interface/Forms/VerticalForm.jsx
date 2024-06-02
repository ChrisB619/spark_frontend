import React from "react";
import Select from "react-select";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import VerticalsubForm from "./VerticalsubForm";

const VerticalForm = () => {
  const BloodGroup = [
    { value: 1, label: "A+" },
    { value: 2, label: "O+" },
    { value: 3, label: "B+" },
    { value: 4, label: "AB+" },
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
        <div className="content container-fluid">
          {/* Page Header */}
          <Breadcrumbs
            maintitle="Vertical Form"
            title="Dashboard"
            subtitle="Vertical Form"
          />
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Basic Form</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="input-block mb-3">
                      <label className="col-form-label">First Name</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Last Name</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Email Address</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Username</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Repeat Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Address Form</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Address Line 1</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Address Line 2</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">City</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">State</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Country</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Postal Code</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Two Column Vertical Form</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <h4 className="card-title">Personal Information</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-block mb-3">
                          <label className="col-form-label">First Name</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="input-block mb-3">
                          <label className="col-form-label">Last Name</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="input-block mb-3">
                          <label className="col-form-label">Blood Group</label>
                          <Select
                            options={BloodGroup}
                            placeholder="Select"
                            styles={customStyles}
                          />
                        </div>
                        <div className="input-block mb-3">
                          <label className="d-block">Gender:</label>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="gender_male"
                              defaultValue="option1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="gender_male"
                            >
                              Male
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="gender_female"
                              defaultValue="option2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="gender_female"
                            >
                              Female
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block mb-3">
                          <label className="col-form-label">Username</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="input-block mb-3">
                          <label className="col-form-label">Email</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="input-block mb-3">
                          <label className="col-form-label">Password</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="input-block mb-3">
                          <label className="col-form-label">
                            Repeat Password
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <h4 className="card-title">Postal Address</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-block mb-3">
                          <label className="col-form-label">
                            Address Line 1
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="input-block mb-3">
                          <label className="col-form-label">
                            Address Line 2
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="input-block mb-3">
                          <label className="col-form-label">State</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block mb-3">
                          <label className="col-form-label">City</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="input-block mb-3">
                          <label className="col-form-label">Country</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="input-block mb-3">
                          <label className="col-form-label">Postal Code</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <VerticalsubForm />
        </div>
      </div>
    </>
  );
};

export default VerticalForm;

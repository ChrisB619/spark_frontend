import React from "react";
import Select from "react-select";

const HorizontalsubForm = () => {
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
      <div className="row">
        <div className="col-xl-6 d-flex">
          <div className="card flex-fill">
            <div className="card-header">
              <h4 className="card-title mb-0">Basic Form</h4>
            </div>
            <div className="card-body">
              <form action="#">
                <div className="input-block mb-3 row">
                  <label className="col-lg-3 col-form-label">First Name</label>
                  <div className="col-lg-9">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="input-block mb-3 row">
                  <label className="col-lg-3 col-form-label">Last Name</label>
                  <div className="col-lg-9">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="input-block mb-3 row">
                  <label className="col-lg-3 col-form-label">
                    Email Address
                  </label>
                  <div className="col-lg-9">
                    <input type="email" className="form-control" />
                  </div>
                </div>
                <div className="input-block mb-3 row">
                  <label className="col-lg-3 col-form-label">Username</label>
                  <div className="col-lg-9">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="input-block mb-3 row">
                  <label className="col-lg-3 col-form-label">Password</label>
                  <div className="col-lg-9">
                    <input type="password" className="form-control" />
                  </div>
                </div>
                <div className="input-block mb-3 row">
                  <label className="col-lg-3 col-form-label">
                    Repeat Password
                  </label>
                  <div className="col-lg-9">
                    <input type="password" className="form-control" />
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
        <div className="col-xl-6 d-flex">
          <div className="card flex-fill">
            <div className="card-header">
              <h4 className="card-title mb-0">Address Form</h4>
            </div>
            <div className="card-body">
              <form action="#">
                <div className="input-block mb-3 row">
                  <label className="col-lg-3 col-form-label">Address 1</label>
                  <div className="col-lg-9">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="input-block mb-3 row">
                  <label className="col-lg-3 col-form-label">Address 2</label>
                  <div className="col-lg-9">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="input-block mb-3 row">
                  <label className="col-lg-3 col-form-label">City</label>
                  <div className="col-lg-9">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="input-block mb-3 row">
                  <label className="col-lg-3 col-form-label">State</label>
                  <div className="col-lg-9">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="input-block mb-3 row">
                  <label className="col-lg-3 col-form-label">Country</label>
                  <div className="col-lg-9">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="input-block mb-3 row">
                  <label className="col-lg-3 col-form-label">Postal Code</label>
                  <div className="col-lg-9">
                    <input type="text" className="form-control" />
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
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">Two Column Horizontal Form</h4>
            </div>
            <div className="card-body">
              <h4 className="card-title">Personal Information</h4>
              <form action="#">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="input-block mb-3 row">
                      <label className="col-lg-3 col-form-label">
                        First Name
                      </label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-lg-3 col-form-label">
                        Last Name
                      </label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-lg-3 col-form-label">Gender</label>
                      <div className="col-lg-9">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="gender_male"
                            defaultValue="option1"
                            defaultChecked
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
                    <div className="input-block mb-3 row">
                      <label className="col-lg-3 col-form-label">
                        Blood Group
                      </label>
                      <div className="col-lg-9">
                        <Select options={BloodGroup} placeholder="Select" styles={customStyles} />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="input-block mb-3 row">
                      <label className="col-lg-3 col-form-label">
                        Username
                      </label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-lg-3 col-form-label">Email</label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-lg-3 col-form-label">
                        Password
                      </label>
                      <div className="col-lg-9">
                        <input type="password" className="form-control" />
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-lg-3 col-form-label">
                        Repeat Password
                      </label>
                      <div className="col-lg-9">
                        <input type="password" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="card-title">Address</h4>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="input-block mb-3 row">
                      <label className="col-lg-3 col-form-label">
                        Address Line 1
                      </label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-lg-3 col-form-label">
                        Address Line 2
                      </label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-lg-3 col-form-label">State</label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="input-block mb-3 row">
                      <label className="col-lg-3 col-form-label">City</label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-lg-3 col-form-label">Country</label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-lg-3 col-form-label">
                        Postal Code
                      </label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
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
    </>
  );
};

export default HorizontalsubForm;

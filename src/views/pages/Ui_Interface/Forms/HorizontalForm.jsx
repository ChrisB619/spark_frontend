import React from "react";
import Select from "react-select";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import HorizontalsubForm from "./HorizontalsubForm";

const HorizontalForm = () => {
  const State = [
    { value: 1, label: "California" },
    { value: 2, label: "Texas" },
    { value: 3, label: "Florida" },
  ];
  const Country = [
    { value: 1, label: "USA" },
    { value: 2, label: "Franch" },
    { value: 3, label: "India" },
    { value: 3, label: "Spain" },
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
            maintitle="Horizontal Form"
            title="Dashboard"
            subtitle="Horizontal Form"
          />
          {/* /Page Header */}
          <HorizontalsubForm />
          <div className="row">
            <div className="col-md-12">
              <div className="card mb-0">
                <div className="card-header">
                  <h4 className="card-title mb-0">
                    Two Column Horizontal Form
                  </h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="row">
                      <div className="col-xl-6">
                        <h4 className="card-title">Personal Details</h4>
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
                          <label className="col-lg-3 col-form-label">
                            Password
                          </label>
                          <div className="col-lg-9">
                            <input type="password" className="form-control" />
                          </div>
                        </div>
                        <div className="input-block mb-3 row">
                          <label className="col-lg-3 col-form-label">
                            State
                          </label>
                          <div className="col-lg-9">
                            <Select
                              options={State}
                              placeholder="Select State"
                              styles={customStyles}
                            />
                          </div>
                        </div>
                        <div className="input-block mb-3 row">
                          <label className="col-lg-3 col-form-label">
                            About
                          </label>
                          <div className="col-lg-9">
                            <textarea
                              rows={4}
                              cols={5}
                              className="form-control"
                              placeholder="Enter message"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <h4 className="card-title">Personal details</h4>
                        <div className="row">
                          <label className="col-lg-3 col-form-label">
                            Name
                          </label>
                          <div className="col-lg-9">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="input-block mb-3">
                                  <input
                                    type="text"
                                    placeholder="First Name"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="input-block mb-3">
                                  <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="input-block mb-3 row">
                          <label className="col-lg-3 col-form-label">
                            Email
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="input-block mb-3 row">
                          <label className="col-lg-3 col-form-label">
                            Phone
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="input-block mb-3 row">
                          <label className="col-lg-3 col-form-label">
                            Address
                          </label>
                          <div className="col-lg-9">
                            <input
                              type="text"
                              className="form-control m-b-20"
                            />
                            <div className="row">
                              <div className="col-md-6">
                                <div className="input-block mb-3">
                                  <Select
                                    options={Country}
                                    placeholder="Select Country"
                                    styles={customStyles}
                                  />
                                </div>
                                <div className="input-block mb-3">
                                  <input
                                    type="text"
                                    placeholder="ZIP code"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="input-block mb-3">
                                  <input
                                    type="text"
                                    placeholder="State/Province"
                                    className="form-control"
                                  />
                                </div>
                                <div className="input-block mb-3">
                                  <input
                                    type="text"
                                    placeholder="City"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
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
        </div>
      </div>
    </>
  );
};

export default HorizontalForm;

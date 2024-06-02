import React from "react";
import Select from "react-select";

const VerticalsubForm = () => {
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
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-0">
            <div className="card-header">
              <h4 className="card-title mb-0">Two Column Vertical Form</h4>
            </div>
            <div className="card-body">
              <form action="#">
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="card-title">Personal details</h4>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Name:</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Password:</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">State:</label>
                      <Select
                        options={State}
                        placeholder="State State"
                        styles={customStyles}
                      />
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Your Message:</label>
                      <textarea
                        rows={5}
                        cols={5}
                        className="form-control"
                        placeholder="Enter message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h4 className="card-title">Personal details</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-block mb-3">
                          <label className="col-form-label">First Name:</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block mb-3">
                          <label className="col-form-label">Last Name:</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-block mb-3">
                          <label className="col-form-label">Email:</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block mb-3">
                          <label className="col-form-label">Phone:</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="input-block mb-3">
                          <label className="col-form-label">
                            Address line:
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-block mb-3">
                          <label className="col-form-label">Country:</label>
                          <Select
                            options={Country}
                            placeholder="Select Country"
                            styles={customStyles}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block mb-3">
                          <label className="col-form-label">
                            State/Province:
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-block mb-3">
                          <label className="col-form-label">ZIP code:</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block mb-3">
                          <label className="col-form-label">City:</label>
                          <input type="text" className="form-control" />
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
    </>
  );
};

export default VerticalsubForm;

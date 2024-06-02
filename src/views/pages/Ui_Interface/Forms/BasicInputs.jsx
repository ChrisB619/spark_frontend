import React from "react";
import Select from "react-select";
import Breadcrumbs from "../../../../components/Breadcrumbs";

const BasicInputs = () => {
  const selectoptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
    { label: "Option 4", value: "option4" },
    { label: "Option 5", value: "option5" },
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
            maintitle="Basic Inputs"
            title="Dashboard"
            subtitle="Basic Inputs"
          />
          {/* /Page Header */}
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Basic Inputs</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-md-2">
                        Text Input
                      </label>
                      <div className="col-md-10">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-md-2">
                        Password
                      </label>
                      <div className="col-md-10">
                        <input type="password" className="form-control" />
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-md-2">
                        Disabled Input
                      </label>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          disabled="disabled"
                        />
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-md-2">
                        Readonly Input
                      </label>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="readonly"
                          readOnly="readonly"
                        />
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-md-2">
                        Placeholder
                      </label>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Placeholder"
                        />
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-md-2">
                        File Input
                      </label>
                      <div className="col-md-10">
                        <input className="form-control" type="file" />
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-md-2">
                        Default Select
                      </label>
                      <div className="col-md-10">
                        <Select
                          options={selectoptions}
                          placeholder="-- Select --"
                          styles={customStyles}
                        />
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-md-2">Radio</label>
                      <div className="col-md-10">
                        <div className="radio">
                          <label className="col-form-label">
                            <input type="radio" name="radio" /> Option 1
                          </label>
                        </div>
                        <div className="radio">
                          <label className="col-form-label">
                            <input type="radio" name="radio" /> Option 2
                          </label>
                        </div>
                        <div className="radio">
                          <label className="col-form-label">
                            <input type="radio" name="radio" /> Option 3
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-md-2">
                        Checkbox
                      </label>
                      <div className="col-md-10">
                        <div className="checkbox">
                          <label className="col-form-label">
                            <input type="checkbox" name="checkbox" /> Option 1
                          </label>
                        </div>
                        <div className="checkbox">
                          <label className="col-form-label">
                            <input type="checkbox" name="checkbox" /> Option 2
                          </label>
                        </div>
                        <div className="checkbox">
                          <label className="col-form-label">
                            <input type="checkbox" name="checkbox" /> Option 3
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-md-2">
                        Textarea
                      </label>
                      <div className="col-md-10">
                        <textarea
                          rows={5}
                          cols={5}
                          className="form-control"
                          placeholder="Enter text here"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="input-block mb-3 mb-0 row">
                      <label className="col-form-label col-md-2">
                        Input Addons
                      </label>
                      <div className="col-md-10">
                        <div className="input-group">
                          <span className="input-group-text">$</span>
                          <input className="form-control" type="text" />
                          <button className="btn btn-primary" type="button">
                            Button
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card mb-0">
                <div className="card-header">
                  <h4 className="card-title mb-0">Input Sizes</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-md-2">
                        Large Input
                      </label>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder=".form-control-lg"
                        />
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-md-2">
                        Default Input
                      </label>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".form-control"
                        />
                      </div>
                    </div>
                    <div className="input-block mb-3 mb-0 row">
                      <label className="col-form-label col-md-2">
                        Small Input
                      </label>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder=".form-control-sm"
                        />
                      </div>
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

export default BasicInputs;

import React from "react";
import Select from "react-select";

const PersonalUpdates = () => {
  const selectoptions = [
    { label: "Select", value: "option1" },
    { label: "Yes", value: "option2" },
    { label: "No", value: "option3" },
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
      <section className="review-section">
        <div className="review-header text-center">
          <h3 className="review-title">Personal Updates</h3>
          <p className="text-muted">Lorem ipsum dollar</p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-bordered review-table mb-0">
                <thead>
                  <tr>
                    <th className="width-pixel">#</th>
                    <th>Last Year</th>
                    <th>Yes/No</th>
                    <th>Details</th>
                    <th>Current Year</th>
                    <th>Yes/No</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Married/Engaged?</td>
                    <td>
                      <Select
                        options={selectoptions}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>Marriage Plans</td>
                    <td>
                      <Select
                        options={selectoptions}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Higher Studies/Certifications?</td>
                    <td>
                      <Select
                        options={selectoptions}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>Plans For Higher Study</td>
                    <td>
                      <Select
                        options={selectoptions}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Health Issues?</td>
                    <td>
                      <Select
                        options={selectoptions}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>Certification Plans</td>
                    <td>
                      <Select
                        options={selectoptions}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Others</td>
                    <td>
                      <Select
                        options={selectoptions}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>Others</td>
                    <td>
                      <Select
                        options={selectoptions}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalUpdates;

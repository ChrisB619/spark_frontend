import React from "react";
import Select from "react-select";

const ROUseOnly = () => {
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
          <h3 className="review-title">For RO's Use Only</h3>
          <p className="text-muted">Lorem ipsum dollar</p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-bordered review-table mb-0">
                <thead>
                  <tr>
                    <th />
                    <th>Yes/No</th>
                    <th>If Yes - Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>The Team member has Work related Issues</td>
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
                    <td>The Team member has Leave Issues</td>
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
                    <td>The team member has Stability Issues</td>
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
                    <td>The Team member exhibits non-supportive attitude</td>
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
                    <td>
                      Any other points in specific to note about the team member
                    </td>
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
                    <td>Overall Comment /Performance of the team member</td>
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

export default ROUseOnly;

import React, { useState } from "react";

const HRDUseOnly = () => {
  const rowsData = [
    {
      label:
        "KRAs Target Achievement Points (will be considered from the overall score specified in this document by the Reporting officer)",
      values: ["", "", ""],
    },
    {
      label:
        "Professional Skills Scores(RO's Points furnished in the skill & attitude assessment sheet will be considered)",
      values: ["", "", ""],
    },
    {
      label:
        "Personal Skills Scores(RO's Points furnished in the skill & attitude assessment sheet will be considered)",
      values: ["", "", ""],
    },
    {
      label: "Special Achievements Score (HOD to furnish)",
      values: ["", "", ""],
    },
    {
      label: "Overall Total Score",
      values: ["", "", ""],
    },
  ];

  const [rows, setRows] = useState(rowsData);

  const handleInputChange = (rowIndex, columnIndex, value) => {
    const updatedRows = rows.map((row, index) => {
      if (index === rowIndex) {
        const updatedValues = [...row.values];
        updatedValues[columnIndex] = value;
        return { ...row, values: updatedValues };
      }
      return row;
    });
    setRows(updatedRows);
  };
  return (
    <>
      <section className="review-section">
        <div className="review-header text-center">
          <h3 className="review-title">For HRD's Use Only</h3>
          <p className="text-muted">Lorem ipsum dollar</p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-bordered review-table mb-0">
                <thead>
                  <tr>
                    <th>Overall Parameters</th>
                    <th>Available Points</th>
                    <th>Points Scored</th>
                    <th>RO's Comment</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      <td>{row.label}</td>
                      {row.values.map((value, columnIndex) => (
                        <td key={columnIndex}>
                          <input
                            type="text"
                            className="form-control"
                            value={value}
                            onChange={(e) =>
                              handleInputChange(
                                rowIndex,
                                columnIndex,
                                e.target.value
                              )
                            }
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table table-bordered review-table mb-0">
              <thead>
                <tr>
                  <th />
                  <th>Name</th>
                  <th>Signature</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Employee</td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                </tr>
                <tr>
                  <td>Reporting Officer</td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                </tr>
                <tr>
                  <td>HOD</td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                </tr>
                <tr>
                  <td>HRD</td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
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
    </>
  );
};

export default HRDUseOnly;

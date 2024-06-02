import React from "react";

const ProfessionalExcellence = () => {
  return (
    <>
      <section className="review-section professional-excellence">
        <div className="review-header text-center">
          <h3 className="review-title">Professional Excellence</h3>
          <p className="text-muted">Lorem ipsum dollar</p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-bordered review-table mb-0">
                <thead>
                  <tr>
                    <th className="width-pixel">#</th>
                    <th>Key Result Area</th>
                    <th>Key Performance Indicators</th>
                    <th>Weightage</th>
                    <th>
                      Percentage achieved <br />( self Score )
                    </th>
                    <th>
                      Points Scored <br />( self )
                    </th>
                    <th>
                      Percentage achieved <br />( RO's Score )
                    </th>
                    <th>
                      Points Scored <br />( RO )
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan={2}>1</td>
                    <td rowSpan={2}>Production</td>
                    <td>Quality</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        defaultValue={30}
                      />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        defaultValue={0}
                      />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        defaultValue={0}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>TAT (turn around time)</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        defaultValue={30}
                      />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        defaultValue={0}
                      />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        defaultValue={0}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Process Improvement</td>
                    <td>PMS,New Ideas</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        defaultValue={10}
                      />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        defaultValue={0}
                      />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        defaultValue={0}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Team Management</td>
                    <td>Team Productivity,dynaics,attendance,attrition</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        defaultValue={5}
                      />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        defaultValue={0}
                      />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        defaultValue={0}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Knowledge Sharing</td>
                    <td>Sharing the knowledge for team productivity </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        defaultValue={5}
                      />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        defaultValue={0}
                      />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        defaultValue={0}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Reporting and Communication</td>
                    <td>Emails/Calls/Reports and Other Communication</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        defaultValue={5}
                      />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        defaultValue={0}
                      />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        defaultValue={0}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3} className="text-center">
                      Total{" "}
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        defaultValue={85}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        defaultValue={0}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        defaultValue={0}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        defaultValue={0}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        readOnly
                        defaultValue={0}
                      />
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

export default ProfessionalExcellence;
